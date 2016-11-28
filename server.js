var http = require('http');
//Cargando configuraciones
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require ('./internals/static-server');
var handlers = require ('./internals/handlers');
//Agregar paqueteria de colores
//Para importar los colores
var colors = require('colors');
//Tema de colors....
colors.setTheme(config.color_theme);
//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var urlPath = req.url;
    //nomralizando el path en caso de
    //que no se pide ningun recurso
    if(urlPath == '/'){
        urlPath = ('/index.html');
    }
    if(typeof(handlers[urlPath]) === "function"){
        handlers[urlPath](req, res);
    }else{

        //se llama al servidor static
       staticServer.serve(urlPath, res);
    }    
});

server.listen(PORT, IP, function(){
    console.log(`>Server working @http://${IP}:${PORT}`.info);
    
});