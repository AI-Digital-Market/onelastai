import Head from 'next/head';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function ContentCreator() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('image');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [style, setStyle] = useState('realistic');
  const [duration, setDuration] = useState('10');

  const generateContent = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      // Mock content generation - replace with actual API call
      const generationTime = contentType === 'video' ? 8000 : 4000;
      await new Promise(resolve => setTimeout(resolve, generationTime));
      
      if (contentType === 'image') {
        setGeneratedContent({
          type: 'image',
          url: 'https://via.placeholder.com/512x512/8B5CF6/FFFFFF?text=AI+Generated+Image',
          prompt: prompt,
          style: style,
          timestamp: new Date().toLocaleString(),
          dimensions: '512x512',
          fileSize: '2.4 MB'
        });
      } else {
        setGeneratedContent({
          type: 'video',
          url: 'https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=AI+Generated+Video',
          prompt: prompt,
          style: style,
          duration: `${duration}s`,
          timestamp: new Date().toLocaleString(),
          dimensions: '640x360',
          fileSize: '15.7 MB'
        });
      }
    } catch (error) {
      console.error('Content generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadContent = () => {
    // Mock download functionality
    alert('Download functionality would be implemented here');
  };

  const shareContent = () => {
    // Mock share functionality
    alert('Share functionality would be implemented here');
  };

  const styles = [
    { id: 'realistic', name: 'Realistic', emoji: '📸' },
    { id: 'artistic', name: 'Artistic', emoji: '🎨' },
    { id: 'cartoon', name: 'Cartoon', emoji: '🎭' },
    { id: 'anime', name: 'Anime', emoji: '👾' },
    { id: 'cyberpunk', name: 'Cyberpunk', emoji: '🤖' },
    { id: 'vintage', name: 'Vintage', emoji: '📻' }
  ];

  return (
    <>
      <Head>
        <title>AI Content Creator - Image & Video Generation | onelastai.com</title>
        <meta name="description" content="Create stunning images and short videos with AI using simple text descriptions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-slate-900 dark:to-slate-800">
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-xl">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  AI Content Creator
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Transform your ideas into stunning images and short videos with AI-powered creation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Creation Panel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>🎬 Create Content</CardTitle>
                    <CardDescription>
                      Describe what you want to create and let AI bring it to life
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content Type Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Content Type</label>
                      <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
                        <button
                          onClick={() => setContentType('image')}
                          className={`px-6 py-2 rounded-md transition-all flex-1 ${
                            contentType === 'image'
                              ? 'bg-pink-500 text-white shadow-md'
                              : 'text-gray-600 hover:text-pink-500'
                          }`}
                        >
                          🖼️ Image
                        </button>
                        <button
                          onClick={() => setContentType('video')}
                          className={`px-6 py-2 rounded-md transition-all flex-1 ${
                            contentType === 'video'
                              ? 'bg-pink-500 text-white shadow-md'
                              : 'text-gray-600 hover:text-pink-500'
                          }`}
                        >
                          🎥 Video
                        </button>
                      </div>
                    </div>

                    {/* Prompt Input */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Describe your {contentType}
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={contentType === 'image' 
                          ? "A beautiful sunset over a mountain range with purple clouds, digital art style"
                          : "A cute cat playing with a ball of yarn in slow motion, warm lighting"
                        }
                        className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>

                    {/* Style Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Style</label>
                      <div className="grid grid-cols-3 gap-2">
                        {styles.map((styleOption) => (
                          <button
                            key={styleOption.id}
                            onClick={() => setStyle(styleOption.id)}
                            className={`p-3 rounded-lg border transition-all text-center ${
                              style === styleOption.id
                                ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-xl mb-1">{styleOption.emoji}</div>
                            <div className="text-xs font-medium">{styleOption.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Video Duration (only for videos) */}
                    {contentType === 'video' && (
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Duration (max 15 seconds)
                        </label>
                        <select
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500"
                        >
                          <option value="5">5 seconds</option>
                          <option value="10">10 seconds</option>
                          <option value="15">15 seconds</option>
                        </select>
                      </div>
                    )}

                    <Button
                      onClick={generateContent}
                      disabled={!prompt.trim() || isGenerating}
                      className="w-full h-12"
                    >
                      {isGenerating ? (
                        <>
                          <span className="animate-spin mr-2">⚡</span>
                          {contentType === 'video' ? 'Generating Video...' : 'Creating Image...'}
                        </>
                      ) : (
                        <>
                          <span className="mr-2">{contentType === 'video' ? '🎬' : '🎨'}</span>
                          Generate {contentType === 'video' ? 'Video' : 'Image'}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Preview Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>📱 Generated Content</CardTitle>
                    <CardDescription>
                      Your AI-created content will appear here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {generatedContent ? (
                      <div className="space-y-6">
                        {/* Content Preview */}
                        <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg flex items-center justify-center">
                          {generatedContent.type === 'image' ? (
                            <div className="text-center">
                              <div className="text-6xl mb-4">🖼️</div>
                              <p className="text-lg font-medium">AI Generated Image</p>
                              <p className="text-sm text-gray-600">{generatedContent.dimensions}</p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-6xl mb-4">🎥</div>
                              <p className="text-lg font-medium">AI Generated Video</p>
                              <p className="text-sm text-gray-600">{generatedContent.duration} • {generatedContent.dimensions}</p>
                            </div>
                          )}
                        </div>

                        {/* Content Details */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Prompt Used</h4>
                            <p className="text-sm text-gray-600 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                              "{generatedContent.prompt}"
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">Style</div>
                              <div className="font-medium capitalize">{generatedContent.style}</div>
                            </div>
                            <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">File Size</div>
                              <div className="font-medium">{generatedContent.fileSize}</div>
                            </div>
                          </div>

                          <div className="text-xs text-gray-500">
                            Generated: {generatedContent.timestamp}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-3">
                            <Button onClick={downloadContent} className="flex-1">
                              <span className="mr-2">📥</span>
                              Download
                            </Button>
                            <Button variant="outline" onClick={shareContent} className="flex-1">
                              <span className="mr-2">📤</span>
                              Share
                            </Button>
                            <Button 
                              variant="outline" 
                              onClick={() => setGeneratedContent(null)}
                              className="px-3"
                            >
                              🗑️
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-16">
                        <span className="text-6xl mb-6 block">🎨</span>
                        <h3 className="text-lg font-medium mb-2">Ready to Create</h3>
                        <p className="text-sm">Describe your content and click generate</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Examples Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Example Prompts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 text-pink-600">🖼️ Image Examples</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      "A futuristic city skyline at night with neon lights and flying cars"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      "A magical forest with glowing mushrooms and fairy lights"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      "Portrait of a wise old wizard with a long beard and pointed hat"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      "Abstract geometric patterns in vibrant colors"
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 text-rose-600">🎥 Video Examples</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      "A butterfly landing on a flower in slow motion"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      "Ocean waves crashing on a beach at sunset"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      "A coffee cup steaming on a wooden table, cozy atmosphere"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      "Falling autumn leaves in a park with warm golden light"
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Creator Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '🎨',
                    title: 'AI Image Generation',
                    description: 'Create stunning images from text descriptions with multiple style options'
                  },
                  {
                    icon: '🎬',
                    title: 'Short Video Creation',
                    description: 'Generate 5-15 second videos perfect for social media and presentations'
                  },
                  {
                    icon: '⚡',
                    title: 'Fast Processing',
                    description: 'Quick generation times with high-quality results every time'
                  },
                  {
                    icon: '📱',
                    title: 'Easy Sharing',
                    description: 'Download and share your creations across all platforms instantly'
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
