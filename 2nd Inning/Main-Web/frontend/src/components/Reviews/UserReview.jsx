import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import "./userReview.css";

const firebaseConfig = {
  // Your Firebase config details here
  // ...
    apiKey: "AIzaSyB7hTvUJji4rOT-vStI9RlQS-UStRd5JIY",
    authDomain: "nd-inning-2c224.firebaseapp.com",
    projectId: "nd-inning-2c224",
    storageBucket: "nd-inning-2c224.appspot.com",
    messagingSenderId: "594481116545",
    appId: "1:594481116545:web:34e4e2e90e42678d376480",
    measurementId: "G-2PDCF4KYZ2",
    databaseURL: "https://nd-inning-2c224-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const UserReview = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdAt = new Date().toLocaleString();
    const newMessageRef = push(ref(db, 'reviewForm'));

    set(newMessageRef, {
      name,
      email,
      msgContent: message,
      createdAt,
    });

    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="userReviewBody">
    <div className="userReview">
      <h4>--- Review our website ---</h4>
      <form onSubmit={handleSubmit}>
      <div class="alert">Your message sent</div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Your name...."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <input
            type="email"
            placeholder="Your Email....."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="inputBox">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UserReview;
