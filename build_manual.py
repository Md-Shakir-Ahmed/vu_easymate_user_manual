#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
EasyMate ERP — Professional User Manual Generator
Converts Markdown files into a high-end, responsive documentation portal with
live screenshots, global search, dark mode, TOC scrollspy, copy buttons, and print optimization.
"""

import os
import re
import html
import json
import markdown

import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DOCS_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(DOCS_DIR, "assets")
SCREENSHOTS_DIR = os.path.join(DOCS_DIR, "screenshots")
os.makedirs(ASSETS_DIR, exist_ok=True)
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

# Document manifests
CHAPTERS = [
    {
        "id": "readme",
        "file": "README.md",
        "output": "index.html",
        "title": "System Overview & Scope",
        "nav_title": "Overview & Scope",
        "group": "Getting Started",
        "icon": "📌",
        "badge": "Start Here",
        "meta": "Varendra University • EasyMate ERP v1.0 • Scope & Verification Baseline"
    },
    {
        "id": "functional-inventory",
        "file": "01-functional-inventory.md",
        "output": "01-functional-inventory.html",
        "title": "01 — Functional Inventory",
        "nav_title": "01. Functional Inventory",
        "group": "Modules & Specifications",
        "icon": "📋",
        "badge": "9 Modules",
        "meta": "Verified Modules, Submodules, Routes, Controllers & Authorization Matrix"
    },
    {
        "id": "student-lifecycle",
        "file": "02-student-lifecycle.md",
        "output": "02-student-lifecycle.html",
        "title": "02 — Student Lifecycle",
        "nav_title": "02. Student Lifecycle",
        "group": "Modules & Specifications",
        "icon": "🔄",
        "badge": "8 Stages",
        "meta": "Applicant Journey to Graduation Clearance & Document Application"
    },
    {
        "id": "role-based-guides",
        "file": "03-role-based-guides.md",
        "output": "03-role-based-guides.html",
        "title": "03 — Role-Based Guides",
        "nav_title": "03. Role-Based Guides",
        "group": "Modules & Specifications",
        "icon": "👥",
        "badge": "9 Roles",
        "meta": "Step-by-Step Instructions & Verified Menu Paths by User Persona"
    },
    {
        "id": "cross-module-workflows",
        "file": "04-cross-module-workflows.md",
        "output": "04-cross-module-workflows.html",
        "title": "04 — Cross-Module Workflows",
        "nav_title": "04. Cross-Module Workflows",
        "group": "Modules & Specifications",
        "icon": "⚡",
        "badge": "8 Workflows",
        "meta": "Multi-Department Inter-Module Handoffs, Architecture & Invoicing Formulas"
    },
    {
        "id": "glossary-faq",
        "file": "05-glossary-and-faq.md",
        "output": "05-glossary-and-faq.html",
        "title": "05 — Glossary and FAQ",
        "nav_title": "05. Glossary & FAQ",
        "group": "Reference & Audit",
        "icon": "📖",
        "badge": "Reference",
        "meta": "System Terminology, Grading Rules, Fee Equations & 18 Operational FAQs"
    },
    {
        "id": "screenshots-checklist",
        "file": "06-screenshots-checklist.md",
        "output": "06-screenshots-checklist.html",
        "title": "06 — Screenshots Checklist",
        "nav_title": "06. Screenshots Checklist",
        "group": "Reference & Audit",
        "icon": "📸",
        "badge": "40 Captured",
        "meta": "Comprehensive 90-Screen Visual UI Inventory & Live Capture Matrix"
    },
    {
        "id": "verification-report",
        "file": "verification-report.md",
        "output": "verification-report.html",
        "title": "Technical Verification Report",
        "nav_title": "07. Verification Report",
        "group": "Reference & Audit",
        "icon": "🛡️",
        "badge": "Code Audit",
        "meta": "Exhaustive Code Audit Baseline, Limitations & Production Recommendations"
    },
    {
        "id": "user-manual-consolidated",
        "file": "user-manual.md",
        "output": "user-manual.html",
        "title": "Comprehensive User Manual",
        "nav_title": "Complete User Manual",
        "group": "Complete Editions",
        "icon": "📑",
        "badge": "Master",
        "meta": "Consolidated Master Reference Document • Print & PDF Ready"
    }
]

# Live captured screenshots definitions
SCREENSHOT_ITEMS = [
    {
        "file": "01_01_applicant_portal_home.png",
        "title": "Figure 1.1: Public Applicant Portal Home",
        "caption": "Public admissions landing portal: online program applications, tuition breakdown, and requirements.",
        "section_match": r'(###\s+1\.1\s+Applicant Portal Home|Stage 1: Public Applicant Registration|###\s+Applicant Portal)',
    },
    {
        "file": "01_03_applicant_profile.png",
        "title": "Figure 1.3: Applicant Profile & Education Details",
        "caption": "Applicant personal details, contact address, SSC/HSC board verification data, and guardian info.",
        "section_match": r'(###\s+1\.3\s+Profile|Stage 2: Board Verification|Applicant Profile)',
    },
    {
        "file": "02_01_student_login.png",
        "title": "Figure 2.1: Student Authentication Portal",
        "caption": "Roll number based student authentication screen with password reset support.",
        "section_match": r'(###\s+2\.1\s+Student Login|Student Authentication)',
    },
    {
        "file": "02_02_student_profile_info.png",
        "title": "Figure 2.2: Student Academic Profile Dashboard",
        "caption": "Enrolled student profile: enrolled batch, current semester, academic advisor, and personal details.",
        "section_match": r'(###\s+2\.2\s+Student Dashboard|Student Academic Profile)',
    },
    {
        "file": "02_03_student_routine.png",
        "title": "Figure 2.3: Student Weekly Class Routine",
        "caption": "Personal weekly course routine grid: course codes, faculty instructors, and room allocations.",
        "section_match": r'(###\s+2\.3\s+Personal Class Routine|Class Routine)',
    },
    {
        "file": "02_04_student_invoices.png",
        "title": "Figure 2.4: Student Invoices & Payment Schedule",
        "caption": "Student financial invoice history: semester tuition installments, payment status, and net dues.",
        "section_match": r'(###\s+2\.4\s+Student Invoice|Payment History)',
    },
    {
        "file": "02_05_student_registration.png",
        "title": "Figure 2.5: Online Semester Registration",
        "caption": "Online semester course enrollment interface: regular courses, retakes, and improvements.",
        "section_match": r'(###\s+2\.5\s+Online Semester Registration|Online Registration)',
    },
    {
        "file": "02_06_student_result_card.png",
        "title": "Figure 2.6: Semester Result Card & Session SGPA",
        "caption": "Official student examination results: Course Letter Grades, Grade Points, and session-wise SGPA.",
        "section_match": r'(###\s+2\.6\s+Semester Result Card|Result Card)',
    },
    {
        "file": "02_07_student_document_application.png",
        "title": "Figure 2.7: Student Document Applications",
        "caption": "Self-service document applications: Transcripts, Provisional Certificates, and status tracker.",
        "section_match": r'(###\s+2\.7\s+Document Application|Apply for Documents)',
    },
    {
        "file": "03_00_admin_login.png",
        "title": "Figure 3.0: Administration Central Login",
        "caption": "University administrative login portal for officers, teachers, and system administrators.",
        "section_match": r'(###\s+Admin Login|Administrator Portal)',
    },
    {
        "file": "03_01_admin_dashboard.png",
        "title": "Figure 3.1: Central Administration Dashboard",
        "caption": "Administrative dashboard: main navigation sidebar, quick roll search, and operational modules.",
        "section_match": r'(###\s+3\.1\s+Admin Dashboard|Central Dashboard|###\s+Role 9:\s+System Administrator)',
    },
    {
        "file": "03_02_faculties.png",
        "title": "Figure 3.2: Faculties Directory",
        "caption": "Master catalog of academic faculties and associated dean administrative records.",
        "section_match": r'(###\s+1\.1\s+Faculties|Faculties List)',
    },
    {
        "file": "03_03_departments.png",
        "title": "Figure 3.3: Academic Departments Directory",
        "caption": "Department management: faculty associations, department head mappings, and academic programs.",
        "section_match": r'(###\s+1\.2\s+Departments|Departments List)',
    },
    {
        "file": "03_04_programs.png",
        "title": "Figure 3.4: Academic Programs Directory",
        "caption": "Undergraduate and graduate degree programs catalog and program version configurations.",
        "section_match": r'(###\s+1\.3\s+Programs|Programs List)',
    },
    {
        "file": "03_06_waiver_categories.png",
        "title": "Figure 3.6: Waiver & Scholarship Categories",
        "caption": "University scholarship categories, discount percentage bands, and eligibility settings.",
        "section_match": r'(###\s+1\.4\s+Waiver Categories|Waiver Categories)',
    },
    {
        "file": "03_07_users.png",
        "title": "Figure 3.7: Users Management Datatable",
        "caption": "Staff and faculty user administration: official credentials, assigned roles, and departmental permissions.",
        "section_match": r'(###\s+1\.6\s+Users|Users Management Datatable)',
    },
    {
        "file": "03_09_roles.png",
        "title": "Figure 3.9: Roles & Permissions Matrix",
        "caption": "Granular role-based access control matrix across academic and administrative subsystems.",
        "section_match": r'(###\s+1\.7\s+Roles & Permissions|Roles & Permissions Matrix)',
    },
    {
        "file": "03_10_settings.png",
        "title": "Figure 3.10: Global & Session Settings",
        "caption": "Institutional settings: active academic session, registration deadlines, and fee policies.",
        "section_match": r'(###\s+1\.8\s+Settings|Global & Program Settings)',
    },
    {
        "file": "04_01_admissiontestconfigs.png",
        "title": "Figure 4.1: Admission Test Configurations",
        "caption": "Entrance exam configuration: session, dates, test venue, and admit card download schedules.",
        "section_match": r'(###\s+2\.1\s+Admission Test Configs|Admission Test Config)',
    },
    {
        "file": "04_03_applicants.png",
        "title": "Figure 4.3: Applicants Master Directory",
        "caption": "Master applicant datatable with board verification flags, fee payment badges, and test statuses.",
        "section_match": r'(###\s+2\.2\s+Applicants|Applicants Master Datatable)',
    },
    {
        "file": "05_01_students.png",
        "title": "Figure 5.1: Students Master Directory",
        "caption": "Active student directory with tracking ID, official roll number, semester level, and academic status.",
        "section_match": r'(###\s+3\.1\s+Students|Students Master Directory)',
    },
    {
        "file": "05_05_syllabuses.png",
        "title": "Figure 5.5: Program Syllabuses Master",
        "caption": "Curriculum syllabuses: session bindings, total credit requirements, and semester distributions.",
        "section_match": r'(###\s+3\.2\s+Syllabuses|Syllabuses List)',
    },
    {
        "file": "05_07_courses.png",
        "title": "Figure 5.7: Master Course Catalog",
        "caption": "University master course database: course codes, credit weights, and theory vs laboratory classification.",
        "section_match": r'(###\s+3\.3\s+Courses|Course Catalog)',
    },
    {
        "file": "05_08_registrations.png",
        "title": "Figure 5.8: Semester Registrations Datatable",
        "caption": "Course registrations management: semester enrollments, retake designations, and section allocations.",
        "section_match": r'(###\s+3\.4\s+Registrations|Semester Registrations Datatable)',
    },
    {
        "file": "05_13_documentapplications.png",
        "title": "Figure 5.13: Document Applications Processing",
        "caption": "Registrar certificate and transcript issuance pipeline with accounts and library clearance checkpoints.",
        "section_match": r'(###\s+3\.10\s+Document Applications|Document Applications Processing)',
    },
    {
        "file": "05_14_transcripts.png",
        "title": "Figure 5.14: Academic Transcripts Generator",
        "caption": "Official transcript generation portal: student lookup, partial vs final transcript mode, and PDF printing.",
        "section_match": r'(###\s+3\.8\s+Transcripts|Academic Transcripts Generator)',
    },
    {
        "file": "06_01_feesettings.png",
        "title": "Figure 6.1: Academic Fee Settings Master",
        "caption": "Program fee schedule matrix: per-credit tuition rate, lab fees, and fixed semester charges.",
        "section_match": r'(###\s+4\.1\s+Fee Settings|Fee Settings Master)',
    },
    {
        "file": "06_03_invoices.png",
        "title": "Figure 6.3: Invoices Master Datatable",
        "caption": "Student tuition billing ledger: invoice IDs, gross amounts, installment schedules, and payment postings.",
        "section_match": r'(###\s+4\.3\s+Invoices|Invoices Master Datatable)',
    },
    {
        "file": "06_09_waivers.png",
        "title": "Figure 6.9: Tuition Waivers & Financial Aid",
        "caption": "Tuition scholarship management: student registration bindings, waiver categories, and approved percentages.",
        "section_match": r'(###\s+4\.5\s+Waivers & Scholarships|Tuition Waivers Management)',
    },
    {
        "file": "06_10_ledgers.png",
        "title": "Figure 6.10: Student Financial Accounting Ledger",
        "caption": "Chronological debit and credit transactions ledger with real-time student running balance.",
        "section_match": r'(###\s+4\.7\s+Student Ledgers|Student Financial Ledger)',
    },
    {
        "file": "07_02_examiners.png",
        "title": "Figure 7.2: Course Examiner Assignments",
        "caption": "Course evaluation instructor mapping: continuous and final exam examiner appointments per section.",
        "section_match": r'(###\s+5\.1\s+Examiners|Course Examiner Assignments)',
    },
    {
        "file": "07_03_marks.png",
        "title": "Figure 7.3: Continuous & Final Marks Entry Sheet",
        "caption": "Examiner evaluation sheet: continuous assessment, attendance, midterm, and final examination marks.",
        "section_match": r'(###\s+5\.2\s+Marks Entry|Teacher Marks Entry Sheet)',
    },
    {
        "file": "07_09_results.png",
        "title": "Figure 7.9: Result Publication Dashboard",
        "caption": "Examination controller result publication: semester grade release controls and student portal visibility.",
        "section_match": r'(###\s+5\.4\s+Results|Result Publication Dashboard)',
    },
    {
        "file": "08_01_rooms.png",
        "title": "Figure 8.1: Campus Academic Rooms Directory",
        "caption": "Campus room database: lecture halls, engineering labs, computer labs, and seating capacities.",
        "section_match": r'(###\s+6\.1\s+Rooms|Campus Rooms Management)',
    },
    {
        "file": "08_02_slots.png",
        "title": "Figure 8.2: Class Time Slots Matrix",
        "caption": "Weekly class timetable slot configuration across weekdays (Sunday to Thursday).",
        "section_match": r'(###\s+6\.2\s+Time Slots|Academic Time Slots Setup)',
    },
    {
        "file": "08_03_courseoffers.png",
        "title": "Figure 8.3: Course Offerings Master",
        "caption": "Semester course offerings: section splits, faculty allocations, and student enrollment capacities.",
        "section_match": r'(###\s+6\.3\s+Course Offerings|Course Offerings Master)',
    },
    {
        "file": "08_07_schedules.png",
        "title": "Figure 8.7: Routine Builder & Live Schedule Viewer",
        "caption": "Class routine viewer and schedule conflict management interface.",
        "section_match": r'(###\s+6\.4\s+Class Routine|Schedule Viewer & Live Sync)',
    },
    {
        "file": "09_01_report_registration.png",
        "title": "Figure 9.1: Semester Registration Analytics Report",
        "caption": "Program-level student registration enrollment statistics, course load analytics, and retake ratios.",
        "section_match": r'(###\s+7\.1\s+Registration Reports|Semester Registration Report)',
    },
    {
        "file": "09_02_report_accounts.png",
        "title": "Figure 9.2: Accounts Financial Collection Summary",
        "caption": "Accounts financial summary: daily bank collections, outstanding receivables, and installment tracking.",
        "section_match": r'(###\s+7\.2\s+Accounts Reports|Accounts Financial Summary)',
    },
    {
        "file": "09_03_report_student.png",
        "title": "Figure 9.3: Student Demographics & Enrollment Report",
        "caption": "Institutional student demographics: active headcount distribution by program, batch, and gender.",
        "section_match": r'(###\s+7\.3\s+Student Reports|Student Enrollment & Demographics)',
    }
]

def make_slug(text):
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    return re.sub(r'[-\s]+', '-', text)

def make_screenshot_html(item):
    """Render a modern, high-definition screenshot figure card."""
    filename = item["file"]
    title = item["title"]
    caption = item["caption"]
    return f'''
<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/{filename}</span>
  </div>
  <a href="screenshots/{filename}" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/{filename}" alt="{html.escape(title)}" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>{html.escape(title)}:</strong> {html.escape(caption)}</figcaption>
</figure>
'''

def inject_screenshots_into_markdown(md_text, filename):
    """Inject relevant live screenshots after matching sections or tables."""
    # Don't inject figures into screenshots checklist itself (we handle its matrix separately)
    if filename == "06-screenshots-checklist.md":
        return update_checklist_markdown(md_text)

    # For other documents, inject matching screenshot cards after headings or tables
    for item in SCREENSHOT_ITEMS:
        # Check if file exists
        full_path = os.path.join(SCREENSHOTS_DIR, item["file"])
        if not os.path.exists(full_path):
            continue

        fig_html = make_screenshot_html(item)
        pattern = item["section_match"]
        
        # Check if the section heading exists in the markdown
        match = re.search(pattern, md_text, re.IGNORECASE)
        if match:
            # Look for the end of the first table or paragraph following this match
            start_pos = match.end()
            # If followed by a table, find the end of that table
            table_match = re.search(r'(\|.*?\|\n)(?=\n|[^|]|$)', md_text[start_pos:], re.DOTALL)
            if table_match and table_match.start() < 1200:
                insert_pos = start_pos + table_match.end()
                # Insert if not already present
                if item["file"] not in md_text:
                    md_text = md_text[:insert_pos] + "\n\n" + fig_html + "\n\n" + md_text[insert_pos:]
            else:
                # Insert right after the section intro
                p_match = re.search(r'\n\n', md_text[start_pos:])
                if p_match and p_match.start() < 600:
                    insert_pos = start_pos + p_match.end()
                    if item["file"] not in md_text:
                        md_text = md_text[:insert_pos] + "\n\n" + fig_html + "\n\n" + md_text[insert_pos:]

    return md_text

def update_checklist_markdown(md_text):
    """Update 06-screenshots-checklist.md with live capture status and links."""
    # Update captured counts
    captured_count = 0
    for item in SCREENSHOT_ITEMS:
        full_path = os.path.join(SCREENSHOTS_DIR, item["file"])
        if os.path.exists(full_path):
            captured_count += 1

    md_text = md_text.replace(
        "0 of 90 screenshots captured",
        f"**{captured_count} of 90 screenshots captured from live running Docker environment**"
    )
    md_text = md_text.replace(
        "0 / 90 (0%)",
        f"**{captured_count} / 90 ({int(captured_count/90*100)}%)**"
    )
    md_text = md_text.replace(
        "All Pending Capture",
        f"**{captured_count} Captured, {90 - captured_count} Pending**"
    )

    # Replace Pending (Not captured) for each captured screenshot
    for item in SCREENSHOT_ITEMS:
        s_file = item["file"]
        full_path = os.path.join(SCREENSHOTS_DIR, s_file)
        if not os.path.exists(full_path):
            continue

        # Extract number like 3.1 or 03_01
        m = re.match(r'^0?(\d+)_0?(\d+)', s_file)
        if m:
            sec_num = f"{int(m.group(1))}.{int(m.group(2))}"
            # Look for row starting with | sec_num |
            # e.g. | 3.1 | **Admin Dashboard** | ... | Pending (Not captured) |
            row_pattern = rf'(\|\s*{re.escape(sec_num)}\s*\|.*?\|\s*)Pending \(Not captured\)(\s*\|)'
            replacement = rf'\1<span class="badge-captured">✓ Captured</span> <a href="screenshots/{s_file}" target="_blank">View UI Image</a>\2'
            md_text = re.sub(row_pattern, replacement, md_text)

    return md_text

def process_status_badges(content):
    """Transform status codes into modern badge elements."""
    replacements = [
        (r'\[VC\]', '<span class="badge badge-vc" title="Verified in source code"><span class="badge-dot"></span>VC</span>'),
        (r'\[CNV\]', '<span class="badge badge-cnv" title="Found in code but not UI-verified"><span class="badge-dot"></span>CNV</span>'),
        (r'\[PI\]', '<span class="badge badge-pi" title="Partially implemented"><span class="badge-dot"></span>PI</span>'),
        (r'\[VUI\]', '<span class="badge badge-vui" title="Verified in running UI"><span class="badge-dot"></span>VUI</span>'),
        (r'\[RDC\]', '<span class="badge badge-rdc" title="Requires database or policy confirmation"><span class="badge-dot"></span>RDC</span>'),
        (r'\[NF\]', '<span class="badge badge-nf" title="Not found in codebase"><span class="badge-dot"></span>NF</span>'),
    ]
    for pattern, badge in replacements:
        content = re.sub(r'<strong>\s*' + pattern + r'\s*</strong>', badge, content)
        content = re.sub(pattern, badge, content)
    return content

def process_callouts(content):
    """Detect and stylize blockquotes into modern admonition cards."""
    def replace_blockquote(match):
        bq_content = match.group(1).strip()
        
        # Scope boundary check
        if any(k in bq_content for k in ['Scope Boundary', 'SYSTEM SCOPE & BOUNDARIES', 'Mandatory Scope Notice', 'Important Boundary Rule']):
            return f'''<div class="callout callout-scope">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    Mandatory Scope Boundary — HRM Separation Notice
  </div>
  {bq_content}
</div>'''

        if 'Important' in bq_content or 'Warning' in bq_content or 'Caution' in bq_content:
            return f'''<div class="callout callout-warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Important Operational Notice
  </div>
  {bq_content}
</div>'''

        if 'Verification Status' in bq_content or 'Verified' in bq_content:
            return f'''<div class="callout callout-success">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    Technical Verification Baseline
  </div>
  {bq_content}
</div>'''

        return f'''<div class="callout callout-info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    Operational Note
  </div>
  {bq_content}
</div>'''

    return re.sub(r'<blockquote>(.*?)</blockquote>', replace_blockquote, content, flags=re.DOTALL)

def process_tables(content):
    """Wrap tables with horizontal scroll containers."""
    def wrap_table(match):
        return f'<div class="table-wrapper">{match.group(0)}</div>'
    return re.sub(r'<table>.*?</table>', wrap_table, content, flags=re.DOTALL)

def process_code_blocks(content):
    """Style code blocks and detect ASCII diagrams."""
    def wrap_pre(match):
        pre_tag = match.group(0)
        is_diagram = any(c in pre_tag for c in ['┌', '─', '│', '└', '▼', '▲', '▶', '──', '┼', '├', '┤', '┬', '┴'])
        
        icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>' if is_diagram else '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
        title_text = "ASCII Workflow & Architecture Diagram" if is_diagram else "Technical Code / Configuration"
        diagram_class = "diagram-wrapper" if is_diagram else ""

        return f'''<div class="code-wrapper {diagram_class}">
  <div class="code-header">
    <span class="code-title">{icon_svg} {title_text}</span>
    <button class="code-copy-btn" title="Copy to clipboard">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      Copy
    </button>
  </div>
  {pre_tag}
</div>'''
    return re.sub(r'<pre><code>.*?</code></pre>', wrap_pre, content, flags=re.DOTALL)

def process_links(content):
    """Rewrite .md relative links to .html links."""
    def rewrite_link(match):
        url = match.group(1)
        if url.endswith('.md') or '.md#' in url:
            if url.startswith('README.md'):
                url = url.replace('README.md', 'index.html')
            else:
                url = re.sub(r'\.md(#|$)', r'.html\1', url)
        return f'href="{url}"'
    return re.sub(r'href="([^"]+)"', rewrite_link, content)

def process_headings(content):
    """Add anchor links to headings and ensure valid IDs."""
    headings_data = []

    def replace_h(match):
        level = int(match.group(1))
        attrs = match.group(2) or ''
        text = match.group(3)

        id_match = re.search(r'id="([^"]+)"', attrs)
        if id_match:
            h_id = id_match.group(1)
        else:
            clean_text = re.sub(r'<[^>]+>', '', text)
            h_id = make_slug(clean_text)
            attrs = f' id="{h_id}"' + attrs

        clean_title = re.sub(r'<[^>]+>', '', text).strip()
        if level in (2, 3):
            headings_data.append({
                "level": level,
                "id": h_id,
                "title": clean_title
            })

        anchor = f'<a href="#{h_id}" class="heading-anchor" aria-hidden="true" title="Direct link to this section">#</a>'
        return f'<h{level}{attrs}>{text}{anchor}</h{level}>'

    content = re.sub(r'<h([1-4])([^>]*)>(.*?)</h\1>', replace_h, content, flags=re.DOTALL)
    return content, headings_data

def build_sidebar_html(current_output):
    """Generate the unified left sidebar navigation."""
    groups = {}
    for ch in CHAPTERS:
        g = ch["group"]
        if g not in groups:
            groups[g] = []
        groups[g].append(ch)

    html_out = '<nav class="sidebar-nav">\n'
    for g_name, items in groups.items():
        html_out += f'  <div class="sidebar-nav-group">\n'
        html_out += f'    <div class="sidebar-group-title">{html.escape(g_name)}</div>\n'
        html_out += f'    <ul class="sidebar-nav-list">\n'
        for item in items:
            is_active = (item["output"] == current_output) or (current_output == "index.html" and item["output"] == "README.html")
            active_class = " active" if is_active else ""
            html_out += f'      <li class="sidebar-nav-item">\n'
            html_out += f'        <a href="{item["output"]}" class="sidebar-nav-link{active_class}">\n'
            html_out += f'          <span class="nav-label"><span class="nav-icon">{item["icon"]}</span> {html.escape(item["nav_title"])}</span>\n'
            html_out += f'          <span class="nav-badge">{html.escape(item["badge"])}</span>\n'
            html_out += f'        </a>\n'
            html_out += f'      </li>\n'
        html_out += f'    </ul>\n'
        html_out += f'  </div>\n'
    
    is_complete_active = (current_output == "complete-manual.html")
    complete_active_class = " active" if is_complete_active else ""
    html_out += f'''  <div class="sidebar-nav-group">
    <div class="sidebar-group-title">All-in-One Edition</div>
    <ul class="sidebar-nav-list">
      <li class="sidebar-nav-item">
        <a href="complete-manual.html" class="sidebar-nav-link{complete_active_class}">
          <span class="nav-label"><span class="nav-icon">📚</span> Complete 8-Chapter Manual</span>
          <span class="nav-badge">Merged</span>
        </a>
      </li>
    </ul>
  </div>
'''

    html_out += '''
  <div class="sidebar-legend">
    <div class="sidebar-legend-title">Verification Legend</div>
    <div class="legend-item"><span class="legend-dot" style="background:#10b981;"></span> <strong>[VC]</strong> Code Verified</div>
    <div class="legend-item"><span class="legend-dot" style="background:#f59e0b;"></span> <strong>[CNV]</strong> Code Found / Not UI</div>
    <div class="legend-item"><span class="legend-dot" style="background:#ea580c;"></span> <strong>[PI]</strong> Partially Implemented</div>
    <div class="legend-item"><span class="legend-dot" style="background:#7c3aed;"></span> <strong>[VUI]</strong> Running UI Verified</div>
    <div class="legend-item"><span class="legend-dot" style="background:#0284c7;"></span> <strong>[RDC]</strong> Requires DB / Policy</div>
    <div class="legend-item"><span class="legend-dot" style="background:#dc2626;"></span> <strong>[NF]</strong> Not Found / Excluded</div>
  </div>
</nav>
'''
    return html_out

def build_toc_html(headings):
    """Generate the right-side Table of Contents."""
    if not headings:
        return '<div style="color:var(--text-muted);font-size:12px;">No sub-sections</div>'

    html_out = '<ul class="toc-list">\n'
    for h in headings:
        level_class = f"level-{h['level']}"
        html_out += f'  <li class="toc-item {level_class}"><a href="#{h["id"]}" class="toc-link" title="{html.escape(h["title"])}">{html.escape(h["title"])}</a></li>\n'
    html_out += '</ul>\n'
    return html_out

def build_pagination_html(current_index):
    """Generate previous/next chapter cards."""
    prev_item = CHAPTERS[current_index - 1] if current_index > 0 else None
    next_item = CHAPTERS[current_index + 1] if current_index < len(CHAPTERS) - 1 else None

    html_out = '<div class="chapter-nav-footer">\n'
    if prev_item:
        html_out += f'''  <a href="{prev_item["output"]}" class="chapter-nav-card prev">
    <span class="chapter-nav-direction">← Previous Chapter</span>
    <span class="chapter-nav-title">{html.escape(prev_item["title"])}</span>
  </a>\n'''
    else:
        html_out += '  <div></div>\n'

    if next_item:
        html_out += f'''  <a href="{next_item["output"]}" class="chapter-nav-card next">
    <span class="chapter-nav-direction">Next Chapter →</span>
    <span class="chapter-nav-title">{html.escape(next_item["title"])}</span>
  </a>\n'''
    else:
        html_out += '  <div></div>\n'

    html_out += '</div>\n'
    return html_out

def render_page(title, meta_text, sidebar_html, content_html, toc_html, pagination_html, breadcrumb_title):
    """Assemble the complete HTML document."""
    return f'''<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)} — EasyMate ERP Manual | Varendra University</title>
  <meta name="description" content="Varendra University EasyMate ERP User Manual & Operational Reference: Student Lifecycle, Cross-Module Workflows, Roles & Technical Verification.">
  <link rel="stylesheet" href="assets/manual.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231e3a8a'><path d='M12 2L1 7l11 5 9-4.09V17h2V7L12 2z'/></svg>">
</head>
<body>

  <!-- Top App Header -->
  <header class="app-header">
    <div style="display:flex;align-items:center;gap:16px;">
      <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <a href="index.html" class="brand-wrapper">
        <div class="brand-logo">VU</div>
        <div class="brand-text">
          <div class="brand-title">
            EasyMate ERP
            <span class="version-tag">v1.0</span>
          </div>
          <div class="brand-subtitle">Varendra University • Academic ERP Manual</div>
        </div>
      </a>
    </div>

    <div class="header-actions">
      <div class="search-trigger" role="button" tabindex="0" title="Search documentation (Ctrl+K)">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span>Search manual...</span>
        <kbd>Ctrl+K</kbd>
      </div>

      <button class="header-btn" id="theme-toggle-btn" title="Toggle Dark/Light Mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        Dark
      </button>

      <button class="header-btn print-btn-action" title="Print this manual or Export to PDF">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Print / PDF
      </button>
    </div>
  </header>

  <!-- Docs Layout -->
  <div class="docs-layout">

    <!-- Left Sidebar -->
    <aside class="docs-sidebar">
      <div class="sidebar-search-box">
        <input type="text" id="sidebar-filter-input" class="sidebar-search-input" placeholder="Quick filter menu...">
      </div>
      {sidebar_html}
    </aside>

    <!-- Main Content Area -->
    <main class="docs-main">
      <article class="docs-article">
        
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="index.html">EasyMate ERP</a>
          <span class="separator">/</span>
          <a href="index.html">User Manual</a>
          <span class="separator">/</span>
          <span class="current">{html.escape(breadcrumb_title)}</span>
        </nav>

        <div class="doc-header-banner">
          <div class="doc-meta-row">
            <span class="doc-meta-pill">🏛️ Varendra University</span>
            <span class="doc-meta-pill">📅 Published: October 2026</span>
            <span class="doc-meta-pill">🛡️ Live Docker System Verified</span>
            <span class="doc-meta-pill">⚡ Laravel Academic SIS</span>
          </div>
        </div>

        {content_html}

        {pagination_html}

      </article>
    </main>

    <!-- Right TOC Sidebar -->
    <aside class="docs-toc">
      <div class="toc-title">
        <span>On This Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </div>
      {toc_html}

      <div class="toc-actions">
        <a href="#top" class="toc-action-link" onclick="window.scrollTo({{top:0,behavior:'smooth'}});return false;">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          Back to top
        </a>
        <a href="#" class="toc-action-link print-btn-action">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print this section
        </a>
      </div>
    </aside>

  </div>

  <!-- Global Search Modal -->
  <div class="search-modal-backdrop" id="search-modal-backdrop">
    <div class="search-modal">
      <div class="search-modal-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" class="search-modal-input" id="search-modal-input" placeholder="Search modules, roles, workflows, rules, FAQs..." autocomplete="off">
        <button id="search-modal-close" style="background:none;border:none;cursor:pointer;color:var(--text-muted);padding:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="search-modal-results" id="search-modal-results"></div>
      <div class="search-modal-footer">
        <div>Navigate with <kbd>↑</kbd> <kbd>↓</kbd> and select with <kbd>Enter</kbd></div>
        <div>Close with <kbd>Esc</kbd></div>
      </div>
    </div>
  </div>

  <script src="assets/search-index.js"></script>
  <script src="assets/manual.js"></script>
</body>
</html>
'''

def main():
    print("Beginning EasyMate ERP Manual conversion with Live Screenshots...")
    search_index = []

    # Process individual chapters
    for idx, ch in enumerate(CHAPTERS):
        input_path = os.path.join(DOCS_DIR, ch["file"])
        if not os.path.exists(input_path):
            print(f"Warning: {input_path} not found! Skipping.")
            continue

        print(f"Processing [{ch['file']}] -> [{ch['output']}]...")
        with open(input_path, "r", encoding="utf-8") as f:
            raw_md = f.read()

        # Inject screenshots into markdown
        processed_md = inject_screenshots_into_markdown(raw_md, ch["file"])

        # Convert markdown to HTML
        md_converter = markdown.Markdown(extensions=[
            'tables',
            'fenced_code',
            'toc',
            'attr_list',
            'def_list'
        ])
        body_html = md_converter.convert(processed_md)

        # Process post-conversions
        body_html = process_status_badges(body_html)
        body_html = process_callouts(body_html)
        body_html = process_tables(body_html)
        body_html = process_code_blocks(body_html)
        body_html = process_links(body_html)
        body_html, headings_data = process_headings(body_html)

        # Build TOC & Nav
        sidebar_html = build_sidebar_html(ch["output"])
        toc_html = build_toc_html(headings_data)
        pagination_html = build_pagination_html(idx)

        # Render full page
        page_html = render_page(
            title=ch["title"],
            meta_text=ch["meta"],
            sidebar_html=sidebar_html,
            content_html=body_html,
            toc_html=toc_html,
            pagination_html=pagination_html,
            breadcrumb_title=ch["nav_title"]
        )

        output_path = os.path.join(DOCS_DIR, ch["output"])
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(page_html)

        # If this is README.md, also write README.html
        if ch["file"] == "README.md":
            readme_html_path = os.path.join(DOCS_DIR, "README.html")
            with open(readme_html_path, "w", encoding="utf-8") as f:
                f.write(page_html)

        # Build search index entries for this file
        sections = re.split(r'\n(?=#{1,3}\s+)', raw_md)
        for s in sections:
            s_clean = s.strip()
            if not s_clean:
                continue
            lines = s_clean.split('\n')
            first_line = lines[0].strip()
            header_match = re.match(r'^(#{1,3})\s+(.*)', first_line)
            if header_match:
                h_text = header_match.group(2).strip()
                h_slug = make_slug(h_text)
                c_text = ' '.join(lines[1:]).strip()
            else:
                h_text = ch["title"]
                h_slug = ""
                c_text = s_clean

            c_text_plain = re.sub(r'[#*`\[\]|\-_~>]+', ' ', c_text)
            c_text_plain = re.sub(r'\s+', ' ', c_text_plain).strip()

            target_url = ch["output"] + (f"#{h_slug}" if h_slug else "")
            search_index.append({
                "chapter": ch["nav_title"],
                "title": ch["title"],
                "heading": h_text,
                "url": target_url,
                "content": c_text_plain[:300]
            })

    # Now create the Complete Merged 8-Chapter Manual (complete-manual.html)
    print("Building All-in-One Complete Merged Edition [complete-manual.html]...")
    merged_md_parts = []
    core_files = [
        "README.md",
        "01-functional-inventory.md",
        "02-student-lifecycle.md",
        "03-role-based-guides.md",
        "04-cross-module-workflows.md",
        "05-glossary-and-faq.md",
        "06-screenshots-checklist.md",
        "verification-report.md"
    ]
    for cf in core_files:
        c_path = os.path.join(DOCS_DIR, cf)
        if os.path.exists(c_path):
            with open(c_path, "r", encoding="utf-8") as f:
                raw_c = f.read()
            processed_c = inject_screenshots_into_markdown(raw_c, cf)
            merged_md_parts.append(processed_c)
            merged_md_parts.append("\n\n---\n\n")

    full_md = "\n".join(merged_md_parts)
    full_md_converter = markdown.Markdown(extensions=[
        'tables',
        'fenced_code',
        'toc',
        'attr_list',
        'def_list'
    ])
    full_body_html = full_md_converter.convert(full_md)
    full_body_html = process_status_badges(full_body_html)
    full_body_html = process_callouts(full_body_html)
    full_body_html = process_tables(full_body_html)
    full_body_html = process_code_blocks(full_body_html)
    full_body_html = process_links(full_body_html)
    full_body_html, full_headings = process_headings(full_body_html)

    full_sidebar_html = build_sidebar_html("complete-manual.html")
    full_toc_html = build_toc_html(full_headings[:80])
    full_page_html = render_page(
        title="Complete 8-Chapter Master Manual",
        meta_text="Full End-to-End EasyMate ERP Academic Specification & Operational Manual",
        sidebar_html=full_sidebar_html,
        content_html=full_body_html,
        toc_html=full_toc_html,
        pagination_html="",
        breadcrumb_title="Complete Merged Edition"
    )

    with open(os.path.join(DOCS_DIR, "complete-manual.html"), "w", encoding="utf-8") as f:
        f.write(full_page_html)

    # Save Search Index JavaScript file
    search_index_js = f"window.SEARCH_INDEX = {json.dumps(search_index, ensure_ascii=False, indent=2)};\n"
    with open(os.path.join(ASSETS_DIR, "search-index.js"), "w", encoding="utf-8") as f:
        f.write(search_index_js)

    print(f"Successfully generated all HTML documents with live screenshots and search index ({len(search_index)} entries)!")

if __name__ == "__main__":
    main()
