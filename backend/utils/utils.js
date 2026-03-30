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

function allowedClientFields() {
  return [
    "client_abn",
    "client_acn",
    "client_address",
    "client_authority",
    "client_capacity",
    "client_dob",
    "client_email",
    "client_fullname",
    "client_instructing_person",
    "client_mobile",
    "client_type",
  ];
}

function allowedMatterFields() {
  return [
    "matter_band_value",
    "matter_description",
    "matter_duration",
    "matter_frequency",
    "matter_jurisdiction",
    "matter_purpose",
    "matter_trust_expected",
    "matter_type",
  ];
}

function allowedEntityFields() {
  return [
    "entity_address",
    "entity_directors",
    "entity_name",
    "entity_trustee",
    "entity_type",
  ];
}

module.exports = {
  errorRes,
  loadQuery,
  generateId,
  allowedClientFields,
  allowedEntityFields,
  allowedMatterFields,
};
