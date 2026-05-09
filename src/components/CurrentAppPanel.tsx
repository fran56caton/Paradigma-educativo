import React from 'react';
import { motion } from 'framer-motion';
import { Layers, X } from 'lucide-react';

const currentElements = [
  "Explicación directa",
  "Educación emocional",
  "Aprendizaje activo",
  "Trabajo colaborativo",
  "Pensamiento crítico",
  "Tecnología educativa",
  "Práctica guiada",
  "Proyectos contextualizados"
];

interface CurrentAppPanelProps {
  onClose: () => void;
}

export const CurrentAppPanel: React.FC<CurrentAppPanelProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col p-8 overflow-hidden"
    >
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors z-50 shadow-sm border border-slate-200"
      >
        <X size={24} />
      </button>

      <div className="text-center max-w-4xl mx-auto flex-shrink-0 mt-8 mb-[10vh]">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 drop-shadow-sm">
          ¿Cómo conviven hoy los paradigmas educativos?
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          En la educación actual, los paradigmas no desaparecen completamente. Muchos conviven y se integran según el propósito pedagógico, el contexto, los estudiantes, los recursos y la intención formativa.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto flex-1 flex items-center justify-center mt-[-5vh]">
        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative z-20 flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500 to-tech-violet border-[6px] border-white shadow-[0_10px_40px_rgba(139,92,246,0.3)]"
        >
          <Layers className="text-white w-12 h-12 mb-2 drop-shadow-md" />
          <span className="text-white font-bold text-center text-lg font-display drop-shadow-md">
            Educación Actual
          </span>
        </motion.div>

        {/* Orbit Path */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="absolute w-[80vh] max-w-[600px] aspect-square rounded-full border-[2px] border-slate-300 border-dashed opacity-70 pointer-events-none" 
        />

        {/* Radial Elements */}
        {currentElements.map((item, index) => {
          const angle = (index / currentElements.length) * 360;
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="absolute z-10 w-fit"
              style={{
                '--radius': 'min(40vh, 300px)',
                transform: `rotate(${angle}deg) translate(var(--radius)) rotate(-${angle}deg)`,
              } as React.CSSProperties}
            >
              <div className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 px-6 py-3 rounded-2xl text-center shadow-md font-medium text-sm w-48 hover:bg-slate-50 hover:border-tech-violet hover:text-tech-violet hover:shadow-lg hover:scale-105 transition-all cursor-default">
                {item}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Quote */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 text-center flex-shrink-0">
        <p className="text-2xl md:text-3xl font-serif italic text-slate-800">
          "El docente actual no elige un solo paradigma: <span className="text-tech-violet font-semibold">aprende a integrarlos</span> con criterio, contexto y sentido pedagógico."
        </p>
      </div>
    </motion.div>
  );
};
