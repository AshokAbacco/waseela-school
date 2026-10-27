/**
 * Single source of truth for Waseela English Medium School.
 *
 * Every fact here comes from the school's admissions poster, its crest,
 * or details supplied by the school. Anything not yet supplied
 * (social links, extra photos, domain) is left
 * empty on purpose — the UI hides it until it is filled in.
 */
import {
  BookOpenCheck,
  HeartHandshake,
  Rocket,
  Wallet,
  Snowflake,
  MonitorPlay,
  GraduationCap,
  Salad,
  Trees,
  Bus,
  FlaskConical,
  Library,
  BedDouble,
  MessageCircle,
  School,
  ClipboardCheck,
  Monitor,
  Users,
  ShieldCheck,
  Sprout,
  Smile,
  Trophy,
} from "lucide-react";

/* Themed illustrations (.webp). Replace any of these with real campus photos later —
   keep the same import name and every section using it updates automatically. */
import campusImg from "../assets/illustrations/campus.webp";
import classroomImg from "../assets/illustrations/classroom.webp";
import playgroundImg from "../assets/illustrations/playground.png";
import diningImg from "../assets/illustrations/dining.png";
import busImg from "../assets/illustrations/bus.webp";
import labImg from "../assets/illustrations/lab.png";
import libraryImg from "../assets/illustrations/library.webp";
import hostelImg from "../assets/illustrations/hostel.png";
import educatorsImg from "../assets/illustrations/educators.png";
import appImg from "../assets/illustrations/app.png";

/* Real photos supplied by the school (.webp) */
import campusGatePhoto from "../assets/photos/campus-gate.webp";
import campusStudentsPhoto from "../assets/photos/campus-students.webp";
import campusBuildingPhoto from "../assets/photos/campus-building.webp";
import studentWritingPhoto from "../assets/photos/student-writing.webp";
import studentsGroupPhoto from "../assets/photos/students-group.png";
import classroomPhoto from "../assets/photos/classroom.webp";
import libraryPhoto from "../assets/photos/library.webp";
import computerLabPhoto from "../assets/photos/computer-lab.png";
import busesPhoto from "../assets/photos/school-buses.webp";

export const photos = {
  campusGate: campusGatePhoto,
  campusStudents: campusStudentsPhoto,
  campusBuilding: campusBuildingPhoto,
  studentWriting: studentWritingPhoto,
  studentsGroup: studentsGroupPhoto,
  classroom: classroomPhoto,
  library: libraryPhoto,
  computerLab: computerLabPhoto,
  buses: busesPhoto,
};

export const images = {
  campus: campusImg,
  classroom: classroomImg,
  playground: playgroundImg,
  dining: diningImg,
  bus: busImg,
  lab: labImg,
  library: libraryImg,
  hostel: hostelImg,
  educators: educatorsImg,
  app: appImg,
};

/* ------------------------------------------------------------------ */
/* Site                                                                 */
/* ------------------------------------------------------------------ */
/** Replace with the live domain before launch (also in public/robots.txt and sitemap.xml). */
export const SITE_URL = "https://www.example.com";

/**
 * ADMISSION YEAR — updates automatically, no editing needed.
 * Admissions for the next session open every 1 November (India time):
 *   1 Jan – 31 Oct 2026  →  "2026–2027"
 *   1 Nov 2026 onwards   →  "2027–2028"
 * To change the switch-over month, edit SWITCH_MONTH (1 = January … 11 = November).
 */
const SWITCH_MONTH = 11;
export function getAdmissionYear(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
  }).formatToParts(date);
  const year = Number(parts.find((p) => p.type === "year").value);
  const month = Number(parts.find((p) => p.type === "month").value);
  const start = month >= SWITCH_MONTH ? year + 1 : year;
  return `${start}–${start + 1}`;
}

