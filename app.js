


import{sendEmailVerification,auth,onAuthStateChanged}from './login'



let emailverify=document.getElementById("emailverify")

emailverify.addEventListener('click',()=>{
    
    sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("sent")
  });
  
})



