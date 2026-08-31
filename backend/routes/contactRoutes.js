const express = require('express');
const router = express.Router();
const {
  submitContact,
  getContacts,
  updateContactStatus
} = require('../controllers/contactController');
const { validateContact } = require('../middleware/validationMiddleware');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(validateContact, submitContact)
  .get(protect, authorize('admin'), getContacts);

router.route('/:id/status')
  .patch(protect, authorize('admin'), updateContactStatus);

module.exports = router;
