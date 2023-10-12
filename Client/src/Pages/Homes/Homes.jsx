import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import "./Homes.css";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Homes_Footer from "./Homes_Footer";
import { t } from "i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Homes = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const NightCost = 84.037;
  const handleSliderChange = (event, value) => {
    setSliderValue(value);
  };

  const earnings = (NightCost * sliderValue).toLocaleString();
  const lang = localStorage.getItem("selectedLanguage");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ==================  directions =============
  const lanuguage = localStorage.getItem("selectedLanguage");

  return (
    <>
      <div
        style={lanuguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="container my-5">
          <div className="row ">
            <div className="col-lg-5 mt-5  col-md-12 col-sm-12">
              <div className="d-flex align-items-center justify-content-center flex-column ">
                <p
                  style={{ fontSize: "50px" }}
                  className="text-danger fw-bold "
                >
                  {t("airband")}
                </p>
                <div>
                  <span
                    className="fw-bold"
                    style={{ fontSize: "50px", color: "#444" }}
                  >
                    {" "}
                    {t("earn")}
                  </span>
                </div>
                <div>
                  <span className="fw-bold" style={{ fontSize: "70px" }}>
                    ${earnings} CLP
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: "20px", color: "#444" }}>
                    <a href="#" className="fw-bold text-dark">
                      {sliderValue} {t("night")}{" "}
                    </a>{" "}
                    {t("estimated")}
                  </p>
                </div>

                <div className="mx-2 mt-4">
                  <Box sx={{ width: 450 }}>
                    <Slider
                      defaultValue={1}
                      min={1}
                      aria-label="Price per night"
                      max={30}
                      style={{
                        color: "#000",
                        width: "100%",
                        transition: "all 0.7s ease",
                      }}
                      valueLabelDisplay="auto"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      color="secondary"
                    />
                  </Box>
                </div>
                <div className="">
                  <a href="#" style={{ fontSize: "15px", color: "#444" }}>
                    {t("learn")}
                  </a>
                </div>
              </div>
              <div className="my-3 mx-5">
                <div
                  className="search_bar_user_place py-3 px-1 row border bg-outline-light "
                  onClick={handleOpen}
                >
                  <div className="col-2 mx-1">
                    <SearchIcon style={{ color: "#e61e4d " }} />
                  </div>
                  <div className="col-9  d-flex  flex-column felx-start">
                    <div className="fw-bold">{t("Cairo")}</div>
                    <div className="" style={{ color: "#444 " }}>
                      {t("placeinfo")}
                    </div>
                  </div>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="keep-mounted-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                        <span onClick={handleClose}>x</span>
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: " 100%", width: "100%" }}
              >
                <iframe
                  className="rounded"
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "50em" }}
                  allowFullScreen
                ></iframe>
              </div>
              "
            </div>
          </div>
          <div className="" style={{ margin: "110px auto" }}>
            <div className="my-2 d-flex align-items-lg-center">
              <span className="fw-bold mx-auto " style={{ fontSize: "50px" }}>
                {t("Setup")}
              </span>
            </div>
            <div className="my-5">
              {lang == "en" ? (
                <img
                  src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
                  alt=""
                  className="img-fluid"
                />
              ) : (
                <img
                  src="https://a0.muscache.com/im/pictures/d1a45a0c-60f9-483f-bc86-9a160b536069.jpg?im_w=2560&im_q=highq"
                  alt=""
                  className="img-fluid"
                />
              )}
            </div>
            <div className="my-4 row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <span className="fw-bold " style={{ fontSize: "18px" }}>
                  {t("One-to-one")}
                </span>
                <p className="my-3"> {t("match")} </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <span className="fw-bold " style={{ fontSize: "18px" }}>
                  {" "}
                  {t("booking")}
                </span>
                <p className="my-3"> {t("choose")} </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <span className="fw-bold " style={{ fontSize: "18px" }}>
                  {" "}
                  {t("Specialized")}
                </span>
                <p className="my-3">{t("everything")}</p>
              </div>
            </div>
          </div>
          <div className="my-5 w-75 mx-auto">
            <div className="my-3 mx-auto" style={{ width: "200px" }}>
              {lang === "en" ? (
                <img
                  className="img-fluid "
                  src="https://a0.muscache.com/im/pictures/5318dacc-6476-4195-8dd2-b9a66fa2efbb.jpg?im_w=480&im_q=highq"
                  alt=""
                />
              ) : (
                <img
                  className="img-fluid "
                  src="https://a0.muscache.com/im/pictures/8cb67984-a153-4e9b-86eb-12fbe7082488.jpg?im_w=480&im_q=highq"
                  alt=""
                />
              )}
            </div>
            <div className="my-3 d-flex align-items-center">
              <span className="fw-bold mx-auto " style={{ fontSize: "40px" }}>
                {" "}
                {t("protect")}
              </span>
            </div>
            <div className="row my-4 border-bottom">
              <div className="col-lg-8 col-md-8 col-sm-2 my-2"></div>
              <div className="col-lg-4 col-md-4 col-sm-8 d-flex my-2">
                <span className="mx-3" style={{ fontSize: "25px" }}>
                  Airbnb
                </span>
                <span className="mx-3" style={{ fontSize: "25px" }}>
                  {t("Competitors")}
                </span>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h4 className="fw-bold"> {t("verification")}</h4>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-success fw-bold">
                    <CheckIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-6 col-md-12 colsm-12 my-2">
                  <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                    {" "}
                    {t("info")}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h4 className="fw-bold">{t("Reservation")}</h4>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-6 col-md-12 colsm-12 my-2">
                  <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                    {" "}
                    {t("damage")}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h4 className="fw-bold"> {t("protection")}</h4>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-6 col-md-12 colsm-12 my-2">
                  <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                    {t("reimburses")}
                  </p>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h5 className="">{t("valuables")} </h5>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h5 className="">{t("boat")}</h5>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h5 className="">{t("Petdamage")} </h5>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h5 className="">{t("Incomeloss")}</h5>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h6 className="">{t("Deepcleaning")}</h6>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h4 className="fw-bold">{t("liability")} </h4>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-success fw-bold">
                    <CheckIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-6 col-md-12 colsm-12 my-2">
                  <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                    {t("guestgets")}
                  </p>
                </div>
              </div>
            </div>
            <div className=" my-4 border-bottom">
              <div className="row my-3">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="my-2">
                    <h4 className="fw-bold">{t("safetyline")}</h4>
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <span className=" mx-2 text-success fw-bold">
                    <CheckIcon style={{ fontSize: "40px" }} />
                  </span>
                  <span className=" mx-3 text-danger fw-bold">
                    <ClearIcon
                      style={{ marginLeft: "100px", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-6 col-md-12 colsm-12 my-2">
                  <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                    {t("unsave")}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <p style={{ color: "rgba(0,0,0,.5)", fontSize: "18px" }}>
                {t("Comparison")}
                <a href="#" className="fw-bold text-dark">
                  {t("here")}
                </a>
                .
              </p>
            </div>
            <div className="my-5 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-outline-light  px-4 py-2 "
                style={{ border: "1px solid #000" }}
              >
                {" "}
                <a href="#" className="text-decoration-none text-dark bold">
                  {t("LearnMore")}
                </a>{" "}
              </button>
            </div>
          </div>
          <div className="  img_main_box mx-auto" style={{ marginTop: "6em" }}>
            <div className="d-flex align-items-center ">
              <h1 className=" bold  mx-auto img_head_airband">
                {t("apartments")}
              </h1>
            </div>
            <div className="d-flex align-items-center  my-3">
              <div className=" row my-3">
                <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                  <div className=" border-none">
                    <div className="card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/fc21732f-df29-4b54-9bc4-cfbe178c54c4.jpg?im_w=1200&im_q=highq"
                        alt=""
                        className="img-fluid"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                    <div className="card-body d-flex align-items-center mt-2 flex-column ">
                      <span className="bold" style={{ fontSize: "12px" }}>
                        {t("Apartments")}
                      </span>
                      <span
                        style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}
                      >
                        {t("SanDiego")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                  <div className=" border-none">
                    <div className="card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/c92564a5-41a3-4bac-8a6a-a07d421032e0.jpg?im_w=1200&im_q=highq"
                        alt=""
                        className="img-fluid "
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                    <div className="card-body d-flex align-items-center mt-2 flex-column ">
                      <span className="bold" style={{ fontSize: "12px" }}>
                        {t("OldTown")}{" "}
                      </span>
                      <span
                        style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}
                      >
                        {t("Arizona")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                  <div className=" ">
                    <div className="card-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/a1a9196c-2161-42de-959a-e510852f927b.jpg?im_w=1200&im_q=highq"
                        alt=""
                        className="img-fluid"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                    <div className="card-body d-flex align-items-center flex-column mt-2 ">
                      <span className="bold" style={{ fontSize: "14px" }}>
                        {t("525Olive")}
                      </span>
                      <span
                        style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}
                      >
                        {t("SanCalifornia")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <p style={{ fontSize: "25px" }}> {t("Explore")} </p>
            </div>
            <div className="my-5 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-outline-light  px-4 py-2 "
                style={{ border: "1px solid #000" }}
              >
                {" "}
                <a href="#" className="text-decoration-none text-dark bold">
                  {t("LearnMore")}
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        {/*  responsive thing  */}
        <div
          className=" bg-light container-fluid"
          style={{ margin: "7em 0 0 0" }}
        >
          <div className="border-bottom">
            <div className="container">
              <div className="row  mx-3">
                <div className="col-lg-6 col-md-3 col-sm-12 my-5">
                  <h1>{t("questions")}</h1>
                  <h1>{t("answered")}</h1>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-12 my-5">
                  <div>
                    <Accordion className=" bg-light shadow-none py-4">
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ fontSize: "40px" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "24px" }}
                        >
                          {" "}
                          {t("ques1")}{" "}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}
                        >
                          {t("ans1")}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className=" bg-light shadow-none py-4">
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ fontSize: "40px" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "24px" }}
                        >
                          {t("ques2")}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}
                        >
                          {t("ans2")}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className=" bg-light shadow-none py-4">
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ fontSize: "40px" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "24px" }}
                        >
                          {t("ques3")}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}
                        >
                          {t("ans3")}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className=" bg-light shadow-none py-4">
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ fontSize: "40px" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "24px" }}
                        >
                          {t("ques4")}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}
                        >
                          {t("ans4")}
                          <div>
                            <a href="" className=" text-dark">
                              {" "}
                              {t("ans4_1")}{" "}
                            </a>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className=" bg-light shadow-none py-4">
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ fontSize: "40px" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "24px" }}
                        >
                          {" "}
                          {t("ques5")}{" "}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          className="mx-4"
                          style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}
                        >
                          {t("ans5")}
                          <div>
                            <a href="" className=" text-dark">
                              {t("ans5_1")}{" "}
                            </a>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" bg-white mx-auto my-5"
              style={{ borderRadius: "20px", width: "90%" }}
            >
              <div className="row  ">
                <div className="col-lg-6 col-md-6 col-sm-12 img-card px-4 ">
                  <img
                    style={{
                      height: "300px",
                      borderRadius: "20px",
                      width: "550px",
                      objectFit: "cover",
                    }}
                    src="https://a0.muscache.com/im/pictures/f1879cc3-6fbe-4285-8e61-44a814dd7fb8.jpg?im_w=1200&im_q=highq"
                    alt=""
                    className="img-fluid "
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-sm-center justify-content-center flex-column">
                  <h1> {t("still")} </h1>
                  <p>{t("Getanswer")}</p>
                  <div className="button my-3">
                    <button
                      className="btn btn-outline-light text-dark px-3 py-2 fw-bold"
                      style={{ border: "1px solid #000" }}
                    >
                      {t("Superhost")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Homes_Footer />
        </div>
      </div>
    </>
  );
};

export default Homes;
