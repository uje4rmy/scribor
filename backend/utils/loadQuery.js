const fs = require("fs");
const path = require("path");

function loadQuery(name) {
  return fs.readFileSync(
    path.join(__dirname, "../queries", name + ".sql"),
    "utf8",
  );
}

module.exports = loadQuery;
