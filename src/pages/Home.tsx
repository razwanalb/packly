import { ChevronRight, ChevronLeft, Star, Package, Store } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const categories = [
  { name: 'Automotive', img: 'https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20251021_184454_b45a702d-9c8a-4fe7-9317-e1dfe53323b6.jpg' },
  { name: 'Books', img: 'https://i.ibb.co/YBRXHYgd/books.jpg' },
  { name: 'Electronic Accessories', img: 'https://i.ibb.co/DDbt04WX/Electronic-Accessories.png' },
  { name: 'Electronics Device', img: 'https://i.ibb.co/1YtvYGVP/Electronics-Device.png' },
  { name: 'Fishing & Farming Accessories', img: 'https://i.ibb.co/9HQtChJV/Fishing-Farming-Accessories.jpg' },
  { name: 'Gifts', img: 'https://i.ibb.co/20BrpLpT/Gifts.webp' },
  { name: 'Groceries', img: 'https://i.ibb.co/SwGkPTzP/Groceries.png' },
  { name: 'Health & Beauty', img: 'https://i.ibb.co/hx6zjY69/Health-Beauty.png' },
  { name: 'Home & Kitchen', img: 'https://i.ibb.co/390hVkLx/Home-Kitchen.jpg' },
  { name: 'Home & Lifestyle', img: 'https://i.ibb.co/d4W63MFX/Home-Lifestyle.png' },
  { name: 'Livestock & Animals', img: 'https://i.ibb.co/TxNvqGm0/Livestock-Animals.jpg' },
  { name: "Men's & Boys' Fashion", img: 'https://i.ibb.co/YFGLQSS5/Men-s-Boys-Fashion.png' },
  { name: 'Mother & Baby', img: 'https://i.ibb.co/21FgCWbX/Mother-Baby.png' },
  { name: 'Organic Fertilizer', img: 'https://i.ibb.co/TBVZBrz5/Organic-Fertilizer.jpg' },
  { name: 'Packaging & Boxes', img: 'https://i.ibb.co/0yDPMXfN/Packaging-Boxes.png' },
  { name: 'Sports & Out Doors', img: 'https://i.ibb.co/nVZYPnm/Sports-Out-Doors.png' },
  { name: 'TV & Home Appliances', img: 'https://i.ibb.co/Txjb6t8C/TV-Home-Appliances.png' },
  { name: 'Watches, Bags, Jewellery', img: 'https://i.ibb.co/B5ryrfSN/Watches-Bags-Jewellery.png' },
  { name: 'Water', img: 'https://i.ibb.co/bgnjpMyg/Water.png' },
  { name: "Women's & Girls' Fashion", img: 'https://i.ibb.co/N2QzZYVJ/Womens-Girls-Fashion.png' },
];

const featureBannerImages = [
  { name: 'Flash Sale', img: 'https://i.ibb.co.com/bZgtXQZ/Flash-Sale.jpg' },
  { name: 'Free Shipping', img: 'https://i.ibb.co.com/QtRhJYf/Free-Shipping.png' },
  { name: 'Baisakhi Blast', img: 'https://i.ibb.co.com/cSrw2qvq/Baisakhi-Blast.png' },
  { name: 'Summer Rush', img: 'https://i.ibb.co.com/qFyytQw5/20260407-183851-16bbcf9f-dbbd-475c-936b-d6caf60618c7.jpg' },
  { name: 'Flash Sale 2', img: 'https://i.ibb.co.com/spJ84vQY/Flash-Sale.jpg' },
];

const heroImages = [
  'https://i.ibb.co.com/VYssGPZT/1.jpg',
  'https://i.ibb.co.com/23WxHtSY/2.jpg',
  'https://i.ibb.co.com/93HcXNtk/3.jpg'
];

