import { apiRequest } from './api';
import { projectsData } from '../data/projects';

export async function getProjects() {
  try {
    const res = await apiRequest('/projects');
    return res.data && res.data.length > 0 ? res.data : projectsData;
  } catch (err) {
    console.warn('Projects API unavailable, using local data:', err.message);
    return projectsData;
  }
}
