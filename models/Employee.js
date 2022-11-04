var mongoose = require('mongoose');

// var EmployeeSchema = new mongoose.Schema({
//     name : String,
//     address : String,
//     position : String,
//     salary : Number,
//     updated_at : {type : Date, default : Date.now},
// });



var EmployeeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    position : {
        type : String,
        require : true
    },
    salary : {
        type : Number,
        require : true
    },

    updated_at : {type : Date, default : Date.now},

})

module.exports = mongoose.model('Employee' , EmployeeSchema);