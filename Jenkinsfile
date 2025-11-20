pipeline {
    agent any

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

        stage('Install Node') {
            steps {
                sh '''
                    if ! command -v node >/dev/null 2>&1; then
                        echo "Node not found. Installing Node 20.11.1..."
                        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                        apt-get install -y nodejs
                    fi

                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t ${APP_NAME}:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop ${APP_NAME} || true'
                sh 'docker rm ${APP_NAME} || true'
                sh 'docker run -d -p 3000:3000 --name ${APP_NAME} ${APP_NAME}:latest'
            }
        }
    }
}
