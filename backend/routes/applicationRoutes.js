const express = require('express');
const router = express.Router();
const {
  getApplications,
  updateApplicationStatus
} = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.use(protect, authorize('admin'));

router.route('/')
  .get(getApplications);

router.route('/:id/status')
  .patch(updateApplicationStatus);

module.exports = router;
