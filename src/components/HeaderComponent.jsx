import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {
  //const btnName = "Login";

  const [btnName, setBtnName] = useState("Login");

  const loggedInUser = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-5 align-middle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/glossary">Glossary</Link>
          </li>
          <li
          // onClick={ () => {
          //     window.location.href = "/contact";
          // }}
          >
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>
            { loggedInUser.loggedInUser}
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
