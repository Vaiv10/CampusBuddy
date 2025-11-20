pipeline {
    agent any

    tools {
        nodejs "node20"   // <-- name you configured
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

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t campusbuddy .'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker stop campusbuddy || true'
                sh 'docker rm campusbuddy || true'
                sh 'docker run -d -p 3000:3000 --name campusbuddy campusbuddy'
            }
        }
    }
}
