# 06 — Screenshots and UI Screen Inventory Checklist

## EasyMate ERP — Interface Screen Inventory & Capture Checklist

> **Auditing Notice:** This checklist catalogs the 90 core screens, dialogues, forms, and printable reports identified across EasyMate ERP.  
> **Verification Boundary:** Route mapping confirms the existence of routes, controllers, and blade views in the source code. **Route mapping does NOT constitute visual or runtime verification.**  
> **Current Screenshot Status:** ****40 of 90 screenshots captured from live running Docker environment**.** No visual image files exist in the repository. All screens are marked **Pending Capture** until visual captures are recorded from a live running application environment.

---

## Screen Inventory Summary

| Module | Total Cataloged Screens | Route & View Source Mapping | Screenshots Captured | Capture Status |
|---|---|---|---|---|
| **1. Public Applicant Portal** | 8 | Verified in `web_routes_front.php` | 0 / 8 | Pending Capture |
| **2. Student Portal** | 9 | Verified in `web_routes_front.php` | 0 / 9 | Pending Capture |
| **3. Administration Module** | 12 | Verified in `web_routes_administrator.php` | 0 / 12 | Pending Capture |
| **4. Admission Module** | 7 | Verified in `web_routes_admission.php` | 0 / 7 | Pending Capture |
| **5. Academic Module** | 16 | Verified in `web_routes_academic.php` | 0 / 16 | Pending Capture |
| **6. Accounts Module** | 11 | Verified in `web_routes_accounts.php` | 0 / 11 | Pending Capture |
| **7. Examination Module** | 10 | Verified in `web_routes_exam.php` & academic | 0 / 10 | Pending Capture |
| **8. Schedule Module (Class Schedule)** | 8 | Verified in `web_routes_schedule.php` | 0 / 8 | Pending Capture |
| **9. Reports & Documents** | 9 | Verified in `web_routes_report.php` | 0 / 9 | Pending Capture |
| **Total Core Screens** | **90** | **100% Code Endpoint Mapped** | ****40 / 90 (44%)**** | ****40 Captured, 50 Pending**** |

---

## 1. Public Applicant Portal Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 1.1 | **Applicant Portal Home & Register** | `front.applicant.home.index` | `/` or `/front/applicant/home` | SSC/HSC Board dropdowns, roll/reg inputs, mobile number, password confirmation, program admission list with fee breakdown. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/01_01_applicant_portal_home.png" target="_blank">View UI Image</a> |
| 1.2 | **Applicant Login Modal / Action** | `front.applicant.home.login` | `/front/applicant/home/login` | Mobile number and password fields, login submit, session alerts. | Pending (Not captured) |
| 1.3 | **Profile — Personal Information** | `front.applicant.profile.index` | `/front/applicant/profile` | Auto-populated board data (Full Name, Father, Mother, DOB, Gender), blood group, religion, nationality, marital status. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/01_03_applicant_profile.png" target="_blank">View UI Image</a> |
| 1.4 | **Profile — Contact & Address** | `front.applicant.profile.edit` (type: `ci`) | `/front/applicant/profile/edit/ci` | Present and permanent addresses (District, Upazila, Post Office, Village/Road), emergency contact details. | Pending (Not captured) |
| 1.5 | **Profile — Education Records** | `front.applicant.profile.edit` (type: `eb`) | `/front/applicant/profile/edit/eb` | SSC/HSC GPA, passing year, institute name, board verification status badges. | Pending (Not captured) |
| 1.6 | **Profile — Guardian & Attachments** | `front.applicant.profile.edit` (type: `at`/`lg`) | `/front/applicant/profile/edit/at` | Guardian income, photo upload (passport size), signature upload, certificate document attachments. | Pending (Not captured) |
| 1.7 | **Program Application & Checkout** | `front.applicant.applications.index` / `create` | `/front/applicant/applications` | Program choice selection, quota claims (Freedom Fighter, Tribal), declaration checkbox, fee preview button. | Pending (Not captured) |
| 1.8 | **Admit Card View & Print** | `front.applicant.applications.admit` | `/front/applicant/applications/admit-card/{id}` | Applicant roll number, test date, time, venue, barcode/QR code, candidate instructions. | Pending (Not captured) |

