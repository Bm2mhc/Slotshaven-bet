

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        document.getElementById("user_div").style.dispaly.show();
        document.getElementById("login_div").style.dispaly.hide();

    } else {
      // No user is signed in.
      document.getElementById("user_div").style.dispaly.hide();
      document.getElementById("login_div").style.dispaly.show();

    }
  });

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userpassword = document.getElementById("password_field").value;

    console.log(userEmail + " " + userpassword);

    firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
      });
   
}

function logout(){

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}