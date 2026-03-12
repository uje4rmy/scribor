const formatAmount = (amount) =>
  Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const capitalise = (label) => label.charAt(0).toUpperCase() + label.slice(1);

export { formatAmount, capitalise };
