const express = require ('express');
const route = express.Router();
const db = require('../db/conexionDB')

route.get('/', (req,res)=>{
    db.connect()
    db.query('SELECT * from tblprueba', (err, rsp) => {
        if (err) {
          res.status(400).json({mensaje:'hola esto es un error'})
        } else {
            res.status(200).json({data:rsp.rows})
        }
      })
      
})



module.exports = route

