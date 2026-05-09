import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { paradigmsData, Paradigm } from '../data/paradigms';
import { X, ArrowRightLeft } from 'lucide-react';

interface ComparePanelProps {
  onClose: () => void;
}

export const ComparePanel: React.FC<ComparePanelProps> = ({ onClose }) => {
  const [paradigm1Id, setParadigm1Id] = useState<string>(paradigmsData[0].id);
  const [paradigm2Id, setParadigm2Id] = useState<string>(paradigmsData[3].id);

  const p1 = paradigmsData.find(p => p.id === paradigm1Id)!;
  const p2 = paradigmsData.find(p => p.id === paradigm2Id)!;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col pt-12 px-8 pb-8"
    >
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors z-50 border border-slate-200"
      >
        <X size={24} />
      </button>

      <div className="text-center mb-8 flex-shrink-0">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-2">Comparar paradigmas</h2>
        <p className="text-slate-600">Contrasta dos enfoques educativos para entender sus diferencias.</p>
      </div>

      <div className="flex flex-1 gap-8 max-w-[1400px] w-full mx-auto overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="mb-6">
            <select 
              value={paradigm1Id}
              onChange={(e) => setParadigm1Id(e.target.value)}
              className="w-full bg-slate-50 border-b-4 text-xl font-bold text-slate-900 p-4 rounded-t-xl focus:outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
              style={{ borderBottomColor: p1.color }}
            >
              {paradigmsData.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-6">
             <ComparisonSection title="Rol del Docente" content={p1.teacherRole} />
             <ComparisonSection title="Rol del Estudiante" content={p1.studentRole} />
             <ComparisonSection title="Forma de Aprendizaje (Idea Central)" content={p1.centralIdea} />
             <ComparisonSection title="Aplicación Actual" content={p1.currentApplication.join(', ')} />
             <div className="p-5 rounded-xl border-l-[3px] bg-slate-50 border border-slate-200" style={{ borderLeftColor: p1.color }}>
                <p className="font-serif italic text-slate-800">"{p1.synthesis}"</p>
             </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="flex flex-col items-center justify-center px-4 flex-shrink-0">
           <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
           <div className="absolute top-1/2 -translate-y-1/2 p-3 bg-white rounded-full border-4 border-slate-100 shadow-md">
             <ArrowRightLeft className="text-slate-500" size={24} />
           </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="mb-6">
            <select 
              value={paradigm2Id}
              onChange={(e) => setParadigm2Id(e.target.value)}
              className="w-full bg-slate-50 border-b-4 text-xl font-bold text-slate-900 p-4 rounded-t-xl focus:outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
              style={{ borderBottomColor: p2.color }}
            >
              {paradigmsData.map(p => (
                <option key={p.id} value={p.id} disabled={p.id === paradigm1Id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 overflow-y-auto pl-4 custom-scrollbar space-y-6">
             <ComparisonSection title="Rol del Docente" content={p2.teacherRole} />
             <ComparisonSection title="Rol del Estudiante" content={p2.studentRole} />
             <ComparisonSection title="Forma de Aprendizaje (Idea Central)" content={p2.centralIdea} />
             <ComparisonSection title="Aplicación Actual" content={p2.currentApplication.join(', ')} />
             <div className="p-5 rounded-xl border-l-[3px] bg-slate-50 border border-slate-200" style={{ borderLeftColor: p2.color }}>
                <p className="font-serif italic text-slate-800">"{p2.synthesis}"</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ComparisonSection = ({ title, content }: { title: string, content: string }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{title}</h4>
    <p className="text-slate-800 text-lg leading-snug">{content}</p>
  </div>
);
