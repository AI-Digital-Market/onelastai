import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Creative', 'Business', 'Communication', 'Analytics', 'Audio', 'Video'];

  const services = [
    {
      icon: "🤖",
      title: "AI Chatbots",
      description: "Intelligent conversational AI for customer support and engagement",
      category: "Communication",
      price: "From $29/month",
      features: ["24/7 Support", "Multi-language", "Custom Training"],
      rating: 4.8,
      users: "10K+"
    },
    {
      icon: "🎨",
      title: "AI Art Generator",
      description: "Create stunning artwork, logos, and graphics with AI",
      category: "Creative",
      price: "From $19/month",
      features: ["HD Quality", "Multiple Styles", "Commercial License"],
      rating: 4.9,
      users: "15K+"
    },
    {
      icon: "📝",
      title: "Content Writing AI",
      description: "Generate high-quality content, blogs, and copy in seconds",
      category: "Business",
      price: "From $39/month",
      features: ["SEO Optimized", "50+ Templates", "Plagiarism Check"],
      rating: 4.7,
      users: "8K+"
    },
    {
      icon: "📊",
      title: "Data Analytics AI",
      description: "Advanced data analysis, insights, and predictive modeling",
      category: "Analytics",
      price: "From $99/month",
      features: ["Real-time Analytics", "Custom Dashboards", "API Access"],
      rating: 4.8,
      users: "5K+"
    },
    {
      icon: "🎵",
      title: "AI Music Composer",
      description: "Create original music tracks and soundscapes",
      category: "Audio",
      price: "From $49/month",
      features: ["Royalty-free", "Multiple Genres", "Stem Separation"],
      rating: 4.6,
      users: "12K+"
    },
    {
      icon: "🎬",
      title: "Video AI Editor",
      description: "Professional video editing with AI-powered automation",
      category: "Video",
      price: "From $79/month",
      features: ["Auto-editing", "4K Support", "Voice Clone"],
      rating: 4.9,
      users: "7K+"
    },
    {
      icon: "🔍",
      title: "AI Search Engine",
      description: "Intelligent search with context understanding",
      category: "Business",
      price: "From $25/month",
      features: ["Semantic Search", "Multi-source", "Real-time"],
      rating: 4.5,
      users: "6K+"
    },
    {
      icon: "💬",
      title: "Language Translator",
      description: "Real-time translation for 100+ languages",
      category: "Communication",
      price: "From $15/month",
      features: ["Voice Translation", "Document OCR", "Context Aware"],
      rating: 4.7,
      users: "20K+"
    },
    {
      icon: "🧠",
      title: "ML Model Builder",
      description: "Build custom machine learning models without coding",
      category: "Business",
      price: "From $149/month",
      features: ["No-code Interface", "Auto ML", "Model Deployment"],
      rating: 4.8,
      users: "3K+"
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Services & Tools
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Discover powerful AI solutions for every need. From creative tools to business automation.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-purple-500 transition-all duration-300 group"
            >
              {/* Service Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-2 group-hover:animate-bounce"
                >
                  {service.icon}
                </motion.div>
                <span className="bg-purple-600 text-xs px-3 py-1 rounded-full text-white font-medium">
                  {service.category}
                </span>
              </div>

              {/* Service Title & Rating */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-300 text-sm">{service.rating}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-600 text-xs px-2 py-1 rounded text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Users Count */}
              <div className="flex items-center mb-4 text-sm text-gray-400">
                <span className="mr-2">👥</span>
                <span>{service.users} users</span>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold text-lg">
                  {service.price}
                </span>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  Try Now
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-400 mb-6">
            Contact us for custom AI solutions tailored to your specific needs
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg text-white font-bold hover:shadow-xl transition-all duration-300"
          >
            🚀 Request Custom Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
