import React from 'react';
import Modal from 'react-modal';
import './../index.css';

function StudentCard({ id, name, age, email, description, students, hobbys }) {
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    window.location.reload();
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Hobby:</strong> {hobbys}
      </p>
      <button className="delete-btn" onClick={() => deleteStudent(id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
