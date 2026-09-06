import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EnrollmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course || { title: "Java Full Stack", plan: "Premium" };
  
  const [form, setForm] = useState({
    student_name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SENDING TO BACKEND:", form);
    
    try {
      const res = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_name: form.student_name,
          email: form.email,
          phone: form.phone,
          course_name: course.title,
          plan: course.plan,
          message: form.message
        })
      });
      const data = await res.json();
      console.log("BACKEND RESPONSE:", data);
      alert("Enrollment Success da Bhavani! ✅");
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert("Error da! Backend check pannu");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Enroll Now - {course.title}</h2>
      <p>Plan: {course.plan}</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input type="text" placeholder="Full Name" required value={form.student_name} onChange={e=>setForm({...form, student_name: e.target.value})} style={{ padding: "12px" }} />
        <input type="email" placeholder="Email" required value={form.email} onChange={e=>setForm({...form, email: e.target.value})} style={{ padding: "12px" }} />
        <input type="tel" placeholder="Phone" required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} style={{ padding: "12px" }} />
        <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} style={{ padding: "12px" }}></textarea>
        <button type="submit" style={{ padding: "12px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>Submit Enrollment</button>
      </form>
    </div>
  );
}