const express = require('express');
const router = express.Router();
const {
  getBlogPosts,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getBlogPosts)
  .post(protect, authorize('admin'), createBlogPost);

router.route('/:slug')
  .get(getBlogPostBySlug)
  .put(protect, authorize('admin'), updateBlogPost)
  .delete(protect, authorize('admin'), deleteBlogPost);

module.exports = router;
