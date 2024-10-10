import React, { useState } from 'react';
import './../index.css';

function StudentForm({ students }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const addStudent = (newStudent) => {
    localStorage.setItem('students', JSON.stringify([...students, { id: students.length + 1, ...newStudent }]));
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !email || !description) {
      alert('Please fill in all fields.');
      return;
    }

    const newStudent = {
      name,
      age: parseInt(age),
      email,
      description,
    };

    addStudent(newStudent);

    setName('');
    setAge('');
    setEmail('');
    setDescription('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
