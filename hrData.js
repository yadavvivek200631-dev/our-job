// Placify - HR & Behavioral Interview Preparation Dataset
window.PLACIFY_HR = {
  starFramework: {
    title: "The S-T-A-R Framework",
    subtitle: "The gold standard methodology used by Google, Amazon, and top recruiters to assess behavioral responses.",
    steps: [
      {
        letter: "S",
        name: "Situation",
        desc: "Set the context and background. Describe the specific challenge, project, or circumstance you were facing in concise detail (where, when, who).",
        weight: "15% of your answer"
      },
      {
        letter: "T",
        name: "Task",
        desc: "Specify your personal responsibility or role in that scenario. What was the exact objective or goal you needed to accomplish?",
        weight: "15% of your answer"
      },
      {
        letter: "A",
        name: "Action",
        desc: "Describe the concrete actions YOU personally took. Emphasize your problem-solving, collaboration, tools, and technical decisions ('I decided...', 'I researched...').",
        weight: "50% of your answer"
      },
      {
        letter: "R",
        name: "Result",
        desc: "Quantify the outcome and key learnings. Highlight metrics, percentage improvements, delivery timeliness, awards, or team impact.",
        weight: "20% of your answer"
      }
    ]
  },
  questions: [
    {
      id: "hr-1",
      category: "Personal & Introduction",
      question: "Tell me about yourself.",
      frequency: "Asked in 100% of Interviews",
      interviewerWants: "A structured, 90-second elevator pitch connecting your academic background, core technical skills, high-impact projects, and why you are excited for this specific role.",
      structureTip: "Use the Past -> Present -> Future formula.",
      modelAnswer: `Hello, thank you for this opportunity! 

I am currently a final-year Computer Science undergraduate at [Your College/University] with a passionate focus on full-stack web engineering and scalable distributed systems.

Throughout my college journey, I have built several production-grade applications. Most notably, I developed a collaborative real-time code editor that handles concurrent edits via WebSockets, which was awarded 1st place at our university hackathon among 80+ teams. In my coursework, I have developed strong foundations in Data Structures, Algorithms, and Database Management.

In addition to academics, I actively solve algorithmic challenges on LeetCode with 350+ solved problems and contribute to open-source developer tools.

I've been following [Company Name]'s recent work in [mention specific product or tech initiative], and I'm very eager to bring my strong problem-solving skills and fast-learning mindset to your engineering team as an SDE fresher.`,
      dos: [
        "Keep it concise between 60 to 90 seconds.",
        "Tailor your ending to the company and role you are interviewing for.",
        "Highlight 1-2 proudest tangible project achievements with metrics."
      ],
      donts: [
        "Don't recite your entire resume chronological history line-by-line.",
        "Don't talk excessively about personal life, childhood hobbies, or unrelated family background.",
        "Don't sound rehearsed or robotic; maintain genuine energy and warmth."
      ]
    },
    {
      id: "hr-2",
      category: "Behavioral & Conflict",
      question: "Describe a situation where you had a disagreement with a team member. How did you resolve it?",
      frequency: "High Frequency (Amazon / Google / TCS)",
      interviewerWants: "Emotional intelligence, maturity, data-driven disagreement, and constructive conflict resolution without ego.",
      structureTip: "Focus on the objective data, active listening, and team harmony.",
      modelAnswer: `During our final year capstone project, our team of four was deciding whether to use MongoDB or PostgreSQL for our healthcare patient appointment platform.

My teammate advocated for MongoDB due to rapid prototyping, while I argued for PostgreSQL because patient billing and appointment slots required strict ACID transactions and relational foreign key constraints to prevent duplicate bookings.

Instead of debating subjectively, I suggested we build a 1-day proof of concept testing concurrent appointment bookings and draft a simple matrix comparing transaction safety and schema validation. When we ran simultaneous test bookings, we observed race condition anomalies with unconstrained document writes, while PostgreSQL's transactional isolation prevented conflicting slots cleanly.

My teammate appreciated the practical demonstration, and we collaboratively proceeded with PostgreSQL. We finished the project two weeks ahead of schedule and secured the highest grade in our department. This taught me that objective data and respectful collaboration always resolve technical disagreements faster than opinions.`,
      dos: [
        "Emphasize that the disagreement was technical/process-focused, never personal.",
        "Highlight how you used data, prototypes, or team consensus to reach resolution.",
        "Show respect for the teammate's perspective."
      ],
      donts: [
        "Never badmouth the teammate or portray yourself as the sole genius.",
        "Don't say 'I never have disagreements with anyone'—interviewers know this is unrealistic."
      ]
    },
    {
      id: "hr-3",
      category: "Self-Awareness",
      question: "What is your greatest weakness?",
      frequency: "Common HR Trap",
      interviewerWants: "Genuine self-awareness and proactive steps you are taking to overcome this weakness.",
      structureTip: "State an authentic technical or procedural weakness + the tangible mechanism you use to mitigate it.",
      modelAnswer: `Earlier in my college projects, I tended to spend excessive time striving for absolute perfection in code architecture before having an operational prototype. I would spend days researching the optimal design pattern or CSS framework, which occasionally compressed our sprint timelines for testing.

To address this, I adopted the 'Iterative MVP' mindset. Now, I timebox my architectural research and prioritize shipping a functioning minimum viable feature first, followed by scheduled refactoring iterations based on real test feedback. This has significantly increased my delivery velocity while still keeping my code maintainable.`,
      dos: [
        "Pick a genuine professional weakness that does not disqualify you from the job.",
        "Spend 80% of your time explaining the concrete systems or habits you built to fix it."
      ],
      donts: [
        "Avoid cliché pseudo-weaknesses like 'I work too hard' or 'I am too much of a perfectionist'.",
        "Don't mention red flags like 'I miss deadlines' or 'I don't like working with others'."
      ]
    },
    {
      id: "hr-4",
      category: "Company Knowledge",
      question: "Why do you want to join our company?",
      frequency: "Must-Prepare Question",
      interviewerWants: "Evidence that you researched the company's culture, mission, technical stack, or recent business achievements.",
      structureTip: "Mention 1 product/tech feature + 1 cultural pillar + how you can contribute.",
      modelAnswer: `I have been following [Company]'s engineering blog, particularly your recent migration of high-throughput messaging pipelines to distributed microservices. What impresses me most is your culture of engineering autonomy and rapid experimentation.

During my undergraduate projects, I loved solving scalability challenges, and I see [Company] as the ideal ecosystem where I can be mentored by world-class architects while making meaningful contributions to products used by millions of daily users. The alignment between your technical mission and my personal engineering growth makes this role my top choice.`,
      dos: [
        "Reference specific recent company milestones, engineering blogs, or core values.",
        "Articulate how your personal values align with theirs."
      ],
      donts: [
        "Don't give generic answers that could apply to any company (e.g. 'You are a reputed brand').",
        "Don't mention salary, perks, or location as the primary reason."
      ]
    },
    {
      id: "hr-5",
      category: "Situational & Pressure",
      question: "Tell me about a time you failed or missed a deadline.",
      frequency: "High Frequency",
      interviewerWants: "Accountability, resilience, crisis communication, and lessons learned.",
      structureTip: "Take ownership without making excuses, describe the mitigation, and share the long-term learning.",
      modelAnswer: `In my third semester, I volunteered to lead the backend integration for our college tech fest registration portal. Two days before launch, our payment gateway webhook began failing under simulated concurrent load because I had underestimated connection pooling limits.

Instead of concealing the delay, I immediately notified the faculty coordinator and tech committee, explained the root cause transparently, and proposed an interim contingency plan using verified manual slip uploads for the first 6 hours while I patched the connection pool with Redis caching.

We worked through the night, deployed the fix, and processed over 3,000 successful registrations without further incident. From that experience, I learned the critical importance of load testing early and maintaining open, proactive stakeholder communication during unforeseen crises.`,
      dos: [
        "Take complete personal accountability without blaming teammates or servers.",
        "Demonstrate high composure and proactive communication during stress."
      ],
      donts: [
        "Don't blame external factors like professors, teammates, or bad luck.",
        "Don't pick a failure where the ending was catastrophic and unresolved."
      ]
    }
  ]
};
