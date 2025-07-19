# 🚀 DevOps Node.js Web Application

This project is a full-stack DevOps pipeline to build, test, provision, configure, and deploy a simple Node.js application on **AWS Free Tier**, using:

- Git & GitHub (branching & PR)
- Docker & DockerHub
- Terraform (Infrastructure as Code)
- Ansible (Configuration Management)
- Jenkins (CI/CD automation)
- Shell Scripting (Cleanup & Automation)

---

## 🌐 Live Application

> Hosted on AWS EC2 (Public IP will be available after Terraform provisioning).

---

## 📦 Tech Stack & Tools

| Category               | Tools Used                                   |
|------------------------|-----------------------------------------------|
| Version Control        | Git, GitHub                                   |
| App Runtime            | Node.js (http module)                         |
| Containerization       | Docker, DockerHub                             |
| Infrastructure         | AWS EC2, VPC, Security Groups (via Terraform)|
| Configuration Mgmt     | Ansible                                       |
| CI/CD Automation       | Jenkins (Declarative Pipeline)                |
| Shell Scripting        | Bash (with strict mode and logging)           |

---

## 📁 Project Structure
DevOps-NodeApp-Project/
├── ansible/
│ ├── deploy.yml # Ansible playbook to deploy Docker container
│ └── hosts.ini # Ansible inventory with EC2 IP
├── infra/
│ ├── main.tf # Terraform code for AWS provisioning
│ ├── variables.tf # Terraform input variables
│ └── outputs.tf # Output public IP
├── scripts/
│ ├── build_and_push.sh # Docker build & push to DockerHub
│ └── cleanup.sh # Docker cleanup script
├── src/
│ └── index.js # Node.js web app with styled HTML response
├── Dockerfile # Docker image configuration
├── Jenkinsfile # Jenkins CI/CD pipeline definition
├── README.md # Project documentation
└── REPORT.md # Architecture, screenshots, and summary


