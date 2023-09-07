
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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

const signUp = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    Swal.fire('Sign up Successful!');
    const signup = document.getElementById("signup")
    container.classList.remove('right-panel-active');

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

export { signUp, signIn, sendVerificationEmail, observeAuthState, signOutUser };
