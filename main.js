import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABykRd2fghI-8Z05r54tX6Ian09Sd1-AA",
  authDomain: "finmanager1520.firebaseapp.com",
  projectId: "finmanager1520",
  storageBucket: "finmanager1520.appspot.com",
  messagingSenderId: "390686401782",
  appId: "1:390686401782:web:cd9e614b77a9cc21f578d7",
  measurementId: "G-RCXREFWNLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const fullName = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submit = document.getElementById('submit');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submit.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (
    fullName.value === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    alert('All fields are required');
    return;
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  } else if (
    password.length < 8 ||
    password.search(/[a-z]/) === -1 ||
    password.search(/[A-Z]/) === -1 ||
    password.search(/[0-9]/) === -1 ||
    password.search(/[!@#$%^&*()]/) === -1
  ) {
    alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    return;
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Registration successful');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
