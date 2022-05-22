import img from "./home-splash.png";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Grid container spacing={2} p={2} alignItems="center" height="90vh">
        <Grid item xs={5}>
          <Typography variant="h1">CryptoInfo</Typography>
          <Typography variant="h4" component="h2" mb={6}>
            Explore the crypto market in real time!
          </Typography>

          <Button component={Link} to={"/coins"} variant="contained">
            Explore Cryptos
          </Button>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <img src={img} alt="Home Splash" width="100%" height="auto" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
