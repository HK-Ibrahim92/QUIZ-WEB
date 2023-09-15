
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore , collection, addDoc,doc, setDoc,serverTimestamp,updateDoc,arrayUnion,getDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKXzppzWmzSrRgXCeVWmJk8x7ulYnVMG4",
  authDomain: "ib-database-projects.firebaseapp.com",
  projectId: "ib-database-projects",
  storageBucket: "ib-database-projects.appspot.com",
  messagingSenderId: "353792985191",
  appId: "1:353792985191:web:96963fd52b4ef15f2cecc2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    
      Swal.fire({title:'Sign up Successful!',showConfirmButton: false, // Hide the "OK" button
      timer: 1000});
    

    
    // const signup = document.getElementById("signup")
    // container.classList.remove('right-panel-active');

    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    return res.user;
  } catch (error) {
    throw error;
  }
};

const signIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    throw error;
  }
};

const sendVerificationEmail = (user) => {
  sendEmailVerification(user).then(() => {
    console.log("Verification email sent.");
  });
};

const observeAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
    
  });
};

function signOutUser() {
  return signOut(auth)
}

const userscore = async (testName, finalscore) => {
  const user = auth.currentUser;
 
  console.log(user)
  if (user) {
    const useremail = user.email;
    console.log(useremail);
    const testScores = [];

    if (finalscore) {
      testScores.push({ test: testName, score: finalscore });
    }

    try {
      const userDocRef = doc(db, "students", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // The user document already exists, update it.
        await updateDoc(userDocRef, {
         scores: arrayUnion(...testScores),
          timestamp: serverTimestamp(), // Add new scores to the existing array
        });

        console.log("Document updated with new scores.");
      } else {
        // The user document doesn't exist, create it.
        await setDoc(userDocRef, {
          email: useremail,
          scores: testScores,
          userid: user.uid,
          timestamp: serverTimestamp(),
        });

        console.log("Document created with initial scores.");
      }
    } catch (e) {
      console.error("Error adding/updating document: ", e);
    }
  }
};



const  result=async()=>{


  const user = auth.currentUser;

  if (user) {
    try {
      const userDocRef = doc(db, "students", user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const scores = userData.scores || []; // 

        console.log("User Scores:", scores);
        const scoresList = document.querySelector("#scores-list");
        scoresList.innerHTML = ""; // Clear previous scores

        scores.forEach((score, index) => {
          const listItem = document.createElement("li");
          listItem.textContent = `Test : ${score.test}, Score: ${score.score}`;
          scoresList.appendChild(listItem);
        });

        // Open modal
        const resultModal = document.getElementById('resultModal');
        resultModal.style.display = 'block';

        // Close modal event listener
        const closeResultModal = document.querySelector('.close');
        closeResultModal.addEventListener('click', () => {
          resultModal.style.display = 'none';
        });

        window.onclick = (event) => {
          if (event.target == resultModal) {
            resultModal.style.display = 'none';
          }
        };
      } else {
        const scoresList = document.querySelector("#scores-list");
        const listItem = document.createElement("li");
        listItem.textContent = `Result not found`;
        scoresList.appendChild(listItem);
      
      // Open modal
      const resultModal = document.getElementById('resultModal');
      resultModal.style.display = 'block';

      // Close modal event listener
      const closeResultModal = document.querySelector('.close');
      closeResultModal.addEventListener('click', () => {
        resultModal.style.display = 'none';
      });

      window.onclick = (event) => {
        if (event.target == resultModal) {
          resultModal.style.display = 'none';
        }
      };
        
      }
    } catch (e) {
      console.error("Error retrieving user scores: ", e);
    }
  }
};


// Call the function to retrieve and display scores






export { signUp, signIn, sendVerificationEmail, observeAuthState, signOutUser,userscore ,result};
