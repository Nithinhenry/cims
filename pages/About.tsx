
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [counts, setCounts] = useState({ apps: 0, operators: 0, satisfaction: 0, support: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const steps = [
    { title: "Visit Our Center", desc: "RTC Colony, Ramanthapur.", icon: "store", delay: "0s" },
    { title: "Share Requirement", desc: "Talk to our expert operators.", icon: "forum", delay: "0.2s" },
    { title: "We Process", desc: "Swift application submission.", icon: "published_with_changes", delay: "0.4s" },
    { title: "Collect Documents", desc: "Receive final proofs instantly.", icon: "task", delay: "0.6s" },
  ];

  const features = [
    { title: "Fast Service", desc: "Applications submitted in real-time.", icon: "bolt", color: "text-primary" },
    { title: "Trusted Support", desc: "Official Mee Seva partner center.", icon: "verified_user", color: "text-secondary" },
    { title: "Affordable Charges", desc: "Standard government fees only.", icon: "payments", color: "text-primary" },
    { title: "Convenient Location", desc: "Easy access in Ramanthapur area.", icon: "place", color: "text-secondary" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateCounters();
        setHasAnimated(true);
      }
    }, { threshold: 0.5 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;

      setCounts({
        apps: Math.floor(progress * 10000),
        operators: Math.floor(progress * 15),
        satisfaction: Math.floor(progress * 98),
        support: 24
      });

      if (currentFrame === totalFrames) clearInterval(timer);
    }, frameRate);
  };

  return (
    <div className="bg-background-light">
      {/* About Hero: Vertical Stepper Illustration */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white to-secondary/5 -z-10"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 skew-x-12 origin-top-right -z-10 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-block py-1.5 px-6 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 border border-primary/20 uppercase tracking-[0.2em] shadow-sm">
                  Service Excellence Since 2013
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1]">
                  About <span className="text-primary">CIMS</span> <br /> Online Services
                </h1>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
                <p>
                  Established in the heart of <span className="text-gray-900 font-bold">Ramanthapur, Hyderabad</span>, CIMS ONLINE SERVICES is a dedicated Mee Seva partner committed to bridging the digital divide.
                </p>
                <p>
                  We specialize in high-speed processing of Aadhaar, PAN, and various government certificates. Our goal is simple: to make every citizen's interaction with digital governance smooth, transparent, and hassle-free.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative pl-12 lg:pl-16">
                <div className="absolute left-6 lg:left-8 top-10 bottom-10 w-1.5 bg-secondary/10 rounded-full"></div>
                <div className="space-y-10">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative step-animation flex items-center group"
                      style={{ animationDelay: step.delay }}
                    >
                      <div className="absolute -left-[32px] lg:-left-[46px] w-14 h-14 rounded-full bg-white border-4 border-secondary/10 flex items-center justify-center z-10 shadow-sm group-hover:border-primary transition-all duration-300">
                        <div className="w-4 h-4 rounded-full bg-secondary group-hover:bg-primary transition-all"></div>
                      </div>
                      <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-50 flex items-center gap-6 w-full transform transition-all group-hover:-translate-y-1 group-hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <span className="material-icons-round text-3xl">{step.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-gray-900 leading-none mb-1">{step.title}</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section with Counter Animation */}
      <section ref={statsRef} className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">Our Track Record</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Applications Processed', value: counts.apps, suffix: '+', icon: 'task' },
              { label: 'Certified Operators', value: counts.operators, suffix: '+', icon: 'people' },
              { label: 'Client Satisfaction', value: counts.satisfaction, suffix: '%', icon: 'sentiment_very_satisfied' },
              { label: 'Online Support', value: counts.support, suffix: '/7', icon: 'support_agent' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <span className="material-icons-round text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-6xl font-black text-primary mb-2 tabular-nums">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Office Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[4rem] p-10 lg:p-20 shadow-inner border border-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-secondary/5 skew-x-12 origin-bottom-left"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">Our Dedicated <br /><span className="text-secondary">Office Space</span></h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  We maintain a clean, professional, and citizen-friendly environment in RTC Colony. Our center is equipped with high-speed systems and expert staff ready to assist you in person.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: 'shield', label: 'Trusted', color: 'primary' },
                    { icon: 'schedule', label: 'Fast', color: 'secondary' },
                    { icon: 'payments', label: 'Affordable', color: 'primary' },
                    { icon: 'place', label: 'Convenient', color: 'secondary' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
                      <span className={`material-icons-round ${stat.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>{stat.icon}</span>
                      <span className="font-black text-[10px] uppercase tracking-widest text-gray-900">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] lg:h-[400px] w-full rounded-[2.5rem] overflow-hidden bg-white shadow-2xl flex items-center justify-center border-8 border-white">
                <div className="text-gray-200 text-center">
                  <span className="material-icons-round text-9xl">workspace_premium</span>
                  <p className="font-black uppercase tracking-widest text-[10px] mt-4 text-gray-400">CIMS Hyderabad Authorized</p>
                </div>
                <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full animate-bounce-gentle flex items-center justify-center">
                  <span className="material-icons-round text-primary text-3xl">verified</span>
                </div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-secondary/10 rounded-full animate-pulse-slow flex items-center justify-center">
                  <span className="material-icons-round text-secondary text-4xl">payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Row */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">The CIMS Advantage</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">Why Choose Us?</h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-md">
                  <span className={`material-icons-round text-4xl ${feature.color} group-hover:animate-bounce-gentle`}>{feature.icon}</span>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10 leading-tight">Start Your Application Today</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl">
                Get Directions
              </Link>
              <Link to="/services" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary-dark transition-all transform hover:-translate-y-1 shadow-xl">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
