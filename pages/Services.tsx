
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubService {
  id: string;
  name: string;
  description: string;
  docs: string[];
  keywords: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  services: SubService[];
}

const servicesData: Category[] = [
  {
    id: 'govt-ids',
    name: 'Govt IDs',
    icon: 'badge',
    services: [
      { id: 'aadhar', name: 'Aadhar Services', description: 'New enrolment, demographic updates (Address, Name, DOB) and biometric updates.', docs: ['Proof of Identity', 'Proof of Address', 'Date of Birth Proof', 'Passport Photo', 'Registered Mobile Number'], keywords: ['aadhar', 'uidai', 'address update', 'new aadhar'] },
      { id: 'pan', name: 'PAN Card', description: 'Application for new Permanent Account Number or corrections/reprint of existing card.', docs: ['Aadhar Card', '2 Passport Size Photos', 'Registered Mobile Number'], keywords: ['pan', 'income tax', 'correction', 'reprint'] },
      { id: 'voter', name: 'Voter ID', description: 'New voter registration, correction of details, or change of address.', docs: ['Aadhar Card', 'Age Proof (SSC)', 'Passport Size Photo', 'Address Proof'], keywords: ['voter', 'election card', 'epic'] },
      { id: 'dl', name: 'Driving Licence', description: 'Learner licence, permanent licence, renewals, and address changes.', docs: ['Aadhar Card', 'Age Proof', 'Address Proof', 'Physical Fitness Declaration'], keywords: ['dl', 'driving', 'licence', 'rto'] },
      { id: 'eshram', name: 'E-Shram Card', description: 'Registration for unorganized workers to get social security benefits.', docs: ['Aadhar Card', 'Bank Passbook', 'Active Mobile Number'], keywords: ['eshram', 'shramik', 'worker card'] }
    ]
  },
  {
    id: 'mro-ghmc',
    name: 'MRO / GHMC Certificates',
    icon: 'article',
    services: [
      { id: 'birth-cert', name: 'Birth Certificate', description: 'Registration and issuance of official birth records from GHMC/MRO.', docs: ['Hospital Discharge Summary', 'Aadhar of Parents', 'Address Proof'], keywords: ['birth', 'certificate', 'ghmc'] },
      { id: 'death-cert', name: 'Death Certificate', description: 'Official registration of death records and issuance of certificates.', docs: ['Doctor/Hospital Death Report', 'Aadhar of Deceased', 'Cremation Receipt'], keywords: ['death', 'certificate', 'mro'] },
      { id: 'caste-cert', name: 'Caste Certificate', description: 'Issuance of BC / OBC / EBC / EWS certificates for various purposes.', docs: ['Aadhar Card', 'Old Caste Certificate of Family', 'SSC Memo', 'Ration Card'], keywords: ['caste', 'obc', 'ebc', 'ews', 'certificate'] },
      { id: 'income-cert', name: 'Income Certificate', description: 'Official certification of annual income for scholarships and schemes.', docs: ['Aadhar Card', 'Ration Card', 'Salary Slip / IT Returns', 'Self Declaration'], keywords: ['income', 'certificate', 'mro'] },
      { id: 'residence-cert', name: 'Residence Certificate', description: 'Proof of local nativity or residence within the jurisdiction.', docs: ['Aadhar Card', 'Electricity/Gas Bill', 'Ration Card'], keywords: ['residence', 'nativity', 'local'] },
      { id: 'ration-card', name: 'Ration Card Work', description: 'New card applications, member additions/deletions, or category changes.', docs: ['Aadhar of all members', 'Address Proof', 'Income Proof'], keywords: ['ration card', 'food security', 'epds'] }
    ]
  },
  {
    id: 'business',
    name: 'Business Services',
    icon: 'storefront',
    services: [
      { id: 'firm-reg', name: 'Firm Registration', description: 'Legal registration for partnership or proprietary firms.', docs: ['PAN of Partners/Owner', 'Aadhar Card', 'Business Address Proof', 'Partnership Deed (if any)'], keywords: ['firm', 'registration', 'business'] },
      { id: 'gst-reg', name: 'GST Registration', description: 'Goods and Services Tax registration and amendment services.', docs: ['PAN & Aadhar', 'Business Photo', 'Electricity Bill of shop', 'Cancel Cheque'], keywords: ['gst', 'tax', 'registration'] },
      { id: 'labour-lic', name: 'Labour Licence', description: 'Licencing for businesses employing labour as per state laws.', docs: ['Business Registration', 'ID Proof of Owner', 'Labour count details'], keywords: ['labour', 'licence', 'contractor'] },
      { id: 'trade-lic', name: 'Trade Licence', description: 'GHMC trade licence for commercial establishments in Hyderabad.', docs: ['Property Tax Receipt', 'Rental Agreement', 'Ownership Documents'], keywords: ['trade', 'licence', 'ghmc', 'shop'] },
      { id: 'msme-udyam', name: 'MSME / Udyam', description: 'Registration of small and medium enterprises for govt benefits.', docs: ['Aadhar Card', 'PAN Card', 'Bank Details', 'Investment Details'], keywords: ['msme', 'udyam', 'ssi'] },
      { id: 'rental-agmt', name: 'Rental / Lease Agreements', description: 'Legal drafting and printing of house or shop rental agreements.', docs: ['ID Proof of Owner', 'ID Proof of Tenant', 'Property Details'], keywords: ['rental', 'lease', 'agreement'] },
      { id: 'water-nala', name: 'Water / NALA Connections', description: 'Application for new water connections or land conversion (NALA).', docs: ['Property Tax Receipt', 'ID Proof', 'Plan Copy'], keywords: ['water', 'nala', 'connection'] },
      { id: 'all-agmts', name: 'All Agreements', description: 'General drafting for sale, lease, and other legal contracts.', docs: ['ID Proofs of both parties', 'Property/Object details', 'Terms of agreement'], keywords: ['sale deed', 'contract', 'agreement'] },
      { id: 'bank-acc', name: 'Bank Acc Opening/Changes', description: 'Assistance with new account opening or KYC updates (Mobile/Address).', docs: ['Aadhar Card', 'PAN Card', 'Passport Photos', 'Active Mobile Number'], keywords: ['bank', 'account', 'kyc', 'saving'] }
    ]
  },
  {
    id: 'schemes-student',
    name: 'Schemes & Student',
    icon: 'school',
    services: [
      { id: 'kalyana-lakshmi', name: 'Kalyana Lakshmi Support', description: 'Financial assistance for marriages under govt schemes.', docs: ['Aadhar of Bride/Groom', 'Wedding Invitation', 'Income/Caste Certs', 'Marriage Photo', 'Bank Passbook'], keywords: ['marriage', 'scheme', 'welfare', 'shaadi mubarak'] },
      { id: 'arogya-sri', name: 'Arogya / Health Scheme', description: 'Support for health cards and medical benefit applications.', docs: ['Aadhar Card', 'Ration Card', 'Medical Reports'], keywords: ['health', 'arogya', 'medical', 'insurance'] },
      { id: 'pensions', name: 'Govt Pensions', description: 'Old age, widow, and disabled pension application support.', docs: ['Aadhar Card', 'Bank Passbook', 'Age Proof', 'Medical Certificate (if disabled)'], keywords: ['pension', 'old age', 'widow'] },
      { id: 'scholarships', name: 'Scholarships', description: 'School and college scholarship applications (Pre/Post metric).', docs: ['Aadhar Card', 'Income/Caste Certs', 'Student ID', 'Fee Receipt'], keywords: ['scholarship', 'student', 'college'] },
      { id: 'school-adm', name: 'School Admissions', description: 'Online applications for Gurukula and Model Schools.', docs: ['Aadhar Card', 'Study Certificate', 'Caste/Income Certs'], keywords: ['school', 'gurukula', 'admission'] },
      { id: 'bus-pass', name: 'Student Bus Pass', description: 'Apply for fresh or renewal of RTC student bus passes.', docs: ['School/College ID', 'Bonafide Certificate', 'Aadhar Card', 'Photo'], keywords: ['bus pass', 'rtc', 'student'] },
      { id: 'kisan-samman', name: 'Kisan Samman Nidhi', description: 'Registration and help for central farmer benefit schemes.', docs: ['Farmer Passbook', 'Aadhar Card', 'Linked Bank Account'], keywords: ['kisan', 'farmer', 'nidhi', 'pm kisan'] }
    ]
  },
  {
    id: 'general-misc',
    name: 'General / Misc',
    icon: 'more_horiz',
    services: [
      { id: 'pf-services', name: 'PF Withdrawal / Services', description: 'EPF withdrawal, KYC updates, and transfer claims.', docs: ['UAN Number', 'Aadhar & PAN', 'Linked Bank Passbook'], keywords: ['pf', 'epf', 'withdrawal', 'uan'] },
      { id: 'pp-photos', name: 'PP Photos', description: 'Instant passport and stamp size photos for all applications.', docs: ['Subject Presence'], keywords: ['photo', 'passport size', 'stamp size'] },
      { id: 'dtp-form', name: 'DTP & Form Filling', description: 'Telugu/English typing, printing, and online form filling.', docs: ['Draft Content', 'Source Documents'], keywords: ['typing', 'dtp', 'printing', 'scan'] },
      { id: 'affidavit', name: 'Affidavits / Notary', description: 'Preparation of legal affidavits and notary services.', docs: ['ID Proof', 'Draft Content', 'Stamp Paper'], keywords: ['notary', 'affidavit', 'legal'] },
      { id: 'biometrics', name: 'Biometrics', description: 'Aadhar or scheme based biometric authentication.', docs: ['Aadhar Card', 'Physical Presence'], keywords: ['biometric', 'fingerprint', 'authentication'] },
      { id: 'aeps', name: 'AEPS Withdrawal', description: 'Withdraw cash using Aadhar biometric from any bank.', docs: ['Aadhar Card', 'Bank Name'], keywords: ['aeps', 'cash', 'withdraw'] },
      { id: 'micro-atm', name: 'Micro ATM', description: 'Cash withdrawal using debit cards at our center.', docs: ['Debit Card', 'PIN'], keywords: ['atm', 'cash', 'withdraw', 'debit'] },
      { id: 'money-transfer', name: 'Money Transfer', description: 'Domestic instant money transfer to any bank in India.', docs: ['Account Number', 'IFSC Code'], keywords: ['transfer', 'bank', 'money'] },
      { id: 'apps-forms', name: 'All Application Forms', description: 'Availability and assistance for all types of govt/general forms.', docs: ['Specific case requirements'], keywords: ['forms', 'application', 'apply'] }
    ]
  }
];

