const { getStudents, createStudent } = require('../services/studentService');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await getStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addStudent = async (req, res) => {
    try {
        const student = await createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
