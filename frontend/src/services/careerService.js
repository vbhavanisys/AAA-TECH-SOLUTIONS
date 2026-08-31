import { apiRequest } from './api';
import { careersData } from '../data/careers';

export async function getCareers() {
  try {
    const res = await apiRequest('/careers');
    return res.data && res.data.length > 0 ? res.data : careersData;
  } catch (err) {
    console.warn('Careers API unavailable, using local data:', err.message);
    return careersData;
  }
}

export async function applyForCareer(careerId, data) {
  return await apiRequest(`/careers/${careerId}/apply`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
