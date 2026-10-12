# 02 — Student Lifecycle (শিক্ষার্থীর পূর্ণাঙ্গ জীবনচক্র)

## EasyMate ERP — ভর্তি আবেদন থেকে সমাবর্তন পর্যন্ত ধাপভিত্তিক নির্দেশিকা

> **নন-টেকনিক্যাল গাইড:** বরেন্দ্র বিশ্ববিদ্যালয়ে একজন শিক্ষার্থী ভর্তি আবেদন করা থেকে শুরু করে ক্লাস, পরীক্ষা, ফলাফল এবং সার্টিফিকেট পাওয়া পর্যন্ত প্রতিটি ধাপ খুব সহজ বাংলায় এবং স্ক্রিনশট সহ নিচে বর্ণনা করা হলো।

---

## পূর্ণাঙ্গ জীবনচক্রের চিত্ররূপ (Student Lifecycle Overview)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     ধাপ ১       │────▶│     ধাপ ২       │────▶│     ধাপ ৩       │────▶│     ধাপ ৪       │
│  অনলাইন ভর্তি   │     │  বোর্ড যাচাই ও  │     │ সিলেবাস ও কোর্স │     │  সেমিস্টার কোর্স │
│     আবেদন       │     │ ভর্তি পরীক্ষা   │     │    কনফিগারেশন   │     │   রেজিস্ট্রেশন  │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     ধাপ ৫       │────▶│     ধাপ ৬       │────▶│     ধাপ ৭       │────▶│     ধাপ ৮       │
│ টিউশন ফি ও কিস্তি│     │ ক্লাস রুটিন ও   │     │ পরীক্ষা, মার্কস │     │ গ্র্যাজুয়েশন ও  │
│  পরিশোধ নিষ্পত্তি│     │ নিয়মিত ক্লাস    │     │ এন্ট্রি ও রেজাল্ট │     │ সার্টিফিকেট অর্জন│
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## ধাপ ১: অনলাইনে ভর্তির আবেদন (Stage 1: Applying for Admission)

### কে সম্পাদন করবেন?
* **ভর্তিচ্ছু শিক্ষার্থী (Applicant):** ঘরে বসে বা যে কোনো স্থান থেকে অনলাইনে আবেদন করবেন।
* **সিস্টেম (EasyMate API):** শিক্ষা বোর্ডের সার্ভার থেকে স্বয়ংক্রিয়ভাবে প্রার্থীর ফলাফল যাচাই করবে।

### কীভাবে কাজ করবেন?

#### ১.১ আবেদন পোর্টালে প্রবেশ
* ব্রাউজারে `http://localhost:8083/front/applicant/home` ঠিকানায় যান।
* হোম পেজে চলমান সেমিস্টার (যেমন: `Summer-2026`), প্রোগ্রামসমূহ এবং টিউশন ফি এর বিবরণ দেখা যাবে।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/01_01_applicant_portal_home.png</span>
  </div>
  <a href="screenshots/01_01_applicant_portal_home.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/01_01_applicant_portal_home.png" alt="Public Applicant Portal Home" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.1:</strong> পাবলিক অ্যাপ্লিকেন্ট পোর্টাল — নতুন আবেদনকারী এখান থেকে সাইন-আপ ও লগইন করতে পারেন।</figcaption>
</figure>

#### ১.২ আবেদনকারী হিসেবে সাইন-আপ (Registration)
1. **New Applicant (Sign Up)** অপশনে যান।
2. প্রার্থীর এসএসসি ও এইচএসসি পরীক্ষার বোর্ড, রোল, রেজিস্ট্রেশন নম্বর, পাসের সন, মোবাইল নম্বর এবং পাসওয়ার্ড ইনপুট দিন।
3. **Register** বাটনে ক্লিক করুন।
4. সিস্টেম সাথে সাথে শিক্ষা বোর্ডের ডাটাবেজ থেকে প্রার্থীর নাম, পিতা ও মাতার নাম, জন্মতারিখ এবং জিপিএ স্বয়ংক্রিয়ভাবে নিয়ে আসবে।

