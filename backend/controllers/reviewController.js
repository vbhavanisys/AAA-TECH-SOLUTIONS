const Review = require('../models/Review');
const Course = require('../models/Course');

// @desc    Get all approved reviews (Public)
// @route   GET /api/reviews
exports.getApprovedReviews = async (req, res, next) => {
  try {
    const reviews = await Review.findApproved();
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Submit new student review
// @route   POST /api/reviews
exports.submitReview = async (req, res, next) => {
  try {
    const { name, course_id, course, rating, stars, review_text, text } = req.body;

    let resolvedCourseId = null;
    const rawCourse = course_id || course;
    if (rawCourse) {
      if (!isNaN(rawCourse)) {
        resolvedCourseId = parseInt(rawCourse, 10);
      } else {
        const foundCourse = await Course.findBySlug(String(rawCourse).toLowerCase());
        resolvedCourseId = foundCourse ? foundCourse.id : null;
      }
    }

    const reviewId = await Review.create({
      name: name.trim(),
      course_id: resolvedCourseId,
      rating: parseInt(rating || stars, 10),
      review_text: (review_text || text).trim()
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your review has been submitted successfully.',
      reviewId
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all reviews including pending/rejected (Admin)
// @route   GET /api/admin/reviews
exports.getAllReviewsAdmin = async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update review status (Admin)
// @route   PATCH /api/admin/reviews/:id/status
exports.updateReviewStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['pending', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(', ')}` });
    }

    await Review.updateStatus(id, status);
    res.status(200).json({ success: true, message: `Review status updated to '${status}'` });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete review (Admin)
// @route   DELETE /api/admin/reviews/:id
exports.deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Review.delete(id);
    res.status(200).json({ success: true, message: 'Review deleted successfully' });
  } catch (error) {
    next(error);
  }
};
