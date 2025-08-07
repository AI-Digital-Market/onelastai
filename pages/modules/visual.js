import Head from 'next/head';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function VisualAI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [analysisType, setAnalysisType] = useState('general');
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    try {
      // Mock analysis - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockAnalysis = {
        general: {
          objects: ['person', 'laptop', 'desk', 'books', 'coffee cup'],
          scene: 'office workspace',
          confidence: 0.94,
          description: 'A professional workspace with a person working on a laptop at a desk, surrounded by books and office supplies.',
          colors: ['blue', 'white', 'brown', 'black'],
          lighting: 'natural daylight from window'
        },
        text: {
          extractedText: 'Sample text detected in image',
          language: 'English',
          confidence: 0.88,
          regions: 3
        },
        face: {
          faces: 1,
          emotions: { happy: 0.7, neutral: 0.2, focused: 0.1 },
          age: 'estimated 25-35',
          gender: 'detected'
        },
        medical: {
          findings: 'No medical analysis available in demo',
          recommendations: 'Consult healthcare professional for medical images'
        }
      };
      
      setAnalysis(mockAnalysis[analysisType]);
    } catch (error) {
      console.error('Image analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analysisTypes = [
    { id: 'general', name: 'General Analysis', icon: '🔍', description: 'Object detection and scene understanding' },
    { id: 'text', name: 'Text Recognition', icon: '📝', description: 'Extract and analyze text in images' },
    { id: 'face', name: 'Face Analysis', icon: '👤', description: 'Facial recognition and emotion detection' },
    { id: 'medical', name: 'Medical Imaging', icon: '🏥', description: 'Medical image analysis (demo only)' }
  ];

  return (
    <>
      <Head>
        <title>Visual AI Analyzer - Advanced Image Recognition | onelastai.com</title>
        <meta name="description" content="Analyze images with AI-powered computer vision for object detection, text recognition, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-900 dark:to-slate-800">
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl">
                  <span className="text-2xl text-white">👁️</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Visual AI Analyzer
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Advanced AI-powered computer vision for image analysis and recognition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upload and Settings */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Image Upload & Settings</CardTitle>
                    <CardDescription>
                      Upload an image and select analysis type
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Image Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      {selectedImage ? (
                        <div className="space-y-4">
                          <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <Button
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full"
                          >
                            Change Image
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <span className="text-6xl">📷</span>
                          <div>
                            <p className="text-lg font-medium mb-2">Upload Image</p>
                            <p className="text-sm text-gray-500 mb-4">
                              Drop an image here or click to browse
                            </p>
                            <Button
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full"
                            >
                              Select Image
                            </Button>
                          </div>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    {/* Analysis Type Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Analysis Type</label>
                      <div className="space-y-2">
                        {analysisTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setAnalysisType(type.id)}
                            className={`w-full p-3 text-left rounded-lg border transition-all ${
                              analysisType === type.id
                                ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{type.icon}</span>
                              <div>
                                <div className="font-medium">{type.name}</div>
                                <div className="text-xs text-gray-500">{type.description}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={analyzeImage}
                      disabled={!selectedImage || isAnalyzing}
                      className="w-full h-12"
                    >
                      {isAnalyzing ? (
                        <>
                          <span className="animate-spin mr-2">⚡</span>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">🧠</span>
                          Analyze Image
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Analysis Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>
                      AI-powered visual analysis and insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {analysis ? (
                      <div className="space-y-6">
                        {analysisType === 'general' && (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                <h4 className="font-medium mb-2">Scene</h4>
                                <p className="text-sm capitalize">{analysis.scene}</p>
                              </div>
                              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <h4 className="font-medium mb-2">Confidence</h4>
                                <p className="text-sm">{Math.round(analysis.confidence * 100)}%</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-3">Description</h4>
                              <p className="text-sm text-gray-600 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                {analysis.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-medium mb-3">Detected Objects</h4>
                              <div className="flex flex-wrap gap-2">
                                {analysis.objects.map((object, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm"
                                  >
                                    {object}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-3">Color Palette</h4>
                              <div className="flex gap-2">
                                {analysis.colors.map((color, index) => (
                                  <div
                                    key={index}
                                    className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                                    style={{ backgroundColor: color }}
                                    title={color}
                                  />
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {analysisType === 'text' && (
                          <>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                                <div className="text-xl font-bold text-blue-600">{analysis.regions}</div>
                                <div className="text-xs text-gray-600">Text Regions</div>
                              </div>
                              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                                <div className="text-xl font-bold text-green-600">{Math.round(analysis.confidence * 100)}%</div>
                                <div className="text-xs text-gray-600">Accuracy</div>
                              </div>
                              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                                <div className="text-xl font-bold text-purple-600">{analysis.language}</div>
                                <div className="text-xs text-gray-600">Language</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-3">Extracted Text</h4>
                              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-sm font-mono">{analysis.extractedText}</p>
                              </div>
                            </div>
                          </>
                        )}

                        {analysisType === 'face' && (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
                                <div className="text-xl font-bold text-pink-600">{analysis.faces}</div>
                                <div className="text-xs text-gray-600">Faces Detected</div>
                              </div>
                              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-center">
                                <div className="text-xl font-bold text-indigo-600">{analysis.age}</div>
                                <div className="text-xs text-gray-600">Estimated Age</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-3">Emotion Analysis</h4>
                              {Object.entries(analysis.emotions).map(([emotion, value]) => (
                                <div key={emotion} className="flex items-center justify-between mb-2">
                                  <span className="capitalize">{emotion}</span>
                                  <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-pink-500 transition-all duration-1000"
                                        style={{ width: `${value * 100}%` }}
                                      />
                                    </div>
                                    <span className="text-sm">{Math.round(value * 100)}%</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {analysisType === 'medical' && (
                          <div className="text-center py-8">
                            <span className="text-6xl mb-4 block">🏥</span>
                            <h3 className="text-lg font-medium mb-2">Medical Analysis</h3>
                            <p className="text-sm text-gray-600 mb-4">{analysis.findings}</p>
                            <p className="text-xs text-orange-600 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                              ⚠️ {analysis.recommendations}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-16">
                        <span className="text-6xl mb-6 block">🖼️</span>
                        <h3 className="text-lg font-medium mb-2">Ready to Analyze</h3>
                        <p className="text-sm">Upload an image and select analysis type to begin</p>
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
              <h2 className="text-2xl font-bold text-center mb-8">Computer Vision Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Object Detection',
                    description: 'Identify and classify objects, people, and scenes in images'
                  },
                  {
                    icon: '📝',
                    title: 'OCR Technology',
                    description: 'Extract and digitize text from images with high accuracy'
                  },
                  {
                    icon: '😊',
                    title: 'Emotion Recognition',
                    description: 'Analyze facial expressions and detect emotional states'
                  },
                  {
                    icon: '🔬',
                    title: 'Advanced Analysis',
                    description: 'Specialized analysis for medical, scientific, and technical images'
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
