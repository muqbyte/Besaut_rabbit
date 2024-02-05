const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

const connection  = require('../../config/database/database.js');
const e = require('express');

const { v4: uuidv4 } = require('uuid');

router.post('/register', async(req,res) =>{
  
  let {username, email, password, confirmPassword} = req.body;
  let role = "user"
  console.log(req.body)
  let error = [];

  // if(role==null){
  //   role='user'
  // }
  if(email == 'seaic.iot@gmail.com'){
    role = 'admin'
  }
  if(email == 'besout.iot@gmail.com'){
    role = 'admin'
  }

  //Check required fields
  if ( !username || !email || !password || !confirmPassword ) {
    error.push( { msg : 'Please fill in all fields' } );
  }

  //Check password match
  if ( confirmPassword !== password ) {
    error.push( { msg : "Password does not match" } )
  }

  //Check password length
  if ( password.length < 6 ) {
    error.push( { msg : 'Password should be at least 6 characters' } );
  }

  if( error.length > 0) {
    console.log(error)
    res.send(error)
  }else{
    // return
    const queryFindByEmail = `SELECT * FROM rabbitto_users WHERE email="${email}"`;
        connection.query(queryFindByEmail, (err,results) =>{
          if(results.length>=1){
            error.push( { msg: "Email already registered" } )
           return res.send(error)
          }else{
            let id = uuidv4(); // ⇨ 
            bcrypt.genSalt(10, (err,salt) =>{
              bcrypt.hash(password,salt, (err,hash) =>{
                if (err) throw err;
                password = hash;
                const newUser = {
                  id:id,
                  username : username.toLowerCase(),
                  email : email.toLowerCase(),
                  password : password,
                  role : role
                };

                const queryInsertNewUser = `INSERT INTO rabbitto_users SET ?`;
                connection.query(
                  queryInsertNewUser,
                  newUser,
                  (err,results) =>{
                    if(err) console.log(err)
                    // console.log(results)
                    error.push( { msg: 'Success. You can log in now'})
                    res.send(error)
                  }
                )
              })
            })
          }
        })
      }
    })
  // }
// });

module.exports = router;
