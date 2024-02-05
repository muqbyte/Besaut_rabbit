// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require("bcrypt");

const connection = require("./database/database");

module.exports=function(passport){

  passport.use('web-local',
    new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password'
        },

        async function ( email, password, done) {
          connection.query(
            "SELECT * FROM rabbitto_users WHERE email = ? ",
            [email.toLowerCase()],
            function (err, rows) {
              console.log(rows)
              if (err) {
                console.log('err')
                return done(err);
              }
              if (!rows.length) {
                console.log(rows)
                return done(null, false, { msg: "No user found" });           
              }
              bcrypt.compare(password, rows[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                  return done(null, rows[0]);
                } else {
                  return done(null, false, { msg: "Password Incorrect" });
                }
              });
            }
          );
        }
    )
);

let user={};
const opts = {};


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'JWT_SECRET_OR_KEY2';
passport.use('web-jwt',
    new JwtStrategy(opts, async function(payload, done) {
      console.log(payload)
      connection.query(
        "SELECT * FROM rabbitto_users WHERE id = ?",
        // "select * from users LEFT JOIN building ON users.building_id_users = building.id WHERE users.user_id = ?",
        [payload], (err,results) =>{
          console.log(results)
          if(results.length>0){
            user={
              userId:results[0].id,
              username: results[0].username.toUpperCase(),
              scope:[results[0].role],
              // category:results[0].category
            }
          }
          if (payload==user.userId) {
             return done(null, user);
          }
          return done(null, false,{msg:"PLEASE"});
        })
    })
  );
}
