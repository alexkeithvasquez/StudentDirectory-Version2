import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isOnProbation = student.status === 'On Probation';

  let cardClass = styles.card;
  if (isOnProbation) {
    cardClass = styles.card + ' ' + styles.probation;
  }

  return (
    <div className={cardClass}>
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Year Level: {student.yearLevel}</p>

      {isOnProbation ? (
        <p>On Probation</p>
      ) : (
        <p>Status: {student.status}</p>
      )}

      <p>GWA: {student.gwa}</p>

      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}