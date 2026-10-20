// ============================================================================
// PERSONALIZE THIS FILE
// 1. Replace the sample text with your real details
// 2. Optional photo: put photo.jpg in public/, then set photo: '/photo.jpg'
// 3. Leave any section as [] if you do not have that content yet — it stays hidden
// Only publish information you are comfortable making public.
// ============================================================================

export const profile = {
  photo: '/photo.svg',
  resume: '',

  name: 'Jordan Lee',
  role: 'MIS & Cybersecurity Student',
  location: 'Wichita, Kansas',
  tagline: 'Learning security and systems by building small, useful projects.',
  about:
    'Undergraduate focused on management information systems and cybersecurity. Most of my experience so far is coursework, campus involvement, and personal projects. I like turning class assignments into things I can show and explain.',
  badge: 'Looking for internships',
  email: 'jordan.lee@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',

  skills: [
    'Python',
    'SQL',
    'Networking basics',
    'Linux',
    'Git & GitHub',
    'Technical writing',
  ],

  education: [
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: 'Expected graduation · 2027',
    },
  ],

  // Leave [] if you do not have coursework to list yet.
  coursework: [
    {
      title: 'Secure Coding Practices',
      detail: 'Threats, input validation, and safer defaults in web apps.',
    },
    {
      title: 'Network Security',
      detail: 'Segmentation, monitoring basics, and lab attack/defense scenarios.',
    },
    {
      title: 'Systems Analysis & Design',
      detail: 'Requirements, process mapping, and stakeholder communication.',
    },
    {
      title: 'Database Management',
      detail: 'Relational modeling, SQL queries, and access control concepts.',
    },
  ],

  activities: [
    {
      title: 'Cyber Club Member',
      organization: 'Campus technology club',
      detail: 'Weekly labs, capture-the-flag practice, and peer study sessions.',
    },
    {
      title: 'Volunteer Help Desk',
      organization: 'Community nonprofit',
      detail: 'Helped staff with device setup, password resets, and basic security hygiene.',
    },
  ],

  // Add jobs or internships when you have them. Empty stays hidden.
  experience: [],

  certifications: [],
  honors: [{ title: 'Dean’s List', detail: 'Selected terms' }],
  interests: ['Teaching others what I just learned', 'Home lab tinkering'],
  learning: ['Web app security labs', 'GitHub Actions basics'],

  projects: [
    {
      title: 'Campus Resource Finder',
      slug: 'campus-resource-finder',
      summary: 'Class project: a simple site concept that helps students find tutoring and advising services.',
      overview:
        'A course project that turns a messy list of campus services into a searchable page students can actually use during the first weeks of the semester.',
      problem:
        'New students kept asking the same questions in Discord and office hours: where is tutoring, when is advising open, and which building do I walk to?',
      approach: [
        'Interviewed five classmates about how they look for help today.',
        'Sketched a search-first layout with short service cards and building names.',
        'Built a static HTML/CSS prototype and walked peers through two usability passes.',
      ],
      outcome:
        'Classmates could find a service in under a minute in our demo. The write-up became a portfolio piece I can explain end-to-end.',
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/campus-resource-finder-1.svg',
          alt: 'Search screen with tutoring and advising cards',
          caption: 'Search-first home view with service cards.',
        },
        {
          src: '/projects/campus-resource-finder-2.svg',
          alt: 'Detail card for the writing center',
          caption: 'Service detail with hours, booking, and directions.',
        },
      ],
    },
    {
      title: 'Home Lab Notes',
      slug: 'home-lab-notes',
      summary: 'Personal notes and diagrams from standing up a small Linux lab at home.',
      overview:
        'A living set of notes for a small home lab: network sketch, host inventory, and the commands I actually reuse.',
      problem:
        'I kept losing track of VLANs, snapshots, and which VM was safe to break during class labs.',
      approach: [
        'Documented a simple segmented layout (router → firewall VM → lab hosts).',
        'Captured baseline commands for SSH, updates, and service checks.',
        'Added “before you experiment” reminders so I do not wipe the wrong disk.',
      ],
      outcome:
        'Faster lab setup for coursework and a clearer story when interviewers ask how I learn outside class.',
      skills: ['Linux', 'Networking', 'Documentation'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/home-lab-notes-1.svg',
          alt: 'Network diagram and terminal notes for the home lab',
          caption: 'Network sketch plus the checklist I keep next to the terminal.',
        },
      ],
    },
    {
      title: 'Secure Setup Checklist',
      slug: 'secure-setup-checklist',
      summary: 'A short checklist for safer project setup before a class demo or team handoff.',
      overview:
        'A one-page checklist for student teams: secrets, scans, branch protection, and handoff notes before a demo.',
      problem:
        'Group projects often shipped with sample passwords in the repo and no owner listed for production access.',
      approach: [
        'Pulled common misses from class demos and club projects.',
        'Turned them into a short checklist teammates can finish in ten minutes.',
        'Tested the list on our own midterm repo before presenting.',
      ],
      outcome:
        'Fewer last-minute secrets in slides, and a reusable artifact I bring into internships.',
      skills: ['Security basics', 'Git', 'Documentation'],
      link: 'https://github.com/',
      screenshots: [
        {
          src: '/projects/secure-setup-checklist-1.svg',
          alt: 'Checklist document with security setup items',
          caption: 'The checklist layout used before demos and handoffs.',
        },
      ],
    },
  ],
};
