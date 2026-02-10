
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Identity & Government",
      color: "secondary", // Green
      icon: "badge",
      items: [
        "Aadhar Card Services (New/Update)",
        "PAN Card (New/Correction)",
        "Voter ID Apply & Correction",
        "Passport Seva (Fresh/Renewal)",
        "Ration Card Services",
        "Driving License Slot Booking",
        "Udyam Registration"
      ]
    },
    {
      title: "Business & Registrations",
      color: "primary", // Orange
      icon: "storefront",
      items: [
        "GST Registration & Filing",
        "FSSAI Food License",
        "Trade License Application",
        "MSME Registration",
        "Labour License",
        "Firm Registration",
        "Digital Signature Certificate (DSC)"
      ]
    },
    {
      title: "Certificates & Welfare",
      color: "secondary", // Green
      icon: "description",
      items: [
        "Birth & Death Certificates",
        "Income Certificate",
        "Caste / Community Certificate",
        "EWS Certificate",
        "OBC / Non-Creamy Layer",
        "Pension Schemes (Old Age/Widow)",
        "Residential Certificate"
      ]
    },
    {
      title: "Banking, Bills & Others",
      color: "primary", // Orange
      icon: "payments",
      items: [
        "Money Transfer (DMT)",
        "Cash Withdrawals (AEPS)",
        "Electricity & Water Bill Payment",
        "LIC Premium Payment",
        "Train, Flight & Bus Booking",
        "Fastag Recharge",
        "Xerox, Print & Lamination"
      ]
    }
  ];

  return (
    <div className="bg-background-light min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-primary/10 py-16 lg:py-24 border-b border-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary-dark text-sm font-bold mb-4 tracking-wide uppercase">
            Mee Seva & Digital Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your one-stop destination for all government and digital services in Hyderabad. From Aadhaar updates to business registrations, we handle it all with efficiency.
          </p>
        </div>
        
        {/* Abstract background decoration */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-16 flex items-center px-8 ${
                  cat.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <span className="material-icons-round text-white mr-4 text-2xl">{cat.icon}</span>
                  <h2 className="text-lg font-extrabold text-white tracking-wide uppercase">{cat.title}</h2>
                </div>
                <div className="p-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 group/item">
                        <span className={`material-icons-round text-sm mt-1 mr-3 flex-shrink-0 transition-transform group-hover/item:scale-125 ${
                          cat.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}>check_circle</span>
                        <span className="text-sm font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-secondary/30">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Can't find what you are looking for?</h2>
              <p className="text-white/90 text-lg">We offer many more specialized services. Reach out to our team in Hyderabad.</p>
            </div>
            <Link 
              to="/contact" 
              className="whitespace-nowrap bg-primary hover:bg-primary-dark text-white font-extrabold py-4 px-10 rounded-xl shadow-xl transform transition hover:-translate-y-1 active:scale-95"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
