import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AIModulesSection from '../components/AIModulesSection';

// One Last AI - Revolutionary AI Agents Platform
export default function Home() {
  const [currentAgent, setCurrentAgent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentAgent((prev) => (prev + 1) % aiAgents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const aiAgents = [
    { name: 'Sonnet', domain: 'sonnet.onelastai.com', desc: 'Poetry & Creative Writing', icon: '✍️' },
    { name: 'Vision', domain: 'vision.onelastai.com', desc: 'Image Generation & Analysis', icon: '👁️' },
    { name: 'Logic', domain: 'logic.onelastai.com', desc: 'Problem Solving & Analytics', icon: '🧠' },
    { name: 'Voice', domain: 'voice.onelastai.com', desc: 'Speech & Audio Processing', icon: '🎙️' },
    { name: 'Code', domain: 'code.onelastai.com', desc: 'Programming & Development', icon: '💻' },
    { name: 'Data', domain: 'data.onelastai.com', desc: 'Big Data & Insights', icon: '📊' }
  ];

  const scrollToModules = () => {
    const modulesSection = document.querySelector('#modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>One Last AI - Revolutionary AI Agents Army | onelastai.com</title>
        <meta name="description" content="The ultimate AI agents platform that will challenge the global marketplace. Deploy intelligent agents for every task." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="One Last AI - Revolutionary AI Agents Army" />
        <meta property="og:description" content="The platform that will shock the global AI marketplace" />
        <meta property="og:url" content="https://onelastai.com" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "One Last AI",
              "description": "Revolutionary AI agents platform",
              "url": "https://onelastai.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, iOS, Android, Windows, macOS"
            })
          }}
        />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-gray-900">
        <ParticleBackground />
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
            {/* Platform Name at Top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-4">
                <span className="gradient-text">One Last AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                The revolutionary AI agents platform that will change everything
              </p>
            </motion.div>

            {/* AI Agent Showcase Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-2xl mx-auto mb-12"
            >
              <div className="glass-card p-8 text-center">
                <div className="text-sm text-gray-400 mb-4">Currently Featuring</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAgent}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                  >
                    <div className="text-6xl">{aiAgents[currentAgent].icon}</div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {aiAgents[currentAgent].name}
                      </h3>
                      <p className="text-purple-400 text-lg mb-1">
                        {aiAgents[currentAgent].domain}
                      </p>
                      <p className="text-gray-300">
                        {aiAgents[currentAgent].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToModules}
                className="btn-primary text-lg px-8 py-4"
              >
                Explore AI Agents
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
            >
              {[
                { number: '6+', label: 'AI Agents' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
                { number: '∞', label: 'Possibilities' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* AI Modules Section */}
          <AIModulesSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
