pipeline {
    agent any
    stages {
        stage('Build') {
            environment { 
                    CI= sh (returnStdout: true, script: 'echo false').trim()
                }
            steps {
                echo 'Building..'
                sh 'npm install'
                sh 'npm run build'
                sh 'pm2 serve build 3000 --spa'
                
            }
        }
    }
    post {
        always {
            emailext body: 'A Test EMail', to:'selviharsha@gmail.com',from:'harshajsharsh@gmail.com',subject: 'Test'
        }
    }
}