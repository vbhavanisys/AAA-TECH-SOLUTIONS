const pool = require('../config/db');
const bcrypt = require('bcryptjs');

class Admin {
  static async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM admins WHERE email = ? AND is_active = TRUE', [email]);
    return rows[0] || null;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT id, name, email, role, is_active, created_at FROM admins WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async matchPassword(enteredPassword, hashedPassword) {
    return await bcrypt.compare(enteredPassword, hashedPassword);
  }

  static async create(data) {
    const { name, email, password, role } = data;
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      'INSERT INTO admins (name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, ?)',
      [name, email, password_hash, role || 'admin', true]
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT id, name, email, role, is_active, created_at FROM admins ORDER BY id ASC');
    return rows;
  }
}

module.exports = Admin;
