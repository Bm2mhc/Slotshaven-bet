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




    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        brugernavn()
  
      } else {
        // User not logged in or has just logged out.
      }
    });


    if (user != null) {

      var email_id = user.email;

      //document.getElementById("user_parda").innerHTML = "Velkommen, du er logget ind med " + email_id;

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

    window.alert(errorMessage);
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

    window.alert(errorMessage);
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

    window.alert(errorMessage);
    // ...
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      writeUserData()

    } else {
      // User not logged in or has just logged out.
    }
  });






  function writeUserData(userId, username, fornavn, efternavn, klasse) {




    var user = firebase.auth().currentUser;
    var firestore = firebase.firestore();
    var userId = user.uid;

    /* if (user != null) {
       userId = user.uid;
     }*/


    /*if (user != null) {
     
      
    }*/

    var username = document.getElementById("username_field").value;
    var fornavn = document.getElementById("fornavn_field").value;
    var efternavn = document.getElementById("efternavn_field").value;
    var klasse = document.getElementById("klasse_field").value;
    var docref = firestore.doc("users/" + userId + "/aboutperson" + "/person");

    console.log(userId + " " + username + " " + fornavn + " " + efternavn + " " + username + " " + klasse);

    docref.set({
        username: username,
        Navn: fornavn + " " + efternavn,
        klasse: klasse,
        verified: "not"
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}


function svar() {



  var user = firebase.auth().currentUser;
  var firestore = firebase.firestore();
  var userId = user.uid;
  var docref = firestore.doc("users/" + userId + "/" + "bets" + "/" + "your bets");


  var alexander = document.getElementById("alexander").value;
  var benjamint = document.getElementById("Benjamin t").value;
  var benjaminn = document.getElementById("Benjamin N").value;
  var bjørg = document.getElementById("Bjørg").value;
  var casper = document.getElementById("Casper").value;
  var kvist = document.getElementById("kvist").value;
  var hampus = document.getElementById("Hampus").value;
  var kristoffer = document.getElementById("Kristoffer").value;
  var mhansen = document.getElementById("M Hansen").value;
  var mads = document.getElementById("Mads").value;
  var magnus = document.getElementById("Magnus").value;
  var marc = document.getElementById("Marc").value;
  var marinus = document.getElementById("Marinus").value;
  var mia = document.getElementById("Mia").value;
  var natasja = document.getElementById("Natasja").value;
  var nikolaj = document.getElementById("Nikolaj").value;
  var oliver = document.getElementById("Oliver").value;
  var sara = document.getElementById("Sara").value;
  var victor = document.getElementById("Victor").value;
  var william = document.getElementById("William").value;
  var rektor = document.getElementById("rektor").value;
  var nacho = document.getElementById("nacho").value;

  console.log(alexander);
  console.log(benjamint);
  console.log(benjaminn);
  console.log(bjørg);
  console.log(casper);
  console.log(kvist);
  console.log(hampus);
  console.log(kristoffer);
  console.log(mhansen);
  console.log(mads);
  console.log(magnus);
  console.log(marc);
  console.log(marinus);
  console.log(mia);
  console.log(natasja);
  console.log(nikolaj);
  console.log(oliver);
  console.log(sara);
  console.log(victor);
  console.log(william);
  console.log(rektor);
  console.log(nacho);
  console.log(parseFloat(alexander) + parseFloat(benjamint) + parseFloat(benjaminn) + parseFloat(bjørg) + parseFloat(casper) + parseFloat(kvist) + parseFloat(hampus) + parseFloat(kristoffer) + parseFloat(mhansen) + parseFloat(mads) + parseFloat(magnus) + parseFloat(marc) + parseFloat(marinus) + parseFloat(mia) + parseFloat(natasja) + parseFloat(nikolaj) + parseFloat(oliver) + parseFloat(sara) + parseFloat(victor) + parseFloat(william) + parseFloat(rektor) + parseFloat(nacho))



  docref.set({

      Alexander: alexander,
      BenjaminT: benjamint,
      benjaminN: benjaminn,
      Bjørg: bjørg,
      Casper: casper,
      Kvist: kvist,
      Hampus: hampus,
      Kristoffer: kristoffer,
      MHansen: mhansen,
      Mads: mads,
      Magnus: magnus,
      Marinus: marinus,
      Mia: mia,
      Nataja: natasja,
      Nikolaj: nikolaj,
      Oliver: oliver,
      Sara: sara,
      Victor: victor,
      William: william,
      Rektor: rektor,
      Nacho: nacho
    }, {
      merge: true
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

function brugernavn() {
  var user = firebase.auth().currentUser;
  var firestore = firebase.firestore();
  var userId = user.uid;
  var docref = firestore.collection("users" + "/" + userId + "/" + "aboutperson" + "/").doc("person")

  docref.get().then(function (doc) {

    if (doc.exists) {
      const data = doc.data();
      console.log(userId);
      console.log(doc.data().klasse);
      if  (doc.data().klasse == "2.R"){
        $('#2R').show();
      }



      document.getElementById("user_parda2").innerHTML = "Velkommen " + doc.data().username;

    } else {
      console.log(userId + "Ingen info");
      $('#2R').hide();
    }
  }).catch(function (error) {
    console.log(error);
  })




}




function logout() {

  firebase.auth().signOut()
}