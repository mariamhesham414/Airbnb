import React, { useState } from "react";
// import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// react icons
import { IoSearchCircleSharp } from "react-icons/io5";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { ButtonBase, Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./LocationSearch.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setHouses } from "../../Store/slices/houses";
import axiosInstance from "../../AxiosConfig/instance";
// // ====================== translate site functionality==================
// const { t, i18n } = useTranslation();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LocationSearch() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  const searchByRegion = (e) => {
    axiosInstance
      .get("/houses/search", {
        params: {
          region: query,
        },
      })
      .then((response) => {
        // dispatch(setHouses(response.data.data.houses));
        // console.log(response.data.data);
        dispatch(setHouses(response.data.data));
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value2, setValue2] = React.useState([0]);
  const { t, i18n } = useTranslation();
  const handleChange2 = (event, newValue) => {
    value2.push(newValue);
    setValue2(value2);
  };
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "dashed" },
            style: {
              textTransform: "none",
              border: `2px dashed`,
            },
          },
          {
            props: { variant: "dashed", color: "secondary" },
            style: {
              border: `4px dashed `,
            },
          },
        ],
      },
    },
  });
  const choices = [
    { id: 1, text: t("Anywhere") },
    { id: 2, text: t("Anyweek") },
    { id: 3, text: t("Addguest"), withIcon: true },
  ];
  const [isHiden, setIsHiden] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);
  const toggleSearchBar = () => {
    setIsHiden(!isHiden);
  };
  const toggleDate = () => {
    setIsFlexible(!isFlexible);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [moveInOptionsSearchLocation, setmoveInOptionsSearchLocation] =
    React.useState(false);
  const [
    moveInOptionsSearchCheckInAndCheckOut,
    setmoveInOptionsSearcCheckInAndCheckOut,
  ] = React.useState(false);
  const [moveInOptionsSearchGuests, setmoveInOptionsSearchGuests] =
    React.useState(false);
  const moveInOptionsSearchTabsFunc = (CurrentTab) => {
    if (CurrentTab == "Location") {
      setmoveInOptionsSearchLocation(true);
      setmoveInOptionsSearchGuests(false);
      setmoveInOptionsSearcCheckInAndCheckOut(false);
      // handleOpen()
    } else if (CurrentTab == "CheckInAndCheckOut") {
      setmoveInOptionsSearchLocation(false);
      setmoveInOptionsSearchGuests(false);
      setmoveInOptionsSearcCheckInAndCheckOut(true);
    } else if (CurrentTab == "Guests") {
      setmoveInOptionsSearchLocation(false);
      setmoveInOptionsSearchGuests(true);
      setmoveInOptionsSearcCheckInAndCheckOut(false);
    }
  };

  return (
    <>
      <Container
        sx={{
          display: isHiden == true ? "none" : "flex",
          justifyContent: "flex-end",
        }}
      >
        <Paper
          className="pointer shadow-sm"
          sx={{
            border: "1px solid #ebebeb",
            borderRadius: 20,
            ml: "8rem",
            p: 1,
            width: "100%",
          }}
          elevation={3}
        >
          <Stack
            sx={{
              borderRadius: 20,
              pl: 2,
              justifyContent: "space-evenly",
            }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ justifyContent: "space-evenly" }}
              />
            }
          >
            {choices.map((choice) => {
              return (
                <ButtonBase
                  onClick={(e) => {
                    toggleSearchBar(e);
                  }}
                  className="button"
                  key={choice.id}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {choice.text}
                  </Typography>
                  {choice.withIcon && (
                    <Box
                      sx={{
                        pl: 1.2,
                      }}
                    >
                      <IoSearchCircleSharp sx={{}} color="#FF385C" size={32} />
                    </Box>
                  )}
                </ButtonBase>
              );
            })}
          </Stack>
        </Paper>
      </Container>
      <Container
        sx={{
          display: isHiden == false ? "none" : "flex",
          justifyContent: "center",
          p: 0,
          m: 0,
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderColor: "divider", marginLeft: 20 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              style={{ justifyContent: "center" }}
            >
              <Tab label={t("Stays")} {...a11yProps(0)} />
              <Tab label={t("Experiences")} {...a11yProps(1)} />
              <Tab label={t("Online")} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="bar p-0 m-0" style={{ height: "10%" }}>
              <div className="rounded-pill border-0">
                <p className="ps-3 BarTitle text-start">{t("Locationing")}</p>
                <input
                  style={{ fontSize: "1rem" }}
                  type="text"
                  placeholder="Africa , Turkey, Italy,Euroupe"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="rounded-pill border-0">
                <p className="px-3 BarTitle text-start">{t("CheckIn")}</p>
                <input
                  disabled
                  className="px-3"
                  type="text"
                  placeholder="Add dates"
                />
              </div>
              <div className="rounded-pill border-0">
                <p className="px-3 BarTitle text-start">{t("CheckOut")}</p>
                <input
                  disabled
                  className="px-3"
                  type="text"
                  placeholder="Add dates"
                />
              </div>
              <div className="rounded-pill border-0">
                <p className="px-3 BarTitle text-start">{t("Guests")}</p>
                <input
                  disabled
                  className="px-3"
                  type="text"
                  placeholder="Add guests"
                />
              </div>
              <span
                onClick={() => {
                  moveInOptionsSearchTabsFunc("Guests");
                }}
                className={`guests  rounded-pill border-0 `}
              >
                <span
                  onClick={() => {
                    searchByRegion();
                    toggleSearchBar();
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </span>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="bar2 p-0 m-0" style={{ height: "50%" }}>
              <div className="bar p-0 m-0" style={{ height: "10%" }}>
                <div className="rounded-pill border-0">
                  <p className="ps-3 BarTitle text-start">{t("Locationing")}</p>
                  <input type="text" placeholder="Where are you going?" />
                </div>

                <div className="rounded-pill border-0">
                  <p className="px-3 BarTitle text-start">{t("Date")}</p>
                  <input
                    disabled
                    className="px-3"
                    type="text"
                    placeholder="Add dates"
                  />
                </div>
                <div className="rounded-pill border-0">
                  <p className="px-3 BarTitle text-start">{t("Guests")}</p>
                  <input
                    disabled
                    className="px-3"
                    type="text"
                    placeholder="Add guests"
                  />
                </div>
                <span
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("Guests");
                  }}
                  className={`guests  rounded-pill border-0 `}
                >
                  <span
                    onClick={() => {
                      toggleSearchBar();
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </span>
              </div>
              <span
                onClick={() => {
                  moveInOptionsSearchTabsFunc("Guests");
                }}
                className={`guests  rounded-pill border-0 `}
              >
                <span
                  onClick={() => {
                    toggleSearchBar();
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </span>
            </div>
          </CustomTabPanel>
        </Box>
      </Container>
    </>
  );
}
const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 6px;
      margin: 12px 0;
      min-width: 200px;
      border-radius: 12px;
      overflow: auto;
      outline: 0px;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      box-shadow: 0px 4px 30px ${
        theme.palette.mode === "dark" ? grey[900] : grey[200]
      };
      z-index: 1;
      `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
      list-style: none;
      padding: 8px;
      border-radius: 8px;
      cursor: default;
      user-select: none;
    
      &:last-of-type {
        border-bottom: none;
      }
    
      &.${menuItemClasses.focusVisible} {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
    
      &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
    
      &:hover:not(.${menuItemClasses.disabled}) {
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
      `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      box-sizing: border-box;
      min-height: calc(1.5em + 22px);
      border-radius: 12px;
      padding: 8px 14px;
      line-height: 1.5;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      }
    
      &:focus-visible {
        border-color: ${blue[400]};
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[500] : blue[200]
        };
      }
      `
);
