var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
mongoose.Promise = global.Promise;

var employees = require('./routes/employees');

// application.use('/employees' , employees);
// application.listen(8080 , () => {
//     console.log("Server is running port:8080")
// })

var app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.use('/employee' , employees);
app.set('view engine', 'ejs');
app.listen(8080,()=>{
    console.log('Server is running')
})

mongoose.connect('mongodb://localhost:27017/product')
.then(() => console.log('connection successful'))
.catch((err) => console.log(err));


