// Placify - Core Technical CS Subjects Dataset
window.PLACIFY_TECHNICAL = {
  subjects: [
    {
      id: "os",
      name: "Operating Systems",
      icon: "cpu",
      color: "blue",
      badge: "High Priority",
      notes: [
        {
          title: "Process vs Thread",
          content: "A **Process** is an executing program instance with its own independent address space, page tables, file descriptors, and registers. A **Thread** is a lightweight execution unit within a process that shares the same code section, data section, and OS resources, but retains its own stack, registers, and program counter."
        },
        {
          title: "Process Scheduling Algorithms",
          content: "• **FCFS (First Come First Serve)**: Non-preemptive, suffers from convoy effect.\n• **SJF / SRTF**: Shortest Job First (optimal average waiting time; preemptive variant is SRTF).\n• **Round Robin (RR)**: Time quantum based preemptive scheduling, ideal for interactive systems.\n• **Priority Scheduling**: Starvation risk (resolved by aging technique)."
        },
        {
          title: "Deadlocks & Coffman Conditions",
          content: "A Deadlock occurs when processes are unable to proceed because each holds a resource while waiting for another. The 4 necessary Coffman conditions:\n1. **Mutual Exclusion**: Non-shareable resources.\n2. **Hold and Wait**: Process holding resources requests additional ones.\n3. **No Preemption**: Resources cannot be forcibly taken away.\n4. **Circular Wait**: Closed chain of processes each waiting for resource held by next."
        },
        {
          title: "Memory Management & Paging",
          content: "• **Paging**: Breaks physical memory into fixed-size frames and virtual memory into pages, eliminating external fragmentation (though internal fragmentation can occur on last page).\n• **TLB (Translation Lookaside Buffer)**: High-speed hardware cache for page table mappings.\n• **Page Fault**: Interrupt raised when an address refers to a page not currently resident in RAM."
        }
      ],
      interviewQuestions: [
        {
          q: "What is the difference between a Process and a Thread?",
          answer: "A process is an isolated execution environment with its own dedicated memory space (heap, stack, data, code). A thread is a lightweight execution unit inside a process. Multiple threads in the same process share heap, global variables, and open file descriptors, but each has its own private stack and registers. Context switching between threads is significantly faster than between processes."
        },
        {
          q: "How does Virtual Memory work and what is a Page Fault?",
          answer: "Virtual memory maps virtual addresses used by programs to physical RAM addresses using page tables and the Memory Management Unit (MMU). When a program accesses a virtual page that has not been mapped to physical RAM (its valid bit is 0), the MMU raises a hardware interrupt known as a Page Fault. The OS steps in, reads the page from secondary storage (swap/disk), writes it into an empty physical RAM frame, updates the page table, and resumes the instruction."
        },
        {
          q: "What is Thrashing in an Operating System?",
          answer: "Thrashing occurs when the system spends more time servicing page faults and swapping pages in/out of disk than actually executing user instructions. This happens when the cumulative working sets of active processes exceed the physical memory available. Thrashing causes CPU utilization to plummet drastically."
        },
        {
          q: "Explain Mutex vs Semaphore with real-world examples.",
          answer: "A Mutex (Mutual Exclusion object) is a locking mechanism with ownership: only the thread that locked it can unlock it (binary 0 or 1). Think of it as a single bathroom key. A Semaphore is a signaling mechanism without ownership: a counting semaphore allows up to N simultaneous threads to access a resource pool. Any thread can signal or wait on it. Think of it as a ticket counter with N available tokens."
        }
      ],
      quiz: [
        {
          question: "Which of the following conditions is NOT a required Coffman condition for deadlock?",
          options: ["Mutual Exclusion", "Preemption allowed", "Hold and Wait", "Circular Wait"],
          correctIndex: 1,
          explanation: "Deadlock requires 'No Preemption' (resources cannot be forcefully taken away). If preemption is allowed, deadlocks cannot occur."
        },
        {
          question: "Which scheduling algorithm provides the theoretical minimum average waiting time for a set of processes?",
          options: ["FCFS", "Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"],
          correctIndex: 1,
          explanation: "SJF is provably optimal in terms of minimizing average waiting time."
        }
      ]
    },
    {
      id: "dbms",
      name: "Database Management Systems (DBMS)",
      icon: "database",
      color: "emerald",
      badge: "Most Tested",
      notes: [
        {
          title: "ACID Properties",
          content: "• **Atomicity**: 'All or nothing'. Either the entire transaction completes or rolls back completely.\n• **Consistency**: Transaction preserves database invariants and constraints.\n• **Isolation**: Concurrent transactions execute without interfering with one another.\n• **Durability**: Once committed, changes persist permanently even through power failure."
        },
        {
          title: "Database Normalization",
          content: "Eliminates data redundancy and insertion/deletion/update anomalies:\n• **1NF**: Atomic column values, unique row identifiers.\n• **2NF**: In 1NF + no partial dependency on a composite primary key.\n• **3NF**: In 2NF + no transitive dependencies (non-prime attributes determining other non-prime attributes).\n• **BCNF**: Stricter 3NF where every determinant must be a candidate key."
        },
        {
          title: "Indexing & B+ Trees",
          content: "Indexes accelerate query execution. B+ Trees are favored over binary trees because they store data only at leaf nodes (linked sequentially for rapid range queries), while internal nodes store keys and child pointers, minimizing disk I/O operations."
        },
        {
          title: "SQL vs NoSQL",
          content: "SQL databases (PostgreSQL, MySQL) are relational, structured, schema-bound, and ACID compliant with vertical scaling. NoSQL databases (MongoDB, Cassandra, Redis) are document/key-value/columnar, schema-less, BASE compliant, and scale horizontally across distributed clusters."
        }
      ],
      interviewQuestions: [
        {
          q: "What is the difference between WHERE and HAVING clauses in SQL?",
          answer: "WHERE filters rows before any group aggregation takes place; it cannot use aggregate functions directly (like SUM, COUNT). HAVING filters the aggregated groups after GROUP BY has executed and supports aggregate conditions (e.g., HAVING COUNT(*) > 5)."
        },
        {
          q: "Explain the difference between Primary Key, Candidate Key, and Unique Key.",
          answer: "A Candidate Key is any minimal set of attributes that uniquely identifies a tuple. The primary key is the candidate key chosen by the database architect as the main identifier; it cannot accept NULL values. A Unique Key enforces uniqueness across records but may permit a single NULL value."
        },
        {
          q: "How does a B+ Tree index optimize database search compared to a standard Binary Search Tree?",
          answer: "B+ trees have a very high branching factor (fanout), keeping the tree extremely shallow (height 3-4 can store millions of rows). This minimizes disk seek operations. Furthermore, all actual record pointers reside exclusively in leaf nodes linked via a doubly linked list, enabling O(log N) lookup and lightning-fast range scans."
        }
      ],
      sqlChallenges: [
        {
          id: "sql-1",
          title: "Find the 2nd Highest Salary in Employees Table",
          description: "Write an ANSI SQL query to find the second highest salary from the Employee table.",
          sampleTable: "Employee (id, name, department_id, salary)",
          solutionQuery: "SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
          alternativeQuery: "SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1;"
        },
        {
          id: "sql-2",
          title: "Department Highest Salaries",
          description: "Find employees who have the highest salary in each department.",
          sampleTable: "Employee (id, name, salary, department_id), Department (id, name)",
          solutionQuery: `SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.department_id = d.id
WHERE (e.department_id, e.salary) IN (
    SELECT department_id, MAX(salary) FROM Employee GROUP BY department_id
);`
        }
      ],
      quiz: [
        {
          question: "Which normal form deals with the elimination of transitive functional dependencies?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correctIndex: 2,
          explanation: "3NF requires the relation to be in 2NF and have no non-prime attribute transitively dependent on candidate keys."
        },
        {
          question: "Which isolation level prevents Dirty Reads, Non-repeatable Reads, and Phantom Reads completely?",
          options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
          correctIndex: 3,
          explanation: "Serializable is the highest isolation level that guarantees execution equivalence to sequential transactions."
        }
      ]
    },
    {
      id: "cn",
      name: "Computer Networks",
      icon: "network",
      color: "purple",
      badge: "Core Subject",
      notes: [
        {
          title: "OSI 7 Layers vs TCP/IP 4 Layers",
          content: "1. Physical (Bits, cables)\n2. Data Link (Frames, MAC address, switches)\n3. Network (Packets, IP addresses, routers)\n4. Transport (Segments, TCP/UDP, ports)\n5. Session, 6. Presentation, 7. Application (HTTP, DNS, SSH, FTP)."
        },
        {
          title: "TCP vs UDP",
          content: "• **TCP**: Connection-oriented, reliable, guarantees packet ordering, implements flow control (sliding window) & congestion control. Ideal for HTTP, email, file transfers.\n• **UDP**: Connectionless, unreliable, no ordering, zero handshake latency. Ideal for live video streaming, DNS, VoIP, gaming."
        },
        {
          title: "TCP 3-Way Handshake",
          content: "1. Client sends **SYN** (Synchronize with sequence number x)\n2. Server responds with **SYN-ACK** (Acknowledge x+1, Synchronize with sequence number y)\n3. Client replies with **ACK** (Acknowledge y+1). Connection is established."
        },
        {
          title: "What Happens When You Type google.com into your Browser?",
          content: "1. Browser checks cache (browser, OS, router).\n2. DNS Resolution queries Recursive, Root, TLD (.com), and Authoritative nameservers.\n3. TCP 3-way handshake over port 443.\n4. TLS/SSL handshake negotiates cipher suites and exchanges asymmetric keys.\n5. Browser sends HTTP GET request.\n6. Server responds with HTML/CSS/JS payload.\n7. Browser engine parses DOM, CSSOM, and paints pixels."
        }
      ],
      interviewQuestions: [
        {
          q: "What is the difference between TCP and UDP?",
          answer: "TCP is a connection-oriented, reliable protocol that guarantees in-order byte delivery through sequence numbers, acknowledgements, and retransmissions. It also features congestion control and flow control. UDP is connectionless and lightweight; it fires packets without waiting for handshakes or receipts, trading reliability for minimal latency."
        },
        {
          q: "How does DNS resolution work step-by-step?",
          answer: "When a URL is requested, the client first inspects local caches (browser, OS hosts file). If not found, a query is sent to the local recursive resolver (ISP/1.1.1.1). The resolver queries the Root DNS server ('.'), which points to the TLD server ('.com'), which directs to the domain's Authoritative DNS server. The authoritative server returns the A/AAAA record with the server's IP address."
        }
      ],
      quiz: [
        {
          question: "Which layer of the OSI model does a network router primarily operate at?",
          options: ["Data Link Layer (Layer 2)", "Network Layer (Layer 3)", "Transport Layer (Layer 4)", "Application Layer (Layer 7)"],
          correctIndex: 1,
          explanation: "Routers operate at Layer 3 (Network Layer), inspecting IP addresses to route packets across subnetworks."
        }
      ]
    },
    {
      id: "oops",
      name: "Object-Oriented Programming (OOPS)",
      icon: "code",
      color: "amber",
      badge: "Interview Must",
      notes: [
        {
          title: "The 4 Core Pillars of OOP",
          content: "1. **Encapsulation**: Bundling data (state) and methods (behavior) within a class while restricting direct access via access specifiers (private, protected, public).\n2. **Abstraction**: Hiding internal implementation complexity and exposing only essential interfaces.\n3. **Inheritance**: Mechanism by which a child class inherits properties and behaviors from a parent class.\n4. **Polymorphism**: Ability to take multiple forms (Compile-time via method overloading; Run-time via method overriding & virtual methods)."
        },
        {
          title: "Overloading vs Overriding",
          content: "• **Method Overloading**: Multiple methods in the same class with identical names but differing parameter types or count (Compile-time / Static polymorphism).\n• **Method Overriding**: Subclass provides a specific implementation of a method already declared in its superclass using the exact same signature (Runtime / Dynamic polymorphism)."
        },
        {
          title: "SOLID Principles",
          content: "• **S**: Single Responsibility Principle\n• **O**: Open-Closed Principle (open for extension, closed for modification)\n• **L**: Liskov Substitution Principle\n• **I**: Interface Segregation Principle\n• **D**: Dependency Inversion Principle"
        }
      ],
      interviewQuestions: [
        {
          q: "What is the difference between an Abstract Class and an Interface?",
          answer: "An abstract class can contain both abstract methods (without bodies) and concrete methods with state/instance variables, and a class can inherit from only one abstract class. An interface specifies pure contracts (though modern Java supports default/static methods) and multiple interfaces can be implemented by a single class, facilitating loose coupling."
        },
        {
          q: "What is Diamond Problem in multiple inheritance and how is it resolved?",
          answer: "The diamond problem occurs when class D inherits from classes B and C, which both inherit from class A, and both B and C override a method from A. If D calls that method without overriding it, the compiler cannot determine which parent's implementation to execute. Java disallows multiple inheritance of classes (using interfaces instead), while C++ resolves it using virtual inheritance (virtual base classes)."
        }
      ],
      quiz: [
        {
          question: "Run-time polymorphism in C++ is achieved through:",
          options: ["Friend Functions", "Virtual Functions", "Function Overloading", "Operator Overloading"],
          correctIndex: 1,
          explanation: "Virtual functions with dynamic dispatch (vtable and vptr) enable runtime method resolution."
        }
      ]
    }
  ]
};
