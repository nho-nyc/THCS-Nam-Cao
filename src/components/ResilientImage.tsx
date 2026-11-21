import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  bgClassName?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = 'h-full w-full object-cover',
  aspectClassName = '',
  bgClassName = 'bg-[#EEF2F6]',
  priority = false,
}: ResilientImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${bgClassName} ${aspectClassName}`}>
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#E6ECF2] via-[#F2F5F9] to-[#E3ECE7]"
        />
      )}

      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0F2744] via-[#17395F] to-[#1D4E4E] p-6 text-center text-white"
        >
          <BookOpen className="h-8 w-8 text-[#F3D78A]" aria-hidden="true" />
          <p className="max-w-xs text-sm font-medium text-white/90">{alt}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`${className} transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
