import React, { useState, useRef, useEffect } from 'react';
import './Space.css';
import ConsentModal from './ConsentModal';

// Topic data with unique information for each card
const topicData = [
  {
    title: 'OPT / CPT',
    description: 'Optional Practical Training & Curricular Practical Training',
    details: [
      'OPT allows 12 months of work authorization',
      'STEM OPT extends for additional 24 months',
      'CPT must be part of academic curriculum',
      'Requires DSO authorization before starting'
    ],
    icon: '🎓',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    hasRoadmap: true,
    roadmapType: 'opt-cpt'
  },
  {
    title: 'On-Campus Jobs',
    description: 'Employment opportunities within university campus',
    details: [
      'Up to 20 hours per week during academic year',
      'Full-time during breaks and summer',
      'No special authorization required',
      'Great for building experience and income'
    ],
    icon: '🏢',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    hasRoadmap: true,
    roadmapType: 'on-campus'
  },
  {
    title: 'Housing',
    description: 'Accommodation solutions for international students',
    details: [
      'On-campus dormitories and apartments',
      'Off-campus housing options and resources',
      'Roommate matching services',
      'Housing assistance programs available'
    ],
    icon: '🏠',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    hasRoadmap: true,
    roadmapType: 'housing'
  },
  {
    title: 'Mental Health',
    description: 'Support services for emotional well-being',
    details: [
      'Free counseling services on campus',
      '24/7 crisis hotlines available',
      'Cultural adjustment support groups',
      'Stress management workshops'
    ],
    icon: '🧠',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    hasRoadmap: true,
    roadmapType: 'mental-health'
  },
  {
    title: 'Scholarships',
    description: 'Financial aid opportunities for international students',
    details: [
      'Merit-based scholarships available',
      'Department-specific funding opportunities',
      'External scholarship databases',
      'Application deadlines and requirements'
    ],
    icon: '💰',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    hasRoadmap: true,
    roadmapType: 'scholarships'
  },
  {
    title: 'Clubs & Community',
    description: 'Student organizations and social networks',
    details: [
      'International student associations',
      'Cultural clubs and events',
      'Professional networking groups',
      'Volunteer and leadership opportunities'
    ],
    icon: '👥',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    hasRoadmap: true,
    roadmapType: 'clubs-community'
  },
  {
    title: 'Grades & Academic Tips',
    description: 'Academic success strategies and resources',
    details: [
      'Study skills workshops and tutoring',
      'Academic advising and course planning',
      'Time management techniques',
      'Research and writing support'
    ],
    icon: '📚',
    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    hasRoadmap: true,
    roadmapType: 'academic'
  },
  {
    title: 'Internships & Referrals',
    description: 'Career development and professional opportunities',
    details: [
      'Internship placement assistance',
      'Career fair and networking events',
      'Resume and interview preparation',
      'Alumni mentorship programs'
    ],
    icon: '💼',
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    hasRoadmap: true,
    roadmapType: 'internships-referrals'
  }
];

// Roadmap phase type
interface RoadmapPhase {
  phase: string;
  steps: { icon: string; text: string }[];
  subtitle?: string;
  subtitle2?: string;
  warning?: string;
  note?: string;
}

// Roadmap data for OPT/CPT
const optCptRoadmap: RoadmapPhase[] = [
  {
    phase: "1. First Semester – Get Settled",
    steps: [
      { icon: "✅", text: "Understand your F-1 visa rules (working limits, full-time study, etc.)" },
      { icon: "📚", text: "Attend your school's International Student Orientation" },
      { icon: "👩‍🏫", text: "Meet with your Designated School Official (DSO) in the international office" },
      { icon: "🧠", text: "Focus on academics: You must complete at least one full academic year before becoming eligible for CPT or OPT" }
    ]
  },
  {
    phase: "2. During First Year – Build Foundations",
    steps: [
      { icon: "💼", text: "Join career workshops or resume/interview prep sessions" },
      { icon: "🤝", text: "Attend job fairs, start networking, and consider joining clubs (especially related to your major)" },
      { icon: "📈", text: "Start tracking jobs/internships that mention \"OPT sponsorship available\"" }
    ]
  },
  {
    phase: "3. Before Applying for CPT (Curricular Practical Training)",
    subtitle: "Timing: Apply after completing one full academic year",
    subtitle2: "When to Use: For internships or training that are part of your curriculum",
    steps: [
      { icon: "✅", text: "Confirm internship or job offer (must be related to your major)" },
      { icon: "📝", text: "Enroll in a course or co-op program that requires/permits the internship" },
      { icon: "📤", text: "Apply for CPT authorization through your DSO" },
      { icon: "📬", text: "Receive new I-20 with CPT approval (wait before starting the job!)" },
      { icon: "🕒", text: "Work only within the approved dates & conditions" }
    ],
    warning: "⚠️ Note: Use of 12+ months of full-time CPT makes you ineligible for OPT."
  },
  {
    phase: "4. OPT (Optional Practical Training) – Final Year Planning",
    subtitle: "When to Use: For full-time work after graduation, or part-time during school",
    steps: [
      { icon: "📆", text: "Start planning 90 days before graduation (you can apply up to 90 days before & 60 days after graduation)" },
      { icon: "📩", text: "Talk to your DSO to request OPT recommendation" },
      { icon: "📝", text: "Submit Form I-765 (Application for Employment Authorization) to USCIS" },
      { icon: "🕐", text: "Wait 1–3 months for your EAD (Employment Authorization Document)" },
      { icon: "✅", text: "Start working only once your EAD arrives & start date begins" }
    ],
    note: "📌 You get 12 months of OPT. If you're in STEM, you can later apply for a 24-month STEM OPT extension."
  },
  {
    phase: "5. After Applying – While on OPT or CPT",
    steps: [
      { icon: "🧾", text: "Keep records: I-20s, EAD, employer letters, job offers" },
      { icon: "📨", text: "Report employment updates and address changes to your DSO or SEVIS portal" },
      { icon: "🛂", text: "Never work without authorization — it can affect your immigration status" }
    ]
  },
  {
    phase: "🧠 Pro Tips:",
    steps: [
      { icon: "📍", text: "Use your career services early (mock interviews, employer connections)" },
      { icon: "📚", text: "Take CPT-eligible courses if you want to intern early" },
      { icon: "🧪", text: "STEM majors: Check if your program qualifies for STEM OPT extension" },
      { icon: "🇺🇸", text: "Plan long-term: Know your H-1B timeline if you want to stay after OPT." }
    ]
  }
];

