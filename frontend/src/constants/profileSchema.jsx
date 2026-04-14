import { z } from "zod";

const profileSchema = z.object({
  client_fullname: z
    .string()
    .trim()
    .min(1, { error: "Full name cannot be empty." }),
  client_type: z.enum([
    "individual",
    "otherentity",
    "company",
    "trust",
    "partnership",
  ]),
  client_dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the valid format.")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date.",
    }),
  client_abn: z
    .string()
    .regex(/^\d{11}$/, "ABN must be exactly 11 digits.")
    .or(z.literal("")),
  client_acn: z
    .string()
    .regex(/^\d{9}$/, "ACN must be exactly 9 digits.")
    .or(z.literal("")),
  client_email: z.email(),
  client_mobile: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number."),
  client_address: z.string(),
  client_capacity: z.string().max(20),
  client_authority: z.string().max(35),
  client_instructing_person: z.string().max(20),
  entity_name: z.string().max(20),
  entity_trustee: z.string().max(15),
  entity_type: z.string().max(15),
  entity_address: z.string(),
  matter_purpose: z.string().max(50),
  matter_duration: z.string().max(15).nullish(),
  matter_frequency: z.string().max(15),
  matter_trust_expected: z.boolean(),
  matter_type: z.string().max(15),
  matter_description: z.string().max(50),
  matter_jurisdiction: z.enum([
    "QLD",
    "ACT",
    "VIC",
    "WA",
    "NT",
    "TAS",
    "NSW",
    "SA",
  ]),
  matter_band_value: z.int().min(1).max(7),
});

export default profileSchema;
