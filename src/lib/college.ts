export const COLLEGE = {
  name: "Indira Gandhi Engineering College, Sagar",
  shortName: "IGEC Sagar",
  motto: "विद्या ददाति विनयम्",
  mottoEn: "Knowledge bestows humility",
  tagline: "Excellence in Engineering Education, Innovation & Career Development",
  established: 1981,
  type: "Government Autonomous Engineering College",
  affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
  recognition: "AICTE, New Delhi",
  campusAcres: 220,
  addressLines: [
    "Near Makroniya Railway Station",
    "Jabalpur Road, Baheriya",
    "District Sagar, Madhya Pradesh — 470021",
  ],
  phones: {
    counselling: ["07582-263826", "07582-263844"],
    admission: "07582-263896",
    tpo: "07582-263873",
    scholarship: "07582-263883",
    fax: "07582-263844",
  },
  email: "dr.principalgec@rediffmail.com",
  website: "https://www.igecsagar.ac.in",
  principal: {
    name: "Dr. Anurag Trivedi",
    designation: "Principal",
    specialization: "Measurement & Instrumentation, Control Systems",
    qualification: "Ph.D.",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/departments", label: "Departments" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-profile", label: "Students" },
  { to: "/placements", label: "Placements" },
  { to: "/faculty", label: "Faculty" },
  { to: "/hostel", label: "Hostel" },
  { to: "/contact", label: "Contact" },
] as const;

export const ABOUT = {
  intro:
    "Indira Gandhi Engineering College, Sagar is the 4th among the five government autonomous engineering colleges of Madhya Pradesh. The college was established by the Government of Madhya Pradesh in November 1981 to support the industrial development of the Bundelkhand region. It began as Government Engineering College, Sagar, and was later renamed Indira Gandhi Engineering College, Sagar.",
  campus:
    "In 1981 the institute started at its old site near Dr. Hari Singh Gour University, Sagar. In December 1986 it moved to newly constructed buildings on a 220-acre campus allotted in 1985, on a hillock near Baheriya village — about 10 km from Sagar city, on Jabalpur Road near Makroniya Railway Station.",
  branchesHistory:
    "Civil Engineering commenced in 1984–85, Mechanical Engineering in 1985–86, Electrical Engineering in 1988–89, Electronics & Communication Engineering in 1990–91, and Information Technology in 2000. The college was initially affiliated to Sagar University and, from 2000, to Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.",
  governance:
    "IGEC Sagar has been declared autonomous by the Government of Madhya Pradesh. It is governed by the Indira Gandhi Engineering College Society (established 1997). The Board of Governors is chaired by the Hon’ble Minister, Technical Education and Manpower Planning, Government of Madhya Pradesh, with the Principal as Member Secretary.",
  vision:
    "To produce a generation of engineering enabled in Economics, Environmental concern with Entrepreneur skills — Empowered and Enthused for Sustainable Development of the society and country in the competitive world.",
  mission: [
    "Ensure easy access to knowledge and the state of the art for students through the information highway.",
    "Implement the university curriculum in true spirit for holistic development of the student.",
    "Create infrastructure comparable to international standards.",
    "Provide excellent facilities in well-equipped laboratories and a well-stacked library that match other centres of higher learning.",
    "Ensure a conducive environment and equal opportunities so students can acquire knowledge and skills of international standards.",
    "Motivate faculty to meet challenges of liberalisation, privatisation and globalisation, and to provide quality education.",
    "Offer all-round, learner-centric education with skills and specialisation that match industry needs and the global market.",
  ],
};

export const PROGRAMS = [
  {
    slug: "civil",
    name: "Civil Engineering",
    started: "1984–85",
    seats: 68,
    lateral: 6,
    summary:
      "Foundational and advanced study of structures, surveying, materials, water resources and infrastructure for the Bundelkhand region and beyond.",
  },
  {
    slug: "mechanical",
    name: "Mechanical Engineering",
    started: "1985–86",
    seats: 68,
    lateral: 12,
    summary:
      "Thermal engineering, design, manufacturing, CAD/CAM and laboratory practice across machine shop, heat transfer, fluids and metrology.",
  },
  {
    slug: "electrical",
    name: "Electrical Engineering",
    started: "1988–89",
    seats: 68,
    lateral: 12,
    summary:
      "Power systems, machines, control, electronics and computing — from electrical power analysis to microprocessors and real-time systems.",
  },
  {
    slug: "ece",
    name: "Electronics & Communication Engineering",
    started: "1990–91",
    seats: 68,
    lateral: 12,
    summary:
      "Electronics, communication systems, digital design and related laboratories supporting modern information and signal technologies.",
  },
  {
    slug: "it",
    name: "Information Technology",
    started: "2000",
    seats: 68,
    lateral: 12,
    summary:
      "IT careers spanning computer science, information theory and communication. Department laboratories include project, software engineering and network engineering labs on a LAN of 150+ computers.",
  },
] as const;

export const APPLIED = [
  "Applied Physics",
  "Applied Chemistry",
  "Applied Mathematics",
  "Applied Geology",
  "Communication Skills / English",
  "Workshop",
] as const;

export type FacultyDept =
  | "All"
  | "Civil"
  | "Mechanical"
  | "Electrical"
  | "ECE"
  | "IT"
  | "Humanities"
  | "Administration";

