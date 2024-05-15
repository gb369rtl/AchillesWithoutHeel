// Initialize Firebase (ADD YOUR OWN DATA)
var config = {

  apiKey: "AIzaSyB7hTvUJji4rOT-vStI9RlQS-UStRd5JIY",
  authDomain: "nd-inning-2c224.firebaseapp.com",
  projectId: "nd-inning-2c224",
  storageBucket: "nd-inning-2c224.appspot.com",
  messagingSenderId: "594481116545",
  appId: "1:594481116545:web:34e4e2e90e42678d376480",
  measurementId: "G-2PDCF4KYZ2",
  databaseURL: "https://nd-inning-2c224-default-rtdb.firebaseio.com",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('gamesAdded');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}