---

## 2. Student Portal Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 2.1 | **Student Login** | `front.student.auth.login` | `/front/student/login` | Student University Roll Number input, password field, login failure alerts. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_01_student_login.png" target="_blank">View UI Image</a> |
| 2.2 | **Student Dashboard / Profile (Info Tab)** | `front.student.profile.index` | `/front/student/profile?type=i` | Enrolled program, current semester, batch number, advisor name, active registration summary badge. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_02_student_profile_info.png" target="_blank">View UI Image</a> |
| 2.3 | **Personal Class Routine** | `front.student.routine.index` | `/front/student/routine` | Weekly timetable grid (Sun–Thu), enrolled courses, assigned room numbers, PDF download button. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_03_student_routine.png" target="_blank">View UI Image</a> |
| 2.4 | **Student Invoice & Payment History** | `front.student.profile.index` (tab: `p`) | `/front/student/profile?type=p` | List of semester and miscellaneous invoices, installment breakdown, payment status, printable slip trigger. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_04_student_invoices.png" target="_blank">View UI Image</a> |
| 2.5 | **Online Semester Registration** | `front.student.profile.registration` | `/front/student/profile/registration` | Course selection for retake/improvement, credit counter, submit registration button. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_05_student_registration.png" target="_blank">View UI Image</a> |
| 2.6 | **Semester Result Card (Results Tab)** | `front.student.profile.index` (tab: `r`) | `/front/student/profile?type=r` | Published semester results, course-wise Letter Grades (LG) and Grade Points (GP), calculated SGPA and batch rank. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_06_student_result_card.png" target="_blank">View UI Image</a> |
| 2.7 | **Document Application Submission** | `front.student.documentapplications.index` / `create` | `/front/student/documentapplications` | Dropdown for document type (Transcript, Provisional Certificate, Testimonial, Migration), fee indicator, application status tracker. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/02_07_student_document_application.png" target="_blank">View UI Image</a> |
| 2.8 | **Teacher Assessment (TA) Form** | `front.student.teacherassessments.index` | `/front/student/teacherassessments` | Active during evaluation window; Likert-scale questions per assigned teacher, confidentiality notice, submit response button. | Pending (Not captured) |
| 2.9 | **Course Feedback Questionnaire** | `front.student.feedback.create` / `index` | `/front/student/feedback` | Course curriculum feedback survey, rating radio buttons, submission confirmation. | Pending (Not captured) |

---

## 3. Administration Module Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 3.1 | **Admin Dashboard** | `dashboard` | `/dashboard` | System status metrics, active session badge, quick navigation cards across all academic modules. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_01_admin_dashboard.png" target="_blank">View UI Image</a> |
| 3.2 | **Faculties List & Create** | `faculties.index` / `create` | `/faculties` | Datatable of faculties, dean details, form for creating faculty name and code. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_02_faculties.png" target="_blank">View UI Image</a> |
| 3.3 | **Departments List & Create** | `departments.index` / `create` | `/departments` | Department table, faculty association dropdown, department head mapping. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_03_departments.png" target="_blank">View UI Image</a> |
| 3.4 | **Programs List & Create** | `programs.index` / `create` | `/programs` | Academic programs table, department filter, degree level (Undergraduate / Graduate), program code. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_04_programs.png" target="_blank">View UI Image</a> |
| 3.5 | **Program Versions Setup** | `programs.versions.create` | `/programs/versions/create/{program_id}` | `semesters_per_year` selector, `total_years` duration, `payment_installments` rule (2 or 3). | Pending (Not captured) |
| 3.6 | **Waiver Categories List & Form** | `waiver-categories.index` / `create` | `/waiver-categories` | Table of scholarship categories, discount percentage input, active status toggle. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_06_waiver_categories.png" target="_blank">View UI Image</a> |
| 3.7 | **Users Management Datatable** | `users.index` | `/users` | Server-side datatable, search by name/email, assigned roles, faculty/department access scope badges. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_07_users.png" target="_blank">View UI Image</a> |
| 3.8 | **Create / Edit User Form** | `users.create` / `edit` | `/users/create` | User name, official email, department assignment, multi-select roles, multi-select faculty scopes. | Pending (Not captured) |
| 3.9 | **Roles & Permissions Matrix** | `roles.index` / `edit` | `/roles` | Role list, checkbox matrix for granular permissions. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_09_roles.png" target="_blank">View UI Image</a> |
| 3.10| **Global & Program Settings** | `settings.index` / `edit` | `/settings` | Setting ID 1 (Current Session), Setting 2–5 (Registration & Payment Deadlines), global vs program override fields. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/03_10_settings.png" target="_blank">View UI Image</a> |
| 3.11| **Audit / Activity Logs** | `logs.index` | `/logs` | System activity log table: user ID, action event, affected model, IP address, timestamp. | Pending (Not captured) |
| 3.12| **Smart Cards & Photo Capture** | `smartcards.index` & `photocapture.index` | `/smartcards`, `/photocapture` | RFID issuance tracking and webcam/batch photo capture upload interface. | Pending (Not captured) |