// Roadmap data for On-Campus Jobs
const onCampusJobsRoadmap: RoadmapPhase[] = [
  {
    phase: "1. First Weeks – Learn the Rules",
    steps: [
      { icon: "✅", text: "F-1 students are allowed to work on-campus up to:" },
      { icon: "⏱️", text: "20 hours/week during school semesters" },
      { icon: "⏳", text: "40 hours/week during breaks (winter/summer)" },
      { icon: "🧑‍💼", text: "No special authorization from USCIS is needed" },
      { icon: "👨‍🏫", text: "Visit your International Student Office to get clear guidance" }
    ]
  },
  {
    phase: "2. Start the Job Search",
    steps: [
      { icon: "🖥️", text: "Browse your school's student job board or career portal" },
      { icon: "📌", text: "Visit these common hiring areas:" },
      { icon: "📚", text: "Library" },
      { icon: "🍕", text: "Dining Services" },
      { icon: "🏋️", text: "Gym / Rec Center" },
      { icon: "💻", text: "IT Support" },
      { icon: "📖", text: "Campus Bookstore" },
      { icon: "🏫", text: "Academic Departments" },
      { icon: "💬", text: "Ask professors or staff if they know about openings" }
    ]
  },
  {
    phase: "3. Prepare Your Application",
    steps: [
      { icon: "🎯", text: "Update your resume (career center can help)" },
      { icon: "✍️", text: "Write a short cover letter (optional, but helpful)" },
      { icon: "📧", text: "Apply online or in-person (some jobs are very informal)" }
    ]
  },
  {
    phase: "4. Interview & Offer",
    steps: [
      { icon: "🤝", text: "Practice basic interview answers" },
      { icon: "📞", text: "Some departments may just do informal chats" },
      { icon: "📃", text: "Once offered: Ask for a job offer letter (with start date, hours, department)" }
    ]
  },
  {
    phase: "5. Apply for SSN (Social Security Number)",
    subtitle: "You need an SSN to get paid in the U.S.",
    steps: [
      { icon: "✅", text: "Get a job offer letter" },
      { icon: "🔖", text: "Visit International Student Office for an SSN support letter" },
      { icon: "🏛️", text: "Go to the Social Security Office with:" },
      { icon: "📄", text: "Passport, I-20, I-94, Offer letter, Support letter" },
      { icon: "📬", text: "Wait 1–3 weeks to receive your SSN card by mail" }
    ]
  },
  {
    phase: "6. Start Working On Campus",
    steps: [
      { icon: "🕓", text: "Don't exceed 20 hours/week during classes" },
      { icon: "✅", text: "Follow your schedule and report hours" },
      { icon: "💰", text: "You'll be paid every 2 weeks or monthly depending on school policy" }
    ]
  },
  {
    phase: "7. File Taxes (Yes, Even for On-Campus Work)",
    steps: [
      { icon: "📅", text: "Every spring, file your taxes:" },
      { icon: "📋", text: "Form 8843 (if no income)" },
      { icon: "📊", text: "Form 1040-NR + W-2 (if you worked)" },
      { icon: "💻", text: "Use Sprintax or Glacier Tax Prep (many schools offer free access)" }
    ]
  },
  {
    phase: "🧠 Pro Tips",
    steps: [
      { icon: "💡", text: "Take initiative — follow up on applications" },
      { icon: "🎓", text: "Prioritize jobs that help your resume (IT desk, research, tutoring)" },
      { icon: "🤝", text: "Build relationships with supervisors — they can refer you later" }
    ]
  }
];

