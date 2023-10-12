import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Notifications.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

function Notifications() {

  const { t, i18n } = useTranslation();

  // =================   =================

  const lanuguage= localStorage.getItem("selectedLanguage")

  return (
    <>
      <div className="texes d-flex flex-column justify-content-center container-lg p-5 " 
        style={(lanuguage === "ar")?{ direction:"rtl"}:{direction:"ltr"}}
      >
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
                {t("Notifications")}
              </a>
            </p>
          </div>
          <h2 className="fw-bold">{t("Notifications")}</h2>
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
                  {t("Offe")}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                         {t("Account")}
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
                      <h4 className="fw-semibold "> {t("offerss")}</h4>
                      <p className=" text-secondary">
                      {t("personalized")}
                        
                      </p>
                      <p className="mb-1">    {t("Inspiration")}</p>
                      <p className="text-secondary mb-2">    {t("OnEmail")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          {t("Edit")}
                        </a>
                      </p>
                      <p className="mb-1">    {t("planning")}</p>
                      <p className="text-secondary mb-2">   {t("OnEmail")}</p>
                      <p className="border-bottom pb-4">
                        <a href="#" className="text-dark fw-semibold mb-4">
                        {t("Edit")}
                        </a>
                      </p>
                    </div>
                    <div className=" pb-4 border-bottom">
                      <h4 className="fw-semibold ">{t("Accupdates")}</h4>
                      <p className=" text-secondary">
                      {t("latestnews")}
                      
                      </p>
                      <p className="mb-1">    {t("programs")}</p>
                      <p className="text-secondary mb-2">     {t("OnEmail ")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                              {t("Edit")}
                        </a>
                      </p>
                      <p className="mb-1">  {t("Feedback")}</p>
                      <p className="text-secondary mb-2">{t("OnEmail")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                        {t("Edit")}
                        </a>
                      </p>
                      <p className="mb-1">{t("regulations")}</p>
                      <p className="text-secondary mb-2"> {t("OnEmail")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                        {t("Edit")}
                        </a>
                      </p>
                    </div>
                    <div className=" mt-4 pb-4 ">
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`default-${type}`} className="mb-3 ">
                            <Form.Check // prettier-ignore
                              type={type}
                              id={`default-${type}`}
                              label={`Unsubscribe from all marketing emails`}
                              className="h5 fw-normal"
                            />
                          </div>
                        ))}
                      </Form>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">
                      {t("policies")}
                
                      </h4>
                      <p className=" text-secondary">
                      {t("bookings")}
                        
                      </p>
                      <p className="mb-1">{t("activitys")}</p>
                      <p className="text-secondary mb-2">{t("SMS")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          {t("Edit")}
                        </a>
                      </p>
                      <p className="mb-1">  {t("Guestsl")}</p>
                      <p className="text-secondary mb-2">{t("SMS")}</p>
                      <p className="border-bottom pb-4">
                        <a href="#" className="text-dark fw-semibold ">
                        {t("Edit")}
                        </a>
                      </p>
                    </div>
                    <div className=" pb-4 border-bottom ">
                      <h4 className="fw-semibold"> {t("Reminders")}</h4>
                      <p className=" text-secondary">
                      {t("reminder")}
                        
                      </p>
                      <p className="mb-1">{t("Reminders")}</p>
                      <p className="text-secondary mb-2">{t("SMS")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          {t("Edit")}
                        </a>
                      </p>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold mt-2">
                          {t("Guestl")}
                      </h4>
                      <p className=" text-secondary">
                      {t("befores")}
                       
                      </p>
                      <p className="mb-1"> {t("Messages")}</p>
                      <p className="text-secondary mb-2"> {t("SMS")}</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                        {t("Edit")}
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

export default Notifications;
