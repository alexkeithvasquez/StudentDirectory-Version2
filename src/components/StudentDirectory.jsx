import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  if (students.length === 0) {
    return <p className="noResults">No students match your search or filter.</p>;
  }

  return (
    <div className="directoryGrid">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}