const http = require("http");

http.createServer((req, res) => {
    res.end();
}).listen(3000, () => {
    console.log("this server is working on 3000")
})


"this is a new git commit"
