const { ulid } = require("ulid");

function generateId(prefix) {
  return `${prefix}_${ulid()}`;
}

module.exports = generateId;
