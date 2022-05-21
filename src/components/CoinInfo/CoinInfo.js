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
          <CoinInfoPrice price={price} />
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

export default CoinInfo;
