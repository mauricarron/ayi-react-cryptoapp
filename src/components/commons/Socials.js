import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Grid, IconButton, Link } from "@mui/material";

const Socials = () => {
  return (
    <>
      <Grid container justifyContent="space-evenly">
        <IconButton>
          <Link
            href="https://www.linkedin.com/in/uricarron/"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn />
          </Link>
        </IconButton>
        <IconButton>
          <Link
            href="https://github.com/uricarron"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </Link>
        </IconButton>
        <IconButton>
          <Link
            href="https://twitter.com/uricarron"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </Link>
        </IconButton>
      </Grid>
    </>
  );
};

export default Socials;
