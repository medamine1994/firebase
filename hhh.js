    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCKAblzm29Ab4FGecITtyrGnPKiigrA9Nk",
        authDomain: "firstproject-ea5d5.firebaseapp.com",
        databaseURL: "https://firstproject-ea5d5.firebaseio.com",
        projectId: "firstproject-ea5d5",
        storageBucket: "firstproject-ea5d5.appspot.com",
        messagingSenderId: "571594633364"
      };
      firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('Contact');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nom = getInputVal('nom');
  var prenom = getInputVal('prenom');
  var adresse = getInputVal('adresse');
  // Save message
  saveMessage(nom,prenom,adresse);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nom,prenom,adresse){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nom: nom,
    prenom: prenom,
    adresse: adresse
  });
}