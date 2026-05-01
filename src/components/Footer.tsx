import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1c35] text-gray-300 pt-16 pb-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 50L45 35V65L20 80V50Z" fill="#15c994"/>
                  <path d="M45 35L70 20V50L45 65V35Z" fill="#ffffff"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Packly</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Our products are ensured directly from brands or authorized distributors. They're stored and shipped directly from our climate-controlled, GMP-certified warehouses!
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="text-white mt-1 shrink-0 bg-gray-800 p-1.5 rounded-full" size={24} />
                <span>House# 44, Rd No. 2/A,<br/>Dhanmondi, Dhaka 1209</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-white shrink-0 bg-gray-800 p-1.5 rounded-full" size={24} />
                <span>+8809678045555</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-white shrink-0 bg-gray-800 p-1.5 rounded-full" size={24} />
                <span>info@packly.com</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <span className="text-white font-medium text-sm">Follow us on</span>
              <a href="#" className="bg-white text-gray-900 p-1.5 rounded-full hover:bg-[#15c994] hover:text-white transition-colors"><Facebook size={18} className="fill-current" /></a>
              <a href="#" className="bg-white text-gray-900 p-1.5 rounded-full hover:bg-[#15c994] hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-white text-gray-900 p-1.5 rounded-full hover:bg-[#15c994] hover:text-white transition-colors"><Twitter size={18} className="fill-current" /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-6 tracking-wide uppercase">ABOUT</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Refund and Return Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-6 tracking-wide uppercase">HELP</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/help-center" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">How to buy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sell on Packly</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Packly University</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Need Support?</h3>
              <a href="tel:+8809678045555" className="inline-block border border-gray-600 rounded px-6 py-2 text-white hover:border-[#15c994] hover:text-[#15c994] transition-colors">
                +8809678045555
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase">DOWNLOAD APP</h3>
              <div className="flex flex-col gap-3 max-w-[150px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 cursor-pointer object-cover rounded"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10 cursor-pointer object-cover rounded"/>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 mt-8">
           <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="text-sm text-gray-400 uppercase tracking-wider">Payments Accepted</span>
              <div className="flex gap-2">
                 <div className="bg-white px-2 py-1 rounded w-12 h-8 flex items-center justify-center text-blue-800 font-bold text-xs">VISA</div>
                 <div className="bg-white px-2 py-1 rounded w-12 h-8 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full opacity-80 mix-blend-multiply"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 mix-blend-multiply -ml-2"></div>
                 </div>
                 <div className="bg-white px-2 py-1 rounded w-12 h-8 flex items-center justify-center text-blue-600 font-bold text-[8px] leading-tight text-center">AMERICAN<br/>EXPRESS</div>
                 <div className="bg-white px-2 py-1 rounded w-12 h-8 flex items-center justify-center text-pink-600 font-bold text-xs italic">bKash</div>
                 <div className="bg-white px-2 py-1 rounded w-12 h-8 flex items-center justify-center text-orange-500 font-bold text-xs italic">নগদ</div>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
             <span className="text-sm text-gray-400">Verified by</span>
             <div className="bg-[#1e448d] text-white px-3 py-1 rounded font-bold text-sm">SSLCOMMERZ</div>
           </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6 pb-2">
            © 2025 Packly All rights reserved.
        </div>

      </div>
      
      <button 
        onClick={scrollToTop} 
        className="absolute bottom-8 right-8 bg-[#15c994] hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg transition-transform hover:-translate-y-1"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
