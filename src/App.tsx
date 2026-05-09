import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundElements } from './components/BackgroundElements';
import { TimelineVisualization } from './components/TimelineVisualization';
import { ComparePanel } from './components/ComparePanel';
import { CurrentAppPanel } from './components/CurrentAppPanel';
import { PresentationController } from './components/PresentationController';
import { LayoutDashboard, PlaySquare, Maximize2, GitMerge } from 'lucide-react';

type ViewMode = 'general' | 'compare' | 'current' | 'presentation';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('general');
  const [selectedParadigmId, setSelectedParadigmId] = useState<string | null>(null);

  const resetToGeneral = () => {
    setViewMode('general');
    setSelectedParadigmId(null);
  };

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-slate-50 text-slate-800 flex flex-col relative font-sans">
        <BackgroundElements />
        
        {/* Header */}
      <header className={`absolute top-0 w-full z-0 p-8 pt-10 flex flex-col items-center pointer-events-none transition-all duration-700 ${(viewMode === 'general' && !selectedParadigmId) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 mb-4 tracking-tight drop-shadow-md text-center">
          Línea de tiempo de los paradigmas educativos
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-serif italic drop-shadow-sm text-center max-w-4xl">
          "Cada paradigma cambió la manera de enseñar, aprender y mirar al estudiante."
        </p>
      </header>

      {/* Main Timeline (Always rendered, drives the zoom) */}
      <main className="flex-1 relative z-10 w-full h-full">
        <TimelineVisualization 
          selectedId={selectedParadigmId} 
          onSelect={(id) => {
             setSelectedParadigmId(id);
             if (id) {
               setViewMode('general'); // Ensure other overlaid panels close if clicking node
             }
          }} 
        />
      </main>

      {/* Bottom Controls */}
      <footer className="absolute bottom-0 w-full z-40 p-8 flex flex-col items-center justify-end bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none">
        
        <p className={`text-sm text-slate-600 mb-6 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 bg-white/50 shadow-sm transition-opacity duration-500 ${(viewMode === 'general' && !selectedParadigmId) ? 'opacity-100' : 'opacity-0'}`}>
          Haz clic en cada paradigma para explorar sus características, autores y aplicación actual.
        </p>

        <div className={`flex flex-wrap justify-center gap-4 pointer-events-auto transition-transform duration-500 ${viewMode !== 'presentation' ? 'translate-y-0' : 'translate-y-32'}`}>
           <ActionButton 
             icon={<LayoutDashboard size={18} />} 
             label="Vista general" 
             active={viewMode === 'general' && !selectedParadigmId} 
             onClick={resetToGeneral} 
           />
           <ActionButton 
             icon={<PlaySquare size={18} />} 
             label="Modo exposición" 
             active={viewMode === 'presentation'} 
             onClick={() => setViewMode('presentation')} 
           />
           <ActionButton 
             icon={<Maximize2 size={18} />} 
             label="Comparar" 
             active={viewMode === 'compare'} 
             onClick={() => setViewMode('compare')} 
           />
           <ActionButton 
             icon={<GitMerge size={18} />} 
             label="Aplicación actual" 
             active={viewMode === 'current'} 
             onClick={() => setViewMode('current')} 
           />
        </div>
      </footer>

      {/* Modals/Panels overlays */}
      <AnimatePresence>
         {viewMode === 'compare' && <ComparePanel onClose={resetToGeneral} />}
         {viewMode === 'current' && <CurrentAppPanel onClose={resetToGeneral} />}
         {viewMode === 'presentation' && (
           <PresentationController 
             selectedId={selectedParadigmId}
             onSelect={setSelectedParadigmId}
             onClose={resetToGeneral} 
           />
         )}
      </AnimatePresence>
      </div>
    </>
  );
}

const ActionButton = ({ icon, label, onClick, active }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border shadow-md ${
      active 
        ? 'bg-tech-violet border-tech-violet/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-105' 
        : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 backdrop-blur-md'
    }`}
  >
    {icon} {label}
  </button>
);