// Roadmap data for Housing
const housingRoadmap: RoadmapPhase[] = [
  {
    phase: "1. Before You Arrive",
    steps: [
      { icon: "✅", text: "Decide: On-Campus or Off-Campus?" },
      { icon: "🏠", text: "On-Campus Pros: Easy, safe, furnished, close to class" },
      { icon: "🏘️", text: "Off-Campus Pros: More privacy, may be cheaper long-term" },
      { icon: "🎯", text: "Research Housing Options:" },
      { icon: "📱", text: "Check your university's housing portal" },
      { icon: "🔍", text: "Look up local rentals on: Zillow, Apartments.com, Facebook Groups, Craigslist" },
      { icon: "📨", text: "Contact:" },
      { icon: "🏢", text: "Housing office (for dorms)" },
      { icon: "🎓", text: "Admissions or international student services for resources" }
    ]
  },
  {
    phase: "2. Apply for On-Campus Housing (if chosen)",
    steps: [
      { icon: "📝", text: "Fill out housing application" },
      { icon: "🛌", text: "Select preferences (roommate type, shared/private, dorm style)" },
      { icon: "💳", text: "Pay deposit if required" },
      { icon: "📩", text: "Wait for room assignment" }
    ]
  },
  {
    phase: "3. Plan Off-Campus Housing (if chosen)",
    steps: [
      { icon: "📍", text: "Find areas near campus (walking/public transport preferred)" },
      { icon: "🏘️", text: "Look for apartments or rooms with:" },
      { icon: "🛡️", text: "Safe neighborhood" },
      { icon: "💡", text: "Inclusive rent (utilities, Wi-Fi)" },
      { icon: "📅", text: "Flexible lease (month-to-month or 6–12 months)" }
    ]
  },
  {
    phase: "4. Find Roommates (Optional but Useful)",
    steps: [
      { icon: "🤝", text: "Ask your university to match you with other students" },
      { icon: "📱", text: "Use:" },
      { icon: "📘", text: "Facebook/Discord groups" },
      { icon: "🎓", text: "University roommate matching platforms" },
      { icon: "📱", text: "Apps like Roomsurf, Roomi" }
    ]
  },
  {
    phase: "5. Sign Lease or Housing Contract",
    steps: [
      { icon: "🧐", text: "Read everything carefully before signing" },
      { icon: "❓", text: "Ask questions like:" },
      { icon: "💰", text: "What's included in rent?" },
      { icon: "📅", text: "Can I break the lease early?" },
      { icon: "🔧", text: "Who do I contact for repairs?" }
    ]
  },
  {
    phase: "6. Prepare Documents & Payments",
    subtitle: "Most landlords or campus housing will ask for:",
    steps: [
      { icon: "✈️", text: "Passport & Visa (F-1)" },
      { icon: "🏫", text: "I-20" },
      { icon: "💳", text: "Deposit (1–2 months rent)" },
      { icon: "🪪", text: "U.S. ID or Student ID" },
      { icon: "📑", text: "Proof of income or financial support (if off-campus)" }
    ]
  },
  {
    phase: "7. Move-In",
    steps: [
      { icon: "🛒", text: "Buy essentials: bedding, kitchen items, toiletries" },
      { icon: "🛏️", text: "Check for damage or missing items — document them!" },
      { icon: "🧼", text: "Clean and organize your space" }
    ]
  },
  {
    phase: "8. Ongoing Housing Tips",
    steps: [
      { icon: "📆", text: "Pay rent on time!" },
      { icon: "🚫", text: "Don't sublet or bring guests without asking" },
      { icon: "🧰", text: "Report issues to your RA or landlord ASAP" },
      { icon: "🧾", text: "Keep copies of lease and payment receipts" }
    ]
  },
  {
    phase: "9. Plan Ahead for Next Year",
    steps: [
      { icon: "🏠", text: "Off-campus: Renew or find a new place at least 2–3 months before lease ends" },
      { icon: "🏢", text: "On-campus: Re-apply early (many schools have limited housing)" }
    ]
  },
  {
    phase: "🧠 Bonus Tips",
    steps: [
      { icon: "🔐", text: "Always lock your doors" },
      { icon: "🛂", text: "Keep your passport & I-20 safe" },
      { icon: "📵", text: "Avoid scams — never send money before seeing a real lease or place" }
    ]
  }
];

