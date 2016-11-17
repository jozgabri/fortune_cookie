var fortunePapers = [
            "La naturaleza, la pacienca y el tiempo son los tres mejores doctores.",
            "Aplicarás conocimientos que creías perdidos",
            "No todo es posible, pero lo que no se intenta es imposible",
            "Apúrate lentamente.",
            "Cuando llegues a la última página, cierra el libro.",
            "Cuando tres marchan juntos tiene que haber uno que mande."
        ];

module.exports = {
    "getFortune" : function (cb){
        // logica que obtiene un mensaje
        //aleatorio
        var selector = Math.floor( Math.random() * fortunePapers.length);
        var fortuneMessage = fortunePapers[selector];
        // armando objeto respuesta
        var fortunePaper = JSON.stringify({
            "message" : fortuneMessage
        });

        // ejecuto el callback pasandole
        // como parametro el furtunepaper

        cb(fortunePaper);

    }
};