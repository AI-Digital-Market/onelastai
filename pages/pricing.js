import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for individuals and small teams getting started with AI",
      features: [
        "5 AI Tools Access",
        "1,000 API Calls/month",
        "Basic Support",
        "Community Access",
        "Basic Analytics"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: { monthly: 99, yearly: 990 },
      description: "For growing businesses that need more power and flexibility",
      features: [
        "50 AI Tools Access",
        "10,000 API Calls/month",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Team Collaboration",
        "API Access"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: { monthly: 299, yearly: 2990 },
      description: "For large organizations with advanced AI requirements",
      features: [
        "Unlimited AI Tools",
        "100,000 API Calls/month",
        "24/7 Dedicated Support",
        "Custom AI Models",
        "White-label Solutions",
        "Advanced Security",
        "SLA Guarantee",
        "On-premise Deployment"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing Plans - AI Digital Market | onelastai.com</title>
        <meta name="description" content="Choose the perfect AI plan for your needs. Flexible pricing for individuals, teams, and enterprises. Start your AI journey today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <Header />
        
        <main className="pt-20 pb-16">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center mb-16"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Choose the perfect plan for your AI needs. All plans include access to our core features
              with no hidden fees. Upgrade or downgrade anytime.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center mb-12"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2 flex items-center">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    !isYearly 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isYearly 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 17%
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.section>

          {/* Pricing Cards */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="container mx-auto px-4 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`relative p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50 shadow-2xl shadow-purple-500/20 scale-105' 
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/50 hover:border-purple-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        🔥 Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl'
                          : 'border-2 border-purple-500 text-white hover:bg-purple-500'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Everything included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enterprise CTA */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="container mx-auto px-4 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Need Something Custom?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                For enterprise needs, custom deployments, or special requirements, 
                let's create a solution that fits your exact specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  💬 Contact Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  📅 Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>
  );
}
