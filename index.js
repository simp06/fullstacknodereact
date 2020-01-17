const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
const PORT = process.env.PORT || 5000;
passport.use(new GoogleStrategy());
app.listen(PORT);
/*
Client ID
182130924998-qt12b9lrr79h1p9tgs0j2im8i6aqr389.apps.googleusercontent.com
Client secret
Gb_k5uG6zkKvSzdggQKuRx0n */