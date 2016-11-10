var fs = require('fs'),
    mime = require('mime'),
    path = require('path'),
    config = require('../config/config');


exports.serve = function (url, res) {
    var urlPath = path.resolve(config.STATIC_PATH + url);
    console.log(`Recurso solicitado: ${urlPath}`.data);

    fs.exists(urlPath, function (exists) {
        if (!exists) {
            //no existe.
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end('<h1>404 NOT FOUND')
        } else {
            //EXISTE
            var mimeType = mime.lookup(urlPath);

            fs.readFile(urlPath, function (err, content) {
                if (err) {
                    console.log(`Error al leer archivo ${err}`);
                    //decidiendo el content type de la extension del archivo solicitado
                    res.writeHead(500, {
                        "Contenr-Type": "text/plain"
                    });
                    res.end('Error 500: Internal Error...'.error);
                } else {
                    //Sirve el archivo
                    res.writeHead(200, {
                        "Content-Type": mimeType
                    });
                    console.log(`>Se sirve el archivo: ${urlPath}`.info);
                    res.end(content);
                }
            });
        }
    
    });

}



