# 🌐 onelastai.com Domain Configuration Guide

## Current Status
- ✅ Domain: `onelastai.com` 
- ✅ DNS: Cloudflare managed
- ✅ Hosting: AWS EC2 deployment configured
- ✅ SSL: Cloudflare SSL/TLS encryption
- ✅ GitHub Actions: Automated deployment pipeline

## 🚀 Quick Configuration Checklist

### 1. Domain DNS Configuration (Cloudflare)
Log into your Cloudflare dashboard for `onelastai.com`:

#### A Records
```
Type: A
Name: @
Content: [YOUR_AWS_EC2_PUBLIC_IP]
Proxy: 🟠 Proxied
TTL: Auto

Type: A  
Name: www
Content: [YOUR_AWS_EC2_PUBLIC_IP]
Proxy: 🟠 Proxied
TTL: Auto
```

#### CNAME Records for Subdomains
```
Type: CNAME
Name: api
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: mood
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: patterns
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: reports
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: chat
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: voice
Content: onelastai.com
Proxy: 🟠 Proxied

Type: CNAME
Name: visual
Content: onelastai.com
Proxy: 🟠 Proxied
```

### 2. SSL/TLS Configuration
In Cloudflare SSL/TLS settings:
- **Encryption mode**: Full (strict)
- **Always Use HTTPS**: On ✅
- **Automatic HTTPS Rewrites**: On ✅
- **Minimum TLS Version**: 1.2
- **TLS 1.3**: On ✅

### 3. Security Settings
In Cloudflare Security:
- **Security Level**: Medium
- **Bot Fight Mode**: On ✅
- **Challenge Passage**: 30 minutes
- **Browser Integrity Check**: On ✅

### 4. Performance Optimization
In Cloudflare Speed:
- **Auto Minify**: CSS ✅, JavaScript ✅, HTML ✅
- **Brotli**: On ✅
- **Early Hints**: On ✅
- **Rocket Loader**: Off (can cause issues with React)

### 5. Page Rules
Create these page rules in order:

#### Rule 1: Force HTTPS
- **URL Pattern**: `http://*onelastai.com/*`
- **Setting**: Always Use HTTPS

#### Rule 2: Cache Everything
- **URL Pattern**: `*onelastai.com/*`
- **Settings**: 
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month

## 🔧 Technical Configuration Files

### Environment Variables (.env.production)
```env
NEXT_PUBLIC_SITE_URL=https://onelastai.com
NEXTAUTH_URL=https://onelastai.com
NEXTAUTH_SECRET=your-secret-here
OPENAI_API_KEY=your-openai-key
```

### Next.js Configuration (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['onelastai.com', 'localhost'],
  },
  async rewrites() {
    return [
      // Subdomain routing for AI modules
      {
        source: '/',
        destination: '/api/subdomain-check',
        has: [
          {
            type: 'host',
            value: 'mood.onelastai.com',
          },
        ],
      },
      {
        source: '/',
        destination: '/modules/mood',
        has: [
          {
            type: 'host',
            value: 'mood.onelastai.com',
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
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
```

## 🚀 Deployment Configuration

### GitHub Actions Secrets Required
In your GitHub repository settings > Secrets and variables > Actions:

```
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
EC2_SSH_KEY=-----BEGIN RSA PRIVATE KEY-----...
EC2_PUBLIC_IP=1.2.3.4
OPENAI_API_KEY=sk-...
NEXTAUTH_SECRET=random-secret-string
```

### AWS EC2 Setup Commands
```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Install Docker and AWS CLI
sudo yum update -y
sudo yum install -y docker aws-cli
sudo service docker start
sudo usermod -a -G docker ec2-user

# Configure AWS CLI
aws configure
```

## 🔍 Domain Verification Steps

### 1. DNS Propagation Check
```bash
# Check DNS propagation
nslookup onelastai.com
dig onelastai.com

# Expected result should show your EC2 IP
```

### 2. SSL Certificate Verification
```bash
# Check SSL certificate
curl -I https://onelastai.com
openssl s_client -connect onelastai.com:443 -servername onelastai.com
```

### 3. Application Health Check
```bash
# Test the application
curl https://onelastai.com/api/health
curl https://api.onelastai.com/status
```

## 📊 Monitoring & Analytics

### Cloudflare Analytics
- **Traffic**: Monitor visitor traffic and patterns
- **Security**: Track security threats and bot traffic
- **Performance**: Monitor page load times and cache hit rates

### AWS CloudWatch
- **EC2 Metrics**: CPU, memory, disk usage
- **Application Logs**: Docker container logs
- **Alarms**: Set up alerts for high resource usage

## 🐛 Troubleshooting

### Common Issues

#### DNS Not Resolving
1. Check Cloudflare DNS records
2. Verify domain nameservers point to Cloudflare
3. Clear local DNS cache: `ipconfig /flushdns`

#### SSL Certificate Issues
1. Ensure Cloudflare SSL mode is "Full (strict)"
2. Check origin certificate on server
3. Verify domain validation

#### Application Not Loading
1. Check EC2 instance status
2. Verify Docker container is running: `docker ps`
3. Check application logs: `docker logs onelastai-app`

#### 502 Bad Gateway
1. Verify application is running on port 3000
2. Check EC2 security group allows port 80/443
3. Restart Docker container

### Debug Commands
```bash
# Check running containers
docker ps -a

# View application logs
docker logs onelastai-app

# Check EC2 system status
systemctl status docker
netstat -tlnp | grep :3000

# Test local connectivity
curl localhost:3000
```

## 🔄 Maintenance

### Regular Tasks
- **Weekly**: Review Cloudflare analytics and security reports
- **Monthly**: Update EC2 instance packages and security patches
- **Quarterly**: Review SSL certificate expiration and renewal

### Updates and Deployments
- Push code changes to main branch triggers automatic deployment
- Monitor GitHub Actions for deployment status
- Verify application functionality after each deployment

---

## ✅ Configuration Checklist

- [ ] Cloudflare DNS records configured
- [ ] SSL/TLS encryption enabled (Full strict)
- [ ] Security settings configured
- [ ] Performance optimization enabled
- [ ] GitHub Actions secrets configured
- [ ] AWS EC2 instance running
- [ ] Docker container deployed
- [ ] Domain propagation verified
- [ ] SSL certificate verified
- [ ] Application accessibility confirmed

**Once all items are checked, your onelastai.com domain will be fully configured and operational!**