#### ১.৩ প্রোফাইল সম্পন্ন করা (Complete Profile)
প্রোফাইলকে ৫টি ভাগে পূরণ করতে হয়:
1. **Personal Information (ব্যক্তিগত তথ্য):** ধর্ম, রক্তেল গ্রুপ, জাতীয়তা ইত্যাদি।
2. **Contact Information (যোগাযোগের ঠিকানা):** বর্তমান ও স্থায়ী ঠিকানা।
3. **Educational Background (শিক্ষাগত যোগ্যতা):** স্কুল/কলেজের নাম।
4. **Local Guardian (স্থানীয় অভিভাবক):** অভিভাবকের নাম, পেশা ও ফোন নম্বর।
5. **Attachments (কাগজপত্র ও ছবি):** পাসপোর্ট সাইজের ছবি এবং স্বাক্ষর আপলোড।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/01_03_applicant_profile.png</span>
  </div>
  <a href="screenshots/01_03_applicant_profile.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/01_03_applicant_profile.png" alt="Applicant Profile & Education Details" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.2:</strong> অ্যাপ্লিকেন্ট প্রোফাইল ইন্টারফেস — শিক্ষা বোর্ডের ভেরিফাইড ডাটা ও প্রোফাইল প্রগ্রেস বার।</figcaption>
</figure>

#### ১.৪ প্রোগ্রামে আবেদন ও ফি জমা
* **My Applications → Create** অপশনে গিয়ে কাঙ্ক্ষিত ডিগ্রি প্রোগ্রাম সিলেক্ট করে আবেদন সম্পন্ন করুন এবং আবেদন ফি পরিশোধ করুন।
* ভর্তি পরীক্ষার তারিখ ঘোষিত হলে **Admit Card** ডাউনলোড করে প্রিন্ট নিন।

---

## ধাপ ২: ভর্তি যাচাই ও শিক্ষার্থী হিসেবে অন্তর্ভুক্তি (Stage 2: Admission & Enrollment)

### কে সম্পাদন করবেন?
* **ভর্তি শাখা (Admission Officer):** আবেদনপত্র ও কাগজপত্র যাচাই এবং মেধা তালিকা প্রস্তুতকরণ।
* **রেজিস্ট্রার শাখা:** চূড়ান্তভাবে নির্বাচিত প্রার্থীকে স্থায়ী রোল নম্বর প্রদান।

### কীভাবে কাজ করবেন?

#### ২.১ ভর্তি পরীক্ষার শিডিউল কনফিগারেশন
* ভর্তি অফিসার **Admission → Admission Test Configs** থেকে পরীক্ষার তারিখ, সময় ও ভেন্যু নির্ধারণ করেন।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/04_01_admissiontestconfigs.png</span>
  </div>
  <a href="screenshots/04_01_admissiontestconfigs.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/04_01_admissiontestconfigs.png" alt="Admission Test Configurations" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.3:</strong> ভর্তি পরীক্ষার কনফিগারেশন স্ক্রিন — পরীক্ষা ও প্রবেশপত্র ডাউনলোডের সময়সীমা এখান থেকেই নির্ধারিত হয়।</figcaption>
</figure>

#### ২.২ আবেদনপত্র অডিট ও মেধা তালিকা (Merit List)
1. **Admission → Applicants** মেনুতে গিয়ে আবেদনকারীদের ফি পেমেন্ট ও বোর্ড ভেরিফিকেশন স্ট্যাটাস যাচাই করা হয়।
2. ভর্তি পরীক্ষার নম্বর ও এসএসসি/এইচএসসি জিপিএ সমন্বয় করে স্বয়ংক্রিয়ভাবে মেধা তালিকা (Merit List) তৈরি করা হয়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/04_03_applicants.png</span>
  </div>
  <a href="screenshots/04_03_applicants.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/04_03_applicants.png" alt="Applicants Master Datatable" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.4:</strong> আবেদনকারীদের মাস্টার তালিকা — প্রার্থী ফি দিয়েছে কি না এবং যোগ্যতা যাচাইয়ের সেন্ট্রাল টেবিল।</figcaption>
</figure>

#### ২.৩ স্থায়ী শিক্ষার্থী হিসেবে রূপান্তর (Transfer to Student)
* প্রার্থী ভর্তি ফি জমা দিলে **Admission → Transfer** এর মাধ্যমে তাকে `Applicant` থেকে স্থায়ী `Student` হিসেবে সিস্টেমে অন্তর্ভুক্ত করা হয়।
* তাকে বিশ্ববিদ্যালয়ের অফিশিয়াল **Roll Number** (যেমন: `193011001`) এবং ব্যাচ নম্বর বরাদ্দ দেওয়া হয়।

---

## ধাপ ৩: বিভাগ, সিলেবাস ও কোর্স সেটআপ (Stage 3: Program & Syllabus Setup)

