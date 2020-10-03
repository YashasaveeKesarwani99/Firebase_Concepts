import React from "react";

var firebaseConfig = {
  apiKey: "AIzaSyBJPAz3zw5k6XeASHbtP3jifzDQ08MjPOk",
  authDomain: "contact-register.firebaseapp.com",
  databaseURL: "https://contact-register.firebaseio.com",
  projectId: "contact-register",
  storageBucket: "contact-register.appspot.com",
  messagingSenderId: "619990506928",
  appId: "1:619990506928:web:16fcb78378e9b21c7b0a75"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
