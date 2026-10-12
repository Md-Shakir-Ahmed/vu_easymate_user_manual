# EasyMate ERP — User Manual

## Varendra University

**Version:** 1.0  
**Last Updated:** October 2026  
**System:** EasyMate ERP (Laravel-based Academic ERP)

---

## About This Manual

This manual documents the operational use of **EasyMate ERP** as implemented at Varendra University. It covers the student lifecycle — from admission application through graduation — and provides instructions across user roles based on rigorous codebase verification.

> **Scope Boundary:** This manual covers functionality implemented within EasyMate ERP. All human resource management operations (employee recruitment, onboarding, biometric attendance, staff leave, payroll disbursement, performance appraisals, and service books) are managed through a **separate HRM system** and are strictly outside EasyMate's scope.

---

## How to Navigate This Manual

| Document | Contents | Verification Basis |
|---|---|---|
| [01 — Functional Inventory](01-functional-inventory.md) | Catalog of modules, submodules, and discrete capabilities | Source code routes, controllers, models |
| [02 — Student Lifecycle](02-student-lifecycle.md) | End-to-end journey from admission application to graduation | Cross-module business logic tracing |
| [03 — Role-Based Guides](03-role-based-guides.md) | Instructions organized by user role with verified menu paths | Blade layouts and role policies |
| [04 — Cross-Module Workflows](04-cross-module-workflows.md) | Multi-department data handoffs (Admission, Accounts, Academic, Exam) | Service classes and helper libraries |
| [05 — Glossary and FAQ](05-glossary-and-faq.md) | Terminology, grading models, billing rules, and operational FAQ | Code formulas, seeders, and FAQ audits |
| [06 — Screenshots Checklist](06-screenshots-checklist.md) | 90-screen inventory and visual capture tracking checklist | Route/view mapping (0/90 screenshots captured) |
| [Verification Report](verification-report.md) | Full technical audit findings, verification status, and limitations | Code, migration, and seeder analysis |

---

## Intended Audience

- **Applicants** — Prospective students applying for academic programs
- **Students** — Enrolled students accessing academic records, routines, fees, and evaluations
- **Teachers / Faculty Members** — Instructors entering continuous and exam marks and viewing schedules
- **Department Heads** — Academic heads overseeing departmental programs and student progress
- **Admission Officers** — Staff managing applicants, board verifications, tests, and enrollment transfers
- **Academic Office / Registrar Staff** — Staff handling syllabuses, registrations, status updates, and transcripts
- **Accounts Officers** — Staff managing fee schedules, invoices, payments, waivers, and ledgers
- **Examination Controller & Staff** — Officials overseeing marks approval, result compilation, and gazettes
- **System Administrators** — Administrators managing system settings, users, and roles

---

## System Overview

EasyMate ERP comprises nine major modules:

1. **Administration** — Faculties, Departments, Programs, Program Versions, Waiver Categories, Users, Roles, Settings, Activity Logs, Smart Cards, MS Teams Users, Photo Capture
2. **Admission** — Admission Test Configs, Applicants datatable, Board verification flags, Merit Lists, Applicant-to-Student Transfer
3. **Academic** — Students directory, Syllabuses, Course catalog, Registrations, Auto-Registration engine, Deactivated/Suspended/Expelled records, Transcripts, Certificates, Document Applications
4. **Accounts** — Fee Settings, Invoicing engine (Tuition, Retake, Improvement), Payment posting, Waivers & Scholarships, Poor-Merit approvals, Student Ledgers
5. **Examination** — Examiners, Marks entry, Submission locking, Controller approvals, Semester Result publication, Official Tabulation sheets
6. **Class Schedule** — Campus Rooms, Time Slots, Course Offerings, Routine builder, Conflicts detection, Live Schedules sync, Room Bookings
7. **Reports** — Registration, Accounts, Student demographics, Admission analytics, Waivers, Examination results, and UGC annual compliance exports
8. **Student Portal** — Roll-based student authentication, Profile, Class routine, Invoices, Online registration, Teacher assessment, Course feedback
9. **Applicant Portal** — Public applicant registration, Education board data API sync, multi-step profile, application submission, admit card download

---

## Verification Legend & Audit Classifications

Every feature, screen, and workflow in this documentation suite is evaluated against the following classification criteria:

| Classification | Meaning & Criteria |
|---|---|
| **Verified in source code** | Logic, route, controller, model, and blade view confirmed directly in codebase |
| **Verified in the running UI** | Visually confirmed and interactively tested in an active running application instance *(0 screens currently verified; pending live capture)* |
| **Partially implemented** | Feature exists in code but contains stubs, partial logic, or incomplete interface elements |
| **Found in code but not UI-verified** | Endpoints and templates exist in source code, but runtime layout, styling, and client-side behavior have not been visually verified |
| **Requires database or university policy confirmation** | Behavior depends on dynamic runtime database rows (e.g., active `grades` table, specific role IDs beyond 1/7/11, fee heads) or university academic ordinances |
| **Not found** | Claimed feature or route does not exist in the codebase |
