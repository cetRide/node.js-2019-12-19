const sql = require("../models/dbconn.js");

const Student = function(std) {
    this.name = std.name;
    this.age = std.age;
    this.sex = std.sex;
};

Student.create = function create(newStudent, result) {
    sql.query("INSERT INTO student SET ? ", newStudent, (err, res) => {
        if(err) {
            console.log("error1:" , err);
            result(err, null);
            return;
        }
        console.log("created student: ", { id: res.insertId, ...newStudent });
        result(null, { id: res.insertId, ...newStudent });
    });
};