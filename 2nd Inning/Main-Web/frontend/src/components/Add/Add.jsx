import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, remove, onValue} from 'firebase/database';
import "./Add.css";

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

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
export const ADD = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    // Initialize Firebase (use your own config)

    // Fetch reviews from Firebase
    const contactFormDB = ref(db, 'gamesAdded');
    onValue(contactFormDB, (snapshot) => {
      const reviewData = snapshot.val();
      if (reviewData) {
        const reviewList = Object.entries(reviewData).map(([id, review]) => ({ ...review, id }));
        setReviews(reviewList);
      }
    });
  }, []);

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
//     if (confirmDelete) {
//       remove(ref(db, `gamesAdded/${id}`))
//         .then(() => window.location.reload());
//     }
//   };

const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this REQUEST?");
    if (confirmDelete) {
      // Remove the review from the local state (reviews)
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));

      // Delete the review from Firebase
      remove(ref(db, `gamesAdded/${id}`))
        .then(() => {
          console.log("REQUEST successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing REQUEST: ", error);
        });
    }
  };

  const handleSelectReview = (id) => {
    setSelectedReviews((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    if (selectedReviews.length === 0) {
      alert('Please select at least one REQUEST to delete.');
    } else {
      const confirmDelete = window.confirm("Are you sure you want to delete the selected REQUEST?");
      if (confirmDelete) {
        Promise.all(selectedReviews.map((id) => remove(ref(db, `gamesAdded/${id}`))))
          .then(() => window.location.reload());
      }
    }
  };

  return (
    <div className="ADD">
      <h2>ADD GAME REQUESTS AVAILABLE</h2>
      <table className="tbl" id="employeeList">
        <thead>
          <tr>
            <th>Select</th>
            <th>Game Name</th>
            <th>Github</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            <th>Game Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>
                <input
                  type="checkbox"
                  name="select"
                  value={review.id}
                  onChange={() => handleSelectReview(review.id)}
                />
              </td>
              <td>{review.name}</td>
              <td>{review.company}</td>
              <td>{review.email}</td>
              <td>{review.phone}</td>
              <td>{review.message}</td>
              <td>
                <button className="btn_trash" onClick={() => handleDelete(review.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="deleteAllBtn" onClick={handleDeleteSelected}>Delete Selected Reviews</button>
    </div>
  );
};

export default ADD;

