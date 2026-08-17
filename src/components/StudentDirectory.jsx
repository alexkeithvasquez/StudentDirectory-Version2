import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  if (students.length === 0) {
    return <p>No students match your search or filter.</p>;
  }

  return (
    <div>
      <h1>Student Directory</h1>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}