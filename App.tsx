
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Internships from './pages/Internships';
import Verification from './pages/Verification';
import Contact from './pages/Contact';
import QuizRegistration from './pages/QuizRegistration';
import QuizResultPage from './pages/QuizResult';
import Feedback from './pages/Feedback';
import InterviewPrep from './pages/InterviewPrep';
import ResumeScanner from './pages/ResumeScanner';
import ResumeBuilder from './pages/ResumeBuilder';
import ATSScore from './pages/ATSScore';
import EmailGenerator from './pages/EmailGenerator';
import Tutorials from './pages/Tutorials';
import TutorialViewer from './pages/TutorialViewer';
import EnrollmentNotification from './components/EnrollmentNotification';
import CodePlayground from './pages/CodePlayground';
import Practice from './pages/Practice';
import PracticeProblems from './pages/PracticeProblems';
import PracticeSolution from './pages/PracticeSolution';
import ReferAndEarn from './pages/ReferAndEarn';

const App: React.FC = () => {
  // Handle redirect for legacy certificate URL
  useEffect(() => {
    const path = window.location.pathname;
    // Check if the user is accessing the old HTML file path (case-insensitive check)
    if (path.toLowerCase().includes("code-verification.html")) {
       // Redirect to the new Verification route
       window.location.replace("/#/verification");
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/interview-prep/resume-scanner" element={<ResumeScanner />} />
            <Route path="/ats-score" element={<ATSScore />} />
            {/* FIX: Add route for ResumeBuilder component. This component is expected to exist at /resume-builder according to scripts/exportResume.js */}
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/email-generator" element={<EmailGenerator />} />
            <Route path="/code-playground" element={<CodePlayground />} />
            
            {/* Practice Routes */}
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:lang" element={<PracticeProblems />} />
            <Route path="/practice/:lang/:problemId" element={<PracticeSolution />} />

            {/* Tutorial Routes */}
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:categoryId" element={<TutorialViewer />} />
            
            <Route path="/verification" element={<Verification />} />
            <Route path="/quiz/registration" element={<QuizRegistration />} />
            <Route path="/quiz/result" element={<QuizResultPage />} />
            {/* Redirect /quiz to /quiz/registration */}
            <Route path="/quiz" element={<Navigate to="/quiz/registration" replace />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refer" element={<ReferAndEarn />} />
          </Routes>
        </main>
        <Footer />
        <EnrollmentNotification />
      </div>
    </Router>
  );
};

export default App;
