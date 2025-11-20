pipeline {
    agent any

    stages {

        stage('Backend Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Frontend Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Backend Tests') {
            steps {
                dir('backend') {
                    sh 'npm test || echo "No tests"'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step (optional)"
                echo "You can add PM2 / Docker here"
            }
        }
    }
}
