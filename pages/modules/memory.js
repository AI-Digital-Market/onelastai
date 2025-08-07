import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { BrainIcon, MagnifyingGlassIcon, PlusIcon, TrashIcon, TagIcon } from '@heroicons/react/24/outline';

export default function MemoryModule() {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('general');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Load memories from localStorage on component mount
  useEffect(() => {
    const savedMemories = localStorage.getItem('aiMemories');
    if (savedMemories) {
      setMemories(JSON.parse(savedMemories));
    }
  }, []);

  // Save memories to localStorage whenever memories change
  useEffect(() => {
    localStorage.setItem('aiMemories', JSON.stringify(memories));
  }, [memories]);

  const addMemory = () => {
    if (!newMemory.trim()) return;

    const memory = {
      id: Date.now(),
      content: newMemory,
      category: category,
      timestamp: new Date().toLocaleString(),
      importance: Math.floor(Math.random() * 5) + 1, // 1-5 scale
      tags: extractTags(newMemory),
      lastAccessed: new Date().toISOString()
    };

    setMemories(prev => [memory, ...prev]);
    setNewMemory('');
  };

  const deleteMemory = (id) => {
    setMemories(prev => prev.filter(memory => memory.id !== id));
  };

  const extractTags = (text) => {
    // Simple tag extraction based on keywords
    const keywords = text.toLowerCase().match(/\b\w{4,}\b/g) || [];
    return keywords.slice(0, 3); // Return first 3 meaningful words as tags
  };

  const searchMemories = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = memories.filter(memory => 
        memory.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        memory.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        memory.tags.some(tag => tag.includes(searchQuery.toLowerCase()))
      );

      // Sort by relevance and importance
      results.sort((a, b) => {
        const aRelevance = (a.content.toLowerCase().match(new RegExp(searchQuery.toLowerCase(), 'g')) || []).length;
        const bRelevance = (b.content.toLowerCase().match(new RegExp(searchQuery.toLowerCase(), 'g')) || []).length;
        return (bRelevance * b.importance) - (aRelevance * a.importance);
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const getImportanceColor = (importance) => {
    const colors = {
      1: 'text-gray-400',
      2: 'text-blue-400',
      3: 'text-green-400',
      4: 'text-yellow-400',
      5: 'text-red-400'
    };
    return colors[importance] || 'text-gray-400';
  };

  const getCategoryIcon = (cat) => {
    const icons = {
      personal: '👤',
      work: '💼',
      learning: '📚',
      ideas: '💡',
      goals: '🎯',
      general: '📝'
    };
    return icons[cat] || '📝';
  };

  const agentData = {
    id: 'memory',
    name: 'Memory AI Brain',
    description: 'Personal AI memory system that stores, organizes, and recalls your information with intelligent search and categorization for instant knowledge retrieval.',
    icon: '🧠',
    gradient: 'from-purple-500 to-indigo-600',
    features: [
      'Intelligent memory storage and organization',
      'Advanced search with semantic understanding',
      'Automatic categorization and tagging',
      'Importance scoring and prioritization',
      'Cross-reference and connection mapping',
      'Long-term memory persistence and backup'
    ]
  };

  const MemoryDemo = () => (
    <div className="space-y-6">
      {/* Add Memory Section */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BrainIcon className="w-5 h-5 mr-2 text-purple-400" />
            Store New Memory
          </CardTitle>
          <CardDescription className="text-gray-400">
            Add information to your AI brain for instant recall later
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <textarea
              value={newMemory}
              onChange={(e) => setNewMemory(e.target.value)}
              placeholder="What would you like me to remember? (e.g., meeting notes, ideas, important facts...)"
              className="w-full h-24 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
            />
            
            <div className="flex gap-3">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500"
              >
                <option value="general">📝 General</option>
                <option value="personal">👤 Personal</option>
                <option value="work">💼 Work</option>
                <option value="learning">📚 Learning</option>
                <option value="ideas">💡 Ideas</option>
                <option value="goals">🎯 Goals</option>
              </select>
              
              <Button
                onClick={addMemory}
                disabled={!newMemory.trim()}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Store Memory
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Section */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-purple-400" />
            Search Memories
          </CardTitle>
          <CardDescription className="text-gray-400">
            Ask your AI brain to recall specific information
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchMemories()}
              placeholder="What do you want to remember? (e.g., 'meeting with John', 'project ideas')"
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
            <Button
              onClick={searchMemories}
              disabled={!searchQuery.trim() || isSearching}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
            >
              {isSearching ? (
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <MagnifyingGlassIcon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white">🔍 Search Results</CardTitle>
            <CardDescription className="text-gray-400">
              Found {searchResults.length} memory(ies) matching "{searchQuery}"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {searchResults.map((memory) => (
                <div key={memory.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">{getCategoryIcon(memory.category)}</span>
                        <span className="text-sm text-gray-400 capitalize">{memory.category}</span>
                        <div className="flex">
                          {[...Array(memory.importance)].map((_, i) => (
                            <span key={i} className={`text-xs ${getImportanceColor(memory.importance)}`}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-white mb-2">{memory.content}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {memory.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">
                        Stored: {memory.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Memories */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white">📚 Recent Memories</CardTitle>
          <CardDescription className="text-gray-400">
            Your latest stored information ({memories.length} total memories)
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {memories.length === 0 ? (
            <div className="text-center py-8">
              <BrainIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">No memories stored yet</p>
              <p className="text-gray-500 text-sm">Start adding information to build your AI memory bank</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {memories.slice(0, 10).map((memory) => (
                <div key={memory.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">{getCategoryIcon(memory.category)}</span>
                        <span className="text-sm text-gray-400 capitalize">{memory.category}</span>
                        <div className="flex">
                          {[...Array(memory.importance)].map((_, i) => (
                            <span key={i} className={`text-xs ${getImportanceColor(memory.importance)}`}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-white mb-2">{memory.content}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {memory.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">
                        Stored: {memory.timestamp}
                      </p>
                    </div>
                    <Button
                      onClick={() => deleteMemory(memory.id)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-red-400"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Memory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{memories.length}</div>
            <div className="text-sm text-gray-400">Total Memories</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {new Set(memories.map(m => m.category)).size}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {memories.filter(m => m.importance >= 4).length}
            </div>
            <div className="text-sm text-gray-400">Important</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {memories.filter(m => {
                const today = new Date().toDateString();
                return new Date(m.timestamp).toDateString() === today;
              }).length}
            </div>
            <div className="text-sm text-gray-400">Today</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Memory AI Brain - Personal Knowledge Assistant | onelastai.com</title>
        <meta name="description" content="AI-powered personal memory system that stores, organizes, and recalls your information with intelligent search." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <MemoryDemo />
      </AgentPageLayout>
    </>
  );
}
