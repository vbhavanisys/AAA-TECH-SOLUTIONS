const pool = require('../config/db');

class Project {
  static async findAll(activeOnly = true) {
    const query = activeOnly
      ? 'SELECT * FROM projects WHERE is_active = TRUE ORDER BY id ASC'
      : 'SELECT * FROM projects ORDER BY id ASC';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async create(data) {
    const { title, slug, description, image_url, technologies, project_url, is_active } = data;
    const [result] = await pool.query(
      'INSERT INTO projects (title, slug, description, image_url, technologies, project_url, is_active) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, slug, description || '', image_url || '', technologies || '', project_url || '', is_active ?? true]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { title, slug, description, image_url, technologies, project_url, is_active } = data;
    await pool.query(
      'UPDATE projects SET title = ?, slug = ?, description = ?, image_url = ?, technologies = ?, project_url = ?, is_active = ? WHERE id = ?',
      [title, slug, description, image_url, technologies, project_url, is_active, id]
    );
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM projects WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Project;
