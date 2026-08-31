const pool = require('../config/db');

class Application {
  static async findAll() {
    const query = `
      SELECT 
        a.id,
        a.career_id,
        a.name,
        a.email,
        a.phone,
        a.resume_url,
        a.message,
        a.status,
        a.created_at,
        c.title AS job_title
      FROM applications a
      LEFT JOIN careers c ON a.career_id = c.id
      ORDER BY a.id DESC
    `;
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const query = `
      SELECT 
        a.id,
        a.career_id,
        a.name,
        a.email,
        a.phone,
        a.resume_url,
        a.message,
        a.status,
        a.created_at,
        c.title AS job_title
      FROM applications a
      LEFT JOIN careers c ON a.career_id = c.id
      WHERE a.id = ?
    `;
    const [rows] = await pool.query(query, [id]);
    return rows[0] || null;
  }

  static async create(data) {
    const { career_id, name, email, phone, resume_url, message } = data;
    const [result] = await pool.query(
      'INSERT INTO applications (career_id, name, email, phone, resume_url, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [career_id, name, email, phone, resume_url || '', message || '', 'pending']
    );
    return result.insertId;
  }

  static async updateStatus(id, status) {
    await pool.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM applications WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Application;
