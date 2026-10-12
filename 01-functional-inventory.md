# 01 — Functional Inventory

## EasyMate ERP — Verified Modules and Capabilities

> This inventory was compiled by analyzing the actual codebase: routes, controllers, models, policies, database migrations, database seeders, and blade views. Each feature is classified according to the six audit verification categories.

---

## Status Legend

| Status | Verification Classification | Meaning |
|---|---|---|
| **[VC]** | **Verified in source code** | Feature logic, route, controller, model, and view confirmed in codebase |
| **[VUI]** | **Verified in the running UI** | Visually confirmed and interactively tested in a running UI *(0 currently verified)* |
| **[PI]** | **Partially implemented** | Feature exists in code but has stubs, partial logic, or incomplete views |
| **[CNV]** | **Found in code but not UI-verified** | Code exists, but layout, rendering, and interaction not verified in runtime |
| **[RDC]** | **Requires database or policy confirmation** | Logic depends on live database records (e.g., active `grades` table) or university policy |
| **[NF]** | **Not found** | Not present in the codebase (e.g., HRM routes, standalone student result route) |

*Note: All features marked as **Verified in source code [VC]** are also **Found in code but not UI-verified [CNV]** because no live browser session was executed during this audit.*

---

## Module 1: Administration

**Navigation:** Main Navigation → Administration  
**Route file:** `web_routes_administrator.php`  
**Namespace:** `Administrator`

### 1.1 Faculties
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List faculties | [VC] [CNV] | Administration → Faculties | Users with `view faculties` permission | Server-side datatable |
| Create faculty | [VC] [CNV] | Faculties → Create | Users with `create faculties` permission | Modal/form |
| Edit faculty | [VC] [CNV] | Faculties → Edit | Users with `edit faculties` permission | |
| Delete faculty | [VC] [CNV] | Faculties list | Users with `delete faculties` permission | |
| View faculty details | [VC] [CNV] | Faculties → Details | Users with `view faculties` permission | Shows associated departments |

### 1.2 Departments
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List departments | [VC] [CNV] | Administration → Departments | Users with `view departments` permission | |
| Create department | [VC] [CNV] | Departments → Create | Users with `create departments` permission | Linked to a faculty |
| Edit department | [VC] [CNV] | Departments → Edit | Users with `edit departments` permission | |
| Delete department | [VC] [CNV] | Departments list | Users with `delete departments` permission | |
| View department details | [VC] [CNV] | Departments → Details | Users with `view departments` permission | |

### 1.3 Programs
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List programs | [VC] [CNV] | Administration → Programs | Users with `view programs` permission | Filtered by user's assigned departments |
| Create program | [VC] [CNV] | Programs → Create | Users with `create programs` permission | Links to department and program level |
| Edit program | [VC] [CNV] | Programs → Edit | Users with `edit programs` permission | |
| View program details | [VC] [CNV] | Programs → Details | Users with `view programs` permission | Shows versions, groups, syllabi |
| Create program version | [VC] [CNV] | Programs → Versions → Create (`/programs/versions/create/{program_id}`) | Users with `create programs` permission | Sets `semesters_per_year`, `payment_installments`, `total_years` |

### 1.4 Waiver Categories
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List waiver categories | [VC] [CNV] | Administration → Waiver Categories | Users with `view waiver categories` permission | |
| Create waiver category | [VC] [CNV] | Waiver Categories → Create | Users with `create waiver categories` permission | Name, discount percentage |
| Edit waiver category | [VC] [CNV] | Waiver Categories → Edit | Users with `edit waiver categories` permission | |

### 1.5 Users
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List users | [VC] [CNV] | Administration → Users | Users with `view users` permission | Server-side datatable |
| Create user | [VC] [CNV] | Users → Create | Users with `create users` permission | Name, email, department, roles, faculties |
| Edit user | [VC] [CNV] | Users → Edit | Users with `edit users` permission | |
| View user details | [VC] [CNV] | Users → Details | Users with `view users` permission | |
| Change own password | [VC] [CNV] | Top Nav / Users → Change Password | Authenticated users | |
| Reset user password | [VC] [CNV] | Users list action (`users.reset-password`) | Users with `edit users` permission | Generates password, sets `password_reset_required = 1` |
| Notifications | [VC] [CNV] | Users → Notifications | Authenticated users | View system notifications |

