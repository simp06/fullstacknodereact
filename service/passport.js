const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const  User = mongoose.model("users");
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
            done(null,user);
        });
});
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },(accessToken,refreshToken,profile,done)=>{
    console.log("profile",profile.id);

    User.findOne({googleId:profile.id}).then(existingUser=>{
      if(existingUser){
          done(null,existingUser);
       }else{
           new User({
            googleId:profile.id
          }).save()
            .then(user=>done(null,user));
      }
    });
      console.log('accerstoken',accessToken);
      console.log('refreshToken',refreshToken);
      console.log('profile',profile);
  }));