// Roadmap data for Academic Success
const academicRoadmap: RoadmapPhase[] = [
  {
    phase: "🚨 Why It Matters",
    subtitle: "Maintaining good grades is crucial for:",
    steps: [
      { icon: "✅", text: "Staying in status on your F-1 visa" },
      { icon: "💼", text: "Eligibility for internships (CPT/OPT)" },
      { icon: "🎓", text: "Scholarships and honors" },
      { icon: "💻", text: "Getting into research, co-ops, grad school, or jobs" }
    ]
  },
  {
    phase: "1. First Week – Set Yourself Up",
    steps: [
      { icon: "📅", text: "Download your syllabus for every class" },
      { icon: "🔔", text: "Mark all exam dates, project deadlines, and assignment due dates" },
      { icon: "🧑‍🏫", text: "Attend all classes — even if they're early!" },
      { icon: "📚", text: "Get the textbooks, materials, and tools needed" }
    ]
  },
  {
    phase: "2. Build Strong Study Habits",
    steps: [
      { icon: "🕒", text: "Create a consistent weekly study schedule" },
      { icon: "⏳", text: "Study a little every day — avoid last-minute cramming" },
      { icon: "🧾", text: "Use active recall and spaced repetition (not just reading)" },
      { icon: "🤝", text: "Study with classmates — teaching others helps retention" }
    ]
  },
  {
    phase: "3. Use Support Resources",
    steps: [
      { icon: "🧑‍🏫", text: "Visit professor office hours (they're there to help!)" },
      { icon: "🧠", text: "Use tutoring centers or writing labs on campus" },
      { icon: "🧪", text: "Join study groups, learning communities, or Discord groups" },
      { icon: "📚", text: "Use school-provided software/tools (Grammarly, Chegg, etc. — if permitted)" }
    ]
  },
  {
    phase: "4. When Life Happens – Don't Panic",
    subtitle: "If you're overwhelmed, sick, or face an emergency:",
    steps: [
      { icon: "🚨", text: "Don't ghost or take the F." },
      { icon: "📧", text: "Email your professor as soon as possible" },
      { icon: "🙋", text: "Ask for an extension or alternate arrangement" },
      { icon: "💬", text: "Be honest: \"I'm going through a personal emergency. Could I get a short extension? I want to do my best but need a little time.\"" },
      { icon: "🧑‍🏫", text: "Most professors will appreciate the honesty and effort" }
    ]
  },
  {
    phase: "5. Track Your Grades",
    steps: [
      { icon: "📊", text: "Monitor your grades on Canvas/Blackboard/Moodle" },
      { icon: "📩", text: "Ask for feedback early if you're unsure about your performance" },
      { icon: "📘", text: "Take action fast if you're slipping — don't wait until the final exam" }
    ]
  },
  {
    phase: "6. Balance Is Key",
    steps: [
      { icon: "🧘", text: "Take breaks and protect your mental health" },
      { icon: "🍎", text: "Eat well, sleep enough, and get some exercise" },
      { icon: "🧑‍🤝‍🧑", text: "Don't isolate — talk to friends or counselors if stressed" }
    ]
  },
  {
    phase: "7. End of Semester Check",
    steps: [
      { icon: "📤", text: "Submit all work on time" },
      { icon: "🗨️", text: "Ask about extra credit opportunities if your grade is borderline" },
      { icon: "🎓", text: "Make sure you're on track for minimum GPA required for your program and visa" }
    ]
  },
  {
    phase: "💬 Quick Reminders",
    steps: [
      { icon: "📣", text: "Asking for help is smart — not weak" },
      { icon: "📬", text: "Professors respect communication, even if you're struggling" },
      { icon: "🧾", text: "Always keep records of emails, grades, and feedback" }
    ]
  }
];

// Roadmap data for Mental Health
const mentalHealthRoadmap: RoadmapPhase[] = [
  {
    phase: "💬 Why It Matters",
    subtitle: "Studying in a new country is exciting but also stressful",
    steps: [
      { icon: "😊", text: "It's normal to feel lonely, anxious, homesick, or overwhelmed" },
      { icon: "🎯", text: "Taking care of your mental health helps you succeed in school, relationships, and life" }
    ]
  },
  {
    phase: "1. Know What's Available",
    subtitle: "Ask or search your school's website for:",
    steps: [
      { icon: "🏥", text: "Counseling Services: Free therapy or mental health sessions" },
      { icon: "🧘", text: "Wellness Workshops: Stress, sleep, mindfulness, and time management sessions" },
      { icon: "📞", text: "Crisis Hotlines or Text Support: Available 24/7" },
      { icon: "👨‍🏫", text: "International Student Advisors: Can guide you if you're struggling" }
    ]
  },
  {
    phase: "2. Talk to Someone",
    steps: [
      { icon: "🤝", text: "Reach out early — don't wait until it gets really bad" },
      { icon: "🗣", text: "You can speak to:" },
      { icon: "🧑‍⚕️", text: "A school counselor" },
      { icon: "👨‍🏫", text: "A trusted professor or advisor" },
      { icon: "👥", text: "Friends or roommates" },
      { icon: "🧑‍💻", text: "Most universities offer virtual counseling sessions too" }
    ]
  },
  {
    phase: "3. Navigate the First Appointment",
    steps: [
      { icon: "🗓️", text: "Book online or walk into the counseling center" },
      { icon: "📄", text: "Some schools require a quick intake form first" },
      { icon: "🧑‍⚕️", text: "You'll meet with a counselor to talk and plan next steps (therapy, workshops, etc.)" },
      { icon: "⚠️", text: "It's confidential — your visa, grades, or professors are not affected" }
    ]
  },
  {
    phase: "4. Build Healthy Routines",
    steps: [
      { icon: "💤", text: "Sleep at least 7–8 hours a night" },
      { icon: "🍎", text: "Eat regular meals and drink water" },
      { icon: "🏃", text: "Move your body — gym, yoga, walking" },
      { icon: "🧘", text: "Practice stress relief: meditation, breathing, journaling" },
      { icon: "📴", text: "Take breaks from screens and social media" }
    ]
  },
  {
    phase: "5. Recognize Signs You Need Support",
    subtitle: "You don't need to \"wait until you're falling apart.\" Get help if you feel:",
    steps: [
      { icon: "😞", text: "Constant sadness or lack of motivation" },
      { icon: "😰", text: "Extreme stress, panic attacks" },
      { icon: "😶", text: "Trouble sleeping or eating" },
      { icon: "🧍", text: "Isolated or homesick for long periods" },
      { icon: "💔", text: "Struggling after a breakup, death, or personal crisis" }
    ]
  },
  {
    phase: "6. In a Crisis?",
    subtitle: "If you or someone you know is in danger or talking about suicide:",
    steps: [
      { icon: "🚨", text: "Call 911 or go to the nearest ER" },
      { icon: "📲", text: "Text \"HELLO\" to 741741 (Crisis Text Line)" },
      { icon: "☎️", text: "Call 988 (Mental Health & Suicide Hotline)" }
    ],
    warning: "⚠️ These are emergency resources. Don't hesitate to use them if you or someone you know is in crisis."
  },
  {
    phase: "7. Keep Mental Health a Habit",
    steps: [
      { icon: "👥", text: "Check in with yourself and your friends regularly" },
      { icon: "🧠", text: "Don't ignore early signs — treat your mind like you'd treat an injury" },
      { icon: "❤️", text: "Use your support system — you're not alone" }
    ]
  }
];

