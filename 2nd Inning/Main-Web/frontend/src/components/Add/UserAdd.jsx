import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import "./userAdd.css";

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

export const UserAdd = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdAt = new Date().toLocaleString();
    const newMessageRef = push(ref(db, 'gamesAdded'));

    set(newMessageRef, {
      name,
      company,
      email,
      phone,
      message,
      createdAt,
    });

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="userAddBody">
    <div className="userAdd">
      <h1 className="brand">2<sup>ND</sup> INNING</h1>
      <div className="wrapper">
        <div className="company-info">
          <h3>2<sup>ND</sup> INNING</h3>
          <ul>
            <li className="banana"><i className="fa fa-road"></i> SKIT JAIPUR</li>
            <li className="banana"><i className="fa fa-phone"></i>+919991***847</li>
            <li className="banana"><i className="fa fa-envelope"></i> test@inning.com</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Want to Add new Game!</h3>
          <div className="alert">Your message has been sent</div>
          <form onSubmit={handleSubmit} id="contactForm">
            <p>
              <label className="apple">Game Name</label>
              <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
              <label className="apple">Github</label>
              <input type="text" name="company" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </p>
            <p>
              <label className="apple">Email Address</label>
              <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
              <label className="apple">Phone Number</label>
              <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </p>
            <p className="full">
              <label className="apple">Game Description</label>
              <textarea name="message" rows="5" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </p>
            <p className="full">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserAdd;
