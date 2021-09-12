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



    username = localStorage.getItem("name");
    room_name = localStorage.getItem("room_name");

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name : username ,
         message : message,
         like : 0
      });

      document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>"
      like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id +" value = "+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like + "</span></button><hr>";

      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML +=row;
//End code
   } });  }); }
getData();

function updateLike(message_id){
console.log("clicked on like button - " + message_id);
button_id = message_id;
like = document.getElementById(button_id).value;
update_Like=Number(like) +1;
console.log(update_Like);
firebase.database().ref(room_name).child(message_id).update({
      like : update_Like
});
}

function logout(){
      localStorage.removeItem("person name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
