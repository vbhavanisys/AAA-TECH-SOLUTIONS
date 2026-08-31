const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bhavani',
  database: 'aaa_tech_db'
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("DB Connected");
});

// === CONTACT API ===
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  db.query('INSERT INTO contact_messages (name, email, message) VALUES (?,?,?)',
  [name, email, message], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true, msg: 'Message saved!' });
  });
});

// === ENROLL API ===
app.post('/api/enroll', (req, res) => {
  const { fullName, mobile, email, course, plan, message } = req.body;
  console.log("Enroll Data:", req.body);
  const sql = `INSERT INTO enrollments (student_name, email, phone, course_name, plan, message, course_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [fullName, email, mobile, course, plan, message, 1], (err, result) => {
    if (err) {
      console.error("ENROLL ERROR:", err);
      return res.status(500).send(err);
    }
    res.send({ success: true, msg: 'Enrolled saved!' });
  });
});

// === ADMIN PANEL ===
app.get('/api/messages', (req,res)=>{
  db.query('SELECT * FROM contact_messages', (err, result)=>{
    if(err) return res.status(500).send(err);
    res.send(result);
  });
});

app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if(email === "admin@gmail.com" && password === "admin123"){
    return res.send({ success: true, message: "Login Success" });
  }
  res.status(401).send({ success: false, message: "Invalid login" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});