const express = require("express");
const mongoose = require("mongoose");
 require("./service/passport");
 require("./models/User");
 const keys = require("./config/keys");
const app = express();
require("./routes/authRoutes")(app); 
const PORT = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI);


app.listen(PORT);
