import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiConsoleController } from "react-icons/gi";  //<GiConsoleController icon={GiConsoleController} color="FEC53A"/>

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
            <GiConsoleController size={50} color="#FEC53A" />
            <span>2<sup>ND</sup> INNING</span>
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOLA!
            </Link>
          </li>
          <li>
            <Link to={"https://gb369rtl.github.io/arcadeMain/"} onClick={() => setShow(false)}>
              ARCADE
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL GAMES
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Admin"
                ? "BUY REQUESTS"
                : "MY GAMES"}
            </Link>
          </li>
          {user && user.role === "Admin" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW GAME
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  POSTED GAMES
                </Link>
              </li>
              <li>
                <Link to={"/addGameRequest"} onClick={() => setShow(false)}>
                  ADD REQUESTS
                </Link>
              </li>
              <li>
                <Link to={"/review"} onClick={() => setShow(false)}>
                  REVIEWS
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/userAdd"} onClick={() => setShow(false)}>
                  ADD
                </Link>
              </li>
              <li>
                <Link to={"/userReview"} onClick={() => setShow(false)}>
                  REVIEW
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={() => setShow(false)}>
                  CONTACT
                </Link>
              </li>
            </>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