### 1.6 Roles and Permissions
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List roles | [VC] [CNV] | Administration → Roles | Users with `view roles` permission | |
| Create role | [VC] [CNV] | Roles → Create | Users with `create roles` permission | |
| Edit role (assign permissions) | [VC] [CNV] | Roles → Edit | Users with `edit roles` permission | Assign permissions to role |
| View role details | [VC] [CNV] | Roles → Details | Users with `view roles` permission | |

**Verified Role IDs in source code:**
- Role ID 1 = Admin (`isAdmin()`) [VC]
- Role ID 7 = Head (`isHead()`) [VC]
- Role ID 11 = Controller (`isController()`) [VC]
- "Teacher" role name (checked in `examinerOptions()`) [VC]
- *Other roles (Accounts, Admission, Academic Staff) are permission-based; specific role IDs depend on active database seeding [RDC].*

### 1.7 Settings
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List settings | [VC] [CNV] | Administration → Settings | Users with `view settings` permission | |
| Create setting | [VC] [CNV] | Settings → Create | Users with `create settings` permission | |
| Edit setting | [VC] [CNV] | Settings → Edit | Users with `edit settings` permission | Global and program-specific values |
| Delete program-specific value | [VC] [CNV] | Settings → Details (`settings.program.destroy`) | Users with `edit settings` permission | |

**Verified Setting IDs from codebase:**
- 1: Current exam session
- 2: Registration start date
- 3: Registration end date
- 4: First installment last date
- 5: Second installment last date
- 6: First installment last date (new students)
- 7: Poor application start date
- 8: Poor application end date
- 9: Admission start date
- 10: Admission last date
- 11: Teacher assessment start date
- 12: Teacher assessment end date
- 14: Third installment last date

### 1.8 Activity Logs
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| View activity logs | [VC] [CNV] | Administration → Logs | Users with `view logs` permission | Spatie Activitylog datatable |
| View log details | [VC] [CNV] | Logs → Details | Users with `view logs` permission | Shows dirty attributes / before-after |

### 1.9 MS Teams Users
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List MS Teams users | [VC] [CNV] | Administration → MS Teams Users | Users with `view mscusers` permission | Linked to student Wi-Fi/Teams access |
| Create/Edit MS Teams user | [VC] [CNV] | MS Teams Users → Create/Edit | Users with `create/edit mscusers` permission | |

### 1.10 Smart Cards & Photo Capture
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List smart cards | [VC] [CNV] | Administration → Smart Cards (`smartcards.index`) | Users with `view smartcards` permission | ID card RFID tracking |
| Photo capture interface | [VC] [CNV] | Administration → Photo Capture (`photocapture.index`) | Users with `capturephoto` permission | Webcam/upload to MinIO cloud storage |

### 1.11 Batch Operations
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Applicant admit card SMS | [VC] [CNV] | Administration → Batch Operations → Applicant Admit Card SMS | Users with `batchop` permission | Bulk SMS dispatch |

---

## Module 2: Admission

**Navigation:** Main Navigation → Admission  
**Route file:** `web_routes_admission.php`  
**Namespace:** `Admission`

### 2.1 Admission Test Configuration
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List test configs | [VC] [CNV] | Admission → Admission Test Configs (`admissiontestconfigs.index`) | Users with `view admission test configs` permission | Per-program, per-session |
| Create test config | [VC] [CNV] | Test Configs → Create | Users with `create admission test configs` permission | Venue, date, time, admit dates, `form_online` flag |
| Edit test config | [VC] [CNV] | Test Configs → Edit | Users with `edit admission test configs` permission | |
| Copy test config | [VC] [CNV] | Test Configs → Copy (`admissiontestconfigs.copy`) | Users with `create admission test configs` permission | Duplicate to new session |

