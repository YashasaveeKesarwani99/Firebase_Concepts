# Firebase_Concepts

Created with CodeSandbox

this file specifically projects on using firebase with react based enviroment

# Firebase

firebase is google service which provides easy enviroment for backend.
It provides you with realtime database free for a month.

# types of project that can be made using this service

1. IOS
2. Android
3. web apps

# configuration

WebApps - firebase provides three ways to configure and connect our app with firebase database. The 'firebase' package should be installed
in the app using npm or yarn

the config setting for react base app looks like this
  
  
 var firebaseConfig = {
apiKey: "AIzaS5k6XeASHbtP3jifzDQ08MjPOk",
authDomain: "contact-register.firebaseapp.com",
databaseURL: "https://contact-reer.firebaseio.com",
projectId: "contact-regisr",
storageBucket: "contaegister.appspot.com",
messagingSenderId: "90506928",
appId: "1:6199928:web:78e9b21c7b0a75"
};
#info are tampered for privacy issues
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

these statements returns an object which are perform multiple tasks on data ex- 1. create user 2. login existing user 3. posting data 4. getting data
extra

# Example web app used

We'll make a simple web app to show how firebase works, we will be making a contact register.

# Additional things learned

1.one can pass data also from parent to child and then process it after which it can return it to the parent.

2. One can easily loop through an array with map function but if its an object you have to first loop
   through the keys.
3. useEffect has two parameter, one is a callback function and the second one is an empty array which determines how many times it will be executed.
