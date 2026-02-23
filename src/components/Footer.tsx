import { Mail, Linkedin, Github, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-12 border border-white/10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Scalable</span>
          </h2>

          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to architect cloud-native solutions that drive innovation 
            Let's connect and discuss how we can transform your infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:pruthvirajphadatare@outlook.com"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/50"
            >
              <Mail className="w-5 h-5" />
              pruthvirajphadatare@outlook.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/pruthvirajphadatare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>

            <a
              href="https://github.com/pruthvirajphadatare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Github className="w-6 h-6 text-green-400" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-slate-500 text-sm font-mono">
            <p>© 2025 Pruthviraj Phadatare</p>
            <span className="hidden sm:block">•</span>
            <p>AWS Cloud & DevOps Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
