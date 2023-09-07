// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// Define your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

function signUpButton() {
    container.classList.add('right-panel-active');
};

function signInButton() {
    container.classList.remove('right-panel-active');
}

signUpBtn.addEventListener('click', signUpButton);
signInBtn.addEventListener('click', signInButton);

let forgot = document.getElementById("forgot");

function forgotpassword() {
    Swal.fire('Keep Calm !', 'Try to remember your password.');
    H
}

forgot.addEventListener('click', forgotpassword);

let signup = document.getElementById("signup");

signup.addEventListener('click', async () => {
    let user = document.getElementById("user").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (user, email, password) {
        const allvalue = { user, email, password }
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const student = res.user;
                console.log("signup successful :", student)

                Swal.fire('Sign up Successful!');

                const signup = document.getElementById("signup")
                container.classList.remove('right-panel-active');

                document.getElementById('user').value = '';
                document.getElementById('password').value = '';
                document.getElementById('email').value = '';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire('error', error.message, 'error');
            });
    } else {
        alert("plaese enter value")
    }
})

let login = document.getElementById("login");

login.addEventListener('click', () => {
    let login_email = document.getElementById("logemail").value.trim();
    let login_password = document.getElementById("logpassword").value.trim();

    console.log(login_email, login_password);

    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((res) => {

            const user = res.user;
            document.getElementById("logemail").value = ''
            document.getElementById("logpassword").value = ''
            window.location.href = 'quiz.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Swal.fire('Login Failed', error.message, 'error');
        });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid
        console.log(user)

    } else {
        console.log("nh chkla")
    }
})

export { sendEmailVerification, auth, onAuthStateChanged }
