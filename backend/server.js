const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bhavani', 
  database: 'aaa_tech_db'
});

db.connect(err => console.log(err ? err : "DB Connected"));

// FINAL TABLE - CONTACTS
db.query(`CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  inquiryType VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

// FINAL TABLE - ENROLLMENTS - FIXED DA
db.query(`CREATE TABLE IF NOT EXISTS enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  course VARCHAR(255),
  plan VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

// TASK 3: CONTACT FORM DATA
app.post('/api/contact', (req,res)=>{
  const {name, email, phone, inquiryType, message} = req.body;
  console.log("Contact Data:", req.body);
  db.query("INSERT INTO contacts (name,email,phone,inquiryType,message) VALUES (?,?,?,?,?)",
  [name,email,phone,inquiryType,message],
  (err)=>{
    if(err) return res.status(500).json(err);
    res.json({message:"Saved da Bhavani!"});
  });
});

app.get('/api/contacts', (req,res)=>{
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result)=>{
    if(err) return res.status(500).json(err);
    res.json(result);
  });
});

// TASK 3B: ENROLLMENT FORM DATA - FIXED DA BHAVANI
app.post('/api/enroll', (req,res)=>{
  const { student_name, name, email, phone, course, course_name, plan, message } = req.body;
  const finalName = student_name || name;
  const finalCourse = course || course_name;
  const finalPlan = plan || "Basic";
  
  console.log("Enroll Data:", req.body);
  
  db.query("INSERT INTO enrollments (student_name,email,phone,course,plan,message) VALUES (?,?,?,?,?,?)",
  [finalName, email, phone, finalCourse, finalPlan, message],
  (err)=>{
    if(err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({message:"Enrolled da Bhavani!"});
  });
});

app.get('/api/enrollments', (req,res)=>{
  db.query("SELECT * FROM enrollments ORDER BY id DESC", (err, result)=>{
    if(err) return res.status(500).json(err);
    res.json(result);
  });
});

// TASK 5: AUTHENTICATION
app.post('/api/admin/login', (req,res)=>{
  const {username, password} = req.body;
  if(username === 'admin' && password === 'admin123'){
    res.json({success:true, message:"Login Success da Bhavani!"});
  } else {
    res.status(401).json({success:false, message:"Wrong Password da"});
  }
});

app.listen(5000, ()=> console.log("Server running on 5000 da Bhavani!"));