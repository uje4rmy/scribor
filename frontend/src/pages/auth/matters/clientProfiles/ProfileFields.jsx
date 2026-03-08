const PROFILE_FIELDS = [
  { key: "client_fullname", label: "Full Name", section: "client" },
  { key: "client_type", label: "Client Type", section: "client" },
  { key: "client_dob", label: "Date of Birth", section: "client" },
  { key: "client_abn", label: "ABN", section: "client" },
  { key: "client_acn", label: "ACN", section: "client" },
  { key: "client_email", label: "Email", section: "contact" },
  { key: "client_mobile", label: "Mobile", section: "contact" },
  {
    key: "client_address",
    label: "Address",
    section: "contact",
    type: "textarea",
  },
  { key: "client_capacity", label: "Acting Capacity", section: "role" },
  { key: "client_authority", label: "Authority Basis", section: "role" },
  {
    key: "client_instructing_person",
    label: "Instructing Person",
    section: "role",
  },
  {
    key: "entity_name",
    label: "Principal / Trust / Company",
    section: "entity",
  },
  { key: "entity_trustee", label: "Trustee", section: "entity" },
  { key: "entity_type", label: "Trustee Type", section: "entity" },
  {
    key: "entity_address",
    label: "Registered Address",
    section: "entity",
    type: "textarea",
  },
  {
    key: "matter_purpose",
    label: "Purpose of Engagement",
    section: "matter",
    type: "textarea",
  },
  { key: "matter_duration", label: "Expected Duration", section: "matter" },
  {
    key: "matter_frequency",
    label: "Expected Transaction Frequency",
    section: "matter",
  },
  {
    key: "matter_trust_expected",
    label: "Trust Account Expected",
    section: "matter",
    type: "boolean",
  },
  { key: "matter_type", label: "Matter type", section: "matter" },
  {
    key: "matter_description",
    label: "Short Description",
    section: "matter",
    type: "textarea",
  },
  { key: "matter_jurisdiction", label: "Jurisdiction", section: "matter" },
  {
    key: "matter_band_value",
    label: "Estimated Band Value",
    section: "matter",
  },
];

export default PROFILE_FIELDS;
