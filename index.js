const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
    res.end('hello word')
})

server.listen(port, () => {
    console.log('server is listening on: http://localhost:%s', port)
})