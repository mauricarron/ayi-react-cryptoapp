import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CoinsList = ({ tableHeaders, tableRows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => {
              return (
                <TableCell key={header.name} align={header.align}>
                  {header.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">
                <Avatar alt={row.id} src={row.icon} />
              </TableCell>
              <TableCell>{`${row.name} / ${row.symbol}`}</TableCell>
              <TableCell align="right">{`${row.priceChange1h}%`}</TableCell>
              <TableCell align="right">{row.price.toFixed(2)}</TableCell>
              <TableCell align="center">
                <Link to={`/coins/${row.id}`}>
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

CoinsList.propTypes = {
  tableHeaders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      align: PropTypes.string.isRequired,
    })
  ).isRequired,
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      priceChange1h: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CoinsList;
