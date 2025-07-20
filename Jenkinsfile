pipeline {
  agent any

  environment {
    IMAGE_NAME = 'ppranshinn0225/devops-node-app'
  }

  triggers {
    // Optional: Run every hour
    cron('H 1 * * *')
  }

  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }

    stage('Clone Repo') {
      steps {
        git branch: 'main', credentialsId: 'github-pat', url: 'https://github.com/pranjalls/DevOps-NodeApp-Project.git'
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
            docker push $IMAGE_NAME
          '''
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
        sh 'ansible-playbook -i ansible/hosts.ini deploy.yml'
      }
    }
  }
}
