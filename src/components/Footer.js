import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Add custom fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
      
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Care<span className="text-gray-500">Genix</span>
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Revolutionizing patient care management through autonomous AI agents. 
                Built for the GenAI.Works Agentic Hackathon with a vision for global healthcare transformation.
              </p>
            </div>
            
            {/* Links Section */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center sm:text-left lg:text-left">
                <div>
                  <h4 className="font-bold text-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Project</h4>
                  <div className="space-y-3">
                    <a href="/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Documentation</a>
                    <a href="/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>GitHub Repository</a>
                    <a href="/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Live Demo</a>
                    <a href="/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>API Reference</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Hackathon</h4>
                  <div className="space-y-3">
                    <a href="https://genai.works/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>GenAI.Works</a>
                    <a href="/" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Submission Details</a>
                    <Link to="/team" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Team Information</Link>
                    <a href="https://genai.works/hackathon#judges" className="block text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Judges</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Legal</h4>
                  <div className="space-y-3">
                    <Link
                      to="/privacy-policy"
                      className="block text-gray-600 hover:text-black transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms-of-use"
                      className="block text-gray-600 hover:text-black transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Terms of Use
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Built with ❤️ for the GenAI.Works Agentic Hackathon
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
              #LeadWithAIAgents • July 11-14, 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;