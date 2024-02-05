const express = require('express')
const router = express.Router()
const passport = require( 'passport' );
// const passport = require( '../../config/passport.js' );
require( '../../config/passport.js' )( passport )

const jwt = require ( 'jsonwebtoken' );
const connection = require("../../config/database/database.js");

router.post('/login', 
passport.authenticate('web-local', { session: true}), //need to update from nuxt auth.
async function(req, res) {
  console.log(req.user)
  const token = jwt.sign(req.user.id, 'JWT_SECRET_OR_KEY2');
  // console.log('token',token)
  return res.json({ token });
});

router.get('/me',
passport.authenticate(['web-jwt',], { session: false }),
  async function(req, res,) {
    console.log('sini here',req.user)
    const { userId } = req.user;
    // "SELECT * FROM users INNER JOIN topics ON users.id=topics.userID WHERE id = ?",
    // connection.query(`SELECT * FROM users INNER JOIN topics ON users.id=topics.userID WHERE id = "${userId}"`, (err,results) =>{
   
    connection.query(`SELECT * FROM rabbitto_users WHERE id="${userId}"`, (err,results) =>{
    // connection.query(`SELECT * FROM nexplex_agriculture_users JOIN nexplex_server on server_id=1 WHERE id="${userId}"`, (err,results) =>{
   
   
      console.log('results',results)
      console.log('results',results[0].id)
      if(err) {
        console.log(err)
        return res.send("Please contact admin to activate the account")
      }
    // connection.query(`SELECT id FROM nexplex_agriculture_users JOIN nexplex_server on server_id=1 WHERE id="${userId}"`, (err,results) =>{
      else if (userId==results[0].id) {

        const userData =req.user;
        // const userData =results[0]
        console.log('sini2222', userData)

        return res.status(200).json(userData);
        // return res.send('heelo');
      } else {
        res.status(500).send('invalid token');
      }
    })
  }
);

module.exports = router