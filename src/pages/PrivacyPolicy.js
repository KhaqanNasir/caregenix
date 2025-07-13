import React from 'react';
import { FiShield, FiLock, FiEye, FiMail, FiPhone, FiDatabase, FiUsers, FiCheckCircle, FiAlertTriangle, FiSettings, FiGlobe, FiHeart, FiCpu } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        
        {/* Floating Security Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <FiLock className="text-4xl text-white" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-bounce" style={{animationDelay: '1s'}}>
          <FiShield className="text-5xl text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 animate-pulse" style={{animationDelay: '2s'}}>
          <FiDatabase className="text-3xl text-white" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <FiShield className="mr-2" />
              HIPAA Compliant • SOC 2 Certified • End-to-End Encrypted
            </div>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <FiShield className="text-4xl sm:text-5xl text-white" />
                </div>
                <div className="absolute inset-0 w-20 sm:w-24 h-20 sm:h-24 border-2 border-white/30 rounded-2xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
              Your privacy and the security of your personal health information 
              are fundamental to our AI-powered healthcare platform at CareGenix.
            </p>
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              <FiCheckCircle className="mr-2" />
              Last updated: January 15, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100">
            
            {/* Introduction */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiLock className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Introduction</h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  CareGenix ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                  the security of your personal health information. As a cutting-edge AI-powered healthcare 
                  platform that deploys 5 autonomous AI agents for comprehensive patient care management, 
                  we understand the critical importance of maintaining the highest standards of data protection.
                </p>
                <p className="text-base sm:text-lg">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you interact with our AI agents, visit our website, use our healthcare services, 
                  or engage with our healthcare professionals through our platform.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-start">
                    <FiCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Compliance Standards</h4>
                      <p className="text-blue-800 text-sm sm:text-base">
                        We comply with HIPAA, GDPR, SOC 2 Type II, and all applicable healthcare privacy regulations. 
                        Our AI agents are designed with privacy-by-design principles and operate under strict data governance protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiDatabase className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Information We Collect</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FiUsers className="text-2xl text-blue-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Personal Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Name, address, phone number, and email address</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Date of birth and government-issued identification numbers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Insurance information and payment details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Emergency contact information and family medical history</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FiHeart className="text-2xl text-red-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Health Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Medical history, diagnoses, and treatment records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Laboratory results and medical test outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Prescription and medication information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">AI agent interactions and health recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FiCpu className="text-2xl text-purple-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">AI Platform Data</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">AI agent conversation logs and analysis results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Diagnostic predictions and treatment recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Platform usage patterns and interaction metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Voice recordings and natural language processing data</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FiGlobe className="text-2xl text-orange-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Technical Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">IP address, browser type, and device information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Website usage patterns and navigation data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">Cookies and similar tracking technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">API usage logs and system performance metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiSettings className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>How Our AI Agents Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Patient Care & Treatment",
                    icon: <FiHeart className="text-xl sm:text-2xl" />,
                    color: "from-red-500 to-red-600",
                    items: [
                      "Providing AI-powered medical care and treatment recommendations",
                      "Automated intelligent triage and priority assessment",
                      "Personalized treatment plan generation and monitoring",
                      "Real-time health status analysis and alerts"
                    ]
                  },
                  {
                    title: "AI Agent Operations",
                    icon: <FiCpu className="text-xl sm:text-2xl" />,
                    color: "from-blue-500 to-blue-600",
                    items: [
                      "Training and improving our 5 AI agent algorithms",
                      "Natural language processing for patient communication",
                      "Diagnostic assistance and pattern recognition",
                      "Automated workflow optimization and efficiency"
                    ]
                  },
                  {
                    title: "Administrative Functions",
                    icon: <FiDatabase className="text-xl sm:text-2xl" />,
                    color: "from-green-500 to-green-600",
                    items: [
                      "Processing payments and insurance claims automatically",
                      "Scheduling appointments and sending AI-generated reminders",
                      "FHIR-compliant medical records organization",
                      "Compliance monitoring and audit trail maintenance"
                    ]
                  },
                  {
                    title: "Platform Enhancement",
                    icon: <FiSettings className="text-xl sm:text-2xl" />,
                    color: "from-orange-500 to-orange-600",
                    items: [
                      "Improving AI agent accuracy and response quality",
                      "Conducting healthcare analytics and population health studies",
                      "Enhancing user experience and platform functionality",
                      "Developing new AI-powered healthcare innovations"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg mr-4`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-black">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 Assalam Alaikum rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiUsers className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Information Sharing and Disclosure</h2>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                <div className="flex items-start">
                  <FiAlertTriangle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Zero-Sale Policy</h4>
                    <p className="text-red-800 text-sm sm:text-base">
                      We never sell, trade, or rent your personal health information to third parties. 
                      Your data is used exclusively for your healthcare and platform improvement purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">We may share your information only in these circumstances:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    "With your explicit written consent and authorization",
                    "With healthcare providers directly involved in your care coordination",
                    "For payment processing and insurance claim management",
                    "As required by law, legal process, or regulatory compliance",
                    "In medical emergencies to protect your immediate health and safety",
                    "With our AI platform partners under strict data processing agreements"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiShield className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Advanced Data Security</h2>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                  Our AI-powered healthcare platform implements military-grade security measures to protect 
                  your personal health information across all 5 AI agents and system components:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-4">
                    <FiLock className="text-2xl text-blue-600 mr-3" />
                    <h3 className="font-bold text-blue-900">Technical Safeguards</h3>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-blue-800">
                    <li>• AES-256 end-to-end encryption</li>
                    <li>• TLS 1.3 secure data transmission</li>
                    <li>• Multi-factor authentication (MFA)</li>
                    <li>• AI model security validation</li>
                    <li>• Real-time threat detection</li>
                    <li>• Automated security patching</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border border-green-200">
                  <div className="flex items-center mb-4">
                    <FiUsers className="text-2xl text-green-600 mr-3" />
                    <h3 className="font-bold text-green-900">Administrative Safeguards</h3>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-green-800">
                    <li>• Comprehensive staff training programs</li>
                    <li>• Role-based access controls</li>
                    <li>• Regular policy updates and audits</li>
                    <li>• Incident response procedures</li>
                    <li>• Background checks for all personnel</li>
                    <li>• HIPAA compliance training</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl border border-purple-200">
                  <div className="flex items-center mb-4">
                    <FiCpu className="text-2xl text-purple-600 mr-3" />
                    <h3 className="font-bold text-purple-900">AI Security Measures</h3>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-purple-800">
                    <li>• Federated learning for data privacy</li>
                    <li>• Differential privacy algorithms</li>
                    <li>• AI model access controls</li>
                    <li>• Secure multi-party computation</li>
                    <li>• Regular AI bias auditing</li>
                    <li>• Anonymization and pseudonymization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiEye className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Your Privacy Rights</h2>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <h3 className="font-bold text-indigo-900 mb-4">Enhanced Rights in Our AI Platform</h3>
                <p className="text-indigo-800 text-sm sm:text-base leading-relaxed">
                  As a user of our AI-powered healthcare platform, you have enhanced rights and control 
                  over how our AI agents process and use your health information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Access & Portability",
                    items: [
                      "Access and download all your health records and AI interactions",
                      "Export data in FHIR-compliant formats",
                      "View AI agent decision-making logs and rationale",
                      "Request detailed explanation of AI recommendations"
                    ]
                  },
                  {
                    title: "Control & Correction",
                    items: [
                      "Request amendments to your health information",
                      "Correct inaccuracies in AI-generated insights",
                      "Opt-out of specific AI agent features",
                      "Control data sharing preferences for each AI agent"
                    ]
                  },
                  {
                    title: "Privacy Management",
                    items: [
                      "Request restrictions on AI data processing",
                      "Receive breach notifications within 72 hours",
                      "Access to AI transparency reports",
                      "Control marketing and research participation"
                    ]
                  },
                  {
                    title: "Deletion & Complaints",
                    items: [
                      "Request deletion of data (right to be forgotten)",
                      "File complaints about AI privacy practices",
                      "Appeal AI-generated decisions that affect your care",
                      "Request human review of AI recommendations"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-2xl">
                    <h4 className="font-bold text-black mb-4 text-base sm:text-lg">{category.title}</h4>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact Our Privacy Team</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
                  Our dedicated privacy team is available 24/7 to address your concerns and help you 
                  exercise your rights. We respond to all privacy inquiries within 24 hours.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <FiMail className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Email Support</h4>
                  <p className="text-gray-600 text-sm mb-2">24/7 Privacy Support</p>
                  <a href="mailto:privacy@caregenix.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    privacy@caregenix.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <FiPhone className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Phone Support</h4>
                  <p className="text-gray-600 text-sm mb-2">Immediate Assistance</p>
                  <a href="tel:+15551234567" className="text-green-600 hover:text-green-800 font-medium">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div className="text-center md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <FiMail className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Mailing Address</h4>
                  <p className="text-gray-600 text-sm mb-2">Physical Correspondence</p>
                  <div className="text-gray-700 text-sm">
                    <div>CareGenix Privacy Officer</div>
                    <div>123 Healthcare Innovation Blvd</div>
                    <div>AI Medical District, Tech City 12345</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">Quick Response Guarantee</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-blue-800">&lt; 1 Hour</div>
                      <div className="text-blue-700">Urgent Privacy Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-800">&lt; 24 Hours</div>
                      <div className="text-blue-700">General Inquiries</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-800">&lt; 30 Days</div>
                      <div className="text-blue-700">Data Requests</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start">
                  <FiAlertTriangle className="text-amber-600 mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3">Policy Updates & AI Evolution</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                      As our AI agents evolve and new healthcare technologies emerge, we may update this Privacy Policy. 
                      We will notify you of any material changes through multiple channels and give you time to review 
                      before implementing changes that affect your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">30-day advance notice for major changes</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Email, app, and website notifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;