// Roadmap data for Clubs & Community
const clubsCommunityRoadmap: RoadmapPhase[] = [
  {
    phase: "1. First Step – Know What's Out There",
    steps: [
      { icon: "🔎", text: "Visit your school's Student Life or Campus Activities webpage" },
      { icon: "📱", text: "Use apps or portals your university might offer (like UMass Lowell Engage, CampusGroups, or Presence)" },
      { icon: "🏛️", text: "Go to your school's Club Fair (usually during orientation or the first week)" }
    ]
  },
  {
    phase: "2. Explore Your Interests",
    subtitle: "Start by asking:",
    steps: [
      { icon: "💭", text: "What do I love doing?" },
      { icon: "🤔", text: "What am I curious to try?" },
      { icon: "❤️", text: "What causes or cultures do I care about?" },
      { icon: "🔹", text: "Categories to consider:" },
      { icon: "🎨", text: "Arts & hobbies (e.g., photography, dance, coding, chess)" },
      { icon: "🌍", text: "Cultural or international clubs" },
      { icon: "🧠", text: "Academic & major-based clubs" },
      { icon: "💬", text: "Public speaking or debate" },
      { icon: "🧘", text: "Wellness or mental health groups" },
      { icon: "🤝", text: "Volunteering & service organizations" },
      { icon: "🧪", text: "Research, innovation, or startup clubs" }
    ]
  },
  {
    phase: "3. Join and Show Up",
    steps: [
      { icon: "📆", text: "Attend interest meetings or first events — no pressure to commit!" },
      { icon: "🗣️", text: "Introduce yourself to officers or members" },
      { icon: "🧑‍🎓", text: "Don't be afraid to go alone — many other students are new too!" },
      { icon: "💡", text: "Tip: Go to at least 2–3 different clubs to find your fit" }
    ]
  },
  {
    phase: "4. Stay Involved and Take Initiative",
    steps: [
      { icon: "✅", text: "Join group chats (Slack, Discord, GroupMe, etc.)" },
      { icon: "🧭", text: "Volunteer for small roles (event setup, social media help)" },
      { icon: "🎯", text: "Attend regularly — even just showing up builds friendships" },
      { icon: "🧑‍💼", text: "Later on, consider becoming a club officer or leader" }
    ]
  },
  {
    phase: "5. Go Beyond Clubs",
    steps: [
      { icon: "🏀", text: "Join intramural sports or fitness classes" },
      { icon: "🧘", text: "Try meditation, hiking, or recreation groups" },
      { icon: "📸", text: "Start your own club if you don't find one that fits!" },
      { icon: "👩‍🏫", text: "Ask professors if they know about research teams or learning communities" }
    ]
  },
  {
    phase: "6. Build Real Connections",
    steps: [
      { icon: "👋", text: "Talk to people after meetings — even a quick \"Hi, I'm new here\" goes a long way" },
      { icon: "☕", text: "Invite someone to study together, grab coffee, or attend another event" },
      { icon: "📲", text: "Follow the club's social media to stay updated and interact online" }
    ]
  },
  {
    phase: "🧠 Bonus: Tips for Shy or Introverted Students",
    steps: [
      { icon: "🌱", text: "Start with smaller clubs or discussion-based groups" },
      { icon: "👯", text: "Bring a friend to the first meeting if you can" },
      { icon: "✍️", text: "Join clubs that involve creativity or shared activities (art, writing, coding)" }
    ]
  },
  {
    phase: "🚀 Remember",
    steps: [
      { icon: "⏰", text: "Making friends takes time — but joining a community is one of the best parts of college life" },
      { icon: "🌱", text: "You'll grow, network, and make memories that last a lifetime" }
    ]
  }
];

