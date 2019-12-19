module.exports = app => {
    const students = require("../controllers/student.controllers.js");
    // Create a new student
    app.post("/students", students.create);
}