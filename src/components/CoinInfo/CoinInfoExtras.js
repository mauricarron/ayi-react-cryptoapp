import { Typography, Grid, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";

const CoinInfoExtras = ({ rank, websiteUrl, twitterUrl }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h5">Rank</Typography>
        <Typography variant="h1" component="p">{`${rank}${
          rank === 1 ? "⭐" : ""
        }`}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" mb={2}>
          Links
        </Typography>
        <Typography variant="h6" component="p">
          <LanguageIcon />
          <Link
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            color="inherit"
            underline="none"
          >
            Official Website
          </Link>
        </Typography>
        <Typography variant="h6" component="p">
          <TwitterIcon />
          <Link
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            color="inherit"
            underline="none"
          >
            Official Twitter
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CoinInfoExtras;
