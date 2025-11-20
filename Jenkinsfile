pipeline {
    agent any

    tools {
        nodejs "NodeJS-18"    // <-- Must match the name you added in Tools > NodeJS
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
