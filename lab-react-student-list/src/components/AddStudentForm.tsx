import { useState, type ChangeEvent, type FormEvent } from 'react';
import { type Student } from '../students';  


interface AddStudentFormProps {
  onAddStudent: (newStudent: Student) => void;
}

function AddStudentForm({ onAddStudent }: AddStudentFormProps) {
  const [fullName, setFullName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [program, setProgram] = useState<string>('');
  const [graduated, setGraduated] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newStudent: Student = {
      _id: crypto.randomUUID(),
      fullName,
      image,
      phone,
      email,
      program,
      graduated
    };

    onAddStudent(newStudent);

    setFullName('');
    setImage('');
    setPhone('');
    setEmail('');
    setProgram('');
    setGraduated(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <h2>Add New Student</h2>
      
      <input 
        type="text" 
        placeholder="Full Name" 
        value={fullName} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} 
        required 
      />
      <input 
        type="url" 
        placeholder="Image URL" 
        value={image} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)} 
        required 
      />
      <input 
        type="tel" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
        required 
      />
      
      <select value={program} onChange={(e: ChangeEvent<HTMLSelectElement>) => setProgram(e.target.value)} required>
        <option value="">-- Select Program --</option>
        <option value="Web Dev">Web Dev</option>
        <option value="UX/UI">UX/UI</option>
        <option value="Data">Data</option>
      </select>

      <label>
        Graduated:
        <input 
          type="checkbox" 
          checked={graduated} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGraduated(e.target.checked)} 
        />
      </label>
      
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;