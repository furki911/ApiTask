import React from "react";
import "./App.css";
import axios from "axios";

import Container from "@material-ui/core/Container";

import Layout from "./components/Layout";

import fetchData from "./apis/fetchData";

import { CircularProgress, Grid } from "@material-ui/core";

class App extends React.Component {
  state = { users: [] };

  cancelTokenSource = axios.CancelToken.source();

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100", {
        cancelToken: this.cancelTokenSource.token,
      })
      .then((res) => {
        this.setState({ users: res.data.results });
      })
      .catch((error) => {
        alert("Error in loading Data, Please refresh the page");
      });
  }

  componentWillUnmount() {
    this.cancelTokenSource.cancel();
  }

  render() {
    return (
      <div className="container">
        <Container maxWidth="lg">
          &nbsp;
          {this.state.users.length ? (
            <>
              {/* <Layout type={"Table"} data={this.state.users} button={"Chart"} /> */}
              <Layout type={"Chart"} data={this.state.users} button={"Table"} />
            </>
          ) : (
            <Grid
              item
              xs={12}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                transform: "scale(3)",
              }}
            >
              <CircularProgress
                style={{
                  color: "#fff",
                }}
              />
            </Grid>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
