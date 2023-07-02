
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getMessaging, onMessage, getToken } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8zhwpjIYV1NY2ccesPK37MKA1wBdFgjA",
    authDomain: "deepstore-327da.firebaseapp.com",
    projectId: "deepstore-327da",
    storageBucket: "deepstore-327da.appspot.com",
    messagingSenderId: "640699131725",
    appId: "1:640699131725:web:7a606614c00c56dc16f904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
Notification
    .requestPermission(function(permission){
        alert(permission)
    })
    .then(function () {
        alert('Notification permission granted.');

        console.log("Notification permission granted.");
        return getToken(messaging, { vapidKey: 'BK0INhjt8HhZqLCs6vjk1seBLCmEp3MPpsqaYK5ewqJYbrzEw5NPyPFEvCHhgoNZTSzeOanu6s3tc2j8bXDibq8' })

    }).then(function (token) {
        localStorage.setItem('fcm', token);
    })
    .catch(function (err) {
        alert(JSON.stringify(err));
        console.log("Unable to get permission to notify.", err);
    });