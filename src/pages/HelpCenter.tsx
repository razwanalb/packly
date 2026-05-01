import { useState } from 'react';
import { Mail, Phone, Building2, ChevronDown } from 'lucide-react';

const faqs = [
  { question: "What is Packly?", answer: "Packly is a premier e-commerce platform offering a wide range of products directly from brands and authorized distributors." },
  { question: "How can I place an order on Packly?", answer: "To place an order, simply browse our products, add them to your cart, and proceed to checkout where you can enter your shipping details and payment information." },
  { question: "Are all products on Packly original?", answer: "Yes, we ensure all products are original. We source directly from brands or authorized distributors only." },
  { question: "Can I pay after receiving my order?", answer: "Yes, we offer Cash on Delivery (COD) for most locations." },
  { question: "How long does delivery take?", answer: "Delivery usually takes 2-5 business days depending on your location." },
  { question: "What if I receive the wrong or damaged product?", answer: "You can return the product within 3 days of delivery according to our Refund and Return Policy." },
  { question: "How can I contact customer support?", answer: "You can contact us via email at info@packly.com or call us at +8809678045555." },
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Main Content */}
        <div className="flex-grow max-w-4xl">
          <h1 className="text-2xl font-bold text-[#0f1c35] mb-2">Top Questions</h1>
          <p className="text-sm text-gray-500 mb-8">Select an action or article to learn more</p>

          <div className="space-y-3 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="text-sm text-gray-800 font-medium">{faq.question}</span>
                  <ChevronDown size={18} className={`text-[#15c994] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 border-t border-gray-100 text-sm text-gray-600 bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative border-t border-gray-200 pt-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f3f6f9] px-4 font-bold text-[#0f1c35]">Need more help?</span>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center mt-6">
              <h2 className="text-lg font-bold text-[#0f1c35] mb-2">We are 24/7 available for you!</h2>
              <p className="text-sm text-gray-500 mb-8">Get the help you need from our automated assistant, or contact an agent</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Mail us</p>
                    <p className="text-sm font-semibold text-gray-800">info@packly.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Call us on</p>
                    <p className="text-sm font-semibold text-gray-800">+8809678045555</p>
                    <p className="text-sm font-semibold text-gray-800">+8809678045555</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Reach us</p>
                    <p className="text-sm text-gray-800 leading-relaxed">House# 44, Rd No. 2/A, Dhanmondi,<br/>Dhaka 1209</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
