import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Style from "../Styles/Pricing.module.css";
import { Sub } from "../App";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const value = React.useContext(Sub);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxHeight: "fit-content",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "gray",
        overflow: "scroll",
      }}
    >
      <Typography
        component="div"
        sx={{
          bgcolor: "darkgray",
          height: "60%",
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "1rem",
          fontSize: "1.5rem",
        }}
      >
        <div>Day Pass</div>
        <div>
          <sup>$</sup>
          <sub>
            <span>20</span>
          </sub>
        </div>
        <div>/pass</div>
        <ul>
          <li>1. 1 Day Pass</li>
          <li>2. Free Gym Access</li>
          <li>3. 24 Hour Access</li>
        </ul>
        <Button
          variant="outlined"
          sx={{
            color: "grey",
            backgroundColor: "lightgreen",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "lightgreen",
              color: "grey",
              boxShadow: "0 0 10px grey",
              outline: "none",
              border: "none",
            },
          }}
          onClick={() => {
            value.setter[1]("GET STARTED");
            if (value.setter[0] === "JOIN US") {
              navigate("/register");
            } else if (value.setter[0] === "SUBSCRIBED") {
              navigate("/home");
            } else if (value.setter[0] === "GET STARTED") {
              navigate("/training");
            }
          }}
        >
          {value.setter[0]}
        </Button>
      </Typography>
      <Typography
        component="div"
        sx={{
          bgcolor: "white",
          height: "80%",
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "1rem",
          fontSize: "1.5rem",
        }}
      >
        <div>Month to Month</div>
        <div>
          <sup>$</sup>
          <sub>
            <span>90</span>
          </sub>
        </div>
        <div>/month</div>
        <ul>
          <li>1.$90 Joining Fee</li>
          <li>2.No Contract</li>
          <li>3.Free Gym Access</li>
          <li>4.1 Group Class Included</li>
          <li>5.24 Hours Access</li>
        </ul>
        <Button
          variant="outlined"
          sx={{
            color: "grey",
            backgroundColor: "lightgreen",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "lightgreen",
              color: "grey",
              boxShadow: "0 0 10px grey",
              outline: "none",
              border: "none",
            },
          }}
          onClick={() => {
            value.setter[1]("GET STARTED");
            if (value.setter[0] === "JOIN US") {
              navigate("/register");
            } else if (value.setter[0] === "SUBSCRIBED") {
              navigate("/home");
            } else if (value.setter[0] === "GET STARTED") {
              navigate("/training");
            }
          }}
        >
          {value.setter[0]}
        </Button>
      </Typography>
      <Typography
        component="div"
        sx={{
          height: "80%",
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "1rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
          }}
        >
          Membership
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: "1.4rem",
            color: "#4F4557",
            marginBottom: { xs: "1rem", sm: "0rem" },
          }}
        >
          At Gym Base, we offer a wide range of membership with options to suit
          every budget. Everything from One Day Pass. Punch Pass to monthly or
          annual prepaid memberships What more we would not the you in to a long
          term contract. giving you greater flexibilty.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            margin: "1rem 0",
          }}
        >
          Each plan included
        </Typography>
        <ul className={Style.third}>
          <li>The Best equipment global brand</li>
          <li>The gym is open 24 hours a day , 7days a week</li>
          <li>Two safe payment methods</li>
          <li>Group fitness classes in the price of subscription</li>
          <li>No long term contract period</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default Pricing;