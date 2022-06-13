import {
  Avatar,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomTableBody = ({ tableRows }) => {
  return (
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
          <Tooltip title="Price Change per 1hr">
            <TableCell
              align="right"
              sx={{ color: row.priceChange1h >= 0 ? "green" : "red" }}
            >{`${row.priceChange1h}%`}</TableCell>
          </Tooltip>
          <Tooltip title="USD">
            <TableCell align="right">{`$${row.price.toFixed(2)}`}</TableCell>
          </Tooltip>
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
  );
};

export default CustomTableBody;
