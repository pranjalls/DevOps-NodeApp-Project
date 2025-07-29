# DevOps Node.js Application - CI/CD Case Study Report

Submitted by - Pranjal.P.Shinde

## Table of Contents

- Introduction
- Project Structure
- Node.js Application
- Git & GitHub Workflow
- Dockerization
- Terraform Infrastructure Provisioning
- Ansible for Configuration Management
- Jenkins CI/CD Pipeline
- Shell Scripts
- Common Errors & Troubleshooting
- Architecture Diagram
- Final Report Summary

## 1. Introduction

This report presents a full DevOps implementation of a Node.js application using containerization, infrastructure as code, configuration management, and CI/CD. Technologies include **Docker**, **Terraform**, **Ansible**, **Jenkins**, and **GitHub**.

## 2. Project Structure

The project repository is organized as follows:

```
DevOps-NodeApp-Project/
├── ansible/
│   ├── deploy.yml
│   └── hosts.ini
├── infra/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
├── scripts/
│   ├── build_and_push.sh
│   └── cleanup.sh
├── src/
│   └── index.js
├── Dockerfile
├── Jenkinsfile
└── README.md
```

## 3. Node.js Application

- `index.js`  
  Main entry point for the Node.js application.

## 4. Git & GitHub Workflow

Standard workflow:
- `git add .`
- `git commit` and `git push`  
  The CI/CD pipeline clones the repository using Jenkins:

  ```
  git branch: 'main', credentialsId: 'github-pat', url: 'https://github.com/pranjalls/DevOps-NodeApp-Project.git'
  ```

## 5. Dockerization

- Containers the Node.js application for consistent deployments.
- Example build command:
  ```
  docker build -t $IMAGE_NAME .
  ```

## 6. Terraform Infrastructure Provisioning

In `infra/`, Terraform code provisions:
- A security group allowing SSH (22) and HTTP (80).
- Use `variables.tf`, `main.tf`, and `outputs.tf` files.

## 7. Ansible for Configuration Management

- Playbooks (`ansible/deploy.yml`) for app deployment and server configuration.

## 8. Jenkins CI/CD Pipeline

Example Jenkins pipeline:

```groovy
pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    IMAGE_NAME = 'ppranshinn0225/devops-node-app'
  }
  stages {
    stage('Clean Workspace') { steps { cleanWs() } }
    stage('Clone Repo') {
      steps {
        git branch: 'main', credentialsId: 'github-pat', url: 'https://github.com/pranjalls/DevOps-NodeApp-Project.git'
      }
    }
    stage('Build Docker Image') { steps { sh 'docker build -t $IMAGE_NAME .' } }
    stage('Push to Docker Hub') {
      steps {
        sh '''
          echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
          docker push $IMAGE_NAME
        '''
      }
    }
    stage('Deploy with Ansible') {
      steps { sh 'ansible-playbook -i ansible/hosts.ini ansible/deploy.yml' }
    }
  }
}
```

## 9. Shell Scripts

- `cleanup.sh` automates environment reset or log deletion tasks.

## 10. Common Errors & Troubleshooting

| Issue                      | Cause                                  | Solution                                                                            |
|----------------------------|----------------------------------------|-------------------------------------------------------------------------------------|
| Docker permission denied   | Jenkins user not in docker group       | Add Jenkins user to docker group, restart Jenkins (`sudo usermod -aG docker jenkins`)|
| SSH unreachable in Ansible | Wrong IP or key                        | Update hosts.ini with latest IP or assign a static Elastic IP to your EC2 instance. |
| Docker login failed        | Using password instead of access token | Use DockerHub Access Token                                                          |

## 11. Architecture Diagram

*Add your system/architecture diagram here for clarity.*

## 12. Final Report Summary

This DevOps case study demonstrates full software lifecycle automation for a Node.js app, utilizing modern DevOps tools for provisioning, configuration management, and continuous deployment, ensuring consistent environment parity and reliable deployments[1].
