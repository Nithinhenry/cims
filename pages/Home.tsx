
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const servicesList = [
    "Aadhar & PAN Services",
    "Certificates & Registrations",
    "Banking & Bill Payments",
    "Tickets & Bookings"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % servicesList.length;
      const fullText = servicesList[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 pb-4 sm:pt-16 sm:pb-16 lg:pt-28 lg:pb-32 lg:min-h-[70vh] flex items-center overflow-hidden">

        {/* Video Background — only visible on desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 object-cover z-0 hidden lg:block"
          style={{ width: '100%', height: '100%', minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/4k hero.mp4" type="video/mp4" />
        </video>

        {/* Semi-transparent overlay for readability over video */}
        <div className="absolute inset-0 bg-white/70 z-[1] hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6 sm:space-y-10 text-center lg:text-left">
              <div>
                <span className="inline-block py-1.5 px-4 sm:px-6 rounded-full bg-secondary/10 text-secondary text-[10px] sm:text-xs font-black mb-4 sm:mb-8 border border-secondary/20 uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-sm">
                  Government &amp; Online Services
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-gray-900 leading-[1.1]">
                  CIMS <br />
                  <span className="text-primary typewriter-cursor min-h-[1.2em] inline-block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
                    {text}
                  </span>
                </h1>
                <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-800 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Ramanthapur's leading digital hub for Aadhaar, PAN, Certificates, Banking, and utility services. Experience speed, transparency, and expert support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2 sm:pt-4">
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 border border-transparent text-sm sm:text-base font-black rounded-2xl text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-[1.03] hover:shadow-2xl uppercase tracking-widest active:scale-95">
                  View Services
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 border-2 border-secondary text-sm sm:text-base font-black rounded-2xl text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-[1.03] uppercase tracking-widest active:scale-95">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Video — shown below text on mobile, hidden on desktop */}
            <div className="lg:hidden mt-6">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl shadow-lg"
                style={{ maxHeight: '280px', objectFit: 'cover' }}
              >
                <source src="/4k hero.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Expertise Row */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Expert Digital Solutions</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Government IDs", icon: "badge", color: "primary", text: "Expert help with Aadhaar enrollment, PAN corrections, Passport applications, and Voter ID registration." },
              { title: "Certificates", icon: "article", color: "secondary", text: "Timely assistance for Income, Caste, Birth, and Death certificates. We handle the paperwork, you get the result." },
              { title: "Digital Payments", icon: "account_balance_wallet", color: "primary", text: "Secure utility bill payments, money transfers, mobile recharges, and insurance premium deposits." }
            ].map((feature, i) => (
              <div key={i} className="group bg-background-light p-10 rounded-[3rem] border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-20 h-20 ${feature.color === 'primary' ? 'bg-primary shadow-primary/30' : 'bg-secondary shadow-secondary/30'} text-white rounded-[1.8rem] flex items-center justify-center mb-10 shadow-xl group-hover:rotate-6 transition-transform`}>
                  <span className="material-icons-round text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-5">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-10">{feature.text}</p>
                <Link to="/services" className={`inline-flex items-center font-black text-xs uppercase tracking-[0.2em] ${feature.color === 'primary' ? 'text-primary' : 'text-secondary'} group/btn`}>
                  View Details <span className="material-icons-round ml-2 group-hover/btn:translate-x-3 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridHome" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridHome)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left text-white max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black mb-8">Serving Since 2013</h2>
              <p className="text-white/80 font-bold text-xl leading-relaxed">As an official Mee Seva partner, CIMS ONLINE SERVICES has helped thousands of families in Ramanthapur navigate government systems with ease.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-16 text-white">
              <div className="text-center">
                <div className="text-6xl font-black mb-3">500+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Monthly Users</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black mb-3">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
