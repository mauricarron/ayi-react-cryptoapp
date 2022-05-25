import PropTypes from "prop-types";
import { Avatar, Typography, Grid } from "@mui/material";

const CoinInfoHeader = ({ id, icon, name, symbol }) => {
  return (
    <Grid container spacing={2} direction="row" alignItems="center" mb={2}>
      <Grid item>
        <Avatar alt={id} src={icon} sx={{ width: 64, height: 64 }} />
      </Grid>
      <Grid container item direction="row" alignItems="baseline" xs={11}>
        <Typography variant="h2" component="h1" mr={1}>
          {name}
        </Typography>
        <Typography variant="h6" color="gray">
          {symbol}
        </Typography>
      </Grid>
    </Grid>
  );
};

CoinInfoHeader.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CoinInfoHeader;
