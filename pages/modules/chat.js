import Head from 'next/head';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant with voice and text capabilities. How can I help you today?",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [chatMode, setChatMode] = useState('text'); // 'text' or 'voice'
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Auto-speak response if in voice mode
      if (chatMode === 'voice') {
        speakResponse(aiResponse.text);
      }
    }, 1500);
  };

  const startListening = async () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      const sampleTranscripts = [
        "Hello, can you help me with my project planning?",
        "What's the weather like today?",
        "I need assistance with data analysis",
        "Can you explain machine learning concepts?",
        "Help me write a professional email"
      ];
      const randomTranscript = sampleTranscripts[Math.floor(Math.random() * sampleTranscripts.length)];
      setInputMessage(randomTranscript);
      setIsListening(false);
      // Auto-send voice input
      setTimeout(() => sendMessage(), 500);
    }, 3000);
  };

  const speakResponse = (text) => {
    setIsSpeaking(true);
    // Simulate text-to-speech
    setTimeout(() => {
      setIsSpeaking(false);
    }, 4000);
  };

  const generateAIResponse = (userMessage) => {
    const responses = [
      "That's an interesting question! Let me help you with that using my advanced AI capabilities.",
      "I understand what you're looking for. Here's my comprehensive analysis and recommendation:",
      "Based on your request, I'd recommend the following approach with detailed steps:",
      "Great question! Here's what I think about that, along with some actionable insights:",
      "I can definitely help you with that. Let me provide you with a detailed solution:",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <Head>
        <title>AI Chat Assistant - Voice + Text Interaction | onelastai.com</title>
        <meta name="description" content="Advanced AI chat with both voice and text capabilities for seamless interaction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  AI Chat Assistant
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Advanced AI chat with voice and text capabilities for natural conversations
              </p>
            </motion.div>

            {/* Chat Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setChatMode('text')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    chatMode === 'text'
                      ? 'bg-cyan-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-cyan-500'
                  }`}
                >
                  💬 Text Chat
                </button>
                <button
                  onClick={() => setChatMode('voice')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    chatMode === 'voice'
                      ? 'bg-cyan-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-cyan-500'
                  }`}
                >
                  🎤 Voice Chat
                </button>
              </div>
            </motion.div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Chat with AI Assistant</CardTitle>
                      <CardDescription>
                        Get instant help and intelligent responses
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600">Online</span>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages Area */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-cyan-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      className="flex-1 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      rows="1"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="px-6"
                    >
                      <span className="mr-2">🚀</span>
                      Send
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '❓', text: 'Ask a Question', action: 'Can you help me understand...' },
                  { icon: '💡', text: 'Get Ideas', action: 'I need creative ideas for...' },
                  { icon: '🔍', text: 'Research Help', action: 'Can you research information about...' },
                  { icon: '✍️', text: 'Writing Help', action: 'Help me write...' }
                ].map((quickAction, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center gap-2"
                    onClick={() => setInputMessage(quickAction.action)}
                  >
                    <span className="text-2xl">{quickAction.icon}</span>
                    <span className="text-sm">{quickAction.text}</span>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-8">AI Chat Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🧠',
                    title: 'Intelligent Responses',
                    description: 'Advanced natural language processing for contextual understanding'
                  },
                  {
                    icon: '⚡',
                    title: 'Real-time Chat',
                    description: 'Instant responses with low latency for seamless conversations'
                  },
                  {
                    icon: '🎯',
                    title: 'Multi-purpose Assistant',
                    description: 'Help with research, writing, analysis, and creative tasks'
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
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
