var path = require ('path'),
    fs = require ('fs');

//creando manejadores.

var _getAuthor = function(req, res){
    res.end("Autor: Josue Emmanuel Garcia Bribiesca");
};

//----
// Objeto manejador 

var handler = {};
// registro de manejadores en el objeto manejador.
 handler["/getauthor"] = _getAuthor;
 module.exports = handler;
