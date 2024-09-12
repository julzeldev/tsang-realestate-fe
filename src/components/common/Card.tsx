import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  linkText: string;
  linkHref: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, linkText, linkHref }) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[400px]"
        style={{background: '#fff'}}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-500 text-center mb-4">{description}</p>
      <a href={linkHref} className="text-blue-500 hover:text-blue-700 transition-colors">
        {linkText} &rarr;
      </a>
    </div>
  );
};

export default Card;
