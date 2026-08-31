import { apiRequest } from './api';
import { coursesData } from '../data/courses';

/**
 * Fetch all active courses with fallback to local static data
 */
export async function getCourses() {
  try {
    const res = await apiRequest('/courses');
    return res.data && res.data.length > 0 ? res.data : coursesData;
  } catch (err) {
    console.warn('API unavailable, using fallback courses:', err.message);
    return coursesData;
  }
}

/**
 * Fetch single course by ID or slug with fallback
 */
export async function getCourseById(id) {
  try {
    const res = await apiRequest(`/courses/${id}`);
    return res.data;
  } catch (err) {
    console.warn(`API unavailable for course ${id}, using fallback:`, err.message);
    return coursesData.find(c => String(c.id) === String(id) || c.slug === id) || null;
  }
}
