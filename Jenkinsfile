pipeline {
  agent any

//   environment {
    
//   }

  stages {
      stage('checkout') {
      steps {
          deleteDir()
          checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '', url: '']])
      }
    }
   
    stage('build') {
      steps {
        // This step trigger the test 
        echo 'Run Playwright build Test'
        bat '''npm install'''
        bat '''npx playwright install'''
      }
    }
    stage('run') {
      steps {
        // This step trigger the test 
        echo 'Run Playwright Pipeline Test'
        bat '''npm run test:tag'''
        bat '''npm run generateAllureReport1'''
      }
    }
    
  }
post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, reportDir: 'reports/allure-report', reportFiles: 'index.html', reportName: 'HTML Allure Report', reportTitles: 'Playwright', useWrapperFileDirectly: true])
          //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports/monocart/', reportFiles: 'report.html', reportName: 'Monocart HTML', reportTitles: 'Playwright', useWrapperFileDirectly: true])
          //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports/html_report', reportFiles: 'report.html', reportName: 'HTML', reportTitles: 'Playwright', useWrapperFileDirectly: true])
        }
      }
}
