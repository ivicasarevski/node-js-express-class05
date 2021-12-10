//const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }))

app.use((req,res,next) => {
    console.log('This is a middleware');
    next();
})

app.use('/add-animal', (req,res,next) => {
    
    res.send(`<form action="/animal" method="POST">
                <input type="text" name="animalName" />
                <button type="submit">Submit</button>
              </form>`)
              
})

app.post('/animal', (req,res,next) => {
    console.log('BODY:', req.body)
    res.redirect('/')
})


app.use('/', (req,res,next) => {
    res.send(`<h1>Hello World!</h1>`)
})



app.listen(3000);