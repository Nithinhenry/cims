
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 border border-primary/20">
                  Trusted in Ramanthapur, Hyderabad
                </span>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                  Simplifying <span className="text-primary relative inline-block">
                    Digital Services
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.99995 232.5 0.25 10 2.00022" stroke="currentColor" strokeWidth="3"></path></svg>
                  </span> for Everyone
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Your one-stop destination for Mee Seva services, Government ID applications, certificates, and online bill payments. Fast, reliable, and secure assistance right in your neighborhood.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                  View Services
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-secondary text-base font-semibold rounded-xl text-secondary hover:bg-secondary hover:text-white transition-all duration-200 hover:-translate-y-1">
                  Contact Us
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-secondary text-lg">check_circle</span>
                  <span>Verified Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-secondary text-lg">check_circle</span>
                  <span>Quick Process</span>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Digital Office" 
                  className="object-cover w-full h-full transform transition hover:scale-105 duration-700" 
                />
                {/* Floating Cards Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-icons-round">verified</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">Status</p>
                    <p className="text-sm font-bold text-gray-900">Approved</p>
                  </div>
                </div>
                <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-icons-round">payment</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">Payment</p>
                    <p className="text-sm font-bold text-gray-900">Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We assist with a wide range of government and private digital services to save your time and effort.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-background-light p-8 rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">badge</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government IDs</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Assistance with new applications and corrections for Aadhaar Card, PAN Card, Voter ID, and Passport services.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform">
                Learn more <span className="material-icons-round text-sm ml-1">arrow_forward</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-background-light p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">assignment</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificates</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Get your Birth, Income, Caste, and Residence certificates quickly. We also help with land registration documents.
              </p>
              <Link to="/services" className="inline-flex items-center text-secondary font-bold text-sm hover:translate-x-1 transition-transform">
                Learn more <span className="material-icons-round text-sm ml-1">arrow_forward</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-background-light p-8 rounded-2xl border border-gray-100 hover:border-blue-400/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">account_balance</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bill Payments</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Instant money transfers, utility bill payments (Electricity, Water), mobile recharges, and insurance premium payments.
              </p>
              <Link to="/services" className="inline-flex items-center text-blue-600 font-bold text-sm hover:translate-x-1 transition-transform">
                Learn more <span className="material-icons-round text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Center</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons-round">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">RTC Colony Office</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      3-10-26/35, RTC Colony,<br />
                      Ramanthapur, Uppal, Medchal-Malkajgiri,<br />
                      Hyderabad, Telangana - 500013
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-icons-round">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Opening Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Mon - Sat: 9:00 AM - 8:30 PM<br />Sun: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-lg">
                  Get Directions <span className="material-icons-round ml-2">near_me</span>
                </Link>
              </div>
            </div>
            <div className="h-96 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Customer Service Center" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
