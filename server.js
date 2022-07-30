const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const adminRouter = require("./routes/validation");
app.use(adminRouter);


app.listen(3000, () => console.log(" Gym server started at 3000 port"));