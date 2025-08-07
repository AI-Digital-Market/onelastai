import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function MemoryAI() {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [userName, setUserName] = useState('User');

  // Load memories from localStorage on mount
  useEffect(() => {
    const savedMemories = localStorage.getItem('ai-memories');
    const savedUserName = localStorage.getItem('ai-username');
    if (savedMemories) {
      setMemories(JSON.parse(savedMemories));
    }
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  // Save memories to localStorage
  const saveMemories = (updatedMemories) => {
    localStorage.setItem('ai-memories', JSON.stringify(updatedMemories));
    setMemories(updatedMemories);
  };

  const addMemory = async () => {
    if (!newMemory.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const memory = {
      id: Date.now(),
      content: newMemory,
      timestamp: new Date().toLocaleString(),
      category: categorizeMemory(newMemory),
      importance: Math.floor(Math.random() * 5) + 1, // 1-5 scale
      tags: extractTags(newMemory)
    };
    
    const updatedMemories = [memory, ...memories];
    saveMemories(updatedMemories);
    setNewMemory('');
    setIsProcessing(false);
  };

  const searchMemories = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate AI search processing
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const results = memories.filter(memory => 
      memory.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      memory.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
    setIsProcessing(false);
  };

  const categorizeMemory = (content) => {
    const categories = {
      'personal': ['family', 'friend', 'birthday', 'anniversary', 'hobby'],
      'work': ['project', 'meeting', 'deadline', 'client', 'task'],
      'learning': ['study', 'course', 'book', 'skill', 'tutorial'],
      'health': ['exercise', 'diet', 'doctor', 'medicine', 'wellness'],
      'financial': ['budget', 'expense', 'investment', 'income', 'savings'],
      'travel': ['trip', 'vacation', 'flight', 'hotel', 'destination']
    };
    
    const lowerContent = content.toLowerCase();
    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => lowerContent.includes(keyword))) {
        return category;
      }
    }
    return 'general';
  };

  const extractTags = (content) => {
    // Simple tag extraction based on common words
    const words = content.toLowerCase().split(' ');
    const commonTags = ['important', 'urgent', 'remember', 'note', 'idea', 'plan', 'goal'];
    return words.filter(word => commonTags.includes(word) || word.length > 6).slice(0, 3);
  };

  const deleteMemory = (id) => {
    const updatedMemories = memories.filter(memory => memory.id !== id);
    saveMemories(updatedMemories);
  };

  const getMemoryStats = () => {
    const totalMemories = memories.length;
    const categories = memories.reduce((acc, memory) => {
      acc[memory.category] = (acc[memory.category] || 0) + 1;
      return acc;
    }, {});
    const mostUsedCategory = Object.keys(categories).reduce((a, b) => 
      categories[a] > categories[b] ? a : b, 'general'
    );
    
    return { totalMemories, categories, mostUsedCategory };
  };

  const stats = getMemoryStats();

  return (
    <>
      <Head>
        <title>Memory AI - Personal AI Brain | onelastai.com</title>
        <meta name="description" content="Your personal AI memory assistant that remembers everything for you and recalls information instantly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-xl">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Memory AI Brain
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Your personal AI memory assistant that never forgets - store everything, recall instantly
              </p>
            </motion.div>

            {/* Memory Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-violet-600">{stats.totalMemories}</div>
                <div className="text-sm text-gray-600">Total Memories</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 capitalize">{stats.mostUsedCategory}</div>
                <div className="text-sm text-gray-600">Most Used Category</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-indigo-600">{Object.keys(stats.categories).length}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add Memory Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>💾 Store New Memory</CardTitle>
                    <CardDescription>
                      Tell me anything you want to remember - I'll never forget it
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">What would you like me to remember?</label>
                      <textarea
                        value={newMemory}
                        onChange={(e) => setNewMemory(e.target.value)}
                        placeholder="Remember that I have a dentist appointment next Tuesday at 2 PM, and I need to bring my insurance card..."
                        className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>
                    <Button
                      onClick={addMemory}
                      disabled={!newMemory.trim() || isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? (
                        <>
                          <span className="animate-spin mr-2">⚡</span>
                          Storing Memory...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">🧠</span>
                          Store in Memory
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Search Memory Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>🔍 Search Memory</CardTitle>
                    <CardDescription>
                      Ask me anything you've told me before - I'll find it instantly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">What are you looking for?</label>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="dentist appointment, project deadline, birthday..."
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>
                    <Button
                      onClick={searchMemories}
                      disabled={!searchQuery.trim() || isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? (
                        <>
                          <span className="animate-spin mr-2">⚡</span>
                          Searching...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">🔍</span>
                          Search Memory
                        </>
                      )}
                    </Button>

                    {/* Search Results */}
                    {searchResults.length > 0 && (
                      <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                        <h4 className="font-medium text-violet-600">Found {searchResults.length} memories:</h4>
                        {searchResults.map((memory) => (
                          <div key={memory.id} className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                            <p className="text-sm">{memory.content}</p>
                            <div className="text-xs text-gray-500 mt-1">{memory.timestamp}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Memories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>📚 Recent Memories</CardTitle>
                  <CardDescription>
                    Your latest stored memories, organized and categorized
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {memories.length > 0 ? (
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {memories.slice(0, 10).map((memory) => (
                        <div key={memory.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  memory.category === 'personal' ? 'bg-pink-100 text-pink-700' :
                                  memory.category === 'work' ? 'bg-blue-100 text-blue-700' :
                                  memory.category === 'learning' ? 'bg-green-100 text-green-700' :
                                  memory.category === 'health' ? 'bg-red-100 text-red-700' :
                                  memory.category === 'financial' ? 'bg-yellow-100 text-yellow-700' :
                                  memory.category === 'travel' ? 'bg-purple-100 text-purple-700' :
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {memory.category}
                                </span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < memory.importance ? 'text-yellow-400' : 'text-gray-300'}>
                                      ⭐
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{memory.content}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{memory.timestamp}</span>
                                {memory.tags.length > 0 && (
                                  <span>• Tags: {memory.tags.join(', ')}</span>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteMemory(memory.id)}
                              className="ml-4"
                            >
                              🗑️
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-12">
                      <span className="text-4xl mb-4 block">🧠</span>
                      <p>No memories stored yet. Start by telling me something to remember!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Memory AI Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '🧠',
                    title: 'Perfect Memory',
                    description: 'Never forget anything - store unlimited information with perfect recall'
                  },
                  {
                    icon: '🔍',
                    title: 'Smart Search',
                    description: 'Find any memory instantly with intelligent search capabilities'
                  },
                  {
                    icon: '🏷️',
                    title: 'Auto-Categorization',
                    description: 'Automatically organize memories by type and importance'
                  },
                  {
                    icon: '💾',
                    title: 'Persistent Storage',
                    description: 'Your memories are safely stored and available anytime'
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
