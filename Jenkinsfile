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
    // post {
    //     always {
    //         cucumber buildStatus: 'UNSTABLE',
    //                 failedFeaturesNumber: 1,
    //                 failedScenariosNumber: 1,
    //                 skippedStepsNumber: 1,
    //                 failedStepsNumber: 1,
    //                 classifications: [
    //                         [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
    //                         [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
    //                 ],
    //                 reportTitle: 'My report',
    //                 fileIncludePattern: '**/*.cucumber.json',
    //                 sortingMethod: 'ALPHABETICAL',
    //                 trendsLimit: 100
    //     }
    // }
 
}