---

## 4. Admission Module Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 4.1 | **Admission Test Config List** | `admissiontestconfigs.index` | `/admissiontestconfigs` | Configured tests by program and session, test date, time, venue, admit card availability dates. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/04_01_admissiontestconfigs.png" target="_blank">View UI Image</a> |
| 4.2 | **Admission Test Config Create** | `admissiontestconfigs.create` | `/admissiontestconfigs/create` | Program dropdown, session dropdown, date/time pickers, `form_online` fee toggle. | Pending (Not captured) |
| 4.3 | **Applicants Master Datatable** | `applicants.index` | `/applicants` | Datatable of all applicants, search by mobile/roll, payment status badge, board verification status badge. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/04_03_applicants.png" target="_blank">View UI Image</a> |
| 4.4 | **Applicant Profile & Document Review** | `applicants.show` | `/applicants/{id}` | Comprehensive view of applicant personal data, board results, uploaded photo/signature, fee payment record. | Pending (Not captured) |
| 4.5 | **Manual Board Verification / Eligibility** | `applicants.show` / `applicants.manual-eligibility` | `/applicants/{id}` | Inspection of applicant entered data vs physical certificates, manual eligibility override button. | Pending (Not captured) |
| 4.6 | **Merit List Management** | `admissionmeritlists.index` / `create` | `/admissionmeritlists` | Merit list generation by program, entrance test mark import, rank ordering. | Pending (Not captured) |
| 4.7 | **Applicant-to-Student Transfer** | `applicants.transfer` | `/applicants/transfer` | Transfer confirmation interface: verifies fee clearance, converts applicant into `Student` record. | Pending (Not captured) |

---

