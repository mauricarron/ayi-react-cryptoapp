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

const CoinsList = ({ tableHeaders, tableRows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => {
              return <TableCell align={header.align}>{header.name}</TableCell>;
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

export default CoinsList;
