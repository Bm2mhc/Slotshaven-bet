firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.dispaly;
    document.getElementById("login_div").style.dispaly;
    document.getElementById("createlogin_div").style.dispaly;

    $('#createlogin_div').hide();
    $('#menu-page-login').hide();
    $('#menu-minebets').show();
    $('#menu-minebets2').show();
    $('#user_div').show();
    $('#login_div').hide();
    $('#login_div2').hide();

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;

      document.getElementById("user_parda").innerHTML = "Velkommen " + email_id;

    }

  } else {
    // No user is signed in.
    document.getElementById("user_div").style.dispaly;
    document.getElementById("login_div").style.dispaly;
    document.getElementById("createlogin_div").style.dispaly;

    $('#createlogin_div').hide();
    $('#menu-page-login').show();
    $('#menu-minebets').hide();
    $('#menu-minebets2').hide();
    $('#user_div').hide();
    $('#login_div').show();
    $('#login_div2').show();
  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userpassword = document.getElementById("password_field").value;

  console.log(userEmail + " " + userpassword);

  //firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword)
  firebase.auth().signInWithEmailAndPassword(userEmail, userpassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
    // ...
  });

}

function login2() {

  var userEmail = document.getElementById("email_field3").value;
  var userpassword = document.getElementById("password_field3").value;

  console.log(userEmail + " " + userpassword);

  //firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword)
  firebase.auth().signInWithEmailAndPassword(userEmail, userpassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
    // ...
  });

}



function create() {

  var userEmail = document.getElementById("email_field2").value;
  var userpassword = document.getElementById("password_field2").value;

  console.log(userEmail + " " + userpassword);

  //firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword)
  firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
    // ...
  });
}

function logout() {

  firebase.auth().signOut()
}