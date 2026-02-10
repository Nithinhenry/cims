
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const steps = [
    { title: "Visit Center", desc: "Walk into our Ramanthapur office during working hours.", icon: "1" },
    { title: "Share Details", desc: "Provide necessary documents and details to our operator.", icon: "2" },
    { title: "Processing", desc: "We process your application online instantly.", icon: "3" },
    { title: "Collect", desc: "Receive your certificate or receipt immediately.", icon: "4" },
  ];

  return (
    <div>
      {/* Hero Header */}
      <header className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-8">
            About <span className="text-primary relative inline-block">
              CIMS
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="8"></path>
              </svg>
            </span> Online Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted Mee Seva Center in <span className="font-semibold text-gray-900">Ramanthapur, Hyderabad</span>. Bridging the gap between citizens and digital governance.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Simplifying Digital Services for Every Citizen
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  With over 10 years of experience serving the Hyderabad community, CIMS Online Services has become a cornerstone for accessible government and digital services. We understand that navigating paperwork can be overwhelming.
                </p>
                <p>
                  Our dedicated team in Ramanthapur ensures that every application—be it for Aadhaar, PAN card, birth certificates, or utility payments—is processed with accuracy and speed. We are more than just a service center; we are your partners in digital empowerment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-primary">10+</span>
                  <span className="text-gray-500 font-bold mt-2">Years of Trust</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-secondary">50k+</span>
                  <span className="text-gray-500 font-bold mt-2">Happy Customers</span>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <img 
                  src="https://picsum.photos/seed/office/800/600" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Workflow</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">How It Works</h2>
          </div>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-background-light p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-extrabold mb-6 shadow-xl shadow-primary/30">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons-round text-3xl">place</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Located in the Heart of Hyderabad</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Visit our Ramanthapur center for personalized assistance. We're easily accessible on the main road, right opposite the Community Hall.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white font-extrabold rounded-xl hover:bg-black transition-all shadow-xl">
              Get Location on Maps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
