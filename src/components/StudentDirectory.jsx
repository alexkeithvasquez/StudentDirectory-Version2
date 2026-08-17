import StudentCard from './StudentCard';
import styles from './StudentDirectory.module.css';

export default function StudentDirectory({ students }) {
  if (students.length === 0) {
    return <p className={styles.noResults}>No students match your search or filter.</p>;
  }

  return (
    <div className={styles.directoryGrid}>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}