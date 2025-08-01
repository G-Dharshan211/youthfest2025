import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none">
      <div className="container mx-auto px-4 py-6">
        <h1 
          className={`font-bold transition-all duration-700 ease-in-out pointer-events-auto ${
            isScrolled 
              ? 'text-2xl fixed top-4 left-4 bg-[#456882] px-4 py-2 rounded-lg shadow-lg text-[#F9F3EF]' 
              : 'text-6xl md:text-8xl text-center animate-pulse text-[#D2C1B6]'
          }`}
        >
          YOUTH FEST 2025
        </h1>
        {!isScrolled && (
          <div className="text-center mt-4 pointer-events-auto">
            <p className="text-[#77BEF0] text-lg md:text-xl animate-fade-in-up">
            <p className="text-[#F9F3EF] text-lg md:text-xl animate-fade-in-up">
              Join the Ultimate Youth Experience
            </p>
            <div className="mt-6 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#D2C1B6] rounded-full mx-auto">
                <div className="w-1 h-3 bg-[#D2C1B6] rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;