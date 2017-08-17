pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'git://git.engineering.redhat.com/users/afantini/gates.git', branch: 'master')
      }
    }
  }
}