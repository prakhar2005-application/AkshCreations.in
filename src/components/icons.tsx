import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
       <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path d="M10 10H22V14H18V22H14V14H10V10Z" fill="hsl(var(--primary-foreground))"/>
      </svg>

      <span className="text-2xl font-headline font-bold text-primary">
        AkshCreations
      </span>
    </div>
  );
}
