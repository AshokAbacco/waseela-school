/* ------------------------------------------------------------------ */
/*  Privacy Policy – WASEELA EMS app & Waseela School website          */
/*  Edit the text here; the /privacy page reads everything from this.  */
/*  Please confirm the app details with whoever runs the app.          */
/* ------------------------------------------------------------------ */
export const privacyPolicy = {
  /** Change this date whenever you edit the policy. */
  lastUpdated: "9 October 2026",
  intro:
    "WASEELA ENGLISH MEDIUM SCHOOL (“Waseela School”, “we”, “us”), an initiative of the Waseela Foundation, runs the WASEELA EMS mobile app and this website. This policy explains what information we collect, why we need it, how we protect it and the choices parents, students and staff have. We follow the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 of India.",
  /** Short summary cards shown at the top of the page. */
  highlights: [
    {
      title: "Used only for school",
      text: "Information is used to run school communication, academics, attendance and fees — nothing else.",
    },
    {
      title: "Never sold",
      text: "We never sell or rent personal data, and the app carries no third-party advertising.",
    },
    {
      title: "Parents decide",
      text: "Parents can view, correct or ask us to delete their child's information at any time.",
    },
    {
      title: "Kept secure",
      text: "Encrypted connections, password / OTP sign-in and role-based staff access.",
    },
  ],
  appFeatures: [
    "School notices, circulars, events and holiday announcements",
    "Daily homework, class diary and timetable",
    "Attendance updates for each student",
    "Exam schedules, marks and progress reports",
    "Fee details, due reminders and receipts",
    "Messages from teachers and the school office",
    "Photos and videos of school activities",
  ],
  appUsers: [
    {
      who: "Parents & guardians",
      what: "Follow their child's attendance, homework, results, fees and school notices.",
    },
    { who: "Students", what: "See homework, timetable and announcements, under a parent's guidance." },
    { who: "Teachers & staff", what: "Share homework, mark attendance, post updates and talk with parents." },
  ],
  collected: [
    {
      title: "Student details",
      items: [
        "Name, photograph, date of birth and gender",
        "Class, section, roll number and admission number",
        "Health notes such as blood group (only if parents share them)",
      ],
    },
    {
      title: "Parent / guardian details",
      items: ["Name and relationship to the student", "Mobile number and email address", "Home address"],
    },
    {
      title: "Academic & school records",
      items: [
        "Attendance, homework, marks and report cards",
        "Teacher remarks and school messages",
        "Fee amounts, payments and receipts",
      ],
    },
    {
      title: "Sign-in & device information",
      items: [
        "Registered mobile number / user ID and sign-in activity",
        "Device type, operating system and app version",
        "Notification token (to deliver school alerts) and crash reports",
      ],
    },
  ],
  notCollected: [
    "We do not read your contacts, call logs or SMS messages.",
    "We do not track your phone's location in the background.",
    "We do not store card numbers, UPI PINs or net-banking passwords — online fee payments are handled by a secure payment gateway.",
  ],
  uses: [
    "Create and manage student and parent accounts in the app",
    "Share homework, attendance, results, fee and notice updates",
    "Send important alerts and reminders by push notification, SMS or WhatsApp",
    "Maintain academic and fee records needed for school administration",
    "Answer questions and support requests from parents",
    "Keep the app secure, fix problems and improve how it works",
  ],
  permissions: [
    { name: "Notifications", why: "To alert you about notices, homework, attendance and fee reminders." },
    {
      name: "Camera / Photos & files",
      why: "Only when you choose to upload a profile photo or document. Nothing is opened without your action.",
    },
    { name: "Internet", why: "To load the latest information from the school's secure server." },
  ],
  sharing: [
    {
      who: "Authorised school staff",
      what: "Teachers and office staff see only what they need for their role.",
    },
    {
      who: "Trusted service providers",
      what: "Secure cloud hosting, SMS / notification services and the payment gateway — used only to provide their service to the school.",
    },
    {
      who: "Government & legal authorities",
      what: "Only when the law requires it, such as education department reporting or a legal order.",
    },
  ],
  security: [
    "All data travels over encrypted (HTTPS / SSL) connections",
    "Accounts are protected by password or OTP verification",
    "Role-based access — staff see only what they need",
    "Data is kept on secure servers with regular backups",
  ],
  retention:
    "We keep student and parent information while the student studies at Waseela School. After a student leaves, academic and fee records are kept only as long as needed for school records, transfer certificates and legal requirements, and are then deleted or anonymised. App access is closed when a student leaves the school.",
  children:
    "The WASEELA EMS app is meant for parents, guardians, students and school staff. Student accounts are created by the school with the parent's knowledge and consent at admission. Children should use the app with a parent or guardian's guidance. We never use children's information for advertising, profiling or tracking.",
  rights: [
    { title: "Access", text: "Ask what information we hold about you or your child." },
    { title: "Correction", text: "Ask us to correct or update wrong or incomplete details." },
    {
      title: "Deletion",
      text: "Ask us to delete your account and personal data (except records the school must keep by law).",
    },
    { title: "Withdraw consent", text: "Stop optional messages or uploads at any time." },
    {
      title: "Grievance",
      text: "Raise a complaint with our Grievance Officer, who will reply within 30 days.",
    },
  ],
  /** How a user asks for account / data deletion (required by Google Play). */
  deletionSteps: [
    "Email the school from your registered email address, or call / WhatsApp us from your registered mobile number.",
    "Share the student's name, class and the mobile number used in the app, and write “Delete my WASEELA EMS account”.",
    "We verify the request and delete the app account and personal data within 30 days. Records the school must keep by law (such as fee receipts and academic records) are stored securely and deleted once no longer required.",
  ],
  website: [
    "You can browse this website without creating an account.",
    "If you call, email or WhatsApp us from the website, we use your details only to reply to your enquiry.",
    "The website uses Google Maps and Google Fonts, which may receive your IP address and browser details when a page loads.",
    "We do not use advertising or tracking cookies on this website.",
  ],
  grievanceOfficer: {
    title: "Principal, Waseela School",
    email: "Waseelaenglishmediumschool@gmail.com",
  },
};
