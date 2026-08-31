const Course = require('../models/Course');

// @desc    Get all active courses
// @route   GET /api/courses
exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.findAll(true);
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course by ID or slug
// @route   GET /api/courses/:id
exports.getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let course;
    if (isNaN(id)) {
      course = await Course.findBySlug(id);
    } else {
      course = await Course.findById(id);
    }

    if (!course) {
      return res.status(404).json({
        success: false,
        message: `Course with identifier '${id}' not found.`
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create course (Admin)
// @route   POST /api/courses
exports.createCourse = async (req, res, next) => {
  try {
    const courseId = await Course.create(req.body);
    const newCourse = await Course.findById(courseId);
    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: newCourse
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update course (Admin)
// @route   PUT /api/courses/:id
exports.updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    await Course.update(id, req.body);
    const updated = await Course.findById(id);
    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete course (Admin)
// @route   DELETE /api/courses/:id
exports.deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    await Course.delete(id);
    res.status(200).json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