### 2.2 Applicants (Administrative Oversight)
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List applicants | [VC] [CNV] | Admission → Applicants (`applicants.index`) | Users with `view applicants` permission | Server-side datatable |
| View applicant details | [VC] [CNV] | Applicants → Details (`applicants.show`) | Users with `view applicants` permission | Profile, education, applications, payments |
| Edit applicant | [VC] [CNV] | Applicants → Edit | Users with `edit applicants` permission | |
| Download applicants | [VC] [CNV] | Applicants → Download | Users with `view applicants` permission | Excel export |
| Change program | [VC] [CNV] | Applicants → Change Program (`applicants.changeprogram`) | Users with `change program applicants` permission | |
| Transfer applicant | [VC] [CNV] | Applicants → Transfer (`applicants.transfer`) | Users with `create students` permission | Converts applicant to `Student` record |
| Check eligibility | [VC] [CNV] | Applicant Details → Check Eligibility | Users with `edit applicants` permission | Runs `EligibilityChecker` library |
| Update eligibility | [VC] [CNV] | Applicant Details → Update Eligibility | Users with `edit applicants` permission | |
| Manual eligibility | [VC] [CNV] | Applicant Details → Manual Eligibility | Users with `edit applicants` permission | Manual override |

### 2.3 Admission Merit Lists
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List merit lists | [VC] [CNV] | Admission → Merit Lists (`admissionmeritlists.index`) | Users with `view admission merit lists` permission | |
| Create merit list | [VC] [CNV] | Merit Lists → Create | Users with `create admission merit lists` permission | Ranks applicants based on test and board GPAs |

### 2.4 Applicant Portal (Public-Facing)
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Home / landing page | [VC] [CNV] | `/` or `/front/applicant/home` | Public | Lists active admission programs |
| View tuition fees | [VC] [CNV] | Home → Tuition Fees (`front.applicant.home.tutionfees`) | Public | Fee schedule breakdown |
| Register as applicant | [VC] [CNV] | Home → Register (`front.applicant.home.register`) | Public | Board data auto-fetched via Teletalk API |
| Login / Logout | [VC] [CNV] | `/front/applicant/home/login`, `/logout` | Registered applicants | Mobile number + password |
| Reset password | [VC] [CNV] | Home → Reset Password | Public | Password sent via SMS to registered mobile |
| Profile sections | [VC] [CNV] | Applicant Profile (`/front/applicant/profile/edit/{type}`) | Logged-in applicants | 5 sections: `pi`, `ci`, `eb`, `lg`, `at` |
| Add exam result | [VC] [CNV] | Profile → Add Exam Result | Logged-in applicants | Honours/Masters degree results |
| Confirm SSC/HSC | [VC] [CNV] | Profile → Confirm SSC/HSC | Logged-in applicants | Verify board data against physical papers |
| Submit application | [VC] [CNV] | Applications → Create (`front.applicant.applications.create`) | Logged-in applicants | Select program, pay fee |
| Download admit card | [VC] [CNV] | Applications → Admit Card (`front.applicant.applications.admit`) | Logged-in applicants | PDF download when test config is complete |

---

## Module 3: Academic

**Navigation:** Main Navigation → Academic  
**Route file:** `web_routes_academic.php`  
**Namespace:** `Academic`

### 3.1 Syllabuses
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List syllabuses | [VC] [CNV] | Academic → Syllabuses (`syllabuses.index`) | Users with `view syllabuses` permission | Filtered by authorized programs |
| Create syllabus | [VC] [CNV] | Syllabuses → Create | Users with `create syllabuses` permission | Binds program, intake session, total credits |
| Edit syllabus | [VC] [CNV] | Syllabuses → Edit | Users with `edit syllabuses` permission | |
| View syllabus details | [VC] [CNV] | Syllabuses → Details | Users with `view syllabuses` permission | Lists courses per semester |
| Add courses to syllabus | [VC] [CNV] | Syllabuses → Add Courses (`syllabuses.addcourses`) | Users with `edit syllabuses` permission | Map courses to semesters and elective groups |
| Copy syllabus | [VC] [CNV] | Syllabuses → Copy (`syllabuses.copy`) | Users with `create syllabuses` permission | Duplicates entire syllabus structure |
| Activate/Deactivate semester | [VC] [CNV] | Syllabus Details | Users with `activate syllabuses` permission | Locks/unlocks semester for course offering |

