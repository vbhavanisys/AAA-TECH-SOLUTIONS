const pool = require('../config/db');

class BlogPost {
  static async findAll(publishedOnly = true) {
    const query = publishedOnly
      ? "SELECT * FROM blog_posts WHERE status = 'published' ORDER BY published_at DESC"
      : 'SELECT * FROM blog_posts ORDER BY id DESC';
    const [rows] = await pool.query(query);
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async findBySlug(slug) {
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE slug = ?', [slug]);
    return rows[0] || null;
  }

  static async create(data) {
    const { title, slug, excerpt, content, featured_image, author, status, published_at } = data;
    const [result] = await pool.query(
      'INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, author, status, published_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, excerpt, content, featured_image || '', author || 'AAA Tech Team', status || 'published', published_at || new Date()]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { title, slug, excerpt, content, featured_image, author, status } = data;
    await pool.query(
      'UPDATE blog_posts SET title = ?, slug = ?, excerpt = ?, content = ?, featured_image = ?, author = ?, status = ? WHERE id = ?',
      [title, slug, excerpt, content, featured_image, author, status, id]
    );
    return true;
  }

  static async delete(id) {
    await pool.query('DELETE FROM blog_posts WHERE id = ?', [id]);
    return true;
  }
}

module.exports = BlogPost;
