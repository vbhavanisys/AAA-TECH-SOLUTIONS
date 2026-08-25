import React, { createContext, useContext, useState, useCallback } from 'react';

const EnrollmentContext = createContext(null);

export function EnrollmentProvider({ children }) {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [triggerElement, setTriggerElement] = useState(null);

  const openEnrollmentModal = useCallback((courseId = '', triggerEl = null) => {
    setSelectedCourseId(courseId || '');
    if (triggerEl) {
      setTriggerElement(triggerEl);
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
