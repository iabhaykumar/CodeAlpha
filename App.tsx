import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Internships from './pages/Internships';
import Verification from './pages/Verification';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import ScrollToTop from './components/ScrollToTop';
import RegistrationPopup from './components/RegistrationPopup';
import WhatsAppButton from './components/WhatsAppButton';
import EnrollmentNotification from './components/EnrollmentNotification';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <EnrollmentNotification />
        <RegistrationPopup />
      </div>
    </Router>
  );
};

export default App;
