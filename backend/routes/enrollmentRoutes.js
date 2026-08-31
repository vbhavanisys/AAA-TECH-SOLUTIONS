const express = require('express');
const router = express.Router();
const {
  submitEnrollment,
  getEnrollments,
  getEnrollmentById,
  updateEnrollmentStatus
} = require('../controllers/enrollmentController');
const { validateEnrollment } = require('../middleware/validationMiddleware');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(validateEnrollment, submitEnrollment)
  .get(protect, authorize('admin'), getEnrollments);

router.route('/:id')
  .get(protect, authorize('admin'), getEnrollmentById);

router.route('/:id/status')
  .patch(protect, authorize('admin'), updateEnrollmentStatus);

module.exports = router;
