// ContactForm.js

import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa"; //<FaEnvelopeOpen />
import { FaMapMarkerAlt } from "react-icons/fa"; //<FaMapMarkerAlt />
import { FaClock } from "react-icons/fa";
import "./ContactForm.css";
import photo from "./image/contact-png.png";

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

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdAt = new Date().toLocaleString();
    const newMessageRef = push(ref(db, 'contactMessages'));

    set(newMessageRef, {
      firstName,
      lastName,
      email,
      phone,
      message,
      createdAt,
    });

    // Clear form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contactFormBody">
    <section className="contact-section">
      <div className = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className = "text">If you need technical assistance, have account-related queries, or encounter any issues while playing our games, Feel free to drop us an email. We’re always excited to hear from fellow gamers!</p>
      </div>


      <div className = "contact-body">
        <div className = "contact-info">
          <div>
            <span><FaMobileAlt className="fas"/></span>
            <span>Phone No.</span>
            <span className = "text">1-2392-23928-2</span>
          </div>
          <div>
            <span><FaEnvelopeOpen className="fas"/></span>
            <span>E-mail</span>
            <span className = "text">mail@2ndInning.com</span>
          </div>
          <div>
            <span><FaMapMarkerAlt className="fas"/></span>
            <span>Address</span>
            <span className = "text"> Ram Nagariya Rd, Shivam Nagar, Jagatpura, Jaipur, Rajasthan 302017</span>
          </div>
          <div>
            <span><FaClock className="fas"/></span>
            <span>Opening Hours</span>
            <span className = "text">Monday - Friday (8:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className = "contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows="5"
          placeholder="Message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" className="send-btn" value="Send Message" />
      </form>
      {/* Rest of your HTML content */}
      {/* ... */}
      <div>
            <img src={photo} alt = "" />
          </div>
        </div>
      </div>

      <div className = "map">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5454327383677!2d75.86337437596933!3d26.82259896395636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db770070b115f%3A0x6f306afd08a3e737!2sSwami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20Gramothan%20(SKIT)!5e0!3m2!1sen!2sin!4v1715128463561!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
    </section>
    </div>
  );
};

export default ContactForm;
