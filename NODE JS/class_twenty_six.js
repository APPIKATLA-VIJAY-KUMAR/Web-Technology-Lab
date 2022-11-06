const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream('form for twenty six.html').pipe(res);
    } else if (req.url === '/server' && req.method === 'POST') {
        var rawdata = '';
        req.on('data', function(data) {
            rawdata += data;
        })
        req.on('end', function() {
            res.writeHead('200', { 'Content-Type': 'text/html' });
            var inputdata = new URLSearchParams(rawdata);
            res.write("Username :" + inputdata.get('username') + "<br>");
            res.write("User Email :" + inputdata.get('useremail'));
            res.end();
        })
    }
})

server.listen(5000, function() {
    console.log("Server listening at 5000");
})

// const calc = require('./exports_for_class_25');
// console.log(calc.add(3, 5));