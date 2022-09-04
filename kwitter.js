const firebaseConfig = {
   apiKey: "AIzaSyC0gZWwpg4VVi4SIIrB0xJUF_hKzuS9d3g",
   authDomain: "kwitter-f9785.firebaseapp.com",
   projectId:   "kwitter-f9785",
   storageBucket: "kwitter-f9785.appspot.com",
   messagingSenderId: "431046908261",
   appId: "1:431046908261:web:b659e3ee7857d41f7e298c"
 };

function addUser()
 {
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
 }

 firebaseConfig.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0
 });