export const school = {
  name: "Waseela English Medium School",
  nameUpper: "WASEELA ENGLISH MEDIUM SCHOOL",
  shortName: "Waseela School",
  foundation: "Waseela Foundation",
  city: "Anantapur",
  tagline: "Shaping young minds for a brighter tomorrow",
  motto: { learn: "Enter to Learn", lead: "Exit to Lead" },
  pillars: ["Quality Education", "Value-Based Learning", "Future-Ready"],
  posterLine: "Building strong foundations with quality education.",
  /** Changes by itself every 1 November — see getAdmissionYear() above. */
  admissionYear: getAdmissionYear(),
  /** Classes offered — change here and every page updates. */
  classesRange: "Nursery to 8th Standard",
  classesShort: "Nursery – 8th Std",
};

/**
 * Class list (used in the "Classes We Offer" section and the enquiry form's class dropdown).
 * Grouped into stages. Edit names here if the school uses different labels (e.g. "PP1 / PP2").
 */
export const classStages = [
  {
    key: "pre-primary",
    title: "Pre-Primary",
    range: "Nursery · LKG · UKG",
    text: "A gentle, joyful start — play-based learning, early language, numbers and good habits.",
    classes: ["Nursery", "LKG", "UKG"],
  },
  {
    key: "primary",
    title: "Primary",
    range: "1st – 5th Standard",
    text: "Strong foundations in English, Mathematics, Science and Social Studies with clear, concept-focused teaching.",
    classes: [
      "1st Standard",
      "2nd Standard",
      "3rd Standard",
      "4th Standard",
      "5th Standard",
    ],
  },
  {
    key: "upper-primary",
    title: "Upper Primary",
    range: "6th – 8th Standard",
    text: "Deeper subject learning, digital skills and confidence — preparing students for high school.",
    classes: ["6th Standard", "7th Standard", "8th Standard"],
  },
];
export const allClasses = classStages.flatMap((s) => s.classes);

export const contact = {
  addressLines: [
    "KVS Nagar, NTR Marg,",
    "Near Tadipatri Road, Old Town,",
    "Anantapur, Bukkaraya Samudram,",
    "Andhra Pradesh – 515005",
  ],
  addressShort: "KVS Nagar, NTR Marg, near Tadipatri Road, Old Town, Anantapur",
  street: "KVS Nagar, NTR Marg, near Tadipatri Road, Old Town",
  locality: "Anantapur",
  region: "Andhra Pradesh",
  postalCode: "515005",
  geo: { lat: 14.68772602374969, lng: 77.61772226974352 },
  phones: [
    { display: "+91 79013 14488", tel: "+917901314488" },
    { display: "+91 70934 17093", tel: "+917093417093" },
  ],
  emails: ["Waseelaenglishmediumschool@gmail.com"],
  /**
   * The poster lists two enquiry numbers but no dedicated WhatsApp line.
   * The first enquiry number is used — change here if the school uses another.
   */
  whatsapp: { display: "+91 79013 14488", number: "917901314488" },
  /**
   * Office hours (school timezone: Asia/Kolkata). `open` / `close` are 24-hour "HH:MM".
   * Used by the Contact page "Plan Your Visit" table (with a "Today" tag and live Open/Closed status) and the footer.
   */
  officeHoursSummary: "Mon – Sat: 9:00 AM – 5:00 PM",
  officeHours: [
    {
      day: "Monday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    {
      day: "Tuesday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    {
      day: "Wednesday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    {
      day: "Thursday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    {
      day: "Friday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    {
      day: "Saturday",
      hours: "9:00 AM – 5:00 PM",
      open: "09:00",
      close: "17:00",
    },
    { day: "Sunday", hours: "Closed", closed: true },
  ],
};

export const links = {
  whatsapp: `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent("Hello Waseela English Medium School, I would like to know about admissions.")}`,
  mapsEmbed: `https://maps.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&z=16&output=embed`,
  mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${contact.geo.lat},${contact.geo.lng}`,
  email: `mailto:${contact.emails[0]}`,
  /** Opens WhatsApp chat with any prefilled message (used by the enquiry form). */
  whatsappWith: (text) =>
    `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(text)}`,
};

/** Official school app on Google Play. Paste the store link when the app is live. */
export const schoolApp = {
  name: "WASEELA EMS",
  /** e.g. https://play.google.com/store/apps/details?id=YOUR.APP.ID */
  playStoreUrl: "",
};

/** Store link, or a Google Play search for the app name until the link is added. */
export const playStoreHref =
  schoolApp.playStoreUrl ||
  `https://play.google.com/store/search?q=${encodeURIComponent(schoolApp.name)}&c=apps`;

