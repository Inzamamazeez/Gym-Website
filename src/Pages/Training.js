import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Training() {

  const refe = React.useRef();
  const array = [
    "https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_960_720.jpg",
    "https://images.pexels.com/photos/7690215/pexels-photo-7690215.jpeg",
    "https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/12/04/22/15/fitness-1882721_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/24/17/56/fitness-studio-331569_960_720.jpg",
  ];
  return (
    <>
      <Typography variant="h4" marginTop={10}>
        Training Programs
      </Typography>
      <Box
        ref={refe}
        sx={{
          height: "100vh",
          maxHeight: "fit-content",
          overflow: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          scrollBehavior: "smooth",
          boxSizing: "border-box",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {array.map((ele, ind) => {
          return (
            <img src={ele} alt="profile" key={ind} style={{ height: "40%" }} />
          );
        })}
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: "10rem",
          display: { xs: "none", sm: "flex" },
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <BsFillArrowLeftCircleFill
          size={25}
          onClick={() => {
            refe.current.scrollLeft = 0;
          }}
        />
        See More
        <BsFillArrowRightCircleFill
          size={25}
          onClick={() => {
            refe.current.scrollLeft += 500;
          }}
        />
      </Box>
    </>
  );
}