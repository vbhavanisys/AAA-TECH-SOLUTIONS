const pool = require('../config/db');

class Career {
  static async findAll(activeOnly = true) {
    const query = activeOnly
      ? 'SELECT * FROM careers WHERE is_active = TRUE ORDER BY id ASC'
      : 'SELECT * FROM careers ORDER BY id ASC';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM careers WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async create(data) {
    const { title, location, employment_type, description, requirements, is_active } = data;
    const [result] = await pool.query(
      'INSERT INTO careers (title, location, employment_type, description, requirements, is_active) VALUES (?, ?, ?, ?, ?, ?)',
      [title, location, employment_type || 'Full-Time', description, requirements, is_active ?? true]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { title, location, employment_type, description, requirements, is_active } = data;
    await pool.query(
      'UPDATE careers SET title = ?, location = ?, employment_type = ?, description = ?, requirements = ?, is_active = ? WHERE id = ?',
      [title, location, employment_type, description, requirements, is_active, id]
    );
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM careers WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Career;
