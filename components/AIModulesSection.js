import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AIModulesSection() {
  const modules = [
    {
      id: 'sonnet',
      title: 'Sonnet AI',
      description: 'Advanced poetry and creative writing AI with literary intelligence.',
      subdomain: 'sonnet.onelastai.com',
      features: ['Poetry Generation', 'Creative Writing', 'Literary Analysis'],
      icon: '✍️',
      status: 'Available',
      category: 'Creative'
    },
    {
      id: 'vision',
      title: 'Vision AI',
      description: 'Computer vision and image generation with state-of-the-art models.',
      subdomain: 'vision.onelastai.com',
      features: ['Image Generation', 'Visual Analysis', 'Object Recognition'],
      icon: '👁️',
      status: 'Available',
      category: 'Visual'
    },
    {
      id: 'logic',
      title: 'Logic AI',
      description: 'Problem-solving and analytical reasoning AI for complex tasks.',
      subdomain: 'logic.onelastai.com',
      features: ['Problem Solving', 'Data Analysis', 'Pattern Recognition'],
      icon: '🧠',
      status: 'Available',
      category: 'Analytics'
    },
    {
      id: 'voice',
      title: 'Voice AI',
      description: 'Speech processing, voice synthesis, and audio analysis.',
      subdomain: 'voice.onelastai.com',
      features: ['Speech Synthesis', 'Voice Recognition', 'Audio Processing'],
      icon: '🎙️',
      status: 'Beta',
      category: 'Audio'
    },
    {
      id: 'code',
      title: 'Code AI',
      description: 'Programming assistant with code generation and debugging capabilities.',
      subdomain: 'code.onelastai.com',
      features: ['Code Generation', 'Bug Detection', 'Code Review'],
      icon: '💻',
      status: 'Available',
      category: 'Development'
    },
    {
      id: 'data',
      title: 'Data AI',
      description: 'Big data processing and insights with advanced analytics.',
      subdomain: 'data.onelastai.com',
      features: ['Big Data Analysis', 'Predictive Models', 'Business Intelligence'],
      icon: '📊',
      status: 'Available',
      category: 'Analytics'
    },
    {
      id: 'chat',
      title: 'Chat AI',
      description: 'Conversational AI for customer support and engagement.',
      subdomain: 'chat.onelastai.com',
      features: ['24/7 Support', 'Multi-language', 'Context Awareness'],
      icon: '💬',
      status: 'Available',
      category: 'Communication'
    },
    {
      id: 'content',
      title: 'Content AI',
      description: 'Content generation for marketing, blogs, and social media.',
      subdomain: 'content.onelastai.com',
      features: ['Blog Writing', 'Social Media', 'SEO Content'],
      icon: '📝',
      status: 'Available',
      category: 'Content'
    },
    {
      id: 'translate',
      title: 'Translate AI',
      description: 'Real-time translation with cultural context understanding.',
      subdomain: 'translate.onelastai.com',
      features: ['Real-time Translation', 'Cultural Context', '100+ Languages'],
      icon: '🌐',
      status: 'Coming Soon',
      category: 'Communication'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'status-available';
      case 'Beta': return 'status-beta';
      case 'Coming Soon': return 'status-coming-soon';
      case 'Development': return 'status-development';
      default: return 'status-coming-soon';
    }
  };

  return (
    <section id="modules-section" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            AI Agent Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized AI agents designed for specific tasks and industries. 
            Each module provides unique capabilities powered by advanced machine learning models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="card-gradient rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(module.status)}`}>
                  {module.status}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                {module.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {module.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subdomain */}
              <div className="text-xs text-accent mb-6 font-mono">
                {module.subdomain}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {module.status === 'Available' || module.status === 'Beta' ? (
                  <>
                    <Link href={`/agents/${module.id}`} className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-primary text-sm py-2"
                      >
                        Launch Agent
                      </motion.button>
                    </Link>
                    <Link href={`/test-agents?agent=${module.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary text-sm py-2 px-4"
                      >
                        Test
                      </motion.button>
                    </Link>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full btn-secondary text-sm py-2 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    {module.status}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="card-gradient rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Need a Custom AI Agent?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can build specialized AI agents tailored to your specific industry and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  🚀 Custom Development
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  💰 View Pricing
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