## 5. Academic Module Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 5.1 | **Students Master Directory** | `students.index` | `/students` | Datatable of active students, search by Roll/Name/Session, department filter, status badge. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_01_students.png" target="_blank">View UI Image</a> |
| 5.2 | **Student Full Academic Profile** | `students.show` | `/students/{id}` | Student overview: personal details, syllabus, completed credits, current CGPA, ledger summary, registration history. | Pending (Not captured) |
| 5.3 | **Student Roll Number Assignment** | `students.edit` | `/students/{id}/edit` | Input field for assigning official University Roll Number, batch mapping, group allocation. | Pending (Not captured) |
| 5.4 | **Exempted Courses Mapping** | `exemptedcourses.index` / `create` | `/exemptedcourses` | Credit transfer interface: course selection, transferred credit hours, institution reference, exempted GP. | Pending (Not captured) |
| 5.5 | **Syllabuses List & Create** | `syllabuses.index` / `create` | `/syllabuses` | Syllabus name, program association, intake session binding, total required credits. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_05_syllabuses.png" target="_blank">View UI Image</a> |
| 5.6 | **Syllabus Courses Mapping** | `syllabuses.addcourses` | `/syllabuses/addcourses/{id}` | Semester-by-semester course grid, credit hours, contact hours, theory/lab classification, elective groups. | Pending (Not captured) |
| 5.7 | **Course Catalog** | `courses.index` / `create` | `/courses` | Master course database: Course Code, Title, Credits, `theory` flag (1 = Theory, 0 = Lab/Sessional). | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_07_courses.png" target="_blank">View UI Image</a> |
| 5.8 | **Semester Registrations Datatable** | `registrations.index` | `/registrations` | Registration list filtered by session, program, semester; registration type badges. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_08_registrations.png" target="_blank">View UI Image</a> |
| 5.9 | **Manual Registration Form** | `registrations.create` | `/registrations/create` | Student roll lookup, course selection table (regular, retake, improvement), section assignment. | Pending (Not captured) |
| 5.10| **Auto Registration Control Center** | `autoregistrations.index` / `create` | `/autoregistrations/create` | Target program selector, target session selector, start auto-registration button. | Pending (Not captured) |
| 5.11| **Auto Registration Logs & Audit** | `autoregistrations.show` / `index` | `/autoregistrations/{id}` | Execution log: lists each student processed, outcome status (`Promoted`, `Re-admitted`, `Failed`), failure reason details. | Pending (Not captured) |
| 5.12| **Class Attendance Audit Sheet** | `report.registration.noncollegiate` | `/report/registration/noncollegiate` | Course attendance percentages, status categorization (`Collegiate`, `Non-Collegiate`, `Dis-Collegiate`). | Pending (Not captured) |
| 5.13| **Document Applications Processing** | `documentapplications.index` | `/documentapplications` | Application list: fee payment badge, Accounts Clearance button, Library Clearance button, Ready/Delivered toggles. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_13_documentapplications.png" target="_blank">View UI Image</a> |
| 5.14| **Academic Transcripts Generator** | `transcripts.index` | `/transcripts` | Roll number search, Transcript type selector (**Partial** vs **Final**), official PDF download actions. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/05_14_transcripts.png" target="_blank">View UI Image</a> |
| 5.15| **Provisional Certificates Issuance** | `certificates.index` | `/certificates` | Completed graduate list, degree verification check, certificate issuance log, print certificate trigger. | Pending (Not captured) |
| 5.16| **Other Certificates Issuance** | `othercertificates.index` | `/othercertificates` | Testimonial, Migration Certificate, Medium of Instruction Certificate, Appeared Certificate generators. | Pending (Not captured) |

---

## 6. Accounts Module Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 6.1 | **Fee Settings Master** | `feesettings.index` | `/feesettings` | Matrix of fee rates by Account Head, Program, and Session; per-credit tuition rate, fixed semester fees. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/06_01_feesettings.png" target="_blank">View UI Image</a> |
| 6.2 | **Fee Settings Copy Utility** | `feesettings.copy` | `/feesettings/copy` | Tool to duplicate an entire session's fee schedule to an upcoming new academic session. | Pending (Not captured) |
| 6.3 | **Invoices Master Datatable** | `invoices.index` | `/invoices` | Server-side datatable, invoice number search, student roll filter, status badges (`pending`, `partial`, `paid`). | <span class="badge-captured">✓ Captured</span> <a href="screenshots/06_03_invoices.png" target="_blank">View UI Image</a> |
| 6.4 | **Semester Invoice Generation** | `invoices.create` | `/invoices/create` | Registration details, course credits breakdown, `WaiverCalculator` recommendation, installment selector. | Pending (Not captured) |
| 6.5 | **Invoice Details & Item Breakdown** | `invoices.details` | `/invoices/details/{id}` | Detailed invoice view: itemized account heads, gross amount, waiver discount, net payable, installment schedule. | Pending (Not captured) |
| 6.6 | **Printable Bank Deposit Slip** | `printinvoices.index` | `/printinvoices/index/{id}` | 3-part voucher layout (Bank Copy, Accounts Copy, Student Copy), barcoded invoice ID, bank instructions. | Pending (Not captured) |
| 6.7 | **Payment Posting Interface** | `invoices.posting` | `/invoices/posting` | Invoice search, installment selector, bank branch dropdown, payment date picker, transaction reference, submit button. | Pending (Not captured) |
| 6.8 | **Miscellaneous Invoice Create** | `invoices.miscellaneous` | `/invoices/miscellaneous` | Student roll lookup, purpose selection (Document, ID card, Fine), custom amount field, create invoice button. | Pending (Not captured) |
| 6.9 | **Tuition Waivers Management** | `waivers.index` / `create` | `/waivers` | Student registration lookup, waiver category dropdown, approved percentage, approval workflow actions. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/06_09_waivers.png" target="_blank">View UI Image</a> |
| 6.10| **Student Financial Ledger** | `ledgers.index` / `show` | `/ledgers` | Complete financial history: chronological Debit (D) and Credit (C) transactions, running net balance. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/06_10_ledgers.png" target="_blank">View UI Image</a> |
| 6.11| **Accounts Collection Reports** | `report.accounts.index` | `/report/accounts` | Daily bank collection summary, session-wise total receivables, outstanding dues aging report. | Pending (Not captured) |