### 3.2 Courses
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List courses | [VC] [CNV] | Academic → Courses (`courses.index`) | Users with `view courses` permission | |
| Create course | [VC] [CNV] | Courses → Create | Users with `create courses` permission | Code, title, credits, marks, `theory` flag (1 or 0) |
| Edit course | [VC] [CNV] | Courses → Edit | Users with `edit courses` permission | |
| Update sort order | [VC] [CNV] | Course Details (`courses.updatesort`) | Users with `edit courses` permission | |

### 3.3 Students
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List students | [VC] [CNV] | Academic → Students (`students.index`) | Users with `view students` permission | Server-side datatable |
| Create student | [VC] [CNV] | Students → Create | Users with `create students` permission | Direct manual student creation |
| Edit student | [VC] [CNV] | Students → Edit | Users with `edit students` permission | Assign roll number, session, semester |
| View student details | [VC] [CNV] | Students → Details | Users with `view students` permission | Profile, registrations, results, ledger, comments |
| Student ID card | [VC] [CNV] | Academic → ID Cards (`students.card`) | Users with `card` permission | Batch print ID cards |
| Login profile | [VC] [CNV] | Student Details → Login Profile | Users with `edit students` permission | Creates/manages Student Portal credentials |
| Student comments & files | [VC] [CNV] | Student Details → Comments / Attachments | Users with `view students` permission | Audit notes and file uploads |

### 3.4 Registrations
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List registrations | [VC] [CNV] | Academic → Registrations → Registrations (`registrations.index`) | Users with `view registrations` permission | Server-side datatable |
| Create registration | [VC] [CNV] | Registrations → Create | Users with `create registrations` permission | Manual student course enrollment |
| Reg. Sections assignment | [VC] [CNV] | Academic → Registrations → Reg. Sections (`registrations.section`) | Users with `change section` permission | Assign section A/B/C to students |
| Redo registration | [VC] [CNV] | Registration Details (`registrations.redo`) | Users with `reregister registrations` permission | |
| Semester drop | [VC] [CNV] | Registration Details (`registrations.semesterdrop`) | Users with `semester drop` permission | Mark semester as dropped |
| Force promotion | [VC] [CNV] | Registration Details (`registrations.forcepromote`) | Users with `force promotion` permission | Override progression eligibility |

### 3.5 Auto Registrations
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List auto reg. logs | [VC] [CNV] | Academic → Registrations → Auto Registration (`autoregistrations.index`) | Users with `create auto registrations` permission | Batch run logs |
| Run auto registration | [VC] [CNV] | Auto Registration → Create (`autoregistrations.create`) | Users with `create auto registrations` permission | Batch enrolls cohort; enforces 50% earned credit rule |
| Retry failed student | [VC] [CNV] | Auto Registration Log → Retry (`autoregistrations.retry`) | Users with `retry auto registrations` permission | Re-evaluates individual student |

### 3.6 Assessments & Assessment Rules
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List assessments | [VC] [CNV] | Academic → Assessments → Assessment List (`assessments.index`) | Users with `view assessments` permission | Attendance, CT, Mid, Final |
| Assessment rules | [VC] [CNV] | Academic → Assessments → Assessment Rules (`assessmentrules.index`) | Users with `manage assessment rules` permission | Weight percentages by course type |

