import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  // Function to handle file input changes
  const handleFileChange = (event) => {
    const photo = event.target.files[0];
    setPhoto(photo);
  };

  const handleJobPost = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:4000/api/v1/job/post",
        price.length >= 2
          ? {
              title,
              description,
              category,
              platform,
              price,
              photo
            }
          : {
              title,
              description,
              category,
              platform,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setPhoto("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Admin")) {
    navigateTo("/");
  }

  return (
    <>
      <div className="job_post page">
        <div className="container">
          <h3>POST NEW GAME</h3>
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Game Title"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Action">
                  Action
                  </option>
                <option value="Adventure">
                  Adventure
                </option>
                <option value="Arcade">
                  Arcade
                </option>
                <option value="Board">
                  Board
                </option>
                <option value="Card">Card</option>
                <option value="Casual">
                  Casual
                </option>
                <option value="Educational">Educational</option>
                <option value="Music">
                  Music
                </option>
                <option value="Puzzle">
                  Puzzle
                </option>
                <option value="Role Playing">
                  Role Playing
                </option>
                <option value="Simulation">
                  Simulation
                </option>
                <option value="Sports">
                  Sports
                </option>
                <option value="Strategy">
                  Strategy
                </option>
                <option value="Trivia">
                  Trivia
                </option>
                <option value="Word">Word</option>
              </select>
            </div>
            <div className="wrapper">
              <input
                type="text"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                placeholder=" Hosted platform name"
              />
              <input
                    type="number"
                    placeholder="Enter Game Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
            </div>
            <textarea
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Game Description"
            />
            <div>
            <label
              style={{ textAlign: "start", display: "block", fontSize: "20px" }}
            >
              Select Photo
            </label>
            <input
              type="file"
              accept=".pdf, .jpg, .png"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          </div>

            <button type="submit">Post Game</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
