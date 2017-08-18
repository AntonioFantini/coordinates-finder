pipeline {
  agent any
  stages {
    stage('Licenses') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'gates/licenses/RunGate.groovy'
      }
    }
    stage('Crypto') {
      steps {
        load 'gates/crypto/RunGate.groovy'
      }
    }
    stage('CVEs') {
      steps {
        load 'gates/cves/RunGate.groovy'
      }
    }
    stage('Dependencies') {
      steps {
        load 'gates/dependencies/RunGate.groovy'
      }
    }
    stage('Source Code Location') {
      steps {
        load 'gates/sourcecodelocation/RunGate.groovy'
      }
    }
  }
}