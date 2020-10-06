var express = require('express');
var Server = express();

Server.get("/",function DoSomething(request, response){
    response.send("<h1>Hello</h1><a href='/login'>Login Page</a>")
})

Server.get("/login",function DoSomething(request, response){
    response.send("<form action='/check' method='GET'><button>Click me to send a post request</button></form>")
})

Server.post("/check", function abc(request,response){
    response.send("Request recieved");
})

Server.listen(3000)