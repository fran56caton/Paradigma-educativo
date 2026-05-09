import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paradigmsData, Paradigm } from '../data/paradigms';
import { InfoCard } from './InfoCard';

// Percentages along the timeline to space the 8 nodes out
const POSITIONS = [8, 20, 32, 44, 56, 68, 80, 92];

interface TimelineVisualizationProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export const TimelineVisualization: React.FC<TimelineVisualizationProps> = ({ selectedId, onSelect }) => {
  const selectedIndex = selectedId ? paradigmsData.findIndex(p => p.id === selectedId) : -1;
  const isZoomed = selectedIndex !== -1;
  const currentPos = isZoomed ? POSITIONS[selectedIndex] : 50;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-[400px] -translate-y-1/2 flex items-center pointer-events-none"
        animate={{ 
          scale: isZoomed ? 1.4 : 1,
          x: isZoomed ? `${25 - currentPos}vw` : '0vw'
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
        style={{ originY: "50%", originX: `${currentPos}%` }}
      >
        <div className="absolute top-1/2 left-[3%] right-[8%] h-[3px] -translate-y-1/2 z-0 flex items-center bg-slate-300">
          <div className="w-full h-full relative">
            <div 
              className="absolute left-[100%] top-1/2 -translate-y-1/2 border-y-[12px] border-y-transparent border-l-[20px] border-l-slate-300"
            />
          </div>
        </div>

        {paradigmsData.map((paradigm, i) => (
          <ParadigmNode 
            key={paradigm.id}
            paradigm={paradigm}
            index={i}
            position={POSITIONS[i]}
            isSelected={selectedId === paradigm.id}
            isInactive={isZoomed && selectedId !== paradigm.id}
            onClick={() => onSelect(paradigm.id)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {isZoomed && paradigmsData[selectedIndex] && (
          <InfoCard 
            paradigm={paradigmsData[selectedIndex]} 
            onClose={() => onSelect(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface ParadigmNodeProps {
  paradigm: Paradigm;
  index: number;
  position: number;
  isSelected: boolean;
  isInactive: boolean;
  onClick: () => void;
}

const ParadigmNode: React.FC<ParadigmNodeProps> = ({ paradigm, index, position, isSelected, isInactive, onClick }) => {
  const Icon = paradigm.icon;
  const isLabelUp = index % 2 === 0;
  
  return (
    <motion.div 
      className="absolute top-1/2 flex flex-col items-center justify-center cursor-pointer pointer-events-auto z-10"
      style={{ left: `${position}%`, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, scale: 0.5, y: isLabelUp ? '-80%' : '-20%' }}
      animate={{
        opacity: isInactive ? 0.2 : 1,
        scale: isSelected ? 1.15 : isInactive ? 0.8 : 1,
        y: '-50%'
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
        delay: index * 0.08
      }}
      whileHover={!isSelected ? { scale: 1.15, filter: 'brightness(1.2)' } : {}}
      onClick={onClick}
    >
      {/* Node Label (hidden when selected or ANY is selected to give focus to the card and avoid clutter) */}
      <div 
        className={`absolute w-[180px] md:w-[220px] ${isLabelUp ? 'bottom-[35px] md:bottom-[45px]' : 'top-[35px] md:top-[45px]'} flex flex-col items-center text-center transition-all duration-500 pointer-events-none z-0 ${(isSelected || isInactive) ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
      >
        {!isLabelUp && (
          <div className="w-px h-6 md:h-10 mb-2" style={{ background: `linear-gradient(to bottom, ${paradigm.color}aa, transparent)` }} />
        )}
        
        <div className={`flex items-center justify-center ${isLabelUp ? 'flex-col' : 'flex-col-reverse'} gap-1.5`}>
          <span 
            className="text-sm md:text-base lg:text-lg font-display font-bold leading-snug drop-shadow-sm" 
            style={{ color: paradigm.color }}
          >
            {paradigm.name}
          </span>
          <span className="text-[9px] md:text-xs uppercase tracking-widest text-slate-600 font-bold bg-white/90 px-2 py-1 rounded-md backdrop-blur-md border border-slate-200 shadow-sm">
            {paradigm.period.split(',')[0]}
          </span>
        </div>

        {isLabelUp && (
          <div className="w-px h-6 md:h-10 mt-2" style={{ background: `linear-gradient(to top, ${paradigm.color}88, transparent)` }} />
        )}
      </div>

      {/* Node Circle */}
      <div 
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-[3px] bg-white transition-all duration-300 shadow-md"
        style={{ 
          borderColor: paradigm.color,
          boxShadow: isSelected || !isInactive ? `0 4px 15px ${paradigm.color}30` : `none` 
        }}
      >
        <div 
          className="absolute -inset-2 rounded-full border border-dashed opacity-40 animate-[spin_10s_linear_infinite]" 
          style={{ borderColor: paradigm.color }} 
        />
        
        <span 
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-slate-800 text-xs flex items-center justify-center font-bold border-2 shadow-sm z-20"
          style={{ borderColor: paradigm.color }}
        >
          {index + 1}
        </span>
        
        <Icon size={28} color={paradigm.color} />
      </div>

      {/* Pulse effect below when not inactive */}
      {!isInactive && !isSelected && (
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 opacity-0 pointer-events-none z-[-1]"
          style={{ borderColor: paradigm.color }}
          animate={{ scale: [1, 1.8, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: index * 0.2 }}
        />
      )}
    </motion.div>
  );
};
