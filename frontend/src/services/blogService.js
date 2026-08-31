import { apiRequest } from './api';
import { blogPosts } from '../data/blog';

export async function getBlogPosts() {
  try {
    const res = await apiRequest('/blog');
    return res.data && res.data.length > 0 ? res.data : blogPosts;
  } catch (err) {
    console.warn('Blog API unavailable, using local data:', err.message);
    return blogPosts;
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const res = await apiRequest(`/blog/${slug}`);
    return res.data;
  } catch (err) {
    console.warn(`Blog API unavailable for ${slug}, using local:`, err.message);
    return blogPosts.find(b => b.slug === slug || String(b.id) === String(slug)) || null;
  }
}
