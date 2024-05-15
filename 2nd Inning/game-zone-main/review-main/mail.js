const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyB7hTvUJji4rOT-vStI9RlQS-UStRd5JIY",
  authDomain: "nd-inning-2c224.firebaseapp.com",
  projectId: "nd-inning-2c224",
  storageBucket: "nd-inning-2c224.appspot.com",
  messagingSenderId: "594481116545",
  appId: "1:594481116545:web:34e4e2e90e42678d376480",
  measurementId: "G-2PDCF4KYZ2",
  databaseURL: "https://nd-inning-2c224-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("reviewForm");

document.getElementById("reviewForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var createdAt = new Date().toLocaleString();

  saveMessages(name, emailid, msgContent, createdAt);
 
  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("reviewForm").reset();
}

const saveMessages = (name, emailid, msgContent, createdAt) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    createdAt: createdAt,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
