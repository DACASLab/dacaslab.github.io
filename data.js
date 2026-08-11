// ════════════════════════════════════════════════════════════
//  DACAS Lab — Site Data
//  Edit this file to update publications, members, projects,
//  activity feed, stats, topics and platforms.
//  The HTML layout is in index.html — you rarely need to touch it.
// ════════════════════════════════════════════════════════════

const DACAS = {

  // ── Lab-level metadata ──────────────────────────────────
  meta: {
    pi_name:       "Jishnu Keshavan",
    pi_title:      "Assistant Professor",
    pi_dept:       "Dept. of Mechanical Engineering, IISc Bangalore",
    pi_email:      "kjishnu@iisc.ac.in",
    pi_scholar:    "https://scholar.google.com/citations?user=jxgBqyQAAAAJ&hl=en",
    pi_faculty:    "https://mecheng.iisc.ac.in",
    pi_bio:        "PhD, University of Maryland (2012). Research interests: structured representation learning, data-driven control, autonomous aerial and ground systems, nonlinear estimation.",
  },

  // ── Sidebar stats ───────────────────────────────────────
  stats: [
    { num: "27",   label: "Journal papers"  },
    { num: "26",   label: "Conferences"     },
    { num: "8",    label: "PhD students"    },
    { num: "2020", label: "Founded at IISc" },
  ],

  // ── Sidebar topic tags ──────────────────────────────────
  topics: [
    "koopman-operator", "autonomous-uav", "deep-rl",
    "optic-flow", "mpc", "robotics",
    "adaptive-control", "safety-critical",
  ],

  // ── Hardware platforms ──────────────────────────────────
  platforms: [
    { name: "Crazyflie 2.1 (30 g nano-UAS)", status: "active"      },
    { name: "Custom 2.1 kg quadrotor",        status: "active"      },
    { name: "KUKA LBR IIWA R14",             status: "active"      },
    { name: "Franka FR3",                     status: "active"      },
    { name: "Botsync Volta UGV",              status: "active"      },
    { name: "TurtleBot3 Burger",              status: "active"      },
    { name: "Soft robot manipulator",         status: "inprogress"  },
  ],

  // ── Activity feed (Overview sidebar) ───────────────────
  // colour: "green" | "blue" | ""
  activity: [
    { colour: "green", text: "<strong>Kashyap</strong> wins Best Experimental Abstract, IEEE Indian Control Conference, IISc Bangalore",  time: "Dec 2025" },
    { colour: "green", text: "<strong>Rajpal Singh</strong> awarded the inaugural Dr. Arkal S. Shenoy Research Award",                    time: "Nov 2024" },
    { colour: "green", text: "<strong>Singh et al.</strong> accepted in <em>Int. J. Robot. Res.</em>",                                    time: "2025"     },
    { colour: "blue",  text: "New paper submitted: ASACK continual Koopman learning",                                                     time: "2025"     },
    { colour: "green", text: "<strong>Vaidya</strong> presented at IROS 2025",                                                            time: "2025"     },
    { colour: "blue",  text: "Invited talk at IROS 2024 Workshop on Formal Methods in Robotics",                                          time: "Oct 2024" },
  ],

  // ── Publications ────────────────────────────────────────
  // type: "journal" | "conference"
  // status (optional): "review" — renders a grey "Under Review" badge instead of journal badge
  // badgeClass: "jb-blue" | "jb-green" | "jb-purple" | "jb-orange" | "jb-grey"
  publications: [

    // ── Under review ──
    { type:"journal", status:"review",
      title:"SACK: Safe Active Continual Koopman Learning for Uncertain Systems with Contractive Guarantees",
      authors:"C. K. Sah, @@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"", year:"2026", doi:"" },

    
    { type:"journal", status:"review",
      title:"Deep Robust Koopman Learning from Noisy Data",
      authors:"A. Singh, @@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"", year:"2025", doi:"" },

    { type:"journal", status:"review",
      title:"Periodic Event-Triggered Prescribed Time Control of Euler–Lagrange Systems under State and Input Constraints",
      authors:"C. S. Kashyap, K. Arumugam, P. Jagtap, @@ME@@J. Keshavan@@/ME@@",
      venue:"", year:"2025", doi:"" },

    { type:"journal", status:"review",
      title:"Tracking Control of Euler-Lagrangian Systems with Prescribed State, Input, and Temporal Constraints",
      authors:"C. S. Kashyap, P. Jagtap, @@ME@@J. Keshavan@@/ME@@",
      venue:"", year:"2025", doi:"" },

    // ── 2026 ──
    { type:"journal", badge:"jb-blue",
      title:"A Collision Cone Approach for Control Barrier Functions",
      authors:"M. Tayal, B. G. Goswami, K. Rajgopal, @@ME@@R. Singh@@/ME@@, T. M. Rao, @@ME@@J. Keshavan@@/ME@@, P. Jagtap, S. N. Y. Kolathaya",
      venue:"IEEE T-CST", year:"2026", doi:"10.1109/TCST.2026.3661160" },

    { type:"journal", badge:"jb-orange",
      title:"Generalized Adaptive Saturated Sliding Mode Control for Motor Regulation under Unknown Loads",
      authors:"C. S. Kashyap, A. Kashyap, @@ME@@J. Keshavan@@/ME@@",
      venue:"ASME JDSMC", year:"2026", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"Generalized Moment-Based Koopman Formalism for Robust Control of Euler-Lagrangian Systems",
      authors:"@@ME@@R. Singh@@/ME@@, A. S. Chauhan, C. S. Kashyap, @@ME@@J. Keshavan@@/ME@@",
      venue:"ICRA 2026", year:"2026", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"IP3C: Integrated Path Planning and Predictive Control for UAV Swarm Navigation in Cluttered Environments",
      authors:"B. Banday, N. Kumar, T. Kurne, R. Majumder, @@ME@@J. Keshavan@@/ME@@, S. Sundaram",
      venue:"AIAA SciTech 2026", year:"2026", doi:"" },

    // ── 2025 ──
    { type:"journal", badge:"jb-blue",
      title:"Adaptive Koopman Embedding for Robust Control of Nonlinear Dynamical Systems",
      authors:"@@ME@@R. Singh@@/ME@@, C. K. Sah, @@ME@@J. Keshavan@@/ME@@",
      venue:"Int. J. Robot. Res.", year:"2025", doi:"10.1177/02783649251341907" },

    { type:"journal", badge:"jb-orange",
      title:"Performance-Constrained Adaptive Sliding Mode Control for Guaranteed Soft Landing Using Optic Flow",
      authors:"S. Singhal, S. Sundaram, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE TAES", year:"2025", doi:"10.1109/TAES.2025.3590334" },

    { type:"journal", badge:"jb-blue",
      title:"An Overview of Data-Driven Paradigms for Identification and Control of Robotic Systems",
      authors:"C. K. Sah, @@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"J. Indian Inst. Sci.", year:"2025", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"Dynamics-Invariant Quadrotor Control using Scale-Aware Deep Reinforcement Learning",
      authors:"V. Vaidya, @@ME@@J. Keshavan@@/ME@@",
      venue:"IROS 2025", year:"2025", doi:"10.1109/IROS60139.2025.11247554" },

    { type:"conference", badge:"jb-green",
      title:"Event-Based Adaptive Koopman Framework for Optic Flow-Guided Landing on Moving Platforms",
      authors:"B. Banday, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE IECON 2025", year:"2025", doi:"10.1109/IECON58223.2025.11221594" },

    { type:"conference", badge:"jb-green",
      title:"Novel Adaptive Super-Twisting Observer-Controller Framework with Input Constraints",
      authors:"T. K. V. S. S. SriKrishna, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE IECON 2025", year:"2025", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"Prescribed Time Control of Euler-Lagrange Systems under State and Input Constraints",
      authors:"C. S. Kashyap, P. Jagtap, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE ICC 2025", year:"2025", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"Adaptive Super-Twisting Control for Visual Leader-Follower Formation Tracking",
      authors:"T. K. V. S. S. SriKrishna, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE ICC 2025", year:"2025", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"VORPF: Virtual Obstacle-Based Rotational Potential Field for UAV Swarm to Escape Local Minima",
      authors:"S. Saha, A. Basu, R. Majumdar, V. Vaidya, @@ME@@J. Keshavan@@/ME@@, S. Sundaram",
      venue:"IEEE ETAAV 2025", year:"2025", doi:"" },

    { type:"conference", badge:"jb-green",
      title:"Robust Manual Guidance Law for Manned Spacecraft Re-Entry Applications",
      authors:"A. Pratap, @@ME@@J. Keshavan@@/ME@@",
      venue:"GLEX 2025", year:"2025", doi:"" },

    // ── 2024 ──
    { type:"journal", badge:"jb-blue",
      title:"Real-Time Constrained Tracking Control of Redundant Manipulators Using a Koopman–Zeroing Neural Network Framework",
      authors:"C. K. Sah, @@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE RA-L", year:"2024", doi:"10.1109/LRA.2024.3349966" },

    { type:"journal", badge:"jb-purple",
      title:"Approximation-Free Robust Tracking Control of Unknown Redundant Manipulators with Prescribed Performance and Input Constraints",
      authors:"@@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE T-SMC", year:"2024", doi:"10.1109/TSMC.2024.3444030" },

    { type:"journal", badge:"jb-purple",
      title:"A Novel Concurrent Learning-Based Fixed-Time Convergent Visual Depth Observer for Weakly Persistently Exciting Perspective Dynamical Systems",
      authors:"@@ME@@J. Keshavan@@/ME@@, V. Sharma",
      venue:"Mechatronics", year:"2024", doi:"10.1016/j.mechatronics.2024.103226" },

    { type:"conference", badge:"jb-green",
      title:"Control Barrier Functions in Dynamic UAVs for Kinematic Obstacle Avoidance: A Collision Cone Approach",
      authors:"M. Tayal, @@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@, S. N. Y. Kolathaya",
      venue:"ACC 2024", year:"2024", doi:"" },

    // ── 2023 ──
    { type:"journal", badge:"jb-blue",
      title:"Adaptive Control of a Constrained First-Order Sliding Mode for Visual Formation Convergence Applications",
      authors:"@@ME@@J. Keshavan@@/ME@@, S. Belgaonkar, S. Murali",
      venue:"IEEE Access", year:"2023", doi:"10.1109/ACCESS.2023.3323896" },

    { type:"journal", badge:"jb-purple",
      title:"A Novel Concurrent Learning-Based Sliding-Mode Observer for Second-Order Multivariable Systems with a Time-Varying Coefficient: An Application to Machine Vision",
      authors:"@@ME@@J. Keshavan@@/ME@@",
      venue:"Int. J. Robust Nonlin. Control", year:"2023", doi:"10.1002/rnc.6926" },

    { type:"journal", badge:"jb-purple",
      title:"Prescribed Performance Control for Solving Time-Varying Underdetermined Linear Systems with Bounds on States and Their Derivatives",
      authors:"C. K. Sah, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE T-II", year:"2023", doi:"10.1109/TII.2022.3182997" },

    { type:"conference", badge:"jb-green",
      title:"Constant Optic Flow Divergence Based Robust Adaptive Control Strategy for Autonomous Vertical Landing of Quadrotors",
      authors:"S. Singhal, @@ME@@J. Keshavan@@/ME@@, S. Murali",
      venue:"AIAA SciTech 2023", year:"2023", doi:"10.2514/6.2023-0523" },

    // ── 2022 ──
    { type:"journal", badge:"jb-blue",
      title:"A Provably Constrained Neural Control Architecture with Prescribed Performance for Fault-Tolerant Redundant Manipulators",
      authors:"@@ME@@R. Singh@@/ME@@, @@ME@@J. Keshavan@@/ME@@",
      venue:"IEEE Access", year:"2022", doi:"10.1109/ACCESS.2022.3206365" },

    { type:"conference", badge:"jb-green",
      title:"Finite-Time Formation Convergence of Vision-Based Nonholonomic Systems without Explicit Communication",
      authors:"@@ME@@J. Keshavan@@/ME@@",
      venue:"IFToMM AzC 2021", year:"2021", doi:"" },
  ],

  // ── PhD Students ─────────────────────────────────────────
  phd_students: [
    { initials:"RS", name:"Rajpal Singh",           role:"PhD Candidate · PMRF",  topic:"Adaptive Koopman control · manipulators" },
    { initials:"SS", name:"Shubham Singhal",        role:"PhD Candidate · PMRF",  topic:"Optic flow guidance · UAS landing" },
    { initials:"SK", name:"T.V.S.S. SriKrishna",   role:"PhD Candidate · MoE",   topic:"Provably-convergent UAV swarming" },
    { initials:"BB", name:"Bazeela Banday",         role:"PhD Candidate · PMRF",  topic:"Event cameras · Koopman landing" },
    { initials:"SV", name:"Saras Vibhuti",          role:"PhD Student · MoE",     topic:"Energy-constrained UAV swarm control" },
    { initials:"CK", name:"Chidre Shravista Kashyap", role:"PhD Student · PMRF", topic:"Safety · control barrier functions" },
    { initials:"AS", name:"Aditya Singh Chauhan",   role:"PhD Student · MoE",     topic:"Learning-based UAV navigation" },
    { initials:"PK", name:"P. S. V. S. Sai Kumar",  role:"PhD Student · PMRF",   topic:"Optimal guidance · UAV soft landing" },
  ],

  // ── Alumni ───────────────────────────────────────────────
  alumni: [
    { name:"Chandan Kumar Sah",   degree:"MTech (Res.) 2023", position:"Joining PhD (TAMU)"                        },
    { name:"Varad Vaidya",        degree:"MTech (Res.) 2025", position:"—"                                         },
    { name:"Angad Pratap",        degree:"MTech (Res.) 2024", position:"Indian Army"                               },
    { name:"Saurabh Belgaonkar", degree:"MTech (Res.) 2023",  position:"Exxon Mobil — Data Scientist"             },
    { name:"Vidhant Sharma",      degree:"MTech (Res.) 2024", position:"Ola Electric"                              },
    { name:"Rahul Sharma",        degree:"MTech (Res.) 2024", position:"Indian Army"                               },
    { name:"Omkar Deshmukh",      degree:"MTech (Res.) 2024", position:"Mercedes-Benz R&D (Research Engineer)"    },
    { name:"Karnan Arumugam",     degree:"Postdoc 2024–25",   position:"CSIR Scientist"                           },
  ],

  // ── Funded Projects ──────────────────────────────────────
  // role: "PI" | "Co-PI"   status: "active" | "submitted" | "completed"
  projects: [
    { title:"Data-driven control with convergence guarantees for robot control",    agency:"DST",          grant:"0.40", role:"PI",     status:"active"    },
    { title:"A safe visual navigation strategy for UAS in Mars-like environments",  agency:"ISRO STC",     grant:"0.22", role:"PI",     status:"active"    },
    { title:"Border area surveillance by a team of UAVs",                           agency:"DRDO",         grant:"1.38", role:"Co-PI",  status:"active"    },
    { title:"Caged drone with thermal imaging camera (firefighting)",               agency:"Navy / IDEX",  grant:"1.50", role:"PI",     status:"active"    },
    { title:"Guaranteed UAV soft landing on ship-deck platforms",                   agency:"Navy / IDEX",  grant:"1.00", role:"PI",     status:"active"    },
    { title:"5G-Enabled real-time digital twins of construction sites",             agency:"MeitY",        grant:"4.42", role:"Co-PI",  status:"active"    },
    { title:"Creating 3D van der Waals material stacks — automated transfer",       agency:"MoE",          grant:"0.90", role:"Co-PI",  status:"active"    },
    { title:"IISc startup grant",                                                   agency:"MoE",          grant:"0.78", role:"PI",     status:"completed" },
  ],

};
