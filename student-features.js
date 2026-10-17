// ==========================================
// 1. Smart Question Filtering
// ==========================================
function filterQuestionsSmartly(allQuestions, userHistory) {
    const wantsUnused = document.getElementById('chk-unused').checked;
    const wantsCorrect = document.getElementById('chk-correct').checked;
    const wantsIncorrect = document.getElementById('chk-incorrect').checked;
    const wantsFlagged = document.getElementById('chk-flagged').checked;

    return allQuestions.filter(question => {
        let isCorrect = userHistory.correct.includes(question.id);
        let isIncorrect = userHistory.incorrect.includes(question.id);
        let isFlagged = userHistory.flagged.includes(question.id);
        let isUnused = !isCorrect && !isIncorrect;

        if (wantsUnused && isUnused) return true;
        if (wantsCorrect && isCorrect) return true;
        if (wantsIncorrect && isIncorrect) return true;
        if (wantsFlagged && isFlagged) return true;

        return false; 
    });
}

// ==========================================
// 2. Auto-Save Feature (Every 5 questions)
// ==========================================
let questionsAnsweredInSession = 0; 
let pendingProgress = { correct: [], incorrect: [], flagged: [] }; 

function onStudentAnswer(questionId, isCorrect, isFlaggedStatus) {
    if (isCorrect) {
        pendingProgress.correct.push(questionId);
    } else {
        pendingProgress.incorrect.push(questionId);
    }
    
    if (isFlaggedStatus) {
        pendingProgress.flagged.push(questionId);
    }

    questionsAnsweredInSession++;

    if (questionsAnsweredInSession % 5 === 0) {
        saveProgressToFirebase(); 
    }
}

async function saveProgressToFirebase() {
    const user = firebase.auth().currentUser;
    if (!user) return; 

    try {
        const userRef = db.collection("users").doc(user.uid);
        
        await userRef.set({
            correct: firebase.firestore.FieldValue.arrayUnion(...pendingProgress.correct),
            incorrect: firebase.firestore.FieldValue.arrayUnion(...pendingProgress.incorrect),
            flagged: firebase.firestore.FieldValue.arrayUnion(...pendingProgress.flagged),
            lastSavedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        console.log("Auto-save: Progress successfully saved to the cloud.");
        
        pendingProgress = { correct: [], incorrect: [], flagged: [] };

    } catch (error) {
        console.error("Auto-save error:", error);
    }
}

window.addEventListener("beforeunload", (event) => {
    if (pendingProgress.correct.length > 0 || pendingProgress.incorrect.length > 0) {
        saveProgressToFirebase();
    }
});
