import React, { useContext, useEffect, useState } from "react";
import "./ProfileSettings.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import axios from "axios";
import Cookies from "js-cookie";
import instance from "../../AxiosConfig/instance";
// import  useLanguage  from '../../Context/LanguageContext';
import il8next from "../../il8n";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../../il8n";
import { useLanguage } from "../../Context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
const ProfileSettings = () => {
  const { selectedLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };
  function settolocal(e) {
    localStorage.setItem("lang", e.target.value);
  }
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const authToken = Cookies.get("token");
  // const {authToken}=useContext(userDataContext)
  //  ===== fitch user data =========
  useEffect(() => {
    async function getUserData() {
      if (authToken) {
        try {
          const response = await instance.get("/users/getMe", {
            headers: {
              Authorization: `token=${authToken}`,
              "Content-Type": "application/json",
            },
          });
          console.log(response.data.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(console.error());
      }
    }

    getUserData();
  }, []);

  // ===== delete token====
  function deletToken() {
    Cookies.remove("token");
    window.location.reload();
  }
  // ======== end Fitch user data ===========
  const handleAirbnbSetupClick = () => {
    setShowRegisterModal(true);
  };
  const handleAirbnbLoginClick = () => {
    setShowLoginModal(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ====================== translate site functionality==================
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage); // Store selected language in localStorage
    i18n.changeLanguage(newLanguage);
    window.location.reload();
  };
  const lanuguage = localStorage.getItem("selectedLanguage");
  // Initialize language on page load
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [setLanguage, i18n]);
  //  const nav =useNavigate()
  // function gotowish(){
  //   nav('/')
  // }
  return (
    <>
      <div>
        {" "}
        <div className=""></div>
      </div>
      <div className=" d-flex align-items-center justify-content-center mx-2 ">
        <div className="mx-2 " style={{ fontSize: "18px" }}>
          {" "}
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={"/host/homes"}
          >
            {t("airband")}
          </Link>
        </div>

        <div className="rightDiv2 mx-2">
          {/* <i className="fa-solid fa-globe fs-5" ></i> */}
          <select
            className="form-select "
            id="language-select"
            onChange={onChangeLanguage}
          >
            <option selected>
              {lanuguage == "ar" ? "العربية" : "English"}
            </option>
            <option value="en">English</option>
            <option value="ar"> العربية</option>
          </select>
        </div>
        <div className="dropdown " onClick={toggleDropdown}>
          <div
            className="main_Header_icon_dropdown  py-2 d-flex align-items-center justify-content-around mx-2 "
            onClick={toggleDropdown}
          >
            <div>
              <i className="fa-solid fa-equals"></i>
            </div>
            <div className="  person_profile " style={{ borderRadius: "50%" }}>
              {" "}
              <i
                className="fa-regular fa-user"
                style={{ fontSize: "25px" }}
              ></i>
            </div>
          </div>
          {authToken ? (
            <ul
              className={`dropdown-menu border-none shadow Header_profile_icon_menu ${
                isOpen ? "show" : ""
              } dropdown-menu-reverse`}
            >
              <div className="border-bottom my-2">
                <Link style={{ textDecoration: "none" }} to={"/message"}>
                  <li className="dropdown-item my-2 fw-bold">
                    {" "}
                    {t("message")}
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/trips"}>
                  <li className="dropdown-item my-2 fw-bold">{t("trips")}</li>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/wishlist"}>
                  <li className="dropdown-item my-2 fw-bold">
                    {t("wishlists")}{" "}
                  </li>
                </Link>
              </div>
              <div className="border-bottom my-2 ">
                <Link style={{ textDecoration: "none" }} to={"/host/homes"}>
                  <li className="dropdown-item my-2 text_gary">
                    {t("airband")}
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/account"}>
                  <li className="dropdown-item my-2 text_gary">
                    {t("profile")}
                  </li>
                </Link>
              </div>
              <li className="dropdown-item my-2 text_gary">{t("help")}</li>
              <li className="dropdown-item my-2 text_gary" onClick={deletToken}>
                {t("Oute")}
              </li>
            </ul>
          ) : (
            <ul
              className={`dropdown-menu border-none shadow Header_profile_icon_menu ${
                isOpen ? "show" : ""
              } dropdown-menu-reverse`}
            >
              <div className="border-bottom my-2">
                <li
                  onClick={handleAirbnbLoginClick}
                  className="dropdown-item my-2"
                >
                  {t("LOgin")}
                </li>
                <li
                  onClick={handleAirbnbSetupClick}
                  className="dropdown-item my-2"
                >
                  {t("register")}
                </li>
              </div>
              <Link style={{ textDecoration: "none" }} to={"/home"}>
                <li className="dropdown-item my-2">{t("airband")}</li>
              </Link>

              <li className="dropdown-item my-2">{t("help")}</li>
            </ul>
          )}
        </div>
        <div>
          <Register
            key={1}
            showRegister={showRegisterModal}
            onCloseRegister={() => setShowRegisterModal(false)}
          />
        </div>
        <div>
          <Login
            key={2}
            showLogin={showLoginModal}
            onCloseLogin={() => setShowLoginModal(false)}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
