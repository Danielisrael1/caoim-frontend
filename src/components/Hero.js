import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      {/* Background Image - Using an overlay to darken the image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/church-interior.jpg')", 
          opacity: 0.5 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative h-full">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <p className="text-sm uppercase mb-2">WELCOME TO OUR CHURCH</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            BECOME A PART OF OUR COMMUNITY
          </h1>
          
          <button className="btn self-start">
            LEARN MORE
          </button>
          
          <p className="mt-8 text-gray-300 text-sm max-w-md">
          The Spirit of the Sovereign Lord is on me,because the Lord has anointed me to proclaim good news to the poor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;