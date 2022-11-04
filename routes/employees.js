var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController");

//get all employee
router.get('/' , employee.list);

//get single employee by id
router.get('/show/:id' , employee.show);


//create employee
router.get('/create' , employee.create);

//save employee
router.post('/save' , employee.save);

//Edit employee
router.get('edit/:id' , employee.edit);

//Edit update
router.post('/update/:id' , employee.update);

//Delete employee
router.post('/delete/:id' , employee.delete);

module.exports = router;

