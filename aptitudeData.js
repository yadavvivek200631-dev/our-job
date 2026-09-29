// Placify - Complete Placement Aptitude Preparation Dataset
window.PLACIFY_APTITUDE = {
  categories: [
    {
      id: "quantitative",
      name: "Quantitative Aptitude",
      icon: "calculator",
      color: "blue",
      description: "Master foundational arithmetic, algebra, probability, and speed mathematics required by TCS NQT, Infosys, Cognizant, and product companies.",
      topics: [
        {
          id: "percentages",
          name: "Percentages",
          difficulty: "Easy",
          formulaList: [
            { label: "Percentage Definition", formula: "Percentage = (Value / Total Value) × 100" },
            { label: "Percentage Increase", formula: "[(Final Value - Initial Value) / Initial Value] × 100" },
            { label: "Percentage Decrease", formula: "[(Initial Value - Final Value) / Initial Value] × 100" },
            { label: "Successive Percentage Change", formula: "[a + b + (ab / 100)]% (where positive is increase, negative is decrease)" },
            { label: "Population Formula", formula: "After n years: P × (1 + R/100)ⁿ ; n years ago: P / (1 + R/100)ⁿ" }
          ],
          keyNotes: [
            "Fraction Equivalents: 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
            "If price of an article increases by R%, then consumption must decrease by [R / (100 + R)] × 100% to keep expenditure constant.",
            "If A is R% more than B, then B is less than A by [R / (100 + R)] × 100%."
          ],
          practiceQuestions: [
            {
              id: "p-pct-1",
              question: "If the price of sugar increases by 25%, by what percentage must a family reduce its consumption so that the overall expenditure remains unchanged?",
              options: ["15%", "20%", "25%", "33.33%"],
              correctIndex: 1,
              hint: "Use the constant expenditure formula: [R / (100 + R)] × 100.",
              explanation: "Let original price = 100 and consumption = 100. Expenditure = 10,000. New price = 125. Required consumption = 10,000 / 125 = 80. Reduction = 100 - 80 = 20%. Alternatively, [25 / (100 + 25)] × 100 = 25/125 × 100 = 20%."
            },
            {
              id: "p-pct-2",
              question: "A student scored 30% marks and failed by 15 marks. Another student scored 40% marks and got 25 marks more than the minimum passing marks. Find the maximum marks in the exam.",
              options: ["300", "400", "500", "350"],
              correctIndex: 1,
              hint: "Difference in percentages equals total mark gap (15 + 25).",
              explanation: "Let total marks = M. Difference between scores = 40% - 30% = 10% of M. The gap in marks = 15 + 25 = 40 marks. Therefore, 10% of M = 40 => M = 400."
            },
            {
              id: "p-pct-3",
              question: "Two successive discounts of 20% and 10% are equivalent to a single discount of:",
              options: ["30%", "28%", "25%", "22%"],
              correctIndex: 1,
              hint: "Single equivalent discount = a + b - (ab / 100).",
              explanation: "Equivalent discount = 20 + 10 - (20 × 10 / 100) = 30 - 2 = 28%."
            }
          ]
        },
        {
          id: "profit-and-loss",
          name: "Profit & Loss",
          difficulty: "Easy to Medium",
          formulaList: [
            { label: "Gain / Profit", formula: "Profit = Selling Price (SP) - Cost Price (CP)" },
            { label: "Loss", formula: "Loss = Cost Price (CP) - Selling Price (SP)" },
            { label: "Gain %", formula: "(Profit / CP) × 100" },
            { label: "Loss %", formula: "(Loss / CP) × 100" },
            { label: "SP given CP and Gain%", formula: "SP = CP × [(100 + Gain%) / 100]" },
            { label: "False Weight Formula", formula: "Gain% = [Error / (True Value - Error)] × 100" }
          ],
          keyNotes: [
            "Profit or loss is ALWAYS calculated on Cost Price (CP) unless specifically mentioned otherwise.",
            "When two items are sold at the same price, one at a gain of x% and the other at a loss of x%, there is always an overall loss of (x / 10)² %.",
            "Marked Price (MP): Discount is always given on Marked Price. SP = MP × (100 - Discount%) / 100."
          ],
          practiceQuestions: [
            {
              id: "p-pl-1",
              question: "A shopkeeper sells two laptops for ₹36,000 each. On one he gains 20% and on the other he loses 20%. What is his overall gain or loss percentage?",
              options: ["No profit no loss", "2% loss", "4% loss", "4% profit"],
              correctIndex: 2,
              hint: "Common loss formula: (x/10)² % when SPs are equal.",
              explanation: "When selling prices are equal and gain% = loss% = x%, the transaction always results in a loss of (x/10)² %. Here x = 20, so Loss% = (20/10)² = 2² = 4% Loss."
            },
            {
              id: "p-pl-2",
              question: "A dishonest dealer claims to sell his goods at cost price, but uses a false weight of 900 grams for 1 kg. What is his profit percentage?",
              options: ["10%", "11.11%", "9.09%", "12.5%"],
              correctIndex: 1,
              hint: "Formula: [Error / (True Value - Error)] × 100.",
              explanation: "Error = 1000 - 900 = 100 grams. Profit% = [100 / 900] × 100 = 1/9 × 100 = 11.11%."
            }
          ]
        },
        {
          id: "time-and-work",
          name: "Time & Work",
          difficulty: "Medium",
          formulaList: [
            { label: "Work Done", formula: "Work Done = Rate of Work × Time" },
            { label: "One Day Work", formula: "If A completes work in n days, A's 1 day work = 1/n" },
            { label: "Combined Work (A and B)", formula: "Time taken together = (A × B) / (A + B) days" },
            { label: "Work Efficiency Theorem", formula: "Efficiency is inversely proportional to time: Eff₁ / Eff₂ = Time₂ / Time₁" },
            { label: "Chain Rule", formula: "(M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂" }
          ],
          keyNotes: [
            "Use the LCM method: Assume Total Work = LCM of individual times. Then calculate units of work done per day.",
            "Wages are always distributed in the ratio of the work done by each person (which equals ratio of efficiencies when working for same days).",
            "Pipes and Cisterns work on the exact same principle: inlet pipe does positive work (+), outlet pipe does negative work (-)."
          ],
          practiceQuestions: [
            {
              id: "p-tw-1",
              question: "A can complete a project in 12 days, while B can complete it in 18 days. If they work together, in how many days will the project be finished?",
              options: ["7.2 days", "8 days", "6.5 days", "10 days"],
              correctIndex: 0,
              hint: "Use formula (A × B) / (A + B) or LCM of 12 and 18.",
              explanation: "LCM(12, 18) = 36 units (Total Work). A's efficiency = 36/12 = 3 units/day. B's efficiency = 36/18 = 2 units/day. Together they do 3 + 2 = 5 units/day. Time taken = 36 / 5 = 7.2 days."
            },
            {
              id: "p-tw-2",
              question: "15 men can build a wall in 20 days working 8 hours a day. How many days will 10 men take to build the same wall working 12 hours a day?",
              options: ["18 days", "20 days", "24 days", "16 days"],
              correctIndex: 1,
              hint: "Use (M₁ × D₁ × H₁) = (M₂ × D₂ × H₂).",
              explanation: "15 × 20 × 8 = 10 × D₂ × 12 => 2400 = 120 × D₂ => D₂ = 2400 / 120 = 20 days."
            }
          ]
        },
        {
          id: "time-speed-distance",
          name: "Time, Speed & Distance",
          difficulty: "Medium",
          formulaList: [
            { label: "Basic Formula", formula: "Speed = Distance / Time ; Distance = Speed × Time" },
            { label: "km/h to m/s Conversion", formula: "1 km/h = 5/18 m/s ; 1 m/s = 18/5 km/h" },
            { label: "Average Speed (Equal Distances)", formula: "Average Speed = (2 × S₁ × S₂) / (S₁ + S₂)" },
            { label: "Relative Speed (Opposite Direction)", formula: "Relative Speed = S₁ + S₂" },
            { label: "Relative Speed (Same Direction)", formula: "Relative Speed = |S₁ - S₂|" },
            { label: "Train Passing Object", formula: "Time = (Length of Train + Length of Platform) / Speed" }
          ],
          keyNotes: [
            "When distance is constant, Speed is inversely proportional to Time: S₁ / S₂ = T₂ / T₁.",
            "Boats & Streams: Downstream Speed (u + v), Upstream Speed (u - v), where u = boat speed in still water, v = stream speed."
          ],
          practiceQuestions: [
            {
              id: "p-tsd-1",
              question: "A person travels from city A to city B at 60 km/h and returns from B to A at 40 km/h. What is the average speed for the whole journey?",
              options: ["50 km/h", "48 km/h", "52 km/h", "46 km/h"],
              correctIndex: 1,
              hint: "Average speed for equal distances is (2 × S₁ × S₂) / (S₁ + S₂), not the simple arithmetic mean!",
              explanation: "Average Speed = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 km/h."
            },
            {
              id: "p-tsd-2",
              question: "A train 180 meters long is running at 72 km/h. How many seconds will it take to cross a platform 120 meters long?",
              options: ["12 seconds", "15 seconds", "18 seconds", "20 seconds"],
              correctIndex: 1,
              hint: "Convert 72 km/h to m/s by multiplying by 5/18. Total distance = train length + platform length.",
              explanation: "Speed = 72 × (5/18) = 20 m/s. Total distance = 180 + 120 = 300 m. Time = Distance / Speed = 300 / 20 = 15 seconds."
            }
          ]
        },
        {
          id: "ratio-and-proportion",
          name: "Ratio & Proportion",
          difficulty: "Easy",
          formulaList: [
            { label: "Compounded Ratio", formula: "Ratio compounded of (a:b) and (c:d) = ac : bd" },
            { label: "Duplicate Ratio", formula: "a² : b² ; Sub-duplicate: √a : √b" },
            { label: "Mean Proportional", formula: "Mean proportional between a and b = √(ab)" },
            { label: "Third Proportional", formula: "Third proportional of a and b = b² / a" }
          ],
          keyNotes: [
            "If A:B = 2:3 and B:C = 4:5, multiply to equalize B: A:B = 8:12, B:C = 12:15 => A:B:C = 8:12:15.",
            "Partnership: Profit share is proportional to (Capital × Time Period)."
          ],
          practiceQuestions: [
            {
              id: "p-rp-1",
              question: "If A : B = 3 : 4 and B : C = 8 : 9, then find A : C.",
              options: ["1 : 2", "2 : 3", "3 : 5", "4 : 5"],
              correctIndex: 1,
              hint: "A/C = (A/B) × (B/C).",
              explanation: "A/C = (3/4) × (8/9) = (3 × 8) / (4 × 9) = 24 / 36 = 2/3. Therefore, A : C = 2 : 3."
            }
          ]
        },
        {
          id: "simple-compound-interest",
          name: "Simple & Compound Interest",
          difficulty: "Medium",
          formulaList: [
            { label: "Simple Interest (SI)", formula: "SI = (P × R × T) / 100" },
            { label: "Compound Amount (A)", formula: "A = P × (1 + R/100)ᵀ ; CI = A - P" },
            { label: "Compounded Half-Yearly", formula: "A = P × (1 + (R/2)/100)²ᵀ" },
            { label: "Difference (CI - SI for 2 years)", formula: "Difference = P × (R / 100)²" }
          ],
          keyNotes: [
            "Simple interest remains uniform year after year, whereas compound interest generates interest on previously earned interest.",
            "For 2 years: CI - SI = P(R/100)² is one of the most frequently asked shortcut questions in campus placement exams."
          ],
          practiceQuestions: [
            {
              id: "p-sci-1",
              question: "The difference between compound interest and simple interest on a certain sum of money for 2 years at 10% per annum is ₹150. Find the principal sum.",
              options: ["₹12,000", "₹15,000", "₹18,000", "₹20,000"],
              correctIndex: 1,
              hint: "Use Difference = P × (R/100)².",
              explanation: "150 = P × (10/100)² => 150 = P × (1/100) => P = 150 × 100 = ₹15,000."
            }
          ]
        },
        {
          id: "probability",
          name: "Probability",
          difficulty: "Medium to Hard",
          formulaList: [
            { label: "Probability P(E)", formula: "P(E) = n(E) / n(S) = (Favorable Outcomes) / (Total Outcomes)" },
            { label: "Complementary Event", formula: "P(E') = 1 - P(E)" },
            { label: "Addition Theorem", formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)" },
            { label: "Independent Events", formula: "P(A ∩ B) = P(A) × P(B)" }
          ],
          keyNotes: [
            "Playing cards: 52 total cards (26 Red, 26 Black; 4 Suits of 13 cards: Spades, Hearts, Diamonds, Clubs; 12 Face cards: 4 Kings, 4 Queens, 4 Jacks).",
            "Rolling 2 dice: Total outcomes = 6² = 36. Sum of 7 has maximum probability (6/36 = 1/6)."
          ],
          practiceQuestions: [
            {
              id: "p-prob-1",
              question: "Two dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on both dice is 8?",
              options: ["5/36", "1/6", "7/36", "1/9"],
              correctIndex: 0,
              hint: "List the favorable pairs (x, y) where x + y = 8.",
              explanation: "Favorable pairs: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Total possible outcomes = 36. Probability = 5/36."
            }
          ]
        },
        {
          id: "permutation-combination",
          name: "Permutation & Combination",
          difficulty: "Medium to Hard",
          formulaList: [
            { label: "Factorial", formula: "n! = n × (n - 1) × (n - 2) ... × 1 (0! = 1)" },
            { label: "Permutation (Arrangement)", formula: "ⁿPᵣ = n! / (n - r)!" },
            { label: "Combination (Selection)", formula: "ⁿCᵣ = n! / [r! × (n - r)!]" },
            { label: "Circular Permutation", formula: "(n - 1)! for distinct objects ; (n - 1)! / 2 for necklaces/garlands" }
          ],
          keyNotes: [
            "Use Permutation when ORDER matters (rankings, words, digit arrangements).",
            "Use Combination when ORDER does not matter (committees, handshakes, team selections)."
          ],
          practiceQuestions: [
            {
              id: "p-pnc-1",
              question: "In how many different ways can the letters of the word 'LEADER' be arranged?",
              options: ["720", "360", "120", "180"],
              correctIndex: 1,
              hint: "Total letters = 6, but 'E' is repeated 2 times.",
              explanation: "Total letters = 6. Letter 'E' appears twice. Total distinct arrangements = 6! / 2! = 720 / 2 = 360."
            }
          ]
        }
      ]
    },
    {
      id: "logical",
      name: "Logical Reasoning",
      icon: "brain",
      color: "purple",
      description: "Critical thinking, pattern matching, deductives, and seating arrangement puzzles tested by Deloitte, Capgemini, Accenture, and product interviews.",
      topics: [
        {
          id: "coding-decoding",
          name: "Coding-Decoding",
          difficulty: "Easy",
          formulaList: [
            { label: "Alphabet Positions", formula: "A=1, B=2 ... Z=26 ; Reverse: Z=1, Y=2 ... A=26" },
            { label: "EJOTY Rule", formula: "E=5, J=10, O=15, T=20, Y=25" },
            { label: "Opposite Letter Sum", formula: "Position + Opposite Position = 27 (e.g. A(1) + Z(26) = 27)" }
          ],
          keyNotes: [
            "Letter shift patterns: +1, +2, +3 or alternate +1, -1.",
            "Always check letter-by-letter index shifts first before checking anagrams or reverse orders."
          ],
          practiceQuestions: [
            {
              id: "p-cd-1",
              question: "In a certain code language, 'ROBOT' is written as 'SPCPU'. How is 'SMART' written in that language?",
              options: ["TNBSU", "TNBSA", "TLBQU", "UNBSU"],
              correctIndex: 0,
              hint: "Each letter is shifted forward by +1.",
              explanation: "R (+1) -> S, O (+1) -> P, B (+1) -> C, O (+1) -> P, T (+1) -> U. Applying +1 to SMART: S->T, M->N, A->B, R->S, T->U => TNBSU."
            }
          ]
        },
        {
          id: "blood-relations",
          name: "Blood Relations",
          difficulty: "Medium",
          formulaList: [
            { label: "Generation Hierarchy", formula: "Grandparents (Gen +2) -> Parents/Uncles (Gen +1) -> Self/Siblings/Spouse (Gen 0) -> Children (Gen -1)" },
            { label: "Symbolic Representation", formula: "Male (+), Female (-), Sibling (--), Married Couple (==)" }
          ],
          keyNotes: [
            "Never assume the gender of a person merely by name unless explicitly stated or inferred from relations (e.g. 'mother', 'brother').",
            "Maternal = Mother's side; Paternal = Father's side."
          ],
          practiceQuestions: [
            {
              id: "p-br-1",
              question: "Pointing to a photograph of a boy, Suresh said, 'He is the only son of my mother.' How is Suresh related to that boy?",
              options: ["Brother", "Uncle", "Father", "Cousin"],
              correctIndex: 2,
              hint: "'Only son of my mother' refers to Suresh himself.",
              explanation: "Mother's only son is Suresh himself. So the boy in the photo is Suresh's son. Thus, Suresh is the Father of the boy."
            }
          ]
        },
        {
          id: "directions",
          name: "Directions & Distances",
          difficulty: "Easy",
          formulaList: [
            { label: "Cardinals", formula: "North (Up), South (Down), East (Right), West (Left)" },
            { label: "Pythagoras Theorem", formula: "Shortest Distance = √(Base² + Height²)" }
          ],
          keyNotes: [
            "Turning right from North faces East. Turning left from North faces West.",
            "Shadow at Sunrise: Shadows fall towards the West. At Sunset: Shadows fall towards the East."
          ],
          practiceQuestions: [
            {
              id: "p-dir-1",
              question: "Ravi walks 4 km North, then turns right and walks 3 km. How far and in which direction is he now from his starting point?",
              options: ["5 km North-East", "7 km East", "5 km North", "6 km North-East"],
              correctIndex: 0,
              hint: "Use the Pythagoras theorem: √(4² + 3²).",
              explanation: "Ravi makes a right-angled triangle. Hypotenuse = √(4² + 3²) = √(16 + 9) = √25 = 5 km. He is in the North-East direction from origin."
            }
          ]
        },
        {
          id: "seating-arrangement",
          name: "Seating Arrangement",
          difficulty: "Medium to Hard",
          formulaList: [
            { label: "Circular Facing Inwards", formula: "Right = Anti-clockwise ; Left = Clockwise" },
            { label: "Circular Facing Outwards", formula: "Right = Clockwise ; Left = Anti-clockwise" }
          ],
          keyNotes: [
            "Start placing elements with concrete, deterministic clues (e.g., 'A sits third to the right of B') rather than ambiguous clues.",
            "Draw multiple sub-diagrams when bifurcations occur and eliminate invalid cases."
          ],
          practiceQuestions: [
            {
              id: "p-sa-1",
              question: "Six friends A, B, C, D, E, and F are sitting in a circle facing the center. A is to the left of B, C is between A and D, and E is between B and F. Who is opposite to A?",
              options: ["E", "F", "D", "B"],
              correctIndex: 1,
              hint: "Draw the circular diagram starting with B, then A to its immediate left.",
              explanation: "Position sequence going clockwise: B, E, F, D, C, A. In a 6-person circle, the person 3 spots away is directly opposite. A (pos 6) is opposite F (pos 3)."
            }
          ]
        }
      ]
    },
    {
      id: "verbal",
      name: "Verbal Ability",
      icon: "book-open",
      color: "emerald",
      description: "English grammar, sentence correction, reading comprehension, and contextual vocabulary for TCS, Cognizant, and corporate communication rounds.",
      topics: [
        {
          id: "sentence-correction",
          name: "Sentence Correction & Grammar",
          difficulty: "Easy to Medium",
          formulaList: [
            { label: "Subject-Verb Agreement", formula: "Singular subject requires singular verb; Plural subject requires plural verb" },
            { label: "Neither...Nor Rule", formula: "Verb agrees with the subject nearest to it" },
            { label: "One of the...", formula: "One of the + Plural Noun + Singular Verb (e.g., 'One of the students is absent')" }
          ],
          keyNotes: [
            "Modifiers must be placed adjacent to the word they modify (avoid dangling modifiers).",
            "Maintain parallel structure in lists and comparisons (e.g. 'He likes swimming, running, and cycling')."
          ],
          practiceQuestions: [
            {
              id: "p-sc-1",
              question: "Identify the error in the sentence: 'Neither the manager nor the employees was present in the meeting.'",
              options: ["Neither the manager", "nor the employees", "was present", "No error"],
              correctIndex: 2,
              hint: "In 'Neither...nor', the verb agrees with the subject closest to it.",
              explanation: "The closest subject to the verb is 'the employees', which is plural. Therefore, 'was present' is incorrect and should be 'were present'."
            }
          ]
        },
        {
          id: "reading-comprehension",
          name: "Reading Comprehension",
          difficulty: "Medium",
          formulaList: [
            { label: "Skimming Technique", formula: "Read first and last sentences of each paragraph to grasp main theme" },
            { label: "Question-First Strategy", formula: "Read questions first to know what keywords to scan for in the passage" }
          ],
          keyNotes: [
            "Stick strictly to the information given in the passage; do not bring outside world assumptions.",
            "Watch out for extreme words in options like 'always', 'never', 'all', 'solely' which are rarely correct."
          ],
          practiceQuestions: [
            {
              id: "p-rc-1",
              question: "Passage: 'Artificial intelligence is not set to replace engineers, but rather to augment their capabilities. By automating repetitive boilerplate tasks, engineers can direct their cognitive energy toward high-level architecture and domain innovation.' Which statement best reflects the central idea?",
              options: [
                "Engineers will soon become completely obsolete.",
                "AI acts as a collaborative multiplier rather than a total replacement.",
                "Boilerplate code is the most critical part of software engineering.",
                "Domain innovation requires stopping all AI adoption."
              ],
              correctIndex: 1,
              hint: "Look at the words 'not set to replace' and 'augment their capabilities'.",
              explanation: "The passage explicitly states AI is not replacing engineers but augmenting and helping them focus on architecture and domain innovation."
            }
          ]
        }
      ]
    },
    {
      id: "data-interpretation",
      name: "Data Interpretation",
      icon: "bar-chart-3",
      color: "amber",
      description: "High-yield analysis of Tables, Bar Graphs, Pie Charts, and Caselets for fast numerical extraction in online placement tests.",
      topics: [
        {
          id: "pie-charts",
          name: "Pie Charts & Tables",
          difficulty: "Medium",
          formulaList: [
            { label: "Angle Conversion", formula: "Sector Angle = (Value / Total Value) × 360°" },
            { label: "Percentage Conversion", formula: "Value% = (Angle / 360°) × 100%" }
          ],
          keyNotes: [
            "100% corresponds to 360°. Hence 1% = 3.6°.",
            "Always compute ratios and percentages before multiplying large raw values to save calculation time.",
          ],
          practiceQuestions: [
            {
              id: "p-di-1",
              question: "In a company budget pie chart, the angle represented for R&D expenditures is 54°. What percentage of the total budget is spent on R&D?",
              options: ["12%", "15%", "18%", "20%"],
              correctIndex: 1,
              hint: "Divide angle by 360 and multiply by 100.",
              explanation: "Percentage = (54 / 360) × 100 = (3 / 20) × 100 = 15%."
            }
          ]
        }
      ]
    }
  ]
};
