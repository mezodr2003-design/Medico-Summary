// ==========================================
// 1. Student Authentication (Signup, Login, Logout)
// ==========================================
function openStudentModal() { 
    const m = document.getElementById('student-modal');
    if (m) m.classList.remove('hidden'); 
}

function closeStudentModal() { 
    const m = document.getElementById('student-modal');
    if (m) m.classList.add('hidden'); 
}

async function studentSignup() {
    let rawInput = document.getElementById('student-email').value.trim();
    const password = document.getElementById('student-password').value;
    const btn = document.getElementById('student-signup-btn');
    
    if(!rawInput || password.length < 6) return alert("Please enter a username and a password (min 6 chars).");
    
    const email = rawInput.includes('@') ? rawInput : `${rawInput}@medico.com`;

    try {
        btn.innerText = "Creating Account...";
        btn.disabled = true;
        await window.authTools.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        closeStudentModal();
        alert("Account created successfully! Your progress will now sync automatically across all devices.");
    } catch(error) {
        alert("Sign Up Error: " + error.message);
    } finally {
        btn.innerText = "Sign Up";
        btn.disabled = false;
    }
}

async function studentLogin() {
    let rawInput = document.getElementById('student-email').value.trim();
    const password = document.getElementById('student-password').value;
    const btn = document.getElementById('student-login-btn');
    
    if(!rawInput || !password) return alert("Please enter your username and password.");
    
    const email = rawInput.includes('@') ? rawInput : `${rawInput}@medico.com`;

    try {
        btn.innerText = "Logging in...";
        btn.disabled = true;
        await window.authTools.signInWithEmailAndPassword(window.firebaseAuth, email, password);
        closeStudentModal();
    } catch(error) {
        alert("Login Error: " + error.message);
    } finally {
        btn.innerText = "Login";
        btn.disabled = false;
    }
}

function logoutStudent() {
    if(confirm("Do you want to log out? Your progress is safely saved in the cloud.")) {
        window.authTools.signOut(window.firebaseAuth).then(() => {
            // Reset local memory when logged out
            if (typeof userStats !== 'undefined') {
                userStats = { correct: [], incorrect: [], flagged: [] };
                localStorage.setItem('medico_stats', JSON.stringify(userStats));
            }
            if(typeof updateAvailableCount === 'function') updateAvailableCount();
            alert("Logged out successfully.");
        });
    }
}

// ==========================================
// 2. Fetch Progress from Cloud (Device B Sync)
// ==========================================
async function fetchStudentProgressFromCloud(user) {
    if (!user) return;
    try {
        const { doc, getDoc } = window.firestoreTools;
        const userRef = doc(window.db, "student_progress", user.uid);
        const docSnap = await getDoc(userRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            const cloudStats = data.stats || {};
            
            // Merge cloud data with device data without duplicates
            if (typeof userStats !== 'undefined') {
                userStats.correct = [...new Set([...(userStats.correct || []), ...(cloudStats.correct || [])])];
                userStats.incorrect = [...new Set([...(userStats.incorrect || []), ...(cloudStats.incorrect || [])])];
                userStats.flagged = [...new Set([...(userStats.flagged || []), ...(cloudStats.flagged || [])])];

                // Remove from incorrect if marked correct
                userStats.incorrect = userStats.incorrect.filter(id => !userStats.correct.includes(id));
                
                // Save to localStorage immediately
                localStorage.setItem('medico_stats', JSON.stringify(userStats));
                
                if (typeof updateAvailableCount === 'function') updateAvailableCount();
                if (typeof updateMatrixUI === 'function') updateMatrixUI();
                console.log("Cloud progress synced across devices successfully!");
            }
        }
    } catch (error) {
        console.error("Error fetching progress from cloud:", error);
    }
}

// ==========================================
// 3. Real-Time Debounced Cloud Auto-Save
// ==========================================
let cloudSyncTimeout = null;

function syncProgressToFirebaseDebounced() {
    const user = window.firebaseAuth?.currentUser;
    if (!user) return; // User is not logged in

    clearTimeout(cloudSyncTimeout);
    // Wait 1.2 seconds after the last action, then push to Firebase in 1 single write
    cloudSyncTimeout = setTimeout(async () => {
        try {
            const { doc, setDoc, serverTimestamp } = window.firestoreTools;
            const userRef = doc(window.db, "student_progress", user.uid);

            await setDoc(userRef, {
                email: user.email,
                stats: typeof userStats !== 'undefined' ? userStats : {},
                lastSavedAt: serverTimestamp()
            }, { merge: true });

            console.log("Auto-save: Cloud progress successfully updated!");
        } catch (error) {
            console.warn("Auto-save paused (device is offline):", error.message);
        }
    }, 1200);
}

// Hook called by index.html when a question is answered
function onStudentAnswer(questionId, isCorrect, isFlaggedStatus) {
    syncProgressToFirebaseDebounced();
}

// Hook called when a student toggles flag
function onStudentFlagToggle(questionId, isFlagged) {
    syncProgressToFirebaseDebounced();
}

// Save before leaving or closing tab
window.addEventListener("beforeunload", () => {
    const user = window.firebaseAuth?.currentUser;
    if (user && typeof userStats !== 'undefined') {
        const { doc, setDoc, serverTimestamp } = window.firestoreTools;
        setDoc(doc(window.db, "student_progress", user.uid), {
            email: user.email,
            stats: userStats,
            lastSavedAt: serverTimestamp()
        }, { merge: true }).catch(() => {});
    }
});
