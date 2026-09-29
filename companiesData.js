// Placify - Company-wise Hiring Processes & Preparation Roadmaps
window.PLACIFY_COMPANIES = [
  {
    id: "comp-google",
    name: "Google",
    tier: "Tier 1 Product",
    category: "Product",
    logo: "https://www.google.com/favicon.ico",
    color: "#4285F4",
    packageInfo: {
      ctc: "₹25 - ₹35 LPA",
      base: "₹18 - ₹20 LPA",
      stocks: "$30,000 (vested over 4 yrs)",
      bonus: "15% annual target bonus"
    },
    eligibility: {
      degree: "B.Tech / B.E / M.Tech / Dual Degree in CS/IT/ECE/Maths",
      cgpaCutoff: "7.0+ CGPA (Relaxed for exceptional coding profiles)",
      backlogs: "No active backlogs at time of interview",
      gapYears: "Up to 1 year gap accepted with valid justification"
    },
    examPattern: [
      { round: "Round 1", name: "Google Online Challenge", format: "2 Algorithmic Coding Questions (HackerEarth)", duration: "90 Mins", focus: "Medium/Hard Dynamic Programming, Segment Trees, Graphs" },
      { round: "Round 2", name: "Technical Interview 1", format: "Virtual 1:1 on Google Meet + Google Docs", duration: "45 Mins", focus: "Data structures, Trees, Hash Maps, Time complexity proofs" },
      { round: "Round 3", name: "Technical Interview 2", format: "Virtual 1:1 on Google Meet", duration: "45 Mins", focus: "Advanced Algorithms, Graph Traversals (BFS/DFS), Greedy" },
      { round: "Round 4", name: "Googliness & Leadership", format: "Behavioral & Culture Fit", duration: "45 Mins", focus: "Bias for action, ethics, handling ambiguity, empathy" }
    ],
    previousQuestions: [
      "Find the median of two sorted arrays of different sizes in O(log(min(m, n))) time.",
      "Design a data structure that supports insert, delete, getRandom in O(1) time.",
      "Given a 2D matrix of characters, find if a word exists (Word Search II with Trie).",
      "Serialize and deserialize a Binary Tree."
    ],
    roadmap: [
      { week: "Week 1", goal: "Arrays, Two Pointers, Sliding Window, and Hash Maps (50 problems)" },
      { week: "Week 2", goal: "Binary Trees, BSTs, Traversals, and Heaps (40 problems)" },
      { week: "Week 3", goal: "Graphs (BFS/DFS/Dijkstra/Topological Sort) and Dynamic Programming (40 problems)" },
      { week: "Week 4", goal: "Mock Interviews on Google Docs without IDE auto-complete + Googliness STAR preparation" }
    ]
  },
  {
    id: "comp-amazon",
    name: "Amazon",
    tier: "Tier 1 Product",
    category: "Product",
    logo: "https://www.amazon.com/favicon.ico",
    color: "#FF9900",
    packageInfo: {
      ctc: "₹28 - ₹34 LPA",
      base: "₹17 - ₹19 LPA",
      stocks: "5-10 RSUs (5%, 15%, 40%, 40% vesting)",
      bonus: "₹3.5 - ₹4.5 LPA sign-on bonus for Year 1 & 2"
    },
    eligibility: {
      degree: "B.Tech / B.E / MCA in CS / IT / allied branches",
      cgpaCutoff: "6.5+ CGPA or 65% throughout graduation",
      backlogs: "Zero active backlogs at time of selection",
      gapYears: "Max 1 year allowed"
    },
    examPattern: [
      { round: "Round 1", name: "Amazon OA (Online Assessment)", format: "2 Coding Questions + Work Style Behavioral (HackerRank)", duration: "105 Mins", focus: "Arrays, Strings, Trees, Amazon 16 Leadership Principles" },
      { round: "Round 2", name: "Technical Interview 1", format: "Live Coding on Chime", duration: "60 Mins", focus: "DSA (Binary Search, Priority Queues, DP) + 1 LP question" },
      { round: "Round 3", name: "Technical Interview 2", format: "OOPS, Low-Level Design & Coding", duration: "60 Mins", focus: "Design Parking Lot / LRU Cache + 1 LP question" },
      { round: "Round 4", name: "Bar Raiser Interview", format: "Principal Engineer / Bar Raiser", duration: "60 Mins", focus: "Deep architectural trade-offs + High-stakes Leadership Principles" }
    ],
    previousQuestions: [
      "Top K Frequent Words / Elements using Min-Heap.",
      "Rotting Oranges / Multi-source BFS on a Grid.",
      "LRU Cache implementation with Doubly Linked List and Hash Map.",
      "Binary Tree Maximum Path Sum."
    ],
    roadmap: [
      { week: "Week 1", goal: "Master Priority Queues/Heaps, Hash Maps, and Binary Search (40 problems)" },
      { week: "Week 2", goal: "Trees, Tries, and Multi-source BFS (Rotting Oranges, Word Ladder)" },
      { week: "Week 3", goal: "Low-Level Design (OOPS, SOLID principles, Factory & Singleton patterns)" },
      { week: "Week 4", goal: "Draft 2 STAR stories for each of Amazon's 16 Leadership Principles" }
    ]
  },
  {
    id: "comp-microsoft",
    name: "Microsoft",
    tier: "Tier 1 Product",
    category: "Product",
    logo: "https://www.microsoft.com/favicon.ico",
    color: "#00A4EF",
    packageInfo: {
      ctc: "₹24 - ₹30 LPA",
      base: "₹16 - ₹18 LPA",
      stocks: "$30,000 RSUs vested over 4 years",
      bonus: "₹3 LPA joining bonus + annual performance bonus"
    },
    eligibility: {
      degree: "B.Tech / Dual Degree in CS / IT / ECE",
      cgpaCutoff: "7.0+ CGPA",
      backlogs: "No active backlogs allowed",
      gapYears: "Standard gap year policies"
    },
    examPattern: [
      { round: "Round 1", name: "Codility Online Test", format: "3 Algorithmic Questions", duration: "90 Mins", focus: "String manipulation, arrays, bitwise operators" },
      { round: "Round 2", name: "Technical Round 1", format: "Virtual 1:1 on Teams", duration: "45 Mins", focus: "Linked Lists, Bit Manipulation, Recursion, Pointers" },
      { round: "Round 3", name: "Technical & Projects", format: "Virtual 1:1 on Teams", duration: "45 Mins", focus: "OS (Virtual memory, threading), DBMS, System Architecture" },
      { round: "Round 4", name: "AA (As Appropriate) / Director", format: "Behavioral & Executive Chat", duration: "45 Mins", focus: "Growth Mindset, One Microsoft philosophy, learning agility" }
    ],
    previousQuestions: [
      "Reverse Nodes in k-Group in a Linked List.",
      "Check if a binary tree is symmetric / subtree of another tree.",
      "Spiral Matrix traversal and Matrix rotation.",
      "Find single non-repeating number using XOR bit manipulation."
    ],
    roadmap: [
      { week: "Week 1", goal: "Bit manipulation, pointer manipulation, and Linked List corner cases" },
      { week: "Week 2", goal: "Binary Search Trees, Traversal variations, and Stack algorithms" },
      { week: "Week 3", goal: "Deep dive into OS threads, Paging, and Distributed caching" },
      { week: "Week 4", goal: "Growth Mindset behavioral preparation + Mock interviews" }
    ]
  },
  {
    id: "comp-tcs",
    name: "Tata Consultancy Services (TCS)",
    tier: "Mass Recruiter / Digital Track",
    category: "Service / Mass",
    logo: "https://www.tcs.com/favicon.ico",
    color: "#0F4C81",
    packageInfo: {
      ctc: "Ninja: ₹3.6 - ₹4.0 LPA | Digital: ₹7.5 - ₹9.0 LPA | Prime: ₹9.0 - ₹11.5 LPA",
      base: "₹3.36 LPA (Ninja) / ₹7.2 LPA (Digital)",
      stocks: "N/A",
      bonus: "Incentive bonuses on clearing TCS Elevate Wings"
    },
    eligibility: {
      degree: "B.Tech / B.E / M.Tech / MCA / M.Sc",
      cgpaCutoff: "60% or 6.0 CGPA throughout (10th, 12th, Diploma, Degree)",
      backlogs: "Max 1 active backlog permitted at test time, zero at joining",
      gapYears: "Max 24 months academic gap permitted"
    },
    examPattern: [
      { round: "Section 1", name: "Foundation Section (Ninja)", format: "Numerical Ability (20 Qs) + Verbal (25 Qs) + Reasoning (20 Qs)", duration: "75 Mins", focus: "Speed math, percentages, grammar, puzzles" },
      { round: "Section 2", name: "Advanced Section (Digital)", format: "Advanced Quantitative (15 Qs) + Advanced Reasoning (10 Qs)", duration: "35 Mins", focus: "Permutations, probability, geometry, series" },
      { round: "Section 3", name: "Hands-on Coding", format: "2 Coding Questions (1 Easy-Medium + 1 Advanced)", duration: "60 Mins", focus: "Arrays, Strings, Matrix manipulation, DP in C/C++/Java/Python" },
      { round: "Interview", name: "TCS Interview (TR + MR + HR)", format: "Single Combined Technical, Managerial, and HR Panel", duration: "30-45 Mins", focus: "Resume projects, SQL joins, OOPs concepts, willingness to relocate" }
    ],
    previousQuestions: [
      "Rotate an array to the right by k steps without extra space.",
      "Check whether a number is an Armstrong number or Palindrome number.",
      "Count frequency of each word in a paragraph and print in alphabetical order.",
      "Write an SQL query to retrieve the 3rd highest salary using correlated subquery."
    ],
    roadmap: [
      { week: "Week 1", goal: "Crack Quantitative Aptitude: Percentages, Profit/Loss, Time-Speed-Distance" },
      { week: "Week 2", goal: "Verbal Ability (Grammar rules, sentence completion) + Logical Reasoning" },
      { week: "Week 3", goal: "Master TCS NQT coding patterns: Array transformations, String tokenization, Basic recursion" },
      { week: "Week 4", goal: "SQL Joins, OOPS in Java/C++, and HR relocation preparation" }
    ]
  },
  {
    id: "comp-infosys",
    name: "Infosys",
    tier: "Mass Recruiter / Specialist Track",
    category: "Service / Mass",
    logo: "https://www.infosys.com/favicon.ico",
    color: "#007CC3",
    packageInfo: {
      ctc: "System Engineer: ₹3.6 LPA | DSE: ₹6.25 LPA | Specialist Programmer: ₹9.5 - ₹12.5 LPA",
      base: "100% fixed component",
      stocks: "N/A",
      bonus: "Annual performance and certification bonuses"
    },
    eligibility: {
      degree: "B.Tech / B.E / M.Tech / MCA in any engineering discipline",
      cgpaCutoff: "60% or 6.0 CGPA throughout 10th, 12th, and college",
      backlogs: "Zero active backlogs at time of selection",
      gapYears: "Up to 2 years allowed"
    },
    examPattern: [
      { round: "Track A", name: "Infosys Online Test (SE)", format: "Reasoning (15 Qs) + Technical Ability (10 Qs) + Verbal (20 Qs) + Pseudo-code (5 Qs) + Numerical (10 Qs)", duration: "100 Mins", focus: "Speed aptitude, logical puzzles, C/Java pseudocode tracing" },
      { round: "Track B", name: "HackWithInfy (SP/DSE)", format: "3 Competitive Coding Problems", duration: "180 Mins", focus: "Graph traversals, Dynamic programming, Segment trees" },
      { round: "Interview", name: "Technical + HR Interview", format: "Virtual 1:1 on Infosys Springboard", duration: "30-40 Mins", focus: "Academic project explanation, DBMS normalization, basic algorithms" }
    ],
    previousQuestions: [
      "Pseudocode output tracing with nested loops and bitwise XOR.",
      "Longest Common Subsequence between two strings.",
      "Find all paths from source to target in a directed acyclic graph.",
      "Explain 3NF with real-life relational table example."
    ],
    roadmap: [
      { week: "Week 1", goal: "Brush up on Pseudocode tracing (Operator precedence, bitwise math, pointers)" },
      { week: "Week 2", goal: "Aptitude speed training: Data Interpretation and Syllogisms" },
      { week: "Week 3", goal: "HackWithInfy coding practice: DP states, Prefix sums, and Trees" },
      { week: "Week 4", goal: "Mock technical interview explaining your final year project end-to-end" }
    ]
  },
  {
    id: "comp-accenture",
    name: "Accenture",
    tier: "Consulting / Tech Services",
    category: "Service / Mass",
    logo: "https://www.accenture.com/favicon.ico",
    color: "#A100FF",
    packageInfo: {
      ctc: "Associate Software Engineer (ASE): ₹4.5 LPA | Advanced ASE: ₹6.5 LPA",
      base: "₹4.1 LPA fixed + allowances",
      stocks: "Employee share purchase scheme",
      bonus: "Individual performance bonus"
    },
    eligibility: {
      degree: "B.E / B.Tech / MCA / M.Sc (CS/IT)",
      cgpaCutoff: "6.5 CGPA or 65% in graduation",
      backlogs: "Zero active backlogs",
      gapYears: "Max 1 year between 12th and college"
    },
    examPattern: [
      { round: "Round 1", name: "Cognitive & Technical Assessment", format: "90 Questions (Critical Thinking, English, Abstract Reasoning, MS Office, Pseudocode, Cloud & Security)", duration: "90 Mins", focus: "Elimination round; immediate results on screen" },
      { round: "Round 2", name: "Coding Assessment", format: "2 Coding Questions (Directly unlocks upon clearing Round 1)", duration: "45 Mins", focus: "Array transformations, string reversals, basic math" },
      { round: "Round 3", name: "Communication Assessment", format: "Automated AI Voice Assessment (Reading, Repeating, Story Retelling)", duration: "20 Mins", focus: "Fluency, pronunciation, listening comprehension" },
      { round: "Round 4", name: "Virtual HR / Technical Interview", format: "1:1 Video Interview", duration: "25-30 Mins", focus: "Projects, problem solving approach, situational workplace questions" }
    ],
    previousQuestions: [
      "Replace every element with the greatest element on its right side.",
      "Count total vowels and consonants ignoring whitespaces and punctuation.",
      "Find equilibrium index where sum of lower indices equals sum of higher indices."
    ],
    roadmap: [
      { week: "Week 1", goal: "Cloud fundamentals (AWS/Azure concepts) & MS Office shortcuts" },
      { week: "Week 2", goal: "Pseudocode loops, recursive functions, and logic puzzles" },
      { week: "Week 3", goal: "Accenture Communication Test practice (listen and repeat exercises)" },
      { week: "Week 4", goal: "Project walkthrough and situational behavioral interview practice" }
    ]
  }
];
