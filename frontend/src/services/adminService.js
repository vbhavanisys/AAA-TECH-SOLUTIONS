import { apiRequest } from './api';

export async function adminLogin(credentials) {
  const res = await apiRequest('/admin/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });

  if (res.token) {
    localStorage.setItem('aaa_admin_token', res.token);
  }
  return res;
}

export async function getAdminMe() {
  return await apiRequest('/admin/me');
}

export async function getAdminStats() {
  return await apiRequest('/admin/stats');
}

export function adminLogout() {
  localStorage.removeItem('aaa_admin_token');
}
