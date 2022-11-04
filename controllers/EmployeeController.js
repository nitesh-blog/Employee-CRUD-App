var mongoose = require("mongoose");
//var Employee = mongoose.model('../model/Employee');
var Employee = require('../models/Employee')
var employeeController = {};


employeeController.list = (req , res) =>{
    Employee.find({}).exec((err , employees) =>{
        if(err) {
            console.log("Error :", err);
        }

        else {
            res.render("../views/employee/index" , {employee: employees});
        }

    });
};



employeeController.show = function(req , res){
    Employee.findOne({_id: req.params.id}).exec(function(err , employee){
        if(err){
            console.log("Error:" , err);
        }
        else{
            res.render("../views/employee/show" , {employee : employee});
        }
    });
};


employeeController.create = function(req , res) {
    res.render("../views/employee/create");
};



employeeController.save = function(req ,res){
    var employee = new Employee(req.body);

    employee.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/employee/create");
        }

        else{
            console.log("Successfully Created an Employee");
            res.redirect("/employee/show"+employee._id);
        }
    });
};

// employeeController.edit = function(req , res)
// {
//     Employee.findOne({_id: req.params.id}).exec(function(err , employee){
//         if(err)
//         {
//             console.log("Error:" ,err);
//         }
//         else{
//             res.render("../views/employee/edit", {employee : employee});
//         }
//     });
// };

employeeController.edit = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employee/edit", {employee: employee});
      }
    });
  };


  employeeController.update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
      if (err) {
        console.log(err);
        res.render("../views/employee/edit", {employee: req.body});
      }
      res.redirect("/employee/show/"+employee._id);
    });
  };


employeeController.delete = function(req , res){
    Employee.remove({_id : req.params.id}, function(err){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("Employee Delete !!");
            res.redirect("/employee");
        }
    });
};

module.exports = employeeController;