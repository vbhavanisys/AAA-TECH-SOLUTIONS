const pool = require('../config/db');

class Enrollment {
  static async findAll() {
    const query = `
      SELECT 
        e.id,
        e.full_name,
        e.mobile,
        e.email,
        e.course_id,
        e.plan_id,
        e.message,
        e.status,
        e.created_at,
        c.title AS course_title,
        p.name AS plan_name,
        p.price AS plan_price
      FROM enrollments e
      LEFT JOIN courses c ON e.course_id = c.id
      LEFT JOIN course_plans p ON e.plan_id = p.id
      ORDER BY e.id DESC
    `;
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const query = `
      SELECT 
        e.id,
        e.full_name,
        e.mobile,
        e.email,
        e.course_id,
        e.plan_id,
        e.message,
        e.status,
        e.created_at,
        c.title AS course_title,
        p.name AS plan_name,
        p.price AS plan_price
      FROM enrollments e
      LEFT JOIN courses c ON e.course_id = c.id
      LEFT JOIN course_plans p ON e.plan_id = p.id
      WHERE e.id = ?
    `;
    const [rows] = await pool.query(query, [id]);
    return rows[0] || null;
  }

  static async create(data) {
    const { full_name, mobile, email, course_id, plan_id, message, status } = data;
    const [result] = await pool.query(
      'INSERT INTO enrollments (full_name, mobile, email, course_id, plan_id, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [full_name, mobile, email, course_id || null, plan_id || null, message || '', status || 'pending']
    );
    return result.insertId;
  }

  static async updateStatus(id, status) {
    await pool.query('UPDATE enrollments SET status = ? WHERE id = ?', [status, id]);
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM enrollments WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Enrollment;
