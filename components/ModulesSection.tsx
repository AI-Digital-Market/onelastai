import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const modules = [
  {
    id: 'moodanalyzer',
    title: 'Mood Analyzer',
    description: 'Advanced AI-powered mood detection and analysis through text, voice, and visual inputs.',
    subdomain: 'mood.moodmirror.ai',
    features: ['Text Analysis', 'Voice Detection', 'Facial Recognition'],
    icon: '❤️',
    status: 'Available'
  },
  {
    id: 'patterninsights',
    title: 'Pattern Insights',
    description: 'Discover emotional patterns and triggers with AI-driven behavioral analysis.',
    subdomain: 'patterns.moodmirror.ai',
    features: ['Trend Analysis', 'Trigger Identification', 'Behavior Patterns'],
    icon: '📊',
    status: 'Available'
  },
  {
    id: 'weeklysummary',
    title: 'Weekly Reports',
    description: 'Comprehensive weekly emotional intelligence reports with personalized recommendations.',
    subdomain: 'reports.moodmirror.ai',
    features: ['Mood Distribution', 'Key Insights', 'Action Plans'],
    icon: '📅',
    status: 'Available'
  },
  {
    id: 'emotionalai',
    title: 'Emotional AI Chat',
    description: 'Conversational AI companion specialized in emotional support and mental wellness.',
    subdomain: 'chat.moodmirror.ai',
    features: ['24/7 Support', 'Personalized Responses', 'Crisis Detection'],
    icon: '💬',
    status: 'Beta'
  },
  {
    id: 'voiceemotion',
    title: 'Voice Emotion AI',
    description: 'Real-time voice emotion analysis with advanced speech processing capabilities.',
    subdomain: 'voice.moodmirror.ai',
    features: ['Real-time Processing', 'Emotion Recognition', 'Voice Patterns'],
    icon: '🎤',
    status: 'Coming Soon'
  },
  {
    id: 'visualemotion',
    title: 'Visual Emotion AI',
    description: 'Facial expression and body language analysis for comprehensive emotional assessment.',
    subdomain: 'visual.moodmirror.ai',
    features: ['Facial Recognition', 'Expression Analysis', 'Body Language'],
    icon: '📷',
    status: 'Coming Soon'
  }
]

interface ModulesSectionProps {
  selectedModule?: string
  onModuleSelect?: (moduleId: string) => void
}

export function ModulesSection({ selectedModule, onModuleSelect }: ModulesSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Modules & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered emotional intelligence tools designed to enhance your mental wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer ${
                selectedModule === module.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => onModuleSelect?.(module.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{module.icon}</div>
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          module.status === 'Available' ? 'bg-green-100 text-green-800' :
                          module.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {module.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Access via:</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {module.subdomain}
                    </code>
                  </div>

                  <Button 
                    className="w-full" 
                    variant={module.status === 'Available' ? 'default' : 'outline'}
                    disabled={module.status === 'Coming Soon'}
                  >
                    {module.status === 'Available' ? 'Launch Module' :
                     module.status === 'Beta' ? 'Try Beta' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
