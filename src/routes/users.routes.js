const express = require ('express');
const controller=require('../controller/user.controller')
const route = express.Router();
route.get('/',controller.TraerUsuarios )
route.get('/:id',controller.BuscarUnUser )
route.post('/',controller.InsertarUser )
module.exports = route

