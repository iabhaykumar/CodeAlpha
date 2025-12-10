
import { Internship, NavItem, FeedbackItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Internships', 
    path: '/internships',
    children: [
      { label: 'Apply Now', path: '/internships' },
      { label: 'Verify Certificate', path: '/verification' }
    ]
  },
  { 
    label: 'Career Tools', 
    path: '#',
    children: [
      { label: 'Check ATS Score', path: '/ats-score' },
      { label: 'Job Email Builder', path: '/email-generator' },
      { label: 'Resume Builder', path: '/resume-builder' },
      { label: 'Interview Preparation', path: '/interview-prep' }
    ]
  },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'Practice', path: '/practice' },
  { label: 'Compiler', path: '/code-playground' },
  {
    label: 'Quiz',
    path: '#',
    children: [
        { label: 'Registration', path: '/quiz/registration' },
        { label: 'Check Result', path: '/quiz/result' }
    ]
  },
  { 
    label: 'More', 
    path: '#',
    children: [
        { label: 'Refer & Earn', path: '/refer' },
        { label: 'Student Reviews', path: '/feedback' },
        { label: 'Contact Support', path: '/contact' }
    ]
  },
];

export const INTERNSHIPS: Internship[] = [
  // --- Programming & Development ---
  {
    id: 'dev-1',
    name: "Frontend Development",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "15.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-2',
    name: "Backend Development",
    img: "https://images.unsplash.com/photo-1629904853716-6b0364c1a275?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "12.8K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-3',
    name: "Full Stack Development",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "83.0K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-4',
    name: "App Development",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "41.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-5',
    name: "Python Programming",
    img: "https://images.unsplash.com/photo-1526379095098-d4089034d4e1?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "10.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-6',
    name: "Java Programming",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "48.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-7',
    name: "C++ Programming",
    img: "https://images.unsplash.com/photo-1542831280-a56452d6a9d8?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "9.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-8',
    name: "C Programming",
    img: "https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "8.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'dev-9',
    name: "DevOps",
    img: "https://images.unsplash.com/photo-1667372393119-c85c02068167?auto=format&fit=crop&w=300&q=40",
    badge: "Development",
    category: "development",
    students: "5.3K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },

  // --- AI & Data Science ---
  {
    id: 'ai-1',
    name: "Artificial Intelligence",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300&q=40",
    badge: "AI & Data",
    category: "ai",
    students: "22.1K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'ai-2',
    name: "Machine Learning",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=300&q=40",
    badge: "AI & Data",
    category: "ai",
    students: "18.4K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'ai-3',
    name: "Data Science",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=40",
    badge: "AI & Data",
    category: "ai",
    students: "14.6K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'ai-4',
    name: "Data Analytics",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=40",
    badge: "AI & Data",
    category: "ai",
    students: "11.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'ai-5',
    name: "Bioinformatics",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=300&q=40",
    badge: "AI & Science",
    category: "ai",
    students: "2.1K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },

  // --- Design & Creative ---
  {
    id: 'design-1',
    name: "Graphic Design",
    img: "https://images.unsplash.com/photo-1626785774573-4b7993125651?auto=format&fit=crop&w=300&q=40",
    badge: "Design",
    category: "design",
    students: "19.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'design-2',
    name: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&w=300&q=40",
    badge: "Design",
    category: "design",
    students: "15.8K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'design-3',
    name: "Video Editing",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=300&q=40",
    badge: "Design",
    category: "design",
    students: "8.7K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'design-4',
    name: "WordPress Development",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=40",
    badge: "Design",
    category: "design",
    students: "9.1K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },

  // --- Business & Management ---
  {
    id: 'bus-1',
    name: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=300&q=40",
    badge: "Business",
    category: "business",
    students: "16.3K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'bus-2',
    name: "Content Writing",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=300&q=40",
    badge: "Business",
    category: "business",
    students: "11.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'bus-3',
    name: "Social Media Marketing",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=40",
    badge: "Business",
    category: "business",
    students: "13.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'bus-4',
    name: "Human Resource (HR)",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=40",
    badge: "Business",
    category: "business",
    students: "7.8K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },

  // --- Engineering & Core ---
  {
    id: 'eng-1',
    name: "Cyber Security",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "19.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'eng-2',
    name: "Cloud Computing",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "14.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'eng-3',
    name: "IoT & Robotics",
    img: "https://images.unsplash.com/photo-1535378437323-95558a725c13?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "6.4K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'eng-4',
    name: "AutoCAD",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "5.9K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'eng-5',
    name: "VLSI Design",
    img: "https://images.unsplash.com/photo-1555664424-778a6902201b?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "3.2K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },
  {
    id: 'eng-6',
    name: "MATLAB",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=40",
    badge: "Engineering",
    category: "engineering",
    students: "4.5K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  }
];

export const VALID_CODES = new Set([
    'CA/2023/1001', 'CA/2023/1002', 'CA/2023/1003', 
    'CA/SE1/23569', 'CA/WB2/98765', 'CA/AD3/11223'
]);

export const TESTIMONIALS: FeedbackItem[] = [
    {
      id: '1',
      name: "Rahul Sharma",
      role: "Web Development Intern",
      rating: 5,
      content: "The internship was well-structured and the tasks were challenging enough to help me learn new concepts. Highly recommended!",
      avatar: "R"
    },
    {
      id: '2',
      name: "Priya Singh",
      role: "App Development Intern",
      rating: 5,
      content: "I built my first Android app during this internship. The mentorship and community support were amazing.",
      avatar: "P"
    },
    {
      id: '3',
      name: "Amit Patel",
      role: "Data Science Intern",
      rating: 4,
      content: "Great exposure to real-world datasets. The tasks helped me build a strong portfolio.",
      avatar: "A"
    },
    {
      id: '4',
      name: "Sneha Gupta",
      role: "UI/UX Design Intern",
      rating: 5,
      content: "Loved the design challenges! It really pushed my creativity. The certificate is a great addition to my CV.",
      avatar: "S"
    },
    {
        id: '5',
        name: "Vikram Malhotra",
        role: "Cyber Security Intern",
        rating: 5,
        content: "The practical tasks on network security were very insightful. Best free internship for beginners.",
        avatar: "V"
    }
];

export const MOCK_QUIZ_RESULTS = {
  'QZ-2024-001': { name: 'Rahul S.', score: 95, rank: 12, domain: 'Web Development' },
  'QZ-2024-002': { name: 'Anjali K.', score: 88, rank: 45, domain: 'Data Science' },
  'QZ-2024-003': { name: 'Rohit M.', score: 92, rank: 23, domain: 'App Development' },
  'QZ-2024-004': { name: 'Sneha P.', score: 75, rank: 156, domain: 'Python Programming' },
};
