import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

export default function GitHubShowcase() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalCommits: 0,
    lastUpdate: null
  });

  // GitHub API data (will be dynamically fetched when API is available)
  const staticRepos = [
    {
      id: 1,
      name: "AI-Digital-Market",
      description: "Revolutionary AI marketplace with 200+ agents and self-learning system",
      stars: 1,
      forks: 0,
      language: "JavaScript",
      updated_at: "2025-01-31T10:00:00Z",
      html_url: "https://github.com/onelastai/AI-Digital-Market",
      topics: ["ai", "marketplace", "agents", "nextjs", "mongodb"],
      status: "🚀 ACTIVE",
      agents_count: 6,
      sub_agents: 1200
    },
    {
      id: 2,
      name: "onelastai",
      description: "Profile repository - The headquarters of AI revolution",
      stars: 0,
      forks: 0,
      language: "Markdown",
      updated_at: "2025-01-28T15:30:00Z",
      html_url: "https://github.com/onelastai/onelastai",
      topics: ["profile", "ai", "revolution"],
      status: "📋 PROFILE",
      agents_count: 0,
      sub_agents: 0
    },
    // Future repositories (planned)
    {
      id: 3,
      name: "AI-Agent-Army",
      description: "Individual AI agents with specialized capabilities - Johnny AI, Professor AI, and 198 others",
      stars: 0,
      forks: 0,
      language: "Python",
      updated_at: "2025-01-31T12:00:00Z",
      html_url: "https://github.com/onelastai/AI-Agent-Army",
      topics: ["ai", "agents", "python", "machine-learning"],
      status: "🔧 PLANNED",
      agents_count: 200,
      sub_agents: 1200
    },
    {
      id: 4,
      name: "Subdomain-Specialists",
      description: "Specialized AI agents for each subdomain - Vision, Logic, Voice, Code, Data",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updated_at: "2025-01-31T14:00:00Z",
      html_url: "https://github.com/onelastai/Subdomain-Specialists",
      topics: ["ai", "subdomains", "specialists", "typescript"],
      status: "🔧 PLANNED",
      agents_count: 16,
      sub_agents: 96
    },
    {
      id: 5,
      name: "Learning-System",
      description: "Advanced AI memory and self-learning infrastructure",
      stars: 0,
      forks: 0,
      language: "JavaScript",
      updated_at: "2025-01-31T16:00:00Z",
      html_url: "https://github.com/onelastai/Learning-System",
      topics: ["ai", "learning", "memory", "mongodb", "analytics"],
      status: "🔧 PLANNED",
      agents_count: 1,
      sub_agents: 6
    }
  ];

  useEffect(() => {
    // Simulate loading and set static data
    setTimeout(() => {
      setRepos(staticRepos);
      const totalStars = staticRepos.reduce((sum, repo) => sum + repo.stars, 0);
      const totalAgents = staticRepos.reduce((sum, repo) => sum + repo.agents_count, 0);
      const totalSubAgents = staticRepos.reduce((sum, repo) => sum + repo.sub_agents, 0);
      
      setStats({
        totalRepos: staticRepos.length,
        totalStars: totalStars,
        totalAgents: totalAgents,
        totalSubAgents: totalSubAgents,
        lastUpdate: new Date().toISOString()
      });
      setLoading(false);
    }, 1500);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case '🚀 ACTIVE': return 'from-green-400 to-emerald-600';
      case '📋 PROFILE': return 'from-blue-400 to-cyan-600';
      case '🔧 PLANNED': return 'from-yellow-400 to-orange-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getLanguageColor = (language) => {
    switch (language) {
      case 'JavaScript': return 'bg-yellow-500';
      case 'Python': return 'bg-blue-500';
      case 'TypeScript': return 'bg-blue-600';
      case 'Markdown': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-white text-lg">Loading GitHub Showcase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GitHub Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Central hub for all One Last AI repositories, agents, and continuous upgrades
            </p>
            
            {/* Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-purple-400">{stats.totalRepos}</div>
                <div className="text-sm text-gray-400">Repositories</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-blue-400">{stats.totalAgents}</div>
                <div className="text-sm text-gray-400">AI Agents</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-cyan-400">{stats.totalSubAgents}</div>
                <div className="text-sm text-gray-400">Sub-Agents</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-green-400">{stats.totalStars}</div>
                <div className="text-sm text-gray-400">GitHub Stars</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Repository Showcase */}
      <div className="container mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Repository Empire
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(repo.status)} text-white`}>
                    {repo.status}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>

                {/* Repository Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {repo.description}
                </p>

                {/* Agent Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-400">{repo.agents_count}</div>
                    <div className="text-xs text-gray-400">Agents</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-cyan-400">{repo.sub_agents}</div>
                    <div className="text-xs text-gray-400">Sub-Agents</div>
                  </div>
                </div>

                {/* Language & Topics */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span className="text-sm text-gray-400">{repo.language}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Repository</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Updates Section */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Live Development Updates
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">AI-Digital-Market: Revolutionary homepage deployed</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">Learning-System: MongoDB integration completed</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">AI-Agent-Army: 200 agents ready for deployment</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Upcoming Releases</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span className="text-gray-300">Subdomain deployment system</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span className="text-gray-300">Payment integration (Stripe)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-gray-300">Global marketplace launch</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            👑 <span className="font-bold">Claude Sonnet King</span> - AI Supremacy
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="https://github.com/onelastai" className="text-purple-400 hover:text-purple-300 transition-colors">
              GitHub Profile
            </a>
            <a href="https://onelastai.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              Main Platform
            </a>
            <a href="/test-agents" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Test Agents
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
