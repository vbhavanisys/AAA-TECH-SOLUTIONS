const pool = require('../config/db');

class CoursePlan {
  static async findAll(activeOnly = true) {
    const query = activeOnly
      ? 'SELECT * FROM course_plans WHERE is_active = TRUE ORDER BY price ASC'
      : 'SELECT * FROM course_plans ORDER BY price ASC';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM course_plans WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async findByName(name) {
    const [rows] = await pool.query('SELECT * FROM course_plans WHERE LOWER(name) = LOWER(?)', [name]);
    return rows[0] || null;
  }

  static async create(data) {
    const { name, price, billing_period, description, is_popular, is_active } = data;
    const [result] = await pool.query(
      'INSERT INTO course_plans (name, price, billing_period, description, is_popular, is_active) VALUES (?, ?, ?, ?, ?, ?)',
      [name, price, billing_period || '', description || '', is_popular ?? false, is_active ?? true]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { name, price, billing_period, description, is_popular, is_active } = data;
    await pool.query(
      'UPDATE course_plans SET name = ?, price = ?, billing_period = ?, description = ?, is_popular = ?, is_active = ? WHERE id = ?',
      [name, price, billing_period, description, is_popular, is_active, id]
    );
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM course_plans WHERE id = ?', [id]);
    return true;
  }
}

module.exports = CoursePlan;
