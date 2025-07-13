import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-50 z-50">
    <h3 className="text-4xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
      Care<span className="text-gray-500">Genix</span>
    </h3>
  </div>
);

function AppContent() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading on route change
    setIsLoading(true);
    setProgress(30); // Start loading bar

    // Simulate loading completion after a short delay
    const timer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
      window.scrollTo(0, 0); // Scroll to top on route change
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [location.pathname]); // Trigger on pathname change

  return (
    <>
      <LoadingBar
        color="#4B5563"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      {isLoading && <Loading />}
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
      <AppContent />
    </Router>
  );
}

export default App;