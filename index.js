//const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('This is first one');
})

app.use((req,res,next) => {
    console.log('This is second one')
})



app.listen(3000);