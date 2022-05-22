import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CurrencyBitcoinIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
            color="inherit"
          >
            CryptoInfo
          </Typography>
          <Button component={Link} to={"/"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/coins"} color="inherit">
            CryptoCoins
          </Button>
          <Button component={Link} to={"/about"} color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
