pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'https://git.engineering.redhat.com/users/afantini/gates.git', branch: 'master')
        load 'licenses/RunGate.groovy'
      }
    }
  }
}