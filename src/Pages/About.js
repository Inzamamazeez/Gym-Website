import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
const About = () => {

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        maxHeight: "fit-content",
        padding: "0.5rem",
        overflow: "scroll",
      }}
    >
      <Grid xs={10} sm={6} sx={{ maxHeight: "fit-content" }}>
        <iframe
          width="90%"
          height="400rem"
          src="https://www.youtube.com/embed/-a4vyrtxr_U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid xs={10} sm={6} sx={{ fontSize: "2rem" , fontWeight:"500"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit
        asperiores. Dicta ab ducimus cupiditate provident porro facere iste
        doloribus esse accusamus, tempora officiis hic accusantium distinctio
        itaque ea sint!
        <Button
          variant="contained"
          sx={{
            bgcolor: "red",
            display: "block",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={() => {
            alert("You clicked about more.");
          }}
        >
          More
        </Button>
      </Grid>
      <Grid xs={10} sm={6} sx={{ fontSize: "2rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit
        asperiores. Dicta ab ducimus cupiditate provident porro facere iste
        doloribus esse accusamus, tempora officiis hic accusantium distinctio
        itaque ea sint!
      </Grid>
      <Grid xs={10} sm={6}>
        <iframe
          width="90%"
          height="400rem"
          src="https://www.youtube.com/embed/Y5RtQ4cawVk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default About;