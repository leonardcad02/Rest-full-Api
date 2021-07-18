// Traer varias routas del componentes

const express  = require('express');
const employee = require('../components/employees');

const routes = function(server){
    server.use('/user',employee);
    
}

module.exports = routes