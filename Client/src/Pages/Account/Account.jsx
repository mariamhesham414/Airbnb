import React, { useEffect, useState } from "react";
import {
  AiOutlineIdcard,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { RiSecurePaymentLine, RiGlobalLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";
import { BsToggles } from "react-icons/bs";
import { GiDesk } from "react-icons/gi";
import { LiaChartBarSolid } from "react-icons/lia";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { BiShieldPlus, BiDollar } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAirbnb } from "react-icons/fa6";
import "./Account.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import instance from "../../AxiosConfig/instance";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const Account = () => {
  // ============== Start of translation =================

  const { t, i18n } = useTranslation();

  // ============== End of translation =================

  // ============== Start get all user  informations ================

  const [UserDta, setUserData] = useState({});
  const authToken = Cookies.get("token");
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
          setUserData(response.data.data.user);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(console.error());
      }
    }

    getUserData();
  }, []);
  console.log(UserDta.name);
  // ============== End get all user  informations ================
  const lanuguage = localStorage.getItem("selectedLanguage");

  return (
    <>
      <div
        className="account  mt-5"
        style={lanuguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="px-4">
          <h1 className="display-5 fs-2 fw-medium">{t("Account")}</h1>
          <h5 className="fw-normal">
            <span className="fw-medium">{UserDta.name}</span>
            &nbsp;{UserDta.email}. &nbsp;
            <span>
              <a href="#" className="text-black fw-medium">
                {t("goprofile")}
              </a>
            </span>
          </h5>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="boxes mt-5 d-flex flex-wrap boxheight justify-content-start">
            <div className="box mx-2 rounded-4  shadow p-3 mb-4">
              <NavLink
                to={"/account/personalInfo"}
                className="text-black text-decoration-none"
              >
                <AiOutlineIdcard size={"35px"} />
                <div className="mt-3">
                  {/* <h6 className="fw-semibold">Personal info</h6> */}
                  <h6 className="fw-semibold">{t("Personal")}</h6>
                  <h6 className="fw-normal text-secondary">{t("Provide")}</h6>
                </div>
              </NavLink>
            </div>

            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to={"/account/loginAndSecurity"}
                className="text-black text-decoration-none"
              >
                <RiSecurePaymentLine size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">{t("security")}</h6>
                  <h6 className="fw-normal text-secondary">{t("Update")}</h6>
                </div>
              </NavLink>
            </div>

            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <Link to={"/trips"} className="text-black text-decoration-none">
                <MdOutlinePayments size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">{t("payouts")}</h6>
                  <h6 className="fw-normal text-secondary">{t("Review")}</h6>
                </div>
              </Link>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/taxes"
                className="text-black text-decoration-none"
              >
                <IoDocumentOutline size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">{t("Taxes")}</h6>
                  <h6 className="fw-normal text-secondary">{t("Manage")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/notifications"
                className="text-black text-decoration-none"
              >
                <HiOutlineSpeakerphone size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Notifications</h6>
                  <h6 className="fw-normal text-secondary">{t("contacted")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/privacyAndSharing"
                className="text-black text-decoration-none"
              >
                <AiOutlineEye size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">{t("sharing")}</h6>
                  <h6 className="fw-normal text-secondary">{t("settings")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/globalPreferences"
                className="text-black text-decoration-none"
              >
                <BsToggles size={"35px"} />

                <div className="mt-3">
                  <h6 className="fw-semibold"> {t("Global")} </h6>
                  <h6 className="fw-normal text-secondary">{t("timezone")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/travelForWork"
                className="text-black text-decoration-none"
              >
                <GiDesk size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">{t("Travel")} </h6>
                  <h6 className="fw-normal text-secondary">{t("benefits")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/professionalHostingTools"
                className="text-black text-decoration-none"
              >
                <LiaChartBarSolid size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold"> {t("Professional")} </h6>
                  <h6 className="fw-normal text-secondary">{t("several")}</h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="/account/referralCreditAndCoupon"
                className="text-black text-decoration-none"
              >
                <HiOutlineGiftTop size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold"> {t("Referral")} </h6>
                  <h6 className="fw-normal text-secondary">{t("referral")}</h6>
                </div>
              </NavLink>
            </div>
            {/* <Outlet /> */}
          </div>
        </div>
        <div className="continer text-center mt-3">
          <p> {t("Need")} </p>
          <h6>
            <a href="#" className="text-black ">
              {t("care")}
            </a>
          </h6>
        </div>
      </div>
      {/* responsive small */}
      <div className="accountSmall container-fluid px-4 mt-5">
        <div>
          <h2 className="display-5 fs-1 fw-medium">{t("Profile")}</h2>
        </div>
        <div className="showProfile d-flex justify-content-between mt-4 pb-3 border-bottom">
          <div className="d-flex ">
            <div
              style={{
                borderRadius: "50%",
                width: "65px",
                height: "65px",
                // verticalAlign: "middle !important",
              }}
              className="initial  text-bg-dark text-center pt-3 me-3"
            >
              <h4>M</h4>
            </div>
            <div className="d-flex flex-column">
              <span className="fw-semibold fs-4">Mariam</span>
              <span className="text-secondary">Show profile</span>
            </div>
          </div>
          <div className="pt-4">
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="place d-flex justify-content-between mt-4 p-4 border border-2 border-light-subtle rounded-4 shadow">
          <div>
            <h5 className="mt-2"> {t("yourplace")} </h5>
            <span> {t("simple")} </span>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/b0021c55-05a2-4449-998a-5593567220f7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="showProfile d-flex justify-content-between mt-5 pb-3 ">
          <div className="d-flex ">
            <PiUserCircle size={"25px"} />
            <span className=" ms-3">{t("Personalinfo")}</span>
          </div>
          <div>
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="showProfile d-flex justify-content-between mt-4 pb-4 border-bottom">
          <div className="d-flex ">
            <AiOutlineSetting size={"25px"} />
            <span className=" ms-3">{t("Account")}</span>
          </div>
          <div>
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="pt-5">
          <span className="display-5 fs-3 fw-medium">Hosting</span>
          <div className="showProfile d-flex justify-content-between mt-5 pb-5 border-bottom">
            <div className="d-flex ">
              <BsToggles size={"25px"} />
              <span className=" ms-3">{t("Hosthome")}</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <span className="display-5 fs-3 fw-medium">{t("Support")}</span>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <AiOutlineQuestionCircle size={"25px"} />
              <span className=" ms-3"> {t("Visitthe")} </span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <BiShieldPlus size={"25px"} />
              <span className=" ms-3"> {t("safety")} </span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <TfiHeadphoneAlt size={"25px"} />
              <span className=" ms-3"> {t("neihborhood")} </span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5 mb-4 pb-4 border-bottom ">
            <div className="d-flex ">
              <FaAirbnb size={"25px"} />
              <span className=" ms-3"> {t("works")} </span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
        </div>
        <div className="setting d-flex mb-3">
          <span className="d-flex mx-1 language">
            <RiGlobalLine size={"25px"} /> {t("English")}(US)
          </span>
          <span className="d-flex payment">
            <BiDollar size={"25px"} className="pe-2" />
            {t(" USD")}
          </span>
        </div>
        <button className="btn logoutbtn border-black text-black rounded-3 mb-4 text-center">
          <h5>{t("Oute")}</h5>
        </button>
        <div className="help text-center mb-4">
          <h6>
            <a href="#" className="text-black">
              {t("help")}
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              {t("Terms")}
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              {t("Poilcy")}
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              {t("Choices")}
            </a>
            &nbsp;&nbsp;
            <svg
              width="26"
              height="12"
              fill="none"
              className="d-inline togglecheck"
            >
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                fill="#fff"
              ></rect>
              <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
              <path
                d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                stroke="#06F"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                stroke="#fff"
                strokeLinecap="round"
              ></path>
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                stroke="#06F"
              ></rect>
            </svg>
          </h6>
          <h6 className="text-secondary">{t("reserved")}</h6>
        </div>
      </div>
    </>
  );
};

export default Account;
