import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { MicrophoneIcon, SpeakerWaveIcon, PaperAirplaneIcon, PlayIcon, StopIcon } from '@heroicons/react/24/outline';

export default function ChatModule() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Chat Assistant. I can communicate through both text and voice. How can I help you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState('text'); // 'text' or 'voice'
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { 
      role: 'user', 
      content: inputMessage, 
      timestamp: new Date().toLocaleTimeString() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `I understand you said: "${inputMessage}". This is a demo response showcasing advanced natural language processing capabilities.`,
        `Great question about "${inputMessage}"! Let me provide you with a comprehensive answer based on my AI knowledge.`,
        `I can help you with "${inputMessage}". Here's my analysis and recommendation for your query.`,
        `That's an interesting topic: "${inputMessage}". Let me break this down for you with detailed insights.`
      ];
      
      const aiResponse = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Auto-speak in voice mode
      if (mode === 'voice') {
        speakMessage(aiResponse.content);
      }
    }, 1500);
  };

  const toggleVoiceMode = () => {
    setMode(mode === 'text' ? 'voice' : 'text');
  };

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      const voiceInputs = [
        "Hello, can you help me with my project?",
        "What's the weather forecast for tomorrow?",
        "I need help writing a professional email",
        "Can you explain artificial intelligence?",
        "Help me plan my daily schedule"
      ];
      const randomInput = voiceInputs[Math.floor(Math.random() * voiceInputs.length)];
      setInputMessage(randomInput);
      setIsListening(false);
    }, 3000);
  };

  const speakMessage = (text) => {
    setIsSpeaking(true);
    // Text-to-speech simulation
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback simulation
      setTimeout(() => setIsSpeaking(false), 4000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const agentData = {
    id: 'chat',
    name: 'AI Chat Assistant',
    description: 'Advanced conversational AI with voice and text capabilities that understands context, maintains conversation history, and provides intelligent responses across multiple domains.',
    icon: '💬',
    gradient: 'from-blue-500 to-purple-600',
    features: [
      'Natural language understanding and generation',
      'Voice-to-text and text-to-speech capabilities',
      'Context-aware conversations with memory',
      'Multi-language support and translation',
      'Emotional intelligence and tone analysis',
      'Real-time streaming responses'
    ]
  };

  const ChatDemo = () => (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setMode('text')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              mode === 'text'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            💬 Text Mode
          </button>
          <button
            onClick={() => setMode('voice')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              mode === 'voice'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🎤 Voice Mode
          </button>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader className="border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">AI Chat Assistant</CardTitle>
              <CardDescription className="text-gray-400">
                {mode === 'voice' ? 'Voice conversation mode' : 'Text conversation mode'}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm">Online</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-700/50 text-gray-100'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className={`text-xs ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp}
                    </p>
                    {message.role === 'assistant' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => speakMessage(message.content)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                      >
                        <SpeakerWaveIcon className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700/50 px-4 py-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            {isSpeaking && (
              <div className="flex justify-start">
                <div className="bg-blue-500/20 px-4 py-3 rounded-lg border border-blue-500/30">
                  <div className="flex items-center space-x-2">
                    <SpeakerWaveIcon className="w-4 h-4 text-blue-400 animate-pulse" />
                    <span className="text-blue-400 text-sm">Speaking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-700/50 p-4">
            <div className="flex gap-2">
              {mode === 'voice' && (
                <Button
                  onClick={startListening}
                  disabled={isListening}
                  className={`px-4 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {isListening ? (
                    <>
                      <StopIcon className="w-4 h-4 mr-2" />
                      Listening...
                    </>
                  ) : (
                    <>
                      <MicrophoneIcon className="w-4 h-4 mr-2" />
                      Voice
                    </>
                  )}
                </Button>
              )}
              
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={mode === 'voice' ? "Voice input will appear here..." : "Type your message..."}
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                disabled={isListening}
              />
              
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping || isListening}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {[
                { icon: '❓', text: 'Ask Question', prompt: 'Can you help me understand...' },
                { icon: '💡', text: 'Get Ideas', prompt: 'I need creative ideas for...' },
                { icon: '✍️', text: 'Write Text', prompt: 'Help me write...' },
                { icon: '🔍', text: 'Research', prompt: 'Research information about...' }
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputMessage(action.prompt)}
                  className="flex flex-col items-center py-3 border-gray-600 hover:bg-gray-700"
                >
                  <span className="text-lg mb-1">{action.icon}</span>
                  <span className="text-xs">{action.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      <Head>
        <title>AI Chat Assistant - Voice + Text | onelastai.com</title>
        <meta name="description" content="Advanced AI chat assistant with voice and text capabilities for natural conversations and intelligent responses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <ChatDemo />
      </AgentPageLayout>
    </>
  );
}
