import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { FaPhoneAlt, FaWhatsapp, FaUser } from 'react-icons/fa';
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <div>
      {/* Top Header Section */}
      <header className="top-header">
        <div className="left-section">
          <Link to="/">
            <img src="./logo.png" alt="meteryard.com" className="logo" />
          </Link>
        </div>

        <div className="middle-section">
          {/* Phone Icon and Number */}
          <i
            className="fas fa-phone-alt icon"
            style={{ marginRight: "8px", color: "var(--blue)", fontSize: "20px" }}
          ></i>
          011-41219999 | 9999-127085
          {/* WhatsApp Icon and Text */}
          <i
            className="fab fa-whatsapp icon"
            style={{
              marginLeft: "20px",
              marginRight: "8px",
              color: "green",
              fontSize: "27px",
            }}
          ></i>
          Whatsapp Us
        </div>

        <div className="right-section">
          {/* User Icon and Login/Sign Up */}
          <i
            className="fas fa-user icon"
            style={{ marginRight: "8px", color: "black", fontSize: "20px" }}
          ></i>
          Login/Sign Up
        </div>
      </header>

      {/* Main Navigation Section */}
      <section className="h-wrapper" style={{ backgroundColor: "black" }}>
        <div className="flexCenter innerWidth paddings h-container">
          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <NavLink to="/city">Cities</NavLink>
        
              <NavLink to="/properties">Property Type</NavLink>

              <div onClick={handleAddPropertyClick}>Add Property</div>
              <AddPropertyModal
                opened={modalOpened}
                setOpened={setModalOpened}
              />

              {!isAuthenticated ? (
                <button className="button" onClick={loginWithRedirect}>
                  Login
                </button>
              ) : (
                <ProfileMenu user={user} logout={logout} />
              )}
            </div>
          </OutsideClickHandler>

          {/* Menu Icon for Small Screens */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
