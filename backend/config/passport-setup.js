const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../model/UserModel');

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:"/auth/google/callback"
    },(accessToken, refreshToken, profile, done) => {
        User.findOne({userId: profile.id}, (err, data) => {
            if(err){ return done(err)};
            if(data){
                console.log('user is ' + data)
                done(null, data);
            }
            else{
                new User({
                    userId: profile.id,
                    username: profile.displayName,
                    oil: 100
                }).save().then((newUser) => {
                    console.log('new user: ' + newUser);
                    done(null, newUser)
                })
            }

        })
        
    })
)