// Roadmap data for Internships & Referrals
const internshipsReferralsRoadmap: RoadmapPhase[] = [
  {
    phase: "1. First Semester – Set the Foundation",
    steps: [
      { icon: "✍️", text: "Build a strong resume (highlight school projects, coursework, personal work)" },
      { icon: "🧑‍💻", text: "Create/Update your LinkedIn profile" },
      { icon: "📸", text: "Add a profile photo, banner, and a short summary" },
      { icon: "🤝", text: "Connect with classmates, professors, and school alumni" },
      { icon: "📚", text: "Focus on grades — many internships require a minimum GPA" }
    ]
  },
  {
    phase: "2. Start Searching Early (Very Early!)",
    subtitle: "Apply 5–8 months before summer internships!",
    steps: [
      { icon: "💼", text: "Start looking at roles on:" },
      { icon: "🔗", text: "LinkedIn Jobs" },
      { icon: "🤝", text: "Handshake" },
      { icon: "🔍", text: "Indeed" },
      { icon: "📋", text: "Intern Supply" },
      { icon: "🎓", text: "Your school's career portal" },
      { icon: "📊", text: "Make a spreadsheet to track:" },
      { icon: "🏢", text: "Companies" },
      { icon: "📈", text: "Application status" },
      { icon: "⏰", text: "Deadlines" },
      { icon: "👥", text: "Referral contacts" }
    ]
  },
  {
    phase: "3. Build Your Referral Network",
    steps: [
      { icon: "🔎", text: "Use LinkedIn to find people at companies you're targeting" },
      { icon: "🎯", text: "Filter by job title + school (ex: \"Software Engineer\" + \"UMass Lowell\")" },
      { icon: "💬", text: "Send short, polite connection messages:" },
      { icon: "📝", text: "\"Hi [Name], I'm a CS student at [School] interested in learning about your experience at [Company]. I'd love to connect!\"" },
      { icon: "✅", text: "Once connected, ask for advice — not a job right away" },
      { icon: "💭", text: "\"Would you be open to sharing your internship journey at [Company]?\"" },
      { icon: "🙌", text: "If the conversation goes well, you can ask:" },
      { icon: "🎯", text: "\"If you're comfortable, could you refer me for [Role]? I'd be very grateful.\"" }
    ]
  },
  {
    phase: "4. Work on Projects & Build Experience",
    steps: [
      { icon: "🧱", text: "Contribute to personal projects, GitHub, open-source, or school hackathons" },
      { icon: "🌐", text: "Create a portfolio website to show off your work" },
      { icon: "📽", text: "Share what you're working on via LinkedIn posts — it gets attention!" }
    ]
  },
  {
    phase: "5. Practice Interviews & Applications",
    steps: [
      { icon: "💻", text: "Use platforms like LeetCode, HackerRank, or Pramp" },
      { icon: "🗣️", text: "Practice behavioral interviews using the STAR method" },
      { icon: "📨", text: "Apply broadly — but personalize your resume/cover letter" }
    ]
  },
  {
    phase: "6. Don't Wait — START NOW",
    subtitle: "Freshmen & sophomores: apply to early programs like:",
    steps: [
      { icon: "🔍", text: "Google STEP" },
      { icon: "🪟", text: "Microsoft Explore" },
      { icon: "📘", text: "Meta University" },
      { icon: "🏦", text: "JPMorgan Launching Leaders" },
      { icon: "⏰", text: "Remember: Early is on time, on time is late, and late is unacceptable." }
    ]
  },
  {
    phase: "📌 Bonus Tips",
    steps: [
      { icon: "🧠", text: "Be consistent — set weekly goals for networking/applying" },
      { icon: "👀", text: "Ask professors, TAs, or past interns for mock interviews or resume feedback" },
      { icon: "✉️", text: "Follow up with referrals — gratitude goes a long way" }
    ]
  }
];

