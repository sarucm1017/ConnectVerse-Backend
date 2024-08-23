const express = require("express");
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const dbConnection  = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");



dbConnection();
const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/users",require("./routes/userRoutes"));
app.use("/api/user",require("./routes/userRoute"));

app.use(errorHandler);

app.listen(port, ()  => {
    console.log(`server is running on the port : ${port}`);
})
