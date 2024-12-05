import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  hasSupport: boolean;
}

export default function PricingCard({ title, price, features, hasSupport }: PricingCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">€{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
}