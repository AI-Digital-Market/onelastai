import { motion } from 'framer-motion'
import { Button } from '../ui/button'

interface HeroSectionProps {
  onExploreModules?: () => void
}

export function HeroSection({ onExploreModules }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Platform Name at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-[10px] font-bold tracking-widest uppercase platform-name">
          One Last AI
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl"
            >
              <div className="w-7 h-7 text-white">❤️</div>
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mood Mirror AI
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced AI Platform for Emotional Intelligence and Mental Wellness
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Experience multiple specialized AI agents designed to understand, analyze, and improve your emotional well-being through cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white"
              onClick={onExploreModules}
            >
              <span className="mr-2">✨</span>
              Explore Modules
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-gray-300 hover:border-gray-400"
            >
              <span className="mr-2">🧠</span>
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-blue-500">🧠</span>
              AI-Powered Analysis
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-red-500">❤️</span>
              Emotional Intelligence
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-purple-500">✨</span>
              Real-time Insights
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