// Roadmap data for Scholarships
const scholarshipsRoadmap: RoadmapPhase[] = [
  {
    phase: "💡 Reminder",
    subtitle: "It is NOT impossible to get scholarships — checking your school portal is normal and smart. Many students miss out simply because they don't look.",
    steps: [
      { icon: "✅", text: "Many students miss out simply because they don't look" },
      { icon: "🎯", text: "Checking your school portal is normal and smart" }
    ]
  },
  {
    phase: "1. Start with Your School Scholarships",
    steps: [
      { icon: "🏫", text: "Go to your university's scholarship portal or financial aid page" },
      { icon: "🔍", text: "Search for terms like \"international student scholarships,\" \"merit aid,\" or \"departmental awards\"" },
      { icon: "✅", text: "Many schools offer:" },
      { icon: "📊", text: "Merit-based scholarships (based on GPA or achievements)" },
      { icon: "🎓", text: "Departmental scholarships (given by your major or college)" },
      { icon: "💵", text: "Need-based aid (sometimes available even to international students)" },
      { icon: "📬", text: "If unsure, email your school's scholarship or financial aid office — they're there to help!" }
    ]
  },
  {
    phase: "2. Check Scholarships Each Semester",
    steps: [
      { icon: "🎯", text: "Many scholarships open before the semester starts or mid-semester" },
      { icon: "📅", text: "Mark your calendar to check each term" },
      { icon: "✍️", text: "Save required materials like:" },
      { icon: "📄", text: "Resume" },
      { icon: "📝", text: "Short personal statement" },
      { icon: "📨", text: "Recommendation letters" }
    ]
  },
  {
    phase: "3. Look for External Scholarships Too",
    subtitle: "Use these platforms to find non-school scholarships:",
    steps: [
      { icon: "🌍", text: "IEFA.org" },
      { icon: "🌱", text: "Scholarships360.org" },
      { icon: "🔍", text: "Fastweb" },
      { icon: "🧾", text: "Bold.org" },
      { icon: "🌐", text: "ProFellow.com" },
      { icon: "🎯", text: "Search filters to use:" },
      { icon: "📚", text: "Your major" },
      { icon: "🌍", text: "Your country of origin" },
      { icon: "👥", text: "Women in STEM, first-generation, or minority scholarships" }
    ]
  },
  {
    phase: "4. Apply Smart, Not Just Hard",
    steps: [
      { icon: "✅", text: "Focus on scholarships that match your story or background" },
      { icon: "🗣️", text: "Don't be afraid to re-use essays with slight tweaks" },
      { icon: "📚", text: "Use your school's writing center for help reviewing your application" }
    ]
  },
  {
    phase: "5. Ask for Help and Recommendations",
    steps: [
      { icon: "👨‍🏫", text: "Ask professors, advisors, or internship mentors for recommendation letters" },
      { icon: "🧑‍🤝‍🧑", text: "Talk to upperclassmen — they may know about hidden scholarships" }
    ]
  },
  {
    phase: "6. Track and Follow Up",
    steps: [
      { icon: "📊", text: "Create a spreadsheet to track:" },
      { icon: "🏆", text: "Scholarship name" },
      { icon: "⏰", text: "Deadline" },
      { icon: "📄", text: "Required documents" },
      { icon: "📈", text: "Status (submitted, pending, awarded)" },
      { icon: "📨", text: "After applying, check your email regularly for updates" }
    ]
  },
  {
    phase: "✨ Final Tips",
    steps: [
      { icon: "🔁", text: "Reapply each year — some scholarships renew, others don't" },
      { icon: "🗣️", text: "It's okay to ask your department if they have unlisted opportunities" },
      { icon: "🌟", text: "Don't get discouraged — every dollar helps, and many scholarships go unclaimed!" }
    ]
  }
];

