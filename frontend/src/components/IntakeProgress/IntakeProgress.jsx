import styles from "./IntakeProgress.module.css";
const steps = [
    {id: 1, label: "Designated Service Assessment", status: "uncomplete"},
    {id: 2, label: "Client", status: "uncomplete"},
    {id: 3, label: "Matter", status: "uncomplete"},
    {id: 4, label: "Parties", status: "uncomplete"},
    {id: 5, label: "Funds", status: "uncomplete"},
    {id: 6, label: "Risk", status: "uncomplete"},
    {id: 7, label: "Confirm", status: "uncomplete"},


]

const IntakeProgress = () => {
  return (
    <div className={styles.progressCard}>
      <h4 className={styles.progressTitle}>PROGRESS</h4>

      <ul className={styles.progressList}>
        {steps.map((step) => (
          <li
            key={step.id}
            className={`${styles.progressItem} ${styles[step.status]}`}
          >
            <div className={styles.stepIndicator}>
              {step.status === "complete" ? "✓" : step.id}
            </div>

            <span className={styles.stepLabel}>{step.label}</span>

            {step.status === "complete" && (
              <span className={styles.stepStatus}>Ready</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntakeProgress;