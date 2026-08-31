const db = require('../config/db');

// @desc    Submit a course enrollment application
// @route   POST /api/enroll
exports.submitEnrollment = (req, res) => {
  const { fullName, student_name, mobile, phone, email, course, course_name, plan, message, goals } = req.body;

  const candidateName = fullName || student_name || 'Anonymous';
  const candidatePhone = mobile || phone || '';
  const candidateEmail = email || '';
  const candidateCourse = course || course_name || 'General';
  const candidatePlan = plan || 'Standard';
  const candidateMessage = message || goals || '';

  if (!candidateName || !candidateEmail || !candidatePhone) {
    return res.status(400).json({
      success: false,
      message: 'Full name, email, and phone number are required.'
    });
  }

  const sql = `INSERT INTO enrollments (student_name, email, phone, course_name, plan, message, course_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(sql, [candidateName, candidateEmail, candidatePhone, candidateCourse, candidatePlan, candidateMessage, 1], (err, result) => {
    if (err) {
      console.error('ENROLL ERROR:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to record enrollment application',
        error: err.message
      });
    }

    res.status(201).json({
      success: true,
      msg: 'Enrolled saved!',
      enrollmentId: result.insertId
    });
  });
};

// @desc    Get all course enrollments (Admin)
// @route   GET /api/enroll
exports.getAllEnrollments = (req, res) => {
  const query = 'SELECT * FROM enrollments ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Fetch Enrollments Error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database query failed',
        error: err.message
      });
    }

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  });
};
