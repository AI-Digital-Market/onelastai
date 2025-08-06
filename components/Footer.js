import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "AI Tools": [
      { name: "🤖 Chatbots", href: "/tools/chatbots" },
      { name: "🎨 Art Generator", href: "/tools/art" },
      { name: "📝 Content Writer", href: "/tools/content" },
      { name: "📊 Analytics", href: "/tools/analytics" }
    ],
    "Services": [
      { name: "🚀 Custom AI Development", href: "/services/custom" },
      { name: "🎯 AI Consulting", href: "/services/consulting" },
      { name: "⚡ API Integration", href: "/services/integration" },
      { name: "🛠️ Technical Support", href: "/services/support" }
    ],
    "Resources": [
      { name: "📚 Documentation", href: "/docs" },
      { name: "🎓 Tutorials", href: "/tutorials" },
      { name: "📝 Blog", href: "/blog" },
      { name: "🎪 Case Studies", href: "/case-studies" }
    ],
    "Company": [
      { name: "🌟 About Us", href: "/about" },
      { name: "👥 Team", href: "/team" },
      { name: "💼 Careers", href: "/careers" },
      { name: "📧 Contact", href: "/contact" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: "🐙", href: "https://github.com/onelastai" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com/onelastai" },
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com/company/onelastai" },
    { name: "Discord", icon: "💬", href: "https://discord.gg/onelastai" },
    { name: "YouTube", icon: "📺", href: "https://youtube.com/@onelastai" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 relative"
                >
                  <Image
                    src="/onelast-ai-logo.png"
                    alt="One Last AI Logo"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </motion.div>
                <div>
                  <div className="text-white font-bold text-2xl">One Last AI</div>
                  <div className="text-cyan-400 text-sm font-medium">onelastai.com</div>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your ultimate destination for AI-powered solutions. We're building the future 
                of artificial intelligence, one tool at a time.
              </p>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-white font-semibold mb-3">🚀 Stay Updated</h4>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Join 25,000+ subscribers for AI updates & exclusive offers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div 
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} One Last AI (onelastai.com). All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl hover:text-cyan-400 transition-colors duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              🔒 Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              📋 Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              🍪 Cookie Policy
            </Link>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-xs">
            <span className="text-green-400">🔒</span>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-xs">
            <span className="text-blue-400">🛡️</span>
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-xs">
            <span className="text-green-400">⚡</span>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-xs">
            <span className="text-purple-400">⭐</span>
            <span>4.8/5 Rating</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-full text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 z-50"
        title="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}
