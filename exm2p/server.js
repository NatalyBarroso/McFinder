const express = require("express");
const path = require("path");

var app = express();

// Servir archivos estáticos desde los directorios especificados
app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'assets')));

// Rutas definidas
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/directions', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/directions.html'));
});

// Escuchar en el puerto 3000
app.listen(3000, function() {
    console.log('Servidor Express escuchando en el puerto 3000');
});
