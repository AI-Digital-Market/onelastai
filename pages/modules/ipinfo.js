import Head from 'next/head';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

export default function IPInfoTracker() {
  const [ipInput, setIpInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [ipData, setIpData] = useState(null);
  const [userIP, setUserIP] = useState('192.168.1.1'); // Mock user IP

  const analyzeIP = async () => {
    if (!ipInput.trim()) return;
    
    setIsAnalyzing(true);
    try {
      // Mock IP analysis - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIpData({
        ip: ipInput,
        country: 'United States',
        region: 'California',
        city: 'San Francisco',
        latitude: 37.7749,
        longitude: -122.4194,
        timezone: 'America/Los_Angeles',
        isp: 'Cloudflare Inc.',
        organization: 'Cloudflare',
        asn: 'AS13335',
        threatLevel: 'Low',
        vpnDetected: false,
        proxyDetected: false,
        torDetected: false,
        securityScore: 95
      });
    } catch (error) {
      console.error('IP analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getMyIP = async () => {
    setIsAnalyzing(true);
    // Mock getting user's IP
    setTimeout(() => {
      setIpInput(userIP);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>IP Info Tracker - Advanced IP Intelligence | onelastai.com</title>
        <meta name="description" content="Get detailed information about any IP address including location, ISP, security status, and threat analysis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  IP Info Tracker
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Advanced IP intelligence and geolocation tracking with security analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>IP Address Lookup</CardTitle>
                    <CardDescription>
                      Enter any IP address to get detailed information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">IP Address</label>
                      <input
                        type="text"
                        value={ipInput}
                        onChange={(e) => setIpInput(e.target.value)}
                        placeholder="8.8.8.8"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={analyzeIP}
                        disabled={!ipInput.trim() || isAnalyzing}
                        className="flex-1"
                      >
                        {isAnalyzing ? (
                          <>
                            <span className="animate-spin mr-2">⚡</span>
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <span className="mr-2">🔍</span>
                            Analyze IP
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={getMyIP}
                        disabled={isAnalyzing}
                      >
                        <span className="mr-2">📍</span>
                        My IP
                      </Button>
                    </div>

                    {/* Quick IP Examples */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Quick Examples</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['8.8.8.8', '1.1.1.1', '208.67.222.222', '76.76.19.19'].map((ip) => (
                          <button
                            key={ip}
                            onClick={() => setIpInput(ip)}
                            className="p-2 text-sm border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {ip}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>IP Information</CardTitle>
                    <CardDescription>
                      Detailed analysis and security assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {ipData ? (
                      <div className="space-y-6">
                        {/* Location Info */}
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">📍 Location Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">Country</div>
                              <div className="font-medium">{ipData.country}</div>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">Region</div>
                              <div className="font-medium">{ipData.region}</div>
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">City</div>
                              <div className="font-medium">{ipData.city}</div>
                            </div>
                            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                              <div className="text-sm text-gray-600">Timezone</div>
                              <div className="font-medium">{ipData.timezone}</div>
                            </div>
                          </div>
                        </div>

                        {/* Network Info */}
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">🌐 Network Information</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                              <span className="text-sm">ISP:</span>
                              <span className="font-medium">{ipData.isp}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                              <span className="text-sm">Organization:</span>
                              <span className="font-medium">{ipData.organization}</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                              <span className="text-sm">ASN:</span>
                              <span className="font-medium">{ipData.asn}</span>
                            </div>
                          </div>
                        </div>

                        {/* Security Analysis */}
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600">🔒 Security Analysis</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                              <span>Security Score</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-green-500 transition-all duration-1000"
                                    style={{ width: `${ipData.securityScore}%` }}
                                  />
                                </div>
                                <span className="font-bold text-green-600">{ipData.securityScore}%</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <div className={`p-2 rounded text-center text-sm ${
                                ipData.vpnDetected ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                              }`}>
                                <div className="font-medium">VPN</div>
                                <div>{ipData.vpnDetected ? '❌ Detected' : '✅ Clean'}</div>
                              </div>
                              <div className={`p-2 rounded text-center text-sm ${
                                ipData.proxyDetected ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                              }`}>
                                <div className="font-medium">Proxy</div>
                                <div>{ipData.proxyDetected ? '❌ Detected' : '✅ Clean'}</div>
                              </div>
                              <div className={`p-2 rounded text-center text-sm ${
                                ipData.torDetected ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                              }`}>
                                <div className="font-medium">Tor</div>
                                <div>{ipData.torDetected ? '❌ Detected' : '✅ Clean'}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-12">
                        <span className="text-4xl mb-4 block">🌍</span>
                        <p>Enter an IP address to see detailed information</p>
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
              <h2 className="text-2xl font-bold text-center mb-8">IP Intelligence Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '📍',
                    title: 'Geolocation',
                    description: 'Precise location tracking with city-level accuracy'
                  },
                  {
                    icon: '🛡️',
                    title: 'Threat Detection',
                    description: 'Advanced security analysis and threat assessment'
                  },
                  {
                    icon: '🔍',
                    title: 'ISP Information',
                    description: 'Complete network provider and organization details'
                  },
                  {
                    icon: '⚡',
                    title: 'Real-time Data',
                    description: 'Live IP intelligence with instant results'
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
