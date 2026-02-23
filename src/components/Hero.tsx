import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl">
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400 bg-clip-text text-transparent leading-[1.1]">
  AWS & DevOps Engineer
</h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-4xl mx-auto">
            2+ Years of Experience Designing Scalable Cloud Infrastructure,
            Automating CI/CD Pipelines, and Reducing Deployment Time by 40%
          </p>

          {/* Actively Seeking */}
          <p className="text-green-400 font-semibold mb-6">
             Actively seeking DevOps / Cloud Engineer opportunities 🚀
          </p>

          {/* Core Stack */}
          <div className="mb-8">
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
              Core Stack
            </p>
            <p className="text-slate-300 text-sm md:text-base font-mono">
              AWS | Terraform | Kubernetes | Docker | Jenkins | GitHub Actions | ArgoCD | Linux | Bash | Python
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/50"
            >
              View My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Pruthviraj_Phadatare_Resume.pdf"
              download="Pruthviraj_Phadatare_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-cyan-400 font-mono text-sm mb-4">Pruthviraj Phadatare</p>
          <div className="flex justify-center gap-4 text-slate-400">
            <span className="font-mono text-xs">AWS Cloud Engineer</span>
            <span>•</span>
            <span className="font-mono text-xs">DevOps Specialist</span>
            <span>•</span>
            <span className="font-mono text-xs">Infrastructure Architect</span>
          </div>
        </div>

      </div>
    </section>
  );
}