const express = require('express');
const router = express.Router();
const { submitEnrollment, getAllEnrollments } = require('../controllers/enrollController');

// POST /api/enroll - Submit course enrollment application
router.post('/', submitEnrollment);

// GET /api/enroll - Retrieve all enrollment submissions
router.get('/', getAllEnrollments);

module.exports = router;
