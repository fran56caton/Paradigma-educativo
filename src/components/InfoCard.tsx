import React from 'react';
import { motion } from 'framer-motion';
import { Paradigm } from '../data/paradigms';
import { X, Lightbulb, ListIcon, PenTool, Monitor, Search, Quote } from 'lucide-react';

interface InfoCardProps {
  paradigm: Paradigm;
  onClose: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({ paradigm, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute right-[2vw] md:right-[5vw] top-[5vh] md:top-[8vh] bottom-[5vh] md:bottom-[8vh] w-[90vw] md:w-[50vw] max-w-[700px] bg-white/95 backdrop-blur-3xl border border-slate-200 rounded-3xl flex flex-col z-50 shadow-2xl overflow-hidden"
      style={{ borderLeftWidth: '6px', borderLeftColor: paradigm.color }}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/50 backdrop-blur-md hover:bg-slate-100 text-slate-800 transition-all z-50 border border-slate-200 cursor-pointer shadow-md hover:scale-110"
      >
        <X size={20} />
      </button>

      <div className="flex-1 overflow-y-auto custom-scrollbar min-h-0 flex flex-col">
        {/* Image Header */}
        <div className="relative h-[220px] md:h-[260px] shrink-0 w-full bg-slate-100">
           <img src={paradigm.imageUrl} alt={paradigm.name} className="w-full h-full object-cover opacity-30 mix-blend-multiply" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
           
           <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex flex-col gap-3">
             <div className="flex items-center gap-4">
                 <div 
                    className="p-3.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-lg shrink-0" 
                    style={{ color: paradigm.color }}
                 >
                    <paradigm.icon size={36} />
                 </div>
                 <div>
                    <h4 className="text-[10px] md:text-xs font-mono tracking-widest uppercase mb-1 font-bold text-slate-600 drop-shadow-sm">
                      Etapa {paradigm.number} • {paradigm.period}
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 drop-shadow-sm leading-tight">
                      {paradigm.name}
                    </h2>
                 </div>
             </div>
           </div>
        </div>

        {/* Content Body */}
        <div className="px-6 md:px-10 py-8 shrink-0 flex flex-col gap-8">
           {/* Idea Central */}
           <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-7 h-7 mt-0.5 flex-shrink-0 drop-shadow-sm" style={{ color: paradigm.color }} />
                <p className="text-slate-800 text-lg font-medium leading-relaxed">
                  {paradigm.centralIdea}
                </p>
              </div>
           </div>

           {/* Roles & Authors */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold border-b border-slate-200 pb-2">
                      <ListIcon size={16} /> Roles Clave
                    </h4>
                    <div className="space-y-3">
                       <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                         <strong className="text-slate-900 text-sm block mb-1">Docente:</strong>
                         <span className="text-slate-700 text-sm leading-relaxed block">{paradigm.teacherRole}</span>
                       </div>
                       <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                         <strong className="text-slate-900 text-sm block mb-1">Estudiante:</strong>
                         <span className="text-slate-700 text-sm leading-relaxed block">{paradigm.studentRole}</span>
                       </div>
                    </div>
                  </div>
              </div>

              <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold border-b border-slate-200 pb-2">
                      <PenTool size={16} /> Características
                    </h4>
                    <ul className="space-y-2.5 mb-6">
                      {paradigm.characteristics.slice(0, 5).map(c => (
                        <li key={c} className="text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="text-lg leading-none" style={{ color: paradigm.color }}>•</span>
                          <span className="leading-tight">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
           </div>

           {/* Autores & Aplicacion & Ejemplo */}
           <div className="grid grid-cols-1 gap-8 pt-4 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold">
                    👥 Autores Representativos
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 font-serif italic leading-relaxed">
                    {paradigm.authors.join(', ')}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold">
                    <Monitor size={16} /> Aplicación Actual
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {paradigm.currentApplication.join(', ')}.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold">
                  <Search size={16} /> Ejemplo en el aula
                </h4>
                <p 
                  className="text-sm text-slate-800 bg-white p-5 rounded-xl border-l-[4px] shadow-sm leading-relaxed italic border border-slate-200" 
                  style={{ borderLeftColor: paradigm.color }}
                >
                  "{paradigm.classroomExample}"
                </p>
              </div>
           </div>
        </div>

        {/* Synthesis Footer */}
        <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200 mt-auto shrink-0 relative overflow-hidden">
           <div className="flex gap-4 items-center relative z-10">
             <Quote className="w-8 h-8 opacity-60 flex-shrink-0" style={{ color: paradigm.color }} />
             <p className="text-xl md:text-2xl font-serif italic text-slate-900 leading-tight border-l-0">
               "{paradigm.synthesis}"
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
