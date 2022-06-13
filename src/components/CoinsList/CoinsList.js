import PropTypes from "prop-types";
import { Table, TableContainer, Paper } from "@mui/material";
import CustomTableHead from "./CustomTableHead";
import CustomTableBody from "./CustomTableBody";

const CoinsList = ({ tableHeaders, tableRows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <CustomTableHead tableHeaders={tableHeaders} />
        <CustomTableBody tableRows={tableRows} />
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
