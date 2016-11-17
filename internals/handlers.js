var path = require ('path'),
    fs = require ('fs');

//creando manejadores.

var _getAuthor = function(req, res){
    res.end("Autor: Josue Emmanuel Garcia Bribiesca");
};
 var _getFrase = function(req, res){
     res.end("El que madruga Darth Vader le ayuda");
 };

//----
// Objeto manejador 

var handler = {};
// registro de manejadores en el objeto manejador.
 handler["/getauthor"] = _getAuthor;
 handler["/getFrase"] = _getFrase;
 module.exports = handler;


