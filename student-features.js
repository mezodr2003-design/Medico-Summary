// ==========================================
// 1. Student Authentication (Signup & Login)
// ==========================================
function openStudentModal() { document.getElementById('student-modal').classList.remove('hidden'); }
function closeStudentModal() { document.getElementById('student-modal').classList.add('hidden'); }

async function studentSignup() {
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const btn = document.getElementById('student-signup-btn');
    
    if(!email || password.length < 6) return alert("Please enter a valid email and a password (min 6 chars).");
    
    try {
        btn.innerText = "Creating Account...";
        await window.authTools.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        closeStudentModal();
        alert("Account created successfully! Your progress will now be saved and synced automatically.");
    } catch(error) {
        alert("Sign Up Error: " + error.message);
    } finally {
        btn.innerText = "Sign Up";
    }
}

async function studentLogin() {
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const btn = document.getElementById('student-login-btn');
    
    if(!email || !password) return alert("Please enter your email/username and password.");
    
    try {
        btn.innerText = "Logging in...";
        await window.authTools.signInWithEmailAndPassword(window.firebaseAuth, email, password);
        closeStudentModal();
        // UI updates and progress fetching are handled by onAuthStateChanged in index.html
    } catch(error) {
        alert("Login Error: " + error.message);
    } finally {
        btn.innerText = "Login";
    }
}

function logoutStudent() {
    if(confirm("Do you want to log out? Your progress is safely saved in the cloud.")) {
        window.authTools.signOut(window.firebaseAuth).then(() => {
            // Reset local memory when logged out
            userStats = { correct: [], incorrect: [], flagged: [] };
            localStorage.setItem('medico_stats', JSON.stringify(userStats));
            if(typeof updateAvailableCount === 'function') updateAvailableCount();
            alert("Logged out successfully.");
        });
    }
}

// Download student history from the cloud when they log in
async function fetchStudentProgressFromCloud(user) {
    try {
        const { doc, getDoc } = window.firestoreTools;
        const userRef = doc(window.db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            userStats.correct = data.correct || [];
            userStats.incorrect = data.incorrect || [];
            userStats.flagged = data.flagged || [];
            
            // Save to localStorage immediately
            localStorage.setItem('medico_stats', JSON.stringify(userStats));
            
            if (typeof updateAvailableCount === 'function') updateAvailableCount();
            console.log("✅ Cloud progress loaded successfully!");
        }
    } catch (error) {
        console.error("Error fetching progress from cloud", error);
    }
}

// ==========================================
// 2. Auto-Save Feature (Every 5 questions)
// ==========================================
let questionsAnsweredInSession = 0; 
let pendingProgress = { correct: [], incorrect: [], flagged: [] }; 

function onStudentAnswer(questionId, isCorrect, isFlaggedStatus) {
    if (isCorrect) pendingProgress.correct.push(questionId);
    else pendingProgress.incorrect.push(questionId);
    
    if (isFlaggedStatus) pendingProgress.flagged.push(questionId);

    questionsAnsweredInSession++;

    if (questionsAnsweredInSession % 5 === 0) {
        saveProgressToFirebase(); 
    }
}

async function saveProgressToFirebase() {
    const user = window.firebaseAuth.currentUser;
    if (!user) return; // Ignore if user is not logged in

    // Only save if there's new data
    if (pendingProgress.correct.length === 0 && pendingProgress.incorrect.length === 0 && pendingProgress.flagged.length === 0) return;

    try {
        const { doc, setDoc, arrayUnion, serverTimestamp } = window.firestoreTools;
        const userRef = doc(window.db, "users", user.uid);
        
        let updateData = { lastSavedAt: serverTimestamp() };
        if (pendingProgress.correct.length > 0) updateData.correct = arrayUnion(...pendingProgress.correct);
        if (pendingProgress.incorrect.length > 0) updateData.incorrect = arrayUnion(...pendingProgress.incorrect);
        if (pendingProgress.flagged.length > 0) updateData.flagged = arrayUnion(...pendingProgress.flagged);

        await setDoc(userRef, updateData, { merge: true });

        console.log("✅ Auto-save: Progress saved to the cloud.");
        pendingProgress = { correct: [], incorrect: [], flagged: [] };

    } catch (error) {
        console.error("❌ Auto-save error:", error);
    }
}

// Emergency save on browser close or refresh
window.addEventListener("beforeunload", (event) => {
    saveProgressToFirebase();
});
