const express = require('express')
const app = express();

const db = require('./db')

// const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) { 
  res.send('babuji welcome to the hotel')
})

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);



const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);



app.listen(3000,()=>{
    console.log('listening on port 3000'); 
})   