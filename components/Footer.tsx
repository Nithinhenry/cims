
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-primary">CIMS</span> <span className="text-secondary">ONLINE</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Ramanthapur's trusted Mee Seva partner. Making digital governance accessible, transparent, and hassle-free for everyone in Hyderabad since 2013.
            </p>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 uppercase tracking-[0.2em] text-[10px]">Portal Navigation</h4>
            <ul className="space-y-4 text-xs font-bold text-gray-500">
              <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>Home</Link></li>
              <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/services"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>Services Portal</Link></li>
              <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/about"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>Our Story</Link></li>
              <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/contact"><span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 uppercase tracking-[0.2em] text-[10px]">Top Services</h4>
            <ul className="space-y-4 text-xs font-bold text-gray-500">
              <li><Link className="hover:text-primary transition-colors" to="/services#aadhar">Aadhaar Card Update</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services#pan">New PAN Application</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services#income-cert">Income Certificates</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services#gst-reg">GST Registration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 uppercase tracking-[0.2em] text-[10px]">Office Address</h4>
            <ul className="space-y-4 text-xs font-bold text-gray-500">
              <li className="flex items-start gap-3">
                <span className="material-icons-round text-primary text-xl">location_on</span>
                <span className="leading-relaxed">3-10-26/35, RTC Colony,<br />Ramanthapur, Uppal,<br />Hyderabad, 500013</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary text-xl">phone</span>
                <a href="tel:+919966442490" className="hover:text-primary transition-colors">+91 9966442490</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary text-xl">email</span>
                <a href="mailto:support@cimsonline.com" className="hover:text-primary transition-colors text-[10px]">support@cimsonline.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-gray-400 text-center md:text-left uppercase tracking-widest">
            © 2024 CIMS Online Services. Licensed Mee Seva Partner center.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary transition-all transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-all transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
