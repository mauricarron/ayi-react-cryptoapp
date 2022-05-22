import img from "./404.png";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h1" mb={2}>
            Ooops! page not found
          </Typography>
        </Grid>
        <Grid item textAlign="center">
          <img src={img} alt="page not found" width="70%" height="auto" />
        </Grid>
        <Grid item>
          <Button component={Link} to={"/"} variant="contained">
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