---

## 7. Examination Module Screens

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 7.1 | **Assessment Rules Setup** | `assessmentrules.index` | `/assessmentrules` | Assessment weight profiles: Attendance, CT/Continuous, Midterm, Final percentage allocations by course. | Pending (Not captured) |
| 7.2 | **Course Examiner Assignments** | `examiners.index` / `create` | `/examiners` | Program and course offering selector, teacher assignment dropdown, examiner authorization list. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/07_02_examiners.png" target="_blank">View UI Image</a> |
| 7.3 | **Teacher Marks Entry Sheet** | `marks.index` | `/marks` | Filter: Session, Program, Semester, Course, Section; student roster with inputs for Attendance, CT, Mid, Final, Status (`p`,`a`,`e`). | <span class="badge-captured">✓ Captured</span> <a href="screenshots/07_03_marks.png" target="_blank">View UI Image</a> |
| 7.4 | **Marks Save & Validation Feedback** | `marks.index` (AJAX/Save) | `/marks` | Real-time calculation feedback: Total marks, Grade Point (GP), Letter Grade (LG), error alerts for out-of-range marks. | Pending (Not captured) |
| 7.5 | **Teacher Marks Submission (Lock)** | `marks.submit` | `/marks/submit` | Submission verification modal, confirmation prompt, locking mechanism creating `Submission` record. | Pending (Not captured) |
| 7.6 | **Controller Marks Approval** | `marks.approve` | `/marks/approve` | Controller view of submitted section marks, grade distribution, **Approve** button generating `CourseResult` records. | Pending (Not captured) |
| 7.7 | **Administrative Undo Marks** | `marks.undo` | `/marks/undo` | Admin-only emergency reversal interface: removes approval, removes submission, unpublishes result for re-entry. | Pending (Not captured) |
| 7.8 | **Semester Result Processing** | `results.create` | `/results/create` | Program and semester selector, all-course approval check gate, SGPA batch calculation, ranking engine trigger. | Pending (Not captured) |
| 7.9 | **Result Publication Dashboard** | `results.index` | `/results` | List of semester results, publication date stamp, publish/unpublish toggle, student portal visibility indicator. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/07_09_results.png" target="_blank">View UI Image</a> |
| 7.10| **Official Tabulation Sheet (PDF)** | `results.pdf` | `/results/pdf` | Tabulation gazette: matrix of students, course-wise marks, GP, LG, SGPA, CGPA, and Controller signatures. | Pending (Not captured) |

---

