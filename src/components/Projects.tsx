import { GitBranch, Server, Shield, Workflow, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'The GitOps Microservices Platform',
      description: 'Production-ready architecture deployed on AWS EKS with high availability.',
      icon: GitBranch,
      gradient: 'from-cyan-500 to-cyan-600',
      repo: 'https://github.com/PruthvirajPhadatare/wisecow-k8s-gitops-cicd',
      technologies: ['Kubernetes (EKS)', 'ArgoCD', 'Helm', 'Docker', 'GitOps'],
      achievements: [
        'Implemented declarative GitOps workflows for seamless deployments',
        'Reduced deployment time from 45 minutes to 8 minutes',
        'Achieved 99.9% deployment success rate with automated rollbacks',
        'Managed 50+ microservices across multiple environments'
      ],
      highlights: [
        'Automated synchronization between Git repositories and Kubernetes clusters',
        'Built custom Helm charts for standardized application deployment',
        'Integrated monitoring and alerting for real-time deployment tracking'
      ]
    },
    {
      title: 'Production-Grade Zero-Touch Infrastructure',
      description: 'Fully automated build-test-deploy cycle for cloud infrastructure.',
      icon: Server,
      gradient: 'from-green-500 to-green-600',
      repo: 'https://github.com/PruthvirajPhadatare/End-to-End-CI-CD-Infra-on-AWS',
      technologies: ['Terraform', 'Jenkins', 'AWS EC2', 'RDS', 'CloudFormation'],
      achievements: [
        'Achieved complete automation of infrastructure provisioning',
        'Eliminated manual configuration drift across 100+ resources',
        'Reduced infrastructure spin-up time from 4 hours to 30 minutes',
        'Implemented infrastructure versioning and reproducibility'
      ],
      highlights: [
        'Created modular Terraform blueprints for reusable infrastructure patterns',
        'Built Jenkins pipelines for automated testing and validation',
        'Integrated security scanning and compliance checks in the pipeline'
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

                  {/* GitHub Button */}
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