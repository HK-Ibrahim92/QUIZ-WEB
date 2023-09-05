
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyDKXzppzWmzSrRgXCeVWmJk8x7ulYnVMG4",
    authDomain: "ib-database-projects.firebaseapp.com",
    projectId: "ib-database-projects",
    storageBucket: "ib-database-projects.appspot.com",
    messagingSenderId: "353792985191",
    appId: "1:353792985191:web:96963fd52b4ef15f2cecc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');



signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

let forgot = document.getElementById("forgot")
forgot.addEventListener('click', () => {

    Swal.fire('Keep Calm !', 'Try to remember your password.');
    H
})


let signup = document.getElementById("signup")


signup.addEventListener('click', async () => {


    let user = document.getElementById("user").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    if (user, email, password) {
        const allvalue = { user, email, password }
        await
            createUserWithEmailAndPassword(auth, email, password)
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


        // users.push(allvalue)



    } else {
        alert("plaese enter value")
    }

})



let login = document.getElementById("login")

login.addEventListener('click', () => {


    let login_email = document.getElementById("logemail").value.trim();
    let login_password = document.getElementById("logpassword").value.trim();

    console.log(login_email, login_password);

    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((res) => {

            const user = res.user;
            // console.log("login successful", user)
            document.getElementById("logemail").value = ''
            document.getElementById("logpassword").value = ''
            window.location.href = 'quiz.html'
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Swal.fire('Login Failed', error.message, 'error');
        });

    //  if (login_email && login_password) {
    //      const foundUser = users.find(user => user.password === login_password && user.email === login_email);

    //      if (foundUser) {
    //          Swal.fire('Welcome!', 'You are now logged in.', 'success');
    //          window.open('quiz.html') 
    //      } else {
    //          // If no matching user is found
    //         
    //      }
    //  } else {
    //      
    //  }

})

onAuthStateChanged(auth,(user)=>{
    if(user){
        const uid=user.uid
        console.log(user)
        
    }else{
        console.log("nh chkla")
    }
})



// // Get the "Start Quiz 1" button
// const startQuiz1Btn = document.querySelector('.start-quiz-btn');

// // Get the quiz popup and close button
// const quizPopup = document.getElementById('quiz-popup');
// const closePopupBtn = document.getElementById('close-popup');

// // Add click event listeners with functions
// startQuiz1Btn.addEventListener('click', function() {
//     quizPopup.style.display = 'flex';
// });

// closePopupBtn.addEventListener('click', function() {
//     quizPopup.style.display = 'none';
// });


export {sendEmailVerification,auth,onAuthStateChanged}