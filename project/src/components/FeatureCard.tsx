import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../types/Feature';

interface FeatureCardProps {
  feature: Feature;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      variants={item}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
}