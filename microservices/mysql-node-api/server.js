const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send('GiftPlasma API Server');
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});
