const express = require('express');
const router = express.Router();
const {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer
} = require('../controllers/careerController');
const { applyForJob } = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCareers)
  .post(protect, authorize('admin'), createCareer);

router.route('/:id')
  .get(getCareerById)
  .put(protect, authorize('admin'), updateCareer)
  .delete(protect, authorize('admin'), deleteCareer);

// Candidate Job Application
router.post('/:careerId/apply', applyForJob);

module.exports = router;
