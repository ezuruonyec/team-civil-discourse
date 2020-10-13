const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const keys = require("../config/keys")

const User = mongoose.model("users")

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
        
        

            const existingUser = await User.findOne({email: profile.emails[0].value})
            
              // user already exists in db 
            if(existingUser){
               if(existingUser.googleId === ""){
                  await existingUser.update({
                      googleId: profile.id, 
                      displayName: profile.displayName,
                      name: profile.name,
                      photos: profile.photos
                    })
               }
                return done(null, existingUser)
            }

            // // user does not exist yet - add them to db
            // const updateUser = isUserAllowed.update({googleId: profile.id})
            // // const user = await new User({googleId: profile.id}).save()
            // done(null, updateUser)
            done(null)
            
        }
    ))