### 3.7 Transcripts & Certificates
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Transcripts index | [VC] [CNV] | Academic → Transcripts (`transcripts.index`) | Users with `view transcripts` permission | |
| Partial transcript | [VC] [CNV] | Transcripts → Download Partial (`transcripts.download.partial`) | Users with `download transcripts` permission | For continuing students |
| Final transcript | [VC] [CNV] | Transcripts → Download Final (`transcripts.download.final`) | Users with `download transcripts` permission | For completed graduates |
| Provisional certificates | [VC] [CNV] | Academic → Certificates (`certificates.index`) | Users with `certificates` permission | Provisional degree certificates |
| Other certificates | [VC] [CNV] | Academic → Other Certificates (`othercertificates.index`) | Users with `testimonials` permission | Testimonials, Migration, MOI, Appeared certificates |

### 3.8 Student Status & Applications
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Deactivated students | [VC] [CNV] | Academic → Deactivated Students (`disabledstudents.index`) | Users with `view disabledstudents` permission | Temporary leaves / withdrawal |
| Suspended students | [VC] [CNV] | Academic → Suspended Students (`suspendedstudents.index`) | Authorized users | Disciplinary suspensions |
| Expelled students | [VC] [CNV] | Academic → Expelled Students (`expelledstudents.index`) | Users with `view expelledstudents` permission | Disciplinary expulsions |
| Student migrations | [VC] [CNV] | Academic → Migration (`studentmigrations.index`) | Users with `view studentmigrations` permission | Program/department changes |
| Exempted courses | [VC] [CNV] | Academic → Exempted Course (`exemptedcourses.index`) | Users with `view exemptedcourses` permission | External credit transfers |
| Document applications | [VC] [CNV] | Academic → Student Applications → Document Applications (`documentapplications.index`) | Users with `view documentapplications` permission | Multi-department clearance workflow |

---

## Module 4: Accounts

**Navigation:** Main Navigation → Accounts  
**Route file:** `web_routes_accounts.php`  
**Namespace:** `Accounts`

### 4.1 Fee Settings
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List fee settings | [VC] [CNV] | Accounts → Fee Settings (`feesettings.index`) | Users with `view fee settings` permission | Matrix by Account Head, Program, Session |
| Create fee setting | [VC] [CNV] | Fee Settings → Create | Users with `create fee settings` permission | Tuition per credit; fixed semester fees |
| Copy fee settings | [VC] [CNV] | Fee Settings → Copy (`feesettings.copy`) | Users with `create fee settings` permission | Duplicate schedule to new session |

### 4.2 Invoices
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List invoices | [VC] [CNV] | Accounts → Invoices (`invoices.index`) | Users with `view invoices` permission | Server-side datatable |
| View invoice details | [VC] [CNV] | Invoices → Details (`invoices.details`) | Users with `view invoices` permission | Line items, installments, payments |
| Payment posting | [VC] [CNV] | Invoices → Posting (`invoices.posting`) | Users with `approve invoices` permission | Post cash or bank payment; enforces installment sequence |
| Late fee calculation | [VC] [CNV] | Invoices → Late Fee (`invoices.latefee`) | Users with `edit invoices` permission | Computes late fee excluding holidays |
| Reverse invoice | [VC] [CNV] | Invoice Details (`invoices.reverse`) | Users with `reverse invoices` permission | Reverses paid invoice |
| Miscellaneous invoices | [VC] [CNV] | Invoices → Miscellaneous (`invoices.miscellaneous`) | Users with `miscellaneous invoices` permission | Non-tuition fees |
| Printable Bank Slip | [VC] [CNV] | `/printinvoices/index/{id}` (`printinvoices.index`) | Public with invoice ID | 3-part bank voucher |

### 4.3 Ledgers & Waivers
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Student ledgers | [VC] [CNV] | Accounts → Ledgers (`ledgers.index`) | Users with `view ledgers` permission | Debit (D) and Credit (C) double-entry ledger |
| Waivers management | [VC] [CNV] | Accounts → Waivers (`waivers.index`) | Users with `view waivers` permission | Applies scholarship discount strictly to tuition |
| Poor-Merit. Approvals | [VC] [CNV] | Accounts → Poor-Merit. Approvals (`waivers.poorapproval`) | Users with `poor merit approve` permission | Multi-step financial aid committee evaluation |
| Waiver expiries | [VC] [CNV] | Accounts → Waiver Expiries (`waiverexpiries.index`) | Users with `view waiverexpiries` permission | Tracks sibling waiver eligibility |

