const express = require('express');
const router = express.Router();
const {
  getApprovedReviews,
  submitReview
} = require('../controllers/reviewController');
const { validateReview } = require('../middleware/validationMiddleware');

// Public endpoints
router.route('/')
  .get(getApprovedReviews)
  .post(validateReview, submitReview);

module.exports = router;
