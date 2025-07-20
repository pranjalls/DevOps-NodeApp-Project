pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Jenkins credentials ID
    IMAGE_NAME = 'ppranshinn0225/devops-node-app'    // Your Docker Hub image name
  }

  stages {
    stage('Clone Repo') {
      steps {
  git credentialsId: 'github-pat', url: 'https://github.com/pranjalls/DevOps-NodeApp-Project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        sh '''
          echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
          docker push $IMAGE_NAME
        '''
      }
    }

    stage('Deploy with Ansible') {
      steps {
        sh 'ansible-playbook -i ansible/hosts.ini ansible/deploy.yml'
      }
    }
  }
}
