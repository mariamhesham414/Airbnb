import React from "react";
import { ButtonBase } from "@mui/material";
import { FaMap } from "react-icons/fa";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Button } from '@mui/material';

export default function ShowList() {
  const navigate = useNavigate();
  const navigateToMap = () => {
    navigate(`/`);
  };
  return (
    <>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}
      >
        <ButtonBase
        onClick={()=>{navigateToMap()}}
          style={{ backgroundColor: "#444" }}
          sx={{
            border: "1px solid #222",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 10,
            textTransform: "capitalize",
            p: 1.5,
            color: "white",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#222",
            marginX: "auto",
            marginBottom: "2rem",
            zIndex: 20,
            fontWeight: "bold",
            variant: "black",
          }}
        >
          Show list <FaMap style={{ marginLeft: "3px" }} />
        </ButtonBase>
      </Box>
    </>
  );
}