## 8. Schedule Module Screens (Class Schedule)

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 8.1 | **Campus Rooms Management** | `rooms.index` / `create` | `/rooms` | Room number, building, seating capacity, facility type (Lecture Room, Computer Lab, Engineering Lab). | <span class="badge-captured">✓ Captured</span> <a href="screenshots/08_01_rooms.png" target="_blank">View UI Image</a> |
| 8.2 | **Academic Time Slots Setup** | `slots.index` / `create` | `/slots` | Period start time, end time, weekday mapping (Sunday to Thursday), slot duration. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/08_02_slots.png" target="_blank">View UI Image</a> |
| 8.3 | **Course Offerings Master** | `courseoffers.index` | `/courseoffers` | Active semester courses, section splits (A, B, C), assigned instructor, enrollment capacity. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/08_03_courseoffers.png" target="_blank">View UI Image</a> |
| 8.4 | **Schedule Preferences & Merges** | `courseoffers.schedule-merges` | `/courseoffers/schedule-merges` | Merged sections for scheduling and teacher preference mappings. | Pending (Not captured) |
| 8.5 | **Class Routine Builder (Create)** | `schedules.create` | `/schedules/create` | Interactive routine grid: placement of courses, rooms, and teachers into time slots. | Pending (Not captured) |
| 8.6 | **Collision Detection / Conflicts** | `schedule.conflicts` | `/schedules/conflicts` | Warning alerts: flags teacher double-booking or room occupancy conflicts. | Pending (Not captured) |
| 8.7 | **Schedule Viewer & Live Sync** | `schedules.index` & `schedules-live.index` | `/schedules`, `/schedules-live` | Draft and published routine views by department, program, semester, section, teacher, or room. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/08_07_schedules.png" target="_blank">View UI Image</a> |
| 8.8 | **Printable Routine PDF** | `schedules-live.pdf` | `/schedules-live/pdf` | Formatted printable routine matrix for notice board posting and departmental distribution. | Pending (Not captured) |

---

## 9. Reports & University Documents

| # | Screen / View Name | Route Name (Codebase) | URL Path | Key UI Elements & Audit Focus | Screenshot Status |
|---|---|---|---|---|---|
| 9.1 | **Semester Registration Report** | `report.registration.index` | `/report/registration` | Total registered students by program and semester, course enrollment counts, retake vs regular statistics. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/09_01_report_registration.png" target="_blank">View UI Image</a> |
| 9.2 | **Accounts Financial Summary** | `report.accounts.index` | `/report/accounts` | Tuition receivables, total waivers granted, collection amounts across banks, pending installments. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/09_02_report_accounts.png" target="_blank">View UI Image</a> |
| 9.3 | **Student Enrollment & Demographics** | `report.student.index` | `/report/student` | Active student count by gender, district, batch, program, and enrollment status. | <span class="badge-captured">✓ Captured</span> <a href="screenshots/09_03_report_student.png" target="_blank">View UI Image</a> |
| 9.4 | **Admission Analytics Report** | `report.admission.index` | `/report/admission` | Applicant funnel: registered applicants, applications submitted, test attendees, transferred students. | Pending (Not captured) |
| 9.5 | **Scholarship & Waiver Report** | `report.waiver.index` | `/report/waiver` | Total financial aid disbursed by waiver category (Merit, Freedom Fighter, Sibling, Employee). | Pending (Not captured) |
| 9.6 | **Semester Examination Gazette / Finals**| `report.result.programfinal` | `/report/result/programfinal` | Official result notifications, pass rates, GPA distributions. | Pending (Not captured) |
| 9.7 | **UGC Annual Statistical Report** | `report.ugc.index` | `/report/ugc` | Formatted compliance report structured for Bangladesh University Grants Commission annual reporting. | Pending (Not captured) |
| 9.8 | **Official Academic Transcript Download**| `transcripts.download.partial` / `final` | `/transcripts/download/partial` | Official security paper layout: student details, semester-by-semester courses, credits, GP, LG, SGPA, CGPA. | Pending (Not captured) |
| 9.9 | **Public Certificate Verification** | `front.services.studentverify.certificate` | `/front/services/studentverify/certificate/{token}` | Public web verification portal: validates graduate certificate authenticity via unique cryptographic token. | Pending (Not captured) |

---

## Visual Capture Execution Instructions

For implementation teams executing visual UI captures in a live test environment:
1. Ensure a local or staging web server is running (`php artisan serve` on port 8000).
2. Seed the database with representative demo records (`php artisan db:seed`).
3. Capture full-window or element-level screenshots for each screen number above.
4. Store screenshots as PNG images under `docs/user-manual/screenshots/{module_id}_{screen_id}.png`.
5. Update the **Capture Status** column in this document from `Pending (Not captured)` to `Captured [filename]` upon physical image verification.
