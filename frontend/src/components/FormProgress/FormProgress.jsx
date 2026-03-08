import styles from "./FormProgress.module.css";
const steps = [
    {id: 1, label: "Basic Details", status: "uncomplete"},
    {id: 2, label: "Client Type", status: "uncomplete"},
    {id: 3, label: "Requested Service", status: "uncomplete"},
    {id: 4, label: "Ownership & Control", status: "uncomplete"},
    {id: 5, label: "Source of Funds", status: "uncomplete"},
    {id: 6, label: "Country Exposure", status: "uncomplete"},
    {id: 7, label: "PEP and Sanctions Declarations", status: "uncomplete"},
    {id: 8, label: "Nature & Purpose", status: "uncomplete"},
    {id: 9, label: "Declarations", status: "uncomplete"},


]

const FormProgress = () => {
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

export default FormProgress;