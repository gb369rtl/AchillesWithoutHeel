import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";
import "./stylePaymentForm.css";
import qr from "./qr.jpg";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [age, setAge] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  // Function to handle file input changes
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("transactionId", transactionId);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setTransactionId("");
      setAge("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "Admin")) {
    navigateTo("/");
  }

  return (
    <div className="Z">
    <div className="A">
      <h4 className="B">2<sup>ND</sup> INNING</h4>
      <div className="C">
        <div className="D">
          <h6>2<sup>ND</sup> INNING</h6>
          <ul>
            <li className="banana"><BsBuilding icon={BsBuilding}/>  SKIT JAIPUR</li>
            <li className="banana"><BsFillTelephoneFill icon={BsFillTelephoneFill}/>  +919928141065</li>
            <li className="banana"><BsFillEnvelopeFill icon={BsFillEnvelopeFill}/>  btwmayigetyournumber@gmail.com</li>
            <li className="banana"><i className=""></i>------------------</li>
            <li className="banana"><i ></i> MAKE YOUR PAYMENT ON - kunalsharma3636@oksbi</li>
            <li className="banana"><i className=""></i>---------OR---------</li>
            <li> <img src={qr} width="250" height="250" alt="qr"/> </li>
            <li className = "banana"> <h6>Download link will be sent after verifying payment status.</h6> </li>
          </ul>
        </div>
        <div className="G">
          <h5>PAYMENT FORM</h5>
          <form onSubmit={handleApplication}>
          <p>
            <label class = "apple">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <label class = "apple">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label class = "apple">Age</label>
            <input
              type="number"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </p>
          <p>
            <label class = "apple">Transaction ID</label>
            <input
              placeholder="TransactionId..."
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
          </p>
          <p>
            <label class = "apple">Select Screenshot</label>
            <input
                type="file"
                accept=".pdf, .jpg, .png"
                onChange={handleFileChange}
              />
          </p>
            <button type="submit" className="paymentBtn">Send Buy Game Request</button>
          </form>
        </div>
      </div>
  </div>
  </div>
  );
};

export default Application;
