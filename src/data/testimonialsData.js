/**
 * PARENT TESTIMONIALS — all testimonial data lives in this one file.
 *
 * Used on:
 *   • Home page  → the first HOME_TESTIMONIALS cards, in two moving rows
 *   • /testimonials page → every card, in a grid with class filters
 *
 * Each item:
 *   name    parent's name
 *   detail  e.g. "Parent of Class 3 student" (the class is also used for the filter buttons)
 *   quote   the parent's words
 *   photo   the STUDENT's photo (optional). While it is null, a neat student icon is shown instead.
 *
 * HOW TO ADD A STUDENT PHOTO
 *   1. Put the photo in  src/assets/testimonials/   (square photos look best, e.g. 400 × 400, .webp or .jpg)
 *   2. Import it at the top of this file:
 *        import fathimaChild from "../assets/testimonials/fathima-child.webp";
 *   3. Set it on that parent's card:
 *        photo: fathimaChild,
 *   Only use photos the parents have given permission for.
 */

/** How many cards to show on the home page (split into two rows). The rest appear on /testimonials. */
export const HOME_TESTIMONIALS = 12;

export const testimonials = [
  {
    name: "Mrs. Fathima Begum",
    detail: "Parent of Nursery student",
    quote:
      "My child enjoys coming to school every day. The teachers are caring and make learning fun for little children.",
    photo: null,
  }, // 1
  {
    name: "Mr. Ramesh Kumar",
    detail: "Parent of LKG student",
    quote:
      "We are happy with the way our child is learning. The teachers give proper attention and encourage children to participate.",
    photo: null,
  }, // 2
  {
    name: "Mrs. Ayesha Parveen",
    detail: "Parent of UKG student",
    quote:
      "I have noticed improvement in my child's speaking skills and confidence. The learning environment is friendly and supportive.",
    photo: null,
  }, // 3
  {
    name: "Mrs. Lakshmi Devi",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers explain lessons patiently and help children understand their basics. We are satisfied with our child's progress.",
    photo: null,
  }, // 4
  {
    name: "Mr. Mohammed Irfan",
    detail: "Parent of Class 2 student",
    quote:
      "The school gives importance to both education and good manners. We appreciate the teachers' dedication and support.",
    photo: null,
  }, // 5
  {
    name: "Mrs. Sunitha Reddy",
    detail: "Parent of Class 3 student",
    quote:
      "The digital classroom facilities make lessons more interesting. My child is excited to share what they learn at school.",
    photo: null,
  }, // 6
  {
    name: "Mrs. Shabana Taj",
    detail: "Parent of Class 4 student",
    quote:
      "We appreciate the friendly teachers and the school's focus on academic learning. Communication with parents is important to us.",
    photo: null,
  }, // 7
  {
    name: "Mr. Suresh Babu",
    detail: "Parent of Class 5 student",
    quote:
      "The school provides a good environment for children to learn and grow. We are pleased with the attention given to students.",
    photo: null,
  }, // 8
  {
    name: "Mrs. Nilofer Sultana",
    detail: "Parent of Class 6 student",
    quote:
      "My child is becoming more confident in studies and classroom activities. We value the encouragement provided by the teachers.",
    photo: null,
  }, // 9
  {
    name: "Mrs. Padmavathi",
    detail: "Parent of Class 7 student",
    quote:
      "The school encourages discipline, responsibility and regular learning. We are glad to see our child developing good habits.",
    photo: null,
  }, // 10
  {
    name: "Mr. Abdul Rahman",
    detail: "Parent of Class 8 student",
    quote:
      "We appreciate the school's efforts to build strong academic foundations and prepare students for the next stage of education.",
    photo: null,
  }, // 11
  {
    name: "Mrs. Kavitha",
    detail: "Parent of Nursery student",
    quote:
      "The teachers are kind and welcoming. My little one feels comfortable at school, which gives us peace of mind.",
    photo: null,
  }, // 12
  {
    name: "Mr. Sameer Ahmed",
    detail: "Parent of LKG student",
    quote:
      "Our child is learning new words, numbers and everyday skills. We appreciate the patient approach of the teachers.",
    photo: null,
  }, // 13
  {
    name: "Mrs. Anuradha",
    detail: "Parent of UKG student",
    quote:
      "The school helps children develop confidence and communication skills. We are happy with the learning experience.",
    photo: null,
  }, // 14
  {
    name: "Mrs. Rukhsana Begum",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers make learning enjoyable and encourage children to ask questions. It is wonderful to see our child becoming curious.",
    photo: null,
  }, // 15
  {
    name: "Mr. Venkatesh",
    detail: "Parent of Class 2 student",
    quote:
      "We like the focus on basic concepts and regular practice. Our child is gradually becoming more independent with schoolwork.",
    photo: null,
  }, // 16
  {
    name: "Mrs. Saira Banu",
    detail: "Parent of Class 3 student",
    quote:
      "The school provides a supportive atmosphere where children can learn at their own pace. We appreciate the teachers' efforts.",
    photo: null,
  }, // 17
  {
    name: "Mrs. Geetha Kumari",
    detail: "Parent of Class 4 student",
    quote:
      "We are pleased with the school's emphasis on education, discipline and respect. These values are important for every child.",
    photo: null,
  }, // 18
  {
    name: "Mr. Imran Pasha",
    detail: "Parent of Class 5 student",
    quote:
      "The teachers motivate students to work hard and take part in classroom activities. We appreciate their continued guidance.",
    photo: null,
  }, // 19
  {
    name: "Mrs. Swathi",
    detail: "Parent of Class 6 student",
    quote:
      "The school encourages students to improve their knowledge and express their ideas. We value this balanced approach to learning.",
    photo: null,
  }, // 20
  {
    name: "Mrs. Farzana",
    detail: "Parent of Class 7 student",
    quote:
      "We appreciate the school's efforts to develop academic skills, confidence and good character in students.",
    photo: null,
  }, // 21
  {
    name: "Mr. Prakash Rao",
    detail: "Parent of Class 8 student",
    quote:
      "The teachers guide students in their studies and encourage them to take responsibility for their learning. We are grateful for their support.",
    photo: null,
  }, // 22
  {
    name: "Mrs. Haseena",
    detail: "Parent of Nursery student",
    quote:
      "My child looks forward to school activities and enjoys learning through everyday experiences. The caring atmosphere is a big plus.",
    photo: null,
  }, // 23
  {
    name: "Mrs. Renuka",
    detail: "Parent of LKG student",
    quote:
      "We are happy to see our child learning letters, numbers and social skills. The teachers make the early learning experience enjoyable.",
    photo: null,
  }, // 24
  {
    name: "Mr. Yusuf Ali",
    detail: "Parent of UKG student",
    quote:
      "The school helps children prepare for primary classes by building confidence and strengthening their basic skills.",
    photo: null,
  }, // 25
  {
    name: "Mrs. Meena Kumari",
    detail: "Parent of Class 1 student",
    quote:
      "The teachers encourage children to participate and learn with confidence. We appreciate the school's positive atmosphere.",
    photo: null,
  }, // 26
  {
    name: "Mrs. Tasneem",
    detail: "Parent of Class 2 student",
    quote:
      "We are glad our child has a comfortable environment to study, make friends and develop good habits.",
    photo: null,
  }, // 27
  {
    name: "Mr. Srinivas",
    detail: "Parent of Class 3 student",
    quote:
      "The school's focus on clear explanations and regular learning helps children build a strong foundation for the future.",
    photo: null,
  }, // 28
  {
    name: "Mrs. Rubina",
    detail: "Parent of Class 5 student",
    quote:
      "We value the attention given to children's learning and behaviour. The school encourages students to keep improving.",
    photo: null,
  }, // 29
  {
    name: "Mrs. Padmaja",
    detail: "Parent of Class 8 student",
    quote:
      "We appreciate the school's commitment to education and personal development. It is important to us that our child grows in both knowledge and confidence.",
    photo: null,
  }, // 30
];

