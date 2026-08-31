import { apiRequest } from './api';

/**
 * Submit course enrollment application to MySQL backend
 * @param {{ fullName: string, email: string, mobile: string, course: string, plan: string, message?: string }} data
 */
export async function submitEnrollment(data) {
  return await apiRequest('/enrollments', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export const submitEnrollmentApplication = submitEnrollment;

/**
 * Get all enrollments (Admin)
 */
export async function getEnrollments() {
  return await apiRequest('/enrollments', {
    method: 'GET'
  });
}

/**
 * Update enrollment status (Admin)
 */
export async function updateEnrollmentStatus(id, status) {
  return await apiRequest(`/enrollments/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status })
  });
}
