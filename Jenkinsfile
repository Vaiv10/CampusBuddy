pipeline {
    agent {
        docker {
            image 'node:20.11.1'
            args '-u root:root -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        APP_NAME = "campusbuddy"
    }

    stages {

        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/Vaiv10/CampusBuddy.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Run Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t ${APP_NAME}:latest .'
            }
        }

        stage('Run Docker') {
            steps {
                sh 'docker stop ${APP_NAME} || true'
                sh 'docker rm ${APP_NAME} || true'
                sh 'docker run -d -p 3000:3000 --name ${APP_NAME} ${APP_NAME}:latest'
            }
        }
    }
}
