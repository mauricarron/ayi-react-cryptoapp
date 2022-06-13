import PropTypes from "prop-types";
import { Grid, Typography, Tooltip } from "@mui/material";

const CoinInfoChange = ({ priceChange1h, priceChange1d, priceChange1w }) => {
  return (
    <>
      <Typography variant="h5">Change</Typography>
      <Grid container item spacing={2}>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignContent="flex-end"
          xs={4}
        >
          <Tooltip title="Price Change within last 1 Hour">
            <Typography variant="h6" component="p" color="gray" align="right">
              1HR
            </Typography>
          </Tooltip>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: priceChange1h >= 0 ? "green" : "red" }}
          >{`${priceChange1h}%`}</Typography>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignContent="flex-end"
          xs={4}
        >
          <Tooltip title="Price Change within last Day">
            <Typography variant="h6" component="p" color="gray" align="right">
              1D
            </Typography>
          </Tooltip>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: priceChange1h >= 0 ? "green" : "red" }}
          >{`${priceChange1d}%`}</Typography>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignContent="flex-end"
          xs={4}
        >
          <Tooltip title="Price Change within last Week">
            <Typography variant="h6" component="p" color="gray" align="right">
              1W
            </Typography>
          </Tooltip>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: priceChange1h > 0 ? "green" : "red" }}
          >{`${priceChange1w}%`}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

CoinInfoChange.propTypes = {
  priceChange1h: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  priceChange1w: PropTypes.number.isRequired,
};

export default CoinInfoChange;
