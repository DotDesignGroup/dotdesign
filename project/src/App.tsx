import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import FeatureGrid from './components/FeatureGrid';
import PricingCard from './components/PricingCard';
import ContactForm from './components/ContactForm';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const features = [
    {
      title: 'Based in Genk',
      description: 'Local expertise with global reach',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Mobile Compatible',
      description: 'Responsive designs that work on all devices',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Custom Features',
      description: 'Tailored solutions for your specific needs',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Hosting Services',
      description: 'Reliable and secure web hosting',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Support Line',
      description: '24/7 dedicated customer support',
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Custom Themes',
      description: 'Unique designs that match your brand',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Friendly Service',
      description: 'Personal approach to every project',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Fast & Reliable',
      description: 'Lightning-fast performance guaranteed',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold leading-tight mb-6">
            We Create
            <br />
            <span className="text-indigo-600">Beautiful Websites</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your online presence with our custom web design services.
            We build beautiful, responsive websites that drive results.
          </p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Features
          </motion.h2>
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Standard"
              price={49}
              features={[
                'Custom Website Design',
                'Mobile Responsive',
                'Basic SEO Setup',
                'Website Hosting',
                '5 Email Accounts',
                'Basic Analytics'
              ]}
              hasSupport={false}
            />
            <PricingCard
              title="Premium"
              price={99}
              features={[
                'Everything in Standard',
                '24/7 Priority Support',
                'Advanced SEO Tools',
                'Performance Optimization',
                'Security Monitoring',
                'Monthly Maintenance'
              ]}
              hasSupport={true}
            />
          </div>
          <p className="text-center mt-8 text-gray-600">
            All plans include hosting services. Prices are monthly and include all updates and maintenance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your project and get a free consultation.
          </p>
          {!showContactForm ? (
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          ) : (
            <ContactForm />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;