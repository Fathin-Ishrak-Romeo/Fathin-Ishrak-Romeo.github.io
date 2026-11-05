import { EducationItem, ExperienceItem, ProfileInfo, Project, SkillCategory } from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Fathin Ishrak',
  roleTitle: 'Portfolio & CV',
  bio: 'Computer Science & Engineering graduate passionate about QC, AI, robotics, and embedded systems.',
  location: 'Dhaka, Bangladesh',
  email: 'fathin.ishrak7@gmail.com',
  githubUrl: 'https://github.com/fathin-ishrak-romeo',
  linkedinUrl: 'https://www.linkedin.com/in/fathin-ishrak/',
  stats: {
    projects: '20+',
    startup: '1',
    skillSets: '9',
  },
  venture: {
    name: 'RoboKit Garage',
    description: 'Profitable robotics startup delivering intelligent IoT solutions, robotic kits, and custom engineering projects.',
    socials: [
      { name: 'Facebook', url: 'https://www.facebook.com/people/RoboKit-Garage/61577943424925/#', color: 'facebook' },
      { name: 'Instagram', url: 'https://www.instagram.com/robokit.garage', color: 'instagram' },
      { name: 'WhatsApp', url: 'https://wa.me/+8801521549804', color: 'whatsapp' },
      { name: 'GMail', url: 'mailto:robokitgarage@gmail.com', color: 'gmail' },
      { name: 'YouTube', url: 'https://www.youtube.com/@RoboKitGarage', color: 'youtube' },
    ],
  },
};

