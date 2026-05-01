import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center flex flex-col items-center">
          
          <div className="w-12 h-12 mb-4 bg-[#f0fdf4] rounded-xl flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50L45 35V65L20 80V50Z" fill="#15c994"/>
                <path d="M45 35L70 20V50L45 65V35Z" fill="#0f1c35"/>
              </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">Continue with Phone Number</h2>
          <p className="text-gray-500 text-sm mb-6">Enjoy exciting deals and offers & checkout faster</p>

          <div className="w-full text-left mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Phone Number?</label>
            <input 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15c994] focus:border-transparent transition-shadow"
            />
          </div>

          <button className="w-full bg-[#15c994] hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-colors shadow-sm shadow-emerald-200">
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}
