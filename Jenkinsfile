pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit','edge'], description: 'Select the browser to run the tests on.')
        string(name: 'TEST_FILE', defaultValue: '', description: 'Specify a test file to run (leave blank to run all tests).')
        string(name: 'tag', defaultValue: 'login', description: 'Specify a test file')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Construct the command to run Playwright tests
                    def testCommand = "npx playwright test"

                    // Append browser option if selected
                    if (params.BROWSER) {
                        testCommand += " --project=${params.BROWSER}"
                    }

                    // Append test file if specified
                    if (params.TEST_FILE) {
                        testCommand += " ${params.TEST_FILE}"
                    }
                     if (params.tag) {
                        testCommand += "--g  '${params.tag}'"
                    }
                    // Execute the test command
                    sh testCommand
                }
            }
        }
    }

    post {
        always {
            // Archive test results and reports
            junit '**/test-results/*.xml'
            archiveArtifacts artifacts: '**/test-results/**/*', allowEmptyArchive: true
        }
    }
}
