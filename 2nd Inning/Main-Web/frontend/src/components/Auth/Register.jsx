import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { GiConsoleController } from "react-icons/gi"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminId, setAdminId] = useState(""); // Add state for admin ID
  // const [showPassword, setShowPassword] = useState(false);

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { 
          name,
          email,
          role,
          password,
          adminId // Include admin ID in the request
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
      setAdminId(""); // Clear admin ID after registration
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <div className="logo">
              <GiConsoleController icon={GiConsoleController} size={50} color="black"/>
              <span>2<sup>ND</sup> INNING</span>
            </div>
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Player">Player</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            {role === "Admin" && ( // Render admin ID field only if role is admin
              <div className="inputTag">
                <label>Admin ID</label>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Admin ID"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                  />
                  <FaPencilAlt />
                </div>
              </div>
            )}
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  placeholder="Set your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
                {/* Toggle button to show/hide password */}
                {/* <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"} Password
                </button> */}
              </div>
            </div>
            <button type="submit" onClick={handleRegister}>
              Register
            </button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Register;
