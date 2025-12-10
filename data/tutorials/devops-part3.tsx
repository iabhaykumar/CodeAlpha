import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DEVOPS_PART3_TOPICS: Topic[] = [
  // 5. Infrastructure as Code (Terraform)
  {
    id: 'devops-iac-intro',
    title: 'What is IaC?',
    parent: '5. Infrastructure as Code',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Infrastructure as Code (IaC)</strong> is the managing and provisioning of computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Declarative vs Imperative</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Declarative (Terraform):</strong> You define <em>what</em> you want (e.g., "I need 2 servers"). The tool figures out how to achieve it.</li>
            <li><strong>Imperative (Bash/Ansible):</strong> You define <em>how</em> to do it (e.g., "Run this command, then that command").</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-terraform-basics',
    title: 'Terraform Basics',
    parent: '5. Infrastructure as Code',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Terraform uses HashiCorp Configuration Language (HCL).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Core Concepts</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Provider:</strong> Plugins to interact with APIs (AWS, Azure, Google).</li>
            <li><strong>Resource:</strong> The infrastructure object (EC2 instance, S3 bucket).</li>
            <li><strong>State File (.tfstate):</strong> Database mapping real-world resources to your configuration. <strong>Never delete this!</strong></li>
        </ul>
        <CodeBlock language="hcl" code={`# 1. Define Provider
provider "aws" {
  region = "us-east-1"
}

# 2. Define Resource
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "CodeAlpha-Server"
  }
}`} />
      </>
    )
  },
  {
    id: 'devops-terraform-workflow',
    title: 'The Terraform Workflow',
    parent: '5. Infrastructure as Code',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The standard lifecycle of a Terraform project.
        </p>
        <CodeBlock language="bash" code={`# 1. Initialize (Download providers/plugins)
terraform init

# 2. Plan (Dry run - shows what will happen)
terraform plan

# 3. Apply (Create/Modify infrastructure)
terraform apply

# 4. Destroy (Remove everything - dangerous!)
terraform destroy`} />
      </>
    )
  },
  {
    id: 'devops-terraform-modules',
    title: 'Terraform Modules',
    parent: '5. Infrastructure as Code',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Modules allow you to group resources together and reuse them. It's like writing a function in programming.
        </p>
        <CodeBlock language="hcl" code={`module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "my-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
}`} />
      </>
    )
  },

  // 6. Configuration Management (Ansible)
  {
    id: 'devops-ansible-intro',
    title: 'Ansible Basics',
    parent: '6. Configuration Management',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          While Terraform <em>provisions</em> the server, <strong>Ansible</strong> <em>configures</em> it (installs software, updates configs). It is <strong>agentless</strong> (uses SSH) and uses YAML.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Inventory</h3>
        <p className="mb-4">A file listing the IP addresses of the servers you want to manage.</p>
        <CodeBlock language="ini" code={`[webservers]
192.168.1.50
192.168.1.51

[dbservers]
10.0.0.5`} />
      </>
    )
  },
  {
    id: 'devops-ansible-playbook',
    title: 'Playbooks & Modules',
    parent: '6. Configuration Management',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A Playbook defines the tasks to run on the inventory.
        </p>
        <CodeBlock language="yaml" code={`---
- name: Install Nginx
  hosts: webservers
  become: yes  # Run as root (sudo)

  tasks:
    - name: Ensure Nginx is installed
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Start Nginx service
      service:
        name: nginx
        state: started`} />
        <p className="mt-4"><strong>Running a Playbook:</strong></p>
        <CodeBlock language="bash" code={`ansible-playbook -i inventory.ini site.yaml`} />
      </>
    )
  },
  {
    id: 'devops-ansible-roles',
    title: 'Ansible Roles',
    parent: '6. Configuration Management',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Roles allow you to break complex playbooks into reusable components (vars, tasks, files, templates).
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`roles/
    common/
    webservers/
        tasks/
        handlers/
        files/
        templates/
    dbservers/`}
        </pre>
      </>
    )
  }
];