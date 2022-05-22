import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const Footer = () => {
  return (
    <footer style={{ color: "gray", position: "fixed", bottom: 0 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography>Copyright</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;
