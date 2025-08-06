import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: "🔮",
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your business needs",
      features: ["Custom Model Training", "API Integration", "24/7 Support", "Dedicated Team"],
      price: "Starting at $5,000",
      popular: true
    },
    {
      icon: "🚀",
      title: "AI Consulting",
      description: "Expert guidance to implement AI strategies in your organization",
      features: ["Strategy Planning", "Technology Assessment", "Implementation Roadmap", "ROI Analysis"],
      price: "Starting at $2,500"
    },
    {
      icon: "🎯",
      title: "AI Training & Workshops",
      description: "Comprehensive training programs for your team",
      features: ["Team Training", "Hands-on Workshops", "Certification Programs", "Ongoing Support"],
      price: "Starting at $1,500"
    },
    {
      icon: "⚡",
      title: "AI Integration Services",
      description: "Seamlessly integrate AI tools into your existing systems",
      features: ["System Integration", "Data Migration", "Performance Optimization", "Quality Assurance"],
      price: "Starting at $3,000"
    },
    {
      icon: "🛡️",
      title: "AI Security & Compliance",
      description: "Ensure your AI systems are secure and compliant",
      features: ["Security Audits", "Compliance Assessment", "Risk Management", "Policy Development"],
      price: "Starting at $4,000"
    },
    {
      icon: "📊",
      title: "AI Analytics & Insights",
      description: "Advanced analytics and business intelligence solutions",
      features: ["Data Analysis", "Predictive Modeling", "Business Intelligence", "Custom Dashboards"],
      price: "Starting at $2,000"
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Professional AI Solutions | onelastai.com</title>
        <meta name="description" content="Professional AI services including custom development, consulting, training, and integration. Transform your business with expert AI solutions." />
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
                Professional AI Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Expert AI solutions tailored to your business needs. From custom development to strategic consulting,
              we help you harness the full power of artificial intelligence.
            </motion.p>
          </motion.section>

          {/* Services Grid */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="container mx-auto px-4 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`relative p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/50 hover:border-purple-400/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        🔥 Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-6">
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-xl'
                          : 'border-2 border-purple-500 text-white hover:bg-purple-500'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="container mx-auto px-4 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Start Your AI Journey?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your specific needs and create a custom AI solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  📞 Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  💬 Get Quote
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
