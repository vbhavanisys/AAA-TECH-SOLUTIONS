const Career = require('../models/Career');

// @desc    Get all active careers
// @route   GET /api/careers
exports.getCareers = async (req, res, next) => {
  try {
    const careers = await Career.findAll(true);
    res.status(200).json({
      success: true,
      count: careers.length,
      data: careers
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single career
// @route   GET /api/careers/:id
exports.getCareerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ success: false, message: 'Career opening not found' });
    }
    res.status(200).json({ success: true, data: career });
  } catch (error) {
    next(error);
  }
};

// @desc    Create career (Admin)
// @route   POST /api/careers
exports.createCareer = async (req, res, next) => {
  try {
    const careerId = await Career.create(req.body);
    const newCareer = await Career.findById(careerId);
    res.status(201).json({ success: true, message: 'Career position created', data: newCareer });
  } catch (error) {
    next(error);
  }
};

// @desc    Update career (Admin)
// @route   PUT /api/careers/:id
exports.updateCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Career.update(id, req.body);
    const updated = await Career.findById(id);
    res.status(200).json({ success: true, message: 'Career position updated', data: updated });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete career (Admin)
// @route   DELETE /api/careers/:id
exports.deleteCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Career.delete(id);
    res.status(200).json({ success: true, message: 'Career position deleted' });
  } catch (error) {
    next(error);
  }
};
