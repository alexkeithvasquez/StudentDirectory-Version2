import { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // TODO 5
    const newStudent = {
      name,
      course,
      yearLevel,
      status,
      gwa,
    };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO 6 */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type="text"
        placeholder="Year Level"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>

      <input
        type="text"
        placeholder="GWA"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}