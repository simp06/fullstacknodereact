const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./service/passport");
 
 const keys = require("./config/keys");
const app = express();
require("./routes/authRoutes")(app); 
const PORT = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI);


app.listen(PORT);
