const express = require('express');
const { getAllGrades, addGrade } = require('../controllers/gradeController'); // Check this line
const router = express.Router();

router.get('/', getAllGrades); // Check if getAllGrades is correctly imported
router.post('/', addGrade); // Check if addGrade is correctly imported

module.exports = router;
