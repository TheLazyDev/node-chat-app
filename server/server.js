const express = require('express'); // "Express" a server module for node.js to create a server


const path = require('path'); // "path" a core module of node.js

const publicPath = path.join(__dirname,'../public'); // created const of directory where public folder is located using path


const port = process.env.PORT  || 3000; // To check for PORT on local and production enivronment


var app = express(); // Init express app


app.use(express.static(publicPath)); // To serve static Webpages to public


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})