---

## Module 5: Examination

**Navigation:** Main Navigation → Exam  
**Route file:** `web_routes_exam.php`  
**Namespace:** `Exam`

### 5.1 Examiners & Marks Entry
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List examiners | [VC] [CNV] | Exam → Examiners (`examiners.index`) | Users with `view examiners` permission | Course instructor mapping |
| Marks entry sheet | [VC] [CNV] | Exam → Marks (`marks.index`) | Assigned examiner OR `create marks` | Attendance, CT, Mid, Final; statuses: `p`,`a`,`e` |
| Retake/Improvement marks | [VC] [CNV] | Exam → Retake/Improvement Marks (`marks.retests`) | Users with `view retest marks` permission | Marks for retake/improvement candidates |
| Submit marks (Lock) | [VC] [CNV] | Marks → Submit (`marks.submit`) | Assigned examiner | Creates `Submission` record; freezes instructor editing |
| Approve marks | [VC] [CNV] | Marks → Approve (`marks.approve`) | Users with `approve marks` permission | Creates `Approval` and `CourseResult` records |
| Administrative undo | [VC] [CNV] | Marks → Undo (`marks.undo`) | Admin only (`isAdmin()`) | Reverses approval/submission; unpublishes result |
| Mark edit log | [VC] [CNV] | Exam → Mark Edit Log (`marks.editlogs`) | Users with `edit published marks` permission | Post-publication correction audit trail |

### 5.2 Results & Publications
| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| List results | [VC] [CNV] | Exam → Results (`results.index`) | Users with `view results` permission | Published semester results |
| Create/Publish result | [VC] [CNV] | Results → Create (`results.create`) | Users with `create results` permission | Requires 100% course approval; calculates SGPA & rank |
| Tabulation sheet PDF | [VC] [CNV] | Results → PDF (`results.pdf`) | Users with `view results` permission | Official gazette tabulation |
| Attendance sheets | [VC] [CNV] | Exam → Attendance Sheet (`attendance-sheets.index`) | Users with `view registrations` permission | Exam hall attendance roll |
| Admit cards | [VC] [CNV] | Exam → Admit Card (`admit.index`) | Authorized exam staff | Bulk exam admit card printing |
| Feedback configuration | [VC] [CNV] | Exam → Feedback Config. (`feedback.index`) | Users with `view feedback` permission | Evaluation questionnaires and reports |

---

## Module 6: Class Schedule

**Navigation:** Main Navigation → Class Schedule  
**Route file:** `web_routes_schedule.php`  
**Namespace:** `Schedule`

| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Campus rooms | [VC] [CNV] | Class Schedule → Rooms (`rooms.index`) | Users with `manage` schedule | Rooms, buildings, seating capacities |
| Time slots | [VC] [CNV] | Class Schedule → Slots (`slots.index`) | Users with `manage` schedule | Lecture time periods (Sun–Thu) |
| Course offerings | [VC] [CNV] | Class Schedule → Course Offer (`courseoffers.index`) | Users with `view` preferences | Section configurations and teacher mappings |
| Schedule merges | [VC] [CNV] | Class Schedule → Schedule Merges (`courseoffers.schedule-merges`) | Users with `manage` schedule | Merging sections for joint scheduling |
| Schedule builder | [VC] [CNV] | Class Schedule → Schedule Create (`schedules.create`) | Users with `manage` schedule | Grid placement of courses, rooms, teachers |
| Conflicts detection | [VC] [CNV] | Class Schedule → Conflicts (`schedule.conflicts`) | Users with `manage` schedule | Flags teacher or room double-bookings |
| Schedule viewer | [VC] [CNV] | Class Schedule → Schedule Show (`schedules.index`) | Users with `view` schedule | Draft routine viewer |
| Live schedule sync | [VC] [CNV] | Class Schedule → Live Schedule (`schedules-live.index`) | Users with `viewLive` schedule | Syncs draft to live portal; generates PDF |
| Book rooms | [VC] [CNV] | Class Schedule → Book Rooms (`room_booking.index`) | Users with `viewAny` room booking | Ad-hoc room reservations |

