import React, { useState } from 'react';
import './index.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentsList';
import SearchBar from './components/basic/SearchBar';
import Header from './components/basic/Header';

function App() {
  const loadStudentsFromStorage = () => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  };

  const [students, setStudents] = useState(loadStudentsFromStorage);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Header style={{ color: '#4CAF50' }} title={'This is a header'} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} extraStyle={{ width: 600 }} />

      <StudentForm students={students} setStudents={setStudents} />

      <StudentList students={students} searchQuery={searchQuery} setStudents={setStudents} />
    </div>
  );
}

export default App;
