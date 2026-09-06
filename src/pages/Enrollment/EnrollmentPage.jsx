import React, { useState } from 'react';
import './EnrollmentPage.css';

export default function EnrollmentPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', qualification: '', goals: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Name required";
    if (!formData.email) errors.email = "Email required";
    return errors;
  };

  // INTHA FUNCTION UN PHOTO LA IRUKKURATHU THAN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // BACKEND KU DATA ANUPPARATHU - ITHU THAAN FIX
    const dataToSend = {
      student_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course_name: "Sample Course",
      plan: formData.qualification,
      message: formData.goals
    };

    console.log("SENDING TO BACKEND:", dataToSend);

    try {
      const res = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });

      const result = await res.json();
      console.log("BACKEND RESULT:", result);

      if(result.success) {
        alert("Enrolled Successfully da!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Enrollment Page</h1>
      {/* form code */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}