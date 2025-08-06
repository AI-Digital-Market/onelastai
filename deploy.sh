#!/bin/bash
# Quick AWS deployment script for onelastai.com

echo "🚀 Starting deployment to AWS for onelastai.com..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t onelastai-app .

# Tag for ECR (replace with your ECR URI)
ECR_URI="YOUR_AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/onelastai-app"
docker tag onelastai-app:latest $ECR_URI:latest

echo "🔐 Login to ECR..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_URI

echo "⬆️ Pushing to ECR..."
docker push $ECR_URI:latest

echo "🌐 Deploying to EC2..."
# SSH into EC2 and update container (replace with your EC2 IP)
ssh -i "your-key.pem" ec2-user@YOUR_EC2_IP << 'EOF'
    # Login to ECR
    aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ECR_URI
    
    # Stop and remove old container
    docker stop onelastai-app || true
    docker rm onelastai-app || true
    
    # Pull latest image
    docker pull YOUR_ECR_URI:latest
    
    # Run new container
    docker run -d --name onelastai-app -p 80:3000 \
        -e NODE_ENV=production \
        -e NEXTAUTH_URL=https://onelastai.com \
        -e OPENAI_API_KEY=$OPENAI_API_KEY \
        --restart unless-stopped \
        YOUR_ECR_URI:latest
EOF

echo "✅ Deployment complete! Your site should be available at https://onelastai.com"
