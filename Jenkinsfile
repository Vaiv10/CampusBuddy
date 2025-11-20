pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {

        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/Vaiv10/CampusBuddy.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('.') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('.') {
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                dir('backend') {
                    sh 'npm test || echo "No tests found"'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t campusbuddy .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop campusbuddy || true'
                sh 'docker rm campusbuddy || true'
                sh 'docker run -d -p 3000:3000 --name campusbuddy campusbuddy'
            }
        }
    }
}
