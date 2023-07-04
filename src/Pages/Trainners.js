import React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Trainners() {
  const [open, setOpen] = React.useState(false);
  const images = [
    "https://images.pexels.com/photos/6740804/pexels-photo-6740804.jpeg",
    "https://images.pexels.com/photos/7479781/pexels-photo-7479781.jpeg",
    "https://images.pexels.com/photos/7592431/pexels-photo-7592431.jpeg",
    "https://images.pexels.com/photos/6739127/pexels-photo-6739127.jpeg",
  ];
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" margin="5rem 0rem">
        Meet Our Team
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        padding="0rem 3rem"
        marginBottom="1rem"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        accusantium laborum error quidem in, cupiditate enim dicta veritatis
        pariatur libero, vero commodi officia blanditiis tempore incidunt ipsam
        asperiores sit mollitia!
      </Typography>
      <List
        sx={{
          width: "100%",
          minHeight: "100vh",
          maxHeight: "fit-content",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {images.map((element, ind) => {
            return (
              <img
                style={{ minWidth: "30%" }}
                src={element}
                key={ind}
                height={250}
              />
            );
          })}
        </Box>

        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            bgcolor: "red",
            "&:hover": {
              bgcolor: "red",
            },
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Show More
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <List
            component="div"
            disablePadding
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {images.map((element, ind) => {
              return (
                <img
                  style={{ minWidth: "30%" }}
                  src={element}
                  key={ind}
                  height={250}
                />
              );
            })}
          </List>
        </Collapse>
      </List>
    </>
  );
}