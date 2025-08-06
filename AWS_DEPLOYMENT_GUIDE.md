# AWS Deployment Guide for onelastai.com

## Prerequisites
1. AWS Account with EC2 instance running
2. Domain onelastai.com managed in Cloudflare
3. GitHub repository with deployment secrets configured

## AWS Infrastructure Setup

### 1. EC2 Instance Configuration
```bash
# Launch EC2 instance (t3.medium recommended)
# Security Group: Allow HTTP (80), HTTPS (443), SSH (22)
# Install Docker on EC2:
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
```

### 2. ECR Repository Setup
```bash
# Create ECR repository
aws ecr create-repository --repository-name onelastai-app --region us-east-1
```

### 3. GitHub Secrets Configuration
Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `EC2_SSH_KEY`: Private key for EC2 access
- `EC2_PUBLIC_IP`: Your EC2 instance public IP
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXTAUTH_SECRET`: Random secret for NextAuth

## Cloudflare DNS Configuration

### 1. DNS Records Setup
In Cloudflare DNS settings for onelastai.com:

```
Type: A
Name: @
Content: [YOUR_EC2_PUBLIC_IP]
Proxy: ✅ Proxied

Type: A
Name: www
Content: [YOUR_EC2_PUBLIC_IP]
Proxy: ✅ Proxied

Type: CNAME
Name: api
Content: onelastai.com
Proxy: ✅ Proxied
```

### 2. SSL/TLS Configuration
- SSL/TLS encryption mode: **Full (strict)**
- Always Use HTTPS: **On**
- Automatic HTTPS Rewrites: **On**

### 3. Security Settings
- Security Level: **Medium**
- Bot Fight Mode: **On**
- DDoS Protection: **On**

## Domain Connection Steps

### Step 1: Verify AWS Infrastructure
1. ✅ EC2 instance running with Docker installed
2. ✅ Security groups allowing HTTP/HTTPS traffic
3. ✅ ECR repository created for container images

### Step 2: Configure GitHub Actions
1. ✅ Add all required secrets to GitHub repository
2. ✅ Push code to trigger deployment workflow
3. ✅ Monitor deployment in GitHub Actions tab

### Step 3: Update Cloudflare DNS
1. ✅ Point A records to your EC2 public IP
2. ✅ Enable Cloudflare proxy for security and CDN
3. ✅ Configure SSL/TLS settings

### Step 4: Test Domain Connection
```bash
# Test domain resolution
nslookup onelastai.com

# Test HTTPS connection
curl -I https://onelastai.com

# Check SSL certificate
openssl s_client -connect onelastai.com:443 -servername onelastai.com
```

## Environment Variables for Production
Update your EC2 deployment with:
```bash
OPENAI_API_KEY=your_actual_openai_key
NEXTAUTH_URL=https://onelastai.com
NEXTAUTH_SECRET=your_production_secret
NODE_ENV=production
```

## Monitoring and Maintenance
- Monitor EC2 instance health in AWS Console
- Check Cloudflare Analytics for traffic insights
- Monitor application logs: `docker logs onelastai-app`
- Set up CloudWatch alarms for instance monitoring

## Troubleshooting
1. **Domain not resolving**: Check Cloudflare DNS propagation
2. **SSL errors**: Verify Cloudflare SSL/TLS settings
3. **Application not loading**: Check EC2 security groups and Docker container status
4. **API errors**: Verify environment variables are set correctly
