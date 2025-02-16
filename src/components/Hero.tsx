import React from 'react';
import { Network, Shield, Server, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-blue-950 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23304050' stroke-width='1' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                  alt="Abdelhafid"
                  className="relative w-48 h-48 rounded-2xl mx-auto border-2 border-blue-500/50 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">Abdelhafid</h1>
              <p className="text-xl mb-6 text-blue-200">
                Étudiant en BTS SIO SISR passionné par les réseaux et la cybersécurité
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center bg-blue-950/50 rounded-full px-6 py-2 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/50 transition-colors">
                  <Network className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Infrastructure Réseau</span>
                </div>
                <div className="flex items-center bg-blue-950/50 rounded-full px-6 py-2 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/50 transition-colors">
                  <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Cybersécurité</span>
                </div>
                <div className="flex items-center bg-blue-950/50 rounded-full px-6 py-2 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/50 transition-colors">
                  <Server className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Administration Système</span>
                </div>
                <div className="flex items-center bg-blue-950/50 rounded-full px-6 py-2 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/50 transition-colors">
                  <Code className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Développement</span>
                </div>
              </div>
              <div className="space-y-4 text-blue-100 mb-8">
                <p>
                  Passionné par l'informatique depuis mon plus jeune âge, je me spécialise dans les infrastructures réseau et la sécurité informatique. Mon parcours en BTS SIO option SISR me permet d'acquérir une solide formation technique tout en développant des projets concrets.
                </p>
                <p>
                  Je suis particulièrement intéressé par les nouvelles technologies de virtualisation, le cloud computing et la cybersécurité. Mon objectif est de devenir un expert en sécurité des systèmes d'information.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;