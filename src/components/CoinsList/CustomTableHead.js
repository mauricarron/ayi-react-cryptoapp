import { TableCell, TableHead, TableRow } from "@mui/material";

const CustomTableHead = ({ tableHeaders }) => {
  return (
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
  );
};

export default CustomTableHead;
