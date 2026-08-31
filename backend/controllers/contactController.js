const Contact = require('../models/Contact');

// @desc    Submit new contact inquiry
// @route   POST /api/contacts
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, inquiryType, message } = req.body;
    const contactId = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      subject: subject || inquiryType || 'General Inquiry',
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Contact message submitted successfully',
      contactId
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Admin)
// @route   GET /api/contacts
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact inquiry status (Admin)
// @route   PATCH /api/contacts/:id/status
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['new', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(', ')}` });
    }

    await Contact.updateStatus(id, status);
    res.status(200).json({ success: true, message: `Contact status updated to '${status}'` });
  } catch (error) {
    next(error);
  }
};
