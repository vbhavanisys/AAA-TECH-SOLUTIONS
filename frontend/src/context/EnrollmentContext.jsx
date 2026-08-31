import React, { createContext, useContext, useState, useCallback } from 'react';

const EnrollmentContext = createContext(null);

export function EnrollmentProvider({ children }) {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [triggerElement, setTriggerElement] = useState(null);

  const openEnrollmentModal = useCallback((courseOrOptions = '', triggerEl = null, preferredPlan = '') => {
    let courseId = '';
    let plan = '';
    let el = triggerEl;

    if (typeof courseOrOptions === 'object' && courseOrOptions !== null) {
      courseId = courseOrOptions.courseId || '';
      plan = courseOrOptions.preferredPlan || courseOrOptions.plan || '';
      el = courseOrOptions.triggerEl || courseOrOptions.triggerElement || triggerEl;
    } else if (typeof courseOrOptions === 'string') {
      courseId = courseOrOptions;
      plan = preferredPlan || '';
    }

    setSelectedCourseId(courseId);
    setSelectedPlan(plan);

    if (el) {
      setTriggerElement(el);
    } else if (document.activeElement instanceof HTMLElement) {
      setTriggerElement(document.activeElement);
    }
    setIsEnrollmentOpen(true);
  }, []);

  const closeEnrollmentModal = useCallback(() => {
    setIsEnrollmentOpen(false);
    // Restore focus to the element that triggered the modal
    if (triggerElement && typeof triggerElement.focus === 'function') {
      setTimeout(() => {
        triggerElement.focus();
      }, 50);
    }
  }, [triggerElement]);

  return (
    <EnrollmentContext.Provider
      value={{
        isEnrollmentOpen,
        selectedCourseId,
        selectedPlan,
        openEnrollmentModal,
        closeEnrollmentModal
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollmentModal() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollmentModal must be used within an EnrollmentProvider');
  }
  return context;
}
