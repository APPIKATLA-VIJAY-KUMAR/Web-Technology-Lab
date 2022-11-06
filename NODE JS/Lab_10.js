const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream('Tenth Lab.html').pipe(res);
    } else if (req.url === '/server1' && req.method === 'POST') {
        var rawdata = '';
        req.on('data', function(data) {
            rawdata += data;
        })
        req.on('end', function() {
            res.writeHead('200', { 'Content-Type': 'text/html' });
            var inputdata = new URLSearchParams(rawdata);
            res.write("Name :" + inputdata.get('username') + "<br><br>");
            res.write("Registration Number :" + inputdata.get('userid') + "<br><br>");
            res.write("Year of study :" + inputdata.get('useryear') + "<br><br>");
            res.write("School of :" + inputdata.get('userschool') + "<br><br>");
            res.write("Department :" + inputdata.get('userdept') + "<br><br>");
            res.write("Event/s :" + inputdata.getAll('userevent[]'));
            res.end();
        })
    }
})

server.listen(5000, function() {
    console.log("Server listening at 5000");
})