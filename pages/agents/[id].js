import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParticleBackground from '../../components/ParticleBackground';

export default function AgentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [agent, setAgent] = useState(null);
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const agents = {
    sonnet: {
      name: 'Sonnet AI',
      description: 'Advanced poetry and creative writing AI with literary intelligence',
      icon: '✍️',
      subdomain: 'sonnet.onelastai.com',
      capabilities: [
        'Poetry Generation',
        'Creative Writing',
        'Literary Analysis',
        'Storytelling',
        'Character Development',
        'Rhyme & Meter'
      ],
      upcomingModels: [
        'Sonnet Pro v2.0 - Enhanced poetry with emotional depth',
        'Literary Critic AI - Advanced literary analysis and critique',
        'Collaborative Writer - Multi-author story development'
      ],
      samplePrompts: [
        'Write a sonnet about artificial intelligence',
        'Create a short story about time travel',
        'Generate a haiku about nature'
      ]
    },
    vision: {
      name: 'Vision AI',
      description: 'Computer vision and image generation with state-of-the-art models',
      icon: '👁️',
      subdomain: 'vision.onelastai.com',
      capabilities: [
        'Image Generation',
        'Visual Analysis',
        'Object Recognition',
        'Face Detection',
        'Scene Understanding',
        'Style Transfer'
      ],
      upcomingModels: [
        'Vision Pro v3.0 - 8K image generation',
        'Real-time Video Analysis - Live video processing',
        'AR Vision Assistant - Augmented reality integration'
      ],
      samplePrompts: [
        'Generate a futuristic cityscape',
        'Analyze this image for objects',
        'Create a logo for a tech company'
      ]
    },
    logic: {
      name: 'Logic AI',
      description: 'Problem-solving and analytical reasoning AI for complex tasks',
      icon: '🧠',
      subdomain: 'logic.onelastai.com',
      capabilities: [
        'Problem Solving',
        'Data Analysis',
        'Pattern Recognition',
        'Logical Reasoning',
        'Decision Making',
        'Optimization'
      ],
      upcomingModels: [
        'Logic Pro v2.5 - Advanced reasoning capabilities',
        'Quantum Logic - Quantum computing integration',
        'Multi-Agent Reasoning - Collaborative problem solving'
      ],
      samplePrompts: [
        'Solve this mathematical problem: ...',
        'Analyze patterns in this dataset',
        'Optimize this business process'
      ]
    },
    voice: {
      name: 'Voice AI',
      description: 'Speech processing, voice synthesis, and audio analysis',
      icon: '🎙️',
      subdomain: 'voice.onelastai.com',
      capabilities: [
        'Speech Synthesis',
        'Voice Recognition',
        'Audio Processing',
        'Language Detection',
        'Emotion Recognition',
        'Voice Cloning'
      ],
      upcomingModels: [
        'Voice Pro v2.0 - Real-time voice conversion',
        'Multilingual Voice - 100+ language support',
        'Emotional Voice - Emotion-aware speech synthesis'
      ],
      samplePrompts: [
        'Convert this text to speech',
        'Transcribe this audio file',
        'Analyze emotion in this voice sample'
      ]
    },
    code: {
      name: 'Code AI',
      description: 'Programming assistant with code generation and debugging capabilities',
      icon: '💻',
      subdomain: 'code.onelastai.com',
      capabilities: [
        'Code Generation',
        'Bug Detection',
        'Code Review',
        'Optimization',
        'Documentation',
        'Testing'
      ],
      upcomingModels: [
        'Code Pro v3.0 - Full-stack development',
        'Security Auditor - Advanced security analysis',
        'Architecture Advisor - System design recommendations'
      ],
      samplePrompts: [
        'Write a React component for a login form',
        'Debug this JavaScript function',
        'Generate unit tests for this code'
      ]
    },
    data: {
      name: 'Data AI',
      description: 'Big data processing and insights with advanced analytics',
      icon: '📊',
      subdomain: 'data.onelastai.com',
      capabilities: [
        'Big Data Analysis',
        'Predictive Models',
        'Business Intelligence',
        'Data Visualization',
        'Statistical Analysis',
        'Machine Learning'
      ],
      upcomingModels: [
        'Data Pro v2.0 - Real-time analytics',
        'Predictive Insights - Advanced forecasting',
        'AutoML Platform - Automated machine learning'
      ],
      samplePrompts: [
        'Analyze sales trends in this dataset',
        'Create a predictive model for customer churn',
        'Generate insights from this CSV file'
      ]
    }
  };

  useEffect(() => {
    if (id && agents[id]) {
      setAgent(agents[id]);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType: id,
          prompt: prompt,
          options: {}
        }),
      });

      const data = await res.json();
      if (data.success) {
        setResponse(data.data);
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-2xl text-white">Loading agent...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{agent.name} - AI Digital Market | onelastai.com</title>
        <meta name="description" content={agent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-gray-900">
        <ParticleBackground />
        <Header />
        
        <main className="pt-20 pb-16 relative z-10">
          <div className="container mx-auto px-4">
            {/* Agent Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="text-8xl mb-6">{agent.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                {agent.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'oklch(0.7 0.05 240)' }}>
                {agent.description}
              </p>
              <div className="text-accent font-mono">{agent.subdomain}</div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Agent Capabilities */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-gradient rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-3 rounded-lg border border-border/50"
                    >
                      <span className="text-accent mr-3">✓</span>
                      <span className="text-white">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interactive Testing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card-gradient rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">Test Agent</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Enter your prompt:
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder={agent.samplePrompts[0]}
                      className="w-full h-32 p-4 rounded-lg bg-input border border-border text-white placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-3 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : `Test ${agent.name}`}
                  </button>
                </form>

                {/* Sample Prompts */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-accent mb-3">Sample Prompts:</h3>
                  <div className="space-y-2">
                    {agent.samplePrompts.map((sample, index) => (
                      <button
                        key={index}
                        onClick={() => setPrompt(sample)}
                        className="block w-full text-left p-3 rounded-lg border border-border/50 hover:border-accent/50 transition-colors text-muted-foreground hover:text-white text-sm"
                      >
                        {sample}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Response */}
                {response && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-lg bg-secondary border border-border"
                  >
                    <h3 className="text-lg font-semibold text-accent mb-2">Response:</h3>
                    <pre className="whitespace-pre-wrap text-white text-sm">{response}</pre>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Upcoming Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Upcoming Models</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {agent.upcomingModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-gradient rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl mb-4">🚀</div>
                    <p className="text-white leading-relaxed">{model}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
