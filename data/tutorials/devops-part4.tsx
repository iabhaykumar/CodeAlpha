import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DEVOPS_PART4_TOPICS: Topic[] = [
  // 7. CI/CD Pipelines
  {
    id: 'devops-ci-cd',
    title: 'CI/CD Pipelines (Jenkins/GHA)',
    parent: '7. CI/CD & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Continuous Integration (CI):</strong> Automates building and testing code every time a developer commits.
          <br/>
          <strong>Continuous Deployment (CD):</strong> Automates releasing the app to production.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Jenkins Pipeline (Groovy)</h3>
        <CodeBlock language="groovy" code={`pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">GitHub Actions (YAML)</h3>
        <CodeBlock language="yaml" code={`name: CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Node
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test`} />
      </>
    )
  },
  {
    id: 'devops-deployment-strategies',
    title: 'Deployment Strategies',
    parent: '7. CI/CD & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          How to release code without downtime.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Blue/Green:</strong> Two identical environments. Blue is live. Deploy to Green. Switch traffic to Green instantly. Easy rollback.</li>
            <li><strong>Canary:</strong> Roll out to a small % of users first (the "canary in the coal mine"). If stable, roll out to everyone.</li>
            <li><strong>Rolling Update:</strong> Update servers one by one. K8s default.</li>
        </ul>
      </>
    )
  },

  // 8. Observability & Monitoring
  {
    id: 'devops-monitoring-intro',
    title: 'Monitoring vs Observability',
    parent: '8. Observability',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Monitoring</strong> tells you <em>when</em> something is wrong. <strong>Observability</strong> helps you understand <em>why</em>.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Three Pillars</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Metrics:</strong> Numerical data measured over time (CPU usage, Request count). Tool: Prometheus.</li>
            <li><strong>Logs:</strong> Discrete events (Error messages). Tool: ELK Stack (Elasticsearch, Logstash, Kibana).</li>
            <li><strong>Traces:</strong> The path of a request through distributed services. Tool: Jaeger.</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-prometheus-grafana',
    title: 'Prometheus & Grafana',
    parent: '8. Observability',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Prometheus</strong> scrapes metrics from your applications. <strong>Grafana</strong> visualizes them.
        </p>
        <CodeBlock language="yaml" code={`# Prometheus Query (PromQL) examples

# Current CPU usage
100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# HTTP Error Rate
rate(http_requests_total{status=~"5.."}[5m])`} />
      </>
    )
  },

  // 9. Cloud Computing
  {
    id: 'devops-cloud-intro',
    title: 'Cloud Basics (AWS/Azure)',
    parent: '9. Cloud Computing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          DevOps engineers must know at least one major cloud provider.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Service Models</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>IaaS (Infrastructure as a Service):</strong> Raw VMs (AWS EC2). You manage OS + App.</li>
            <li><strong>PaaS (Platform as a Service):</strong> Managed platform (AWS Beanstalk). You manage App only.</li>
            <li><strong>SaaS (Software as a Service):</strong> Finished software (Gmail).</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">AWS Key Services</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Compute:</strong> EC2, Lambda (Serverless).</li>
            <li><strong>Storage:</strong> S3 (Object), EBS (Block).</li>
            <li><strong>Networking:</strong> VPC, Route53.</li>
            <li><strong>Database:</strong> RDS (SQL), DynamoDB (NoSQL).</li>
        </ul>
      </>
    )
  },

  // 10. DevSecOps
  {
    id: 'devops-devsecops',
    title: 'DevSecOps',
    parent: '10. Security',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>DevSecOps</strong> means "Shifting Security Left". Security checks are automated and integrated into the CI/CD pipeline, rather than being an afterthought at the end.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Tools</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>SAST (Static Application Security Testing):</strong> Scans source code for vulnerabilities (SonarQube).</li>
            <li><strong>DAST (Dynamic Application Security Testing):</strong> Scans running application (OWASP ZAP).</li>
            <li><strong>Container Scanning:</strong> Scans Docker images for vulnerabilities (Trivy, Claire).</li>
            <li><strong>Secret Management:</strong> Managing API keys/passwords securely (HashiCorp Vault).</li>
        </ul>
      </>
    )
  }
];