
// se realiza los metodos para dar respuesta del lado del servidor  las peticiones http
exports.success = function(req,res, message, status){
    res.status(status || 200).send({
        error: '',
        information: message,
    });
}

exports.error = function (req,res, message,status){
    res.status(status || 500).send({
        error: message,
        information: '',
    });
}