const Services: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('govt-ids');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    let initialService: SubService | null = null;
    let initialCatId = 'govt-ids';

    if (hash) {
      servicesData.forEach(cat => {
        const found = cat.services.find(s => s.id === hash);
        if (found) {
          initialService = found;
          initialCatId = cat.id;
        }
      });
    }

    if (!initialService) {
      const defaultCat = servicesData.find(c => c.id === initialCatId) || servicesData[0];
      initialService = defaultCat.services[0];
    }

    setActiveCategoryId(initialCatId);
    setSelectedService(initialService);
  }, [location.hash]);

  const filteredDisplay = useMemo(() => {
    if (searchQuery.trim() === '') {
      const cat = servicesData.find(c => c.id === activeCategoryId);
      return cat ? [cat] : [];
    }

    const query = searchQuery.toLowerCase();
    return servicesData.map(cat => {
      const matchedServices = cat.services.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query) ||
        s.keywords.some(k => k.toLowerCase().includes(query))
      );
      return { ...cat, services: matchedServices };
    }).filter(c => c.services.length > 0);
  }, [searchQuery, activeCategoryId]);

  const handleServiceClick = (service: SubService) => {
    setSelectedService(service);
    if (window.innerWidth < 1024) {
      document.getElementById('details-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (catId: string) => {
    setSearchQuery('');
    setActiveCategoryId(catId);
    const cat = servicesData.find(c => c.id === catId);
    if (cat && cat.services.length > 0) {
      setSelectedService(cat.services[0]);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 2) Compact Hero & Search */}
      <section className="bg-gray-50 border-b border-gray-100 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Services Portal</h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-2">
                Instantly find and apply for all CIMS government and utility services.
              </p>
            </div>
            
            <div className="relative group w-full lg:w-[450px]">
              <span className="material-icons-round absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors text-2xl">search</span>
              <input 
                type="text" 
                placeholder="Search for Aadhar, PAN, GST, PF, Money Transfer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-gray-900 shadow-sm focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all outline-none"
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => { setSearchQuery(''); setActiveCategoryId('all'); }}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategoryId === 'all' && searchQuery === ''
                  ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                  : 'bg-white text-gray-400 border border-gray-100 hover:border-primary/20 hover:text-primary'
              }`}
            >
              All Services
            </button>
            {servicesData.map(c => (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.id)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategoryId === c.id && searchQuery === ''
                    ? 'bg-secondary text-white shadow-xl shadow-secondary/30' 
                    : 'bg-white text-gray-400 border border-gray-100 hover:text-secondary'
                }`}
              >
                {c.name.includes('/') ? c.name.split(' / ')[0] : c.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Main Services UI */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* 3.1 Left Panel - Category List */}
          <div className="hidden lg:block w-72 sticky top-28 h-[calc(100vh-180px)] overflow-y-auto space-y-2 pr-4 scrollbar-hide">
            {servicesData.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all group ${
                  activeCategoryId === cat.id && searchQuery === ''
                    ? 'bg-gray-900 text-white shadow-2xl'
                    : 'bg-white hover:bg-gray-50 text-gray-500 border border-transparent hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`material-icons-round text-2xl ${activeCategoryId === cat.id && searchQuery === '' ? 'text-primary' : 'text-gray-300'}`}>{cat.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-left leading-tight">{cat.name}</span>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-lg ${
                  activeCategoryId === cat.id && searchQuery === '' ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {cat.services.length}
                </span>
              </button>
            ))}
          </div>

          {/* 3.2 Middle Panel - Service Cards */}
          <div className="flex-1 w-full space-y-10 min-h-[600px]">
            {filteredDisplay.length > 0 ? (
              (searchQuery !== '' ? filteredDisplay : filteredDisplay.filter(c => activeCategoryId === 'all' || c.id === activeCategoryId)).map(cat => (
                <div key={cat.id} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-icons-round text-xl">{cat.icon}</span>
                    </div>
                    <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">{cat.name}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.services.map(service => (
                      <div 
                        key={service.id}
                        onClick={() => handleServiceClick(service)}
                        className={`p-6 rounded-3xl border cursor-pointer transition-all flex justify-between items-center group ${
                          selectedService?.id === service.id
                            ? 'bg-white border-primary ring-8 ring-primary/5 shadow-2xl'
                            : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-lg'
                        }`}
                      >
                        <div className="space-y-1">
                          <h4 className={`text-sm font-black transition-colors ${selectedService?.id === service.id ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                            {service.name}
                          </h4>
                          <p className="text-[10px] text-gray-400 font-medium line-clamp-1">{service.description}</p>
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-widest transition-all transform group-hover:translate-x-1 ${selectedService?.id === service.id ? 'text-primary' : 'text-gray-200'}`}>
                          Docs →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-32 bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-200">
                <span className="material-icons-round text-7xl text-gray-200 mb-6">search_off</span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">No services match '{searchQuery}'</h3>
                <p className="text-sm text-gray-400 font-bold mb-10 uppercase tracking-widest">Try another search or browse categories</p>
                <button onClick={() => setSearchQuery('')} className="px-12 py-4 bg-white border border-gray-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* 3.3 Right Panel - Detail/Docs */}
          <div id="details-panel" className="w-full lg:w-[420px] sticky top-28 lg:h-[calc(100vh-180px)] overflow-y-auto pb-20">
            {selectedService ? (
              <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500 h-fit">
                <div className="bg-primary p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-[9px] font-black uppercase tracking-widest rounded-full">
                      Service Details
                    </span>
                  </div>
                  <h2 className="text-3xl font-black leading-tight mb-4">{selectedService.name}</h2>
                  <p className="text-xs text-white/70 font-bold leading-relaxed">{selectedService.description}</p>
                </div>

                <div className="p-10 space-y-10">
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-secondary mb-8 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-icons-round text-sm">checklist</span>
                      </span>
                      Required Documents
                    </h3>
                    <ul className="space-y-5">
                      {selectedService.docs.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-secondary/10 group-hover:text-secondary transition-all shrink-0">
                            <span className="material-icons-round text-xs">check</span>
                          </div>
                          <span className="text-xs font-bold text-gray-600 leading-relaxed pt-1">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10">
                    <div className="flex gap-3">
                      <span className="material-icons-round text-secondary text-sm">info</span>
                      <p className="text-[10px] font-bold text-secondary/70 leading-relaxed italic">
                        Documents list is indicative. For complex cases, visit our Ramanthapur center for free expert consultation.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <Link to="/contact" className="block w-full py-5 bg-primary hover:bg-primary-dark text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95">
                      Request This Service
                    </Link>
                    <Link to="/contact" className="block w-full py-5 bg-white border-2 border-secondary text-secondary text-center rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-secondary hover:text-white">
                      Ask an Operator
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[500px] flex items-center justify-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100 p-16 text-center">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce-gentle">
                    <span className="material-icons-round text-5xl text-gray-200">touch_app</span>
                  </div>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest leading-loose">
                    Select a service to view<br />document requirements
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer Support Banner */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mb-48"></div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Can't Find a Service?</h2>
            <p className="text-white/40 text-lg font-medium mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
              We handle over 200+ specialized government and commercial forms. Our operators can help you with custom requests even if not listed here.
            </p>
            <Link to="/contact" className="relative z-10 inline-flex items-center gap-3 bg-white text-gray-900 px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
              <span className="material-icons-round">support_agent</span>
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
