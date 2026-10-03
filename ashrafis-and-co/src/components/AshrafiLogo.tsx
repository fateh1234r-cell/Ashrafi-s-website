import React from 'react';

interface AshrafiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showAura?: boolean;
}

/**
 * Official Ashrafi's and co. gold mark, rendered from the brand PNG
 * (public/logo-mark.png, cropped from the full logo in public/logo.png).
 */
export const AshrafiLogo: React.FC<AshrafiLogoProps> = ({
  className = '',
  size = 'md',
  showAura = false,
}) => {
  // Dimensional classes based on size presets
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-32 sm:h-32',
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}>
      {/* Subtle warm golden ambient aura if requested */}
      {showAura && (
        <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl scale-125 pointer-events-none" />
      )}

      <img
        src="/logo-mark.png"
        alt="Ashrafi's and co. logo"
        width={412}
        height={350}
        className="relative w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(217,119,6,0.35)] select-none"
        draggable={false}
      />
    </div>
  );
};
