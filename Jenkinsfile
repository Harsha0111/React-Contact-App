pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm start'
            }
        }
    }
    post {
        always {
            emailext body: 'A Test EMail', to:'selviharsha@gmail.com',from:'harshajsharsh@gmail.com',subject: 'Test'
        }
    }
}