// Circular Crystal Card Component
const CrystalCircle = ({ data, index, onCardClick }: { 
  data: typeof topicData[0]; 
  index: number;
  onCardClick: (data: typeof topicData[0]) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={circleRef}
      className={`crystal-circle ${isHovered ? 'hovered' : ''}`}
      style={{
        '--circle-color': data.color,
        '--animation-delay': `${index * 0.1}s`
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(data)}
    >
      <div className="circle-content">
        <div className="circle-icon">{data.icon}</div>
        <h3 className="circle-title">{data.title}</h3>
        <div className="circle-glow"></div>
      </div>
    </div>
  );
};

// Connection Line Component
const ConnectionLine = ({ from, to, color }: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
}) => {
  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;
  const centerX = (from.x + to.x) / 2;
  const centerY = (from.y + to.y) / 2;

  return (
    <div
      className="connection-line"
      style={{
        left: `${centerX}px`,
        top: `${centerY}px`,
        width: `${length}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        '--line-color': color
      } as React.CSSProperties}
    >
      <div className="line-arrow"></div>
    </div>
  );
};

// Roadmap Modal Component
const RoadmapModal = ({ isOpen, onClose, roadmapType }: {
  isOpen: boolean;
  onClose: () => void;
  roadmapType: string;
}) => {
  if (!isOpen) return null;

  const roadmapData = roadmapType === 'opt-cpt' ? optCptRoadmap : 
                     roadmapType === 'on-campus' ? onCampusJobsRoadmap :
                     roadmapType === 'housing' ? housingRoadmap :
                     roadmapType === 'academic' ? academicRoadmap :
                     roadmapType === 'mental-health' ? mentalHealthRoadmap :
                     roadmapType === 'clubs-community' ? clubsCommunityRoadmap :
                     roadmapType === 'internships-referrals' ? internshipsReferralsRoadmap :
                     roadmapType === 'scholarships' ? scholarshipsRoadmap : optCptRoadmap;
  const roadmapConfig = {
    'opt-cpt': {
      title: 'OPT/CPT Roadmap',
      subtitle: 'Your complete guide to work authorization for international students',
      icon: '🎓',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    'on-campus': {
      title: 'On-Campus Jobs Roadmap',
      subtitle: 'Your complete guide to finding and working on-campus jobs',
      icon: '🏢',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    'housing': {
      title: 'International Student Housing Roadmap',
      subtitle: 'Your complete guide to finding and managing housing in the U.S.',
      icon: '🏠',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    'academic': {
      title: 'Academic Success Roadmap',
      subtitle: 'Your complete guide to maintaining good grades and academic success',
      icon: '📚',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    'mental-health': {
      title: 'Mental Health Resource Roadmap',
      subtitle: 'Your complete guide to mental health support and wellness',
      icon: '🧠',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    'clubs-community': {
      title: 'Clubs & Community Roadmap',
      subtitle: 'Your complete guide to finding clubs and building connections',
      icon: '👥',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    'internships-referrals': {
      title: 'Internships & Referrals Roadmap',
      subtitle: 'Your complete guide to landing internships and building a network',
      icon: '💼',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    'scholarships': {
      title: 'Scholarship Roadmap',
      subtitle: 'Your complete guide to finding and applying for scholarships',
      icon: '💰',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  };

  const config = roadmapConfig[roadmapType as keyof typeof roadmapConfig];

  return (
    <div className="modal-overlay roadmap-overlay" onClick={onClose}>
      <div className="roadmap-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="roadmap-header" style={{ background: config.color }}>
          <div className="roadmap-icon">{config.icon}</div>
          <h2 className="roadmap-title">{config.title}</h2>
          <p className="roadmap-subtitle">{config.subtitle}</p>
        </div>

        <div className="roadmap-content">
          {roadmapData.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="roadmap-phase">
              <div className="phase-header">
                <div className="phase-number" style={{ background: config.color }}>{phaseIndex + 1}</div>
                <h3 className="phase-title">{phase.phase}</h3>
              </div>
              
              {phase.subtitle && (
                <p className="phase-subtitle">{phase.subtitle}</p>
              )}
              {phase.subtitle2 && (
                <p className="phase-subtitle">{phase.subtitle2}</p>
              )}
              
              <div className="phase-steps">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="roadmap-step">
                    <div className="step-icon">{step.icon}</div>
                    <div className="step-text">{step.text}</div>
                  </div>
                ))}
              </div>
              
              {phase.warning && (
                <div className="phase-warning">
                  <span className="warning-icon">⚠️</span>
                  <span className="warning-text">{phase.warning}</span>
                </div>
              )}
              
              {phase.note && (
                <div className="phase-note">
                  <span className="note-icon">📌</span>
                  <span className="note-text">{phase.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Modal Component for detailed view
const DetailModal = ({ data, isOpen, onClose }: {
  data: typeof topicData[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <div className="modal-icon">{data.icon}</div>
          <h2 className="modal-title">{data.title}</h2>
        </div>
        <p className="modal-description">{data.description}</p>
        <div className="modal-details">
          {data.details.map((detail, idx) => (
            <div key={idx} className="modal-detail-item">
              <span className="modal-detail-bullet">•</span>
              <span className="modal-detail-text">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Space Component
const Space: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<typeof topicData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [roadmapType, setRoadmapType] = useState<string>('');
  const [connections, setConnections] = useState<Array<{from: number, to: number}>>([]);
  const circlesRef = useRef<HTMLDivElement>(null);
  
  // Consent modal state
  const [showConsentModal, setShowConsentModal] = useState(true);
  const [showSpaceContent, setShowSpaceContent] = useState(false);

  // Generate web-like connections
  useEffect(() => {
    const newConnections = [];
    for (let i = 0; i < topicData.length; i++) {
      // Connect to next 2-3 nodes to create web pattern
      for (let j = 1; j <= 3; j++) {
        const nextIndex = (i + j) % topicData.length;
        if (i !== nextIndex) {
          newConnections.push({ from: i, to: nextIndex });
        }
      }
    }
    setConnections(newConnections);
  }, []);

  const handleCardClick = (data: typeof topicData[0]) => {
    setSelectedCard(data);
    if (data.hasRoadmap) {
      setRoadmapType(data.roadmapType || '');
      setIsRoadmapOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const closeRoadmap = () => {
    setIsRoadmapOpen(false);
    setSelectedCard(null);
    setRoadmapType('');
  };

  const handleConsentAccept = () => {
    setShowConsentModal(false);
    setShowSpaceContent(true);
  };

  return (
    <>
      {/* Consent Modal - shows first */}
      <ConsentModal 
        isVisible={showConsentModal} 
        onAccept={handleConsentAccept} 
      />
      
      {/* Space Content - only show after consent */}
      {showSpaceContent && (
    <div className="space-container">
      {/* Animated background */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      
      {/* Header */}
      <div className="space-header">
        <h1 className="main-title">The International Students Space</h1>
        <p className="subtitle">Your comprehensive guide to international student life</p>
      </div>
      
      {/* Web Layout */}
      <div className="web-container" ref={circlesRef}>
        {/* Connection Lines */}
        {connections.map((connection) => (
          <ConnectionLine
            key={`${connection.from}-${connection.to}`}
            from={{ x: 0, y: 0 }} // Will be calculated by CSS
            to={{ x: 0, y: 0 }}   // Will be calculated by CSS
            color={topicData[connection.from].color}
          />
        ))}
        
        {/* Circular Cards */}
        <div className="circles-grid">
          {topicData.map((data, index) => (
            <CrystalCircle
              key={data.title}
              data={data}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--particle-delay': `${Math.random() * 5}s`,
              '--particle-duration': `${Math.random() * 3 + 2}s`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>

      {/* Detail Modal */}
      <DetailModal
        data={selectedCard}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Roadmap Modal */}
      <RoadmapModal
        isOpen={isRoadmapOpen}
        onClose={closeRoadmap}
        roadmapType={roadmapType}
      />
    </div>
      )}
    </>
  );
};

export default Space;
