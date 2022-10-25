pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                npm start
            }
        }
        stage('Email') {
            steps {
                emailext body: 'A Test EMail', to:'selviharsha@gmail.com',from:'harshajsharsh@gmail.com',subject: 'Test'
            }
        }
    }
    post {
        always {
            emailext body: 'A Test EMail', to:'selviharsha@gmail.com',from:'harshajsharsh@gmail.com',subject: 'Test'
        }
    }
}