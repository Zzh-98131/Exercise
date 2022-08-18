/*
 * @Author: zengzehua
 * @Date: 2022-08-18 13:52:29
 * @LastEditors: zengzehua
 * @LastEditTime: 2022-08-18 13:56:06
 * @Description: nodejs-http应用
 * @FilePath: \Work\js\service.js
 */
var http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.end('Hello World!')
}).listen(9568)

console.log('终端打印如下信息：Server running at ...')