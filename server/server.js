
const http = require('http'); // "http" a core node.js module to create server

const express = require('express'); // "Express" a server module for node.js to create a server

const socketIO = require("socket.io"); // "socket.io" a web server library

const path = require('path'); // "path" a core module of node.js

const publicPath = path.join(__dirname,'../public'); // created const of directory where public folder is located using path


const port = process.env.PORT  || 3000; // To check for PORT on local and production enivronment


var app = express(); // Init express app

var server = http.createServer(app); // Init server using http module

var io = socketIO(server);



io.on('connection',(socket)=>{
    console.log("New user connected");
    

//   socket.emit('newEmail',{
//       from: "mike@example.com",
//       text:"Hey what is going on",
//       createAt: 123
//   });

// socket.emit("newMessage",{
//     from: "John",
//     text: "see you then",
//     createdAt:12334456
// })


  
//   socket.on("createEmail",(newEmail)=>{
//      console.log("createEmail",newEmail);
//   })





       socket.emit('newMessage',{
           from: "Admin",
           text: "Welcome to the chat app",
           createdAt: new Date().getTime()
       })

     socket.broadcast.emit('newMessage',{
         from: "Admin",
         text: "New user joined",
         createdAt: new Date().getTime()
     })






   socket.on('createMessage',(message)=>{
       console.log('createMessage',message);
   



       io.emit('newMessage',{
           from:message.from,
           text:message.text,
           createdAt:new Date().getTime()
       })


    //  socket.broadcast.emit('newMessage',{
    //      from:message.from,
    //      text:message.text,
    //      createdAt: new Date().getTime()
    //  })
   })




    socket.on('disconnect',()=>{
        console.log('User was disconnected')
    })


  
})




app.use(express.static(publicPath)); // To serve static Webpages to public




server.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})
