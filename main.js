// main.js
import { signUp, signIn, sendVerificationEmail, observeAuthState,signOutUser } from "./authservice.js";

const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

// ... Your other event listeners ...



    let signup = document.getElementById("signup");
    signup.addEventListener('click', async () => {
      let user = document.getElementById("user").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();
    
      if (user && email && password) {
        try {
          const user = await signUp(email, password);
        //   sendVerificationEmail(user);
          // Rest of your signup logic...
        } catch (error) {
          Swal.fire('Error', error.message, 'error');
        }
      } else {
        alert("Please enter all fields.");
      }
    });
    
    // Your event listener code here



let login = document.getElementById("login");
login.addEventListener('click', async () => {
  let login_email = document.getElementById("logemail").value.trim();
  let login_password = document.getElementById("logpassword").value.trim();

  if (login_email && login_password) {
    try {
      const user = await signIn(login_email, login_password);
      document.getElementById("logemail").value = ''
      document.getElementById("logpassword").value = ''
      window.location.href = 'quiz.html'
    } catch (error) {
      Swal.fire('Login Failed', error.message, 'error');
    }
  }
});

// observeAuthState((user) => {
//   if (user) {
//     // User is signed in.
//     const uid = user.uid;
//     console.log(user);
//   } else {
//     // No user is signed in.
//     console.log("User not signed in.");
//   }
// });

function signUpButton() {
    container.classList.add('right-panel-active');
};

function signInButton() {
    container.classList.remove('right-panel-active');

}

signUpBtn.addEventListener('click',signUpButton) 
signInBtn.addEventListener('click',signInButton);
