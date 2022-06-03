// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4xh0wR1t214mYpWKPwpHM5bUJKdFpHH0",
  authDomain: "kwitter-project-abed1.firebaseapp.com",
  projectId: "kwitter-project-abed1",
  storageBucket: "kwitter-project-abed1.appspot.com",
  messagingSenderId: "439656599905",
  appId: "1:439656599905:web:5cb0ff4fd97cfa109f3520"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("name");
roomname = localStorage.getItem("roomname");
function send (){
msg = document.getElementById("ip").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
likes:0   
});
document.getElementById("ip").value ="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
Name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_tag = "<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
message_tag = "<h4>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' onclick = 'updateLike(this.id)'>";
span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>: "+like+"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
  } });  }); }
getData();

function updateLike(message_id){
console.log(message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updateLikes = Number(likes)+1;

firebase.database().ref(roomname).child(message_id).update({
likes : updateLikes
});
}