export const FACULTY: {
  name: string;
  designation: string;
  department: FacultyDept;
  qualification: string;
  specialization?: string;
}[] = [
  {
    name: "Dr. Anurag Trivedi",
    designation: "Principal",
    department: "Administration",
    qualification: "Ph.D.",
    specialization: "Measurement & Instrumentation, Control Systems",
  },
  {
    name: "Prof. Shiv Datt Sharma",
    designation: "Professor & HOD",
    department: "Mechanical",
    qualification: "M.Tech., Ph.D.",
  },
  {
    name: "Prof. R. S. S. Rawat",
    designation: "Associate Professor",
    department: "Mechanical",
    qualification: "B.E., M.E.",
  },
  {
    name: "Prof. Amit Kumar",
    designation: "Assistant Professor",
    department: "Mechanical",
    qualification: "M.Tech.",
    specialization: "Thermal Engineering",
  },
  {
    name: "Prof. Vinayak Barewar",
    designation: "Assistant Professor",
    department: "Mechanical",
    qualification: "M.Tech.",
    specialization: "Thermal Engineering",
  },
  {
    name: "Prof. Yogendra Kumar",
    designation: "Assistant Professor",
    department: "Mechanical",
    qualification: "M.Tech.",
    specialization: "Thermal Engineering",
  },
  {
    name: "Prof. Vinay Pandit",
    designation: "Assistant Professor",
    department: "Mechanical",
    qualification: "M.Tech.",
  },
  {
    name: "Prof. Rajendra Prasad",
    designation: "Assistant Professor & HOD",
    department: "Electrical",
    qualification: "M.E.",
  },
  {
    name: "Prof. Savita Baraskar",
    designation: "Assistant Professor",
    department: "Electrical",
    qualification: "—",
    specialization: "Power Electronics",
  },
  {
    name: "Prof. Amy Alice Kujur",
    designation: "Assistant Professor (HOD, Information Technology)",
    department: "IT",
    qualification: "M.Tech. (Digital Communication)",
    specialization: "Digital Communication",
  },
  {
    name: "Dr. Anand Kumar Jain",
    designation: "Associate Professor",
    department: "Humanities",
    qualification: "—",
    specialization: "English",
  },
  {
    name: "Dr. Manish Kumar Soni",
    designation: "Assistant Professor",
    department: "Administration",
    qualification: "—",
  },
];

export const HOSTEL = {
  boysWarden: { name: "Mr. Kamal Ahirwar", phone: "9630416438" },
  girlsWarden: { name: "Mr. Satish Vishwakarma", phone: "9303260247" },
  notes: [
    "Separate hostels for boys and girls with boarding and recreational facilities.",
    "Each hostel has its own mess serving hygienic meals.",
    "Spacious common rooms for indoor games, discussions and gatherings.",
    "Cubical / well-furnished rooms on campus (hostels are within walking distance of academic blocks).",
    "Campus also includes administration, applied science, workshop and residential quarters.",
  ],
};

/** Placement figures are left blank until the Training & Placement Cell supplies official data. */
export const PLACEMENT = {
  highest: "To be updated",
  average: "To be updated",
  percentage: "To be updated",
  companies: "To be updated",
  note: "Official placement statistics and recruiter lists will be published here by the Training & Placement Cell. The TPO office may be reached at 07582-263873.",
  yearly: [
    { year: "2022–23", placed: 0, companies: 0 },
    { year: "2023–24", placed: 0, companies: 0 },
    { year: "2024–25", placed: 0, companies: 0 },
  ],
};

export const NEWS = [
  {
    date: "2026",
    title: "NCC admission notice for academic year 2026–27",
    kind: "Admission",
  },
  {
    date: "2025–26",
    title: "College-level counselling and lateral-entry counselling notices",
    kind: "Admission",
  },
  {
    date: "Aug 2025",
    title: "Boys hostel allotment 2025–26 (joining dates notified)",
    kind: "Hostel",
  },
  {
    date: "2025–26",
    title: "Girls hostel allotment for 2nd and 3rd year students",
    kind: "Hostel",
  },
  {
    date: "2025–26",
    title: "B.Tech. admission documents list",
    kind: "Admission",
  },
  {
    date: "2025–26",
    title: "National Scholarship / Post-Matric scholarship notices",
    kind: "Scholarship",
  },
  {
    date: "2024–25",
    title: "Admission brochure and college admission poster",
    kind: "Admission",
  },
  {
    date: "2023",
    title: "Techutsav 2K23 — annual technical festival",
    kind: "Event",
  },
] as const;

export const GALLERY = [
  { src: "/images/campus-main.webp", alt: "Main academic block, IGEC Sagar campus", cat: "Campus" },
  { src: "/images/campus-courtyard.webp", alt: "Inner courtyard of an academic block", cat: "Campus" },
  { src: "/images/campus-gate.jpeg", alt: "College gate on Jabalpur Road in monsoon", cat: "Campus" },
  { src: "/images/hostel-block.jpeg", alt: "Hostel block entrance with students", cat: "Hostel" },
  { src: "/images/event-techfest.jpeg", alt: "Tech Fest 2K26 student stall", cat: "Events" },
  { src: "/images/event-awards-1.jpeg", alt: "College cultural award ceremony on stage", cat: "Events" },
  { src: "/images/event-awards-2.jpeg", alt: "Mr and Ms campus title presentation", cat: "Events" },
  { src: "/images/cultural-udghosh.jpg", alt: "Folk dance performance at Udghosh", cat: "Activities" },
  { src: "/images/campus-ganesh.jpeg", alt: "Ganesh sthapana on campus", cat: "Activities" },
  { src: "/images/activity-holi.jpeg", alt: "Holi celebration with students", cat: "Activities" },
  { src: "/images/sports-trophy.jpeg", alt: "Sports team with trophy and medals", cat: "Sports" },
  { src: "/images/campus-life-dusk.jpeg", alt: "Students together at dusk on campus grounds", cat: "Activities" },
  { src: "/images/campus-excellence.jpeg", alt: "Students near Centre of Excellence board", cat: "Campus" },
  { src: "/images/campus-night.jpeg", alt: "Evening gathering near the college signboard", cat: "Campus" },
] as const;
