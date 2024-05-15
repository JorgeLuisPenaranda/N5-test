// index.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Obtener el valor de la variable de entorno ENVIRONMENT_NAME
  const environmentName = process.env.ENVIRONMENT_NAME || 'Desconocido';

  // Mostrar el nombre del ambiente en la respuesta
  res.end(`El ambiente ..actual es: : ${environmentName}`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
