const express = require('express');
const router = express.Router();

const connection  = require('../../config/database/database.js');



router.get("/admin/user", (req, res, next) => {

    const id= req.query.id;
    var ret = [];
    var dat = [];
  
    var q = `select * from rabbitto_users`;

    connection.query(q, function (error, row, fields) {
      if (error) {
        console.log(error);
      }
      if (row) {
       
          console.log(row)
  
      }
  
      ret = JSON.stringify(row);

      res.header("Content-Type", "application/json; charset=utf-8");
      res.send(ret);
    });

  });

  router.put("/admin/user", (req, res, next) => {
    let {id, role} =  req.body
    var ret = [];
    var dat = [];
  
    var query = `SELECT * FROM rabbitto_users WHERE id = "${id}"`
  
    connection.query(query, function(error,row,fields){
      if(error){
        console.log(error)
      }
      if(row){
        if(row.length<1){
          return res.status(400).send({
            message: 'This is an error!'
         });
          
        }else{
          var q = `UPDATE rabbitto_users SET role = "${role}" WHERE id = "${id}"`;
          
          connection.query(q, function (error, row, fields) {
            if (error) {
              console.log(error);
            }
            if (row) {
             
                // console.log(row)
        
            }
        
            ret = JSON.stringify(row);
            // console.log(ret)
            res.header("Content-Type", "application/json; charset=utf-8");
            res.send(ret);
          });
  
        }
      }
    })
    // connection.end();
  });

  router.delete('/admin/user',(req,res)=>{
    let dateArrayDelete = (req.body.id)
    console.log(req.body.id)
    let stringMysql =""
    dateArrayDelete.forEach((data, index)=>{
      console.log(index)
      if(index === dateArrayDelete.length - 1){
        stringMysql =stringMysql + `'${data}'`
      }else{
        stringMysql =stringMysql + `'${data}',`
      }
    })
    console.log(stringMysql)
  
    var q = `DELETE FROM rabbitto_users WHERE id IN (${stringMysql})`;
  
    connection.query(q, function (error, row, fields) {
      if (error) {
        console.log(error);
      }
      if (row) {
  
        // var query = `UPDATE users SET building_id_users = null WHERE building_id_users IN (${stringMysql})`;
        
        // connection.query(query, function(error,row,fields){
        //   if(error){
        //     console.log(error)
        //   }
        //   if(row){
        //     // return res.json('deleted')
        //   }
        console.log(row)
        }
      }
        )
      
        res.json('deleted')
      }
    );
  // })

  module.exports = router;