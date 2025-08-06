import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            AI Digital Market
          </motion.h1>
          
          {/* Domain */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-4 text-cyan-300 font-semibold"
          >
            onelastai.com
          </motion.p>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your ultimate destination for AI-powered solutions, tools, and services. 
            Transform your business with cutting-edge artificial intelligence and unlock unprecedented growth.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              🚀 Explore AI Tools
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              📱 Get Mobile App
            </motion.button>
          </motion.div>

          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-16 text-sm"
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-green-400">✅</span>
              <span>500+ AI Tools</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-green-400">✅</span>
              <span>Mobile & Desktop Apps</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-green-400">✅</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-green-400">✅</span>
              <span>Free Trial Available</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
            >
              500+
            </motion.div>
            <div className="text-gray-300 text-sm md:text-base">AI Tools</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-3xl md:text-4xl font-bold text-purple-400 mb-2"
            >
              25K+
            </motion.div>
            <div className="text-gray-300 text-sm md:text-base">Happy Users</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
            >
              50+
            </motion.div>
            <div className="text-gray-300 text-sm md:text-base">Categories</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-3xl md:text-4xl font-bold text-green-400 mb-2"
            >
              24/7
            </motion.div>
            <div className="text-gray-300 text-sm md:text-base">Support</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
