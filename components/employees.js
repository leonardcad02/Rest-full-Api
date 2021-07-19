const express = require('express');
const mysqlconnection = require('../db/conection');
const router = express.Router(); // objeto para definir rutas;
const response = require ('../network/response.js');

// creacion de las peticiones http (get, post, put, delete)
router.get('/', (req,res) => {
    //se hace el llamado a la base de datos y le pasamos la consulta para ser listar los empleados 
    mysqlconnection.query('SELECT * FROM employee', (err, rows, fields)=>{
        if(!err){
            response.success(req, res,rows, 200)
        }
        else{
            response.error(req,res, 'Internal Error', 500,e)
        }
    });
});

router.get('/:id', (req,res)=>{
    //se hace el llamado a la base de datos y le pasamos el id para seleccionar un empleado
    const {id}= req.params;
    console.log(id);
    mysqlconnection.query('SELECT * FROM employee WHERE id = ?',[id], (err, rows, fields)=>{
        if(!err){
            response.success(req, res,rows[0], 200)
        }
        else{
            response.error(req,res, 'Internal Error', 500,e)
        }
    })
})

router.post('/', (req, res) => {
    //se hace el llamado a la base de datos y a partir del objeto recojido desde el body se inserta los datos
    //En la base de datos
    const query = "INSERT INTO employee SET ?"; 
    const customerObj = {
        fullname: req.body.fullname,
        functionEmployee: req.body.functionEmployee
      }   
    mysqlconnection.query(query,customerObj, (err,rows,fields) => {
      if (!err){
        response.success(req,res, 'Created Employee' , 200);
      }else{        
        response.error(req,res, 'Informacion Invalida', 400, 'Error para logearlo');
      }
      
    });
  });
router.put('/:id', (req, res)=>{
    //se hace el llamado a la consulta y a partir del objeto recojido desde el body se actualiza los datos
    //En la base de datos, esto se hace pasandole por parametro el Id del empleado
    const {fullname, functionEmployee} = req.body;
    const {id} = req.params;
    const query =  `UPDATE employee SET fullname = '${fullname}', functionEmployee='${functionEmployee}' WHERE id =${id}`;
    mysqlconnection.query(query,[id, fullname, functionEmployee],(err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Employee update'})
        }
        else{
            console.log(err)
        }
    })
})

router.delete('/:id', (req, res)=>{
    //se hace el llamado a la consulta y a partir del objeto recojido desde el body se elimina los datos
    //En la base de datos, esto se hace pasandole por parametro el Id del empleado
    const {id} = req.params;
    mysqlconnection.query('DELETE FROM employee WHERE id = ?',[id], (err, rows, fields)=>{
        if(!err){
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        }
        else{
            response.error(req, res, "Internal Error", 500, e)
        }

    })
})
module.exports = router;