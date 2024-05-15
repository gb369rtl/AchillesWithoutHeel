// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyC_htK6sSXllpzMlymsSztbxUyoQnI8PXw",
  authDomain: "checkout-page-f4147.firebaseapp.com",
  databaseURL: "https://checkout-page-f4147-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "checkout-page-f4147",
  storageBucket: "checkout-page-f4147.appspot.com",
  messagingSenderId: "9991991847",
  appId: "1:9991991847:web:c1eefb0234b9e450a07239"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('purchaseInfo');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var age = getInputVal('phone');
  var gen = getInputVal('city');
  var loc = getInputVal('country');

  // Save message
  saveMessage(name, company, email, age,gen,loc);

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
function saveMessage(name, company, email, age,gen,loc){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    age:age,
    gender:gen,
    location:loc,
  });
}