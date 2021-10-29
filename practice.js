
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyASVjy7Dsf-bfhd9ZO5z2Gj7Qz95tqAMVs",
    authDomain: "kwitter-13ce3.firebaseapp.com",
    databaseURL: "https://kwitter-13ce3-default-rtdb.firebaseio.com",
    projectId: "kwitter-13ce3",
    storageBucket: "kwitter-13ce3.appspot.com",
    messagingSenderId: "649813516498",
    appId: "1:649813516498:web:adad146f18d7725a2b8d0b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser() {
   user_name=document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       purpose:"adding user"
   });  
  }