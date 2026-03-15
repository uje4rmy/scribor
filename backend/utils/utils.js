const fs = require("fs");
const path = require("path");
const { ulid } = require("ulid");

function errorRes(res, statusCode, message) {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
}

function loadQuery(name) {
  return fs.readFileSync(
    path.join(__dirname, "../queries", name + ".sql"),
    "utf8",
  );
}

function generateId(prefix) {
  return `${prefix}_${ulid()}`;
}

module.exports = { errorRes, loadQuery, generateId };
