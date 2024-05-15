import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase config details here
  apiKey: "AIzaSyB7hTvUJji4rOT-vStI9RlQS-UStRd5JIY",
  authDomain: "nd-inning-2c224.firebaseapp.com",
  projectId: "nd-inning-2c224",
  storageBucket: "nd-inning-2c224.appspot.com",
  messagingSenderId: "594481116545",
  appId: "1:594481116545:web:34e4e2e90e42678d376480",
  measurementId: "G-2PDCF4KYZ2",
  databaseURL: "https://nd-inning-2c224-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDatabase = getDatabase(firebaseApp);

export default firebaseDatabase;
