import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'AWS Cloud Engineer',
      company: 'Montcrest Software',
      location: 'Pune, India',
      period: 'Current Role',
      duration: '2024 - Present',
      description: 'Designed and implemented production-grade AWS infrastructure using Terraform and CloudFormation with improving deployment speed by 40% and reducing manual effort by 75%.',

      highlights: [
        'Designed and implemented scalable AWS infrastructure solutions',
        'Developed advanced Bash automation scripts for EC2 security hardening',
        'Architected multi-region disaster recovery strategies',
        'Optimized cloud costs through resource right-sizing and automation'
      ],
      current: true
    },
    {
      role: 'Intern DevOps Engineer',
      company: 'HisanLabs',
      location: 'Pune, India ',
      period: '2023 - 2024',
      duration: '2023 - 2024',
      description: 'Implemented GitOps workflows using ArgoCD on Amazon EKS for reducing deployment rollback time by 60% and improving release reliability.',

      highlights: [
        'Implemented GitOps workflows using ArgoCD for declarative deployments',
        'Containerized legacy applications and deployed to Amazon EKS',
        'Created CI/CD pipelines with Jenkins and GitHub Actions',
        'Established monitoring and alerting with Prometheus and Grafana'
      ],
      current: false
    }
  ];

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">My journey in cloud engineering and DevOps</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-green-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${
                        exp.current
                          ? 'bg-gradient-to-br from-cyan-500 to-green-500'
                          : 'bg-gradient-to-br from-slate-600 to-slate-700'
                      } flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold rounded-full">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-slate-300 mb-6">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-400 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 border-4 border-slate-800 flex-shrink-0 relative z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
