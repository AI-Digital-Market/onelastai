import Head from 'next/head';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function MoodAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeMood = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    try {
      // Mock analysis - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResult({
        mood: 'optimistic',
        confidence: 0.85,
        emotions: {
          joy: 0.7,
          excitement: 0.6,
          calm: 0.4
        },
        insights: [
          'You seem to be in a positive mindset',
          'Your language suggests forward-thinking',
          'Consider maintaining this optimistic outlook'
        ]
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mood Analyzer AI - Advanced Emotional Intelligence | onelastai.com</title>
        <meta name="description" content="Analyze your emotional state with AI-powered mood detection through text, voice, and visual inputs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-xl">
                  <span className="text-2xl text-white">❤️</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Mood Analyzer AI
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Advanced AI-powered mood detection and analysis through text, voice, and visual inputs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Share Your Thoughts</CardTitle>
                    <CardDescription>
                      Type how you're feeling, describe your day, or share what's on your mind
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="I'm feeling excited about my new project, but also a bit nervous about the challenges ahead..."
                      className="w-full h-40 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button
                      onClick={analyzeMood}
                      disabled={!inputText.trim() || isAnalyzing}
                      className="w-full"
                    >
                      {isAnalyzing ? (
                        <>
                          <span className="animate-spin mr-2">⚡</span>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">🧠</span>
                          Analyze Mood
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>
                      AI-powered insights into your emotional state
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {result ? (
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {result.mood.charAt(0).toUpperCase() + result.mood.slice(1)}
                          </div>
                          <div className="text-sm text-gray-500">
                            Confidence: {Math.round(result.confidence * 100)}%
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Emotional Breakdown</h4>
                          {Object.entries(result.emotions).map(([emotion, value]) => (
                            <div key={emotion} className="flex items-center justify-between mb-2">
                              <span className="capitalize">{emotion}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-blue-500 transition-all duration-1000"
                                    style={{ width: `${value * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm">{Math.round(value * 100)}%</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Insights</h4>
                          <ul className="space-y-2">
                            {result.insights.map((insight, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-blue-500 mt-1">•</span>
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-12">
                        <span className="text-4xl mb-4 block">🎯</span>
                        <p>Share your thoughts above to see your mood analysis</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Advanced Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: '📝',
                    title: 'Text Analysis',
                    description: 'Advanced natural language processing to understand emotional context'
                  },
                  {
                    icon: '🎤',
                    title: 'Voice Detection',
                    description: 'Analyze vocal patterns and tone for deeper emotional insights'
                  },
                  {
                    icon: '📷',
                    title: 'Facial Recognition',
                    description: 'Computer vision analysis of facial expressions and micro-emotions'
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center p-6">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </Card>
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
