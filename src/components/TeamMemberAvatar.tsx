import { useState } from 'react';

interface TeamMemberAvatarProps {
  src: string;
  alt: string;
  className?: string;
  sizeClassName?: string;
}

export function TeamMemberAvatar({ src, alt, className = "", sizeClassName = "w-48 h-48 md:w-64 md:h-64" }: TeamMemberAvatarProps) {
  const [error, setError] = useState(false);

  // Extract initials cleanly from name or alt string
  const cleanName = alt.split('—')[0].trim();
  const nameParts = cleanName.split(' ').filter(Boolean);
  const initials = nameParts.length > 1 
    ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
    : (nameParts[0]?.[0] || 'CF').toUpperCase();

  if (error || !src) {
    return (
      <div 
        className={`${sizeClassName} rounded-full shadow-xl border-4 border-wheat/40 bg-forest flex flex-col items-center justify-center text-wheat font-serif font-bold uppercase tracking-widest transition-transform hover:scale-105 ${className}`}
        title={alt}
      >
        <span className="text-4xl md:text-6xl text-wheat">{initials}</span>
        <span className="text-[10px] text-cream/70 font-sans normal-case mt-1 font-normal">Cetrofarm</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      width={400}
      height={400}
      onError={() => setError(true)}
      className={`${sizeClassName} rounded-full object-cover shadow-xl border-4 border-wheat/40 ${className}`}
    />
  );
}