const products = [
  { id: 1, title: 'Mini Turbo Portable Fan - Safety Leaf Design', price: '890', oldPrice: '1020', rating: 0, sold: '1 sold', img: 'https://i.ibb.co/QBNW0vB/0cb43f8a-4daa-4fb1-905b-cacfa01a4f64.jpg', discount: '-28%', isNew: false },
  { id: 2, title: 'Handheld portable hand fan ACEBASS', price: '770', oldPrice: '1100', rating: 0, sold: '0 sold', img: 'https://i.ibb.co/Q37JZmq9/01c15a45-26e5-4073-8838-5452b53679fb.jpg', discount: '-35%', isNew: true },
  { id: 3, title: 'DP Rechargeable Portable Fan DP-7640', price: '990', oldPrice: '1100', rating: 0, sold: '0 sold', img: 'https://i.ibb.co/C5grZT2G/1ad0c331-b092-4086-b515-acae5c1af231.jpg', discount: '-17%', isNew: true },
  { id: 4, title: 'High Speed Turbo Fan Rechargeable', price: '890', oldPrice: '950', rating: 0, sold: '1 sold', img: 'https://i.ibb.co/KzVBFyWF/1c1ced8d-10b6-45ec-bc27-28cae82423ca.jpg', discount: '-6%', isNew: false },
  { id: 5, title: 'LR-2018 USB Rechargeable Mini Desk Fan', price: '899', oldPrice: '1599', rating: 0, sold: '3 sold', img: 'https://i.ibb.co/p6WZCqsW/1d129ba4-51f3-4bd7-97de-0120a34dcae4.jpg', discount: '-45%', isNew: false },
  { id: 6, title: 'Retro Camping Lamp 360 Luminous', price: '599', oldPrice: '650', rating: 0, sold: '2 sold', img: 'https://i.ibb.co/23htWVLb/2afb954c-92f8-4044-8f43-59674e9adece.jpg', discount: '-7%', isNew: false },
  { id: 7, title: 'Hengfang 11 IN 1 Makeup Box Set', price: '1299', oldPrice: '1699', rating: 0, sold: '0 sold', img: 'https://i.ibb.co/kVD020CT/5f52666f-34a8-4bf3-bb3f-cf39d48d9bc8.jpg', discount: '-23%', isNew: true },
  { id: 8, title: 'Product 8', price: '450', oldPrice: '500', rating: 0, sold: '5 sold', img: 'https://i.ibb.co/sdbsMztg/6bace0ec-a6a4-478b-b40e-a10f23935f3d.png', discount: '-10%', isNew: true },
  { id: 9, title: 'Product 9', price: '300', oldPrice: '400', rating: 0, sold: '10 sold', img: 'https://i.ibb.co/270LmMTQ/6c32f3e0-8db6-4fcb-9467-6d0ef1a3d301.png', discount: '-25%', isNew: false },
  { id: 10, title: 'Product 10', price: '550', oldPrice: '600', rating: 0, sold: '12 sold', img: 'https://i.ibb.co/1tkH14QH/60bdbef8-c386-4a44-b613-5d443cc5f066.jpg', discount: '-8%', isNew: false },
  { id: 11, title: 'Product 11', price: '100', oldPrice: '150', rating: 0, sold: '2 sold', img: 'https://i.ibb.co/cK06dnGK/979737cb-0d6e-48bd-841d-0b5185d042cf.jpg', discount: '-33%', isNew: true },
  { id: 12, title: 'Product 12', price: '200', oldPrice: '250', rating: 5, sold: '8 sold', img: 'https://i.ibb.co/QFMj2kHn/b92331be-a5b4-4d7c-bfc4-624d16ccc835.jpg', discount: '-20%', isNew: false },
  { id: 13, title: 'Product 13', price: '150', oldPrice: '200', rating: 4, sold: '4 sold', img: 'https://i.ibb.co/yc1mQnrN/c1fcb51d-54fc-46cb-969e-cc3b3df41335.jpg', discount: '-25%', isNew: false },
  { id: 14, title: 'Product 14', price: '600', oldPrice: '800', rating: 3, sold: '6 sold', img: 'https://i.ibb.co/9HMj6Gtt/c39ec93f-f650-40fd-b314-74242147b758.png', discount: '-25%', isNew: true },
];

