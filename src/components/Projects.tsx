import { Server, Shield, Workflow, Github, Boxes, Activity, Layers, MessageSquare } from 'lucide-react';

export default function Projects() {
  const projects = [
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
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Deep-Dive <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Project Showcases</span>
          </h2>
          <p className="text-slate-400 text-lg">Real-world solutions with measurable impact</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-cyan-300 text-sm font-mono hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-2 text-slate-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                        <Workflow className="w-5 h-5" />
                        Technical Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-slate-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105 border border-white/10 shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}