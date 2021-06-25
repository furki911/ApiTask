import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Userstable from "./Userstable";
import { Grid, Button, Paper, TableContainer } from "@material-ui/core";

const Layout = (props) => {
  return (
    <Grid
      style={{
        position: "relative",
      }}
    >
      <Button
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          transform: "translateY(-100%)",
        }}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        {props.button}
      </Button>

      {props.type === "Table" ? (
        <TableContainer component={Paper}>
          <Userstable data={props.data} />
        </TableContainer>
      ) : (
        <Chart data={props.data} />
      )}
    </Grid>
  );
};

export default Layout;
