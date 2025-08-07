import React, { useState } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HeartIcon, FaceSmileIcon, FaceFrownIcon, SparklesIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function MoodModule() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [selectedInput, setSelectedInput] = useState('text');

  const analyzeMood = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate mood analysis
    setTimeout(() => {
      const moods = ['happy', 'excited', 'calm', 'neutral', 'sad', 'angry', 'optimistic', 'anxious'];
      const emotions = ['joy', 'love', 'surprise', 'fear', 'sadness', 'anger', 'trust', 'anticipation'];
      
      const primaryMood = moods[Math.floor(Math.random() * moods.length)];
      const detectedEmotions = emotions.slice(0, 3).map(emotion => ({
        name: emotion,
        intensity: Math.random() * 100
      }));

      setAnalysis({
        mood: primaryMood,
        confidence: Math.random() * 30 + 70, // 70-100%
        emotions: detectedEmotions,
        sentiment: Math.random() > 0.5 ? 'positive' : Math.random() > 0.3 ? 'neutral' : 'negative',
        keywords: ['positive', 'energy', 'motivation'].slice(0, Math.floor(Math.random() * 3) + 1),
        suggestions: [
          'Consider practicing mindfulness to maintain emotional balance',
          'Your emotional state seems healthy - keep up the positive energy!',
          'Try some relaxation techniques if you\'re feeling overwhelmed'
        ]
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const getMoodIcon = (mood) => {
    const icons = {
      happy: '😊',
      excited: '🤩',
      calm: '😌',
      neutral: '😐',
      sad: '😢',
      angry: '😠',
      optimistic: '🌟',
      anxious: '😰'
    };
    return icons[mood] || '😊';
  };

  const getMoodColor = (mood) => {
    const colors = {
      happy: 'from-yellow-400 to-orange-500',
      excited: 'from-purple-500 to-pink-500',
      calm: 'from-green-400 to-blue-500',
      neutral: 'from-gray-400 to-gray-600',
      sad: 'from-blue-600 to-purple-700',
      angry: 'from-red-500 to-red-700',
      optimistic: 'from-green-400 to-emerald-500',
      anxious: 'from-orange-500 to-red-500'
    };
    return colors[mood] || 'from-blue-400 to-purple-500';
  };

  const agentData = {
    id: 'mood',
    name: 'Mood Analyzer',
    description: 'Advanced AI-powered emotional intelligence system that analyzes text, voice, and behavioral patterns to provide deep insights into emotional states and mental well-being.',
    icon: '😊',
    gradient: 'from-pink-500 to-rose-600',
    features: [
      'Real-time emotion detection and analysis',
      'Multi-modal input: text, voice, and facial expressions',
      'Sentiment analysis with confidence scoring',
      'Personalized emotional wellness recommendations',
      'Mood tracking and historical analytics',
      'Integration with mental health applications'
    ]
  };

  const MoodDemo = () => (
    <div className="space-y-6">
      {/* Input Method Selection */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-700 rounded-lg p-1">
          {[
            { id: 'text', label: '📝 Text', desc: 'Analyze written text' },
            { id: 'voice', label: '🎤 Voice', desc: 'Voice emotion detection' },
            { id: 'image', label: '📸 Photo', desc: 'Facial expression analysis' }
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedInput(method.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                selectedInput === method.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-pink-400" />
            Mood Analysis Input
          </CardTitle>
          <CardDescription className="text-gray-400">
            {selectedInput === 'text' && 'Enter text to analyze emotional tone and sentiment'}
            {selectedInput === 'voice' && 'Record your voice for emotion detection'}
            {selectedInput === 'image' && 'Upload a photo for facial expression analysis'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {selectedInput === 'text' && (
            <div className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Share your thoughts, describe your day, or write about how you're feeling..."
                className="w-full h-32 p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {inputText.length} characters
                </span>
                <Button
                  onClick={analyzeMood}
                  disabled={!inputText.trim() || isAnalyzing}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
                      Analyze Mood
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {selectedInput === 'voice' && (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
              </div>
              <p className="text-gray-400 mb-4">Voice emotion detection coming soon</p>
              <Button variant="outline" className="border-gray-600">
                🎤 Record Voice
              </Button>
            </div>
          )}

          {selectedInput === 'image' && (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <p className="text-gray-400 mb-4">Facial expression analysis coming soon</p>
              <Button variant="outline" className="border-gray-600">
                📷 Upload Photo
              </Button>
            </div>
          )}

          {/* Quick Text Examples */}
          {selectedInput === 'text' && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Quick examples:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "I'm feeling really excited about my new project today!",
                  "I've been feeling overwhelmed with work lately...",
                  "Had such a peaceful morning walk in the park.",
                  "Can't shake this anxious feeling about tomorrow."
                ].map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputText(example)}
                    className="text-left justify-start border-gray-600 hover:bg-gray-700 text-sm h-auto py-2"
                  >
                    "{example}"
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <HeartIcon className="w-5 h-5 mr-2 text-pink-400" />
              Mood Analysis Results
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Primary Mood */}
            <div className="text-center">
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getMoodColor(analysis.mood)} text-white text-lg font-semibold mb-2`}>
                <span className="text-2xl mr-3">{getMoodIcon(analysis.mood)}</span>
                {analysis.mood.charAt(0).toUpperCase() + analysis.mood.slice(1)}
              </div>
              <p className="text-gray-400">
                Confidence: {Math.round(analysis.confidence)}%
              </p>
            </div>

            {/* Emotion Breakdown */}
            <div>
              <h4 className="text-white font-semibold mb-3">Emotion Breakdown</h4>
              <div className="space-y-2">
                {analysis.emotions.map((emotion, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize">{emotion.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${emotion.intensity}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 w-12">
                        {Math.round(emotion.intensity)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment */}
            <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">Overall Sentiment</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                analysis.sentiment === 'positive' ? 'bg-green-500/20 text-green-400' :
                analysis.sentiment === 'negative' ? 'bg-red-500/20 text-red-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {analysis.sentiment === 'positive' ? '😊 Positive' :
                 analysis.sentiment === 'negative' ? '😔 Negative' : '😐 Neutral'}
              </span>
            </div>

            {/* AI Suggestions */}
            <div>
              <h4 className="text-white font-semibold mb-3">AI Recommendations</h4>
              <div className="space-y-2">
                {analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg">
                    <span className="text-pink-400 mt-1">💡</span>
                    <span className="text-gray-300 text-sm">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Mood Analyzer - AI Emotional Intelligence | onelastai.com</title>
        <meta name="description" content="Advanced AI mood analyzer that detects emotions from text, voice, and facial expressions with personalized wellness recommendations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <MoodDemo />
      </AgentPageLayout>
    </>
  );
}