/** Website credit shown at the bottom of the footer. */
export const developer = {
  name: "ABACCO TECHNOLOGY",
  url: "https://www.abaccotech.com/",
  /** Optional: put the logo at public/abacco-logo.png. If missing, only the name shows. */
  logo: "/abacco-logo.png",
};

/** Add real profile URLs to show icons in the footer. */
export const social = [];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision", to: "/vision" },
  { label: "Mission", to: "/mission" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

/** The three pillars from the school's own tagline line. */
export const pillars = [
  {
    icon: BookOpenCheck,
    title: "Quality Education",
    text: "Strong foundations in language, numbers and concepts, taught with care and clarity.",
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Learning",
    text: "Respect, honesty and responsibility woven into the rhythm of every school day.",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    text: "Digital classrooms and confident communication that prepare children for what comes next.",
  },
];

/** "Why choose us" — the six points printed on the admissions poster. */
export const whyChooseUs = [
  {
    icon: Wallet,
    title: "Affordable Fee Structure",
    text: "Quality English-medium schooling kept within reach of families in Anantapur.",
  },
  {
    icon: Snowflake,
    title: "Air-Conditioned Classrooms",
    text: "Cool, comfortable rooms so children can stay focused through every season.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Panel Boards",
    text: "Well-equipped classrooms with interactive digital panels that bring lessons to life.",
  },
  {
    icon: GraduationCap,
    title: "Expert Educators",
    text: "Teachers with strong teaching skills who give every child patient, personal attention.",
  },
  {
    icon: Salad,
    title: "Nutritious & Hygienic Food",
    text: "Wholesome meals prepared hygienically to keep young learners healthy and energetic.",
  },
  {
    icon: Trees,
    title: "Spacious Playground",
    text: "Open ground for play, games and physical activity — an essential part of growing up.",
  },
];

export const intro = {
  label: "Welcome to Waseela",
  heading: "Building Strong Foundations, One Child at a Time",
  body: [
    "Waseela English Medium School in Old Town, Anantapur, is built on a simple belief: every child deserves a quality English-medium education that also shapes good character.",
    "Our classrooms combine concept-focused teaching with digital panel boards, comfortable air-conditioned spaces and teachers who know each child by name — so learning feels clear, joyful and purposeful.",
  ],
};

export const about = {
  heroHeading: "Where Children Enter to Learn and Leave Ready to Lead",
  heroText:
    "Waseela English Medium School is an initiative under the Waseela Foundation, serving families in Anantapur with quality English-medium education rooted in values.",
  story: [
    "Our crest carries the words that guide everything we do — Enter to Learn, Exit to Lead. We see school as the place where curiosity is welcomed, effort is encouraged and good habits are formed early.",
    "From the first day, children learn in comfortable, well-equipped classrooms supported by digital panel boards, play freely on a spacious ground, and are cared for with nutritious, hygienic food — all at a fee structure designed to stay affordable for families.",
  ],
  storyPoints: [
    "Quality English-medium education",
    "Value-based learning every day",
    "AC classrooms with digital panel boards",
    "Nutritious, hygienically prepared food",
    "Spacious playground for active growth",
  ],
  values: [
    {
      icon: HeartHandshake,
      title: "Character First",
      text: "Good manners, honesty and respect for others are practised daily — not just taught.",
    },
    {
      icon: BookOpenCheck,
      title: "Clarity in Learning",
      text: "Concepts are explained simply and revisited often, so children truly understand.",
    },
    {
      icon: Rocket,
      title: "Confidence to Lead",
      text: "Children are encouraged to speak, ask and take responsibility from an early age.",
    },
  ],
  educators:
    "Our educators bring strong teaching skills and genuine care to the classroom. They combine clear explanation with digital tools and patient, individual attention, so each child can learn at their best.",
};

export const vision = {
  heroHeading: "A Brighter Tomorrow for Every Child",
  statement:
    "To shape young minds into confident, capable and kind individuals — children who enter our school to learn and leave it ready to lead with knowledge and values.",
  focus: [
    {
      title: "Strong Foundations",
      text: "Solid early learning in language, mathematics and concepts that every later lesson builds upon.",
    },
    {
      title: "Good Character",
      text: "Values of honesty, respect and responsibility that guide children in school and beyond.",
    },
    {
      title: "Confident Communication",
      text: "Fluency and confidence in English, so children can express ideas clearly.",
    },
    {
      title: "Future Readiness",
      text: "Comfort with digital learning and curiosity that keeps children learning for life.",
    },
    {
      title: "Healthy Growth",
      text: "Play, physical activity and nutritious food as part of a balanced school day.",
    },
    {
      title: "Access for Families",
      text: "Quality English-medium education at an affordable fee structure for Anantapur.",
    },
  ],
};

export const mission = {
  heroHeading: "Turning Every School Day Into Meaningful Growth",
  points: [
    {
      title: "Teach With Clarity",
      text: "Deliver quality, concept-focused lessons in well-equipped classrooms supported by digital panel boards.",
    },
    {
      title: "Nurture Values",
      text: "Build honesty, respect and responsibility into daily routines so good character becomes habit.",
    },
    {
      title: "Care for Every Child",
      text: "Give each learner personal attention from skilled educators who understand how children grow.",
    },
    {
      title: "Keep Children Healthy",
      text: "Provide nutritious, hygienically prepared food and room to play on a spacious playground.",
    },
    {
      title: "Stay Within Reach",
      text: "Keep quality English-medium education accessible through an affordable fee structure.",
    },
  ],
};

/**
 * Facilities shown with images across the site.
 * Transport, science lab, library and hostel were confirmed by the school;
 * please check the wording with the school office before launch.
 */
export const facilities = [
  {
    key: "classroom",
    icon: Snowflake,
    title: "AC Classrooms",
    text: "Air-conditioned, well-equipped classrooms with digital panel boards that make lessons clear and engaging.",
    image: classroomPhoto,
  },
  {
    key: "educators",
    icon: GraduationCap,
    title: "Expert Educators",
    text: "Skilled teachers who explain concepts patiently and give every child personal attention.",
    image: educatorsImg,
  },
  {
    key: "lab",
    icon: FlaskConical,
    title: "Science Lab",
    text: "A science laboratory where children observe, experiment and learn by doing.",
    image: labImg,
  },
  {
    key: "library",
    icon: Library,
    title: "Library",
    text: "Books for every age and a quiet space to read — building a lifelong reading habit.",
    image: libraryPhoto,
  },
  {
    key: "computer-lab",
    icon: Monitor,
    title: "Computer Lab",
    text: "Computers for hands-on digital learning, helping children grow confident with technology.",
    image: computerLabPhoto,
  },
  {
    key: "playground",
    icon: Trees,
    title: "Spacious Playground",
    text: "Open ground for games, sports and free play — an essential part of a healthy school day.",
    image: playgroundImg,
  },
  {
    key: "dining",
    icon: Salad,
    title: "Nutritious Food",
    text: "Wholesome meals prepared hygienically to keep young learners healthy and energetic.",
    image: diningImg,
  },
  {
    key: "bus",
    icon: Bus,
    title: "School Transport",
    text: "School bus service for students. Ask the school office about routes and timings for your area.",
    image: busesPhoto,
  },
  {
    key: "hostel",
    icon: BedDouble,
    title: "Hostel & Boarding",
    text: "Boarding facility for students, with a calm place to rest and study after school hours.",
    image: hostelImg,
  },
];

/** Transport and boarding detail panels on the home page. */
export const beyondClassroom = [
  {
    key: "bus",
    icon: Bus,
    label: "Transport",
    title: "Safe Travel to School",
    text: "Our school bus service helps students travel between home and school. Routes and timings are shared by the school office.",
    points: [
      "School bus service for students",
      "Routes and timings from the school office",
      "Ask us whether your area is covered",
    ],
    image: busImg,
  },
  {
    key: "hostel",
    icon: BedDouble,
    label: "Boarding",
    title: "A Home Away From Home",
    text: "For families who need it, our hostel offers students a caring place to stay, rest and study within the school.",
    points: [
      "Hostel facility for students",
      "Space to rest and study after school",
      "Contact us for availability and details",
    ],
    image: hostelImg,
  },
];

/** Simple admission journey — no requirements are listed until the school supplies them. */
export const admissionSteps = [
  {
    icon: MessageCircle,
    title: "Enquire",
    text: "Call or WhatsApp us to ask about seats, fees, transport and hostel for your child.",
  },
  {
    icon: School,
    title: "Visit the campus",
    text: "See our classrooms, library, lab and playground, and meet our team.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete admission",
    text: "Our office guides you through the forms and documents needed to confirm the seat.",
  },
];

/** Gallery — real photos only. Add more { key, title, caption, src } items any time. */
export const galleryPhotos = [
  {
    key: "gate",
    title: "Our Campus",
    caption: "The main gate and school building",
    src: campusGatePhoto,
  },
  {
    key: "students",
    title: "Our Students",
    caption: "Students at the school entrance",
    src: campusStudentsPhoto,
  },
  {
    key: "building",
    title: "School Building",
    caption: "The Waseela school building",
    src: campusBuildingPhoto,
  },
  {
    key: "classroom",
    title: "Classrooms",
    caption: "Well-equipped classrooms",
    src: classroomPhoto,
  },
  {
    key: "library",
    title: "Library",
    caption: "Shelves of books for every age",
    src: libraryPhoto,
  },
  {
    key: "computer-lab",
    title: "Computer Lab",
    caption: "Hands-on digital learning",
    src: computerLabPhoto,
  },
  {
    key: "buses",
    title: "School Transport",
    caption: "Our school buses",
    src: busesPhoto,
  },
  {
    key: "learning",
    title: "Learning Every Day",
    caption: "A student at work in class",
    src: studentWritingPhoto,
  },
  {
    key: "group",
    title: "Happy Learners",
    caption: "Waseela students together",
    src: studentsGroupPhoto,
  },
];

/** Hero highlight card. `value` counts up from 0 on page load; `suffix` is shown after the number. */
export const heroHighlights = [
  { icon: Smile, value: 500, suffix: "+", label: "Happy Students" },
  { icon: GraduationCap, value: 30, suffix: "+", label: "Qualified Teachers" },
  { icon: Trophy, value: 15, suffix: "+", label: "Years of Experience" },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Safe & Supportive Campus",
  },
];

