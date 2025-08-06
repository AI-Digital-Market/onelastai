# 🚀 AI Digital Market - API Setup Guide

## Quick Start for API Keys

### 1. Create Environment File
Create a `.env.local` file in your project root:

```bash
# Copy from .env.example
cp .env.example .env.local
```

### 2. Get Your API Keys

#### OpenAI (Required for Chat & Image Generation)
1. Visit: https://platform.openai.com/api-keys
2. Create account and add payment method
3. Generate new API key
4. Add to `.env.local`:
```
OPENAI_API_KEY=sk-your-key-here
```

#### Anthropic Claude (Optional)
1. Visit: https://console.anthropic.com/
2. Get API key
3. Add to `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

#### Stability AI (Optional - for advanced image generation)
1. Visit: https://platform.stability.ai/
2. Get API key
3. Add to `.env.local`:
```
STABILITY_API_KEY=sk-your-key-here
```

### 3. Test Your Setup

1. **Start Development Server:**
```bash
npm run dev
```

2. **Visit Test Page:**
```
http://localhost:3000/test-agents
```

3. **Test Each AI Service:**
   - 🤖 AI Chat: "Explain artificial intelligence"
   - 📝 Content Writing: "Write a blog post about AI trends"
   - 🎨 Image Generation: "A futuristic AI robot in a digital landscape"
   - 📊 Analytics: "Analyze user engagement metrics"

### 4. API Cost Estimates

| Service | Cost per 1K tokens | Example Usage |
|---------|-------------------|---------------|
| GPT-4 Chat | ~$0.03 | 750 words |
| GPT-3.5 Chat | ~$0.002 | 750 words |
| DALL-E 3 | $0.04 per image | 1024x1024 |
| Claude-3 | ~$0.015 | 750 words |

### 5. Production Deployment

For production deployment:
1. Add API keys to your hosting platform's environment variables
2. Set `NODE_ENV=production`
3. Configure rate limiting and usage monitoring
4. Set up billing alerts

### 6. Security Best Practices

✅ **DO:**
- Keep API keys in `.env.local` (never commit)
- Use different keys for development/production
- Monitor API usage and costs
- Implement rate limiting

❌ **DON'T:**
- Commit `.env.local` to git
- Share API keys in code or screenshots
- Use production keys in development
- Ignore usage monitoring

### 7. Troubleshooting

**"API key not found" error:**
- Check `.env.local` exists in project root
- Restart development server after adding keys
- Verify key format (starts with sk-)

**"Rate limit exceeded":**
- Check OpenAI usage dashboard
- Implement request queuing
- Upgrade OpenAI plan if needed

**"Insufficient quota":**
- Add payment method to OpenAI account
- Check billing settings
- Monitor usage limits

---

## 🎯 Ready to Test!

Once you've added your API keys:
1. Restart the dev server: `npm run dev`
2. Visit: http://localhost:3000/test-agents
3. Test each AI service with different prompts
4. Monitor the console for any errors

Your AI Digital Market is ready to serve intelligent responses! 🚀
