import { TrendingDown, Zap, Sparkles } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      icon: TrendingDown,
      value: '40%',
      label: 'Reduction in Infrastructure Build Time',
      description: 'Using Terraform for automated provisioning',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      value: '50%',
      label: '50% Faster Deployment Cycles',
      description: 'Through Jenkins and ArgoCD pipelines',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Sparkles,
      value: '80%',
      label: 'Manual Effort Saved',
      description: 'By developing modular AWS infrastructure blueprints',
      color: 'from-cyan-400 to-green-500'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Performance <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Stats</span>
          </h2>
          <p className="text-slate-400 text-lg">Data-driven results that matter</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              <div className="mb-4">
                <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </h3>
              </div>

              <p className="text-slate-400 text-sm font-mono">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
