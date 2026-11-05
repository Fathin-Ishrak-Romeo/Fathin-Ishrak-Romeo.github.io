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
    description: 'Profitable robotics startup delivering intelligent IoT solutions, robotic kits, components and custom engineering projects.',
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
    skills: ['Python', 'HTML', 'C', 'C++', 'SQL'],
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
    skills: ['SDLC', 'Agile', 'DevOps', 'MVC Architecture', 'Waterfall', 'V-Model', 'Incremental & Iterative Models', 'Testing'],
  },
  {
    id: 'artificial-intel',
    name: 'Artificial Intelligence',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
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
  {
    id: 'operating-sys',
    name: 'Operating Systems',
    skills: ['Windows', 'Linux'],
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
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Multi-Level-Deep-Generative-Model-with-PVAE-and-RL-for-Enhanced-IDS',
    description:
      'Developed a hierarchical intrusion-detection model using a three-level Poisson VAE chain (packet -> flow -> session) with normalizing flows, a PPO agent for per-sample ensemble weighting, and an XGBoost meta-learner to fuse predictions. Evaluated on NF-UQ-NIDS-v2 dataset, it achieved 89.17% multiclass accuracy and strong binary discrimination (98.11% AUROC).',
    tags: [
      'IDS',
      'Poisson VAE',
      'Reinforcement Learning',
      'Normalizing Flow',
      'PPO Agent',
      'XGBoost',
      'NF-UQ-NIDS-v2',
      'Cybersecurity',
    ],
  },
  {
    id: 'proj-fir-dec',
    title: 'FIR-DEC: A Deep Embedding Clustering Model Using Convolutional Autoencoders on MNIST Dataset of Handwritten Digits',
    subtitle: 'CSE425: Neural Network | Solo Research',
    category: 'Research',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/FIR-DEC_Deep-Embedding-Clustering-Model-Using-Convolutional-Autoencoders-on-MNIST-Digits-Dataset',
    description:
      'Developed a deep-embedding clustering model that combines a convolutional autoencoder with a DEC-style clustering head (implemented in PyTorch) to learn cluster-discriminative representations on the MNIST handwritten-digit dataset. Jointly optimized reconstruction and KL clustering losses and achieved an adjusted Rand Index of ~0.62, substantially outperforming k-means baseline with improved silhouette and Davies-Bouldin scores.',
    tags: [
      'Convolutional Autoencoder',
      'DEC Clustering',
      'MNIST handwritten-digit',
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
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/PCGenixAI',
    description:
      'AI-based custom PC build recommendations and component shopping platform with user authentication, dynamic build generation, and smart filtering using React, TypeScript, Node.js, Express.js, and Supabase.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'AI'],
  },
  {
    id: 'proj-bux',
    title: 'BuX : Online Learning Platform',
    subtitle: 'CSE470: Software Engineering | Group Project (3 members)',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/CSE470_PROJECT_Online-Learning-Platform_BuX',
    description:
      'Full-stack Laravel e-learning website with roles (instructor, student & admin), management (course, section & lecture), quizzes, cart and payments, dashboards and progress tracking; built with Laravel (PHP), MySQL, Blade and Tailwind.',
    tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
  },
  {
    id: 'proj-nearby-expertise',
    title: 'Nearby Expertise: Service Provider Finder',
    subtitle: 'CSE370: Database Systems | Group Project (3 members)',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/CSE370-Project-Website_Nearby-Expertise',
    description:
      'Developed a web-based platform that connects users with nearby professionals (e.g., electricians, plumbers, carpenters) using PHP, HTML, CSS, and MySQL; features database-driven service listings, user authentication, and efficient data management for real-world applications.',
    tags: ['PHP', 'HTML', 'CSS3', 'MySQL'],
  },
  {
    id: 'proj-food-ordering',
    title: 'Digital Food Ordering System (User Interface)',
    subtitle: 'CSE341: Microprocessor | Solo Project',
    category: 'Software & Web Development',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/CSE341-Project_Digital-food-ordering-system-at-a-restaurant-using-x86-Assembly-Language',
    description:
      'Developed a digital food-ordering system in x86 Assembly that runs on the EMU8086 emulator. The menu-driven program supports category browsing, item selection with quantity validation, and order processing, demonstrating low-level implementation of user interaction and basic order data handling.',
    tags: ['x86 Assembly', 'EMU8086', 'Microprocessors', 'Assembly Language'],
  },

  // 3. Game Development (2 projects)
  {
    id: 'proj-shoot-circles',
    title: 'Shoot the Falling Circles',
    subtitle: 'CSE423: Computer Graphics | Solo Project',
    category: 'Game Development',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Project-Game_Shooting-the-falling-circles',
    description:
      'Designed a game using Pygame, where the main objective is to shoot the falling circle-shaped objects. The game can be over in 3 ways: if a falling circle touches the shooter directly, if a player misses 3 falling circles to shoot, or if a player misfires 3 times.',
    tags: ['Pygame', '2D Physics', 'Computer Graphics', 'Game Loop'],
  },
  {
    id: 'proj-catch-diamonds',
    title: 'Catch the Falling Diamonds',
    subtitle: 'CSE423: Computer Graphics | Solo Project',
    category: 'Game Development',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Project-Game_Catch-the-falling-diamonds',
    description:
      'This game was developed using Pygame, with the main goal of catching falling diamonds. As the game progresses, the difficulty increases by speeding up the falling diamonds. If the player misses a diamond, the game ends.',
    tags: ['Pygame', '2D Physics', 'Computer Graphics', 'Collision Detection'],
  },

  // 4. Robotics & IoT (8 projects)
  {
    id: 'proj-tesla',
    title: 'TESLA Prototype',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/TESLA-Prototype-Voice-control-with-emergency-braking-Manual-control-and-RFID-based-door-security-',
    description:
      'Developed a cost-efficient Tesla-inspired robotic car using Arduino UNO and ESP32-CAM with RFID security, manual & voice control, autonomous ultrasonic collision avoidance, autonomous emergency braking, and rearview camera support.',
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
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Mars-Rover-Prototype',
    description:
      'ESP32-CAM & Arduino-based rover featuring pan-tilt camera control, autonomous & manual navigation, a 4-DOF robotic arm for soil sampling, an onboard weather station, and a custom web app interface for controlling and real-time monitoring.',
    tags: ['Arduino UNO', 'Arduino Nano', 'ESP32-CAM', '4-DOF Arm', 'Weather Station', 'Pan-Tilt Camera', 'IoT'],
  },
  {
    id: 'proj-cheating-detect',
    title: 'Sensor-based Student Authentication & Cheating Detection System during exam',
    subtitle: 'CSE360: Computer Interfacing | Solo Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Sensor-based-Access-Authentication-and-Cheating-Detection-System-during-exam-using-Arduino',
    description:
      'Arduino-based cost-efficient smart-desk prototype with RFID-based access control and exam-monitoring sensors to detect unauthorized phone use and students looking around during tests.',
    tags: ['Arduino UNO', 'RFID', 'Phone Detection', 'Photo Sensing', 'Cheating Prevention'],
  },
  {
    id: 'proj-soccer-bot',
    title: 'Competition-Ready Soccer Bot without Requiring a Transmitter',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Soccer_Bot_for_Competition_without_any_Transmitter',
    description:
      'Developed an ESP32-based soccer bot featuring Android app control via Bluetooth connection, adjustable speed modes, and high-torque DC gear motors for fast and precise gameplay. Designed as a low-cost alternative to traditional radio-controlled systems.',
    tags: ['ESP32', 'Bluetooth Connectivity', 'Android App', 'High Torque Gear Motor', 'No Transmitter', 'Cost-efficient'],
  },
  {
    id: 'proj-surveillance-bot',
    title: 'WiFi Controlled Surveillance Robot with Pan-Tilt Camera Control using ESP32 Cam Module',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/WiFi-Controlled-Surveillance-Robot-with-Pan-Tilt-Camera-Control-using-ESP32-Cam-Module',
    description:
      "Developed a WiFi-enabled ESP32-CAM robot car with browser-based cross-platform control, live video streaming, 180° pan-tilt surveillance, adjustable lighting, and secure password-protected remote access. Beyond security, it’s suitable for remote inspections, education, research, smart home monitoring, and exploring hard-to-reach or hazardous areas.",
    tags: ['ESP32-CAM', 'Web Server', 'Real-time Video Streaming', 'Pan-Tilt', 'WiFi Control'],
  },
  {
    id: 'proj-lfr-90deg',
    title: 'Dual IR Array LFR capable of making 90° Turns without PID Algorithm',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Dual-IR-Array-LFR-capable-of-making-90-Turn-without-PID-Algorithm',
    description:
      'Developed a high-speed autonomous line-following robot using dual IR sensor arrays. Implemented PID-free adaptive turning logic, 90° pivot turns, line-loss recovery, speed ramping, and counter-pulse braking for precise and stable track navigation.',
    tags: ['Arduino', 'IR Sensor Array', 'PID-free Control', '90° Turning Ability', 'Line Detection', 'Autonomous Robotics'],
  },
  {
    id: 'proj-vacuum-cleaner',
    title: 'Autonomous Vacuum Cleaner with Obstacle and Fall Avoidance',
    subtitle: 'Hobby Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Autonomous-Vacuum-Cleaner-with-Obstacle-and-Fall-Avoidance-Using-Arduino',
    description:
      'Built an autonomous smart vacuum cleaner with Arduino Uno, ultrasonic and IR-based navigation for obstacle and edge detection, enabling safe rerouting and efficient cleaning in tight and hard-to-reach indoor spaces via air suction. ',
    tags: ['Arduino', 'Obstacle Detection & Avoidance', 'IR Cliff Detection', 'Servo Scanning', 'Autonomous Robotics'],
  },
  {
    id: 'proj-obstacle-avoiding-car',
    title: 'Obstacle Avoiding Car',
    subtitle: 'CSE350: Digital Electronics & Pulse Techniques | Solo Project',
    category: 'Robotics & IoT',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Hardware-Project_Obstacle-Avoiding-Car-using-Arduino',
    description:
      'Built an autonomous obstacle-avoiding robotic car using Arduino UNO, ultrasonic sensor, and servo',
    tags: ['Arduino UNO', 'Obstacle Detection & Avoidance', 'Servo Scanning', 'Autonomous Robotics'],
  },

  // 5. Digital Logic Design (4 projects)
  {
    id: 'proj-1bit-alu',
    title: '1-bit ALU System',
    subtitle: 'Hobby Project',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/1-bit-ALU-System-with-Carry-in-and-Borrow-in',
    description:
      'Designed and implemented two versions of a 1-bit ALU using 7400 series logic gate ICs, multiplexers, NPN transistors, and LEDs, supporting addition, subtraction, and multiplication with carry & borrow input-output functionality.',
    tags: ['7400 series IC', 'Logic Gates', 'Multiplexers', 'Transistors', '1-bit ALU', 'Hardware Design'],
  },
  {
    id: 'proj-elevator-controller',
    title: 'Elevator Logic Controller',
    subtitle: 'Hobby Project',
    category: 'Digital Logic Design',
    githubUrl: 'https://github.com/Fathin-Ishrak-Romeo/Elevator-Logic-Controller-using-7400-Series-Logic-Gate-ICs',
    description:
      'Designed and implemented a combinational digital logic system using 3-bit floor inputs to compare destination and current floors. Controlled Up, Down, and Stop LEDs with mutually exclusive outputs and integrated dual 7-segment displays to indicate floor information using 7400 series basic logic gates (AND, OR, NOT, NAND, NOR, XNOR).',
    tags: ['7400 Series ICs', '7-Segment Display', 'Combinational Logic', 'State Control'],
  },
  {
    id: 'proj-water-pump',
    title: 'Automatic Water Pump System',
    subtitle: 'CSE251: Electronic Devices and Circuits | Group Project (2 members)',
    category: 'Digital Logic Design',
    githubUrl: '',
    description:
      'Built an automatic water pump system using logic gate ICs and MOSFETs (without microcontrollers) that automatically activates when the water level drops below a threshold and shuts off when it exceeds a set limit, with LED indicators displaying real-time water levels.',
    tags: ['7400 Series ICs', 'MOSFETs', 'Analog Circuit', 'Automation'],
  },
  {
    id: 'proj-traffic-management',
    title: 'Automatic Blind Turn Traffic Management System',
    subtitle: 'CSE260: Digital Logic Design | Group Project (4 members)',
    category: 'Digital Logic Design',
    githubUrl: '',
    description:
      'Designed an automatic traffic management system using logic gate ICs (without microcontrollers) for blind turns on hilly roads. The system detects approaching vehicles and activates red indicators on the opposite side to warn incoming traffic, while green LEDs signal when the road is clear and safe to pass.',
    tags: ['7400 Series ICs', 'Logic Gate', 'Sensors', 'Safety Systems'],
  },
];
