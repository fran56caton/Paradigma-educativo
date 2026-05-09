import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { paradigmsData } from '../data/paradigms';
import { Play, Pause, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PresentationControllerProps {
  onClose: () => void;
  onSelect: (id: string | null) => void;
  selectedId: string | null;
}

export const PresentationController: React.FC<PresentationControllerProps> = ({ onClose, onSelect, selectedId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const currentIndex = selectedId 
    ? paradigmsData.findIndex(p => p.id === selectedId)
    : -1;

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds per slide
    
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  // Start at 0 if none selected
  useEffect(() => {
    if (currentIndex === -1) {
      onSelect(paradigmsData[0].id);
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < paradigmsData.length - 1) {
      onSelect(paradigmsData[currentIndex + 1].id);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelect(paradigmsData[currentIndex - 1].id);
    }
  };

  const handleClose = () => {
    setIsPlaying(false);
    onSelect(null); // Return to general view
    onClose();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') { e.preventDefault(); handleNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrev(); }
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const progress = ((currentIndex + 1) / paradigmsData.length) * 100;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl border border-slate-200 p-4 rounded-full shadow-2xl flex items-center gap-6"
    >
      <button 
        onClick={handlePrev}
        disabled={currentIndex <= 0}
        className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 transition"
      >
        <ChevronLeft size={24} className="text-slate-800" />
      </button>

      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-4 rounded-full bg-tech-violet hover:bg-violet-500 text-white transition shadow-lg"
      >
        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
      </button>

      <button 
        onClick={handleNext}
        disabled={currentIndex >= paradigmsData.length - 1}
        className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 transition"
      >
        <ChevronRight size={24} className="text-slate-800" />
      </button>

      <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden relative mx-2">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-amber-400"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-sm font-mono text-slate-500 w-12 text-center pointer-events-none">
        {currentIndex + 1} / {paradigmsData.length}
      </div>

      <div className="w-px h-8 bg-slate-200 mx-2" />

      <button 
        onClick={handleClose}
        className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition"
      >
        Salir
      </button>
    </motion.div>
  );
};
