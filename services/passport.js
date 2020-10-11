const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const keys = require("../config/keys")

const User = mongoose.model("users")
const AllowedUsers = mongoose.model("allowed_users")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        
        const isUserAllowed = await AllowedUsers.findOne({email: profile.emails})
        
        // User is whitelisted and is allowed to login
        if(isUserAllowed){

            const existingUser = await User.findOne({googleId: profile.id})
            
              // user already exists in db 
            if(existingUser){
                return done(null, existingUser)
            }

            // user does not exist yet - add them to db
            const user = await new User({googleId: profile.id}).save()
            done(null, user)
            
        }
    }
    ))

