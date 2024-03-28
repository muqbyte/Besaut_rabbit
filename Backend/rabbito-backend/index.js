const express = require('express')
const app = express()
const port = 7500
const cors = require('cors')
const connection = require("./config/database/database.js");
const passport = require( 'passport' );

app.use(cors(
  {
    origin: "https://friot.eagleattech.com/",
    // origin: "https://tx.eagleattech.com",
    // origin: "http://localhost:3000",
    credentials: true 
  }
))

//  Passport middleware
 app.use(passport.initialize());
 app.use(passport.session());
 passport.serializeUser(function (user, done) {
   done(null, user);
 });
 
 passport.deserializeUser(async function (user, done) {
   done(null, user);
 });


app.use( express.json() );
app.use( express.urlencoded( { extended: false } ));

// // // // // //

app.get('/', (req, res) => {
  res.send(new Date().toLocaleTimeString())
})

// API FOR USER/AUTH 
app.use("/api/auth", require("./routes/user/auth"))
app.use("/api/user", require("./routes/user/user"))
app.use("/api/data", require("./routes/user/admin"))
// Tuah Database
app.use("/api/ranch", require("./routes/ranch"))
app.use("/api/weather", require("./routes/weather"))


let query = `CREATE TABLE IF NOT EXISTS rabbitto_users (id varchar(100), username varchar(100), email varchar(50), password varchar(150),role varchar(50), timestamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);`

connection.query(query, (err,results) =>{
    if(err) {
        console.log(err)
      }
      else(
        console.log(results)
      )
}
)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
