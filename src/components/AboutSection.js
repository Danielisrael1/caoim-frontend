import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 uppercase">Love and Compassion</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          <div className="flex justify-center">
            <button className="btn">JOIN OUR COMMUNITY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;