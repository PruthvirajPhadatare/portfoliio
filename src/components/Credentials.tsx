import { Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function Credentials() {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      color: 'from-orange-500 to-orange-600',
      icon: '🏛️',
      link: 'https://www.credly.com/badges/79d0cc09-46e0-4d33-8c70-e85e2d22d1f2'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      color: 'from-orange-500 to-orange-600',
      icon: '☁️',
      link: 'https://www.credly.com/badges/7aa3b07b-a7aa-444d-ac29-e3c210476715/public_url'
    },
    {
      name: 'OCI Architect Associate (2025)',
      issuer: 'Oracle Cloud Infrastructure',
      color: 'from-red-500 to-red-600',
      icon: '🏛️',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=56208E73A89D77F507A120BBD9F57FCB8D9698FD408D86A99B144F75368C4BD5'
    },
    {
      name: 'OCI Foundations Associate (2025)',
      issuer: 'Oracle Cloud Infrastructure',
      color: 'from-red-500 to-red-600',
      icon: '☁️',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9182BC53CD3F1040CDB26FEB094B438EA3C3BE61FD95CFF958E5BC11B98EEB3C'
    },
    {
      name: 'Oracle Data Platform Foundations Associate (2025)',
      issuer: 'Oracle Cloud Infrastructure',
      color: 'from-blue-500 to-blue-600',
      icon: '📊',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4A04E5EDB3E5B0C05D887BB6BA4769080CF33EB9D58CC930EA4C1132CBD03E24'
    }
  ];

  const education = [
    {
      degree: 'M.Sc. in Computer Science',
      institution: 'Pune University',
      score: '77.45%',
      period: '2021-2023'
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Pune University',
      score: '78.78%',
      period: '2018-2021'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials & <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-lg">Certified expertise and academic foundation</p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>View Credential</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">Academic Background</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-green-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold text-lg">{edu.score}</p>
                    <p className="text-slate-400 text-sm font-mono">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}