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



un = localStorage.getItem("name");
document.getElementById("h3").innerHTML = "Welcome " + un +"!";

function addroom (){
rn = document.getElementById("ip").value ;
firebase.database().ref("/").child(rn).update({
purpose : "by a person"
});
localStorage.setItem("roomname",rn);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
 row = "<div class='roomname' id ="+Room_names+" onclick ='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML +=row;

  //End code
  });});}
getData();
function redirectToRoomName(name){

  localStorage.setItem("roomname",name);
  window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("name");
localStorage.removeItem("roomname");
window.location = "index.html";
}