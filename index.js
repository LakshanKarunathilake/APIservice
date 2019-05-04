const express = require("express");
const app = express();
const axios = require("axios");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Code to state function
app.get("/codeToState", function(req, res) {
  console.log("Calling codeToState end point in api-service");
  const code = req.query.code;
  axios
    .get(`http://data-service-jm8hn:3001/codeToState?code=${code}`)
    .then(response => {
      console.log(response.data);
      res.send({ state: response.data.state });
    });
});

// State to code function
app.get("/stateToCode", function(req, res) {
  console.log("Calling stateToCode end point in api-service");
  const state = req.query.state;
  console.log("state", state);
  axios
    .get(`http://data-service-jm8hn:3001/stateToCode?state=${state}`)
    .then(response => {
      console.log(response.data);
      res.send({ code: response.data.code });
    });
});

app.get("/", function(req, res) {
  console.log("calling default");
  res.send({ message: "Welcome to the API Service..." });
});
