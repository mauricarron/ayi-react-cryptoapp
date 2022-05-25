import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import CoinInfoHeader from "./CoinInfoHeader";
import CoinInfoPrice from "./CoinInfoPrice";
import CoinInfoChange from "./CoinInfoChange";
import CoinInfoExtras from "./CoinInfoExtras";

const CoinInfo = ({ coinInfo }) => {
  const {
    id,
    icon,
    name,
    symbol,
    rank,
    price,
    priceArs,
    priceChange1d,
    priceChange1h,
    priceChange1w,
    websiteUrl,
    twitterUrl,
  } = coinInfo;

  return (
    <Container>
      <CoinInfoHeader id={id} icon={icon} name={name} symbol={symbol} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CoinInfoExtras
            rank={rank}
            websiteUrl={websiteUrl}
            twitterUrl={twitterUrl}
          />
        </Grid>
        <Grid
          container
          item
          direction="column"
          xs={6}
          spacing={2}
          alignItems="flex-end"
        >
          <CoinInfoPrice price={price} priceArs={priceArs} />
          <CoinInfoChange
            priceChange1h={priceChange1h}
            priceChange1d={priceChange1d}
            priceChange1w={priceChange1w}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

CoinInfo.propTypes = {
  coinInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    priceArs: PropTypes.number.isRequired,
    priceChange1d: PropTypes.number.isRequired,
    priceChange1h: PropTypes.number.isRequired,
    priceChange1w: PropTypes.number.isRequired,
    websiteUrl: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoinInfo;
