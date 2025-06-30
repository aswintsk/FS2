import express from 'express';

const app = express();
app.use(express.json()); // Parse incoming JSON

// Initial student records
let students = [
  { id: 1, name: 'Aarav Kumar', course: 'Computer Science' },
  { id: 2, name: 'Sara Iyer', course: 'Mathematics' },
  { id: 3, name: 'Neil Sharma', course: 'Physics' }
];

let nextId = 4;

// a. GET /students - List all students
app.get('/students', (req, res) => {
  res.send(JSON.stringify(students));
});

// b. GET /students/:id - Get a student by ID
app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).send('Error: Student not found.');
  }

  res.send(JSON.stringify(student));
});

// c. POST /students - Add a new student
app.post('/students', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).send('Error: Name and course are required.');
  }

  const newStudent = { id: nextId++, name, course };
  students.push(newStudent);

  res.status(201).send(`Student added: ${name}, enrolled in ${course}.`);
});

// d. PUT /students/:id - Update student's name and/or course
app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name, course } = req.body;

  const student = students.find(s => s.id === studentId);
  if (!student) {
    return res.status(404).send('Error: Student not found.');
  }

  if (name !== undefined) student.name = name;
  if (course !== undefined) student.course = course;

  res.send(`Student updated: ${student.name}, course: ${student.course}`);
});

// e. DELETE /students/:id - Delete student
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === studentId);

  if (index === -1) {
    return res.status(404).send('Error: Student not found.');
  }

  const deleted = students.splice(index, 1)[0];
  res.send(`Deleted student: ${deleted.name}, course: ${deleted.course}`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🎓 Student server is running at http://localhost:${PORT}`);
});