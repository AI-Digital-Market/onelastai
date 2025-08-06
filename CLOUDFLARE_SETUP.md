# Cloudflare DNS Configuration for onelastai.com

## 🌐 Quick Setup Guide

### Step 1: DNS Records Configuration
Log into your Cloudflare dashboard and add these DNS records:

```
Type: A
Name: @
Content: [YOUR_AWS_EC2_PUBLIC_IP]
Proxy: 🟠 Proxied (Recommended)
TTL: Auto

Type: A  
Name: www
Content: [YOUR_AWS_EC2_PUBLIC_IP]
Proxy: 🟠 Proxied (Recommended)
TTL: Auto

Type: CNAME
Name: api
Content: onelastai.com
Proxy: 🟠 Proxied (Recommended)
TTL: Auto
```

### Step 2: SSL/TLS Settings
Navigate to SSL/TLS > Overview:
- **Encryption mode**: Full (strict)
- **Always Use HTTPS**: On
- **Automatic HTTPS Rewrites**: On

### Step 3: Security Settings
Navigate to Security > Settings:
- **Security Level**: Medium
- **Bot Fight Mode**: On
- **DDoS Protection**: On (automatically enabled)

### Step 4: Speed Optimization
Navigate to Speed > Optimization:
- **Auto Minify**: CSS, JavaScript, HTML all checked
- **Brotli**: On
- **Early Hints**: On

### Step 5: Page Rules (Optional but recommended)
Navigate to Rules > Page Rules, add:

1. **Force HTTPS**
   - URL: `http://*onelastai.com/*`
   - Setting: Always Use HTTPS

2. **Cache Everything**
   - URL: `onelastai.com/_next/static/*`
   - Settings: Cache Level = Cache Everything, TTL = 1 month

## 🔧 Advanced Configuration

### Custom Domain for API
If you want a separate subdomain for your API:
```
Type: CNAME
Name: api
Content: onelastai.com
Proxy: 🟠 Proxied
```

### WWW Redirect
To redirect www to non-www (or vice versa):
1. Go to Rules > Redirect Rules
2. Create rule: `www.onelastai.com/*` → `https://onelastai.com/$1`

### Firewall Rules
For additional security:
1. Go to Security > WAF
2. Add custom rules based on your needs

## 🚀 Testing Your Setup

### 1. DNS Propagation Check
```bash
nslookup onelastai.com
dig onelastai.com
```

### 2. SSL Certificate Check
```bash
curl -I https://onelastai.com
openssl s_client -connect onelastai.com:443 -servername onelastai.com
```

### 3. Performance Test
Use tools like:
- GTmetrix
- Google PageSpeed Insights
- Cloudflare's Speed Test

## 📊 Monitoring

### Cloudflare Analytics
- Monitor traffic patterns
- Check SSL usage
- Review security events

### Custom Dashboards
Set up custom dashboards for:
- Response times
- Error rates
- Geographic distribution

## 🔍 Troubleshooting

### Common Issues:

1. **DNS Not Resolving**
   - Check DNS propagation (can take up to 24 hours)
   - Verify A records point to correct IP
   - Ensure Cloudflare nameservers are set

2. **SSL Errors**
   - Verify SSL/TLS mode is "Full (strict)"
   - Check certificate validity on origin server
   - Enable "Always Use HTTPS"

3. **Site Not Loading**
   - Check AWS EC2 instance status
   - Verify security groups allow HTTP/HTTPS
   - Check Docker container is running

4. **Slow Performance**
   - Enable Cloudflare caching
   - Optimize images and assets
   - Use Cloudflare's performance features

## 📋 Checklist

- [ ] DNS A records configured
- [ ] SSL/TLS settings configured
- [ ] Security settings enabled
- [ ] Performance optimization enabled
- [ ] AWS EC2 instance running
- [ ] Docker container deployed
- [ ] Domain resolves correctly
- [ ] HTTPS working
- [ ] Performance tested
