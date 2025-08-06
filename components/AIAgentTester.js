import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AIAgentTester() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [serviceType, setServiceType] = useState('chat');
  const [prompt, setPrompt] = useState('');

  const handleTest = async () => {
    if (!prompt.trim()) {
      return;
    }
    
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType,
          prompt,
          userId: 'demo-user',
          options: {}
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: 'Failed to connect to AI agent'
      });
    }

    setLoading(false);
  };

  const serviceOptions = [
    { value: 'chat', label: '🤖 AI Chat', placeholder: 'Ask me anything about AI...' },
    { value: 'content', label: '📝 Content Writing', placeholder: 'Write a blog post about...' },
    { value: 'vision', label: '🎨 Vision & Images', placeholder: 'Generate an image of a futuristic AI robot...' },
    { value: 'data', label: '📊 Data Analysis', placeholder: 'Analyze user behavior data...' },
    { value: 'code', label: '💻 Code Assistant', placeholder: 'Create a React component for...' },
    { value: 'sonnet', label: '🎭 Poetry & Creative', placeholder: 'Write a haiku about AI...' },
    { value: 'logic', label: '🧠 Logic & Reasoning', placeholder: 'Solve this logical problem...' },
    { value: 'voice', label: '🎵 Voice & Audio', placeholder: 'Convert this text to speech...' }
  ];

  const selectedService = serviceOptions.find(s => s.value === serviceType);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🤖 AI Agent Tester
        </h2>
        
        <p className="text-gray-400 text-center mb-8">
          Test AI agents for onelastai.com - Add your API keys to .env.local to activate
        </p>

        {/* Service Type Selector */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">
            Select AI Service:
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {serviceOptions.map((service) => (
              <motion.button
                key={service.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setServiceType(service.value)}
                className={`p-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                  serviceType === service.value
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {service.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">
            Enter your prompt:
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={selectedService?.placeholder}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 min-h-[120px] resize-y"
          />
        </div>

        {/* Test Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTest}
          disabled={loading || !prompt.trim()}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Testing AI Agent...
            </div>
          ) : (
            `🚀 Test ${selectedService?.label} Agent`
          )}
        </motion.button>

        {/* Result Display */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {result.success ? '✅ Result:' : '❌ Error:'}
            </h3>
            
            <div className={`p-6 rounded-xl border ${
              result.success 
                ? 'bg-green-900/20 border-green-500/30' 
                : 'bg-red-900/20 border-red-500/30'
            }`}>
              {result.success ? (
                <div>
                  {serviceType === 'vision' ? (
                    <div>
                      <div className="text-gray-300 whitespace-pre-wrap">
                        {result.data}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {result.data || JSON.stringify(result, null, 2)}
                    </div>
                  )}
                  
                  {result.usage && (
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <p className="text-sm text-gray-400">
                        <strong>Usage:</strong> {result.usage.tokens} tokens, 
                        Cost: ${result.usage.cost?.toFixed(4)}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-red-300">
                  {result.error}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* API Key Status */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <h4 className="text-white font-semibold mb-2">📋 Setup Status:</h4>
          <div className="text-sm text-gray-300">
            <p>• Add <code className="bg-gray-600 px-2 py-1 rounded">OPENAI_API_KEY</code> to .env.local</p>
            <p>• Get API key from <a href="https://platform.openai.com/api-keys" target="_blank" className="text-cyan-400 hover:underline">OpenAI Dashboard</a></p>
            <p>• Restart dev server after adding keys</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
