import { apiRequest } from './api';
import { pricingPlans } from '../data/pricing';

/**
 * Format numeric amount into INR Indian currency format (e.g. 1500 -> "₹1,500")
 * @param {number|string} amount 
 * @returns {string}
 */
export function formatINR(amount) {
  const num = Number(amount);
  if (isNaN(num)) return `₹${amount}`;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(num);
}

/**
 * Fetch all course pricing plans with fallback to local static data
 */
export async function getCoursePlans() {
  try {
    const res = await apiRequest('/course-plans');
    if (res.data && res.data.length > 0) {
      // Map API plans to match UI structure
      return res.data.map(apiPlan => {
        const localMatch = pricingPlans.find(p => p.name.toLowerCase() === apiPlan.name.toLowerCase()) || {};
        return {
          id: apiPlan.id,
          name: apiPlan.name.toUpperCase(),
          price: formatINR(apiPlan.price),
          rawPrice: apiPlan.price,
          billing: apiPlan.billing_period ? `/${apiPlan.billing_period}` : localMatch.billing || '',
          period: apiPlan.billing_period || localMatch.period || '',
          description: apiPlan.description || localMatch.description || '',
          isPopular: Boolean(apiPlan.is_popular),
          ctaText: localMatch.ctaText || (apiPlan.name.toLowerCase() === 'starter' ? 'Get Started' : 'Enroll Now'),
          planValue: apiPlan.name,
          features: localMatch.features || ['Full course curriculum access', 'Live interactive sessions', 'Hands-on projects', 'Course completion certificate']
        };
      });
    }
    return pricingPlans;
  } catch (err) {
    console.warn('API unavailable, using fallback pricing plans:', err.message);
    return pricingPlans;
  }
}
