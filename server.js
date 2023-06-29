// 1. Importar el modulo global http //
const http = require('http');
const fs = require('fs');
// Crea el servidor web -> manera 1 //
/* function requestListener(req, res){
    Es mejor pasar como funcion anonima.
} */

/* http.createServer(requestListener); */ //Colback -> funcion dentro de una funcion


// Crea el servidor web -> manera 2 //
const server = http.createServer((req, res)=>{
    
console.log(req.url , req.method, req.headers);
const url = req.url;
const method = req.method;
  /*process.exit(); cerrar o salir del ciclo continuo */

  //routing

  if(url === '/'){
  res.write('<html>');
  res.write('<head><title>Mi primera página de respuesta :)</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">ENVIAR</button></form></body>')
  res.write('</html>');
  return res.end();
  }

  if (url=== '/message' && method === 'POST'){
    fs.writeFileSync('message.txt' , 'duuuuuuuuuuuuu');
    res.statusCode = 302;
    res.setHeader('Location' , '/');
    return res.end();

  }


  // enviando respuestas: 
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Mi primera página de respuesta :)</title></head>');
  res.write('<body><h1>HELLO, FROM NODE JS....</h1></body>')
  res.write('</html>');
  res.end();
});


server.listen(4000);