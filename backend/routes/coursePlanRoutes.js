const express = require('express');
const router = express.Router();
const {
  getCoursePlans,
  getCoursePlanById,
  createCoursePlan,
  updateCoursePlan,
  deleteCoursePlan
} = require('../controllers/coursePlanController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCoursePlans)
  .post(protect, authorize('admin'), createCoursePlan);

router.route('/:id')
  .get(getCoursePlanById)
  .put(protect, authorize('admin'), updateCoursePlan)
  .delete(protect, authorize('admin'), deleteCoursePlan);

module.exports = router;
