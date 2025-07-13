import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiAward, FiBook, FiCalendar, FiClock, FiStar, FiUsers, FiCode, FiZap } from 'react-icons/fi';

const Team = () => {
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Khaqan Nasir",
      role: "Lead AI Developer",
      specialty: "Artificial Intelligence & Machine Learning",
      experience: "8+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      email: "khaqan.nasir@caregenix.com",
      phone: "+92 (300) 123-4567",
      bio: "Muhammad Khaqan Nasir leads the development of AI-driven solutions at CareGenix, specializing in machine learning models for healthcare automation and diagnostics.",
      qualifications: [
        "MS in Artificial Intelligence, NUST",
        "Certified AWS Machine Learning Specialist",
        "Published 10+ papers on AI in Healthcare",
      ],
      languages: ["English", "Urdu"],
      availability: "Mon-Fri: 9:00 AM - 6:00 PM",
      linkedin: "https://linkedin.com/in/muhammad-khaqan-nasir",
      github: "https://github.com/mkhaqan",
    },
    {
      id: 2,
      name: "Muhammad Adnan Tariq",
      role: "Frontend Architect",
      specialty: "UI/UX Design & React Development",
      experience: "7+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf335d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      email: "adnan.tariq@caregenix.com",
      phone: "+92 (300) 234-5678",
      bio: "Muhammad Adnan Tariq designs intuitive and responsive user interfaces, ensuring seamless user experiences for CareGenix's healthcare platform.",
      qualifications: [
        "BS in Computer Science, LUMS",
        "Certified React Developer",
        "Expert in Tailwind CSS and UX Design",
      ],
      languages: ["English", "Urdu", "Punjabi"],
      availability: "Mon-Fri: 8:00 AM - 5:00 PM",
      linkedin: "https://linkedin.com/in/muhammad-adnan-tariq",
      github: "https://github.com/adnantariq",
    },
    {
      id: 3,
      name: "Muhammad Ibtisam Afzal",
      role: "Backend & DevOps Engineer",
      specialty: "Cloud Architecture & Data Engineering",
      experience: "6+ years",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      email: "ibtisam.afzal@caregenix.com",
      phone: "+92 (300) 345-6789",
      bio: "Muhammad Ibtisam Afzal architects scalable cloud infrastructure and manages data pipelines to ensure robust and secure backend operations for CareGenix.",
      qualifications: [
        "MS in Data Science, FAST-NU",
        "AWS Certified Solutions Architect",
        "Expert in Docker and Kubernetes",
      ],
      languages: ["English", "Urdu"],
      availability: "Mon-Fri: 10:00 AM - 7:00 PM",
      linkedin: "https://linkedin.com/in/muhammad-ibtisam-afzal",
      github: "https://github.com/ibtisamafzal",
    },
  ];

  const stats = [
    { value: "3", label: "Core Team Members", icon: <FiUsers /> },
    { value: "20+", label: "Years Combined Experience", icon: <FiClock /> },
    { value: "4.8", label: "Average Rating", icon: <FiStar /> },
    { value: "12+", label: "Technologies Mastered", icon: <FiCode /> },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-animate id="hero-text">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FiAward className="mr-1.5 sm:mr-2" />
            GenAI.Works Agentic Hackathon
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Meet Our Expert Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Our dedicated team of innovators drives CareGenix's mission to revolutionize healthcare with AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300" data-animate id={`stat-${index}`}>
                <div className="flex justify-center mb-2 sm:mb-3 text-black/80 group-hover:text-black transition-colors text-lg sm:text-xl md:text-2xl">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-black">{stat.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16" data-animate id="team-header">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Core Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Meet the brilliant minds behind CareGenix's AI-powered healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                data-animate
                id={`member-${member.id}`}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-br from-black to-gray-800 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {member.specialty}
                  </div>
                  <div className="absolute top-3 left-3 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center">
                    <FiStar className="text-yellow-500 mr-1" />
                    {member.rating}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{member.name}</h3>
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">{member.experience}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base flex-grow">{member.bio}</p>

                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <FiClock className="mr-2 text-black" />
                      <span>{member.availability}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <FiBook className="mr-2 text-black" />
                      <span>Languages: {member.languages.join(', ')}</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <h4 className="font-semibold text-black flex items-center text-sm sm:text-base">
                      <FiAward className="mr-2 text-black" />
                      Qualifications
                    </h4>
                    <ul className="space-y-1.5">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="text-sm sm:text-base text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 sm:space-y-3 border-t pt-3 sm:pt-4 mb-3 sm:mb-4">
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <FiMail className="mr-2 text-black" />
                      <a href={`mailto:${member.email}`} className="hover:text-black transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <FiPhone className="mr-2 text-black" />
                      <a href={`tel:${member.phone}`} className="hover:text-black transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      >
                        <FiLinkedin className="text-lg sm:text-xl" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label={`Visit ${member.name}'s GitHub profile`}
                      >
                        <FiGithub className="text-lg sm:text-xl" />
                      </a>
                    </div>
                    <button className="bg-gradient-to-br from-black to-gray-800 text-white px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-900 transition-all duration-300 flex items-center space-x-1.5">
                      <FiCalendar className="text-sm" />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16" data-animate id="why-choose-header">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Why Choose Our Team?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Our team combines technical excellence with a passion for transforming healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Technical Expertise",
                description: "Proven skills in AI, frontend, and backend development for robust solutions.",
                icon: <FiCode className="text-lg sm:text-xl md:text-2xl text-black" />,
              },
              {
                title: "Innovative Mindset",
                description: "Pushing boundaries with cutting-edge AI and healthcare technologies.",
                icon: <FiZap className="text-lg sm:text-xl md:text-2xl text-black" />,
              },
              {
                title: "Collaborative Spirit",
                description: "Seamless teamwork to deliver impactful healthcare solutions.",
                icon: <FiUsers className="text-lg sm:text-xl md:text-2xl text-black" />,
              },
              {
                title: "Proven Track Record",
                description: "Successful projects with measurable impact in healthcare innovation.",
                icon: <FiAward className="text-lg sm:text-xl md:text-2xl text-black" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-animate
                id={`why-choose-${index}`}
              >
                <div className="bg-white w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-animate id="cta-content">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FiAward className="mr-1.5 sm:mr-2" />
            Join Our Mission
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Join Our Innovation Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 sm:px-4">
            We're seeking passionate technologists to join our mission of transforming healthcare with AI. Be part of the CareGenix revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
              <FiBook />
              <span>View Open Positions</span>
            </button>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
              <FiMail />
              <span>Submit Your Resume</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;