const shops = [
  { name: 'Canvas Hur', img: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '9 Followers' },
  { name: 'Janata...', img: 'https://images.unsplash.com/photo-1528698827591-e192ddacfc8d?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '22 Followers' },
  { name: 'DILKHOOSH', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '13 Followers' },
  { name: 'PremiumTech', img: 'https://images.unsplash.com/photo-1550029402-226115b7c528?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '14 Followers' },
  { name: 'LUKSI', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '10 Followers' },
  { name: 'Venus Leather', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '111 Followers' },
  { name: 'HF Food Service', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '19 Followers' },
  { name: 'KenakataBD', img: 'https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '17 Followers' },
  { name: 'Nusaybah fashion', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=60&w=100', rating: 0.0, followers: '15 Followers' },
];

const shopReels = [
  { shopName: 'Mybuskat', img: 'https://images.unsplash.com/photo-1582214400329-875b0785c490?auto=format&fit=crop&q=80&w=300&h=450', logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=64' },
  { shopName: 'AZMA Health Solution', img: 'https://images.unsplash.com/photo-1584050269389-c419cc5d9472?auto=format&fit=crop&q=80&w=300&h=450', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=60&w=64' },
  { shopName: 'Ishak Mart', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=450', logo: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=60&w=64' },
  { shopName: 'MirGadget Store', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300&h=450', logo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=60&w=64' },
  { shopName: 'Awesome creator', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=300&h=450', logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=64' },
];

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const categoriesScrollRef = useRef<HTMLDivElement>(null);
  const featuresScrollRef = useRef<HTMLDivElement>(null);
  const freeShippingScrollRef = useRef<HTMLDivElement>(null);

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-play free shipping slider
  useEffect(() => {
    const timer = setInterval(() => {
      if (freeShippingScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = freeShippingScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          freeShippingScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          freeShippingScrollRef.current.scrollBy({ left: 216, behavior: 'smooth' }); // 200px width + 16px gap
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Helper for broken images to keep layout pretty while user uploads files
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackText: string) => {
    e.currentTarget.src = `https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
  };

  return (
    <div className="bg-[#f3f6f9] pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-2">
          <div className="lg:w-3/4 w-full relative rounded-lg overflow-hidden aspect-[1024/340] group">
            
            <div 
              className="w-full h-full flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
            >
              {heroImages.map((src, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={src} 
                    alt={`Hero Banner ${index + 1}`} 
                    className="w-full h-full object-cover" 
                    onError={(e) => handleImageError(e, `Hero Slide ${index + 1}`)}
                  />
                  {/* Fallback overlay in case image doesn't load immediately */}
                  <div className="absolute inset-0 bg-black/10 z-0"></div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button 
              onClick={prevHeroSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextHeroSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${currentHeroSlide === idx ? 'w-6 bg-[#15c994]' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Download App Side */}
          <div className="lg:w-1/4 bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="font-bold text-[#0f1c35] mb-4 text-center">Download the App now!</h3>
            <div className="flex flex-col gap-3 mb-6 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 object-contain w-32 cursor-pointer"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 object-contain w-32 cursor-pointer"/>
            </div>
            <div className="flex items-center gap-3 justify-center border-t border-gray-100 pt-4">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://packly.com/app" alt="QR Code" className="w-14 h-14" />
              <div className="text-xs text-[#0f1c35] leading-tight">
                <p>Scan the</p>
                <p className="font-bold whitespace-nowrap">QR CODE</p>
                <p className="font-bold">NOW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills (2nd Slider with Images) */}
        <div className="relative group">
          <button 
            onClick={() => scrollLeft(featuresScrollRef)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow hover:text-[#15c994] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div ref={featuresScrollRef} className="flex gap-4 overflow-x-auto pb-4 pt-2 hide-scrollbar snap-x relative items-center scroll-smooth">
            {featureBannerImages.map((feature, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="flex-none w-[280px] sm:w-[320px] h-auto min-h-[60px] sm:min-h-[90px] bg-white rounded-xl flex items-center justify-between px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 gap-2 sm:gap-3 md:gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#15c994]/50 border border-gray-100 snap-start"
              >
                <div className="flex-1 min-w-0 z-0">
                  <div className="relative inline-block">
                    <span className="cursor-pointer text-xs sm:text-sm md:text-lg lg:text-[20px] font-medium text-gray-900">{feature.name}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] md:text-[14px] text-gray-600 mt-1 line-clamp-1"></p>
                </div>
                <figure className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] relative z-0">
                  <img 
                    alt={feature.name} 
                    className="object-contain w-full h-full absolute inset-0 text-transparent pointer-events-none" 
                    src={feature.img} 
                    onError={(e) => handleImageError(e, feature.name)}
                  />
                </figure>
              </a>
            ))}
          </div>

          <button 
            onClick={() => scrollRight(featuresScrollRef)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 shadow hover:text-[#15c994] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Flash Sale */}
        <div 
          className="items-center rounded-lg justify-between bg-no-repeat bg-center bg-cover sm:mr-0 p-3 md:px-4 md:py-4 lg:px-5 lg:py-8 bg-white relative overflow-hidden"
          style={{ backgroundImage: 'url("https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20250917_014252_a4c4682a-a2c8-4b6f-82db-a66e8610994d.gif")' }}
        >
          <div className="flex items-center justify-between gap-2 pb-4 sm:pb-3 md:pb-4 relative z-10">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
              <img alt="icon" width="32" height="32" className="w-6 h-6 md:w-8 md:h-8" src="https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20250916_131511_b747ae72-fb08-40a1-a313-1ac698433a6a.svg" />
              <h1 className="text-white font-bold text-base md:text-lg lg:text-3xl">Flash Sale</h1>
              <div className="ml-2">
                <div className="text-white text-sm font-medium">Flash sale has ended</div>
              </div>
            </div>
            <a className="text-white hover:bg-white/10 text-xs sm:text-sm font-normal md:font-medium md:text-base md:px-3 lg:px-4 px-2 py-[3px] border border-white rounded-md whitespace-nowrap transition-colors cursor-pointer">See All</a>
          </div>
          <button className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-500 shadow hover:text-[#15c994]" onClick={(e) => { e.currentTarget.nextElementSibling?.scrollBy({ left: -300, behavior: 'smooth' }); }}>
            <ChevronLeft size={18} />
          </button>
          <div className="flex overflow-x-auto hide-scrollbar gap-3 w-full pb-2 snap-x relative z-10 scroll-smooth">
               {products.map(product => (
                  <div className="w-[140px] md:w-[180px] xl:w-[220px] shrink-0 snap-start" key={product.id}>
                    <ProductCard product={product} />
                  </div>
               ))}
          </div>
          <button className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-500 shadow hover:text-[#15c994]" onClick={(e) => { e.currentTarget.previousElementSibling?.scrollBy({ left: 300, behavior: 'smooth' }); }}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Popular Categories */}
        <div className="bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 relative group overflow-hidden mt-4 pb-4">
           <h2 className="text-lg md:text-xl font-bold text-[#0f1c35] p-4 md:p-5 border-b border-gray-100">Popular Categories</h2>
           <div className="relative flex items-center mt-4">
              <button 
                onClick={() => {
                   if (categoriesScrollRef.current) categoriesScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="hidden md:flex absolute left-4 z-20 w-10 h-10 bg-white border border-gray-200 shadow-md rounded-full items-center justify-center text-gray-500 hover:text-[#15c994] -translate-y-4"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div 
                ref={categoriesScrollRef} 
                className="grid grid-rows-2 auto-cols-[85px] sm:auto-cols-[100px] md:auto-cols-[120px] grid-flow-col gap-x-2 sm:gap-x-4 gap-y-6 overflow-x-auto hide-scrollbar snap-x scroll-smooth pb-4 px-4 w-full"
              >
                 {categories.map((cat, i) => (
                   <a key={i} href="#" className="flex flex-col items-center gap-2 w-full cursor-pointer group/cat snap-start">
                      <figure className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden grid place-items-center bg-[#f8f9fa] p-2 md:p-3 group-hover/cat:border-2 group-hover/cat:border-[#15c994]/30 shadow-sm border border-transparent transition-all">
                        <div className="w-full h-full relative flex items-center justify-center">
                         <img 
                           src={cat.img} 
                           alt={cat.name} 
                           className="object-contain max-w-full max-h-full mix-blend-multiply group-hover/cat:scale-110 transition-transform duration-300 pointer-events-none" 
                           onError={(e) => handleImageError(e, cat.name.substring(0,2).toUpperCase())}
                         />
                        </div>
                      </figure>
                      <figcaption className="text-[11px] sm:text-xs md:text-sm text-center text-gray-700 font-medium group-hover/cat:text-[#15c994] transition-colors leading-[1.2] line-clamp-2 px-1 w-full">{cat.name}</figcaption>
                   </a>
                 ))}
              </div>
              
              <button 
                onClick={() => {
                   if (categoriesScrollRef.current) categoriesScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="hidden md:flex absolute right-4 z-20 w-10 h-10 bg-white border border-gray-200 shadow-md rounded-full items-center justify-center text-gray-500 hover:text-[#15c994] -translate-y-4"
              >
                <ChevronRight size={20} />
              </button>
           </div>
        </div>

        {/* Middle Banner Ad */}
        <div className="w-full relative rounded-lg overflow-hidden shadow-sm border border-emerald-100">
           <img src="https://i.ibb.co/LXpSBBVp/img.jpg" alt="Middle Banner" className="w-full h-auto max-h-[250px] object-cover" />
        </div>

        {/* Free Shipping Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                 <Package size={24} className="text-[#15c994]" />
                 <h2 className="text-xl font-medium text-[#0f1c35]">Free Shipping</h2>
              </div>
              <button className="border border-[#15c994] text-[#15c994] px-4 py-1.5 rounded-sm text-sm font-medium hover:bg-[#15c994]/5 transition-colors">See All</button>
           </div>
           <div className="relative flex items-center">
             <button className="absolute left-0 z-10 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#15c994] -ml-5">
                <ChevronLeft size={20} />
              </button>
             <div className="flex overflow-x-auto hide-scrollbar gap-4 w-full px-2 pb-2 snap-x">
                 {products.map(product => (
                    <div className="w-[200px] shrink-0 snap-start" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                 ))}
             </div>
             <button className="absolute right-0 z-10 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#15c994] -mr-5">
                <ChevronRight size={20} />
              </button>
           </div>
        </div>

        {/* Popular Shops */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hidden">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                 <Store size={24} className="text-[#15c994]" />
                 <h2 className="text-xl font-medium text-[#0f1c35]">Popular Shops</h2>
              </div>
              <button className="border border-[#15c994] text-[#15c994] px-4 py-1.5 rounded-sm text-sm font-medium hover:bg-[#15c994]/5 transition-colors">See All</button>
           </div>
           
           <div className="flex overflow-x-auto hide-scrollbar gap-8 w-full py-2 snap-x justify-between">
               {shops.map((shop, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-28 shrink-0 cursor-pointer group snap-start">
                    <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-0.5 group-hover:shadow-md transition-shadow">
                      <img src={shop.img} alt={shop.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 mb-0.5">
                         <Star size={10} className="fill-yellow-400 stroke-yellow-400" />
                         {shop.rating.toFixed(2)}
                      </div>
                      <span className="text-xs text-gray-800 font-medium leading-tight line-clamp-1 group-hover:text-[#15c994] transition-colors">{shop.name}</span>
                      <span className="text-[10px] text-gray-500 mt-1 block font-medium">{shop.followers}</span>
                    </div>
                  </div>
               ))}
           </div>
        </div>

        {/* Shop Reel Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hidden">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs">▶</div>
                 <h2 className="text-xl font-medium text-[#0f1c35]">Shop Reel</h2>
              </div>
           </div>
           
           <div className="relative flex items-center">
              <button className="absolute left-0 -ml-4 z-10 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#15c994]">
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex overflow-x-auto hide-scrollbar gap-4 w-full px-2 snap-x">
                 {shopReels.map((reel, i) => (
                   <div key={i} className="relative w-[220px] h-[320px] rounded-lg overflow-hidden shrink-0 snap-start cursor-pointer group">
                      <img src={reel.img} alt={reel.shopName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>
                      
                      <div className="absolute top-4 left-4">
                         <img src={reel.logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                         <span className="text-sm font-medium line-clamp-1">{reel.shopName}</span>
                         <ChevronRight size={16} />
                      </div>
                   </div>
                 ))}
              </div>
              
              <button className="absolute right-0 -mr-4 z-10 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-md hover:text-[#15c994]">
                <ChevronRight size={20} />
              </button>
           </div>
        </div>

        {/* For You Section (Grid) */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
           <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">💖</span>
              <h2 className="text-xl font-medium text-[#0f1c35]">For You</h2>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
               {[...products, ...products, ...products].slice(0,18).map((product, i) => (
                  <ProductCard key={i} product={product} />
               ))}
           </div>
           
           <div className="mt-8 flex justify-center">
              <button className="bg-[#15c994] hover:bg-emerald-500 text-white px-8 py-2.5 rounded shadow-sm text-sm font-medium transition-colors">
                Load More
              </button>
           </div>
        </div>
        
      </div>
    </div>
  );
}

// Reusable Product Card Component
function ProductCard({ product }: { product: any; key?: React.Key }) {
  return (
    <a href="#" className="h-full block bg-white overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out group border border-gray-200 hover:border-[#15c994] rounded-lg">
      <div className="relative rounded-tl-lg rounded-tr-lg block">
        <figure className="aspect-square overflow-hidden">
          <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out" />
        </figure>
      </div>
      <div className="flex justify-between flex-col gap-1">
        <div className="hidden gap-1 md:flex flex-col md:gap-2 mt-3 mb-1">
          <div className="flex justify-between px-3">
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-yellow-400 stroke-yellow-400" />
              <span className="text-[12px] text-gray-500">{product.rating} (0)</span>
            </div>
            <div className="flex items-center leading-3">
              {product.isNew ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M9.53268 6.6445C6.41414 7.15733 5.85973 7.80876 5.44392 11.6064C5.43006 11.7312 5.24988 11.7312 5.23602 11.6064C4.82022 7.80876 4.26581 7.17119 1.14727 6.6445C1.02253 6.63064 1.02253 6.45046 1.14727 6.4366C4.26581 5.92377 4.82022 5.28621 5.23602 1.48851C5.24988 1.36377 5.43006 1.36377 5.44392 1.48851C5.85973 5.28621 6.41414 5.90991 9.53268 6.4366C9.64356 6.45046 9.64356 6.61678 9.53268 6.6445Z" fill="#15c994"></path>
                    <path d="M10.8637 2.26467C9.89344 2.45871 9.61624 2.7775 9.44992 3.91403C9.43606 4.03877 9.25588 4.03877 9.24202 3.91403C9.07569 2.7775 8.79849 2.45871 7.82828 2.25081C7.7174 2.22309 7.7174 2.07063 7.82828 2.04291C8.78463 1.84886 9.07569 1.53008 9.24202 0.393544C9.25588 0.268802 9.43606 0.268802 9.44992 0.393544C9.61624 1.53008 9.89344 1.84886 10.8637 2.05677C10.9745 2.08449 10.9745 2.25081 10.8637 2.26467Z" fill="#15c994"></path>
                  </svg>
                  <span className="text-[#15c994] font-semibold text-xs ">New</span>
                </>
              ) : (
                <span className="text-[10px] text-gray-700 leading-3 font-semibold">{product.sold}</span>
              )}
            </div>
          </div>
          <div className="px-3">
             <h6 className="text-gray-900 text-xs xl:text-base font-normal line-clamp-1">{product.title}</h6>
             <div className="text-[11px] text-gray-400 line-through mt-0.5">৳{product.oldPrice}</div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#15c994]/10 rounded-bl-lg rounded-br-lg h-8 md:h-10 mt-1">
          <div className="pl-3 flex items-center">
            <h5 className="text-[#15c994] text-base font-semibold md:text-lg md:font-medium">৳{product.price}</h5>
          </div>
          {product.discount && (
            <div className="bg-[#15c994] h-full pl-3 pr-2 py-3 rounded-br-lg rounded-tl-full flex items-center relative overflow-hidden">
               <span className="text-white text-[12px] font-medium md:text-base md:font-normal">{product.discount}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
