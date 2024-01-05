const express = require('express')
const app = express()
const port = 7500
const cors = require('cors')
const connection = require("./config/database/database.js");
const passport = require( 'passport' );

app.use(cors())

 //Passport middleware
//  app.use(passport.initialize());
//  app.use(passport.session());
//  passport.serializeUser(function (user, done) {
//    done(null, user);
//  });
 
//  passport.deserializeUser(async function (user, done) {
//    done(null, user);
//  });


app.use( express.json() );
app.use( express.urlencoded( { extended: false } ));

// // // // // //

app.get('/', (req, res) => {
  res.send(new Date().toLocaleTimeString())
})

// API FOR USER/AUTH 
app.use("/api/auth", require("./routes/user/auth"))
app.use("/api/user", require("./routes/user/user"))
// Tuah Database
app.use("/api/ranch", require("./routes/ranch"))
app.use("/api/weather", require("./routes/weather"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
