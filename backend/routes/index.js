const express = require('express');
const router = express.Router();

const courseRoutes = require('./courseRoutes');
const coursePlanRoutes = require('./coursePlanRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');
const contactRoutes = require('./contactRoutes');
const reviewRoutes = require('./reviewRoutes');
const projectRoutes = require('./projectRoutes');
const careerRoutes = require('./careerRoutes');
const applicationRoutes = require('./applicationRoutes');
const blogRoutes = require('./blogRoutes');
const adminRoutes = require('./adminRoutes');

// Mount REST API endpoints
router.use('/courses', courseRoutes);
router.use('/course-plans', coursePlanRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/contacts', contactRoutes);
router.use('/reviews', reviewRoutes);
router.use('/projects', projectRoutes);
router.use('/careers', careerRoutes);
router.use('/applications', applicationRoutes);
router.use('/blog', blogRoutes);
router.use('/admin', adminRoutes);

// Backwards compatibility aliases
router.use('/contact', contactRoutes);
router.use('/enroll', enrollmentRoutes);

module.exports = router;
