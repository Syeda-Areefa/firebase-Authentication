import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

//signup function
let signUp = ()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("Password").value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("signup successfull")
    
  })
  .catch((error) => {
    console.log(error.message);
  });
}
if(window.location.pathname=="/signup.html"){
  let sign_up = document.getElementById("sign_up");
  sign_up.addEventListener("click",signUp);
}

  //signIn function
let signIn = ()=> {
  let email = document.getElementById("email").value
  let password = document.getElementById("Password").value
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("login successfull")
  })
  .catch((error) => {
    console.log(error.code);
  });
}
if(window.location.pathname=="/index.html"){
let sign_in = document.getElementById("sign_in");
sign_in.addEventListener("click",signIn);
}



