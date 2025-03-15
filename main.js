import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABykRd2fghI-8Z05r54tX6Ian09Sd1-AA",
  authDomain: "finmanager1520.firebaseapp.com",
  projectId: "finmanager1520",
  storageBucket: "finmanager1520.firebasestorage.app",
  messagingSenderId: "390686401782",
  appId: "1:390686401782:web:cd9e614b77a9cc21f578d7",
  measurementId: "G-RCXREFWNLC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const analytics = getAnalytics(app);
const submit = document.getElementById('submit');
submit.addEventListener('click',function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      alert("Successfully created")
    })
     .catch((Error) => {
      const errorCode=Error.code;
      const errorMessage=Error.message;
      alert(errorCode,errorMessage);
     });
    });