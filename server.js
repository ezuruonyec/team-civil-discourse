const express = require("express")
const mongoose = require("mongoose")
const cookiesSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
const bodyParser = require("body-parser")
const countries = require("./routes/api/countries")
const users = require("./routes/api/users")

require("./models/User")

require("./services/passport")

const app = express()

// bodyparser middleware
app.use(bodyParser.json())
app.set('json spaces', 2)


// db config
const db = require("./config/keys").mongoURI

// connect to mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true } )
    .then(() => console.log("Mongo connected."))
  

app.use(
    cookiesSession({
        //30 days
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
  
    })
)

  
  app.use(passport.initialize())
  app.use(passport.session())



// use routes
app.use("/api/countries", countries)
app.use("/api/users", users)

require("./routes/authRoutes")(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);