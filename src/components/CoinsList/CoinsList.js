import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CoinsList = ({ coinsList }) => {
  console.log(coinsList);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>CoinAvatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">More Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsList.map((coin) => (
            <TableRow
              key={coin.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {coin.rank}
              </TableCell>
              <TableCell align="right">
                <Avatar alt={coin.id} src={coin.icon} />
              </TableCell>
              <TableCell>{`${coin.name} / ${coin.symbol}`}</TableCell>
              <TableCell align="right">{coin.priceChange1h}</TableCell>
              <TableCell align="right">{coin.price}</TableCell>
              <TableCell align="center">
                <Link to={`coins/${coin.id}`}>
                  <IconButton aria-label="delete">
                    <ChevronRightIcon />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinsList;
