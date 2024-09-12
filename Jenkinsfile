pipeline {
    agent {
    // this image provides everything needed to run Cypress
        docker {
            image 'mcr.microsoft.com/playwright:v1.47.0-noble'
        }
     }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Install dependencies playwight') {
            steps {
                sh 'npx playwright install'
            }
        }
        
        
        stage('Run playwright Tests') {
            steps {
                
                sh "npm run pl:test"
             }
        }
    }  
    post {
        always {
            // Publish the test report in JSON format
            publishJSONReport targets: 'test-results.json'
        }
    }
 
}
