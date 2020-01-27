const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const  User = mongoose.model("users");

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },(accessToken,refreshToken,profile)=>{
    new User({
        googleId:profile.id
    });
      console.log('accerstoken',accessToken);
      console.log('refreshToken',refreshToken);
      console.log('profile',profile);
  }));