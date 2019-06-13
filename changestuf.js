function get_info() {

    var user = firebase.auth().currentUser;
    var firestore = firebase.firestore();
    var userId = user.uid;
    var docref = firestore.collection("users" + "/" + userId + "/" + "aboutperson" + "/").doc("person")


    docref.get().then(function (doc) {

        if (doc && doc.exists) {
            const data = doc.data();
            console.log(data)
            console.log(data.username);
            document.getElementById("info").innerHTML = "Navn: " + data.Navn;
            document.getElementById("info1").innerHTML = "Brugernavn: " + data.username;
            document.getElementById("info2").innerHTML = "Klasse: " + data.klasse;
            document.getElementById("info3").innerHTML = "Verfied: " + data.verified;
      

        }
    }).catch(function (error) {
        console.log(error);
    })


};