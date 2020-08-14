const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json'});

    let salida = {
        Nombre: 'Miguel',
        edad: 25,
        url: req.url
    }



     res.write(JSON.stringify(salida));
//  res.write('Hola MUNDOOO!');
    res.end();
})
.listen(8080);

console.log('escuchando puerto 8080');