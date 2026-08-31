const pool = require('../config/db');

class Course {
  static async findAll(activeOnly = true) {
    const query = activeOnly
      ? 'SELECT * FROM courses WHERE is_active = TRUE ORDER BY id ASC'
      : 'SELECT * FROM courses ORDER BY id ASC';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async findBySlug(slug) {
    const [rows] = await pool.query('SELECT * FROM courses WHERE slug = ?', [slug]);
    return rows[0] || null;
  }

  static async create(data) {
    const { title, slug, description, duration, level, category, image_url, is_active } = data;
    const [result] = await pool.query(
      'INSERT INTO courses (title, slug, description, duration, level, category, image_url, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, description, duration, level, category, image_url, is_active ?? true]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { title, slug, description, duration, level, category, image_url, is_active } = data;
    await pool.query(
      'UPDATE courses SET title = ?, slug = ?, description = ?, duration = ?, level = ?, category = ?, image_url = ?, is_active = ? WHERE id = ?',
      [title, slug, description, duration, level, category, image_url, is_active, id]
    );
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM courses WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Course;
