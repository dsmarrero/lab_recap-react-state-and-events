import { useState } from 'react';
import './App.css';
import { studentsData, type Student } from './students';
import AddStudentForm from './components/AddStudentForm';

function App() {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const addStudent = (newStudent: Student) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <h1>Ironhack Student Manager</h1>
      
      <AddStudentForm onAddStudent={addStudent} />

      <div className="student-list">
        {students.map((student) => (
          <div key={student._id} className="student-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
            <img src={student.image} alt={student.fullName} style={{ width: '100px', borderRadius: '50%' }} />
            <h3>{student.fullName}</h3>
            <p>Program: <strong>{student.program}</strong></p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Graduated: {student.graduated ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;