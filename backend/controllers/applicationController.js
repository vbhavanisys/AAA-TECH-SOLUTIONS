const Application = require('../models/Application');
const Career = require('../models/Career');

// @desc    Submit job application for a career opening
// @route   POST /api/careers/:careerId/apply
exports.applyForJob = async (req, res, next) => {
  try {
    const { careerId } = req.params;
    const { name, email, phone, resume_url, message } = req.body;

    const career = await Career.findById(careerId);
    if (!career) {
      return res.status(404).json({ success: false, message: 'Career position not found' });
    }

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required.' });
    }

    const applicationId = await Application.create({
      career_id: parseInt(careerId, 10),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      resume_url: resume_url || '',
      message: message || ''
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully. Our talent team will review your profile.',
      applicationId
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all job applications (Admin)
// @route   GET /api/applications
exports.getApplications = async (req, res, next) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update application status (Admin)
// @route   PATCH /api/applications/:id/status
exports.updateApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['pending', 'reviewed', 'shortlisted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(', ')}` });
    }

    await Application.updateStatus(id, status);
    res.status(200).json({ success: true, message: `Application status updated to '${status}'` });
  } catch (error) {
    next(error);
  }
};
