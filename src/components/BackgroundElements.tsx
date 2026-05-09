import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-multiply"
        style={{ backgroundImage: 'url(https://www.unheval.edu.pe/portal/wp-content/uploads/2025/02/portada2-1500x630-1-1500x430.png)' }}
      />
      
      {/* Light subtle gradient over the image to soften it further */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ffffffaa,_#f8fafcaa)] opacity-80" />
      
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
};

