import styles from "./FormProgress.module.css";

const steps = [
  { id: 1, label: "Basic Details" },
  { id: 2, label: "Client Type & Service" },
  { id: 3, label: "Ownership & Control" },
  { id: 4, label: "Source of Funds" },
  { id: 5, label: "Country Exposure" },
  { id: 6, label: "PEP and Sanctions Declarations" },
  { id: 7, label: "Nature & Purpose" },
  { id: 8, label: "Declarations" },
];

const FormProgress = ({ currentPage, goToPage, isStepValid }) => {
  return (
    <div className={styles.progressCard}>
      <h4 className={styles.progressTitle}>PROGRESS</h4>

      <ul className={styles.progressList}>
        {steps.map((step) => {
          let statusClass = "";

          if (step.id < currentPage) statusClass = styles.complete;
          else if (step.id === currentPage) statusClass = styles.active;
          else statusClass = styles.uncomplete;

          return (
            <li
              key={step.id}
              className={`${styles.progressItem} ${statusClass}`}
              onClick={() => {
                if (step.id <= currentPage || isStepValid(currentPage)) {
                  goToPage(step.id);
                }
              }}
              style={{
                cursor: step.id <= currentPage ? "pointer" : "not-allowed"
              }}
            >
              <div className={styles.stepIndicator}>
                {step.id < currentPage ? "✓" : step.id}
              </div>

              <span className={styles.stepLabel}>{step.label}</span>

              {step.id < currentPage && (
                <span className={styles.stepStatus}>Ready</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormProgress;