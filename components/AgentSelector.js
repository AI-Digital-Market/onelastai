import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AgentSelector() {
  const [currentAgent, setCurrentAgent] = useState(0);
  
  const aiAgents = [
    { name: 'Sonnet', icon: '✍️' },
    { name: 'Vision', icon: '👁️' },
    { name: 'Logic', icon: '🧠' },
    { name: 'Voice', icon: '🎙️' },
    { name: 'Code', icon: '💻' },
    { name: 'Data', icon: '📊' }
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
      {aiAgents.map((agent, index) => (
        <motion.div
          key={agent.name}
          className={`
            p-4 rounded-xl cursor-pointer transition-all duration-300
            ${currentAgent === index 
              ? 'bg-purple-600 text-white scale-105' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }
          `}
          onClick={() => setCurrentAgent(index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-3xl mb-2 text-center">{agent.icon}</div>
          <div className="text-white font-semibold text-sm text-center">{agent.name}</div>
        </motion.div>
      ))}
    </div>
  );
}
