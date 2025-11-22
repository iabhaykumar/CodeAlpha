
import { Internship, NavItem, FeedbackItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Internships', path: '/internships' },
  { label: 'Verification', path: '/verification' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Contact', path: '/contact' },
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
    students: "3.1K",
    duration: "4 Weeks",
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78"
  },

  // --- Business & Marketing ---
  { 
    id: 'bus-1', 
    name: "Digital Marketing", 
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=300&q=40", 
    badge: "Business", 
    category: "business", 
    students: "9.8K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'bus-2', 
    name: "Business Strategy", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=40", 
    badge: "Business", 
    category: "business", 
    students: "6.5K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'bus-3', 
    name: "Finance & Investment", 
    img: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=300&q=40", 
    badge: "Business", 
    category: "business", 
    students: "7.3K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'bus-4', 
    name: "Human Resources", 
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=40", 
    badge: "Business", 
    category: "business", 
    students: "4.9K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'bus-5', 
    name: "Stock Market Trading", 
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=300&q=40", 
    badge: "Business", 
    category: "business", 
    students: "5.8K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'bus-6', 
    name: "Content Writing", 
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=300&q=40", 
    badge: "Creative", 
    category: "business", 
    students: "8.2K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },

  // --- Design ---
  { 
    id: 'des-1', 
    name: "UI/UX Design", 
    img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=300&q=40", 
    badge: "Design", 
    category: "design", 
    students: "13.5K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'des-2', 
    name: "Graphics Design", 
    img: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=300&q=40", 
    badge: "Design", 
    category: "design", 
    students: "9.1K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },

  // --- Engineering ---
  { 
    id: 'eng-1', 
    name: "Robotics & Automation", 
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=40", 
    badge: "Engineering", 
    category: "engineering", 
    students: "4.2K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'eng-2', 
    name: "AutoCAD", 
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=40", 
    badge: "Engineering", 
    category: "engineering", 
    students: "5.6K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'eng-3', 
    name: "Civil Engineering", 
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=40", 
    badge: "Engineering", 
    category: "engineering", 
    students: "3.9K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'eng-4', 
    name: "Biotechnology", 
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=40", 
    badge: "Science", 
    category: "engineering", 
    students: "2.8K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'eng-5', 
    name: "Mechanical Design", 
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=300&q=40", 
    badge: "Engineering", 
    category: "engineering", 
    students: "4.5K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'eng-6', 
    name: "Pharma Research", 
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&q=40", 
    badge: "Science", 
    category: "engineering", 
    students: "2.2K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },

  // --- Miscellaneous & Emerging Tech ---
  { 
    id: 'misc-1', 
    name: "Cyber Security", 
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=300&q=40", 
    badge: "Security", 
    category: "misc", 
    students: "8.9K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'misc-2', 
    name: "Cloud Computing", 
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=40", 
    badge: "Technology", 
    category: "misc", 
    students: "7.8K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'misc-3', 
    name: "Power BI", 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=40", 
    badge: "Data", 
    category: "misc", 
    students: "6.2K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'misc-4', 
    name: "Blockchain", 
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&q=40", 
    badge: "Crypto", 
    category: "misc", 
    students: "4.1K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  },
  { 
    id: 'misc-5', 
    name: "Internet of Things", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=40", 
    badge: "IoT", 
    category: "misc", 
    students: "5.5K", 
    duration: "4 Weeks", 
    link: "https://forms.gle/s9TW7Tqi3tAQLCu78" 
  }
];

// Set of valid verification codes for the demo
export const VALID_CODES = new Set([
    "A/FE3/10122",
    "A/JA1/3653",
    "CA/SE1/23569",
    "CA/AU3/4018",
    "CA/AU3/3611",
    "CA/SE1/18411",
    "CA/SE1/20779",
]);

// Mock Quiz Results for testing
export const MOCK_QUIZ_RESULTS = {
  "QZ-2024-001": { name: "Rahul Sharma", score: 92, rank: 5, domain: "Web Development" },
  "QZ-2024-002": { name: "Priya Singh", score: 88, rank: 12, domain: "Python Programming" },
  "QZ-2024-003": { name: "Amit Patel", score: 75, rank: 45, domain: "Data Science" },
  "QZ-2024-004": { name: "Sneha Gupta", score: 98, rank: 1, domain: "Cyber Security" },
};

export const TESTIMONIALS: FeedbackItem[] = [
  {
    id: 'fb-1',
    name: 'Aarav Singh',
    role: 'Web Dev Intern',
    rating: 5,
    content: 'The internship was incredibly structured. I learned more in 4 weeks than I did in a whole semester at college.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 'fb-2',
    name: 'Meera Iyer',
    role: 'Data Science Intern',
    rating: 5,
    content: 'Real-world projects were the highlight. The mentors were supportive and the community is amazing.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 'fb-3',
    name: 'Rohan Das',
    role: 'App Dev Intern',
    rating: 4,
    content: 'Great experience overall. The tasks were challenging but rewarding. Would definitely recommend to juniors.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
  }
];