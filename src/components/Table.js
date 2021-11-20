import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function BasicTable({ handleOpen, data }) {
  const titles = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map((title) => (
              <HeaderTableCell key={title}>{title}</HeaderTableCell>
            ))}
            <HeaderTableCell>edit</HeaderTableCell>
            <HeaderTableCell>delete</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((stud, id) => {
            let id_students = stud.id;
            let each = Object.values(stud);
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={id}
              >
                {each.map((e, i) => (
                  <TableCell key={i}>{e}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => handleOpen(id_students, "edit")}>
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(id_students, "delete")}>
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