/**
 * TEACHER VOICES — shown in the "From Our Teachers" section on the /testimonials page.
 *
 * Each item:
 *   name     teacher's name
 *   role     e.g. "Class Teacher – UKG", "Mathematics Teacher"
 *   quote    the teacher's own words about teaching at Waseela
 *   photo    teacher's photo (optional) — import it like the student photos above
 *   placeholder  true = shows a "Sample" tag. Delete this line once you add the real teacher.
 *
 * The four below are SAMPLES so you can see the design — replace them with real teachers
 * (with their permission) before the website goes live. Delete an item to remove its card;
 * if the list is empty the whole section is hidden.
 */
export const teacherTestimonials = [
  {
    name: "Teacher Name",
    role: "Pre-Primary Teacher",
    quote:
      "Add a few words from a Nursery / LKG / UKG teacher about teaching young children at Waseela.",
    photo: null,
    placeholder: true,
  },
  {
    name: "Teacher Name",
    role: "Primary Teacher",
    quote:
      "Add a few words from a Class 1–5 teacher about how they help children learn and grow.",
    photo: null,
    placeholder: true,
  },
  {
    name: "Teacher Name",
    role: "Upper Primary Teacher",
    quote:
      "Add a few words from a Class 6–8 subject teacher about preparing students for high school.",
    photo: null,
    placeholder: true,
  },
  {
    name: "Teacher Name",
    role: "Computer / Activities Teacher",
    quote:
      "Add a few words from a specialist teacher about digital learning, sports or activities.",
    photo: null,
    placeholder: true,
  },
];
