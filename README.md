# Scribor

Scribor is an AML/CTF and conflict workflow platform designed for legal teams. It helps firms move from client intake to matter review with clearer risk visibility and audit-ready records.

## What The Application Does

Scribor centralizes compliance work that is usually spread across forms, emails, and spreadsheets:

- Captures client and matter information in a structured intake workflow
- Organizes active matters in a status-based board (`To do`, `In progress`, `In review`, `Done`)
- Surfaces risk context with level badges (`Low`, `Medium`, `High`) and flagged markers
- Provides a detailed client profile workspace for review and editing
- Supports compliance-oriented operations like export/insert intake actions and oversight sections
- Includes dedicated views for due diligence, billing, help, and settings

## Key Features

### 1) Legal Compliance-Centered Landing Experience

- Product messaging and workflow framing focused on AML/CTF operations for law firms
- Highlights a three-step model: onboarding, risk/compliance review, and approval/records
- FAQ and pricing sections for stakeholder adoption and evaluation

### 2) Authenticated Workspace Navigation

- App navigation designed around legal operations:
  - Dashboard
  - Matters
  - Due Diligence
  - Billing
  - Help
  - Settings
- Global search entry point in sidebar for quickly finding clients/matters

### 3) Matters Board With Workflow Status Control

- Board layout groups matters by processing state
- Matter cards display:
  - Client name
  - Matter type and client type
  - Risk level indicator
  - Flagged status
- Status updates are persisted through backend API endpoints

### 4) Client Profile Review and Editing

- Consolidated profile sections for:
  - Client details
  - Contact
  - Role and authority
  - Entity/trust structure
  - Matter context
- In-page edit/cancel/save flow for profile adjustments
- Intended to support traceable and consistent compliance assessments

### 5) Intake and Case Preparation Utilities

- Intake page includes client form export/insert actions
- Step-based framing for a multi-stage intake journey
- Designed to reduce manual re-entry and speed initial file preparation

## Frontend UI Preview

> These are UI illustrations to show the current product layout and interaction patterns.
> **\*Personal details displayed are dummy values for demonstration purposes.\***

### Marketing / Landing

![Scribor Landing UI](/frontend/src/assets/ui-landing.png)

### Matters Board

![Scribor Matters Board UI](/frontend/src/assets/matters.png)

### Client Profile

![Scribor Client Profile UI](/frontend/src/assets/client-profile.png)

## Backend Capability Snapshot

- `GET /api/matters/:userId`  
  Returns matter list data for the authenticated user
- `GET /api/matters/client-profile/:userId`  
  Returns joined client/matter/entity profile data
- `POST /api/matters/update-status`  
  Updates `client_status` for board workflow progression

---

This README is intentionally feature-focused so product behavior and UI workflows are immediately clear.
