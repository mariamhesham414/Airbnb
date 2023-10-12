import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./PrivacyAndSharing.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import instance from "../../../AxiosConfig/instance";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function PrivacyAndSharing() {
  const { t, i18n } = useTranslation();
  // =================   =================
 
  const lanuguage= localStorage.getItem("selectedLanguage")
  const authToken = Cookies.get('token');
 async  function DeletMe(){
  try {
    if(authToken) {
      await axios.delete('/users/deleteMe')
      window.alert("delted success")
    }else{
      window.alert("You are Not Login")
      const navigate = useNavigate();
      navigate("/")
    } 
  } catch (error) {
    console.log(error);
    
  }

  }
  return (
    <>
      <div className="Privacy and sharing d-flex flex-column justify-content-center container-lg p-5 "
       style={(lanuguage === "ar")?{ direction:"rtl"}:{direction:"ltr"}}
      >
        <div className="sharing text-decoration-none">
          <div className="d-flex ">
            <p className="fw-medium">
              <a href="#" className="text-black text-decoration-none">
                {t("Account")}
              </a>
              &nbsp;&nbsp;
            </p>
            <IoIosArrowForward size={"10px"} className="mt-2" />
            <p className="fw-medium">
              &nbsp;&nbsp;
              <a href="#" className="text-black text-decoration-none">
                {t("sharing")}
              </a>
            </p>
          </div>
          <h2 className="fw-bold"> {t("sharing")}</h2>
        </div>
        <div className="w-100 mt-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* <Row> */}
            {/* <Col sm={3}> */}
            <div className="payLeft">
              <div className="titles border-bottom">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        {t("Data")}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="mx-2 border-0 payBtn"
                    >
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        {t("Sharingg")}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        {t("Services")}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            {/* </Col> */}
            {/* <Col sm={9}> */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">   {t("Manageng")}</h4>
                      <p className=" text-secondary">
                      {t("download")}
                     
                      </p>
                      <div className="d-flex mt-5">
                        <span> {t("yourf")}</span>
                        <div>
                          <IoIosArrowForward size={"20px"} className="mt-1" />
                        </div>
                      </div>
                      <p className="text-secondary mb-2">
                      {t("filex")}
                      
                      </p>
                      <div className="d-flex mt-5">
                        <span onClick={DeletMe}> {t("Delete")}</span>
                        <div>
                          <IoIosArrowForward size={"20px"} className="mt-1" />
                        </div>
                      </div>
                      <p className="text-secondary mb-2">
                      {t("applicable")}
                        
                      </p>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2"> {t("Committed")} </h5>
                      <p>
                      {t("keeping")} {" "}
                        <a href="#" className="text-dark fw-semibold">
                           {t("xll")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">  {t("Activitys")}</h4>
                      <p className=" text-secondary">
                      {t("Decide")}
                        
                      </p>
                      <div className=" mt-5">
                        <span>
                        {t("enginesx")}
                          
                        </span>
                      </div>
                      <p className="text-secondary mb-2">
                      {t("like")}
                       
                      </p>
                      <input type="checkbox" id="switch1" />
                      <label id="labelPrivacy" htmlFor="switch1">
                        <div className="iconCheck">
                          <AiOutlineCheck
                            style={{ fill: "black !important" }}
                          />
                        </div>
                      </label>
                      <div className=" mt-5">
                        <span>  {t("youReceiptsrf")}</span>
                      </div>
                      <p className="text-secondary mb-2">
                         {t("on")}{" "}
                        <a href="#" className="text-dark fw-semibold">
                          {t("LearnMore")}
                        </a>
                      </p>
                      <input type="checkbox" id="switch2" />
                      <label id="labelPrivacy" htmlFor="switch2">
                        <div className="iconCheck">
                          <AiOutlineCheck
                            style={{ fill: "black !important" }}
                          />


                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2"> {t("Committed")}</h5>
                      <p>
                        {t("keeping")}{" "}
                        <a href="#" className="text-dark fw-semibold">
                           {t("xxl")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <h4 className="fw-semibold "> {t("sss")}</h4>
                    <p className=" text-secondary"> 
                       {t("zzz")}
                    </p>
                    <p className="mt-2">  {t("non")}</p>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2"> {t("Committed")}</h5>
                      <p>
                         {t("keeping")}{" "}
                        <a href="#" className="text-dark fw-semibold">
                    {t("xxl")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
            {/* </Col> */}
            {/* </Row> */}
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default PrivacyAndSharing;
