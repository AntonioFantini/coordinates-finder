pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'git+ssh://code.engineering.redhat.com/jboss-prod-core/gates.git', branch: 'master')
      }
    }
  }
}