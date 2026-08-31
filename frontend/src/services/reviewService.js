import { apiRequest } from './api';

/**
 * Fetch approved student reviews
 */
export async function getReviews() {
  try {
    const res = await apiRequest('/reviews');
    return res.data;
  } catch (err) {
    console.warn('Reviews API unavailable:', err.message);
    return null;
  }
}

/**
 * Submit new review to backend
 * @param {{ name: string, course?: string, rating: number, review_text: string }} data
 */
export async function submitReview(data) {
  return await apiRequest('/reviews', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
