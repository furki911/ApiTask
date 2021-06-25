import React from "react";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UsersTable = (props) => {
  const classes = useStyles();
  return (
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="left">Number</TableCell>
          <TableCell align="left">Gender</TableCell>
          <TableCell align="left">Username</TableCell>
          <TableCell align="left">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={row.phone}>
            <TableCell align="left" component="th">
              {row.name.title + " " + row.name.first + " " + row.name.last}
            </TableCell>
            <TableCell align="left">{row.cell}</TableCell>
            <TableCell align="left">{row.gender}</TableCell>
            <TableCell align="left">{row.login.username}</TableCell>
            <TableCell align="left">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