export const aboutParagraphs: string[] = [
  'I am a Computer Science & Engineering (CSE) graduate from BRAC University (BRACU) with a strong foundation in robotics, IoT, and embedded systems, complemented by solid software engineering principles. Throughout my academic journey, I have completed more than 20 robotics, IoT and software projects, gaining extensive hands-on experience in designing, developing, and integrating intelligent hardware-software solutions to solve real-world engineering challenges.',
  'Beyond academics, I founded RoboKit Garage, a robotics-focused startup that has grown into a profitable venture through the development and delivery of innovative robotics and IoT solutions. This entrepreneurial experience has strengthened my skills in product development, project management, client collaboration, and transforming technical ideas into market-ready products.',
  'I actively leverage modern AI tools to accelerate development, improve productivity, and build intelligent applications. My interests span robotics, embedded systems, artificial intelligence, software engineering, quality assurance, and automation, with a continuous drive to explore emerging technologies and engineering best practices.',
  'I am a collaborative, detail-oriented, and adaptable engineer who enjoys tackling complex technical challenges and delivering reliable, high-quality solutions. As I begin my professional career, I am eager to contribute my technical expertise, practical experience, and problem-solving mindset to an innovative organization while continuing to grow as an engineer in robotics, embedded systems, AI, and software development.',
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-bracu',
    degree: 'B.Sc. in Computer Science & Engineering (CSE)',
    institution: 'BRAC University',
    year: '2025',
    type: "Bachelor's Degree",
    crestType: 'bracu',
  },
  {
    id: 'edu-rouf',
    degree: 'H.S.C. in Science',
    institution: 'Birshreshtha Munshi Abdur Rouf Public College',
    year: '2019',
    type: 'Higher Secondary Certificate',
    crestType: 'college',
  },
  {
    id: 'edu-jubilee',
    degree: 'S.S.C. in Science',
    institution: 'Patuakhali Govt. Jubilee High School',
    year: '2017',
    type: 'Secondary School Certificate',
    crestType: 'school',
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'exp-skf',
    role: 'Intern, IT Operations',
    company: 'Eskayef Pharmaceuticals Ltd. (SK+F)',
    companyShort: 'SK+F',
    period: 'Oct 2026 - Present',
    employmentType: 'Internship',
    location: 'Dhaka, Bangladesh · On-site',
    logoType: 'skf',
    description:
      'Working with the IT team in enterprise IT infrastructure management, networking, and technical support, with exposure to Cisco and Meraki networking solutions, LAN/WAN administration, Starlink connectivity, network tunneling, Windows Server and Active Directory, user and shared-folder access control, Synology NAS, backup and data recovery, and cybersecurity practices. Also involving in technical research, Proof of Concept (PoC) activities, IT infrastructure evaluation, budgeting, and procurement planning.',
  },
  {
    id: 'exp-robokit',
    role: 'Founder & CEO',
    company: 'RoboKit Garage',
    companyShort: 'RoboKit Garage',
    period: 'Jul 2025 - Present',
    employmentType: 'Self-employed',
    location: 'Dhaka, Bangladesh · Hybrid',
    logoType: 'robokit',
    description:
      "Founded and lead RoboKit Garage, a technology startup specializing in robotics, IoT, software, and electronics solutions. As Founder & CEO, I oversee business strategy, product development, and technical operations, while leading custom Robotics & IoT projects. Established Bangladesh's first dedicated Robotics & IoT project rental service, offering affordable project and component rentals, buy-back, and resale solutions. Also drive software development, embedded programming, customer engagement, and marketing initiatives.",
    socialLinks: [
      { name: 'Facebook', url: 'https://www.facebook.com/people/RoboKit-Garage/61577943424925/#', color: 'facebook' },
      { name: 'Instagram', url: 'https://www.instagram.com/robokit.garage', color: 'instagram' },
      { name: 'WhatsApp', url: 'https://wa.me/+8801521549804', color: 'whatsapp' },
      { name: 'GMail', url: 'mailto:robokitgarage@gmail.com', color: 'gmail' },
      { name: 'YouTube', url: 'https://www.youtube.com/@RoboKitGarage', color: 'youtube' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'prog-lang',
    name: 'Programming Languages',
    skills: ['HTML', 'SQL', 'C', 'C++', 'Python'],
  },
  {
    id: 'assembly-lang',
    name: 'Assembly Languages',
    skills: ['x86 Assembly', 'RISC-V'],
  },
  {
    id: 'version-ctrl',
    name: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    id: 'software-eng',
    name: 'Software Engineering',
    skills: ['Waterfall', 'V-Model', 'Incremental & Iterative', 'Agile', 'DevOps', 'MVC', 'Peer-to-Peer', 'SDLC', 'Testing'],
  },
  {
    id: 'operating-sys',
    name: 'Operating Systems',
    skills: ['Windows', 'Linux'],
  },
  {
    id: 'artificial-intel',
    name: 'Artificial Intelligence',
    skills: ['Machine Learning', 'Neural Networks'],
  },
  {
    id: 'robotics-iot',
    name: 'Robotics & IoT',
    skills: ['Arduino', 'ESP', 'STM', 'Raspberry Pi', 'ROS'],
  },
  {
    id: 'vlsi-tools',
    name: 'VLSI Design Tools',
    skills: ['DSCH', 'Microwind', 'Verilog'],
  },
  {
    id: 'quantum-comp',
    name: 'Quantum Computing',
    skills: ['Quantum Computing'],
  },
];

export const currentWorkData = {
  title: 'Current Work',
  status: 'Active Focus',
  description:
    'Currently developing an AI-integrated humanoid robot capable of autonomous movement, gesture-based interaction (e.g., hand greetings), and engaging in basic conversational exchanges. The system leverages AI to respond to user queries and address intellectually oriented questions, demonstrating applications in human-robot interaction and intelligent assistance.',
};

export const researchInterestsData = {
  recentResearch:
    'Multi-Level Deep Generative Model with Poisson Variational Autoencoders and Reinforcement Learning for Enhanced Intrusion Detection System.',
  topics: [
    'Robotics & IoT',
    'Embedded Systems',
    'VLSI',
    'Quantum Computing',
    'Quantum Machine Learning',
    'AI',
    'ML',
    'Deep Learning',
    'Neural Networks',
    'Cybersecurity',
  ],
};

export const projectsList: Project[] = [
  // 1. Research (2 projects)
  {
    id: 'proj-poisson-vae',
    title: 'Multi-Level Deep Generative Model with Poisson Variational Autoencoders and Reinforcement Learning for Enhanced Intrusion Detection System',
    subtitle: 'Undergrad Thesis | Group Research (4 members)',
    category: 'Research',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a hierarchical intrusion-detection model using a three-level Poisson VAE chain (packet -> flow -> session) with normalizing flows, a PPO agent for per-sample ensemble weighting, and an XGBoost meta-learner to fuse predictions. Evaluated on NF-UQ-NIDS-v2 dataset, it achieved 89.17% multiclass accuracy and strong binary discrimination (98.11% AUROC).',
    tags: [
      'Poisson VAE',
      'Reinforcement Learning',
      'Normalizing Flow',
      'XGBoost',
      'PPO Agent',
      'NF-UQ-NIDS-v2',
      'Cybersecurity',
    ],
  },
  {
    id: 'proj-fir-dec',
    title: 'FIR-DEC: A Deep Embedding Clustering Model Using Convolutional Autoencoders on MNIST Dataset of Handwritten Digits',
    subtitle: 'CSE425: Neural Network | Solo Research',
    category: 'Research',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a deep-embedding clustering model that combines a convolutional autoencoder with a DEC-style clustering head (implemented in PyTorch) to learn cluster-discriminative representations on the MNIST handwritten-digit dataset. Jointly optimized reconstruction and KL clustering losses and achieved an adjusted Rand Index of ~0.62, substantially outperforming k-means baseline with improved silhouette and Davies-Bouldin scores.',
    tags: [
      'Convolutional Autoencoder',
      'DEC Clustering',
      'MNIST handwritten-digit dataset',
      'PyTorch',
      'Deep Learning',
    ],
  },

  // 2. Software & Web Development (4 projects)
  {
    id: 'proj-pcgenix',
    title: 'PCGenixAI: AI-Powered PC Builder Web App',
    subtitle: 'CSE471: System Analysis and Design | Solo Project',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'An advanced version of my solo project PC Builder developed for my CSE471: System Analysis and Design course. Built an intelligent web platform for PC component shopping and AI-based custom PC build recommendations with user authentication, dynamic build generation, and smart filtering using React, TypeScript, Node.js, Express.js, and Supabase.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'AI'],
  },
  {
    id: 'proj-bux',
    title: 'BuX : Online Learning Platform',
    subtitle: 'CSE470: Software Engineering | Group Project (3 members)',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Full-stack Laravel e-learning website with instructor/student/admin roles, course/section/lecture management, quizzes, shopping-cart and payments, dashboards and progress tracking; built with Laravel (PHP), MySQL, Blade and Tailwind.',
    tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
  },
  {
    id: 'proj-nearby-expertise',
    title: 'Nearby Expertise: Service Provider Finder',
    subtitle: 'CSE370: Database Systems | Group Project (3 members)',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a web-based platform that connects users with nearby professionals (e.g., electricians, plumbers, carpenters) using PHP, HTML, CSS, and MySQL; features database-driven service listings, user authentication, and efficient data management for real-world applications.',
    tags: ['PHP', 'HTML', 'CSS3', 'MySQL'],
  },
  {
    id: 'proj-food-ordering',
    title: 'Digital Food Ordering System (User Interface)',
    subtitle: 'CSE341: Microprocessor | Solo Project',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a digital food-ordering system in x86 Assembly which runs on EMU8086 emulator. The menu-driven program supports category browsing, item selection with quantity validation, and order processing, demonstrating low-level implementation of user interaction and basic order data handling.',
    tags: ['x86 Assembly', 'EMU8086', 'Microprocessors'],
  },

  // 3. Game Development (2 projects)
  {
    id: 'proj-shoot-circles',
    title: 'Shoot the Circles',
    subtitle: 'CSE423: Computer Graphics | Solo Project',
    category: 'Game Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Designed a game as a part of solo project for CSE423: Computer Graphics course using Pygame, where the main objective is to shoot the falling circle-shaped objects. The game can be over in 3 ways: if a falling circle touches the shooter directly, if a player misses 3 falling circles to shoot or if a player misfires 3 times.',
    tags: ['Python', 'Pygame', 'Computer Graphics', 'Game Loop'],
  },
  {
    id: 'proj-catch-diamonds',
    title: 'Catch the Diamonds',
    subtitle: 'CSE423: Computer Graphics | Solo Project',
    category: 'Game Development',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'This game was developed as a part of solo project for CSE423: Computer Graphics course using Pygame, with the main goal of catching falling diamonds. As the game progresses, the difficulty increases by speeding up the falling diamonds. If the player misses a diamond, the game ends.',
    tags: ['Python', 'Pygame', '2D Physics', 'Computer Graphics', 'Collision Detection'],
  },

  // 4. Robotics & IoT (8 projects)
  {
    id: 'proj-tesla',
    title: 'TESLA Prototype',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a cost-efficient Tesla-inspired robotic car using Arduino UNO and ESP32-CAM with RFID security, manual & voice control, ultrasonic collision avoidance, emergency braking, and rearview camera support.',
    tags: [
      'Arduino UNO',
      'ESP32-CAM',
      'RFID',
      'IoT',
      'Semi-autonomous, Manual & Voice Navigation',
      'Object Detection',
    ],
  },
  {
    id: 'proj-mars-rover',
    title: 'Mars Rover Prototype',
    subtitle: 'CSE461: Introduction to Robotics | Solo Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'ESP32-CAM & Arduino-based rover featuring pan-tilt camera control, autonomous & manual navigation, a 4-DOF robotic arm for soil sampling, an onboard weather station, and a custom web app interface for controlling and real-time monitoring.',
    tags: ['Arduino UNO', 'Arduino Nano', 'ESP32-CAM', '4-DOF Arm', 'Pan-Tilt Camera', 'IoT'],
  },
  {
    id: 'proj-cheating-detect',
    title: 'Sensor-based Student Authentication & Cheating Detection System during exam',
    subtitle: 'CSE360: Computer Interfacing | Solo Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Arduino-based cost-efficient smart-desk prototype with RFID-based access and exam-monitoring sensors to detect unauthorized phone use and students looking around during tests.',
    tags: ['Arduino UNO', 'RFID', 'Phone Detection', 'Photo Sensing', 'Cheating Prevention', 'Embedded'],
  },
  {
    id: 'proj-soccer-bot',
    title: 'Competition Ready Soccer Bot without requiring a Transmitter',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed an ESP32-based soccer bot featuring Android app control via Bluetooth connection, adjustable speed modes, and high-torque DC gear motors for fast and precise gameplay. Designed as a low-cost alternative to traditional radio-controlled systems.',
    tags: ['ESP32', 'Bluetooth', 'Android App', 'High Torque Gear Motor', 'No Transmitter', 'Cost-efficient'],
  },
  {
    id: 'proj-surveillance-bot',
    title: 'WiFi Controlled Surveillance Robot with Pan-Tilt Camera Control using ESP32 Cam Module',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      "Developed a cost-efficient robot car with a pan-tilt camera that can be controlled from any browser, devices, with smooth controls and views, via the ESP32-CAM's integrated WiFi. A built-in web server provides seamless control with live video streaming directly to the interface, making it ideal for vertical and horizontal rotation for full coverage, while adjustable lighting and speed control ensure seamless real-time viewing and remote operations. The system is secured with password-protected WiFi to restrict access to authorized users.",
    tags: ['ESP32-CAM', 'Web Server', 'Real-time Video Streaming', 'Pan-Tilt', 'WiFi Control'],
  },
  {
    id: 'proj-lfr-90deg',
    title: 'Dual IR Array LFR capable of making 90° Turn without PID Algorithm',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Developed a high-speed autonomous line-following robot using dual IR sensor arrays. Implemented PID-free adaptive turning logic, 90° pivot turns, line-loss recovery, speed ramping, and counter-pulse braking for precise and stable track navigation.',
    tags: ['Arduino', 'IR Sensor Array', 'PID-free Control', '90° Turning Ability', 'Autonomous Robotics'],
  },
  {
    id: 'proj-vacuum-cleaner',
    title: 'Autonomous Vacuum Cleaner with Obstacle and Fall Avoidance',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Built a smart vacuum cleaner that autonomously navigates and cleans indoor spaces using a set of sensors. It detects obstacles within a 20 cm range using an ultrasonic sensor, stops instantly, and scans both directions via a servo-mounted sensor to select a clear path. An IR sensor enables detection of steep edges and stairs; upon detection, the robot halts, moves backward, and reroutes safely. A high-efficiency dust and dirt suction air pump ensures thorough cleaning of floors, corners, and narrow or under-furniture areas that conventional cleaners cannot reach without manual intervention.',
    tags: ['Arduino', 'Obstacle Detection & Avoidance', 'IR Cliff Detection', 'Servo Scanning', 'Autonomous'],
  },
  {
    id: 'proj-obstacle-avoiding-car',
    title: 'Obstacle Avoiding Car',
    subtitle: 'CSE350: Digital Electronics & Pulse Techniques | Solo Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Built an autonomous obstacle-avoiding robotic car using Arduino UNO as a solo project for CSE350: Digital Electronics & Pulse Techniques course.',
    tags: ['Arduino UNO', 'Obstacle Detection & Avoidance'],
  },

  // 5. Digital Logic Design (4 projects)
  {
    id: 'proj-1bit-alu',
    title: '1-bit ALU System',
    subtitle: 'Hobby Project',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Designed and implemented two versions of a 1-bit ALU using logic gate ICs, multiplexers, NPN transistors, and LEDs, supporting addition, subtraction, and multiplication with carry/borrow input-output functionality.',
    tags: ['Logic Gates', 'Multiplexers', 'Transistors', 'ALU', 'Hardware Design'],
  },
  {
    id: 'proj-elevator-controller',
    title: 'Elevator Logic Controller',
    subtitle: 'Hobby Project',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Designed and implemented a combinational digital logic system using 3-bit floor inputs to compare destination and current floors. Controlled Up, Down, and Stop LEDs with mutually exclusive outputs and integrated dual 7-segment displays to indicate floor information using basic logic gates (AND, OR, NOT, NAND, NOR, XNOR).',
    tags: ['7400 Series ICs', '7-Segment Display', 'Combinational Logic', 'State Control'],
  },
  {
    id: 'proj-water-pump',
    title: 'Automatic Water Pump System',
    subtitle: 'CSE251: Electronic Devices and Circuits | Group Project (2 members)',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Built an automatic water pump system using logic gate ICs and MOSFETs (without microcontrollers) that automatically activates when the water level drops below a threshold and shuts off when it exceeds a set limit, with LED indicators displaying real-time water levels.',
    tags: ['MOSFETs', 'Digital Logic ICs', 'Analog Circuit', 'Automation'],
  },
  {
    id: 'proj-traffic-management',
    title: 'Automatic Blind Turn Traffic Management System',
    subtitle: 'CSE260: Digital Logic Design | Group Project (4 members)',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/fathin-ishrak-romeo',
    description:
      'Designed an automatic traffic management system as a solo project for CSE260: Digital Logic Design course using logic gate ICs (without microcontrollers) for blind turns on hilly roads. The system detects approaching vehicles and activates red indicators on the opposite side to warn incoming traffic, while green LEDs signal when the road is clear and safe to pass.',
    tags: ['Digital Logic Design', 'Logic Gate ICs', 'Sensors', 'Safety Systems'],
  },
];