/** Four-feature strip under the About section. */
export const coreStrengths = [
  {
    icon: BookOpenCheck,
    title: "Quality Education",
    text: "Strong foundations and concept-focused teaching",
  },
  {
    icon: Users,
    title: "Expert Educators",
    text: "Skilled, caring teachers for every child",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "A secure and supportive campus",
  },
  {
    icon: Sprout,
    title: "Holistic Development",
    text: "Academics, values, play and healthy food",
  },
];

export const academics = {
  label: "Our Academics",
  heading: "Excellence in Education for a Brighter Tomorrow",
  text: "Concept-focused English-medium teaching that builds understanding, confidence and a lifelong love for learning.",
  points: [
    "Nursery to 8th Standard",
    "English-medium instruction",
    "Concept-focused teaching",
    "AC classrooms with digital panel boards",
    "Value-based learning every day",
  ],
};

/**
 * Optional sections — they stay hidden until filled in.
 * news: [{ date: "2026-10-12", title: "Annual Day", text: "..." }]
 * principal: { name: "…", message: "…", photo: importedImage }
 */
/**
 * Parent testimonials — shown on the home page in two moving rows.
 * Replace each placeholder with REAL feedback collected from parents (with their permission):
 *   { name: "Mrs. Fathima", detail: "Parent of Class 3 student", quote: "Their words…" }
 * While `quote` is empty the card shows as a clearly-marked placeholder.
 */

