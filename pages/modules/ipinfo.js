import React, { useState } from 'react';
import Head from 'next/head';
import AgentPageLayout from '../../components/AgentPageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { GlobeAltIcon, ShieldCheckIcon, MagnifyingGlassIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function IPInfoModule() {
  const [ipAddress, setIpAddress] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const analyzeIP = async () => {
    if (!ipAddress.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate IP analysis
    setTimeout(() => {
      const mockData = {
        ip: ipAddress,
        location: {
          country: 'United States',
          countryCode: 'US',
          region: 'California',
          city: 'San Francisco',
          zipCode: '94102',
          coordinates: { lat: 37.7749, lon: -122.4194 },
          timezone: 'America/Los_Angeles'
        },
        network: {
          isp: 'Cloudflare, Inc.',
          organization: 'Cloudflare',
          asn: 'AS13335',
          domain: 'cloudflare.com',
          type: 'hosting'
        },
        security: {
          threat: Math.random() > 0.7 ? 'medium' : 'low',
          isProxy: Math.random() > 0.8,
          isVPN: Math.random() > 0.9,
          isTor: false,
          reputation: Math.random() > 0.3 ? 'good' : 'suspicious',
          blacklisted: false
        },
        usage: {
          mobile: Math.random() > 0.6,
          proxy: Math.random() > 0.8,
          hosting: Math.random() > 0.5
        }
      };
      
      setAnalysis(mockData);
      setIsAnalyzing(false);
    }, 2500);
  };

  const detectMyIP = async () => {
    setIpAddress('192.168.1.1');
    // In real implementation, you'd fetch the user's actual IP
  };

  const getThreatLevel = (level) => {
    const levels = {
      low: { color: 'text-green-400', bg: 'bg-green-500/20', icon: '🟢' },
      medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', icon: '🟡' },
      high: { color: 'text-red-400', bg: 'bg-red-500/20', icon: '🔴' }
    };
    return levels[level] || levels.low;
  };

  const agentData = {
    id: 'ipinfo',
    name: 'IP Intelligence',
    description: 'Comprehensive IP address analysis system providing geolocation, network information, security assessment, and threat intelligence for cybersecurity and network administration.',
    icon: '🌐',
    gradient: 'from-orange-500 to-red-600',
    features: [
      'Real-time IP geolocation and mapping',
      'ISP and network organization detection',
      'VPN, proxy, and Tor identification',
      'Security threat assessment and reputation scoring',
      'Network topology and routing analysis',
      'Bulk IP analysis and monitoring tools'
    ]
  };

  const IPDemo = () => (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <GlobeAltIcon className="w-5 h-5 mr-2 text-orange-400" />
            IP Address Analysis
          </CardTitle>
          <CardDescription className="text-gray-400">
            Enter an IP address to get detailed location, network, and security information
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="Enter IP address (e.g., 8.8.8.8)"
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
            />
            <Button
              onClick={detectMyIP}
              variant="outline"
              className="border-gray-600 hover:bg-gray-700"
            >
              My IP
            </Button>
            <Button
              onClick={analyzeIP}
              disabled={!ipAddress.trim() || isAnalyzing}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                  Analyzing...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>

          {/* Quick Examples */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { ip: '8.8.8.8', name: 'Google DNS' },
              { ip: '1.1.1.1', name: 'Cloudflare' },
              { ip: '208.67.222.222', name: 'OpenDNS' },
              { ip: '9.9.9.9', name: 'Quad9' }
            ].map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setIpAddress(example.ip)}
                className="border-gray-600 hover:bg-gray-700 text-xs"
              >
                {example.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Location Information */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">📍 Location Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country:</span>
                    <span className="text-white">{analysis.location.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Region:</span>
                    <span className="text-white">{analysis.location.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">City:</span>
                    <span className="text-white">{analysis.location.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ZIP Code:</span>
                    <span className="text-white">{analysis.location.zipCode}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latitude:</span>
                    <span className="text-white">{analysis.location.coordinates.lat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Longitude:</span>
                    <span className="text-white">{analysis.location.coordinates.lon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timezone:</span>
                    <span className="text-white">{analysis.location.timezone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country Code:</span>
                    <span className="text-white">{analysis.location.countryCode}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Information */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">🌐 Network Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">ISP:</span>
                    <span className="text-white">{analysis.network.isp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Organization:</span>
                    <span className="text-white">{analysis.network.organization}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">ASN:</span>
                    <span className="text-white">{analysis.network.asn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Domain:</span>
                    <span className="text-white">{analysis.network.domain}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Assessment */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-orange-400" />
                Security Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Threat Level */}
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Threat Level</span>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getThreatLevel(analysis.security.threat).bg}`}>
                    <span>{getThreatLevel(analysis.security.threat).icon}</span>
                    <span className={`capitalize ${getThreatLevel(analysis.security.threat).color}`}>
                      {analysis.security.threat}
                    </span>
                  </div>
                </div>

                {/* Security Checks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Proxy Detection:</span>
                      <span className={analysis.security.isProxy ? 'text-yellow-400' : 'text-green-400'}>
                        {analysis.security.isProxy ? '⚠️ Detected' : '✅ Clean'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">VPN Detection:</span>
                      <span className={analysis.security.isVPN ? 'text-yellow-400' : 'text-green-400'}>
                        {analysis.security.isVPN ? '⚠️ Detected' : '✅ Clean'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Tor Exit Node:</span>
                      <span className={analysis.security.isTor ? 'text-red-400' : 'text-green-400'}>
                        {analysis.security.isTor ? '🚫 Detected' : '✅ Clean'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Reputation:</span>
                      <span className={analysis.security.reputation === 'good' ? 'text-green-400' : 'text-yellow-400'}>
                        {analysis.security.reputation === 'good' ? '✅ Good' : '⚠️ Suspicious'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Blacklisted:</span>
                      <span className={analysis.security.blacklisted ? 'text-red-400' : 'text-green-400'}>
                        {analysis.security.blacklisted ? '🚫 Yes' : '✅ No'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Mobile Network:</span>
                      <span className="text-gray-300">
                        {analysis.usage.mobile ? '📱 Yes' : '🖥️ No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Analysis */}
          <Card className="bg-gray-900/50 border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-white">📊 Usage Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-white font-medium">Mobile</div>
                  <div className="text-gray-400 text-sm">
                    {analysis.usage.mobile ? 'Detected' : 'Not Detected'}
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-white font-medium">Proxy</div>
                  <div className="text-gray-400 text-sm">
                    {analysis.usage.proxy ? 'Active' : 'Not Active'}
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="text-white font-medium">Hosting</div>
                  <div className="text-gray-400 text-sm">
                    {analysis.usage.hosting ? 'Data Center' : 'Residential'}
                  </div>
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
        <title>IP Intelligence - Network Analysis & Security | onelastai.com</title>
        <meta name="description" content="Advanced IP address intelligence with geolocation, network analysis, and security threat assessment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AgentPageLayout agent={agentData}>
        <IPDemo />
      </AgentPageLayout>
    </>
  );
}
