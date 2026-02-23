import { Cloud, Code, Box, Activity } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Ecosystem',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['AWS', 'Oracle Cloud (OCI)', 'EC2', 'RDS', 'S3', 'Lambda', 'CloudWatch', 'VPC', 'IAM']
    },
    {
      title: 'IaC & Automation',
      icon: Code,
      color: 'from-green-500 to-green-600',
      skills: ['Terraform', 'CloudFormation', 'Ansible', 'Bash Scripting', 'Python', 'Jenkins', 'GitHub Actions']
    },
    {
      title: 'Orchestration',
      icon: Box,
      color: 'from-cyan-400 to-green-500',
      skills: ['Kubernetes', 'Amazon EKS', 'Docker', 'Helm', 'ArgoCD', 'Container Registry', 'Service Mesh']
    },
    {
      title: 'Observability',
      icon: Activity,
      color: 'from-green-400 to-cyan-500',
      skills: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack', 'Alerting']
    }
  ];

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills & <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Cloud Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">Comprehensive mastery across the DevOps spectrum</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-slate-200 text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