export const testimonials = [
  {
    name: "Mrs. Fathima Begum",
    detail: "Parent of Nursery student",
    quote:
      "My child enjoys coming to school every day. The teachers are caring and make learning fun for little children.",
  }, // 1
  {
    name: "Mr. Ramesh Kumar",
    detail: "Parent of LKG student",
    quote:
      "We are happy with the way our child is learning. The teachers give proper attention and encourage children to participate.",
  }, // 2
  {
    name: "Mrs. Ayesha Parveen",
    detail: "Parent of UKG student",
    quote:
      "I have noticed improvement in my child's speaking skills and confidence. The learning environment is friendly and supportive.",
  }, // 3
  {
    name: "Mrs. Lakshmi Devi",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers explain lessons patiently and help children understand their basics. We are satisfied with our child's progress.",
  }, // 4
  {
    name: "Mr. Mohammed Irfan",
    detail: "Parent of Class 2 student",
    quote:
      "The school gives importance to both education and good manners. We appreciate the teachers' dedication and support.",
  }, // 5
  {
    name: "Mrs. Sunitha Reddy",
    detail: "Parent of Class 3 student",
    quote:
      "The digital classroom facilities make lessons more interesting. My child is excited to share what they learn at school.",
  }, // 6
  {
    name: "Mrs. Shabana Taj",
    detail: "Parent of Class 4 student",
    quote:
      "We appreciate the friendly teachers and the school's focus on academic learning. Communication with parents is important to us.",
  }, // 7
  {
    name: "Mr. Suresh Babu",
    detail: "Parent of Class 5 student",
    quote:
      "The school provides a good environment for children to learn and grow. We are pleased with the attention given to students.",
  }, // 8
  {
    name: "Mrs. Nilofer Sultana",
    detail: "Parent of Class 6 student",
    quote:
      "My child is becoming more confident in studies and classroom activities. We value the encouragement provided by the teachers.",
  }, // 9
  {
    name: "Mrs. Padmavathi",
    detail: "Parent of Class 7 student",
    quote:
      "The school encourages discipline, responsibility and regular learning. We are glad to see our child developing good habits.",
  }, // 10
  {
    name: "Mr. Abdul Rahman",
    detail: "Parent of Class 8 student",
    quote:
      "We appreciate the school's efforts to build strong academic foundations and prepare students for the next stage of education.",
  }, // 11
  {
    name: "Mrs. Kavitha",
    detail: "Parent of Nursery student",
    quote:
      "The teachers are kind and welcoming. My little one feels comfortable at school, which gives us peace of mind.",
  }, // 12
  {
    name: "Mr. Sameer Ahmed",
    detail: "Parent of LKG student",
    quote:
      "Our child is learning new words, numbers and everyday skills. We appreciate the patient approach of the teachers.",
  }, // 13
  {
    name: "Mrs. Anuradha",
    detail: "Parent of UKG student",
    quote:
      "The school helps children develop confidence and communication skills. We are happy with the learning experience.",
  }, // 14
  {
    name: "Mrs. Rukhsana Begum",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers make learning enjoyable and encourage children to ask questions. It is wonderful to see our child becoming curious.",
  }, // 15
  {
    name: "Mr. Venkatesh",
    detail: "Parent of Class 2 student",
    quote:
      "We like the focus on basic concepts and regular practice. Our child is gradually becoming more independent with schoolwork.",
  }, // 16
  {
    name: "Mrs. Saira Banu",
    detail: "Parent of Class 3 student",
    quote:
      "The school provides a supportive atmosphere where children can learn at their own pace. We appreciate the teachers' efforts.",
  }, // 17
  {
    name: "Mrs. Geetha Kumari",
    detail: "Parent of Class 4 student",
    quote:
      "We are pleased with the school's emphasis on education, discipline and respect. These values are important for every child.",
  }, // 18
  {
    name: "Mr. Imran Pasha",
    detail: "Parent of Class 5 student",
    quote:
      "The teachers motivate students to work hard and take part in classroom activities. We appreciate their continued guidance.",
  }, // 19
  {
    name: "Mrs. Swathi",
    detail: "Parent of Class 6 student",
    quote:
      "The school encourages students to improve their knowledge and express their ideas. We value this balanced approach to learning.",
  }, // 20
  {
    name: "Mrs. Farzana",
    detail: "Parent of Class 7 student",
    quote:
      "We appreciate the school's efforts to develop academic skills, confidence and good character in students.",
  }, // 21
  {
    name: "Mr. Prakash Rao",
    detail: "Parent of Class 8 student",
    quote:
      "The teachers guide students in their studies and encourage them to take responsibility for their learning. We are grateful for their support.",
  }, // 22
  {
    name: "Mrs. Haseena",
    detail: "Parent of Nursery student",
    quote:
      "My child looks forward to school activities and enjoys learning through everyday experiences. The caring atmosphere is a big plus.",
  }, // 23
  {
    name: "Mrs. Renuka",
    detail: "Parent of LKG student",
    quote:
      "We are happy to see our child learning letters, numbers and social skills. The teachers make the early learning experience enjoyable.",
  }, // 24
  {
    name: "Mr. Yusuf Ali",
    detail: "Parent of UKG student",
    quote:
      "The school helps children prepare for primary classes by building confidence and strengthening their basic skills.",
  }, // 25
  {
    name: "Mrs. Meena Kumari",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers encourage children to participate and learn with confidence. We appreciate the school's positive atmosphere.",
  }, // 26
  {
    name: "Mrs. Tasneem",
    detail: "Parent of Class 2 student",
    quote:
      "We are glad our child has a comfortable environment to study, make friends and develop good habits.",
  }, // 27
  {
    name: "Mr. Srinivas",
    detail: "Parent of Class 3 student",
    quote:
      "The school's focus on clear explanations and regular learning helps children build a strong foundation for the future.",
  }, // 28
  {
    name: "Mrs. Rubina",
    detail: "Parent of Class 5 student",
    quote:
      "We value the attention given to children's learning and behaviour. The school encourages students to keep improving.",
  }, // 29
  {
    name: "Mrs. Padmaja",
    detail: "Parent of Class 8 student",
    quote:
      "We appreciate the school's commitment to education and personal development. It is important to us that our child grows in both knowledge and confidence.",
  }, // 30
];