### কে সম্পাদন করবেন?
* **সিস্টেম অ্যাডমিন:** অনুষদ, বিভাগ ও প্রোগ্রাম তৈরি।
* **অ্যাকাডেমিক শাখা:** প্রোগ্রামের সিলেবাস, কোর্সের ক্রেডিট ও মূল্যায়ন পদ্ধতি যুক্ত করা।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/03_04_programs.png</span>
  </div>
  <a href="screenshots/03_04_programs.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/03_04_programs.png" alt="Academic Programs Directory" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.5:</strong> ডিগ্রি প্রোগ্রাম ক্যাটালগ — আন্ডারগ্র্যাজুয়েট ও মাস্টার্স প্রোগ্রামের তালিকা ও সেমিস্টার সংখ্যা।</figcaption>
</figure>

#### ৩.১ কোর্স ও সিলেবাস ম্যাপিং
* **Academic → Courses:** প্রতিটি কোর্সের কোড, ক্রেডিট (যেমন: ৩.০০ ক্রেডিট) এবং থিওরি নাকি ল্যাব তা নির্ধারণ করা হয়।
* **Academic → Syllabuses:** কোন সেমিস্টারে কোন কোন কোর্স পড়ানো হবে তা সেমিস্টার ১ থেকে ৮ পর্যন্ত সাজিয়ে দেওয়া হয়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/05_05_syllabuses.png</span>
  </div>
  <a href="screenshots/05_05_syllabuses.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/05_05_syllabuses.png" alt="Program Syllabuses Master" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.6:</strong> সিলেবাস মাস্টার স্ক্রিন — ব্যাচ ও সেশন অনুযায়ী কারিকুলাম ও মোট ক্রেডিট নির্ধারণ।</figcaption>
</figure>

---

## ধাপ ৪: সেমিস্টার কোর্স রেজিস্ট্রেশন (Stage 4: Semester Course Registration)

### কে সম্পাদন করবেন?
* **অ্যাকাডেমিক শাখা:** ব্যাচভিত্তিক স্বয়ংক্রিয় কোর্স রেজিস্ট্রেশন (Auto-Registration)।
* **শিক্ষার্থী:** রিটেক বা ইমপ্রুভমেন্ট কোর্সের জন্য নিজের পোর্টাল থেকে আবেদন।

### কীভাবে কাজ করবেন?
1. **অটো-রেজিস্ট্রেশন ইঞ্জিন:** নতুন সেমিস্টার শুরুর আগে সিস্টেম সকল নিয়মিত ছাত্র-ছাত্রীকে স্বয়ংক্রিয়ভাবে পরবর্তী সেমিস্টারে প্রমোট করে তাদের সিলেবাস অনুযায়ী কোর্স এনরোল করে দেয়।
2. **৫০% ক্রেডিট পাসের শর্ত:** পূর্ববর্তী সেমিস্টারের অন্তত ৫০% ক্রেডিট পাস না করলে ছাত্র প্রমোট হয় না, সে আগের সেমিস্টারেই থেকে যায় (Readmission)।
3. **ম্যানুয়াল রেজিস্ট্রেশন:** কোনো শিক্ষার্থী ছুটি থেকে ফিরলে বা বিশেষ কারণে পিছিয়ে থাকলে **Academic → Registrations → Create** থেকে ম্যানুয়ালি কোর্স সিলেক্ট করে দেওয়া যায়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/05_08_registrations.png</span>
  </div>
  <a href="screenshots/05_08_registrations.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/05_08_registrations.png" alt="Semester Registrations Datatable" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.7:</strong> সেমিস্টার রেজিস্ট্রেশন ডাটাটেবিল — সেশন ভিত্তিক সকল শিক্ষার্থীর কোর্স এনরোলমেন্ট ও সেকশন বিভাজন।</figcaption>
</figure>

---

## ধাপ ৫: টিউশন ফি নির্ধারণ, ইনভয়েস ও পেমেন্ট (Stage 5: Fee Invoicing & Payment)

### কে সম্পাদন করবেন?
* **হিসাব শাখা (Accounts Officer):** ফি ইনভয়েস তৈরি, স্কলারশিপ/ওয়েভার সমন্বয় এবং ব্যাংক পেমেন্ট পোস্টিং।
* **শিক্ষার্থী:** ব্যাংকে কিস্তির টাকা জমা দেওয়া।

