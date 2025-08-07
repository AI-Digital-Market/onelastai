import React, { useState, useRef } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { EyeIcon, PhotoIcon, CameraIcon, CloudArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function VisualModule() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate image analysis
    setTimeout(() => {
      const analysisResults = {
        objects: [
          { name: 'person', confidence: 95, bbox: [120, 50, 200, 300] },
          { name: 'car', confidence: 87, bbox: [300, 150, 150, 100] },
          { name: 'building', confidence: 92, bbox: [0, 0, 400, 200] }
        ],
        colors: [
          { name: 'Blue', percentage: 35, hex: '#3B82F6' },
          { name: 'Gray', percentage: 25, hex: '#6B7280' },
          { name: 'Green', percentage: 20, hex: '#10B981' },
          { name: 'White', percentage: 15, hex: '#FFFFFF' },
          { name: 'Black', percentage: 5, hex: '#000000' }
        ],
        scene: 'urban street scene',
        mood: 'calm and peaceful',
        tags: ['outdoor', 'daytime', 'urban', 'street', 'architecture'],
        technical: {
          resolution: '1920x1080',
          fileSize: '2.3 MB',
          format: selectedFile.type.split('/')[1].toUpperCase(),
          quality: 'High'
        },
        text: Math.random() > 0.5 ? ['STOP', 'Main Street', '2024'] : [],
        faces: Math.floor(Math.random() * 3) + 1
      };
      
      setAnalysis(analysisResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const agentData = {
    id: 'visual',
    name: 'Visual AI',
    description: 'Advanced computer vision system that analyzes images and videos to extract objects, text, faces, scenes, and provides detailed insights with high accuracy recognition.',
    icon: '👁️',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      'Object detection and classification',
      'Optical Character Recognition (OCR)',
      'Facial recognition and emotion analysis',
      'Scene understanding and description',
      'Color analysis and dominant palette extraction',
      'Image quality assessment and enhancement suggestions'
    ]
  };

  const VisualDemo = () => (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <EyeIcon className="w-5 h-5 mr-2 text-green-400" />
            Visual Analysis Input
          </CardTitle>
          <CardDescription className="text-gray-400">
            Upload an image for AI-powered visual analysis and object recognition
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!preview ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors"
            >
              <CloudArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Click to upload an image</p>
              <p className="text-sm text-gray-500">Supports JPG, PNG, GIF up to 10MB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-4">
              {/* Image Preview */}
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-96 object-contain rounded-lg border border-gray-600"
                />
                <Button
                  onClick={() => {
                    setPreview(null);
                    setSelectedFile(null);
                    setAnalysis(null);
                  }}
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 bg-gray-800/80 border-gray-600"
                >
                  ✕ Remove
                </Button>
              </div>
              
              {/* Analysis Button */}
              <div className="flex justify-center">
                <Button
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
                      Analyze Image
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Quick Upload Options */}
          {!preview && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center py-6 border-gray-600 hover:bg-gray-700"
              >
                <PhotoIcon className="w-8 h-8 mb-2 text-green-400" />
                <span>Upload Photo</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center py-6 border-gray-600 hover:bg-gray-700"
              >
                <CameraIcon className="w-8 h-8 mb-2 text-green-400" />
                <span>Take Photo</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center py-6 border-gray-600 hover:bg-gray-700"
              >
                <span className="text-2xl mb-2">🔗</span>
                <span>From URL</span>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Object Detection */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">🎯 Object Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {analysis.objects.map((object, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium capitalize">{object.name}</h4>
                      <span className="text-green-400 text-sm">{object.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${object.confidence}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Color Analysis */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">🎨 Color Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analysis.colors.map((color, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div 
                      className="w-8 h-8 rounded-full border border-gray-600"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white">{color.name}</span>
                        <span className="text-gray-400 text-sm">{color.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${color.percentage}%`,
                            backgroundColor: color.hex
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scene & Text Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">🏞️ Scene Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-gray-400">Scene Type:</span>
                  <p className="text-white font-medium capitalize">{analysis.scene}</p>
                </div>
                <div>
                  <span className="text-gray-400">Mood:</span>
                  <p className="text-white font-medium capitalize">{analysis.mood}</p>
                </div>
                <div>
                  <span className="text-gray-400">Tags:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {analysis.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">📝 Text Detection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.text.length > 0 ? (
                  <div>
                    <span className="text-gray-400">Detected Text:</span>
                    <div className="mt-2 space-y-1">
                      {analysis.text.map((text, index) => (
                        <div key={index} className="bg-gray-800/50 p-2 rounded">
                          <span className="text-white font-mono">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">No text detected in this image</p>
                )}
                
                <div>
                  <span className="text-gray-400">Faces Detected:</span>
                  <p className="text-white font-medium">{analysis.faces} face(s)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Info */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">⚙️ Technical Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <span className="text-gray-400 text-sm">Resolution</span>
                  <p className="text-white font-medium">{analysis.technical.resolution}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">File Size</span>
                  <p className="text-white font-medium">{analysis.technical.fileSize}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Format</span>
                  <p className="text-white font-medium">{analysis.technical.format}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Quality</span>
                  <p className="text-white font-medium">{analysis.technical.quality}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Visual AI - Computer Vision & Image Analysis | onelastai.com</title>
        <meta name="description" content="Advanced AI-powered visual analysis for object detection, scene understanding, and image intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <VisualDemo />
      </AgentPageLayout>
    </>
  );
}
