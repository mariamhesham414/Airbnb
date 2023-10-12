import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Taxes.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useTranslation } from "react-i18next";
// import { useState } from "react";

function Taxes() {
  const { t, i18n } = useTranslation();
  // =================   =================
 
  const lanuguage= localStorage.getItem("selectedLanguage")
  return (
    <>
      <div className="texes d-flex flex-column justify-content-center container-lg p-5 "
      
      style={(lanuguage === "ar")?{ direction:"rtl"}:{direction:"ltr"}}>
        <div className="taxe text-decoration-none">
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
                 {t("Taxes")}
              </a>
            </p>
          </div>
          <h2 className="fw-bold"> {t("Taxes")}</h2>
        </div>
        <div className="w-100 mt-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* <Row> */}
            {/* <Col sm={3}> */}
            <div className="payLeft">
              <div className="titles border-bottom">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="me-4 border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                         {t("  Taxpayers")}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                         {t("Tax")}
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
                  <div className="payLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold ">  {t("Taxpayerx")}</h4>
                      <p className="m-0">
                         {t("most")}
                      </p>
                      <p>
                        <a href="#" className="text-dark fw-semibold ">
                          {t("LearnMore")}
                        </a>
                      </p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 "> {t("tax")}</h6>
                      </button>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold "> {t("VAT")}</h4>
                      <p className="m-0">
                         {t("VATregistered")}
                      </p>
                      <p>
                        <a href="#" className="text-dark fw-semibold ">
                        {t("LearnMore")}
                        </a>
                      </p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 "> {t("ad")}</h6>
                      </button>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold ">  {t("bn")}</h4>
                      <span className="m-0">
                          {t("answers")}
                        <a href="#" className="text-dark fw-semibold ">
                           {t("Help")}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-5 border-bottom">
                      <p>
                          {t("filing")}
                      </p>
                      <p>
                        {t("also")}
                        <a href="#" className="text-dark fw-semibold ">
                          {t("earnings")}
                        </a>
                      </p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2022</h4>
                      <p className="text-secondary"> {t("issued")}</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2021</h4>
                      <p className="text-secondary">{t("issued")}</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2020</h4>
                      <p className="text-secondary">{t("issued")}</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2019</h4>
                      <p className="text-secondary">{t("issued")}</p>
                    </div>
                    <div className=" mt-5 pb-5">
                      <p className="pb-5">
                         {t("lll")}
                        <a href="#" className="text-dark fw-semibold">
                            {t("us")}
                        </a> 
                      </p>
                      <h4 className="fw-semibold"> {t("Help")}</h4>
                      <p>
                        x  {t("Get")}
                        <a href="#" className="text-dark fw-semibold">
                        {t("Help")}
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

export default Taxes;
