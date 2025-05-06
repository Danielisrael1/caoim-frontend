import React from 'react';
import { UserCircle, Users, Heart } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-amber-50 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="bg-amber-200 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <UserCircle size={24} />,
      title: "ABOUT US",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Users size={24} />,
      title: "GET INVOLVED",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <Heart size={24} />,
      title: "GIVING BACK",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;