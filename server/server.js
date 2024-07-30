require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

function fetchNews(Url, res) {
  axios
    .getAdapter(url)
    .then((response) => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data,
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show"
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        success: false,
        message: "Failed to fetch the data from the API",
        error: error.message
      });
    });
}