---

## Module 7: Reports

**Navigation:** Main Navigation → Reports  
**Route file:** `web_routes_report.php`  
**Namespace:** `Report`

| Feature | Status | UI Location | Authorized Roles | Notes |
|---------|--------|-------------|-------------------|-------|
| Registration report | [VC] [CNV] | Reports → Registration → Registration Report (`report.registration.index`) | Users with report permissions | By program and session |
| Dropout report | [VC] [CNV] | Reports → Registration → Dropout Report (`report.registration.dropout`) | Authorized report users | Students missing registrations |
| Individual reg. report | [VC] [CNV] | Reports → Registration → Individual Reg. Report (`report.registration.individual`) | Authorized report users | |
| Non-collegiate report | [VC] [CNV] | Reports → Registration → Non Collegiate Report (`report.registration.noncollegiate`) | Authorized report users | Attendance-based penalty lists |
| Section-wise report | [VC] [CNV] | Reports → Registration → Section Wise Students (`report.registration.sections`) | Authorized report users | Student rosters per section |
| Accounts report | [VC] [CNV] | Reports → Accounts Report (`report.accounts.index`) | Authorized report users | Receivables, received, pending, bank-wise |
| Student reports | [VC] [CNV] | Reports → Student Report (`report.student.index`) | Authorized report users | Enrollment, completed, studying, cancelled, batch |
| Admission report | [VC] [CNV] | Reports → Admission Report (`report.admission.index`) | Authorized report users | Forms sold, multi-program, historical funnels |
| Result withheld report | [VC] [CNV] | Reports → Exam/Results → Result Withheld Report (`report.withheld.index`) | Authorized report users | Withheld student results |
| Program final notification| [VC] [CNV] | Reports → Exam/Results → Program Final Notification (`report.result.programfinal`)| Authorized report users | Official graduating cohort lists |
| CGPA report | [VC] [CNV] | Reports → Exam/Results → CGPA Report (`report.result.cgpa`) | Authorized report users | Cohort CGPA distributions |
| Waiver report | [VC] [CNV] | Reports → Waiver Report (`report.waiver.index`) | Authorized report users | Financial aid summaries |
| Teacher assessment report | [VC] [CNV] | Reports → Teacher Assessment Report (`report.ta.index`) | Authorized report users | Aggregate and individual teacher ratings |
| Examiner report | [VC] [CNV] | Reports → Examiner Report (`report.examiner.index`) | Authorized report users | Workload by examiner |
| UGC report | [VC] [CNV] | Reports → UGC (`report.ugc.index`) | Admin users | University Grants Commission annual statistics |
| Syllabus report | [VC] [CNV] | Reports → Syllabus Report (`report.syllabus.index`) | Admin users | Curriculum structures and offerings |

---

## Module 8: Student Portal

**Navigation:** `/front/student/`  
**Route file:** `web_routes_front.php`  
**Namespace:** `Front\Student`

