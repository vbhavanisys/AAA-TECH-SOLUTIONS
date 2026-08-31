const CoursePlan = require('../models/CoursePlan');

// @desc    Get all active course plans
// @route   GET /api/course-plans
exports.getCoursePlans = async (req, res, next) => {
  try {
    const plans = await CoursePlan.findAll(true);
    res.status(200).json({
      success: true,
      count: plans.length,
      data: plans
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course plan
// @route   GET /api/course-plans/:id
exports.getCoursePlanById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plan = await CoursePlan.findById(id);
    if (!plan) {
      return res.status(404).json({ success: false, message: 'Course plan not found' });
    }
    res.status(200).json({ success: true, data: plan });
  } catch (error) {
    next(error);
  }
};

// @desc    Create course plan (Admin)
// @route   POST /api/course-plans
exports.createCoursePlan = async (req, res, next) => {
  try {
    const planId = await CoursePlan.create(req.body);
    const newPlan = await CoursePlan.findById(planId);
    res.status(201).json({ success: true, message: 'Course plan created', data: newPlan });
  } catch (error) {
    next(error);
  }
};

// @desc    Update course plan (Admin)
// @route   PUT /api/course-plans/:id
exports.updateCoursePlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    await CoursePlan.update(id, req.body);
    const updated = await CoursePlan.findById(id);
    res.status(200).json({ success: true, message: 'Course plan updated', data: updated });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete course plan (Admin)
// @route   DELETE /api/course-plans/:id
exports.deleteCoursePlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    await CoursePlan.delete(id);
    res.status(200).json({ success: true, message: 'Course plan deleted' });
  } catch (error) {
    next(error);
  }
};
