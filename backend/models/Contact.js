const pool = require('../config/db');

class Contact {
  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY id DESC');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async create(data) {
    const { name, email, phone, subject, message } = data;
    const [result] = await pool.query(
      'INSERT INTO contacts (name, email, phone, subject, message, status) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone || null, subject || 'General Inquiry', message, 'new']
    );
    return result.insertId;
  }

  static async updateStatus(id, status) {
    await pool.query('UPDATE contacts SET status = ? WHERE id = ?', [status, id]);
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Contact;
