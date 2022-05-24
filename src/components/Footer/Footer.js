import { Link, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer
      style={{
        color: "gray",
        width: "100%",
        height: "4rem",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Paper elevation={10}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Typography>
            Hecho con mucho 💚 para <b>AYI Academy</b>{" "}
            <Link
              href="https://www.linkedin.com/in/uricarron/"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
            >
              @Carron Mauricio David
            </Link>{" "}
            | Mayo 2022
          </Typography>
        </Toolbar>
      </Paper>
    </footer>
  );
};

export default Footer;
