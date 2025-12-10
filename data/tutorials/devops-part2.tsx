import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DEVOPS_PART2_TOPICS: Topic[] = [
  // 3. Containerization (Docker)
  {
    id: 'devops-docker-intro',
    title: 'Why Docker?',
    parent: '3. Containerization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Docker</strong> solves the "It works on my machine" problem. It packages an application and its dependencies into a "Container" that runs consistently on any infrastructure.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">VM vs Container</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Virtual Machine (VM):</strong> Virtualizes hardware. Runs a full Guest OS on top of a Hypervisor. Heavy, slow boot.</li>
            <li><strong>Container:</strong> Virtualizes the OS (Kernel). Shares the Host OS kernel but isolates processes (Namespaces) and resources (Cgroups). Lightweight, instant start.</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-docker-commands',
    title: 'Essential Docker Commands',
    parent: '3. Containerization',
    content: (
      <>
        <CodeBlock language="bash" code={`# Run a container from an image
docker run -d -p 80:80 --name my-web nginx

# List running containers
docker ps

# Go inside a container
docker exec -it my-web bash

# Stop and Remove
docker stop my-web
docker rm my-web

# List images
docker images

# Remove an image
docker rmi nginx`} />
      </>
    )
  },
  {
    id: 'devops-dockerfile',
    title: 'Writing a Dockerfile',
    parent: '3. Containerization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <code>Dockerfile</code> is a script containing instructions to build a Docker Image.
        </p>
        <CodeBlock language="dockerfile" code={`# 1. Base Image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files first (for caching layers)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Start command
CMD ["npm", "start"]`} />
        <p className="mt-4 mb-2"><strong>Build command:</strong></p>
        <CodeBlock language="bash" code={`docker build -t my-node-app:v1 .`} />
      </>
    )
  },
  {
    id: 'devops-docker-multistage',
    title: 'Multi-Stage Builds',
    parent: '3. Containerization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A technique to optimize image size by using multiple `FROM` instructions. You copy only the necessary artifacts (e.g., the compiled binary) to the final image, discarding build tools.
        </p>
        <CodeBlock language="dockerfile" code={`# Stage 1: Builder
FROM golang:1.19 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp main.go

# Stage 2: Runner (Final Image)
FROM alpine:latest
WORKDIR /root/
# Copy only the binary from the builder stage
COPY --from=builder /app/myapp .
CMD ["./myapp"]`} />
        <p className="mt-2 text-sm text-green-700">Result: Image size reduces from ~800MB (Golang image) to ~10MB (Alpine + Binary).</p>
      </>
    )
  },
  {
    id: 'devops-docker-compose',
    title: 'Docker Compose',
    parent: '3. Containerization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A tool for defining and running multi-container Docker applications via a YAML file.
        </p>
        <CodeBlock language="yaml" code={`version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - redis
  redis:
    image: "redis:alpine"`} />
        <p className="mt-4 mb-2"><strong>Commands:</strong></p>
        <CodeBlock language="bash" code={`docker-compose up -d  # Start all services in background
docker-compose down   # Stop and remove containers`} />
      </>
    )
  },

  // 4. Orchestration (Kubernetes)
  {
    id: 'devops-k8s-arch',
    title: 'Kubernetes Architecture',
    parent: '4. Orchestration (K8s)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Kubernetes (K8s)</strong> is an open-source system for automating deployment, scaling, and management of containerized applications.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Control Plane (Master Node)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>API Server:</strong> The frontend. Exposes the K8s API.</li>
            <li><strong>etcd:</strong> Consistent, highly-available key-value store for cluster data.</li>
            <li><strong>Scheduler:</strong> Assigns newly created pods to nodes based on resources.</li>
            <li><strong>Controller Manager:</strong> Runs controller processes (Node controller, Job controller).</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Worker Node</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Kubelet:</strong> Agent that ensures containers are running in a Pod.</li>
            <li><strong>Kube-proxy:</strong> Maintains network rules.</li>
            <li><strong>Container Runtime:</strong> Software to run containers (e.g., Docker, containerd).</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-k8s-objects',
    title: 'Pods, Deployments, Services',
    parent: '4. Orchestration (K8s)',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mb-4">1. Pod</h3>
        <p className="mb-4">The smallest deployable unit. Represents a single instance of a running process (usually 1 container, sometimes helper containers).</p>
        
        <h3 className="text-xl font-bold text-slate-800 mb-4">2. Deployment</h3>
        <p className="mb-4">Manages the creation and scaling of Pods. Ensures the desired number of replicas are always running. Supports rolling updates.</p>
        <CodeBlock language="yaml" code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">3. Service</h3>
        <p className="mb-4">An abstract way to expose an application running on a set of Pods as a network service.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>ClusterIP:</strong> Exposes service on a cluster-internal IP (default).</li>
            <li><strong>NodePort:</strong> Exposes service on each Node's IP at a static port.</li>
            <li><strong>LoadBalancer:</strong> Exposes service externally using a cloud provider's LB.</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-k8s-commands',
    title: 'kubectl Cheat Sheet',
    parent: '4. Orchestration (K8s)',
    content: (
      <>
        <CodeBlock language="bash" code={`# Apply configuration
kubectl apply -f deployment.yaml

# Get Resources
kubectl get pods
kubectl get deployments
kubectl get services
kubectl get nodes

# Debugging
kubectl logs <pod-name>
kubectl describe pod <pod-name>
kubectl exec -it <pod-name> -- /bin/bash

# Scaling
kubectl scale deployment/nginx-deployment --replicas=5`} />
      </>
    )
  },
  {
    id: 'devops-helm',
    title: 'Helm (Package Manager)',
    parent: '4. Orchestration (K8s)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Helm</strong> helps you manage Kubernetes applications. Helm Charts help you define, install, and upgrade even the most complex Kubernetes application.
        </p>
        <p className="mb-4">Instead of manually editing 10 YAML files to change an image version, you just update one value in Helm.</p>
        <CodeBlock language="bash" code={`# Install a chart
helm install my-release bitnami/mysql

# List releases
helm list

# Upgrade a release
helm upgrade my-release bitnami/mysql --set auth.rootPassword=secret

# Rollback
helm rollback my-release 1`} />
      </>
    )
  }
];