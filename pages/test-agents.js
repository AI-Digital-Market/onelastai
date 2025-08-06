import Head from 'next/head';
import Header from '../components/Header';
import AIAgentTester from '../components/AIAgentTester';

export default function TestAgents() {
  return (
    <>
      <Head>
        <title>AI Agent Tester - onelastai.com</title>
        <meta name="description" content="Test AI agents and services for onelastai.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <Header />
        
        <main className="pt-32 pb-16">
          <AIAgentTester />
        </main>
        
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
}
