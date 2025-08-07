import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { HeroSection } from '../components/HeroSection';
import { ModulesSection } from '../components/ModulesSection';

// One Last AI - Revolutionary AI Platform with Modern UI
export default function Home() {
  const [selectedModule, setSelectedModule] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToModules = () => {
    const modulesSection = document.querySelector('#modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModuleSelect = (moduleId) => {
    setSelectedModule(moduleId);
    // Add any additional logic for module selection
  };

  return (
    <>
      <Head>
        <title>One Last AI - Advanced AI Platform for Emotional Intelligence | onelastai.com</title>
        <meta name="description" content="Revolutionary AI platform featuring Mood Mirror AI and specialized agents for emotional intelligence, mental wellness, and advanced AI capabilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/onelast-ai-logo.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content="One Last AI - Advanced AI Platform" />
        <meta property="og:description" content="Mood Mirror AI and specialized agents for emotional intelligence and mental wellness" />
        <meta property="og:url" content="https://onelastai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://onelastai.com/onelast-ai-logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="One Last AI - Advanced AI Platform" />
        <meta name="twitter:description" content="Revolutionary AI platform for emotional intelligence and mental wellness" />
        <meta name="twitter:image" content="https://onelastai.com/onelast-ai-logo.png" />
        
        {/* SEO */}
        <meta name="keywords" content="AI, artificial intelligence, emotional intelligence, mood analysis, mental wellness, AI agents, machine learning, neural networks" />
        <meta name="author" content="One Last AI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://onelastai.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <ParticleBackground />
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection onExploreModules={scrollToModules} />
          
          {/* Modules Section */}
          <div id="modules-section">
            <ModulesSection 
              selectedModule={selectedModule}
              onModuleSelect={handleModuleSelect}
            />
          </div>

          {/* Additional Features Section */}
          <section className="py-20 px-4 bg-white dark:bg-slate-800">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose One Last AI?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Our platform combines cutting-edge AI technology with deep understanding of human emotions and behavior.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🧠',
                    title: 'Advanced AI Technology',
                    description: 'State-of-the-art machine learning algorithms powered by the latest in AI research and neural network architectures.'
                  },
                  {
                    icon: '🛡️',
                    title: 'Privacy & Security',
                    description: 'Enterprise-grade security with end-to-end encryption and complete data privacy protection for all your interactions.'
                  },
                  {
                    icon: '⚡',
                    title: 'Real-time Processing',
                    description: 'Lightning-fast AI responses with real-time analysis and insights delivered instantly across all our modules.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your AI Experience?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of users who have already discovered the power of emotional AI and advanced intelligence.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Get Started Free
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    View Documentation
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
