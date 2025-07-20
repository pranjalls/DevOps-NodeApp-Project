pipeline {
  agent any

  environment {
    IMAGE_NAME = 'ppranshinn0225/devops-node-app'
  }

  triggers {
    // 🕒 Run every 30 minutes — adjust as needed
    cron('H/30 * * * *')
  }

  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }

    stage('Clone Repo') {
      steps {
        git branch: 'main',
            url: 'https://github.com/pranjalls/DevOps-NodeApp-Project.git',
            credentialsId: 'github-pat'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push $
