var path = require ('path'),
    fs = require ('fs')
    fortune = require('./fortune');

    // frases para mifortune

//var mifortune = [ 
  //  "La naturaleza, la pacienca y el tiempo son los tres mejores doctores. ",
  //  "Aplicarás conocimientos que creías perdidos",
  //  "No todo es posible, pero lo que no se intenta es imposible",
  //  "Apúrate lentamente.",
  //   "Cuando llegues a la última página, cierra el libro.",
 //    "Cuando tres marchan juntos tiene que haber uno que mande."];

//creando manejadores.

var _getAuthor = function(req, res){
   res.end("Autor: Josue Emmanuel Garcia Bribiesca");
};
var _getFortune = function (req, res){
    console.log(`> Se solicita fortune......`);
    //no bloqueante
    fortune.getFortune(function(fortunePaper){
            // configurar el encabezado.
            res.writeHead(200,{
                "Content-Type" : "application/json"
            });
            console.log(`> Contestando: ${fortunePaper}`);
            res.end(fortunePaper);
    });
    //var matriz = Math.floor(Math.random() * mifortune.length);
    //res.end(mifortune[matriz]);
};
 var _getmifrase = function(req, res){
  res.end("El que madruga Darth Vader le ayuda");
 };

//----
// Objeto manejador 

var handler = {};
// registro de manejadores en el objeto manejador.
 handler["/getauthor"] = _getAuthor;
 handler["/getmifrase"] = _getmifrase;
 handler["/getFortune"] = _getFortune;

 //exporta el objeto para que lo lea el servidor
 module.exports = handler;


