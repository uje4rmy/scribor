const Topics = [
  {
    id: "getting-started",
    label: "Getting Started",
    faqs: [
      {
        id: "gs-1",
        question: "How do I create my first matter?",
        answer:
          "From the dashboard, click “New intake” and follow the guided steps. Start by adding your client, then enter key details like matter type, jurisdiction, and a short description of the work.",
      },
      {
        id: "gs-2",
        question: "What information do I need before starting?",
        answer:
          "Have your client’s full legal name, contact details, ID documents, the purpose of the matter, and any known counterparties ready before starting an intake. This keeps the process quick and reduces back-and-forth.",
      },
      {
        id: "gs-3",
        question: "Can I save a draft and come back later?",
        answer:
          "Yes. You can stop at any point during the intake, and your progress will be saved automatically. When you’re ready, return to the matter from the Matters list and continue from where you left off.",
      },
    ],
  },
  {
    id: "intake-guidance",
    label: "Intake Guidance",
    faqs: [
      {
        id: "ig-1",
        question: "How detailed should my matter description be?",
        answer:
          "Aim to include enough detail for a colleague to understand the scope, key parties, timelines, and any potential risk indicators. Clear descriptions help downstream teams make faster, more accurate decisions.",
      },
      {
        id: "ig-2",
        question: "What if a client doesn’t have all their documents yet?",
        answer:
          "You can still create the intake and mark certain fields as pending. Use the “Request more info” action from the Next actions panel to capture missing documents once they’re available.",
      },
      {
        id: "ig-3",
        question: "How do I avoid duplicate matters for the same client?",
        answer:
          "Search for the client name or reference number before starting a new intake. If a matching matter exists, open it from the search results instead of creating a new one.",
      },
    ],
  },
  {
    id: "aml-ctf-checks",
    label: "AML/CTF Checks",
    faqs: [
      {
        id: "ac-1",
        question: "When should I run an AML/CTF check?",
        answer:
          "Run checks when you onboard a new client, add a new beneficial owner, or when there are material changes to the relationship. This ensures your risk profile is always up to date.",
      },
      {
        id: "ac-2",
        question: "What if a check returns a possible match?",
        answer:
          "Use the “PEP/Sanctions” review workflow to confirm whether the match is accurate. Add your analysis and decision notes so there’s a clear audit trail of your assessment.",
      },
      {
        id: "ac-3",
        question: "Can I rerun checks on existing clients?",
        answer:
          "Yes. From the Next actions panel, choose the relevant party and run the required ABN, ASIC, or PEP/Sanctions check again whenever circumstances change.",
      },
    ],
  },
  {
    id: "conflicts-checks",
    label: "Conflicts Checks",
    faqs: [
      {
        id: "cc-1",
        question: "How do I record potential conflicts?",
        answer:
          "During intake, add all known related parties. Scribor will flag potential conflicts. Use the conflicts panel to review matches, document outcomes, and mark items as cleared or escalated.",
      },
      {
        id: "cc-2",
        question: "What if a conflict is identified mid-matter?",
        answer:
          "Use the “Request more info” or “Mark triaged” actions to pause work while you review the conflict. Document your reasoning and outcomes to keep your team aligned.",
      },
      {
        id: "cc-3",
        question: "Who can see conflict information?",
        answer:
          "Only users with the appropriate role and permissions can view or edit conflict information. This keeps sensitive data restricted while still enabling transparent decision-making.",
      },
    ],
  },
  {
    id: "audit-pack-exports",
    label: "Audit Pack Exports",
    faqs: [
      {
        id: "ap-1",
        question: "How do I generate an audit pack?",
        answer:
          "From an approved matter, use your export tools in the Next actions panel to generate a structured file with all relevant client, matter, risk, and declaration information.",
      },
      {
        id: "ap-2",
        question: "What’s included in the export?",
        answer:
          "Exports include core client details, matter information, associated parties, funds and risk declarations, and your final approvals. You can share this file directly with auditors or upload it to your document management system.",
      },
      {
        id: "ap-3",
        question: "Can I customise the export format?",
        answer:
          "Yes. Where available, choose an export template that best matches your practice management or document management system so auditors can work with the data easily.",
      },
    ],
  },
  {
    id: "roles-approvals",
    label: "Roles & Approvals",
    faqs: [
      {
        id: "ra-1",
        question: "How do I assign a lawyer or reviewer?",
        answer:
          "Use the “Assign to” action in the Next actions panel. Choose a colleague from the list to make them responsible for the matter or a particular check.",
      },
      {
        id: "ra-2",
        question: "What happens when I mark a matter as approved?",
        answer:
          "Marking a matter as approved records the decision, locks the risk profile, and enables downstream actions like exporting to your practice management system.",
      },
      {
        id: "ra-3",
        question: "Can I change an approval after it’s been submitted?",
        answer:
          "If you need to revisit an approval, use the approval workflow in the matter’s Next actions panel to update the decision and add a new note explaining the change.",
      },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    faqs: [
      {
        id: "ts-1",
        question: "I can’t see a matter I’m expecting.",
        answer:
          "First, check that you’re in the correct workspace and that your filters aren’t hiding the matter. If it’s still missing, confirm the matter was created and that you have access to it.",
      },
      {
        id: "ts-2",
        question: "Why is a check taking a long time to complete?",
        answer:
          "Some external data providers can take longer to respond during peak times. You can continue working on other parts of the matter and we’ll update the check status automatically once it completes.",
      },
      {
        id: "ts-3",
        question: "What should I do if something doesn’t look right?",
        answer:
          "Pause any work on the affected matter and use the Help chat or your internal escalation process to flag the issue. Include screenshots and links so we can investigate quickly.",
      },
    ],
  },
  {
    id: "contact-support",
    label: "Contact Support",
    faqs: [
      {
        id: "cs-1",
        question: "How do I contact the Scribor team?",
        answer:
          "Use the Help chat on this page to send us a message, or email support@example.com. We aim to respond to all queries within one business day.",
      },
      {
        id: "cs-2",
        question: "What information should I include when raising a ticket?",
        answer:
          "Include the matter reference, a short description of the issue, any error messages, and steps to reproduce the problem. This helps us resolve your request faster.",
      },
      {
        id: "cs-3",
        question: "Do you offer training or onboarding sessions?",
        answer:
          "Yes. We provide optional onboarding sessions for new teams and regular product webinars. Reach out via support and we’ll share upcoming dates and resources.",
      },
    ],
  },
];

export default Topics;
