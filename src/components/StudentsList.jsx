import React from 'react';
import StudentCard from './StudentCard';
import './../index.css';

function StudentList({ ...props }) {
  const filteredStudents = props.students.filter((student) => student.name.toLowerCase().includes(props.searchQuery));

  return (
    <>
      {filteredStudents.length === 0 ? (
        <p className="no-users">No users found.</p>
      ) : (
        <div className="card-container">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              age={student.age}
              email={student.email}
              description={student.description}
              students={props.students}
              hobbys={'Games'}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default StudentList;
