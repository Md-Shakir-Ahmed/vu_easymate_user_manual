window.SEARCH_INDEX = [
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "EasyMate ERP — User Manual",
    "url": "index.html#easymate-erp-user-manual",
    "content": ""
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "Varendra University",
    "url": "index.html#varendra-university",
    "content": "Version: 1.0 Last Updated: October 2026 System: EasyMate ERP (Laravel based Academic ERP)"
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "About This Manual",
    "url": "index.html#about-this-manual",
    "content": "This manual documents the operational use of EasyMate ERP as implemented at Varendra University. It covers the student lifecycle — from admission application through graduation — and provides instructions across user roles based on rigorous codebase verification. Scope Boundary: This manual covers f"
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "How to Navigate This Manual",
    "url": "index.html#how-to-navigate-this-manual",
    "content": "Document Contents Verification Basis 01 — Functional Inventory (01 functional inventory.md) Catalog of modules, submodules, and discrete capabilities Source code routes, controllers, models 02 — Student Lifecycle (02 student lifecycle.md) End to end journey from admission application to graduation C"
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "Intended Audience",
    "url": "index.html#intended-audience",
    "content": "Applicants — Prospective students applying for academic programs Students — Enrolled students accessing academic records, routines, fees, and evaluations Teachers / Faculty Members — Instructors entering continuous and exam marks and viewing schedules Department Heads — Academic heads overseeing dep"
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "System Overview",
    "url": "index.html#system-overview",
    "content": "EasyMate ERP comprises nine major modules: 1. Administration — Faculties, Departments, Programs, Program Versions, Waiver Categories, Users, Roles, Settings, Activity Logs, Smart Cards, MS Teams Users, Photo Capture 2. Admission — Admission Test Configs, Applicants datatable, Board verification flag"
  },
  {
    "chapter": "Overview & Scope",
    "title": "System Overview & Scope",
    "heading": "Verification Legend & Audit Classifications",
    "url": "index.html#verification-legend-audit-classifications",
    "content": "Every feature, screen, and workflow in this documentation suite is evaluated against the following classification criteria: Classification Meaning & Criteria Verified in source code Logic, route, controller, model, and blade view confirmed directly in codebase Verified in the running UI Visually con"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "01 — Functional Inventory",
    "url": "01-functional-inventory.html#01-functional-inventory",
    "content": ""
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "EasyMate ERP — Verified Modules and Capabilities",
    "url": "01-functional-inventory.html#easymate-erp-verified-modules-and-capabilities",
    "content": "This inventory was compiled by analyzing the actual codebase: routes, controllers, models, policies, database migrations, database seeders, and blade views. Each feature is classified according to the six audit verification categories."
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Status Legend",
    "url": "01-functional-inventory.html#status-legend",
    "content": "Status Verification Classification Meaning VC Verified in source code Feature logic, route, controller, model, and view confirmed in codebase VUI Verified in the running UI Visually confirmed and interactively tested in a running UI (0 currently verified) PI Partially implemented Feature exists in c"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 1: Administration",
    "url": "01-functional-inventory.html#module-1-administration",
    "content": "Navigation: Main Navigation → Administration Route file: web routes administrator.php Namespace: Administrator"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.1 Faculties",
    "url": "01-functional-inventory.html#11-faculties",
    "content": "Feature Status UI Location Authorized Roles Notes List faculties VC CNV Administration → Faculties Users with view faculties permission Server side datatable Create faculty VC CNV Faculties → Create Users with create faculties permission Modal/form Edit faculty VC CNV Faculties → Edit Users with edi"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.2 Departments",
    "url": "01-functional-inventory.html#12-departments",
    "content": "Feature Status UI Location Authorized Roles Notes List departments VC CNV Administration → Departments Users with view departments permission Create department VC CNV Departments → Create Users with create departments permission Linked to a faculty Edit department VC CNV Departments → Edit Users wit"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.3 Programs",
    "url": "01-functional-inventory.html#13-programs",
    "content": "Feature Status UI Location Authorized Roles Notes List programs VC CNV Administration → Programs Users with view programs permission Filtered by user's assigned departments Create program VC CNV Programs → Create Users with create programs permission Links to department and program level Edit progra"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.4 Waiver Categories",
    "url": "01-functional-inventory.html#14-waiver-categories",
    "content": "Feature Status UI Location Authorized Roles Notes List waiver categories VC CNV Administration → Waiver Categories Users with view waiver categories permission Create waiver category VC CNV Waiver Categories → Create Users with create waiver categories permission Name, discount percentage Edit waive"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.5 Users",
    "url": "01-functional-inventory.html#15-users",
    "content": "Feature Status UI Location Authorized Roles Notes List users VC CNV Administration → Users Users with view users permission Server side datatable Create user VC CNV Users → Create Users with create users permission Name, email, department, roles, faculties Edit user VC CNV Users → Edit Users with ed"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.6 Roles and Permissions",
    "url": "01-functional-inventory.html#16-roles-and-permissions",
    "content": "Feature Status UI Location Authorized Roles Notes List roles VC CNV Administration → Roles Users with view roles permission Create role VC CNV Roles → Create Users with create roles permission Edit role (assign permissions) VC CNV Roles → Edit Users with edit roles permission Assign permissions to r"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.7 Settings",
    "url": "01-functional-inventory.html#17-settings",
    "content": "Feature Status UI Location Authorized Roles Notes List settings VC CNV Administration → Settings Users with view settings permission Create setting VC CNV Settings → Create Users with create settings permission Edit setting VC CNV Settings → Edit Users with edit settings permission Global and progra"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.8 Activity Logs",
    "url": "01-functional-inventory.html#18-activity-logs",
    "content": "Feature Status UI Location Authorized Roles Notes View activity logs VC CNV Administration → Logs Users with view logs permission Spatie Activitylog datatable View log details VC CNV Logs → Details Users with view logs permission Shows dirty attributes / before after"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.9 MS Teams Users",
    "url": "01-functional-inventory.html#19-ms-teams-users",
    "content": "Feature Status UI Location Authorized Roles Notes List MS Teams users VC CNV Administration → MS Teams Users Users with view mscusers permission Linked to student Wi Fi/Teams access Create/Edit MS Teams user VC CNV MS Teams Users → Create/Edit Users with create/edit mscusers permission"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.10 Smart Cards & Photo Capture",
    "url": "01-functional-inventory.html#110-smart-cards-photo-capture",
    "content": "Feature Status UI Location Authorized Roles Notes List smart cards VC CNV Administration → Smart Cards ( smartcards.index ) Users with view smartcards permission ID card RFID tracking Photo capture interface VC CNV Administration → Photo Capture ( photocapture.index ) Users with capturephoto permiss"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "1.11 Batch Operations",
    "url": "01-functional-inventory.html#111-batch-operations",
    "content": "Feature Status UI Location Authorized Roles Notes Applicant admit card SMS VC CNV Administration → Batch Operations → Applicant Admit Card SMS Users with batchop permission Bulk SMS dispatch"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 2: Admission",
    "url": "01-functional-inventory.html#module-2-admission",
    "content": "Navigation: Main Navigation → Admission Route file: web routes admission.php Namespace: Admission"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "2.1 Admission Test Configuration",
    "url": "01-functional-inventory.html#21-admission-test-configuration",
    "content": "Feature Status UI Location Authorized Roles Notes List test configs VC CNV Admission → Admission Test Configs ( admissiontestconfigs.index ) Users with view admission test configs permission Per program, per session Create test config VC CNV Test Configs → Create Users with create admission test con"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "2.2 Applicants (Administrative Oversight)",
    "url": "01-functional-inventory.html#22-applicants-administrative-oversight",
    "content": "Feature Status UI Location Authorized Roles Notes List applicants VC CNV Admission → Applicants ( applicants.index ) Users with view applicants permission Server side datatable View applicant details VC CNV Applicants → Details ( applicants.show ) Users with view applicants permission Profile, educa"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "2.3 Admission Merit Lists",
    "url": "01-functional-inventory.html#23-admission-merit-lists",
    "content": "Feature Status UI Location Authorized Roles Notes List merit lists VC CNV Admission → Merit Lists ( admissionmeritlists.index ) Users with view admission merit lists permission Create merit list VC CNV Merit Lists → Create Users with create admission merit lists permission Ranks applicants based on "
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "2.4 Applicant Portal (Public-Facing)",
    "url": "01-functional-inventory.html#24-applicant-portal-public-facing",
    "content": "Feature Status UI Location Authorized Roles Notes Home / landing page VC CNV / or /front/applicant/home Public Lists active admission programs View tuition fees VC CNV Home → Tuition Fees ( front.applicant.home.tutionfees ) Public Fee schedule breakdown Register as applicant VC CNV Home → Register ("
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 3: Academic",
    "url": "01-functional-inventory.html#module-3-academic",
    "content": "Navigation: Main Navigation → Academic Route file: web routes academic.php Namespace: Academic"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.1 Syllabuses",
    "url": "01-functional-inventory.html#31-syllabuses",
    "content": "Feature Status UI Location Authorized Roles Notes List syllabuses VC CNV Academic → Syllabuses ( syllabuses.index ) Users with view syllabuses permission Filtered by authorized programs Create syllabus VC CNV Syllabuses → Create Users with create syllabuses permission Binds program, intake session, "
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.2 Courses",
    "url": "01-functional-inventory.html#32-courses",
    "content": "Feature Status UI Location Authorized Roles Notes List courses VC CNV Academic → Courses ( courses.index ) Users with view courses permission Create course VC CNV Courses → Create Users with create courses permission Code, title, credits, marks, theory flag (1 or 0) Edit course VC CNV Courses → Edit"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.3 Students",
    "url": "01-functional-inventory.html#33-students",
    "content": "Feature Status UI Location Authorized Roles Notes List students VC CNV Academic → Students ( students.index ) Users with view students permission Server side datatable Create student VC CNV Students → Create Users with create students permission Direct manual student creation Edit student VC CNV Stu"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.4 Registrations",
    "url": "01-functional-inventory.html#34-registrations",
    "content": "Feature Status UI Location Authorized Roles Notes List registrations VC CNV Academic → Registrations → Registrations ( registrations.index ) Users with view registrations permission Server side datatable Create registration VC CNV Registrations → Create Users with create registrations permission Man"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.5 Auto Registrations",
    "url": "01-functional-inventory.html#35-auto-registrations",
    "content": "Feature Status UI Location Authorized Roles Notes List auto reg. logs VC CNV Academic → Registrations → Auto Registration ( autoregistrations.index ) Users with create auto registrations permission Batch run logs Run auto registration VC CNV Auto Registration → Create ( autoregistrations.create ) Us"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.6 Assessments & Assessment Rules",
    "url": "01-functional-inventory.html#36-assessments-assessment-rules",
    "content": "Feature Status UI Location Authorized Roles Notes List assessments VC CNV Academic → Assessments → Assessment List ( assessments.index ) Users with view assessments permission Attendance, CT, Mid, Final Assessment rules VC CNV Academic → Assessments → Assessment Rules ( assessmentrules.index ) Users"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.7 Transcripts & Certificates",
    "url": "01-functional-inventory.html#37-transcripts-certificates",
    "content": "Feature Status UI Location Authorized Roles Notes Transcripts index VC CNV Academic → Transcripts ( transcripts.index ) Users with view transcripts permission Partial transcript VC CNV Transcripts → Download Partial ( transcripts.download.partial ) Users with download transcripts permission For cont"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "3.8 Student Status & Applications",
    "url": "01-functional-inventory.html#38-student-status-applications",
    "content": "Feature Status UI Location Authorized Roles Notes Deactivated students VC CNV Academic → Deactivated Students ( disabledstudents.index ) Users with view disabledstudents permission Temporary leaves / withdrawal Suspended students VC CNV Academic → Suspended Students ( suspendedstudents.index ) Autho"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 4: Accounts",
    "url": "01-functional-inventory.html#module-4-accounts",
    "content": "Navigation: Main Navigation → Accounts Route file: web routes accounts.php Namespace: Accounts"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "4.1 Fee Settings",
    "url": "01-functional-inventory.html#41-fee-settings",
    "content": "Feature Status UI Location Authorized Roles Notes List fee settings VC CNV Accounts → Fee Settings ( feesettings.index ) Users with view fee settings permission Matrix by Account Head, Program, Session Create fee setting VC CNV Fee Settings → Create Users with create fee settings permission Tuition "
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "4.2 Invoices",
    "url": "01-functional-inventory.html#42-invoices",
    "content": "Feature Status UI Location Authorized Roles Notes List invoices VC CNV Accounts → Invoices ( invoices.index ) Users with view invoices permission Server side datatable View invoice details VC CNV Invoices → Details ( invoices.details ) Users with view invoices permission Line items, installments, pa"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "4.3 Ledgers & Waivers",
    "url": "01-functional-inventory.html#43-ledgers-waivers",
    "content": "Feature Status UI Location Authorized Roles Notes Student ledgers VC CNV Accounts → Ledgers ( ledgers.index ) Users with view ledgers permission Debit (D) and Credit (C) double entry ledger Waivers management VC CNV Accounts → Waivers ( waivers.index ) Users with view waivers permission Applies scho"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 5: Examination",
    "url": "01-functional-inventory.html#module-5-examination",
    "content": "Navigation: Main Navigation → Exam Route file: web routes exam.php Namespace: Exam"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "5.1 Examiners & Marks Entry",
    "url": "01-functional-inventory.html#51-examiners-marks-entry",
    "content": "Feature Status UI Location Authorized Roles Notes List examiners VC CNV Exam → Examiners ( examiners.index ) Users with view examiners permission Course instructor mapping Marks entry sheet VC CNV Exam → Marks ( marks.index ) Assigned examiner OR create marks Attendance, CT, Mid, Final; statuses: p "
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "5.2 Results & Publications",
    "url": "01-functional-inventory.html#52-results-publications",
    "content": "Feature Status UI Location Authorized Roles Notes List results VC CNV Exam → Results ( results.index ) Users with view results permission Published semester results Create/Publish result VC CNV Results → Create ( results.create ) Users with create results permission Requires 100% course approval; ca"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 6: Class Schedule",
    "url": "01-functional-inventory.html#module-6-class-schedule",
    "content": "Navigation: Main Navigation → Class Schedule Route file: web routes schedule.php Namespace: Schedule Feature Status UI Location Authorized Roles Notes Campus rooms VC CNV Class Schedule → Rooms ( rooms.index ) Users with manage schedule Rooms, buildings, seating capacities Time slots VC CNV Class Sc"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 7: Reports",
    "url": "01-functional-inventory.html#module-7-reports",
    "content": "Navigation: Main Navigation → Reports Route file: web routes report.php Namespace: Report Feature Status UI Location Authorized Roles Notes Registration report VC CNV Reports → Registration → Registration Report ( report.registration.index ) Users with report permissions By program and session Dropo"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 8: Student Portal",
    "url": "01-functional-inventory.html#module-8-student-portal",
    "content": "Navigation: /front/student/ Route file: web routes front.php Namespace: Front\\Student Feature Status UI Location / URL Path Authorized Users Notes Student login VC CNV /front/student/login ( front.student.auth.login ) Enrolled students Roll Number + Password Student logout VC CNV /front/student/logo"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Module 9: API & Integrations",
    "url": "01-functional-inventory.html#module-9-api-integrations",
    "content": "Route file: api.php Namespace: Api Feature Status Notes Invoice status & posting API VC CNV Bank and online payment gateway callbacks VU internal payment API VC CNV Internal digital payment integration Student info API VC CNV External data exchange Certificate verification API VC CNV Token based cer"
  },
  {
    "chapter": "01. Functional Inventory",
    "title": "01 — Functional Inventory",
    "heading": "Outstanding Questions & Verification Dependencies",
    "url": "01-functional-inventory.html#outstanding-questions-verification-dependencies",
    "content": "1. Active Database Role Identifiers RDC : Beyond Admin (ID 1), Head (ID 7), Controller (ID 11), and Teacher (name \"Teacher\" ), staff role IDs (Accounts Officer, Admission Officer, Academic Office Staff) depend on dynamic database records. 2. Grading Scale Authority & Database Records RDC : Grade::ca"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "02 — Student Lifecycle (শিক্ষার্থীর পূর্ণাঙ্গ জীবনচক্র)",
    "url": "02-student-lifecycle.html#02-student-lifecycle-শকষরথর-পরণঙগ-জবনচকর",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "EasyMate ERP — ভর্তি আবেদন থেকে সমাবর্তন পর্যন্ত ধাপভিত্তিক নির্দেশিকা",
    "url": "02-student-lifecycle.html#easymate-erp-ভরত-আবদন-থক-সমবরতন-পরযনত-ধপভততক-নরদশক",
    "content": "নন টেকনিক্যাল গাইড: বরেন্দ্র বিশ্ববিদ্যালয়ে একজন শিক্ষার্থী ভর্তি আবেদন করা থেকে শুরু করে ক্লাস, পরীক্ষা, ফলাফল এবং সার্টিফিকেট পাওয়া পর্যন্ত প্রতিটি ধাপ খুব সহজ বাংলায় এবং স্ক্রিনশট সহ নিচে বর্ণনা করা হলো।"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "পূর্ণাঙ্গ জীবনচক্রের চিত্ররূপ (Student Lifecycle Overview)",
    "url": "02-student-lifecycle.html#পরণঙগ-জবনচকরর-চতররপ-student-lifecycle-overview",
    "content": "┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │ ধাপ ১ │────▶│ ধাপ ২ │────▶│ ধাপ ৩ │────▶│ ধাপ ৪ │ │ অনলাইন ভর্তি │ │ বোর্ড যাচাই ও │ │ সিলেবাস ও কোর্স │ │ সেমিস্টার কোর্স │ │ আবেদন │ │ ভর্তি পরীক্ষা │ │ কনফিগারেশন │ │ রেজিস্ট্রেশন │ └─────────────────┘ └────────────"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ১: অনলাইনে ভর্তির আবেদন (Stage 1: Applying for Admission)",
    "url": "02-student-lifecycle.html#ধপ-১-অনলইন-ভরতর-আবদন-stage-1-applying-for-admission",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "ভর্তিচ্ছু শিক্ষার্থী (Applicant): ঘরে বসে বা যে কোনো স্থান থেকে অনলাইনে আবেদন করবেন। সিস্টেম (EasyMate API): শিক্ষা বোর্ডের সার্ভার থেকে স্বয়ংক্রিয়ভাবে প্রার্থীর ফলাফল যাচাই করবে।"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "02-student-lifecycle.html#কভব-কজ-করবন",
    "content": "১.১ আবেদন পোর্টালে প্রবেশ ব্রাউজারে http://localhost:8083/front/applicant/home ঠিকানায় যান। হোম পেজে চলমান সেমিস্টার (যেমন: Summer 2026 ), প্রোগ্রামসমূহ এবং টিউশন ফি এর বিবরণ দেখা যাবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture<"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ২: ভর্তি যাচাই ও শিক্ষার্থী হিসেবে অন্তর্ভুক্তি (Stage 2: Admission & Enrollment)",
    "url": "02-student-lifecycle.html#ধপ-২-ভরত-যচই-ও-শকষরথ-হসব-অনতরভকত-stage-2-admission-enrollment",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "ভর্তি শাখা (Admission Officer): আবেদনপত্র ও কাগজপত্র যাচাই এবং মেধা তালিকা প্রস্তুতকরণ। রেজিস্ট্রার শাখা: চূড়ান্তভাবে নির্বাচিত প্রার্থীকে স্থায়ী রোল নম্বর প্রদান।"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "02-student-lifecycle.html#কভব-কজ-করবন",
    "content": "২.১ ভর্তি পরীক্ষার শিডিউল কনফিগারেশন ভর্তি অফিসার Admission → Admission Test Configs থেকে পরীক্ষার তারিখ, সময় ও ভেন্যু নির্ধারণ করেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"screenshot filename\" screenshots/"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৩: বিভাগ, সিলেবাস ও কোর্স সেটআপ (Stage 3: Program & Syllabus Setup)",
    "url": "02-student-lifecycle.html#ধপ-৩-বভগ-সলবস-ও-করস-সটআপ-stage-3-program-syllabus-setup",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "সিস্টেম অ্যাডমিন: অনুষদ, বিভাগ ও প্রোগ্রাম তৈরি। অ্যাকাডেমিক শাখা: প্রোগ্রামের সিলেবাস, কোর্সের ক্রেডিট ও মূল্যায়ন পদ্ধতি যুক্ত করা। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"screenshot filename\" screenshots/0"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৪: সেমিস্টার কোর্স রেজিস্ট্রেশন (Stage 4: Semester Course Registration)",
    "url": "02-student-lifecycle.html#ধপ-৪-সমসটর-করস-রজসটরশন-stage-4-semester-course-registration",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "অ্যাকাডেমিক শাখা: ব্যাচভিত্তিক স্বয়ংক্রিয় কোর্স রেজিস্ট্রেশন (Auto Registration)। শিক্ষার্থী: রিটেক বা ইমপ্রুভমেন্ট কোর্সের জন্য নিজের পোর্টাল থেকে আবেদন।"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "02-student-lifecycle.html#কভব-কজ-করবন",
    "content": "1. অটো রেজিস্ট্রেশন ইঞ্জিন: নতুন সেমিস্টার শুরুর আগে সিস্টেম সকল নিয়মিত ছাত্র ছাত্রীকে স্বয়ংক্রিয়ভাবে পরবর্তী সেমিস্টারে প্রমোট করে তাদের সিলেবাস অনুযায়ী কোর্স এনরোল করে দেয়। 2. ৫০% ক্রেডিট পাসের শর্ত: পূর্ববর্তী সেমিস্টারের অন্তত ৫০% ক্রেডিট পাস না করলে ছাত্র প্রমোট হয় না, সে আগের সেমিস্টারেই থেকে "
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৫: টিউশন ফি নির্ধারণ, ইনভয়েস ও পেমেন্ট (Stage 5: Fee Invoicing & Payment)",
    "url": "02-student-lifecycle.html#ধপ-৫-টউশন-ফ-নরধরণ-ইনভয়স-ও-পমনট-stage-5-fee-invoicing-payment",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "হিসাব শাখা (Accounts Officer): ফি ইনভয়েস তৈরি, স্কলারশিপ/ওয়েভার সমন্বয় এবং ব্যাংক পেমেন্ট পোস্টিং। শিক্ষার্থী: ব্যাংকে কিস্তির টাকা জমা দেওয়া।"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ফি হিসাব করার সহজ নিয়ম",
    "url": "02-student-lifecycle.html#ফ-হসব-করর-সহজ-নয়ম",
    "content": "1. নিয়মিত টিউশন ফি: প্রতি ক্রেডিটের ফি × মোট ক্রেডিট সংখ্যা (যেমন: ৩ ক্রেডিট × ২,৫০০ টাকা = ৭,৫০০ টাকা)। 2. রিটেক কোর্স ফি: নিয়মিত ফির ৫০%। 3. ইমপ্রুভমেন্ট কোর্স ফি: নিয়মিত ফির ২৫%। 4. স্কলারশিপ/ওয়েভার: জিপিএ বা কোটা অনুযায়ী টিউশন ফি থেকে ডিসকাউন্ট বাদ দিয়ে নেট প্রদেয় টাকা নির্ধারিত হয়। <figure clas"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৬: ক্লাস রুটিন ও পাঠদান (Stage 6: Classes & Teaching)",
    "url": "02-student-lifecycle.html#ধপ-৬-কলস-রটন-ও-পঠদন-stage-6-classes-teaching",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "ডিপার্টমেন্ট শিডিউলার: রুম, শিক্ষক ও সময়সূচি মিলিয়ে রুটিন তৈরি। শিক্ষক ও শিক্ষার্থী: যার যার পোর্টালে সাপ্তাহিক ক্লাস রুটিন দেখা। রুটিন তৈরির নিয়ম ও কনফ্লিক্ট চেকার Class Schedule → Schedules থেকে রবি বৃহস্পতিবারের সময়সূচিতে শিক্ষক ও রুম বসানো হয়। যদি একই সময়ে কোনো শিক্ষককে দুটি ক্লাসে বা একই রুমে দ"
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৭: পরীক্ষা, মূল্যায়ন ও ফলাফল প্রকাশ (Stage 7: Examination & Results)",
    "url": "02-student-lifecycle.html#ধপ-৭-পরকষ-মলযয়ন-ও-ফলফল-পরকশ-stage-7-examination-results",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "কোর্স শিক্ষক: ক্লাসের উপস্থিতি, ক্লাস টেস্ট, মিডটার্ম ও ফাইনাল পরীক্ষার নম্বর এন্ট্রি ও লক করা। পরীক্ষা নিয়ন্ত্রক: নম্বর অনুমোদন (Approve) ও সেমিস্টার রেজাল্ট প্রকাশ (Publish)। ৭.১ নম্বর এন্ট্রি ও অনুমোদন 1. শিক্ষক Exam → Marks এ গিয়ে কোর্স সিলেক্ট করে নম্বর ইনপুট দেন এবং Submit বাটন চেপে লক করেন। "
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "ধাপ ৮: গ্র্যাজুয়েশন, ক্লিয়ারেন্স ও সনদপত্র প্রদান (Stage 8: Graduation & Documents)",
    "url": "02-student-lifecycle.html#ধপ-৮-গরযজয়শন-কলয়রনস-ও-সনদপতর-পরদন-stage-8-graduation-documents",
    "content": ""
  },
  {
    "chapter": "02. Student Lifecycle",
    "title": "02 — Student Lifecycle",
    "heading": "কে সম্পাদন করবেন?",
    "url": "02-student-lifecycle.html#ক-সমপদন-করবন",
    "content": "শিক্ষার্থী: প্রয়োজনীয় সনদের জন্য অনলাইনে আবেদন। হিসাব ও লাইব্রেরি শাখা: বকেয়া ফি ও বই ফেরত ক্লিয়ারেন্স প্রদান। রেজিস্ট্রার শাখা: ট্রান্সক্রিপ্ট ও সার্টিফিকেট প্রিন্ট এবং প্রদান। ৮.১ সনদের জন্য আবেদন ও ক্লিয়ারেন্স 1. শিক্ষার্থী তার পোর্টাল থেকে Apply for Documents এ গিয়ে ট্রান্সক্রিপ্ট বা সার্টিফিকেট"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "03 — Role-Based User Operating Manual",
    "url": "03-role-based-guides.html#03-role-based-user-operating-manual",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "EasyMate ERP — সহজ ব্যবহার নির্দেশিকা ও ভূমিকা-ভিত্তিক গাইডলাইন",
    "url": "03-role-based-guides.html#easymate-erp-সহজ-বযবহর-নরদশক-ও-ভমক-ভততক-গইডলইন",
    "content": "ব্যবহারকারীর জন্য নির্দেশনা: এই ম্যানুয়ালটি এমনভাবে তৈরি করা হয়েছে যাতে কোনো টেকনিক্যাল জ্ঞান ছাড়াই বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষক, কর্মকর্তা, হিসাবরক্ষক, শিক্ষার্থী এবং কর্মচারীরা খুব সহজে তাদের দৈনন্দিন কাজ সম্পাদন করতে পারেন। প্রতিটি সেকশনে আসল সিস্টেমের স্ক্রিনশট এবং ধাপে ধাপে কাজ করার নিয়ম যুক"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "ভূমিকা ও ব্যবহাকারী রোল তালিকা (User Personas)",
    "url": "03-role-based-guides.html#ভমক-ও-বযবহকর-রল-তলক-user-personas",
    "content": "ক্রম ব্যবহারকারী রোল (Role) প্রধান দায়িত্বসমূহ প্রধান মেনু অ্যাক্সেস 1 সিস্টেম অ্যাডমিনিস্ট্রেটর (System Admin) নতুন ইউজার তৈরি, রোল দেওয়া, সেশন ও ডেডলাইন সেটিংস Administration, Settings, Logs, Undo 2 শিক্ষক / অনুষদ সদস্য (Teacher / Examiner) ক্লাস রুটিন দেখা, কন্টিনিউয়াস ও ফাইনাল মার্কস এন্ট্রি ও ল"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 1: সিস্টেম অ্যাডমিনিস্ট্রেটর (System Administrator)",
    "url": "03-role-based-guides.html#role-1-সসটম-অযডমনসটরটর-system-administrator",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "কেন্দ্রীয় সিস্টেমের নিরাপত্তা ও ব্যবহারকারী ব্যবস্থাপনা। নতুন সেমিস্টারের সেশন নাম ও ফি প্রদানের ডেডলাইন কনফিগার করা। ভুলবশত অনুমোদিত মার্কস বা রেজাল্ট সংশোধনের জন্য ইমার্জেন্সি রিভার্সাল (Undo)। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live Syste"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ১.১: নতুন ইউজার তৈরি ও রোল নির্ধারণ (User Account Creation)",
    "url": "03-role-based-guides.html#করযপদধত-১১-নতন-ইউজর-তর-ও-রল-নরধরণ-user-account-creation",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Administration → Users এ ক্লিক করুন। 2. নতুন যুক্ত করতে: উপরের ডানপাশে থাকা Create / Add User বাটনে ক্লিক করুন। 3. তথ্য পূরণ করুন: Name: ব্যবহারকারীর পূর্ণ নাম লিখুন। Email: ব্যবহারকারীর অফিশিয়াল ইমেইল অ্যাড্রেস লিখুন (এটি লগইন ইউজারনেম হিসেবে ব্যবহৃত হবে)। Departm"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ১.২: সেমিস্টার সেটিংস ও ফি জমার ডেডলাইন নির্ধারণ (Semester Settings)",
    "url": "03-role-based-guides.html#করযপদধত-১২-সমসটর-সটস-ও-ফ-জমর-ডডলইন-নরধরণ-semester-settings",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Administration → Settings এ যান। 2. প্রয়োজনীয় ফিল্ড পরিবর্তন করুন: Setting ID 1 (Current Session): চলমান সেশনের নাম আপডেট করুন (যেমন: Summer 2026 )। Setting ID 2 & 3 (Registration Window): কোর্স রেজিস্ট্রেশন শুরুর এবং শেষ তারিখ দিন। Setting ID 4 & 5 (Payment Deadli"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 2: শিক্ষক ও পরীক্ষক (Teacher / Faculty Member)",
    "url": "03-role-based-guides.html#role-2-শকষক-ও-পরকষক-teacher-faculty-member",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "নিজের কোর্সের জন্য বরাদ্দকৃত ক্লাস রুটিন দেখা। শিক্ষার্থীদের ক্লাসের উপস্থিতি (Attendance), ক্লাস টেস্ট (CT), মিডটার্ম ও ফাইনাল পরীক্ষার নম্বর এন্ট্রি করা। মার্কস এন্ট্রি শেষে লক/সাবমিট করা যাতে নম্বর অপরিবর্তিত থাকে।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ২.১: পরীক্ষার নম্বর এন্ট্রি করার নিয়ম (Marks Entry)",
    "url": "03-role-based-guides.html#করযপদধত-২১-পরকষর-নমবর-এনটর-করর-নয়ম-marks-entry",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Exam → Marks এ ক্লিক করুন। 2. কোর্স নির্বাচন করুন: Exam Session: যেমন: Summer 2026 Program: যেমন: B.Sc. in CSE বা BA (Hons) in English Semester: সেমিস্টার নির্বাচন করুন Course & Section: নির্দিষ্ট কোর্স কোড এবং সেকশন (A, B বা C) বাছাই করুন। 3. Show বাটনে ক্লিক করলে"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ২.২: মার্কস সাবমিট ও লক করা (Submit & Freeze)",
    "url": "03-role-based-guides.html#করযপদধত-২২-মরকস-সবমট-ও-লক-কর-submit-freeze",
    "content": "সমস্ত নম্বর সঠিকভাবে দেওয়া শেষ হলে পেজের নিচে থাকা Submit Marks বাটনে চাপ দিন। কনফার্মেশন পপ আপে নিশ্চিত করুন। ⚠️ সতর্কতা: একবার সাবমিট করার পর শিক্ষক নিজে আর নম্বর পরিবর্তন করতে পারবেন না। ভুল হলে অ্যাডমিন বা পরীক্ষা নিয়ন্ত্রকের সাথে যোগাযোগ করতে হবে।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 3: ভর্তি শাখা (Admission Officer)",
    "url": "03-role-based-guides.html#role-3-ভরত-শখ-admission-officer",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "নতুন ভর্তির জন্য সেশন ও ভর্তি পরীক্ষার তারিখ কনফিগার করা। অনলাইনে আবেদনকারী প্রার্থীদের তালিকা দেখা এবং মোবাইল নম্বর দিয়ে সার্চ করা। জাতীয় শিক্ষা বোর্ডের ডাটা (SSC/HSC GPA ও তথ্য) ভেরিফিকেশন যাচাই করা। নির্বাচিত আবেদনকারীদের রোল প্রদান করে স্থায়ী ছাত্র হিসেবে সিস্টেমে তালিকাভুক্ত (Transfer) করা।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৩.১: ভর্তিচ্ছুদের আবেদনপত্র যাচাই (Reviewing Applicants)",
    "url": "03-role-based-guides.html#করযপদধত-৩১-ভরতচছদর-আবদনপতর-যচই-reviewing-applicants",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Admission → Applicants এ যান। 2. আবেদনকারী খুঁজুন: উপরের সার্চ বক্সে প্রার্থীর Mobile Number অথবা Tracking ID লিখে এন্টার চাপুন। 3. স্ট্যাটাস চেক করুন: Payment Status: আবেদন ফি পরিশোধ হয়েছে কি না (Paid/Pending)। Board Verification: শিক্ষা বোর্ডের ডাটার সাথে মিলেছে "
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৩.২: আবেদনকারীকে স্থায়ী ছাত্রে রূপান্তর (Transfer to Student)",
    "url": "03-role-based-guides.html#করযপদধত-৩২-আবদনকরক-সথয়-ছতর-রপনতর-transfer-to-student",
    "content": "1. প্রার্থী ভর্তি ফি পরিশোধ করলে এবং সকল কাগজপত্র ঠিক থাকলে Admission → Transfer মেনুতে যান। 2. প্রার্থীর ট্র্যাকিং নম্বর সিলেক্ট করুন। 3. সিস্টেম স্বয়ংক্রিয়ভাবে তাকে Student মডিউলে নিয়ে যাবে এবং তাকে একটি স্থায়ী রোল নম্বর বরাদ্দের অপশন দেবে।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 4: হিসাব শাখা (Accounts Officer)",
    "url": "03-role-based-guides.html#role-4-হসব-শখ-accounts-officer",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "প্রতিটি প্রোগ্রামের জন্য ক্রেডিট ফি ও সেমিস্টার ফি নির্ধারণ করা। সেমিস্টার কোর্স অনুযায়ী স্বয়ংক্রিয় টিউশন ইনভয়েস তৈরি ও কিস্তি ভাগ করা। ব্যাংকে টাকা জমা হলে ভাউচার দেখে সিস্টেমে পেমেন্ট পোস্টিং দেওয়া। শিক্ষার্থীদের স্কলারশিপ ও ওয়েভার ডিসকাউন্ট সমন্বয় করা। স্টুডেন্ট লেজার দেখে যে কোনো শিক্ষার্থীর আর্"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৪.১: ফি সেটিংস কনফিগার করা (Fee Settings)",
    "url": "03-role-based-guides.html#করযপদধত-৪১-ফ-সটস-কনফগর-কর-fee-settings",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Fee Settings এ যান। 2. নির্দিষ্ট প্রোগ্রাম ও সেশন সিলেক্ট করুন। 3. টিউশন ফি (প্রতি ক্রেডিটের হার), ল্যাব ফি ও অন্যান্য চার্জ ইনপুট দিয়ে সেভ করুন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Ca"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৪.২: শিক্ষার্থীর ইনভয়েস দেখা ও পেমেন্ট পোস্টিং (Invoices & Payment Posting)",
    "url": "03-role-based-guides.html#করযপদধত-৪২-শকষরথর-ইনভয়স-দখ-ও-পমনট-পসট-invoices-payment-posting",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Invoices এ যান। 2. ইনভয়েস নম্বর অথবা শিক্ষার্থীর Roll Number দিয়ে সার্চ করুন। 3. তালিকা থেকে শিক্ষার্থীর ইনভয়েস দেখতে পাবেন: Gross Amount: মোট নির্ধারিত ফি। Waiver: অনুমোদিত ছাড় বা স্কলারশিপের পরিমাণ। Net Payable: প্রকৃত প্রদেয় টাকা। Installments: কিস্তি"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৪.৩: শিক্ষার্থীর অর্থনৈতিক খতিয়ান যাচাই (Student Financial Ledger)",
    "url": "03-role-based-guides.html#করযপদধত-৪৩-শকষরথর-অরথনতক-খতয়ন-যচই-student-financial-ledger",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Ledgers এ যান। 2. শিক্ষার্থীর রোল নম্বর লিখুন। 3. সিস্টেমে ওই শিক্ষার্থীর ভর্তির দিন থেকে আজ পর্যন্ত সকল ডেবিট (ফি ধার্য) এবং ক্রেডিট (টাকা জমা) ট্রানজ্যাকশন এবং বর্তমান বকেয়া (Balance) নিখুঁতভাবে চলে আসবে। <figure class=\"screenshot figure\" <div class=\"s"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 5: পরীক্ষা নিয়ন্ত্রক (Controller of Examinations)",
    "url": "03-role-based-guides.html#role-5-পরকষ-নযনতরক-controller-of-examinations",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "শিক্ষকদের সাবমিট করা কোর্সের নম্বর পরীক্ষা করা এবং অনুমোদন (Approve) দেওয়া। সেমিস্টারের শতভাগ কোর্সের নম্বর জমা হওয়ার পর চূড়ান্ত রেজাল্ট প্রক্রিয়াকরণ ও প্রকাশ করা। অফিশিয়াল ট্যাবুলেশন শিট, গেজেট ও গ্রেড শিট প্রিন্ট বা সংরক্ষণ করা।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৫.১: কোর্সের নম্বর অনুমোদন (Marks Approval)",
    "url": "03-role-based-guides.html#করযপদধত-৫১-করসর-নমবর-অনমদন-marks-approval",
    "content": "1. মেনু লোকেশন: Exam → Marks → Approve এ যান। 2. নির্দিষ্ট সেমিস্টার, প্রোগ্রাম ও কোর্স সেকশন সিলেক্ট করুন। 3. পরীক্ষকের দেওয়া সর্বোচ্চ, সর্বনিম্ন ও গড় নম্বর পর্যবেক্ষণ করুন। 4. সবকিছু সঠিক থাকলে Approve Marks বাটনে ক্লিক করুন। সাথে সাথে প্রতিটি ছাত্রের লেটার গ্রেড ও গ্রেড পয়েন্ট স্থায়ীভাবে সংরক্ষিত"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৫.২: চূড়ান্ত সেমিস্টার রেজাল্ট প্রকাশ (Result Publication)",
    "url": "03-role-based-guides.html#করযপদধত-৫২-চড়নত-সমসটর-রজলট-পরকশ-result-publication",
    "content": "1. মেনু লোকেশন: Exam → Results → Create এ যান। 2. প্রোগ্রাম ও সেমিস্টার নির্বাচন করুন। 3. সিস্টেম স্বয়ংক্রিয়ভাবে যাচাই করবে যে ওই সেমিস্টারের সব কোর্সের নম্বর অনুমোদন হয়েছে কি না। 4. সব নম্বর অনুমোদিত থাকলে সিস্টেম ব্যাচের সকল ছাত্রের SGPA এবং ব্যাচ র‍্যাংক (Rank) স্বয়ংক্রিয়ভাবে ক্যালকুলেট করবে। 5. "
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 6: অ্যাকাডেমিক ও রেজিস্ট্রার অফিস (Academic & Registrar Staff)",
    "url": "03-role-based-guides.html#role-6-অযকডমক-ও-রজসটরর-অফস-academic-registrar-staff",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "শিক্ষার্থী ডিরেক্টরি বজায় রাখা এবং স্ট্যাটাস ট্র্যাক করা (নিয়মিত, স্থগিত বা বহিষ্কৃত)। সিলেবাস ও কোর্স ক্যাটালগ তৈরি করা। সেমিস্টার কোর্স রেজিস্ট্রেশন সম্পন্ন করা (Auto & Manual Registration)। ট্রান্সক্রিপ্ট, প্রভিশনাল সার্টিফিকেট, টেস্টিমোনিয়াল ও মাইগ্রেশন সার্টিফিকেট ইস্যু করা।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৬.১: শিক্ষার্থী ডিরেক্টরি অনুসন্ধান (Student Directory)",
    "url": "03-role-based-guides.html#করযপদধত-৬১-শকষরথ-ডরকটর-অনসনধন-student-directory",
    "content": "1. মেনু লোকেশন: Academic → Students এ যান। 2. সার্চ বারে রোল নম্বর, নাম বা ব্যাচ লিখে সার্চ করুন। 3. প্রার্থীর নামের পাশে থাকা অপশন থেকে তার পূর্ণাঙ্গ তথ্য, অ্যাডভাইজর, সিলেবাস ও রেজিস্ট্রেশন দেখতে পারবেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" "
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৬.২: ট্রান্সক্রিপ্ট ও সার্টিফিকেট তৈরি (Transcripts Generation)",
    "url": "03-role-based-guides.html#করযপদধত-৬২-টরনসকরপট-ও-সরটফকট-তর-transcripts-generation",
    "content": "1. মেনু লোকেশন: Academic → Transcripts এ যান। 2. শিক্ষার্থীর রোল নম্বর লিখুন। 3. ট্রান্সক্রিপ্টের ধরন নির্বাচন করুন: Partial Transcript: অধ্যয়নরত শিক্ষার্থীদের জন্য চলমান সেমিস্টার পর্যন্ত প্রাপ্ত ফলাফলের ট্রান্সক্রিপ্ট। Final Transcript: ডিগ্রি সম্পন্নকারী গ্র্যাজুয়েটদের জন্য পূর্ণাঙ্গ ট্রান্সক্রি"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 7: শিক্ষার্থী পোর্টাল নির্দেশিকা (Student Portal Guide)",
    "url": "03-role-based-guides.html#role-7-শকষরথ-পরটল-নরদশক-student-portal-guide",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "নিজের রোল ও পাসওয়ার্ড দিয়ে নিজস্ব পোর্টালে লগইন করা। সাপ্তাহিক ক্লাস রুটিন ও রুম নম্বর দেখা। সেমিস্টার ফি, কিস্তির পরিমাণ ও পেমেন্ট হিস্ট্রি দেখা। প্রকাশিত সেমিস্টার পরীক্ষার রেজাল্ট ও গ্রেড দেখা। ট্রান্সক্রিপ্ট বা সনদের জন্য ঘরে বসেই আবেদন করা।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৭.১: স্টুডেন্ট পোর্টালে লগইন করার নিয়ম",
    "url": "03-role-based-guides.html#করযপদধত-৭১-সটডনট-পরটল-লগইন-করর-নয়ম",
    "content": "1. ব্রাউজারে http://localhost:8083/front/student/login ঠিকানায় যান। 2. Student ID / Roll: আপনার পূর্ণ রোল নম্বর লিখুন (যেমন: 193011001 )। 3. Password: আপনার পাসওয়ার্ড লিখুন (ডিফল্ট পাসওয়ার্ড হিসেবে জন্ম নিবন্ধন নম্বর বা মোবাইল নম্বর থাকে)। 4. Login বাটনে ক্লিক করুন। <figure class=\"screenshot figure\""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৭.২: প্রোফাইল ও একাডেমিক তথ্য দেখা (Student Profile)",
    "url": "03-role-based-guides.html#করযপদধত-৭২-পরফইল-ও-একডমক-তথয-দখ-student-profile",
    "content": "লগইন করার পর সরাসরি আপনার প্রোফাইল পেজ চলে আসবে। এখানে আপনার নাম, বর্তমান সেশন, ব্যাচ, সেমিস্টার, রক্তেল গ্রুপ এবং নির্ধারিত শিক্ষক বা অ্যাডভাইজরের নাম দেখতে পাবেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"sc"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৭.৩: পরীক্ষার ফলাফল ও গ্রেড দেখা (Checking Results)",
    "url": "03-role-based-guides.html#করযপদধত-৭৩-পরকষর-ফলফল-ও-গরড-দখ-checking-results",
    "content": "1. প্রোফাইলের মেনু থেকে Results ট্যাবে ক্লিক করুন। 2. এখানে আপনার প্রতিটি সেমিস্টারে নেওয়া কোর্সের তালিকা, ক্রেডিট, লেটার গ্রেড (যেমন: A+ , A , A ) এবং গ্রেড পয়েন্ট দেখা যাবে। 3. ডানপাশে প্রতিটি সেমিস্টারের অর্জিত ক্রেডিট ও SGPA স্পষ্টভাবে প্রদর্শিত হবে। <figure class=\"screenshot figure\" <div class="
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৭.৪: ফি ও কিস্তির বিবরণ দেখা (Payments & Invoices)",
    "url": "03-role-based-guides.html#করযপদধত-৭৪-ফ-ও-কসতর-ববরণ-দখ-payments-invoices",
    "content": "1. প্রোফাইলের Payments ট্যাবে ক্লিক করুন। 2. আপনার সেমিস্টার ফি এর মোট টাকা, কত টাকা পরিশোধ হয়েছে এবং কত টাকা বকেয়া রয়েছে তা দেখতে পাবেন। 3. কিস্তি অনুযায়ী ফি এর পরিমাণ (যেমন: ১ম কিস্তি ও ২য় কিস্তির ভাগ) পরিষ্কারভাবে দেখা যাবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span c"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৭.৫: ক্লাস রুটিন দেখা (Class Routine)",
    "url": "03-role-based-guides.html#করযপদধত-৭৫-কলস-রটন-দখ-class-routine",
    "content": "বামপাশের মেনু থেকে Class Routine অপশনে ক্লিক করলে রবি থেকে বৃহস্পতিবার পর্যন্ত আপনার ক্লাসের সময়, কোর্সের নাম, শিক্ষকের নাম এবং নির্দিষ্ট রুম নম্বর গ্রিড আকারে চলে আসবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span clas"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "Role 8: নতুন আবেদনকারী নির্দেশিকা (Public Applicant Guide)",
    "url": "03-role-based-guides.html#role-8-নতন-আবদনকর-নরদশক-public-applicant-guide",
    "content": ""
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কাজের পরিধি",
    "url": "03-role-based-guides.html#কজর-পরধ",
    "content": "বরেন্দ্র বিশ্ববিদ্যালয়ে যেকোনো প্রোগ্রামে অনলাইনে ভর্তির আবেদন করা। এসএসসি ও এইচএসসি পরীক্ষার বোর্ড রোল দিয়ে স্বয়ংক্রিয় ডাটা যাচাই করা। প্রার্থীর ছবি, স্বাক্ষর ও অন্যান্য প্রয়োজনীয় কাগজপত্র আপলোড করা। ভর্তি পরীক্ষার প্রবেশপত্র (Admit Card) ডাউনলোড করা।"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৮.১: অনলাইন রেজিস্ট্রেশন ও আবেদন ফর্ম পূরণ",
    "url": "03-role-based-guides.html#করযপদধত-৮১-অনলইন-রজসটরশন-ও-আবদন-ফরম-পরণ",
    "content": "1. ব্রাউজারে http://localhost:8083/front/applicant/home লিংকে প্রবেশ করুন। 2. New Applicant (Sign Up) ট্যাবে ক্লিক করুন। 3. আপনার বোর্ড, এসএসসি ও এইচএসসি পরীক্ষার রোল, রেজিস্ট্রেশন নম্বর, মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে সাইন আপ করুন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <sp"
  },
  {
    "chapter": "03. Role-Based Guides",
    "title": "03 — Role-Based Guides",
    "heading": "কার্যপদ্ধতি ৮.২: প্রোফাইল তথ্য ও ডকুমেন্ট আপলোড",
    "url": "03-role-based-guides.html#করযপদধত-৮২-পরফইল-তথয-ও-ডকমনট-আপলড",
    "content": "1. আপনার মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন। 2. Personal Information, Contact Address, Guardian Information, Education সেকশনগুলো একে একে পূরণ করুন। 3. Attachments সেকশনে পাসপোর্ট সাইজের রঙিন ছবি এবং পরিষ্কার স্বাক্ষর স্ক্যান করে আপলোড করুন। 4. ১০০% প্রোফাইল সম্পন্ন হলে কাঙ্ক্ষিত প্রোগ্রামে আবেদ"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "04 — Cross-Module Workflows",
    "url": "04-cross-module-workflows.html#04-cross-module-workflows",
    "content": ""
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "EasyMate ERP — Inter-Departmental Operations and System Interactions",
    "url": "04-cross-module-workflows.html#easymate-erp-inter-departmental-operations-and-system-interactions",
    "content": "This document details the end to end operational workflows that span multiple modules, departments, and user roles in EasyMate ERP. It demonstrates how data flows across module boundaries—from admission, academic setup, and class scheduling to automated registration, fee invoicing, marks entry, resu"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Architectural Context & System Boundaries",
    "url": "04-cross-module-workflows.html#architectural-context-system-boundaries",
    "content": "EasyMate ERP is the central academic management system for Varendra University. Its modules do not operate in isolation; each phase of a student's academic journey requires tightly orchestrated data handoffs between administrative, academic, accounts, and examination functions. ┌────────────────────"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow Matrix: Cross-Module Interactions",
    "url": "04-cross-module-workflows.html#workflow-matrix-cross-module-interactions",
    "content": "Workflow Primary Trigger Modules Involved Key Data Artifacts Handled By 1. Admission to Enrollment Intake session announcement Admission, Administration, Academic, Accounts Applicant , ApplicantBoard , AdmissionTestConfig , Application , Student Admission Officer, Accounts Officer 2. Program & Sylla"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 1: Admission to Student Enrollment",
    "url": "04-cross-module-workflows.html#workflow-1-admission-to-student-enrollment",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Applicant │────▶│ Board API / │────▶│ Profile │ │ Registration │ │ Scraper Sync │ │ Completion (5) │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Ap"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 1.1: Academic Calendar & Admission Configuration 1. System Administrator navigates to Administration → Settings : Sets Setting ID 1 ( Current Exam Session e.g., \"Spring 2026\"). Sets Setting ID 9 ( Admission Start Date ) and Setting ID 10 ( Admission Last Date ). 2. Admission Officer navigates t"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 2: Academic Program & Syllabus Architecture",
    "url": "04-cross-module-workflows.html#workflow-2-academic-program-syllabus-architecture",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Faculty & │────▶│ Program & │────▶│ Program Version │ │ Department │ │ Degree Level │ │ (Installments, │ └──────────────────┘ └──────────────────┘ │ Years, Terms) │ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌──────────────────┐ ┌──"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 2.1: Organizational Hierarchy Setup 1. Administrator defines university structure: Administration → Faculties ( faculties.index ): Creates Faculties. Administration → Departments ( departments.index ): Creates Departments linked to faculties. Administration → Programs ( programs.index ): Create"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 3: Class Schedule & Routine Setup",
    "url": "04-cross-module-workflows.html#workflow-3-class-schedule-routine-setup",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Physical │────▶│ Time Slots │────▶│ Course Offering │ │ Rooms & Labs │ │ & Week Days │ │ & Sections │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ P"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 3.1: Campus Infrastructure & Grid Setup 1. Staff navigates to Class Schedule → Rooms ( rooms.index ): Configures rooms with building, floor, room number, and seating capacity. 2. In Class Schedule → Slots ( slots.index ): Configures standard lecture periods and weekly days (Sunday through Thurs"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 4: Semester Registration & Financial Integration",
    "url": "04-cross-module-workflows.html#workflow-4-semester-registration-financial-integration",
    "content": "┌─────────────────────────────┐ │ Auto Registration Trigger │ │ (Batch by Program/Session) │ └──────────────┬──────────────┘ │ ▼ ┌─────────────────────────────┐ │ Eligibility Verification │ │ • 7 Year study limit │ │ • Suspensions & Disciplinary│ │ • Financial clearance upto │ │ • Previous session e"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 4.1: Pre Registration Validation & Gatekeeping Auto registration ( app/Libs/AutoRegistration.php ) verifies: 1. 7 Year Degree Duration Limit: $student is7YearsPlus($exam session) bars registration if elapsed time 7 years. 2. Disciplinary Suspension Check: $student isSuspendedTemporarily($exam s"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 5: Payment Processing & Financial Settlement",
    "url": "04-cross-module-workflows.html#workflow-5-payment-processing-financial-settlement",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Student Views │────▶│ Payment via │────▶│ Bank Scroll / │ │ Invoice/Slip │ │ Bank or Counter │ │ Teller Receipt │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌──────────────────┐ ┌───────────"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 5.1: Student Invoicing & Payment Modes 1. Student accesses Student Portal → Profile → Payments tab ( /front/student/profile?type=p ). 2. Downloads 3 part Bank Deposit Slip from /printinvoices/index/{id} . 3. Submits cash at partner banks or university cashiers. Step 5.2: Late Fine Enforcement W"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 6: Teacher Operations & Marks Management",
    "url": "04-cross-module-workflows.html#workflow-6-teacher-operations-marks-management",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Teacher Login │────▶│ Filter Session, │────▶│ Attendance │ │ & Examiner Link │ │ Course & Section│ │ Evaluation │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌──────────────────┐ ┌───────────"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 6.1: Examiner Authorization Only instructors mapped as active examiners in course offerings have write access to student marks for that specific course and section. Step 6.2: Class Attendance Auditing Under Reports → Registration → Non Collegiate Report ( report.registration.noncollegiate ), st"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 7: Result Approval, Processing & Publication",
    "url": "04-cross-module-workflows.html#workflow-7-result-approval-processing-publication",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Controller of │────▶│ Mark Approval │────▶│ CourseResult │ │ Examinations │ │ & Grade Lock │ │ Creation │ │ Audit │ │ (Approval rec) │ │ (GP, LG Stored) │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ ▼ ┌────────────"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 7.1: Controller Audit & Course Mark Approval 1. Controller navigates to Exam → Marks → Approve ( marks.approve ). 2. Filters by Session, Program, Semester, Course, and Section. 3. Verifies marks distribution and clicks Approve : Registers an Approval record. For every student in that section, c"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Workflow 8: Academic Progression, Degree Completion & Graduation",
    "url": "04-cross-module-workflows.html#workflow-8-academic-progression-degree-completion-graduation",
    "content": "┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ Result │────▶│ Progression │────▶│ Subsequent │ │ Published │ │ Evaluation │ │ Session Reg. │ └──────────────────┘ │ (Pass / Drop) │ │ (Retake/Imprv) │ └──────────────────┘ └──────────────────┘ │ ▼ ┌──────────────────┐ ┌───────────────"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Operational Steps",
    "url": "04-cross-module-workflows.html#operational-steps",
    "content": "Step 8.1: Post Result Progression & Retake Rules 1. Students with $GP \\ge 1.00$ in all courses are cleared for regular promotion. 2. Students with an F grade ($GP = 0$) in any course are flagged for Retake in the next available session. 3. Students with $GP \\le 2.75$ ($B $ or below) in a theory cour"
  },
  {
    "chapter": "04. Cross-Module Workflows",
    "title": "04 — Cross-Module Workflows",
    "heading": "Cross-Module Failure Modes & Remediation Matrix",
    "url": "04-cross-module-workflows.html#cross-module-failure-modes-remediation-matrix",
    "content": "Failure Mode Module Affected Technical Root Cause in Code Authorized Role Remediation Procedure Auto registration fails with \"Payment is not clear\" Academic / Accounts Student has unpaid debit entries from prior sessions ( accountClearUpto check failed) Accounts Officer Verify pending bank payments,"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "05 — Glossary and FAQ",
    "url": "05-glossary-and-faq.html#05-glossary-and-faq",
    "content": ""
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "EasyMate ERP — Academic Terminology, Grading Rules, Formulas & Operational FAQ",
    "url": "05-glossary-and-faq.html#easymate-erp-academic-terminology-grading-rules-formulas-operational-faq",
    "content": "This document provides a reference for university terminology, grading and assessment models, financial billing algorithms, and operational frequently asked questions across all user roles in EasyMate ERP. Verification Status: Business logic, algorithmic formulas, and operational workflows are verif"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "1. Academic & ERP Glossary",
    "url": "05-glossary-and-faq.html#1-academic-erp-glossary",
    "content": ""
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "General & Academic Architecture",
    "url": "05-glossary-and-faq.html#general-academic-architecture",
    "content": "Term System Entity Definition Exam Session exam session The primary operational term/semester period in the ERP (e.g., Spring 2026 , Fall 2026 , Summer 2026 ). Governs registration, scheduling, billing, and result publication. Intake Session session (Student) The academic session in which a student "
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "Accounts & Financial Terminology",
    "url": "05-glossary-and-faq.html#accounts-financial-terminology",
    "content": "Term System Entity Definition Account Head FeeSetting A categorized fee item (e.g., Head 1: Tuition Fee, Head 2: Semester Fee, Head 3: Development Fee, Head 4: Exam Fee, Head 5: Lab Fee, Head 8: Non Collegiate Fee, Head 11: Improvement Fee, Head 12: Retake Fee, Head 13: Drop Fee). Invoice (Type 1) i"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "Examination & Grading Terminology",
    "url": "05-glossary-and-faq.html#examination-grading-terminology",
    "content": "Term System Entity Definition Assessment Rule AssessmentRule Percentage breakdown of assessment components for a course (e.g., Theory: Attendance 10%, CT 20%, Midterm 30%, Final 40%). Examiner examiner The appointed faculty member authorized to grade student assessments for a specific course and sec"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "2. Grading System Specification (Database Seed Baseline & Formula Reference)",
    "url": "05-glossary-and-faq.html#2-grading-system-specification-database-seed-baseline-formula-reference",
    "content": ""
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "Technical Implementation in Code",
    "url": "05-glossary-and-faq.html#technical-implementation-in-code",
    "content": "In EasyMate ERP, grade resolution is dynamic: 1. Grade::calculate($total, $obtained, $status) calculates percentage: $$\\text{percentage} = \\frac{\\text{obtained} \\times 100}{\\text{total}}$$ 2. It queries all rows from the grades table ( Grade::all() ) and matches: $$\\text{low} \\le \\text{percentage} <"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "Seeded Grade Table Baseline (`database/seeds/GradesTableSeeder.php`)",
    "url": "05-glossary-and-faq.html#seeded-grade-table-baseline-databaseseedsgradestableseederphp",
    "content": "Percentage Range (low to high) Letter Grade (LG) Grade Point (GP) Qualitative Assessment Academic Implications in Code 80.00% to 101.00% A+ 4.00 Outstanding Distinction; eligible for maximum merit scholarship 75.00% to 80.00% A 3.75 Excellent Honors standing 70.00% to 75.00% A 3.50 Very Good Strong "
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "Assessment Attendance Flags",
    "url": "05-glossary-and-faq.html#assessment-attendance-flags",
    "content": "Flag Meaning Impact on Grading in Code p Present Student appeared; entered assessment score is counted. a Absent Student was absent; counted as 0 marks. e Expelled Disciplinary expulsion; counted as 0 marks and flagged for disciplinary review."
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "3. Mathematical Models & ERP Calculation Formulas",
    "url": "05-glossary-and-faq.html#3-mathematical-models-erp-calculation-formulas",
    "content": ""
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "3.1 Semester Grade Point Average (SGPA)",
    "url": "05-glossary-and-faq.html#31-semester-grade-point-average-sgpa",
    "content": "$$\\text{SGPA} = \\frac{\\sum {i=1}^{n} (\\text{Credit} i \\times \\text{GP} i)}{\\sum {i=1}^{n} \\text{Credit} i}$$ $\\text{Credit} i$: Credit hours of the $i$ th registered regular course in the semester. $\\text{GP} i$: Grade Point earned in the $i$ th course. Calculated across all regular courses register"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "3.2 Cumulative Grade Point Average (CGPA)",
    "url": "05-glossary-and-faq.html#32-cumulative-grade-point-average-cgpa",
    "content": "Current CGPA (Active Students) $$\\text{CGPA} {\\text{current}} = \\frac{\\sum {j=1}^{m} (\\text{Credit} j \\times \\text{Best\\ GP} j)}{\\sum {j=1}^{m} \\text{Credit} j}$$ Calculated across all distinct completed courses where the student earned $GP 0$. Under the Best Attempt Rule , if a course was attempted"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "3.3 Tuition Billing & Invoice Calculation",
    "url": "05-glossary-and-faq.html#33-tuition-billing-invoice-calculation",
    "content": "$$\\text{Total Invoice Amount} = \\text{Net Tuition} + \\text{Retake Fee} + \\text{Improvement Fee} + \\sum \\text{Fixed Head Amounts} + \\text{Penalties}$$ Where: 1. Regular Tuition Fee: $$\\text{Gross Tuition} = \\text{Program Rate per Credit} \\times \\text{Regular Credits}$$ 2. Tuition Waiver Discount: $$\\"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "3.4 Student Financial Clearance Check",
    "url": "05-glossary-and-faq.html#34-student-financial-clearance-check",
    "content": "$$\\text{Financial Standing} = \\sum {k \\le S} \\text{Ledger Debits} k \\sum {k \\le S} \\text{Ledger Credits} k$$ If $\\text{Financial Standing} \\le 0$: Student is Financially Clear up to Session $S$. If $\\text{Financial Standing} 0$: Student has outstanding dues and is barred from registration and exam a"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4. Frequently Asked Questions (FAQ)",
    "url": "05-glossary-and-faq.html#4-frequently-asked-questions-faq",
    "content": ""
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.1 For Applicants & Prospective Students",
    "url": "05-glossary-and-faq.html#41-for-applicants-prospective-students",
    "content": "Q: I registered on the admission portal, but my name or date of birth is incorrect. Can I change it? A: If your data was auto populated from the Bangladesh Education Board (SSC/HSC) via Teletalk API, it is locked to maintain identity verification with official gazettes. If an official board correcti"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.2 For Students",
    "url": "05-glossary-and-faq.html#42-for-students",
    "content": "Q: Where can I view my semester results on the Student Portal? A: Results are displayed inside your Profile under the Results tab ( /front/student/profile?type=r ) . There is no standalone /front/student/result route. The Results tab displays course by course Letter Grades (LG), Grade Points (GP), c"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.3 For Teachers / Faculty Members",
    "url": "05-glossary-and-faq.html#43-for-teachers-faculty-members",
    "content": "Q: I logged in, but I cannot find my assigned course in the marks entry list. A: Marks entry access requires that your user account is mapped as an active Examiner for that course and section in Class Schedule → Course Offer ( courseoffers.index ). Contact your Department Head or Schedule Admin to v"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.4 For Department Heads",
    "url": "05-glossary-and-faq.html#44-for-department-heads",
    "content": "Q: A student missed the auto registration deadline due to medical leave. How can we register them? A: When auto registration is complete, the student record remains flagged manual = 1 . Academic Office staff can perform a Manual Registration under Academic → Registrations → Registrations → Create ( "
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.5 For Admission Officers",
    "url": "05-glossary-and-faq.html#45-for-admission-officers",
    "content": "Q: The Education Board API timed out during applicant registration. How is the applicant handled? A: When the Teletalk API and fallback scraper both time out, the system registers the applicant with flag board data manual pending verification = 1 . The applicant can log in, but the Admission Officer"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.6 For Academic Office / Registrar Staff",
    "url": "05-glossary-and-faq.html#46-for-academic-office-registrar-staff",
    "content": "Q: Why did auto registration fail for a student with \"Payment is not clear\"? A: EasyMate ERP checks financial clearance via accountClearUpto() . If the student has unpaid tuition or fee balances from any prior semester, auto registration terminates. The student must settle outstanding dues with Acco"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.7 For Accounts Officers",
    "url": "05-glossary-and-faq.html#47-for-accounts-officers",
    "content": "Q: A student qualifies for both a Merit Scholarship (25%) and a Sibling Discount (20%). Does the system combine them into 45%? A: No. EasyMate ERP enforces the policy that waivers do not stack. The WaiverCalculator compares auto waivers against manual waivers and awards whichever percentage is highe"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.8 For Examination Controllers",
    "url": "05-glossary-and-faq.html#48-for-examination-controllers",
    "content": "Q: Why does the system display \"Result is not ready to be published!\"? A: EasyMate ERP enforces that 100% of all courses and sections in that program and semester have completed both teacher submission and Controller approval ( Submission::checkApproval ). If even one section lacks approval, publish"
  },
  {
    "chapter": "05. Glossary & FAQ",
    "title": "05 — Glossary and FAQ",
    "heading": "4.9 For System Administrators",
    "url": "05-glossary-and-faq.html#49-for-system-administrators",
    "content": "Q: How do we initiate a new academic semester in EasyMate ERP? A: Configure Setting ID 1 ( Current Exam Session ) in Administration → Settings . Update Registration Start/End dates (Settings 2 & 3), installment payment deadlines (Settings 4, 5, 14), and admission windows. Q: Can we reverse an errone"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "06 — Screenshots and UI Screen Inventory Checklist",
    "url": "06-screenshots-checklist.html#06-screenshots-and-ui-screen-inventory-checklist",
    "content": ""
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "EasyMate ERP — Interface Screen Inventory & Capture Checklist",
    "url": "06-screenshots-checklist.html#easymate-erp-interface-screen-inventory-capture-checklist",
    "content": "Auditing Notice: This checklist catalogs the 90 core screens, dialogues, forms, and printable reports identified across EasyMate ERP. Verification Boundary: Route mapping confirms the existence of routes, controllers, and blade views in the source code. Route mapping does NOT constitute visual or ru"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "Screen Inventory Summary",
    "url": "06-screenshots-checklist.html#screen-inventory-summary",
    "content": "Module Total Cataloged Screens Route & View Source Mapping Screenshots Captured Capture Status 1. Public Applicant Portal 8 Verified in web routes front.php 0 / 8 Pending Capture 2. Student Portal 9 Verified in web routes front.php 0 / 9 Pending Capture 3. Administration Module 12 Verified in web ro"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "1. Public Applicant Portal Screens",
    "url": "06-screenshots-checklist.html#1-public-applicant-portal-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 1.1 Applicant Portal Home & Register front.applicant.home.index / or /front/applicant/home SSC/HSC Board dropdowns, roll/reg inputs, mobile number, password confirmation, program admission list with fee"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "2. Student Portal Screens",
    "url": "06-screenshots-checklist.html#2-student-portal-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 2.1 Student Login front.student.auth.login /front/student/login Student University Roll Number input, password field, login failure alerts. <span class=\"badge captured\" ✓ Captured</span <a href=\"screens"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "3. Administration Module Screens",
    "url": "06-screenshots-checklist.html#3-administration-module-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 3.1 Admin Dashboard dashboard /dashboard System status metrics, active session badge, quick navigation cards across all academic modules. <span class=\"badge captured\" ✓ Captured</span <a href=\"screensho"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "4. Admission Module Screens",
    "url": "06-screenshots-checklist.html#4-admission-module-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 4.1 Admission Test Config List admissiontestconfigs.index /admissiontestconfigs Configured tests by program and session, test date, time, venue, admit card availability dates. <span class=\"badge capture"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "5. Academic Module Screens",
    "url": "06-screenshots-checklist.html#5-academic-module-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 5.1 Students Master Directory students.index /students Datatable of active students, search by Roll/Name/Session, department filter, status badge. <span class=\"badge captured\" ✓ Captured</span <a href=\""
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "6. Accounts Module Screens",
    "url": "06-screenshots-checklist.html#6-accounts-module-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 6.1 Fee Settings Master feesettings.index /feesettings Matrix of fee rates by Account Head, Program, and Session; per credit tuition rate, fixed semester fees. <span class=\"badge captured\" ✓ Captured</s"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "7. Examination Module Screens",
    "url": "06-screenshots-checklist.html#7-examination-module-screens",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 7.1 Assessment Rules Setup assessmentrules.index /assessmentrules Assessment weight profiles: Attendance, CT/Continuous, Midterm, Final percentage allocations by course. Pending (Not captured) 7.2 Cours"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "8. Schedule Module Screens (Class Schedule)",
    "url": "06-screenshots-checklist.html#8-schedule-module-screens-class-schedule",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 8.1 Campus Rooms Management rooms.index / create /rooms Room number, building, seating capacity, facility type (Lecture Room, Computer Lab, Engineering Lab). <span class=\"badge captured\" ✓ Captured</spa"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "9. Reports & University Documents",
    "url": "06-screenshots-checklist.html#9-reports-university-documents",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements & Audit Focus Screenshot Status 9.1 Semester Registration Report report.registration.index /report/registration Total registered students by program and semester, course enrollment counts, retake vs regular statistics. <span class=\"ba"
  },
  {
    "chapter": "06. Screenshots Checklist",
    "title": "06 — Screenshots Checklist",
    "heading": "Visual Capture Execution Instructions",
    "url": "06-screenshots-checklist.html#visual-capture-execution-instructions",
    "content": "For implementation teams executing visual UI captures in a live test environment: 1. Ensure a local or staging web server is running ( php artisan serve on port 8000). 2. Seed the database with representative demo records ( php artisan db:seed ). 3. Capture full window or element level screenshots f"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "Technical Verification & Audit Report",
    "url": "verification-report.html#technical-verification-audit-report",
    "content": ""
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "EasyMate ERP — Codebase Analysis, Scope Boundaries & Operational Audit",
    "url": "verification-report.html#easymate-erp-codebase-analysis-scope-boundaries-operational-audit",
    "content": "System: EasyMate ERP Client: Varendra University Audit Date: October 2026 Lead Auditor: Senior Business Analyst & University ERP Functional Consultant Target Audience: University Leadership, Registrar, Examination Controller, Director of ICT, and EasyMate System Administrators"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "1. Executive Summary",
    "url": "verification-report.html#1-executive-summary",
    "content": "This verification report presents a comprehensive technical and functional audit of the EasyMate ERP codebase implemented for Varendra University. The investigation evaluated routes, controllers, models, policies, database migrations, database seeders, console commands, and blade templates to establ"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "Summary Statistics & Verification Classification",
    "url": "verification-report.html#summary-statistics-verification-classification",
    "content": "In accordance with strict audit requirements, all audited capabilities are classified under the following rigorous verification statuses: Verification Classification Item Count / Scope Details & Evidentiary Basis Verified in Source Code 162 discrete capabilities Confirmed in routes, controllers, mod"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "2. Scope Boundaries & HRM Separation",
    "url": "verification-report.html#2-scope-boundaries-hrm-separation",
    "content": "A primary mandate of this audit is to strictly enforce the boundary between EasyMate ERP and external institutional software."
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "Verified Architectural Boundary: EasyMate ERP vs HRM",
    "url": "verification-report.html#verified-architectural-boundary-easymate-erp-vs-hrm",
    "content": "┌────────────────────────────────────────────────────────┐ │ VARENDRA UNIVERSITY IT ECOSYSTEM │ ├────────────────────────────┬───────────────────────────┤ │ EASYMATE ERP │ EXTERNAL HRM SYSTEM │ │ (ACADEMIC & STUDENT ERP) │ (HUMAN RESOURCES) │ ├────────────────────────────┼───────────────────────────"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "Audit Findings on Human Resource Management",
    "url": "verification-report.html#audit-findings-on-human-resource-management",
    "content": "1. Zero HRM Routes: A full audit of all 14 route files ( web.php , web routes .php , api.php ) confirmed zero routes for employee payroll, salary disbursement, staff leave applications, employee biometric clock in, recruitment, or HR onboarding. 2. Role of the users Table: The User model ( app/User."
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3. Module-by-Module Verification Matrix",
    "url": "verification-report.html#3-module-by-module-verification-matrix",
    "content": ""
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.1 Administration Module (`Administrator` Namespace)",
    "url": "verification-report.html#31-administration-module-administrator-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes administrator.php , app/Http/Controllers/Administrator/ Verified Capabilities: Faculty, Department, and Program management ( FacultiesController , DepartmentsController , ProgramsController ). Program Versio"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.2 Admission Module (`Admission` & `Front\\Applicant` Namespaces)",
    "url": "verification-report.html#32-admission-module-admission-frontapplicant-namespaces",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes admission.php , web routes front.php , app/Libs/BoardData.php Verified Capabilities: Automated Board Verification: Teletalk API integration ( BoardData.php ) with fallback web scraper ( BoardDataScrap.php )."
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.3 Academic Module (`Academic` Namespace)",
    "url": "verification-report.html#33-academic-module-academic-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes academic.php , app/Libs/AutoRegistration.php Verified Capabilities: Student Directory ( StudentsController ): Roll assignment, status tracking, login profile creation. Course Exemptions ( ExemptedCoursesCont"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.4 Accounts Module (`Accounts` Namespace)",
    "url": "verification-report.html#34-accounts-module-accounts-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes accounts.php , app/Libs/GenerateInvoice.php , app/Invoice.php , app/Ledger.php Verified Capabilities: Dynamic Fee Engine ( FeeSettingsController ): Fee rates by Account Head, Program, and Session. Tuition In"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.5 Examination Module (`Exam` Namespace)",
    "url": "verification-report.html#35-examination-module-exam-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime; Requires DB Grade Scale Confirmation) Code Reference: routes/web routes exam.php , app/Http/Controllers/Exam/ , app/Mark.php , app/Grade.php Verified Capabilities: Assessment Weight Configurations ( assessments , assessmentrules in Academic "
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.6 Schedule Module (`Schedule` Namespace)",
    "url": "verification-report.html#36-schedule-module-schedule-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes schedule.php , app/Http/Controllers/Schedule/ Verified Capabilities: Infrastructure Management: Rooms and seating capacities ( RoomsController ), time slots ( SlotsController ). Course Offerings: Section spl"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.7 Reports Module (`Report` Namespace)",
    "url": "verification-report.html#37-reports-module-report-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes report.php , app/Http/Controllers/Report/ Verified Capabilities: Registration Reports: Enrollment summaries, dropouts, individual registrations, non collegiate lists. Accounts Reports: Receivables, bank wise"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "3.8 Portals & Public Services (`Front` Namespace)",
    "url": "verification-report.html#38-portals-public-services-front-namespace",
    "content": "Status: Verified in Source Code (UI Unverified in Runtime) Code Reference: routes/web routes front.php , app/Http/Controllers/Front/ Verified Capabilities: Public Applicant Portal: Registration, board data sync, application checkout, admit card download. Student Portal: Separate authentication ( fro"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "4. Security, Access Control & Authorization Audit",
    "url": "verification-report.html#4-security-access-control-authorization-audit",
    "content": ""
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "4.1 Authentication Architecture",
    "url": "verification-report.html#41-authentication-architecture",
    "content": "EasyMate ERP utilizes three distinct authentication mechanisms: 1. Administrative / Faculty Guard ( web ): Standard session authentication. Mandatory initial password change enforced via password reset required . 2. Student Portal Guard ( auth.student ): Authenticates students via University Roll Nu"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "4.2 Role-Based Access Control (RBAC) & Hardcoded Role IDs",
    "url": "verification-report.html#42-role-based-access-control-rbac-hardcoded-role-ids",
    "content": "Role ID 1 (Admin): Validated via $user isAdmin() . Grants unrestricted system wide overrides and undo operations. Role ID 7 (Department Head): Validated via $user isHead() . Grants departmental oversight access. Role ID 11 (Examination Controller): Validated via $user isController() . Grants marks a"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "4.3 Data Scoping by Faculty and Department",
    "url": "verification-report.html#43-data-scoping-by-faculty-and-department",
    "content": "Non admin users are scoped to their assigned faculties and departments . Controllers automatically filter program dropdowns and student lists: $programs = Program::whereIn('department id', auth() user() departmentIds()) get(); Staff cannot view or alter student records outside their authorized acade"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "5. Data Integrity & Business Logic Safeguards",
    "url": "verification-report.html#5-data-integrity-business-logic-safeguards",
    "content": "The audit verified the following business logic safeguards in the source code: 1. The 7 Year Degree Duration Limit ( app/Libs/AutoRegistration.php ): Students exceeding 7 calendar years from intake are barred from automated registration ( $student is7YearsPlus($exam session) ). 2. Financial Clearanc"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "6. Identified Operational Nuances & System Limitations",
    "url": "verification-report.html#6-identified-operational-nuances-system-limitations",
    "content": "Observation / Area Nature of Finding Operational Risk Verification & Mitigation Guidance Screenshot Verification Status 0 of 90 screenshots captured Visual layouts, form styling, and responsiveness cannot be confirmed without visual evidence. Mark all 90 screens as \"Pending Capture\". Screen inventor"
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "7. Audit Sign-off & Verification Limitations Statement",
    "url": "verification-report.html#7-audit-sign-off-verification-limitations-statement",
    "content": "This report documents the verification of the EasyMate ERP codebase through static source code analysis, route inspection, database migration and seeder auditing, and view template inspection."
  },
  {
    "chapter": "07. Verification Report",
    "title": "Technical Verification Report",
    "heading": "Key Verification Disclaimers:",
    "url": "verification-report.html#key-verification-disclaimers",
    "content": "1. Source Code Baseline: All documented modules, routes, and business logic described herein are verified in the source code . 2. Runtime & Visual Verification Pending: Because no active web application server or live database instance was executed during this audit, zero runtime UI screens or scree"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "EasyMate ERP — Comprehensive User Manual & Operational Reference",
    "url": "user-manual.html#easymate-erp-comprehensive-user-manual-operational-reference",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Varendra University",
    "url": "user-manual.html#varendra-university",
    "content": "Document Version: 1.0 Audit & Publication Date: October 2026 System Architecture: EasyMate ERP (Laravel Academic & Student Information System) Verification Baseline: Comprehensive Source Code, Route, Migration, and Policy Audit"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Executive Summary & Institutional Scope",
    "url": "user-manual.html#executive-summary-institutional-scope",
    "content": "This comprehensive user manual provides the authoritative operational reference for EasyMate ERP at Varendra University. It documents end to end academic operations, system administration, student admissions, fee structures, examinations, and graduation processing."
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Scope Boundaries & HRM Separation",
    "url": "user-manual.html#scope-boundaries-hrm-separation",
    "content": "┌────────────────────────────────────────────────────────────────────────────────────────┐ │ SYSTEM SCOPE & BOUNDARIES │ ├─────────────────────────────────────────────────┬──────────────────────────────────────┤ │ EASYMATE ERP │ EXTERNAL HRM SYSTEM │ │ (Documented in this Manual) │ (Excluded from Sc"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Verification Classifications & Audit Legend",
    "url": "user-manual.html#verification-classifications-audit-legend",
    "content": "Every feature, screen, and workflow in this manual is evaluated against the following six audit verification categories: Status Code Classification Meaning & Criteria VC Verified in source code Logic, route, controller, model, and view confirmed directly in codebase VUI Verified in the running UI Vi"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Table of Contents",
    "url": "user-manual.html#table-of-contents",
    "content": "1. Module 1: Functional Inventory ( 1 functional inventory) 2. Module 2: Complete Student Lifecycle ( 2 complete student lifecycle) 3. Module 3: Role Based Operational Guides ( 3 role based operational guides) 4. Module 4: Cross Module Enterprise Workflows ( 4 cross module enterprise workflows) 5. M"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1. Functional Inventory",
    "url": "user-manual.html#1-functional-inventory",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.1 Administration Module",
    "url": "user-manual.html#11-administration-module",
    "content": "Navigation: Main Navigation → Administration Route File: web routes administrator.php Faculties ( faculties.index ): VC CNV Create, edit, list, and view faculties. Departments ( departments.index ): VC CNV Manage academic departments linked to faculties. Programs ( programs.index ): VC CNV Degree pr"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.2 Admission Module",
    "url": "user-manual.html#12-admission-module",
    "content": "Navigation: Main Navigation → Admission Route File: web routes admission.php Admission Test Configs ( admissiontestconfigs.index ): VC CNV Program and session test dates, venues, admit card windows, form online fee toggle. Applicants Datatable ( applicants.index ): VC CNV Applicant records, payment "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.3 Academic Module",
    "url": "user-manual.html#13-academic-module",
    "content": "Navigation: Main Navigation → Academic Route File: web routes academic.php Students Directory ( students.index ): VC CNV Master directory, roll number assignment, login profile generation. Exempted Courses ( exemptedcourses.index ): VC CNV External credit transfers; credits count toward degree but e"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.4 Accounts Module",
    "url": "user-manual.html#14-accounts-module",
    "content": "Navigation: Main Navigation → Accounts Route File: web routes accounts.php Fee Settings ( feesettings.index ): VC CNV Fee rates by Account Head, Program, and Session. Tuition Billing ( GenerateInvoice.php ): VC CNV Automated calculation: Regular Tuition (Rate × Credits), Retake Tuition (Rate × 50% ×"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.5 Examination Module",
    "url": "user-manual.html#15-examination-module",
    "content": "Navigation: Main Navigation → Exam Route File: web routes exam.php Assessment Rules ( assessmentrules.index in Academic): VC CNV Component weight allocations (Attendance, CT, Midterm, Final). Course Examiners ( examiners.index ): VC CNV Maps instructors to course offerings with marks entry authoriza"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.6 Class Schedule Module",
    "url": "user-manual.html#16-class-schedule-module",
    "content": "Navigation: Main Navigation → Class Schedule Route File: web routes schedule.php Rooms & Slots ( rooms.index , slots.index ): VC CNV Physical lecture rooms, computer labs, and time slot periods. Course Offers & Merges ( courseoffers.index ): VC CNV Section splits and instructor mappings. Routine Bui"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.7 Reports Module",
    "url": "user-manual.html#17-reports-module",
    "content": "Navigation: Main Navigation → Reports Route File: web routes report.php Registration Reports: Summary, dropouts, individual registrations, non collegiate attendance lists, section rosters. Accounts Reports: Receivables, bank wise collections, pending installments, revenue summaries. Student Reports:"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "1.8 Student & Applicant Portals",
    "url": "user-manual.html#18-student-applicant-portals",
    "content": "Route File: web routes front.php Namespace: Front Applicant Portal ( /front/applicant/ ): Public registration, Teletalk API board sync, 5 section profile, program application, and admit card download. Student Portal ( /front/student/ ): Roll based authentication, personal profile (tabs: Information,"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "2. Complete Student Lifecycle (শিক্ষার্থীর পূর্ণাঙ্গ জীবনচক্র)",
    "url": "user-manual.html#2-complete-student-lifecycle-শকষরথর-পরণঙগ-জবনচকর",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "02 — Student Lifecycle (শিক্ষার্থীর পূর্ণাঙ্গ জীবনচক্র)",
    "url": "user-manual.html#02-student-lifecycle-শকষরথর-পরণঙগ-জবনচকর",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "EasyMate ERP — ভর্তি আবেদন থেকে সমাবর্তন পর্যন্ত ধাপভিত্তিক নির্দেশিকা",
    "url": "user-manual.html#easymate-erp-ভরত-আবদন-থক-সমবরতন-পরযনত-ধপভততক-নরদশক",
    "content": "নন টেকনিক্যাল গাইড: বরেন্দ্র বিশ্ববিদ্যালয়ে একজন শিক্ষার্থী ভর্তি আবেদন করা থেকে শুরু করে ক্লাস, পরীক্ষা, ফলাফল এবং সার্টিফিকেট পাওয়া পর্যন্ত প্রতিটি ধাপ খুব সহজ বাংলায় এবং স্ক্রিনশট সহ নিচে বর্ণনা করা হলো।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "পূর্ণাঙ্গ জীবনচক্রের চিত্ররূপ (Student Lifecycle Overview)",
    "url": "user-manual.html#পরণঙগ-জবনচকরর-চতররপ-student-lifecycle-overview",
    "content": "┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │ ধাপ ১ │────▶│ ধাপ ২ │────▶│ ধাপ ৩ │────▶│ ধাপ ৪ │ │ অনলাইন ভর্তি │ │ বোর্ড যাচাই ও │ │ সিলেবাস ও কোর্স │ │ সেমিস্টার কোর্স │ │ আবেদন │ │ ভর্তি পরীক্ষা │ │ কনফিগারেশন │ │ রেজিস্ট্রেশন │ └─────────────────┘ └────────────"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ১: অনলাইনে ভর্তির আবেদন (Stage 1: Applying for Admission)",
    "url": "user-manual.html#ধপ-১-অনলইন-ভরতর-আবদন-stage-1-applying-for-admission",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "ভর্তিচ্ছু শিক্ষার্থী (Applicant): ঘরে বসে বা যে কোনো স্থান থেকে অনলাইনে আবেদন করবেন। সিস্টেম (EasyMate API): শিক্ষা বোর্ডের সার্ভার থেকে স্বয়ংক্রিয়ভাবে প্রার্থীর ফলাফল যাচাই করবে।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "user-manual.html#কভব-কজ-করবন",
    "content": "১.১ আবেদন পোর্টালে প্রবেশ ব্রাউজারে http://localhost:8083/front/applicant/home ঠিকানায় যান। হোম পেজে চলমান সেমিস্টার (যেমন: Summer 2026 ), প্রোগ্রামসমূহ এবং টিউশন ফি এর বিবরণ দেখা যাবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture<"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ২: ভর্তি যাচাই ও শিক্ষার্থী হিসেবে অন্তর্ভুক্তি (Stage 2: Admission & Enrollment)",
    "url": "user-manual.html#ধপ-২-ভরত-যচই-ও-শকষরথ-হসব-অনতরভকত-stage-2-admission-enrollment",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "ভর্তি শাখা (Admission Officer): আবেদনপত্র ও কাগজপত্র যাচাই এবং মেধা তালিকা প্রস্তুতকরণ। রেজিস্ট্রার শাখা: চূড়ান্তভাবে নির্বাচিত প্রার্থীকে স্থায়ী রোল নম্বর প্রদান।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "user-manual.html#কভব-কজ-করবন",
    "content": "২.১ ভর্তি পরীক্ষার শিডিউল কনফিগারেশন ভর্তি অফিসার Admission → Admission Test Configs থেকে পরীক্ষার তারিখ, সময় ও ভেন্যু নির্ধারণ করেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"screenshot filename\" screenshots/"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৩: বিভাগ, সিলেবাস ও কোর্স সেটআপ (Stage 3: Program & Syllabus Setup)",
    "url": "user-manual.html#ধপ-৩-বভগ-সলবস-ও-করস-সটআপ-stage-3-program-syllabus-setup",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "সিস্টেম অ্যাডমিন: অনুষদ, বিভাগ ও প্রোগ্রাম তৈরি। অ্যাকাডেমিক শাখা: প্রোগ্রামের সিলেবাস, কোর্সের ক্রেডিট ও মূল্যায়ন পদ্ধতি যুক্ত করা। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"screenshot filename\" screenshots/0"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৪: সেমিস্টার কোর্স রেজিস্ট্রেশন (Stage 4: Semester Course Registration)",
    "url": "user-manual.html#ধপ-৪-সমসটর-করস-রজসটরশন-stage-4-semester-course-registration",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "অ্যাকাডেমিক শাখা: ব্যাচভিত্তিক স্বয়ংক্রিয় কোর্স রেজিস্ট্রেশন (Auto Registration)। শিক্ষার্থী: রিটেক বা ইমপ্রুভমেন্ট কোর্সের জন্য নিজের পোর্টাল থেকে আবেদন।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কীভাবে কাজ করবেন?",
    "url": "user-manual.html#কভব-কজ-করবন",
    "content": "1. অটো রেজিস্ট্রেশন ইঞ্জিন: নতুন সেমিস্টার শুরুর আগে সিস্টেম সকল নিয়মিত ছাত্র ছাত্রীকে স্বয়ংক্রিয়ভাবে পরবর্তী সেমিস্টারে প্রমোট করে তাদের সিলেবাস অনুযায়ী কোর্স এনরোল করে দেয়। 2. ৫০% ক্রেডিট পাসের শর্ত: পূর্ববর্তী সেমিস্টারের অন্তত ৫০% ক্রেডিট পাস না করলে ছাত্র প্রমোট হয় না, সে আগের সেমিস্টারেই থেকে "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৫: টিউশন ফি নির্ধারণ, ইনভয়েস ও পেমেন্ট (Stage 5: Fee Invoicing & Payment)",
    "url": "user-manual.html#ধপ-৫-টউশন-ফ-নরধরণ-ইনভয়স-ও-পমনট-stage-5-fee-invoicing-payment",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "হিসাব শাখা (Accounts Officer): ফি ইনভয়েস তৈরি, স্কলারশিপ/ওয়েভার সমন্বয় এবং ব্যাংক পেমেন্ট পোস্টিং। শিক্ষার্থী: ব্যাংকে কিস্তির টাকা জমা দেওয়া।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ফি হিসাব করার সহজ নিয়ম",
    "url": "user-manual.html#ফ-হসব-করর-সহজ-নয়ম",
    "content": "1. নিয়মিত টিউশন ফি: প্রতি ক্রেডিটের ফি × মোট ক্রেডিট সংখ্যা (যেমন: ৩ ক্রেডিট × ২,৫০০ টাকা = ৭,৫০০ টাকা)। 2. রিটেক কোর্স ফি: নিয়মিত ফির ৫০%। 3. ইমপ্রুভমেন্ট কোর্স ফি: নিয়মিত ফির ২৫%। 4. স্কলারশিপ/ওয়েভার: জিপিএ বা কোটা অনুযায়ী টিউশন ফি থেকে ডিসকাউন্ট বাদ দিয়ে নেট প্রদেয় টাকা নির্ধারিত হয়। <figure clas"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৬: ক্লাস রুটিন ও পাঠদান (Stage 6: Classes & Teaching)",
    "url": "user-manual.html#ধপ-৬-কলস-রটন-ও-পঠদন-stage-6-classes-teaching",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "ডিপার্টমেন্ট শিডিউলার: রুম, শিক্ষক ও সময়সূচি মিলিয়ে রুটিন তৈরি। শিক্ষক ও শিক্ষার্থী: যার যার পোর্টালে সাপ্তাহিক ক্লাস রুটিন দেখা। রুটিন তৈরির নিয়ম ও কনফ্লিক্ট চেকার Class Schedule → Schedules থেকে রবি বৃহস্পতিবারের সময়সূচিতে শিক্ষক ও রুম বসানো হয়। যদি একই সময়ে কোনো শিক্ষককে দুটি ক্লাসে বা একই রুমে দ"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৭: পরীক্ষা, মূল্যায়ন ও ফলাফল প্রকাশ (Stage 7: Examination & Results)",
    "url": "user-manual.html#ধপ-৭-পরকষ-মলযয়ন-ও-ফলফল-পরকশ-stage-7-examination-results",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "কোর্স শিক্ষক: ক্লাসের উপস্থিতি, ক্লাস টেস্ট, মিডটার্ম ও ফাইনাল পরীক্ষার নম্বর এন্ট্রি ও লক করা। পরীক্ষা নিয়ন্ত্রক: নম্বর অনুমোদন (Approve) ও সেমিস্টার রেজাল্ট প্রকাশ (Publish)। ৭.১ নম্বর এন্ট্রি ও অনুমোদন 1. শিক্ষক Exam → Marks এ গিয়ে কোর্স সিলেক্ট করে নম্বর ইনপুট দেন এবং Submit বাটন চেপে লক করেন। "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ধাপ ৮: গ্র্যাজুয়েশন, ক্লিয়ারেন্স ও সনদপত্র প্রদান (Stage 8: Graduation & Documents)",
    "url": "user-manual.html#ধপ-৮-গরযজয়শন-কলয়রনস-ও-সনদপতর-পরদন-stage-8-graduation-documents",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কে সম্পাদন করবেন?",
    "url": "user-manual.html#ক-সমপদন-করবন",
    "content": "শিক্ষার্থী: প্রয়োজনীয় সনদের জন্য অনলাইনে আবেদন। হিসাব ও লাইব্রেরি শাখা: বকেয়া ফি ও বই ফেরত ক্লিয়ারেন্স প্রদান। রেজিস্ট্রার শাখা: ট্রান্সক্রিপ্ট ও সার্টিফিকেট প্রিন্ট এবং প্রদান। ৮.১ সনদের জন্য আবেদন ও ক্লিয়ারেন্স 1. শিক্ষার্থী তার পোর্টাল থেকে Apply for Documents এ গিয়ে ট্রান্সক্রিপ্ট বা সার্টিফিকেট"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "3. Role-Based Operational Guides (ভূমিকা-ভিত্তিক ব্যবহার নির্দেশিকা)",
    "url": "user-manual.html#3-role-based-operational-guides-ভমক-ভততক-বযবহর-নরদশক",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "03 — Role-Based User Operating Manual",
    "url": "user-manual.html#03-role-based-user-operating-manual",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "EasyMate ERP — সহজ ব্যবহার নির্দেশিকা ও ভূমিকা-ভিত্তিক গাইডলাইন",
    "url": "user-manual.html#easymate-erp-সহজ-বযবহর-নরদশক-ও-ভমক-ভততক-গইডলইন",
    "content": "ব্যবহারকারীর জন্য নির্দেশনা: এই ম্যানুয়ালটি এমনভাবে তৈরি করা হয়েছে যাতে কোনো টেকনিক্যাল জ্ঞান ছাড়াই বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষক, কর্মকর্তা, হিসাবরক্ষক, শিক্ষার্থী এবং কর্মচারীরা খুব সহজে তাদের দৈনন্দিন কাজ সম্পাদন করতে পারেন। প্রতিটি সেকশনে আসল সিস্টেমের স্ক্রিনশট এবং ধাপে ধাপে কাজ করার নিয়ম যুক"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "ভূমিকা ও ব্যবহাকারী রোল তালিকা (User Personas)",
    "url": "user-manual.html#ভমক-ও-বযবহকর-রল-তলক-user-personas",
    "content": "ক্রম ব্যবহারকারী রোল (Role) প্রধান দায়িত্বসমূহ প্রধান মেনু অ্যাক্সেস 1 সিস্টেম অ্যাডমিনিস্ট্রেটর (System Admin) নতুন ইউজার তৈরি, রোল দেওয়া, সেশন ও ডেডলাইন সেটিংস Administration, Settings, Logs, Undo 2 শিক্ষক / অনুষদ সদস্য (Teacher / Examiner) ক্লাস রুটিন দেখা, কন্টিনিউয়াস ও ফাইনাল মার্কস এন্ট্রি ও ল"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 1: সিস্টেম অ্যাডমিনিস্ট্রেটর (System Administrator)",
    "url": "user-manual.html#role-1-সসটম-অযডমনসটরটর-system-administrator",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "কেন্দ্রীয় সিস্টেমের নিরাপত্তা ও ব্যবহারকারী ব্যবস্থাপনা। নতুন সেমিস্টারের সেশন নাম ও ফি প্রদানের ডেডলাইন কনফিগার করা। ভুলবশত অনুমোদিত মার্কস বা রেজাল্ট সংশোধনের জন্য ইমার্জেন্সি রিভার্সাল (Undo)। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live Syste"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ১.১: নতুন ইউজার তৈরি ও রোল নির্ধারণ (User Account Creation)",
    "url": "user-manual.html#করযপদধত-১১-নতন-ইউজর-তর-ও-রল-নরধরণ-user-account-creation",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Administration → Users এ ক্লিক করুন। 2. নতুন যুক্ত করতে: উপরের ডানপাশে থাকা Create / Add User বাটনে ক্লিক করুন। 3. তথ্য পূরণ করুন: Name: ব্যবহারকারীর পূর্ণ নাম লিখুন। Email: ব্যবহারকারীর অফিশিয়াল ইমেইল অ্যাড্রেস লিখুন (এটি লগইন ইউজারনেম হিসেবে ব্যবহৃত হবে)। Departm"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ১.২: সেমিস্টার সেটিংস ও ফি জমার ডেডলাইন নির্ধারণ (Semester Settings)",
    "url": "user-manual.html#করযপদধত-১২-সমসটর-সটস-ও-ফ-জমর-ডডলইন-নরধরণ-semester-settings",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Administration → Settings এ যান। 2. প্রয়োজনীয় ফিল্ড পরিবর্তন করুন: Setting ID 1 (Current Session): চলমান সেশনের নাম আপডেট করুন (যেমন: Summer 2026 )। Setting ID 2 & 3 (Registration Window): কোর্স রেজিস্ট্রেশন শুরুর এবং শেষ তারিখ দিন। Setting ID 4 & 5 (Payment Deadli"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 2: শিক্ষক ও পরীক্ষক (Teacher / Faculty Member)",
    "url": "user-manual.html#role-2-শকষক-ও-পরকষক-teacher-faculty-member",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "নিজের কোর্সের জন্য বরাদ্দকৃত ক্লাস রুটিন দেখা। শিক্ষার্থীদের ক্লাসের উপস্থিতি (Attendance), ক্লাস টেস্ট (CT), মিডটার্ম ও ফাইনাল পরীক্ষার নম্বর এন্ট্রি করা। মার্কস এন্ট্রি শেষে লক/সাবমিট করা যাতে নম্বর অপরিবর্তিত থাকে।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ২.১: পরীক্ষার নম্বর এন্ট্রি করার নিয়ম (Marks Entry)",
    "url": "user-manual.html#করযপদধত-২১-পরকষর-নমবর-এনটর-করর-নয়ম-marks-entry",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Exam → Marks এ ক্লিক করুন। 2. কোর্স নির্বাচন করুন: Exam Session: যেমন: Summer 2026 Program: যেমন: B.Sc. in CSE বা BA (Hons) in English Semester: সেমিস্টার নির্বাচন করুন Course & Section: নির্দিষ্ট কোর্স কোড এবং সেকশন (A, B বা C) বাছাই করুন। 3. Show বাটনে ক্লিক করলে"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ২.২: মার্কস সাবমিট ও লক করা (Submit & Freeze)",
    "url": "user-manual.html#করযপদধত-২২-মরকস-সবমট-ও-লক-কর-submit-freeze",
    "content": "সমস্ত নম্বর সঠিকভাবে দেওয়া শেষ হলে পেজের নিচে থাকা Submit Marks বাটনে চাপ দিন। কনফার্মেশন পপ আপে নিশ্চিত করুন। ⚠️ সতর্কতা: একবার সাবমিট করার পর শিক্ষক নিজে আর নম্বর পরিবর্তন করতে পারবেন না। ভুল হলে অ্যাডমিন বা পরীক্ষা নিয়ন্ত্রকের সাথে যোগাযোগ করতে হবে।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 3: ভর্তি শাখা (Admission Officer)",
    "url": "user-manual.html#role-3-ভরত-শখ-admission-officer",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "নতুন ভর্তির জন্য সেশন ও ভর্তি পরীক্ষার তারিখ কনফিগার করা। অনলাইনে আবেদনকারী প্রার্থীদের তালিকা দেখা এবং মোবাইল নম্বর দিয়ে সার্চ করা। জাতীয় শিক্ষা বোর্ডের ডাটা (SSC/HSC GPA ও তথ্য) ভেরিফিকেশন যাচাই করা। নির্বাচিত আবেদনকারীদের রোল প্রদান করে স্থায়ী ছাত্র হিসেবে সিস্টেমে তালিকাভুক্ত (Transfer) করা।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৩.১: ভর্তিচ্ছুদের আবেদনপত্র যাচাই (Reviewing Applicants)",
    "url": "user-manual.html#করযপদধত-৩১-ভরতচছদর-আবদনপতর-যচই-reviewing-applicants",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Admission → Applicants এ যান। 2. আবেদনকারী খুঁজুন: উপরের সার্চ বক্সে প্রার্থীর Mobile Number অথবা Tracking ID লিখে এন্টার চাপুন। 3. স্ট্যাটাস চেক করুন: Payment Status: আবেদন ফি পরিশোধ হয়েছে কি না (Paid/Pending)। Board Verification: শিক্ষা বোর্ডের ডাটার সাথে মিলেছে "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৩.২: আবেদনকারীকে স্থায়ী ছাত্রে রূপান্তর (Transfer to Student)",
    "url": "user-manual.html#করযপদধত-৩২-আবদনকরক-সথয়-ছতর-রপনতর-transfer-to-student",
    "content": "1. প্রার্থী ভর্তি ফি পরিশোধ করলে এবং সকল কাগজপত্র ঠিক থাকলে Admission → Transfer মেনুতে যান। 2. প্রার্থীর ট্র্যাকিং নম্বর সিলেক্ট করুন। 3. সিস্টেম স্বয়ংক্রিয়ভাবে তাকে Student মডিউলে নিয়ে যাবে এবং তাকে একটি স্থায়ী রোল নম্বর বরাদ্দের অপশন দেবে।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 4: হিসাব শাখা (Accounts Officer)",
    "url": "user-manual.html#role-4-হসব-শখ-accounts-officer",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "প্রতিটি প্রোগ্রামের জন্য ক্রেডিট ফি ও সেমিস্টার ফি নির্ধারণ করা। সেমিস্টার কোর্স অনুযায়ী স্বয়ংক্রিয় টিউশন ইনভয়েস তৈরি ও কিস্তি ভাগ করা। ব্যাংকে টাকা জমা হলে ভাউচার দেখে সিস্টেমে পেমেন্ট পোস্টিং দেওয়া। শিক্ষার্থীদের স্কলারশিপ ও ওয়েভার ডিসকাউন্ট সমন্বয় করা। স্টুডেন্ট লেজার দেখে যে কোনো শিক্ষার্থীর আর্"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৪.১: ফি সেটিংস কনফিগার করা (Fee Settings)",
    "url": "user-manual.html#করযপদধত-৪১-ফ-সটস-কনফগর-কর-fee-settings",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Fee Settings এ যান। 2. নির্দিষ্ট প্রোগ্রাম ও সেশন সিলেক্ট করুন। 3. টিউশন ফি (প্রতি ক্রেডিটের হার), ল্যাব ফি ও অন্যান্য চার্জ ইনপুট দিয়ে সেভ করুন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Ca"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৪.২: শিক্ষার্থীর ইনভয়েস দেখা ও পেমেন্ট পোস্টিং (Invoices & Payment Posting)",
    "url": "user-manual.html#করযপদধত-৪২-শকষরথর-ইনভয়স-দখ-ও-পমনট-পসট-invoices-payment-posting",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Invoices এ যান। 2. ইনভয়েস নম্বর অথবা শিক্ষার্থীর Roll Number দিয়ে সার্চ করুন। 3. তালিকা থেকে শিক্ষার্থীর ইনভয়েস দেখতে পাবেন: Gross Amount: মোট নির্ধারিত ফি। Waiver: অনুমোদিত ছাড় বা স্কলারশিপের পরিমাণ। Net Payable: প্রকৃত প্রদেয় টাকা। Installments: কিস্তি"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৪.৩: শিক্ষার্থীর অর্থনৈতিক খতিয়ান যাচাই (Student Financial Ledger)",
    "url": "user-manual.html#করযপদধত-৪৩-শকষরথর-অরথনতক-খতয়ন-যচই-student-financial-ledger",
    "content": "1. মেনু লোকেশন: বামপাশের মেনু থেকে Accounts → Ledgers এ যান। 2. শিক্ষার্থীর রোল নম্বর লিখুন। 3. সিস্টেমে ওই শিক্ষার্থীর ভর্তির দিন থেকে আজ পর্যন্ত সকল ডেবিট (ফি ধার্য) এবং ক্রেডিট (টাকা জমা) ট্রানজ্যাকশন এবং বর্তমান বকেয়া (Balance) নিখুঁতভাবে চলে আসবে। <figure class=\"screenshot figure\" <div class=\"s"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 5: পরীক্ষা নিয়ন্ত্রক (Controller of Examinations)",
    "url": "user-manual.html#role-5-পরকষ-নযনতরক-controller-of-examinations",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "শিক্ষকদের সাবমিট করা কোর্সের নম্বর পরীক্ষা করা এবং অনুমোদন (Approve) দেওয়া। সেমিস্টারের শতভাগ কোর্সের নম্বর জমা হওয়ার পর চূড়ান্ত রেজাল্ট প্রক্রিয়াকরণ ও প্রকাশ করা। অফিশিয়াল ট্যাবুলেশন শিট, গেজেট ও গ্রেড শিট প্রিন্ট বা সংরক্ষণ করা।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৫.১: কোর্সের নম্বর অনুমোদন (Marks Approval)",
    "url": "user-manual.html#করযপদধত-৫১-করসর-নমবর-অনমদন-marks-approval",
    "content": "1. মেনু লোকেশন: Exam → Marks → Approve এ যান। 2. নির্দিষ্ট সেমিস্টার, প্রোগ্রাম ও কোর্স সেকশন সিলেক্ট করুন। 3. পরীক্ষকের দেওয়া সর্বোচ্চ, সর্বনিম্ন ও গড় নম্বর পর্যবেক্ষণ করুন। 4. সবকিছু সঠিক থাকলে Approve Marks বাটনে ক্লিক করুন। সাথে সাথে প্রতিটি ছাত্রের লেটার গ্রেড ও গ্রেড পয়েন্ট স্থায়ীভাবে সংরক্ষিত"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৫.২: চূড়ান্ত সেমিস্টার রেজাল্ট প্রকাশ (Result Publication)",
    "url": "user-manual.html#করযপদধত-৫২-চড়নত-সমসটর-রজলট-পরকশ-result-publication",
    "content": "1. মেনু লোকেশন: Exam → Results → Create এ যান। 2. প্রোগ্রাম ও সেমিস্টার নির্বাচন করুন। 3. সিস্টেম স্বয়ংক্রিয়ভাবে যাচাই করবে যে ওই সেমিস্টারের সব কোর্সের নম্বর অনুমোদন হয়েছে কি না। 4. সব নম্বর অনুমোদিত থাকলে সিস্টেম ব্যাচের সকল ছাত্রের SGPA এবং ব্যাচ র‍্যাংক (Rank) স্বয়ংক্রিয়ভাবে ক্যালকুলেট করবে। 5. "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 6: অ্যাকাডেমিক ও রেজিস্ট্রার অফিস (Academic & Registrar Staff)",
    "url": "user-manual.html#role-6-অযকডমক-ও-রজসটরর-অফস-academic-registrar-staff",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "শিক্ষার্থী ডিরেক্টরি বজায় রাখা এবং স্ট্যাটাস ট্র্যাক করা (নিয়মিত, স্থগিত বা বহিষ্কৃত)। সিলেবাস ও কোর্স ক্যাটালগ তৈরি করা। সেমিস্টার কোর্স রেজিস্ট্রেশন সম্পন্ন করা (Auto & Manual Registration)। ট্রান্সক্রিপ্ট, প্রভিশনাল সার্টিফিকেট, টেস্টিমোনিয়াল ও মাইগ্রেশন সার্টিফিকেট ইস্যু করা।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৬.১: শিক্ষার্থী ডিরেক্টরি অনুসন্ধান (Student Directory)",
    "url": "user-manual.html#করযপদধত-৬১-শকষরথ-ডরকটর-অনসনধন-student-directory",
    "content": "1. মেনু লোকেশন: Academic → Students এ যান। 2. সার্চ বারে রোল নম্বর, নাম বা ব্যাচ লিখে সার্চ করুন। 3. প্রার্থীর নামের পাশে থাকা অপশন থেকে তার পূর্ণাঙ্গ তথ্য, অ্যাডভাইজর, সিলেবাস ও রেজিস্ট্রেশন দেখতে পারবেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" "
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৬.২: ট্রান্সক্রিপ্ট ও সার্টিফিকেট তৈরি (Transcripts Generation)",
    "url": "user-manual.html#করযপদধত-৬২-টরনসকরপট-ও-সরটফকট-তর-transcripts-generation",
    "content": "1. মেনু লোকেশন: Academic → Transcripts এ যান। 2. শিক্ষার্থীর রোল নম্বর লিখুন। 3. ট্রান্সক্রিপ্টের ধরন নির্বাচন করুন: Partial Transcript: অধ্যয়নরত শিক্ষার্থীদের জন্য চলমান সেমিস্টার পর্যন্ত প্রাপ্ত ফলাফলের ট্রান্সক্রিপ্ট। Final Transcript: ডিগ্রি সম্পন্নকারী গ্র্যাজুয়েটদের জন্য পূর্ণাঙ্গ ট্রান্সক্রি"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 7: শিক্ষার্থী পোর্টাল নির্দেশিকা (Student Portal Guide)",
    "url": "user-manual.html#role-7-শকষরথ-পরটল-নরদশক-student-portal-guide",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "নিজের রোল ও পাসওয়ার্ড দিয়ে নিজস্ব পোর্টালে লগইন করা। সাপ্তাহিক ক্লাস রুটিন ও রুম নম্বর দেখা। সেমিস্টার ফি, কিস্তির পরিমাণ ও পেমেন্ট হিস্ট্রি দেখা। প্রকাশিত সেমিস্টার পরীক্ষার রেজাল্ট ও গ্রেড দেখা। ট্রান্সক্রিপ্ট বা সনদের জন্য ঘরে বসেই আবেদন করা।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৭.১: স্টুডেন্ট পোর্টালে লগইন করার নিয়ম",
    "url": "user-manual.html#করযপদধত-৭১-সটডনট-পরটল-লগইন-করর-নয়ম",
    "content": "1. ব্রাউজারে http://localhost:8083/front/student/login ঠিকানায় যান। 2. Student ID / Roll: আপনার পূর্ণ রোল নম্বর লিখুন (যেমন: 193011001 )। 3. Password: আপনার পাসওয়ার্ড লিখুন (ডিফল্ট পাসওয়ার্ড হিসেবে জন্ম নিবন্ধন নম্বর বা মোবাইল নম্বর থাকে)। 4. Login বাটনে ক্লিক করুন। <figure class=\"screenshot figure\""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৭.২: প্রোফাইল ও একাডেমিক তথ্য দেখা (Student Profile)",
    "url": "user-manual.html#করযপদধত-৭২-পরফইল-ও-একডমক-তথয-দখ-student-profile",
    "content": "লগইন করার পর সরাসরি আপনার প্রোফাইল পেজ চলে আসবে। এখানে আপনার নাম, বর্তমান সেশন, ব্যাচ, সেমিস্টার, রক্তেল গ্রুপ এবং নির্ধারিত শিক্ষক বা অ্যাডভাইজরের নাম দেখতে পাবেন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span class=\"sc"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৭.৩: পরীক্ষার ফলাফল ও গ্রেড দেখা (Checking Results)",
    "url": "user-manual.html#করযপদধত-৭৩-পরকষর-ফলফল-ও-গরড-দখ-checking-results",
    "content": "1. প্রোফাইলের মেনু থেকে Results ট্যাবে ক্লিক করুন। 2. এখানে আপনার প্রতিটি সেমিস্টারে নেওয়া কোর্সের তালিকা, ক্রেডিট, লেটার গ্রেড (যেমন: A+ , A , A ) এবং গ্রেড পয়েন্ট দেখা যাবে। 3. ডানপাশে প্রতিটি সেমিস্টারের অর্জিত ক্রেডিট ও SGPA স্পষ্টভাবে প্রদর্শিত হবে। <figure class=\"screenshot figure\" <div class="
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৭.৪: ফি ও কিস্তির বিবরণ দেখা (Payments & Invoices)",
    "url": "user-manual.html#করযপদধত-৭৪-ফ-ও-কসতর-ববরণ-দখ-payments-invoices",
    "content": "1. প্রোফাইলের Payments ট্যাবে ক্লিক করুন। 2. আপনার সেমিস্টার ফি এর মোট টাকা, কত টাকা পরিশোধ হয়েছে এবং কত টাকা বকেয়া রয়েছে তা দেখতে পাবেন। 3. কিস্তি অনুযায়ী ফি এর পরিমাণ (যেমন: ১ম কিস্তি ও ২য় কিস্তির ভাগ) পরিষ্কারভাবে দেখা যাবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span c"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৭.৫: ক্লাস রুটিন দেখা (Class Routine)",
    "url": "user-manual.html#করযপদধত-৭৫-কলস-রটন-দখ-class-routine",
    "content": "বামপাশের মেনু থেকে Class Routine অপশনে ক্লিক করলে রবি থেকে বৃহস্পতিবার পর্যন্ত আপনার ক্লাসের সময়, কোর্সের নাম, শিক্ষকের নাম এবং নির্দিষ্ট রুম নম্বর গ্রিড আকারে চলে আসবে। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <span class=\"screenshot tag\" Live System Capture</span <span clas"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Role 8: নতুন আবেদনকারী নির্দেশিকা (Public Applicant Guide)",
    "url": "user-manual.html#role-8-নতন-আবদনকর-নরদশক-public-applicant-guide",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কাজের পরিধি",
    "url": "user-manual.html#কজর-পরধ",
    "content": "বরেন্দ্র বিশ্ববিদ্যালয়ে যেকোনো প্রোগ্রামে অনলাইনে ভর্তির আবেদন করা। এসএসসি ও এইচএসসি পরীক্ষার বোর্ড রোল দিয়ে স্বয়ংক্রিয় ডাটা যাচাই করা। প্রার্থীর ছবি, স্বাক্ষর ও অন্যান্য প্রয়োজনীয় কাগজপত্র আপলোড করা। ভর্তি পরীক্ষার প্রবেশপত্র (Admit Card) ডাউনলোড করা।"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৮.১: অনলাইন রেজিস্ট্রেশন ও আবেদন ফর্ম পূরণ",
    "url": "user-manual.html#করযপদধত-৮১-অনলইন-রজসটরশন-ও-আবদন-ফরম-পরণ",
    "content": "1. ব্রাউজারে http://localhost:8083/front/applicant/home লিংকে প্রবেশ করুন। 2. New Applicant (Sign Up) ট্যাবে ক্লিক করুন। 3. আপনার বোর্ড, এসএসসি ও এইচএসসি পরীক্ষার রোল, রেজিস্ট্রেশন নম্বর, মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে সাইন আপ করুন। <figure class=\"screenshot figure\" <div class=\"screenshot header\" <sp"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "কার্যপদ্ধতি ৮.২: প্রোফাইল তথ্য ও ডকুমেন্ট আপলোড",
    "url": "user-manual.html#করযপদধত-৮২-পরফইল-তথয-ও-ডকমনট-আপলড",
    "content": "1. আপনার মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন। 2. Personal Information, Contact Address, Guardian Information, Education সেকশনগুলো একে একে পূরণ করুন। 3. Attachments সেকশনে পাসপোর্ট সাইজের রঙিন ছবি এবং পরিষ্কার স্বাক্ষর স্ক্যান করে আপলোড করুন। 4. ১০০% প্রোফাইল সম্পন্ন হলে কাঙ্ক্ষিত প্রোগ্রামে আবেদ"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "4. Cross-Module Enterprise Workflows",
    "url": "user-manual.html#4-cross-module-enterprise-workflows",
    "content": "Detailed workflow diagrams, gatekeeping checks, and mathematical formulations connecting Admission, Academic setup, Class Scheduling, Auto Registration, Invoicing, Payment Settlements, Marks Entry, Result Approvals, and Graduation Clearances are documented in Module 2: Complete Student Lifecycle ( 2"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Failure Modes & Remediation Matrix",
    "url": "user-manual.html#failure-modes-remediation-matrix",
    "content": "Failure Mode Module Affected Technical Root Cause in Code Authorized Role Remediation Procedure Auto registration: \"Payment is not clear\" Academic / Accounts Student has unpaid debit entries from prior sessions ( accountClearUpto check failed) Accounts Officer Verify pending bank payments, post miss"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "5. Glossary, Formulas & Operational FAQ",
    "url": "user-manual.html#5-glossary-formulas-operational-faq",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "5.1 Grading Scale Baseline (`database/seeds/GradesTableSeeder.php`)",
    "url": "user-manual.html#51-grading-scale-baseline-databaseseedsgradestableseederphp",
    "content": "Grading Scale Authority Disclaimer RDC : Grade::calculate() dynamically queries rows from the grades table ( Grade::all() ). The table below documents the default database seed configuration. Active grade boundaries, passing cutoffs, and honors criteria must be verified against the live grades datab"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "5.2 Mathematical Models",
    "url": "user-manual.html#52-mathematical-models",
    "content": "Semester Grade Point Average (SGPA): $$\\text{SGPA} = \\frac{\\sum {i=1}^{n} (\\text{Credit} i \\times \\text{GP} i)}{\\sum {i=1}^{n} \\text{Credit} i}$$ Cumulative Grade Point Average (CGPA) — Best Attempt Rule: $$\\text{CGPA} = \\frac{\\sum (\\text{Credits} \\times \\text{Best GP})}{\\text{Syllabus Required Cred"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "5.3 Key Operational FAQs",
    "url": "user-manual.html#53-key-operational-faqs",
    "content": "Q: Where do students view semester results? A: Inside the Student Portal under Profile → Results tab ( /front/student/profile?type=r ) . There is no standalone /front/student/result route. Q: Can a student pay the 2nd installment first? A: No. InvoicesController@posting store strictly blocks posting"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "6. 90-Screen Interface Inventory & Capture Checklist",
    "url": "user-manual.html#6-90-screen-interface-inventory-capture-checklist",
    "content": "Auditing Notice: Route mapping confirms endpoint existence in code. Route mapping does NOT constitute visual or runtime verification. Current Screenshot Status: 0 of 90 screenshots captured. All screens are marked Pending Capture until visual captures are recorded from a live running application env"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Screen Inventory Summary",
    "url": "user-manual.html#screen-inventory-summary",
    "content": "Module Total Screens Route & View Mapping Screenshots Captured Capture Status 1. Public Applicant Portal 8 Verified in web routes front.php 0 / 8 Pending Capture 2. Student Portal 9 Verified in web routes front.php 0 / 9 Pending Capture 3. Administration Module 12 Verified in web routes administrato"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Complete 90-Screen Inventory Table",
    "url": "user-manual.html#complete-90-screen-inventory-table",
    "content": "Screen / View Name Route Name (Codebase) URL Path Key UI Elements Screenshot Status 1.1 Applicant Home & Register front.applicant.home.index / or /front/applicant/home Board dropdowns, roll/reg inputs, fee breakdown Pending (Not captured) 1.2 Applicant Login Modal front.applicant.home.login /front/a"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "7. Technical Verification Report & Audit Findings",
    "url": "user-manual.html#7-technical-verification-report-audit-findings",
    "content": ""
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Verification Summary",
    "url": "user-manual.html#verification-summary",
    "content": "Verified in Source Code: 162 discrete capabilities confirmed in routes, controllers, models, and policies. Verified in Running UI: 0 capabilities (0%). No active web application server or live browser session was executed during this audit. Partially Implemented: 16 capabilities (stubs or incomplete"
  },
  {
    "chapter": "Complete User Manual",
    "title": "Comprehensive User Manual",
    "heading": "Operational Audit Disclaimers & Recommendations",
    "url": "user-manual.html#operational-audit-disclaimers-recommendations",
    "content": "1. Screenshots Capture Pending: All 90 screens cataloged above require physical image capture in a running staging environment ( php artisan serve + php artisan db:seed ) to achieve full visual verification. 2. Grading Scale Dynamic Loading: Grade::calculate() resolves grades dynamically against the"
  }
];
