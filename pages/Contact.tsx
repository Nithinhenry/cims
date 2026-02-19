
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-background-light min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Get Help Instantly</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-6 tracking-tighter">Contact Our Center</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Located in Ramanthapur, our expert team is ready to assist with all your Mee Seva and digital document requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Main Form & Info - spans 9 columns */}
          <div className="lg:col-span-9 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Info Cards */}
              <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border border-gray-100 flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                      <span className="material-icons-round text-3xl">call</span>
                    </div>
                    <div className="ml-6">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Expert Support</p>
                      <a href="tel:+919966442490" className="text-2xl font-black text-gray-900 hover:text-primary transition-colors">9966442490</a>
                      <p className="text-xs text-gray-400 mt-2 font-bold">Mon-Sat, 9 AM - 8:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-icons-round text-3xl">location_on</span>
                    </div>
                    <div className="ml-6">
                      <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Our Center</p>
                      <p className="text-lg font-black text-gray-900 leading-tight">RTC Colony, Ramanthapur</p>
                      <p className="text-gray-500 mt-2 font-medium text-sm leading-relaxed">
                        3-10-26/35, Opp. Police Academy,<br />
                        Uppal, Medchal-Malkajgiri,<br />
                        Hyderabad, 500013
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-50 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                        <span className="material-icons-round text-gray-400 text-xs">person</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-400">Join 10k+ citizens served locally.</p>
                </div>
              </div>

              {/* Right: Modern Form */}
              <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8">Quick Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <input 
                      type="text" id="name" required value={formData.name} onChange={handleChange}
                      className="w-full rounded-2xl bg-gray-50 border-2 border-transparent py-4 px-6 focus:bg-white focus:border-primary/20 font-bold text-gray-900 transition-all outline-none" 
                      placeholder="Your Full Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full rounded-2xl bg-gray-50 border-2 border-transparent py-4 px-6 focus:bg-white focus:border-primary/20 font-bold text-gray-900 transition-all outline-none" 
                      placeholder="Phone Number" 
                    />
                  </div>
                  <div className="space-y-2">
                    <textarea 
                      id="message" rows={4} required value={formData.message} onChange={handleChange}
                      className="w-full rounded-2xl bg-gray-50 border-2 border-transparent py-4 px-6 focus:bg-white focus:border-primary/20 font-bold text-gray-900 transition-all outline-none resize-none" 
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 uppercase tracking-widest text-xs"
                    disabled={submitted}
                  >
                    {submitted ? 'Message Received!' : 'Send Inquiry'}
                  </button>
                  {submitted && (
                    <p className="text-center text-secondary font-black text-[10px] animate-pulse uppercase tracking-widest">
                      We'll contact you within 30 minutes.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-[4rem] shadow-2xl border-8 border-white overflow-hidden h-[450px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.168516017594!2d78.5411784758504!3d17.398939602334808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb996964175b2b%3A0xc368a5293d077e60!2sRTC%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500013!5e0!3m2!1sen!2sin!4v1716124500000!5m2!1sen!2sin" 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-125"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="CIMS Ramanthapur Map"
              ></iframe>
              <div className="absolute bottom-10 left-10">
                <a href="https://maps.app.goo.gl/3X8S8S8S8S8S8S8S8" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span className="material-icons-round text-primary">directions</span>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar - Express Help (Desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-[100px] space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-white/50 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center mb-8">
                  <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-round text-primary">rocket_launch</span>
                  </span>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">Express Help</h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Response: ~5 mins</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://wa.me/919966442490" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-black rounded-2xl shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 transition-all uppercase tracking-widest text-[10px]"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 brightness-0 invert" alt="WhatsApp" />
                    WhatsApp Us
                  </a>
                  <a 
                    href="tel:+919966442490"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all uppercase tracking-widest text-[10px]"
                  >
                    <span className="material-icons-round text-sm">phone</span>
                    Quick Call
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Operators Online</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-4">Sunday Support</h4>
                <p className="text-sm font-bold text-white/80 leading-relaxed">
                  Now open on Sundays (10 AM - 2 PM) for emergency document requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 flex items-center p-3 gap-3 animate-in slide-in-from-bottom-8 duration-500">
          <a 
            href="https://wa.me/919966442490" 
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-black rounded-2xl uppercase tracking-widest text-[10px]"
          >
            <span className="material-icons-round text-lg">message</span>
            WhatsApp
          </a>
          <a 
            href="tel:+919966442490" 
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-[10px]"
          >
            <span className="material-icons-round text-lg">phone</span>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
