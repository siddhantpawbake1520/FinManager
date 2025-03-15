import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

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
const analytics = getAnalytics(app);

const fullName = document.getElementById('fullName');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
const submit = document.getElementById('submit');
  submit.addEventListener('click',function(event) {
    event.preventDefault();
    if (fullName.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
      alert('All fields are required');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else if (password.length < 8 || password.search(/[a-z]/) === -1 || password.search(/[A-Z]/) === -1 || password.search(/[0-9]/) === -1 || password.search(/[!@#$%^&*()]/) === -1) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    } else if (password!== confirmPassword) {
      alert('Passwords do not match');
    }
    createUserWithEmailandPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      alert("Successfully created")
    })
     .catch((Error) => {
      const errorCode=error.code;
      const errorMessage=error.message;
      alert(errorCode,errorMessage);
     });
    });