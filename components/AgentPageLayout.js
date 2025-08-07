import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRightIcon, PlayIcon, CodeBracketIcon, ApiIcon } from '@heroicons/react/24/outline';

const AgentPageLayout = ({ 
  agent, 
  children, 
  onApiToggle = () => {}, 
  showApi = false 
}) => {
  const [activeTab, setActiveTab] = useState('demo');

  // All 6 agents data
  const allAgents = [
    {
      id: 'chat',
      name: 'AI Chat Assistant',
      description: 'Advanced conversational AI with voice and text capabilities',
      href: '/modules/chat',
      gradient: 'from-blue-500 to-purple-600',
      icon: '💬'
    },
    {
      id: 'mood',
      name: 'Mood Analyzer',
      description: 'Analyze and track emotional states with AI insights',
      href: '/modules/mood',
      gradient: 'from-pink-500 to-rose-600',
      icon: '😊'
    },
    {
      id: 'visual',
      name: 'Visual AI',
      description: 'Image analysis, recognition, and visual intelligence',
      href: '/modules/visual',
      gradient: 'from-green-500 to-emerald-600',
      icon: '👁️'
    },
    {
      id: 'ipinfo',
      name: 'IP Intelligence',
      description: 'Network analysis, geolocation, and security insights',
      href: '/modules/ipinfo',
      gradient: 'from-orange-500 to-red-600',
      icon: '🌐'
    },
    {
      id: 'memory',
      name: 'Memory AI Brain',
      description: 'Personal AI that remembers everything and recalls instantly',
      href: '/modules/memory',
      gradient: 'from-purple-500 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'creator',
      name: 'Content Creator',
      description: 'Generate images and videos from text descriptions',
      href: '/modules/creator',
      gradient: 'from-amber-500 to-orange-600',
      icon: '🎨'
    }
  ];

  // Get other agents (exclude current agent)
  const otherAgents = allAgents.filter(a => a.id !== agent.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{agent.icon}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-sm font-medium">
                    AI Agent
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className={`bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}>
                    {agent.name}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {agent.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                {agent.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className={`bg-gradient-to-r ${agent.gradient} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  onClick={() => setActiveTab('demo')}
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Try {agent.name}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 hover:bg-gray-800"
                  onClick={() => setActiveTab('api')}
                >
                  <CodeBracketIcon className="w-5 h-5 mr-2" />
                  View API
                </Button>
              </div>
            </div>

            {/* Right Content - Video Demo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                {/* Video Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${agent.gradient} flex items-center justify-center relative group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                      <PlayIcon className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white text-lg font-semibold">Watch Demo</p>
                    <p className="text-white/80 text-sm">See how {agent.name} works</p>
                  </div>
                  
                  {/* Video overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Demo Section */}
      <div className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience {agent.name} Live
            </h2>
            <p className="text-gray-400 text-lg">
              Try the AI agent below and see the magic happen in real-time
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'demo'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <PlayIcon className="w-4 h-4 inline mr-2" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'api'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <CodeBracketIcon className="w-4 h-4 inline mr-2" />
                API & Code
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
            {activeTab === 'demo' && (
              <div>
                {children}
              </div>
            )}
            
            {activeTab === 'api' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">API Integration</h3>
                  <p className="text-gray-400">Integrate {agent.name} into your applications</p>
                </div>

                {/* API Example */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">REST API Endpoint</h4>
                    <Button variant="outline" size="sm">
                      Copy Code
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`POST https://api.onelastai.com/v1/${agent.id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "input": "Your input data here",
  "options": {
    "mode": "advanced",
    "format": "json"
  }
}`}
                  </pre>
                </div>

                {/* SDK Example */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">JavaScript SDK</h4>
                    <Button variant="outline" size="sm">
                      Copy Code
                    </Button>
                  </div>
                  <pre className="text-blue-400 text-sm overflow-x-auto">
{`import { OneLast${agent.name.replace(/\s+/g, '')} } from 'onelastai-sdk';

const ${agent.id}Agent = new OneLast${agent.name.replace(/\s+/g, '')}({
  apiKey: 'YOUR_API_KEY'
});

const result = await ${agent.id}Agent.process({
  input: 'Your input data',
  options: { mode: 'advanced' }
});

console.log(result);`}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Other Agents Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Other AI Agents
            </h2>
            <p className="text-gray-400 text-lg">
              Discover more powerful AI tools in our comprehensive suite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {otherAgents.map((otherAgent) => (
              <Link key={otherAgent.id} href={otherAgent.href}>
                <Card className="group cursor-pointer bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center pb-2">
                    <div className="text-3xl mb-2">{otherAgent.icon}</div>
                    <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                      {otherAgent.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-400 text-sm text-center mb-4">
                      {otherAgent.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-gray-600 hover:bg-gray-700 group-hover:border-blue-500 group-hover:text-blue-400"
                    >
                      Try Now
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPageLayout;
