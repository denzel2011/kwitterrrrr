//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyBy3MlpfTe5_ygNdIVCBZL_MnUAZQw8mHQ",
      authDomain: "kwitter-4604b.firebaseapp.com",
      databaseURL: "https://kwitter-4604b-default-rtdb.firebaseio.com",
      projectId: "kwitter-4604b",
      storageBucket: "kwitter-4604b.appspot.com",
      messagingSenderId: "600747187732",
      appId: "1:600747187732:web:d17fea16a2b9ed49a91101"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}
    
function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      
}