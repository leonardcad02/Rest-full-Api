const express = require("express");
const app = express();
const router = require('./network/routes')
const server = require('http').Server(app)

//settings
app.set('port', process.env.port || 3000);

//Midlewares
app.use(express.json());

//Routes
router(app)
app.use('/', express.static('public'));
server.listen(app.get('port'), () =>{
         console.log("Server on port ", app.get('port'))
     });
