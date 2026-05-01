import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Package, Headphones, Store, ChevronRight } from 'lucide-react';
import LoginModal from './LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      <header className="flex flex-col border-b border-gray-200">
        {/* Top Dark Bar */}
        <div className="bg-[#0f1c35] text-white py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative flex items-center justify-center w-8 h-8 rounded shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 50L45 35V65L20 80V50Z" fill="#15c994"/>
                  <path d="M45 35L70 20V50L45 65V35Z" fill="#ffffff"/>
                  <path d="M20 50L45 65L70 50L45 35L20 50Z" fill="#e2e8f0"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">Packly</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-grow max-w-2xl hidden md:flex items-center mx-4 relative">
              <div className="flex w-full bg-white rounded overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Search by brands (Venus Leather, Apple)" 
                  className="flex-grow px-4 py-2.5 text-gray-800 outline-none w-full"
                />
                <button className="bg-[#15c994] px-5 py-2.5 flex items-center justify-center transition-colors hover:bg-emerald-500">
                  <Search size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <button className="flex items-center justify-center hover:text-[#15c994] transition-colors relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center font-medium">0</span>
              </button>
              <button onClick={() => setIsLoginModalOpen(true)} className="flex items-center gap-2 hover:text-[#15c994] transition-colors">
                <User size={24} />
                <span className="hidden sm:inline font-medium">Login/SignUp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub Header / Navigation Menu */}
        <div className="bg-white px-4 md:px-8 border-b shadow-sm relative z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <button className="flex items-center gap-2 font-semibold text-gray-800 py-3.5 border-b-2 border-[#15c994]">
                  <Menu size={20} className="text-[#15c994]" />
                  Categories
                </button>
                
                {/* Mega Menu Dropdown */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md overflow-hidden z-50">
                    <ul className="text-sm">
                      <li className="flex items-center justify-between px-4 py-3 bg-[#e8f8f3] text-gray-900 font-medium cursor-pointer border-l-4 border-[#15c994]">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=40&h=40" alt="Auto" className="w-8 h-8 rounded-full object-cover" />
                          <span>Automotive</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors border-l-4 border-transparent hover:border-gray-200">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=40&h=40" alt="Books" className="w-8 h-8 rounded-full object-cover p-1 bg-blue-50" />
                          <span>Books</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors border-l-4 border-transparent hover:border-gray-200">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=40&h=40" alt="Elec" className="w-8 h-8 rounded-full object-cover p-1 bg-green-50" />
                          <span>Electronic Accessories</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors border-l-4 border-transparent hover:border-gray-200">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=40&h=40" alt="Device" className="w-8 h-8 rounded-full object-cover p-1 bg-purple-50" />
                          <span>Electronics Device</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/" className="text-[#15c994] font-medium py-3.5 transition-colors border-b-2 border-transparent">Products</Link>
              <Link to="/" className="text-gray-600 hover:text-[#15c994] font-medium py-3.5 transition-colors">Shops</Link>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-[13px] text-gray-500 font-medium tracking-wide">
              <Link to="/track-order" className="flex items-center gap-1.5 hover:text-[#15c994] transition-colors">
                <Package size={16} /> TRACK ORDER
              </Link>
              <Link to="/help-center" className="flex items-center gap-1.5 hover:text-[#15c994] transition-colors">
                <Headphones size={16} /> HELP CENTER
              </Link>
              <button className="flex items-center gap-1.5 hover:text-[#15c994] transition-colors text-[#15c994]">
                <Store size={16} /> SELL WITH US
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
