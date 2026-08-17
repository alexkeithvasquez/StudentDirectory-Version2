import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
        name,
        course,
        yearLevel,
        status,
        gwa: Number(gwa),
      };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className={styles.input}
      />

      <input
        type="text"
        placeholder="Year Level"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
        className={styles.input}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.input}
      >
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>

      <input
        type="text"
        placeholder="GWA"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.submitButton}>
        Add Student
      </button>
    </form>
  );
}