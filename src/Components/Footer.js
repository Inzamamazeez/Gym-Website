import Box from "@mui/material/Box";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Typography } from "@mui/material"; 

export default function Footer() {
  return (
    <Box
      sx={{
        color: "white",
        boxSizing: "border-box", 
        padding: "1rem",
        display: "flex",
        maxHeight: "fit-content",
        justifyContent: "space-around",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: {xs :"center"},
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
        },
      }}
    >
      <div
        style={{
          flex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: {xs:"center"},
          gap: "1rem",
        }}
      >
        <div style={{ cursor: "pointer", fontSize: "1.5rem" }}>GYM</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook size={25} fill="blue" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram size={25} fill="pink" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <BsTwitter size={25} fill="blue" />
          </a>
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <Typography variant="h5">Lorem</Typography>
        <ul>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
        </ul>
      </div>
      <div style={{ flex: "1" }}>
        <Typography variant="h5">Lorem</Typography>
        <ul>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
        </ul>
      </div>
      <div style={{ flex: "1" }}>
        <Typography variant="h5">Lorem</Typography>
        <ul>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
          <li>Lorem ipsum </li>
        </ul>
      </div>
    </Box>
  );
}