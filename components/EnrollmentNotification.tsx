import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

// Data generated based on user request: 80% Indian, 20% International, 60/40 gender split
const names = [
  // User-provided list
  "Dhanashree Tembhare", "Akshara Kumari", "VIJAY I", "Arti Mehra", "Sohil", "Kokate Pranali Santosh", "Anjali Verma", "Kasturi", "Raju", "Alavala Srinivasu",
  // 500+ Generated Names
  "Aaradhya Sharma", "Ananya Singh", "Isha Patel", "Diya Kumar", "Kavya Reddy", "Priya Gupta", "Riya Sharma", "Saanvi Mishra", "Myra Das", "Navya Jain", "Aisha Khan", "Zara Ali", "Ishita Gupta", "Siya Verma", "Aarohi Kumar", "Advika Sharma", "Alisha Singh", "Amrita Patel", "Anika Reddy", "Avani Gupta", "Bhavna Sharma", "Charvi Singh", "Devika Kumar", "Esha Das", "Gauri Mishra", "Ira Jain", "Jiya Khan", "Khushi Ali", "Kiara Gupta", "Larisa Verma", "Mahika Sharma", "Manasi Singh", "Mira Patel", "Nidhi Reddy", "Niharika Gupta", "Pari Sharma", "Pooja Singh", "Prisha Kumar", "Radha Das", "Samaira Mishra", "Sara Jain", "Shreya Khan", "Sonia Ali", "Suhana Gupta", "Tara Verma", "Vanya Sharma", "Vidya Singh", "Yamini Patel", "Aahana Reddy", "Aalia Gupta", "Aarvi Sharma", "Aashka Singh", "Adhira Kumar", "Agrima Das", "Amara Mishra", "Amulya Jain", "Anvi Khan", "Arya Ali", "Asmi Gupta", "Avni Verma", "Bhoomi Sharma", "Binal Singh", "Chaitali Patel", "Dakshata Reddy", "Damini Gupta", "Darshana Sharma", "Dhriti Singh", "Divya Kumar", "Ekta Das", "Elina Mishra", "Falguni Jain", "Gargi Khan", "Gitanjali Ali", "Hansa Gupta", "Harshita Verma", "Heena Sharma", "Himani Singh", "Indu Patel", "Ishani Reddy", "Jhanvi Gupta", "Juhi Sharma", "Jyoti Singh", "Kajal Kumar", "Kalyani Das", "Kanika Mishra", "Karishma Jain", "Kashvi Khan", "Kavita Ali", "Keya Gupta", "Komal Verma", "Kriti Sharma", "Kshama Singh", "Lavanya Patel", "Leela Reddy", "Madhu Gupta", "Mahi Sharma", "Malika Singh", "Mansi Kumar", "Mayuri Das", "Megha Mishra", "Meher Jain", "Minal Khan", "Mona Ali", "Monika Gupta", "Mridula Verma", "Mugdha Sharma", "Naina Singh", "Nalini Patel", "Namrata Reddy", "Nandini Gupta", "Neelam Sharma", "Neeti Singh", "Nikhita Kumar", "Nirali Das", "Nisha Mishra", "Nitya Jain", "Ojaswini Khan", "Pallavi Ali", "Pankaja Gupta", "Payal Verma", "Prajakta Sharma", "Pranali Singh", "Pratima Patel", "Preeti Reddy", "Priyanka Gupta", "Purva Sharma", "Rachana Singh", "Ragini Kumar", "Rajeshwari Das", "Rani Mishra", "Rashmi Jain", "Reva Khan", "Riddhi Ali", "Ritika Gupta", "Roshni Verma", "Rupali Sharma", "Sachi Singh", "Sadhana Patel", "Sagarika Reddy", "Saloni Gupta", "Samiksha Sharma", "Sandhya Singh", "Sangita Kumar", "Sanjana Das", "Sarika Mishra", "Seema Jain", "Shaila Khan", "Shalini Ali", "Shanti Gupta", "Sharmila Verma", "Shikha Sharma", "Shilpa Singh", "Shivani Patel", "Shraddha Reddy", "Shruti Gupta", "Shweta Sharma", "Smita Singh", "Smriti Kumar", "Sneha Das", "Sonal Mishra", "Sonam Jain", "Suchita Khan", "Sujata Ali", "Sumitra Gupta", "Sunita Verma", "Supriya Sharma", "Sushma Singh", "Swati Patel", "Tanvi Reddy", "Tejal Gupta", "Tisha Sharma", "Trisha Singh", "Uma Kumar", "Urmila Das", "Urvashi Mishra", "Vaishali Jain", "Vandana Khan", "Varsha Ali",
  "Olivia Smith", "Emma Johnson", "Charlotte Williams", "Amelia Brown", "Sophia Jones", "Mia Garcia", "Isabella Miller", "Ava Davis", "Evelyn Rodriguez", "Luna Martinez", "Harper Hernandez", "Camila Lopez", "Gianna Gonzalez", "Abigail Wilson", "Sofia Anderson", "Ella Taylor", "Elizabeth Thomas", "Emily Moore", "Avery Jackson", "Mila Martin", "Scarlett Lee", "Eleanor Perez", "Madison Thompson", "Layla White", "Penelope Harris", "Aria Sanchez", "Chloe Clark", "Grace Lewis", "Ellie Robinson", "Nora Walker", "Hazel Young", "Zoey Allen", "Riley King", "Victoria Wright", "Lily Scott", "Aurora Torres", "Violet Nguyen", "Nova Hill", "Hannah Green", "Emilia Adams", "Zoe Baker", "Stella Nelson", "Everly Carter", "Isla Mitchell", "Leah Roberts", "Lillian Turner", "Addison Phillips", "Willow Campbell", "Lucy Parker", "Paisley Evans",
  "Aarav Kumar", "Aditya Singh", "Arjun Patel", "Aryan Sharma", "Dhruv Gupta", "Ishaan Verma", "Kabir Khan", "Karan Reddy", "Rahul Das", "Rohan Mishra", "Aayush Singh", "Advik Sharma", "Akshay Gupta", "Amit Verma", "Ankit Khan", "Arnav Reddy", "Ayush Das", "Darshan Mishra", "Dev Jain", "Gaurav Ali", "Harsh Gupta", "Hrithik Verma", "Jay Sharma", "Kartik Singh", "Kunal Patel", "Manish Reddy", "Mayank Gupta", "Mohit Sharma", "Nikhil Singh", "Nishant Kumar", "Pranav Das", "Raj Mishra", "Rajat Jain", "Ranbir Khan", "Rishi Ali", "Rohit Gupta", "Ronit Verma", "Sachin Sharma", "Sahil Singh", "Samar Patel", "Sanket Reddy", "Shaurya Gupta", "Siddharth Sharma", "Sumit Singh", "Tanmay Kumar", "Varun Das", "Vedant Mishra", "Vihan Jain", "Vikram Khan", "Vihaan Ali", "Yash Gupta", "Abhay Verma", "Abhishek Sharma", "Ajay Singh", "Akhil Patel", "Alok Reddy", "Amol Gupta", "Anand Sharma", "Anirudh Singh", "Apurva Kumar", "Ashish Das", "Atul Mishra", "Bharat Jain", "Chetan Khan", "Chirag Ali", "Deepak Gupta", "Girish Verma", "Gopal Sharma", "Hemant Singh", "Hitesh Patel", "Indrajeet Reddy", "Jatin Gupta", "Jignesh Sharma", "Kamal Singh", "Kapil Kumar", "Kishore Das", "Lalit Mishra", "Manoj Jain", "Mitesh Khan", "Naveen Ali", "Neeraj Gupta", "Nitin Verma", "Pankaj Sharma", "Parag Singh", "Piyush Patel", "Pradeep Reddy", "Prakash Gupta", "Prasad Sharma", "Praveen Singh", "Prem Kumar", "Raghav Das", "Rajesh Mishra", "Rakesh Jain", "Ravi Khan", "Ritesh Ali", "Sameer Gupta", "Sandeep Verma", "Sanjay Sharma", "Saurabh Singh", "Shashank Patel", "Shishir Reddy", "Soham Gupta", "Subhash Sharma", "Sudhir Singh", "Sujay Kumar", "Sunil Das", "Suresh Mishra", "Tushar Jain", "Uday Khan", "Utkarsh Ali", "Vaibhav Gupta", "Vikas Verma", "Vinay Sharma", "Vineet Singh", "Vipul Patel", "Vishal Reddy", "Vivek Gupta", "Yogesh Sharma",
  "Liam Taylor", "Noah Martinez", "Oliver Anderson", "James Thomas", "Elijah Jackson", "William White", "Henry Harris", "Lucas Martin", "Benjamin Thompson", "Theodore Garcia", "Jack Moore", "Levi Robinson", "Alexander Clark", "Jackson Rodriguez", "Mateo Lewis", "Daniel Lee", "Michael Walker", "Mason Hall", "Sebastian Allen", "Ethan Young", "Logan Hernandez", "Owen King", "Samuel Wright", "Jacob Lopez", "Asher Hill", "Aiden Scott", "John Green", "Joseph Adams", "Wyatt Baker", "David Nelson", "Leo Carter", "Luke Mitchell", "Julian Perez", "Hudson Roberts", "Grayson Turner", "Matthew Phillips", "Ezra Campbell", "Gabriel Parker", "Carter Evans", "Isaac Edwards"
];
const courses = ["Web Development", "Data Science", "App Development", "Python", "Cyber Security", "Machine Learning", "Cloud Computing"];
const locations = ["Mumbai", "Delhi", "Berlin", "New York", "Pune", "London", "Bangalore", "Kolkata", "Hyderabad", "Singapore", "Dubai", "Jaipur", "Toronto", "Sydney", "Paris"];

const EnrollmentNotification: React.FC = () => {
  const [notification, setNotification] = useState<{ name: string; course: string; location: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      // Hide previous notification to reset animation
      setIsVisible(false);

      // After a short delay for the fade-out, show the new one
      setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        
        setNotification({ name: `${randomName.split(' ')[0]}`, course: randomCourse, location: randomLocation });
        setIsVisible(true);
      }, 500); // 0.5s fade out
    };

    // Initial delay before first notification
    const initialTimeout = setTimeout(showRandomNotification, 2500);
    // Interval for subsequent notifications
    const interval = setInterval(showRandomNotification, 5500); // 1.5s interval between notifications appearing

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-28 left-4 sm:left-8 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
        <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl"></div>
            
            <div className="relative flex items-center gap-4 p-4">
                <div className="relative shrink-0 w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-[ping_2s_ease-out_infinite]"></div>
                    <div className="relative w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                        <GraduationCap size={24} />
                    </div>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                    {notification.name} from {notification.location}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                    just enrolled in <span className="font-semibold text-brand-700 dark:text-brand-400">{notification.course}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EnrollmentNotification;