### ফি হিসাব করার সহজ নিয়ম
1. **নিয়মিত টিউশন ফি:** প্রতি ক্রেডিটের ফি × মোট ক্রেডিট সংখ্যা (যেমন: ৩ ক্রেডিট × ২,৫০০ টাকা = ৭,৫০০ টাকা)।
2. **রিটেক কোর্স ফি:** নিয়মিত ফির ৫০%।
3. **ইমপ্রুভমেন্ট কোর্স ফি:** নিয়মিত ফির ২৫%।
4. **স্কলারশিপ/ওয়েভার:** জিপিএ বা কোটা অনুযায়ী টিউশন ফি থেকে ডিসকাউন্ট বাদ দিয়ে নেট প্রদেয় টাকা নির্ধারিত হয়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/06_03_invoices.png</span>
  </div>
  <a href="screenshots/06_03_invoices.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/06_03_invoices.png" alt="Invoices Master Datatable" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.8:</strong> ইনভয়েস মাস্টার স্ক্রিন — কিস্তি অনুযায়ী মোট টাকা ও পেমেন্ট স্ট্যাটাস।</figcaption>
</figure>

#### কিস্তি অনুযায়ী ফি জমা (Sequential Installments)
* সিস্টেম প্রতিটি সেমিস্টার ফি-কে ২টি বা ৩টি কিস্তিতে ভাগ করে দেয়।
* ⚠️ **জরুরি নিয়ম:** ১ম কিস্তির টাকা ব্যাংকে জমা না দেওয়া পর্যন্ত ২য় কিস্তির টাকা সফটওয়্যারে পোস্টিং নেওয়া সম্ভব নয়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/02_04_student_invoices.png</span>
  </div>
  <a href="screenshots/02_04_student_invoices.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/02_04_student_invoices.png" alt="Student Invoices & Payment Breakdown" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.9:</strong> স্টুডেন্ট পোর্টালে পেমেন্ট বিবরণ — শিক্ষার্থী নিজেই দেখতে পারে কত টাকা পরিশোধিত এবং কত টাকা বকেয়া।</figcaption>
</figure>

---

## ধাপ ৬: ক্লাস রুটিন ও পাঠদান (Stage 6: Classes & Teaching)

### কে সম্পাদন করবেন?
* **ডিপার্টমেন্ট শিডিউলার:** রুম, শিক্ষক ও সময়সূচি মিলিয়ে রুটিন তৈরি।
* **শিক্ষক ও শিক্ষার্থী:** যার যার পোর্টালে সাপ্তাহিক ক্লাস রুটিন দেখা।

#### রুটিন তৈরির নিয়ম ও কনফ্লিক্ট চেকার
* **Class Schedule → Schedules** থেকে রবি-বৃহস্পতিবারের সময়সূচিতে শিক্ষক ও রুম বসানো হয়।
* যদি একই সময়ে কোনো শিক্ষককে দুটি ক্লাসে বা একই রুমে দুটি কোর্স দেওয়া হয়, সিস্টেম সাথে সাথে কনফ্লিক্ট অ্যালার্ট দিয়ে আটকে দেয়।
* রুটিন ফাইনাল হলে **Publish** করার সাথে সাথে শিক্ষক ও শিক্ষার্থীর পোর্টালে তা চলে যায়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/02_03_student_routine.png</span>
  </div>
  <a href="screenshots/02_03_student_routine.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/02_03_student_routine.png" alt="Student Weekly Class Routine" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.10:</strong> স্টুডেন্ট পোর্টালে সাপ্তাহিক রুটিন — দিন অনুযায়ী কোর্সের কোড, শিক্ষকের নাম ও রুম নম্বর।</figcaption>
</figure>

---

## ধাপ ৭: পরীক্ষা, মূল্যায়ন ও ফলাফল প্রকাশ (Stage 7: Examination & Results)

### কে সম্পাদন করবেন?
* **কোর্স শিক্ষক:** ক্লাসের উপস্থিতি, ক্লাস টেস্ট, মিডটার্ম ও ফাইনাল পরীক্ষার নম্বর এন্ট্রি ও লক করা।
* **পরীক্ষা নিয়ন্ত্রক:** নম্বর অনুমোদন (Approve) ও সেমিস্টার রেজাল্ট প্রকাশ (Publish)।

