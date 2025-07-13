import React from 'react';
import { FiFileText, FiAlertTriangle, FiCheck, FiMail, FiPhone, FiShield, FiCpu, FiUsers, FiBook, FiClock, FiSettings, FiHeart, FiGlobe, FiLock, FiCheckCircle } from 'react-icons/fi';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        
        {/* Floating Legal Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <FiBook className="text-4xl text-white" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-bounce" style={{animationDelay: '1s'}}>
          <FiBook className="text-5xl text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 animate-pulse" style={{animationDelay: '2s'}}>
          <FiFileText className="text-3xl text-white" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <FiBook className="mr-2" />
              Legally Binding Agreement • AI Healthcare Platform
            </div>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <FiFileText className="text-4xl sm:text-5xl text-white" />
                </div>
                <div className="absolute inset-0 w-20 sm:w-24 h-20 sm:h-24 border-2 border-white/20 rounded-2xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Terms of Use
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
              Please read these terms carefully before using our AI-powered healthcare platform. 
              By accessing CareGenix services, you agree to these legally binding terms.
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
            
            {/* Acceptance of Terms */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiCheck className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  By accessing and using the CareGenix AI-powered healthcare platform and related services 
                  ("Services"), including our 5 autonomous AI agents for comprehensive patient care management, 
                  you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
                <p className="text-base sm:text-lg">
                  These Terms of Use constitute a legally binding agreement between you and CareGenix 
                  regarding your use of our website, mobile applications, AI agents, and all healthcare services. 
                  If you do not agree to abide by these terms, please do not use our services.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-start">
                    <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">AI Platform Agreement</h4>
                      <p className="text-green-800 text-sm sm:text-base">
                        By using our AI agents, you acknowledge that you understand the capabilities and limitations 
                        of artificial intelligence in healthcare and agree to use these services as intended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use of AI Services */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiCpu className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Use of Our AI Healthcare Services</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-green-50 p-6 sm:p-8 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <FiCheckCircle className="text-2xl text-green-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-green-900">Permitted Use</h3>
                  </div>
                  <ul className="space-y-3 text-green-800">
                    {[
                      "Use our AI agents for legitimate healthcare purposes only",
                      "Provide accurate and complete medical information when requested",
                      "Keep your account credentials secure and confidential",
                      "Comply with all applicable healthcare laws and regulations",
                      "Use AI recommendations as supplementary to professional medical advice",
                      "Respect the intellectual property of our AI algorithms and platform"
                    ].map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-6 sm:p-8 rounded-2xl border-2 border-red-200">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <FiAlertTriangle className="text-2xl text-red-600 mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-red-900">Prohibited Activities</h3>
                  </div>
                  <ul className="space-y-3 text-red-800">
                    {[
                      "Attempting to manipulate or hack our AI systems",
                      "Using our services for fraudulent or illegal purposes",
                      "Sharing false or misleading health information with AI agents",
                      "Interfering with the proper functioning of our AI services",
                      "Attempting to reverse-engineer our AI algorithms",
                      "Using our platform to provide medical advice to others without proper licensing"
                    ].map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiAlertTriangle className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Important Medical Disclaimer</h2>
              </div>
              
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <FiHeart className="text-amber-600 mr-4 mt-1 flex-shrink-0 text-2xl" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-3 text-lg sm:text-xl">Critical Healthcare Information</h3>
                    <p className="text-amber-800 leading-relaxed text-sm sm:text-base mb-4">
                      Our AI agents are designed to assist and support healthcare delivery, but they do NOT replace 
                      professional medical judgment. The information provided through our 5 AI agents is for 
                      informational and support purposes only and is not intended to replace professional medical 
                      advice, diagnosis, or treatment.
                    </p>
                    <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                      <p className="text-amber-900 font-semibold text-sm">
                        🚨 ALWAYS seek the advice of your physician or other qualified health provider with 
                        any questions you may have regarding a medical condition or treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Emergency Situations",
                    icon: <FiAlertTriangle className="text-xl text-red-600" />,
                    items: [
                      "In case of medical emergencies, call 911 immediately",
                      "Do not rely on AI agents for emergency medical decisions",
                      "Our platform is not designed for acute crisis intervention",
                      "Seek immediate professional help for life-threatening conditions"
                    ]
                  },
                  {
                    title: "AI Limitations",
                    icon: <FiCpu className="text-xl text-blue-600" />,
                    items: [
                      "AI agents supplement but do not replace traditional healthcare",
                      "AI recommendations are based on available data and algorithms",
                      "Never disregard professional medical advice due to AI suggestions",
                      "AI systems may have biases or limitations in certain scenarios"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{section.icon}</div>
                      <h4 className="font-bold text-black text-base sm:text-lg">{section.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Responsibilities */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiUsers className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Account Responsibilities & AI Interaction</h2>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-bold text-purple-900 mb-4">Your Responsibilities When Using Our AI Platform</h3>
                <p className="text-purple-800 text-sm sm:text-base">
                  As a user of our AI-powered healthcare platform, you have specific responsibilities to ensure 
                  safe and effective use of our services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Account Security",
                    items: [
                      "Maintain confidentiality of your account credentials",
                      "Use strong, unique passwords for your healthcare account",
                      "Enable two-factor authentication when available",
                      "Notify us immediately of any unauthorized account access"
                    ]
                  },
                  {
                    title: "Information Accuracy",
                    items: [
                      "Provide accurate and up-to-date health information to AI agents",
                      "Update your medical history and medication lists regularly",
                      "Correct any inaccuracies in your health profile promptly",
                      "Inform us of any changes in your health status"
                    ]
                  },
                  {
                    title: "AI Interaction Guidelines",
                    items: [
                      "Interact honestly and transparently with our AI agents",
                      "Follow AI recommendations appropriately within your care plan",
                      "Report any concerning AI behavior or recommendations",
                      "Understand the scope and limitations of each AI agent"
                    ]
                  },
                  {
                    title: "Legal Compliance",
                    items: [
                      "Comply with all applicable healthcare and privacy laws",
                      "Respect intellectual property rights of our AI platform",
                      "Use services only for your own healthcare needs",
                      "Report any suspected fraud or misuse of the platform"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
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

            {/* Intellectual Property */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiLock className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 sm:p-8">
                  <h3 className="font-bold text-indigo-900 mb-4">Our AI Technology & Platform</h3>
                  <p className="text-indigo-800 text-sm sm:text-base leading-relaxed mb-4">
                    All content, features, and functionality of our AI-powered healthcare platform, including 
                    but not limited to our 5 AI agents, algorithms, machine learning models, user interfaces, 
                    medical databases, and proprietary healthcare insights, are owned by CareGenix or our 
                    licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
                  </p>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <p className="text-indigo-900 font-medium text-sm">
                      Our AI agents represent years of research, development, and healthcare expertise. 
                      Unauthorized use, reproduction, or reverse engineering is strictly prohibited.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "What You Cannot Do",
                      icon: <FiAlertTriangle className="text-red-600" />,
                      color: "red",
                      items: [
                        "Reproduce or copy our AI algorithms",
                        "Distribute or create derivative works",
                        "Use our trademarks without permission",
                        "Reverse engineer our AI models"
                      ]
                    },
                    {
                      title: "What You Can Do",
                      icon: <FiCheckCircle className="text-green-600" />,
                      color: "green",
                      items: [
                        "Use our services as intended for healthcare",
                        "Access your own health data and AI insights",
                        "Share your experiences (not proprietary data)",
                        "Provide feedback for platform improvement"
                      ]
                    },
                    {
                      title: "Our Commitment",
                      icon: <FiShield className="text-blue-600" />,
                      color: "blue",
                      items: [
                        "Continuous AI innovation and improvement",
                        "Respect for your health data ownership",
                        "Transparent AI decision-making processes",
                        "Open collaboration with healthcare providers"
                      ]
                    }
                  ].map((section, index) => (
                    <div key={index} className={`bg-${section.color}-50 border border-${section.color}-200 p-6 rounded-2xl`}>
                      <div className="flex items-center mb-4">
                        <div className="mr-3">{section.icon}</div>
                        <h4 className={`font-bold text-${section.color}-900 text-sm sm:text-base`}>{section.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <span className={`w-2 h-2 bg-${section.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                            <span className={`text-${section.color}-800 text-xs sm:text-sm`}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Termination of Services */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiAlertTriangle className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Termination of Services</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-bold text-red-900 mb-4">Service Suspension and Termination</h3>
                <p className="text-red-800 text-sm sm:text-base leading-relaxed">
                  CareGenix reserves the right to suspend or terminate your access to our AI-powered healthcare platform and services under specific conditions to ensure compliance and safety.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Reasons for Termination",
                    items: [
                      "Violation of these Terms of Use",
                      "Engaging in prohibited activities",
                      "Fraudulent or illegal use of services",
                      "Failure to maintain account security",
                      "Non-compliance with healthcare regulations"
                    ]
                  },
                  {
                    title: "Termination Process",
                    items: [
                      "Immediate suspension for critical violations",
                      "Notification via email or in-app message",
                      "Opportunity to appeal within 30 days",
                      "Data retention as per legal requirements",
                      "Option to export your data before termination"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
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

            {/* Limitation of Liability */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiShield className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Limitation of Liability</h2>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Liability for AI Services</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  CareGenix strives to provide reliable and accurate AI-powered healthcare services, but there are inherent limitations and risks associated with AI technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "No Liability for AI Errors",
                    items: [
                      "CareGenix is not liable for errors in AI recommendations",
                      "AI outputs are supplementary and not definitive",
                      "No guarantee of accuracy or completeness",
                      "Users assume responsibility for verifying AI advice"
                    ]
                  },
                  {
                    title: "General Liability Limits",
                    items: [
                      "No liability for indirect or consequential damages",
                      "Limited to the amount paid for services, if any",
                      "Not responsible for third-party service interruptions",
                      "Exclusions apply as per applicable law"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
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

            {/* Governing Law */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg mr-4">
                  <FiBook className="text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>Governing Law & Dispute Resolution</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-bold text-blue-900 mb-4">Legal Jurisdiction</h3>
                <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
                  These Terms of Use are governed by the laws of the State of Delaware, USA, without regard to its conflict of law principles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Dispute Resolution",
                    items: [
                      "Disputes will be resolved through binding arbitration",
                      "Arbitration conducted under American Arbitration Association rules",
                      "Arbitration to take place in Wilmington, Delaware",
                      "Users waive rights to class action lawsuits"
                    ]
                  },
                  {
                    title: "Legal Compliance",
                    items: [
                      "Users must comply with all applicable local and federal laws",
                      "CareGenix adheres to healthcare regulations (e.g., HIPAA)",
                      "Disputes may involve regulatory oversight",
                      "Contact us for legal inquiries or concerns"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
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
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact Our Support Team</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
                  Our dedicated support team is available 24/7 to address your questions or concerns about our Terms of Use or AI-powered healthcare services. We aim to respond promptly to all inquiries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <FiMail className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-black mb-2">Email Support</h4>
                  <p className="text-gray-600 text-sm mb-2">24/7 Support</p>
                  <a href="mailto:support@caregenix.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@caregenix.com
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
                    <div>CareGenix Support Team</div>
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
                      <div className="text-blue-700">Urgent Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-800">&lt; 24 Hours</div>
                      <div className="text-blue-700">General Inquiries</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-800">&lt; 30 Days</div>
                      <div className="text-blue-700">Complex Requests</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Terms */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start">
                  <FiAlertTriangle className="text-amber-600 mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3">Updates to Terms & AI Evolution</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                      As our AI agents and healthcare technologies evolve, we may update these Terms of Use to reflect changes in our services or legal requirements. We will notify you of material changes through multiple channels.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">30-day advance notice for major changes</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Notifications via email, app, and website</span>
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

export default TermsOfUse;