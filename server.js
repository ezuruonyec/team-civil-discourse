const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const countries = require("./routes/api/countries")

const app = express()

// bodyparser middleware
app.use(bodyParser.json())
app.set('json spaces', 2)


// db config
const db = require("./config/keys").mongoURI

// connect to mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true } )
    .then(() => console.log("Mongo connected..."))
    .catch(err => console.log(err))

// use routes
app.use("/api/countries", countries)

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))