#### ৭.১ নম্বর এন্ট্রি ও অনুমোদন
1. শিক্ষক **Exam → Marks** এ গিয়ে কোর্স সিলেক্ট করে নম্বর ইনপুট দেন এবং **Submit** বাটন চেপে লক করেন।
2. পরীক্ষা নিয়ন্ত্রক **Exam → Marks → Approve** এ গিয়ে নম্বরগুলো ভেরিফাই করে অনুমোদন দেন।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/07_03_marks.png</span>
  </div>
  <a href="screenshots/07_03_marks.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/07_03_marks.png" alt="Marks Entry Sheet" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.11:</strong> মার্কস এন্ট্রি স্ক্রিন — শিক্ষক কর্তৃক মূল্যায়ন নম্বর ইনপুট ও স্বয়ংক্রিয় গ্রেড হিসাব।</figcaption>
</figure>

#### ৭.২ রেজাল্ট প্রকাশ ও রেজাল্ট কার্ড
1. সেমিস্টারের ১০০% কোর্সের নম্বর অনুমোদন হলে পরীক্ষা নিয়ন্ত্রক **Exam → Results** থেকে ফলাফল প্রকাশ করেন।
2. সাথে সাথে সকল ছাত্র-ছাত্রী তাদের নিজস্ব পোর্টালে সেমিস্টারের গ্রেড ও **SGPA** দেখতে পায়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/02_06_student_result_card.png</span>
  </div>
  <a href="screenshots/02_06_student_result_card.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/02_06_student_result_card.png" alt="Semester Result Card & Session SGPA" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.12:</strong> স্টুডেন্ট রেজাল্ট কার্ড — প্রতিটি কোর্সের লেটার গ্রেড, গ্রেড পয়েন্ট এবং সেশন-ভিত্তিক SGPA।</figcaption>
</figure>

---

## ধাপ ৮: গ্র্যাজুয়েশন, ক্লিয়ারেন্স ও সনদপত্র প্রদান (Stage 8: Graduation & Documents)

### কে সম্পাদন করবেন?
* **শিক্ষার্থী:** প্রয়োজনীয় সনদের জন্য অনলাইনে আবেদন।
* **হিসাব ও লাইব্রেরি শাখা:** বকেয়া ফি ও বই ফেরত ক্লিয়ারেন্স প্রদান।
* **রেজিস্ট্রার শাখা:** ট্রান্সক্রিপ্ট ও সার্টিফিকেট প্রিন্ট এবং প্রদান।

#### ৮.১ সনদের জন্য আবেদন ও ক্লিয়ারেন্স
1. শিক্ষার্থী তার পোর্টাল থেকে **Apply for Documents** এ গিয়ে ট্রান্সক্রিপ্ট বা সার্টিফিকেটের জন্য আবেদন করে।
2. ইনভয়েসের ফি পরিশোধ হলে হিসাব শাখা এবং লাইব্রেরি শাখা থেকে সিস্টেমে অনলাইন ক্লিয়ারেন্স প্রদান করা হয়।
3. ক্লিয়ারেন্স সম্পন্ন হলে রেজিস্ট্রার শাখা থেকে অফিশিয়াল ট্রান্সক্রিপ্ট ও সার্টিফিকেট প্রিন্ট করে শিক্ষার্থীকে প্রদান করা হয়।

<figure class="screenshot-figure">
  <div class="screenshot-header">
    <span class="screenshot-tag">Live System Capture</span>
    <span class="screenshot-filename">screenshots/05_14_transcripts.png</span>
  </div>
  <a href="screenshots/05_14_transcripts.png" target="_blank" class="screenshot-img-link" title="Click to view full size">
    <img src="screenshots/05_14_transcripts.png" alt="Academic Transcripts Generator" class="screenshot-img" loading="lazy">
  </a>
  <figcaption><strong>Figure 2.13:</strong> অফিশিয়াল ট্রান্সক্রিপ্ট জেনারেটর — শিক্ষার্থীর রোল দিয়ে সরাসরি অফিশিয়াল সিকিউরিটি ট্রান্সক্রিপ্ট প্রস্তুত করার উইন্ডো।</figcaption>
</figure>

---

> **সারসংক্ষেপ:** এইভাবে একজন ছাত্রের প্রাথমিক আবেদন থেকে শুরু করে বিশ্ববিদ্যালয়ের সমাবর্তন ও সনদপত্র প্রাপ্তি পর্যন্ত প্রতিটি ধাপ EasyMate ERP সিস্টেমে স্বচ্ছতা ও দ্রুততার সাথে পরিচালিত হয়।
