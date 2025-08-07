import React, { useState } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { PhotoIcon, VideoCameraIcon, SparklesIcon, ClockIcon, SwatchIcon } from '@heroicons/react/24/outline';

export default function CreatorModule() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('image');
  const [style, setStyle] = useState('realistic');
  const [videoDuration, setVideoDuration] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateContent = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate content generation
    setTimeout(() => {
      const mockContent = {
        type: contentType,
        prompt: prompt,
        style: style,
        duration: contentType === 'video' ? videoDuration : null,
        url: contentType === 'image' 
          ? `https://picsum.photos/800/600?random=${Date.now()}` 
          : 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        thumbnail: 'https://picsum.photos/400/300?random=' + Date.now(),
        metadata: {
          resolution: contentType === 'image' ? '800x600' : '1280x720',
          size: contentType === 'image' ? '2.1 MB' : '8.5 MB',
          format: contentType === 'image' ? 'PNG' : 'MP4',
          generatedAt: new Date().toLocaleString()
        }
      };
      
      setGeneratedContent(mockContent);
      setIsGenerating(false);
    }, 4000);
  };

  const imageStyles = [
    { id: 'realistic', name: 'Realistic', emoji: '📸' },
    { id: 'artistic', name: 'Artistic', emoji: '🎨' },
    { id: 'cartoon', name: 'Cartoon', emoji: '🎭' },
    { id: 'anime', name: 'Anime', emoji: '🌸' },
    { id: 'sketch', name: 'Sketch', emoji: '✏️' },
    { id: 'oil_painting', name: 'Oil Painting', emoji: '🖼️' }
  ];

  const videoStyles = [
    { id: 'cinematic', name: 'Cinematic', emoji: '🎬' },
    { id: 'documentary', name: 'Documentary', emoji: '📹' },
    { id: 'animation', name: 'Animation', emoji: '🎞️' },
    { id: 'timelapse', name: 'Timelapse', emoji: '⏱️' },
    { id: 'motion_graphic', name: 'Motion Graphics', emoji: '📊' },
    { id: 'explainer', name: 'Explainer', emoji: '💡' }
  ];

  const promptExamples = {
    image: [
      "A serene mountain landscape at sunset with purple clouds",
      "A futuristic city with flying cars and neon lights",
      "A cute robot helping in a modern kitchen",
      "An abstract representation of artificial intelligence"
    ],
    video: [
      "A flower blooming in fast motion with morning dew",
      "A paper airplane transforming into a real airplane",
      "Ocean waves gently hitting a peaceful beach",
      "A time-lapse of a busy city street at night"
    ]
  };

  const agentData = {
    id: 'creator',
    name: 'Content Creator',
    description: 'Advanced AI content generator that creates stunning images and short videos from text descriptions with multiple artistic styles and precise duration control.',
    icon: '🎨',
    gradient: 'from-amber-500 to-orange-600',
    features: [
      'High-quality image generation from text prompts',
      'Short video creation (10-15 seconds max)',
      'Multiple artistic styles and themes',
      'Precise duration and format control',
      'Batch content generation capabilities',
      'Commercial-use ready content licensing'
    ]
  };

  const CreatorDemo = () => (
    <div className="space-y-6">
      {/* Content Type Selection */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setContentType('image')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              contentType === 'image'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <PhotoIcon className="w-4 h-4 inline mr-2" />
            Images
          </button>
          <button
            onClick={() => setContentType('video')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              contentType === 'video'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <VideoCameraIcon className="w-4 h-4 inline mr-2" />
            Videos
          </button>
        </div>
      </div>

      {/* Input Section */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-amber-400" />
            Create {contentType === 'image' ? 'Image' : 'Video'} from Text
          </CardTitle>
          <CardDescription className="text-gray-400">
            {contentType === 'image' 
              ? 'Describe the image you want to create in detail'
              : 'Describe the short video you want to generate (10-15 seconds max)'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={contentType === 'image' 
                ? "Describe your image in detail... (e.g., 'A magical forest with glowing butterflies at twilight')"
                : "Describe your video scene... (e.g., 'A coffee cup steaming on a wooden table with morning sunlight')"
              }
              className="w-full h-24 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
            />
            
            {/* Style Selection */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm">Style:</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {(contentType === 'image' ? imageStyles : videoStyles).map((styleOption) => (
                  <button
                    key={styleOption.id}
                    onClick={() => setStyle(styleOption.id)}
                    className={`p-3 rounded-lg border transition-all ${
                      style === styleOption.id
                        ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-lg mb-1">{styleOption.emoji}</div>
                    <div className="text-sm">{styleOption.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Video Duration (only for videos) */}
            {contentType === 'video' && (
              <div className="space-y-2">
                <label className="text-gray-400 text-sm flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  Duration: {videoDuration} seconds
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  value={videoDuration}
                  onChange={(e) => setVideoDuration(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none slider-thumb"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5s</span>
                  <span>10s</span>
                  <span>15s (max)</span>
                </div>
              </div>
            )}

            <Button
              onClick={generateContent}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                  Generating {contentType}...
                </>
              ) : (
                <>
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Generate {contentType === 'image' ? 'Image' : 'Video'}
                </>
              )}
            </Button>
          </div>

          {/* Quick Examples */}
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">Quick examples:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {promptExamples[contentType].map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setPrompt(example)}
                  className="text-left justify-start border-gray-600 hover:bg-gray-700 text-sm h-auto py-2"
                >
                  "{example}"
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generated Content */}
      {generatedContent && (
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              {generatedContent.type === 'image' ? (
                <PhotoIcon className="w-5 h-5 mr-2 text-amber-400" />
              ) : (
                <VideoCameraIcon className="w-5 h-5 mr-2 text-amber-400" />
              )}
              Generated {generatedContent.type === 'image' ? 'Image' : 'Video'}
            </CardTitle>
            <CardDescription className="text-gray-400">
              Created from: "{generatedContent.prompt}"
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Content Display */}
            <div className="relative rounded-lg overflow-hidden border border-gray-600">
              {generatedContent.type === 'image' ? (
                <img
                  src={generatedContent.url}
                  alt="Generated content"
                  className="w-full h-auto max-h-96 object-cover"
                />
              ) : (
                <div className="relative">
                  <img
                    src={generatedContent.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <VideoCameraIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-sm">
                    {generatedContent.duration}s
                  </div>
                </div>
              )}
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-800/50 rounded-lg">
              <div>
                <span className="text-gray-400 text-sm">Style</span>
                <p className="text-white font-medium capitalize">{generatedContent.style.replace('_', ' ')}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Resolution</span>
                <p className="text-white font-medium">{generatedContent.metadata.resolution}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Size</span>
                <p className="text-white font-medium">{generatedContent.metadata.size}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Format</span>
                <p className="text-white font-medium">{generatedContent.metadata.format}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
              >
                📥 Download
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
              >
                🔄 Generate Variation
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
              >
                ✏️ Edit Prompt
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
              >
                📤 Share
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <div className="text-white font-medium mb-1">Multiple Styles</div>
            <div className="text-gray-400 text-sm">6 artistic styles for images and videos</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-white font-medium mb-1">Fast Generation</div>
            <div className="text-gray-400 text-sm">High-quality content in seconds</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-2">📐</div>
            <div className="text-white font-medium mb-1">Precise Control</div>
            <div className="text-gray-400 text-sm">Control duration, style, and format</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Content Creator - AI Image & Video Generator | onelastai.com</title>
        <meta name="description" content="AI-powered content creation tool that generates images and short videos from text descriptions with multiple artistic styles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <CreatorDemo />
      </AgentPageLayout>
    </>
  );
}
