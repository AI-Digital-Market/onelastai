/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['onelastai.com', 'localhost', 'mood.onelastai.com', 'api.onelastai.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://onelastai.com',
  },
  async rewrites() {
    return [
      // API subdomain routing
      {
        source: '/api/:path*',
        destination: '/api/:path*',
        has: [
          {
            type: 'host',
            value: 'api.onelastai.com',
          },
        ],
      },
      // Chat AI (Voice + Text) subdomain routing
      {
        source: '/:path*',
        destination: '/modules/chat/:path*',
        has: [
          {
            type: 'host',
            value: 'chat.onelastai.com',
          },
        ],
      },
      // Mood Analyzer subdomain routing
      {
        source: '/:path*',
        destination: '/modules/mood/:path*',
        has: [
          {
            type: 'host',
            value: 'mood.onelastai.com',
          },
        ],
      },
      // Visual AI subdomain routing
      {
        source: '/:path*',
        destination: '/modules/visual/:path*',
        has: [
          {
            type: 'host',
            value: 'visual.onelastai.com',
          },
        ],
      },
      // IP Info subdomain routing
      {
        source: '/:path*',
        destination: '/modules/ipinfo/:path*',
        has: [
          {
            type: 'host',
            value: 'ipinfo.onelastai.com',
          },
        ],
      },
      // Memory AI subdomain routing
      {
        source: '/:path*',
        destination: '/modules/memory/:path*',
        has: [
          {
            type: 'host',
            value: 'memory.onelastai.com',
          },
        ],
      },
      // Content Creator (Image & Video) subdomain routing
      {
        source: '/:path*',
        destination: '/modules/creator/:path*',
        has: [
          {
            type: 'host',
            value: 'creator.onelastai.com',
          },
        ],
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://onelastai.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
