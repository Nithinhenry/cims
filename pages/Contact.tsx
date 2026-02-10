
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
    <div className="bg-background-light min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Visit our center in Hyderabad or reach out to us directly. We are here to assist you with all your Mee Seva and digital service needs.
          </p>
        </div>

        {/* Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative p-10 md:p-14">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-16 -mt-16 -z-10"></div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 transition-transform hover:rotate-6">
                  <span className="material-icons-round text-3xl">call</span>
                </div>
                <div className="ml-6">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Phone Number</p>
                  <a href="tel:+919966442490" className="text-2xl font-black text-gray-900 hover:text-primary transition-colors leading-none">9966442490</a>
                  <p className="text-sm text-gray-500 mt-2 font-medium">Available 9:00 AM - 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 transition-transform hover:-rotate-6">
                  <span className="material-icons-round text-3xl">email</span>
                </div>
                <div className="ml-6">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Email Address</p>
                  <a href="mailto:support@cimsonline.com" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">support@cimsonline.com</a>
                  <p className="text-sm text-gray-500 mt-2 font-medium">Send us your queries anytime</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons-round text-3xl">location_on</span>
                </div>
                <div className="ml-6">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Center</p>
                  <p className="text-lg font-bold text-gray-900 mt-1 leading-tight">CIMS Online Services</p>
                  <p className="text-gray-500 mt-2 font-medium leading-relaxed">
                    3-10-26/35, RTC Colony,<br />
                    Ramanthapur, Uppal, Medchal-Malkajgiri,<br />
                    Hyderabad, Telangana - 500013
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <span className="material-icons-round text-3xl">schedule</span>
                </div>
                <div className="ml-6">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">Mon - Sat: 9:00 AM - 8:30 PM</p>
                  <p className="text-sm text-red-500 mt-1 font-bold">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                  <input 
                    type="text" id="name" required value={formData.name} onChange={handleChange}
                    className="block w-full rounded-xl border-gray-200 bg-gray-50 py-3.5 px-5 focus:border-primary focus:ring-primary focus:bg-white transition-all outline-none" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                    className="block w-full rounded-xl border-gray-200 bg-gray-50 py-3.5 px-5 focus:border-primary focus:ring-primary focus:bg-white transition-all outline-none" 
                    placeholder="9966442490" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" id="email" required value={formData.email} onChange={handleChange}
                  className="block w-full rounded-xl border-gray-200 bg-gray-50 py-3.5 px-5 focus:border-primary focus:ring-primary focus:bg-white transition-all outline-none" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="message">Your Message</label>
                <textarea 
                  id="message" rows={4} required value={formData.message} onChange={handleChange}
                  className="block w-full rounded-xl border-gray-200 bg-gray-50 py-3.5 px-5 focus:border-primary focus:ring-primary focus:bg-white transition-all outline-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-black rounded-xl shadow-xl transform transition hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? 'MESSAGE SENT SUCCESSFULY!' : 'SUBMIT MESSAGE'}
              </button>
              {submitted && (
                <p className="text-center text-secondary font-bold text-sm animate-pulse">
                  Thank you! We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border-8 border-white overflow-hidden h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.168516017594!2d78.5411784758504!3d17.398939602334808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb996964175b2b%3A0xc368a5293d077e60!2sRTC%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500013!5e0!3m2!1sen!2sin!4v1716124500000!5m2!1sen!2sin" 
              className="w-full h-full grayscale opacity-90 contrast-125 hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CIMS RTC Colony Ramanthapur Map"
            ></iframe>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+919966442490" className="flex items-center justify-center p-6 bg-primary text-white rounded-2xl shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 group">
            <span className="material-icons-round mr-3 group-hover:animate-bounce">phone_in_talk</span>
            <span className="font-black">Call Support 1</span>
          </a>
          <a href="tel:+919966442490" className="flex items-center justify-center p-6 bg-secondary text-white rounded-2xl shadow-xl hover:bg-secondary-dark transition-all transform hover:-translate-y-1 group">
            <span className="material-icons-round mr-3 group-hover:animate-pulse">support_agent</span>
            <span className="font-black">Call Support 2</span>
          </a>
          <a href="mailto:support@cimsonline.com" className="flex items-center justify-center p-6 bg-white border-2 border-primary text-primary rounded-2xl shadow-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 group">
            <span className="material-icons-round mr-3">mark_email_unread</span>
            <span className="font-black">Email Us Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
