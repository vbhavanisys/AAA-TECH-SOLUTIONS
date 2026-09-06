const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// DB CONNECT
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bhavani',
  database: 'aaa_tech_db'
});

db.connect(err => {
  if(err) {
    console.log("DB Error:", err);
  } else {
    console.log("DB Connected - aaa_tech_db");
  }
});

// ENROLL API - FINAL CORRECT CODE
app.post('/api/enroll', (req, res) => {
  console.log("FRONTEND DATA:", req.body);

  const student_name = req.body.student_name || req.body.fullName || "";
  const email = req.body.email || "";
  const phone = req.body.phone || req.body.mobileNumber || "";
  const course_name = req.body.course_name || req.body.courseInterestedIn || "";
  const plan = req.body.plan || req.body.preferredPlan || "";
  const message = req.body.message || "";

  const sql = "INSERT INTO enrollments (student_name, email, phone, course_name, plan, message) VALUES (?, ?, ?, ?, ?, ?)";
  
  db.query(sql, [student_name, email, phone, course_name, plan, message], (err, result) => {
    if(err) {
      console.log("INSERT ERROR:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("SUCCESS ID:", result.insertId);
    res.json({ success: true, id: result.insertId });
  });
});

// CONTACT FORM API - un task la main
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if(!name || !email) return res.status(400).json({ error: "Name & Email required" });
  
  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if(err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// ADMIN PANEL - Team lead ah ne data paarkanum la
app.get('/api/enrollments', (req, res) => {
  db.query("SELECT * FROM enrollments ORDER BY created_at DESC", (err, rows) => {
    if(err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/contacts', (req, res) => {
  db.query("SELECT * FROM contact_messages ORDER BY created_at DESC", (err, rows) => {
    if(err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});