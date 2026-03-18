import { useState } from 'react';
import { Server, Shield, Workflow, Github, Boxes, Activity, Layers, MessageSquare } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  repo: string;
  technologies: string[];
  achievements: string[];
  highlights: string[];
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const projects: Project[] = [
    {
      title: '3-Tier Application Deployment on AWS (FSPL)',
      description: 'Designed and deployed a secure, production-ready 3-tier architecture on AWS with high availability.',
      icon: Server,
      gradient: 'from-orange-500 to-orange-600',
      repo: 'https://github.com/PruthvirajPhadatare/FSPL-3Tier',
      technologies: ['AWS', 'EC2', 'RDS', 'ALB', 'VPC', 'Linux', 'Nginx'],
      achievements: [
        'Designed custom VPC with public and private subnets, IGW, and NAT Gateway',
        'Deployed web, app, and database layers using EC2 and RDS (MySQL)',
        'Configured Application Load Balancer for high availability and traffic distribution',
        'Improved security by isolating database in private subnet with controlled access'
      ],
      highlights: [
        'Implemented complete 3-tier architecture following AWS best practices',
        'Configured secure networking using security groups and route tables',
        'Ensured fault tolerance and scalability using load balancing'
      ]
    },
    {
      title: '3-Tier Application (Docker + Kubernetes)',
      description: 'Transformed a traditional 3-tier application into a containerized and scalable Kubernetes deployment.',
      icon: Boxes,
      gradient: 'from-blue-500 to-blue-600',
      repo: 'https://github.com/PruthvirajPhadatare/3-Tier-App-Deployment',
      technologies: ['Docker', 'Kubernetes', 'K8s', 'Microservices', 'Containerization'],
      achievements: [
        'Containerized frontend, backend, and database using Docker',
        'Created Kubernetes deployments, services, and ConfigMaps for orchestration',
        'Enabled internal communication using ClusterIP services',
        'Achieved scalable architecture with Kubernetes auto-healing capabilities'
      ],
      highlights: [
        'Converted monolithic setup into container-based microservices architecture',
        'Implemented service discovery and environment-based configurations',
        'Ensured portability across local and cloud environments'
      ]
    },
    {
      title: 'DevSecOps Pipeline Implementation',
      description: 'Built a secure CI/CD pipeline integrating automated security scanning and quality analysis.',
      icon: Shield,
      gradient: 'from-red-500 to-red-600',
      repo: 'https://github.com/PruthvirajPhadatare/DevSecOps-Project',
      technologies: ['Jenkins', 'Docker', 'Trivy', 'SonarQube', 'CI/CD', 'Security'],
      achievements: [
        'Integrated SonarQube for static code quality analysis',
        'Implemented Trivy for container vulnerability scanning',
        'Automated CI/CD pipeline using Jenkins for build, test, and deploy stages',
        'Reduced security risks by shifting security checks earlier in pipeline'
      ],
      highlights: [
        'Implemented DevSecOps best practices with automated security gates',
        'Enabled continuous monitoring of code quality and vulnerabilities',
        'Improved overall deployment reliability and security posture'
      ]
    },
    {
      title: 'Node.js CI/CD Pipeline Automation',
      description: 'Automated end-to-end deployment of a Node.js application using CI/CD pipelines on AWS.',
      icon: Workflow,
      gradient: 'from-green-500 to-green-600',
      repo: 'https://github.com/PruthvirajPhadatare/node-todo-cicd',
      technologies: ['Node.js', 'Jenkins', 'Docker', 'AWS EC2', 'GitHub Webhooks'],
      achievements: [
        'Designed CI/CD pipeline using Jenkins with GitHub integration',
        'Automated build and deployment process triggered by code commits',
        'Containerized application using Docker for consistency',
        'Reduced deployment time and manual intervention significantly'
      ],
      highlights: [
        'Implemented webhook-based automation for real-time deployments',
        'Ensured zero-downtime deployments using Docker and reverse proxy',
        'Improved build success rate and deployment efficiency'
      ]
    },
    {
      title: 'Cloud-Native Monitoring Application',
      description: 'Built a real-time monitoring dashboard for system metrics using cloud-native tools.',
      icon: Activity,
      gradient: 'from-purple-500 to-purple-600',
      repo: 'https://github.com/PruthvirajPhadatare/Cloud-native-monitoring-app',
      technologies: ['Python', 'Flask', 'Kubernetes', 'psutil', 'Docker'],
      achievements: [
        'Developed real-time system metrics dashboard using Flask and psutil',
        'Deployed application on Kubernetes using containerized setup',
        'Handled 100+ concurrent requests with optimized performance',
        'Improved monitoring visibility and system performance insights'
      ],
      highlights: [
        'Implemented lightweight monitoring solution for CPU, memory, and system stats',
        'Containerized application for easy deployment and scaling',
        'Enhanced responsiveness with optimized backend processing'
      ]
    },
    {
      title: 'Two-Tier Flask Application on Kubernetes',
      description: 'Deployed a Flask-MySQL application on Kubernetes with persistent storage and scalability.',
      icon: Layers,
      gradient: 'from-indigo-500 to-indigo-600',
      repo: 'https://github.com/PruthvirajPhadatare/two-tier-flaskapp',
      technologies: ['Flask', 'MySQL', 'Kubernetes', 'Docker', 'AWS'],
      achievements: [
        'Deployed Flask application with MySQL database on Kubernetes cluster',
        'Configured persistent volumes and claims for data durability',
        'Implemented horizontal pod scaling for improved performance',
        'Achieved high availability with Kubernetes service abstraction'
      ],
      highlights: [
        'Built scalable two-tier architecture using container orchestration',
        'Ensured reliable storage using persistent volume configurations',
        'Improved application uptime and resilience'
      ]
    },
    {
      title: '3-Tier Chat Application on Kubernetes',
      description: 'Implemented a scalable real-time chat application using Kubernetes-based microservices architecture.',
      icon: MessageSquare,
      gradient: 'from-pink-500 to-pink-600',
      repo: 'https://github.com/PruthvirajPhadatare/3-Tier-Chatapp-k8s',
      technologies: ['Kubernetes', 'Docker', 'WebSockets', 'Node.js', 'Microservices'],
      achievements: [
        'Designed multi-tier chat application with frontend, backend, and database layers',
        'Deployed application on Kubernetes with proper service exposure',
        'Enabled real-time communication using WebSockets',
        'Scaled backend services to handle multiple concurrent users'
      ],
      highlights: [
        'Implemented microservices-based architecture for real-time systems',
        'Configured Kubernetes services and ingress for external access',
        'Ensured high availability and scalability'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Project <span className="text-cyan-400">Showcases</span>
        </h2>

        <div className="space-y-10">
          {(showAll ? projects : projects.slice(0, 4)).map((project, index: number) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10">

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔥 FIXED BUTTON + LINK SPACING */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button
                  onClick={() => setExpanded(prev => (prev === index ? null : index))}
                  className="text-cyan-400 text-sm hover:underline"
                >
                  {expanded === index ? 'Hide Details ▲' : 'View Details ▼'}
                </button>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>

              {expanded === index && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <ul className="text-sm text-slate-400 space-y-2">
                    {project.achievements.map((a, i) => (
                      <li key={i}>• {a}</li>
                    ))}
                  </ul>
                  <ul className="text-sm text-slate-400 space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg"
            >
              Show More Projects →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}