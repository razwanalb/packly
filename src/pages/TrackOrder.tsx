import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function TrackOrder() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-gray-800">Home</Link>
        <ChevronRight size={14} />
        <span className="text-gray-800">Track Order</span>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-16 text-center max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-[#0f1c35] mb-2">Track Your Order</h1>
        <p className="text-sm text-gray-500 mb-10">Enter order ID & press "Track Order".</p>

        <div className="max-w-md mx-auto w-full text-left">
          <label className="block text-sm font-medium text-gray-700 mb-2">Order Id</label>
          <input 
            type="text" 
            placeholder="Enter Order ID" 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#15c994] focus:border-[#15c994] mb-6"
          />
          <button className="bg-[#5cd4b0] hover:bg-[#15c994] text-white font-medium py-3 px-8 rounded-full mx-auto flex items-center justify-center gap-2 transition-colors">
            Track Order <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
