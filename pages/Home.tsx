
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

  const floatingVisuals = [
    { icon: 'badge', top: '10%', right: '15%', delay: '0s', label: 'ID Card', color: 'primary' },
    { icon: 'article', top: '35%', right: '35%', delay: '2s', label: 'Document', color: 'secondary' },
    { icon: 'currency_rupee', top: '65%', right: '12%', delay: '4s', label: 'Rupee', color: 'primary' },
    { icon: 'credit_card', top: '20%', right: '5%', delay: '1.5s', label: 'Credit Card', color: 'primary' },
    { icon: 'electrical_services', top: '50%', right: '22%', delay: '3.5s', label: 'Utility Bill', color: 'secondary' },
    { icon: 'local_activity', top: '75%', right: '30%', delay: '5.5s', label: 'Bus Ticket', color: 'primary' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section: Minimalist Abstract Background */}
      <section className="relative pt-20 pb-24 lg:pt-40 lg:pb-48 hero-gradient min-h-[95vh] flex items-center">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Faint shapes on the left */}
          <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-primary/5 rounded-full shape-blur animate-pulse-slow"></div>
          <div className="absolute bottom-[30%] left-[15%] w-48 h-48 bg-secondary/5 rounded-full shape-blur animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

          {/* Floating Cluster on the Right half */}
          {floatingVisuals.map((item, idx) => (
            <div 
              key={idx}
              className="hidden lg:flex absolute flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl animate-float-spiral group hover:bg-white/60 transition-all duration-500 card-3d opacity-80"
              style={{ 
                top: item.top, 
                right: item.right, 
                animationDelay: item.delay,
              }}
            >
              <div className="motion-blur-trail">
                <span className={`material-icons-round text-5xl ${item.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  {item.icon}
                </span>
              </div>
              <span className="mt-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{item.label}</span>
            </div>
          ))}

          {/* Mobile Simplified Shapes */}
          <div className="lg:hidden absolute inset-0 opacity-40">
            <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute bottom-40 right-5 w-20 h-20 bg-secondary/10 rounded-full animate-float-reverse"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content (Clean half) */}
            <div className="space-y-10 text-center lg:text-left">
              <div>
                <span className="inline-block py-1.5 px-6 rounded-full bg-secondary/10 text-secondary text-xs font-black mb-8 border border-secondary/20 uppercase tracking-[0.3em] shadow-sm">
                  Government & Online Services
                </span>
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-gray-900 leading-[1.05]">
                  CIMS <br />
                  <span className="text-primary typewriter-cursor min-h-[1.2em] inline-block">
                    {text}
                  </span>
                </h1>
                <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Ramanthapur's leading digital hub for Aadhaar, PAN, Certificates, Banking, and utility services. Experience speed, transparency, and expert support.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Link to="/services" className="inline-flex items-center justify-center px-12 py-5 border border-transparent text-base font-black rounded-2xl text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-[1.03] hover:shadow-2xl uppercase tracking-widest active:scale-95">
                  View Services
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-12 py-5 border-2 border-secondary text-base font-black rounded-2xl text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-[1.03] uppercase tracking-widest active:scale-95">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right half is intentionally kept for the abstract floating visuals */}
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
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridHome)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left text-white max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black mb-8">Serving Since 2013</h2>
              <p className="text-white/80 font-bold text-xl leading-relaxed">As an official Mee Seva partner, CIMS Online Services has helped thousands of families in Ramanthapur navigate government systems with ease.</p>
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