| Feature | Status | UI Location / URL Path | Authorized Users | Notes |
|---------|--------|------------------------|------------------|-------|
| Student login | [VC] [CNV] | `/front/student/login` (`front.student.auth.login`) | Enrolled students | Roll Number + Password |
| Student logout | [VC] [CNV] | `/front/student/logout` (`front.student.auth.logout`) | Logged-in students | |
| Forgot / Change password| [VC] [CNV] | `/front/student/forgotpassword`, `/changepassword` | Enrolled students | SMS OTP password reset |
| Profile (Information) | [VC] [CNV] | Main Nav → Profile (`/front/student/profile?type=i`) | Logged-in students | Personal, academic, advisor info |
| Profile (Registrations)| [VC] [CNV] | Profile → Registrations tab (`?type=rg`) | Logged-in students | Historical semester registrations |
| Profile (Results) | [VC] [CNV] | Profile → Results tab (`?type=r`) | Logged-in students | Published grades, LG, GP, SGPA (No standalone route) |
| Profile (Payments) | [VC] [CNV] | Profile → Payments tab (`?type=p`) | Logged-in students | Invoices list and bank slip download |
| Profile (Admit Card) | [VC] [CNV] | Profile → Admit Card tab (`?type=a`) | Logged-in students | Download Mid-Term and Final Admit Cards |
| Class routine | [VC] [CNV] | Main Nav → Class Routine (`/front/student/routine`) | Logged-in students | Personalized routine grid and PDF download |
| Retake/Improvement | [VC] [CNV] | Main Nav → Retake/Imporvement (`/front/student/profile/registration`)| Logged-in students | Self-registration during open window |
| Teacher assessment | [VC] [CNV] | Main Nav → Teacher Assessment (`/front/student/teacherassessments`) | Logged-in students | Rate course instructors during TA window |
| Apply for Waiver | [VC] [CNV] | Main Nav → Apply for Poor-Merit. Waiver (`poorapplications.create`) | Logged-in students | Financial aid application |
| Apply for Documents | [VC] [CNV] | Main Nav → Apply for Documents (`documentapplications.index`) | Logged-in students | Request transcripts and certificates |
| Give Course Feedback | [VC] [CNV] | Main Nav → Give Course Feedback (`feedback.create`) | Logged-in students | Course curriculum evaluation |
| Academic Ordinance | [VC] [CNV] | Main Nav → Academic Ordinance (`11th Academic Ordinance.pdf`) | Logged-in students | Direct link to official university ordinance PDF |

---

## Module 9: API & Integrations

**Route file:** `api.php`  
**Namespace:** `Api`

| Feature | Status | Notes |
|---------|--------|-------|
| Invoice status & posting API | [VC] [CNV] | Bank and online payment gateway callbacks |
| VU internal payment API | [VC] [CNV] | Internal digital payment integration |
| Student info API | [VC] [CNV] | External data exchange |
| Certificate verification API | [VC] [CNV] | Token-based certificate authentication |
| Kiosk API | [VC] [CNV] | On-campus self-service kiosk (profile, results, payments) |
| Thesis management API | [VC] [CNV] | Integrates course registrations with thesis portal |
| Smart card API | [VC] [CNV] | RFID card encoding and issuance |
| Board data API / Scraper | [VC] [CNV] | SSC/HSC verification via Teletalk gateway |
| Public student verification | [VC] [CNV] | `/front/services/studentverify/certificate/{token}` |

---

## Outstanding Questions & Verification Dependencies

1. **Active Database Role Identifiers [RDC]:** Beyond Admin (ID 1), Head (ID 7), Controller (ID 11), and Teacher (name `"Teacher"`), staff role IDs (Accounts Officer, Admission Officer, Academic Office Staff) depend on dynamic database records.
2. **Grading Scale Authority & Database Records [RDC]:** `Grade::calculate()` dynamically queries all rows from the `grades` table. While `GradesTableSeeder.php` seeds a standard 10-tier scale (A+ 4.00 down to F 0.00), exact active grade boundaries, minimum passing marks, and honors criteria must be verified against the live `grades` database table and Varendra University's *11th Academic Ordinance*.
3. **Payment Gateway Provider Settings [RDC]:** API endpoints for payment posting are verified in code, but live merchant gateway credentials (bKash, Nagad, bank SSL) are environment-specific (`.env`).
4. **SMS & Email Notification Delivery [RDC]:** Notification classes (`TuitionFeePaid`, `AdminPasswordReset`) exist in code; physical SMS delivery depends on external SMS gateway credentials.
