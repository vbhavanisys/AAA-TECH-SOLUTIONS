const express = require('express');
const router = express.Router();
const {
  adminLogin,
  getMe,
  getDashboardStats
} = require('../controllers/adminController');
const {
  getAllReviewsAdmin,
  updateReviewStatus,
  deleteReview
} = require('../controllers/reviewController');
const { validateAdminLogin } = require('../middleware/validationMiddleware');
const { protect, authorize } = require('../middleware/authMiddleware');

// Public Admin Login
router.post('/login', validateAdminLogin, adminLogin);

// Protected Admin Routes
router.use(protect, authorize('admin'));

router.get('/me', getMe);
router.get('/stats', getDashboardStats);

// Admin Review Moderation
router.route('/reviews')
  .get(getAllReviewsAdmin);

router.route('/reviews/:id/status')
  .patch(updateReviewStatus);

router.route('/reviews/:id')
  .delete(deleteReview);

module.exports = router;
