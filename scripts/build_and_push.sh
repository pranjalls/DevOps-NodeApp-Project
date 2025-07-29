#!/usr/bin/env bash
set -euo pipefail  #-e: Exit immediately if any command fails.  -u: Treat unset variables as an error. -o pipefail: If any command in a pipeline fails, the whole pipeline fails.

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
