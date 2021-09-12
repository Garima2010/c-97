// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDjhmSSEBwW2LOPS1y8o4ZBTnPtzPJPRL4",
      authDomain: "kwitter-app-b5932.firebaseapp.com",
      databaseURL: "https://kwitter-app-b5932-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b5932",
      storageBucket: "kwitter-app-b5932.appspot.com",
      messagingSenderId: "1070099278610",
      appId: "1:1070099278610:web:7cca72b6438f0752a9a1cb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
person_name = localStorage.getItem("name");
document.getElementById("user_name").innerHTML = "Welcome " + person_name + "!";
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
  row ="<div class= 'room_name' id = "+Room_names+" onclick = 'redirecToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function roomname(){
      add_room = document.getElementById("room_name").value;
     firebase.database().ref("/").child(add_room).update({
           purpose:"adding room names"
     });
     localStorage.setItem("room_name" , add_room);
     window.location = "kwitter_page.html";
}

function redirecToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("person name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}