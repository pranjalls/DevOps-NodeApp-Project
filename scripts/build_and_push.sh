#!/usr/bin/env bash
set -euo pipefail

# Set your DockerHub username
DOCKER_USERNAME="ppranshinn0225"

# Get the latest Git commit short hash
GIT_COMMIT=$(git rev-parse --short HEAD)

# Image name and tag
IMAGE="$DOCKER_USERNAME/devops-node-app:$GIT_COMMIT"

echo "🔧 Building Docker image: $IMAGE"
docker build -t $IMAGE .

echo "🚀 Pushing Docker image to DockerHub..."
docker push $IMAGE

echo "✅ Done: $IMAGE"
