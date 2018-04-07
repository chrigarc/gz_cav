var config = {
  apiKey: "AIzaSyBZfTqmhfU97g3F3-29TdVpvwQxVj7R3J0",
  authDomain: "gz-control-de-acceso-vehicular.firebaseapp.com",
  databaseURL: "https://gz-control-de-acceso-vehicular.firebaseio.com",
  projectId: "gz-control-de-acceso-vehicular",
  storageBucket: "gz-control-de-acceso-vehicular.appspot.com",
  messagingSenderId: "950485463408"
};
$(function(){
  // Initialize Firebase

  firebase.initializeApp(config);
  $('#sesion_google').click(function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      $('#mensajes').html('entre wey');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      $('#mensajes').html('no entre :(');
    });

  });
});