export const news = [];
export const principal = null;

export const seo = {
  home: {
    title: "WASEELA ENGLISH MEDIUM SCHOOL | Anantapur",
    description:
      "Waseela English Medium School, Old Town, Anantapur — Nursery to 8th Standard. Shaping young minds for a brighter tomorrow with quality education, value-based learning and a future-ready approach.",
  },
  about: {
    title: "About Us | Waseela English Medium School, Anantapur",
    description:
      "Learn about Waseela English Medium School — an initiative of the Waseela Foundation. Enter to Learn, Exit to Lead.",
  },
  vision: {
    title: "Our Vision | Waseela English Medium School",
    description:
      "Our vision: confident, capable and kind children who enter to learn and leave ready to lead.",
  },
  mission: {
    title: "Our Mission | Waseela English Medium School",
    description:
      "How Waseela English Medium School delivers quality education, value-based learning and care for every child in Anantapur.",
  },
  facilities: {
    title: "Facilities | Waseela English Medium School, Anantapur",
    description:
      "AC classrooms with digital panel boards, library, computer and science labs, playground, nutritious food, school transport and hostel at Waseela English Medium School.",
  },
  gallery: {
    title: "Gallery | Waseela English Medium School, Anantapur",
    description:
      "Photos of the Waseela English Medium School campus, classrooms, library, computer lab and school buses.",
  },
  privacy: {
    title:
      "Privacy Policy | WASEELA EMS App & Website | Waseela English Medium School",
    description:
      "How Waseela English Medium School collects, uses and protects personal data in the WASEELA EMS app and on this website — app permissions, your rights and account deletion.",
  },
  contact: {
    title: "Contact & Admissions | Waseela English Medium School",
    description:
      "Admissions for Nursery to 8th Standard. Visit Waseela English Medium School at KVS Nagar, NTR Marg, near Tadipatri Road, Old Town, Anantapur 515005. Call +91 79013 14488.",
  },
};
