const Student = require("../models/student.model.js");

// Create and Save a new student
exports.create = function(req, res){
    // Validate request

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    });

    // Save Student in the database
    Student.create(student, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the student."
            });
        else res.send(data);
    });
};