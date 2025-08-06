import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 relative">
              <Image
                src="/onelast-ai-logo.png"
                alt="One Last AI Logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
            </div>
            <div>
              <div className="text-white font-bold text-xl">One Last AI</div>
              <div className="text-cyan-400 text-xs font-medium">onelastai.com</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/tools" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              🛠️ AI Tools
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              ⚡ Services
            </Link>
            <Link href="/test-agents" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              🧪 Test AI
            </Link>
            <Link href="/github-showcase" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              🚀 GitHub
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              💰 Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              📝 Blog
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              🎧 Support
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-gray-300">Welcome, {user.name}!</div>
                <button 
                  onClick={() => setUser(null)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors font-medium">
                  🔑 Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  🚀 Sign Up Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-gray-800"
        >
          <div className="py-4 space-y-4">
            <Link 
              href="/tools" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🛠️ AI Tools
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ⚡ Services
            </Link>
            <Link 
              href="/test-agents" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🧪 Test AI
            </Link>
            <Link 
              href="/github-showcase" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🚀 GitHub
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              💰 Pricing
            </Link>
            <Link 
              href="/blog" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              📝 Blog
            </Link>
            <Link 
              href="/support" 
              className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🎧 Support
            </Link>
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <Link 
                href="/login" 
                className="block text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                🔑 Login
              </Link>
              <Link 
                href="/signup" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-3 rounded-lg text-white font-semibold text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                🚀 Sign Up Free
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
