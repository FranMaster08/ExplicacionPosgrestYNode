const db = require('../db/conexionDB')

class UserController {

    static TraerUsuarios(req, res) {
        db.connect()
        db.query('SELECT * from tblprueba', (err, rsp) => {
            
            if (err) {                
            
                res.status(400).json({ mensajeAmigable: 'ocurrio un error', errmensaje: err })

            } else {
                res.status(200).json({ data: rsp.rows })
            }
        })
    }

    static BuscarUnUser(req, res) {
        let idBuscado = req.params.id
        db.connect()
        db.query(`SELECT * from tblprueba Where id=${idBuscado}`, (err, rsp) => {
            if (err) {
                res.status(400).json({ mensajeAmigable: 'ocurrio un error', errmensaje: err })
            } else {
                if(rsp.rows.length>0)
                res.status(200).json({ data: rsp.rows })
                else
                res.status(404).json({ data: 'Recurso no encontrado' })
            }
        })


    }

    static InsertarUser(req,res){
     
        let body=req.body.nombre
        if(typeof body !='undefined'){
            console.log('entro');
            db.query(`INSERT INTO tblprueba (Nombre) values (${body})`, (err, rsp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ mensajeAmigable: 'ocurrio un error', errmensaje: err })
                } else {
                   
                    res.status(200).json({ data: rsp.rows,mensaje:'Se inserto con exito' })
                    
                }
            })
    
        }else{
            res.status(400).json({ mensajeAmigable: 'ocurrio un error',body })
        }
        
    }





}
module.exports = UserController