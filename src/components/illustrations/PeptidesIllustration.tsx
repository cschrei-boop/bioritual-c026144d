const PeptidesIllustration = () => (
  <svg viewBox="0 0 200 250" className="w-full h-full" fill="none">
    {/* DNA/molecular structure */}
    <defs>
      <linearGradient id="dnaGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(185, 100%, 45%)" />
        <stop offset="100%" stopColor="hsl(320, 100%, 50%)" />
      </linearGradient>
      <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(320, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(45, 100%, 50%)" />
      </linearGradient>
    </defs>
    
    {/* Double helix strands */}
    <path 
      d="M60 20 Q100 40 140 20 Q100 60 60 40 Q100 80 140 60 Q100 100 60 80 Q100 120 140 100 Q100 140 60 120 Q100 160 140 140 Q100 180 60 160 Q100 200 140 180 Q100 220 60 200 Q100 240 140 220" 
      stroke="hsl(185, 100%, 45%)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.6"
    />
    <path 
      d="M140 20 Q100 40 60 20 Q100 60 140 40 Q100 80 60 60 Q100 100 140 80 Q100 120 60 100 Q100 140 140 120 Q100 160 60 140 Q100 180 140 160 Q100 200 60 180 Q100 220 140 200 Q100 240 60 220" 
      stroke="hsl(320, 100%, 50%)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.6"
    />
    
    {/* Base pair connections */}
    {[30, 70, 110, 150, 190].map((y, i) => (
      <line 
        key={i}
        x1="70" 
        y1={y} 
        x2="130" 
        y2={y} 
        stroke="hsl(45, 100%, 50%)" 
        strokeWidth="1"
        opacity="0.4"
      />
    ))}
    
    {/* Molecular nodes */}
    <circle cx="60" cy="20" r="6" fill="hsl(185, 100%, 45%)" opacity="0.8" />
    <circle cx="140" cy="20" r="6" fill="hsl(320, 100%, 50%)" opacity="0.8" />
    <circle cx="60" cy="80" r="5" fill="hsl(185, 100%, 45%)" opacity="0.7" />
    <circle cx="140" cy="80" r="5" fill="hsl(320, 100%, 50%)" opacity="0.7" />
    <circle cx="60" cy="140" r="6" fill="hsl(185, 100%, 45%)" opacity="0.8" />
    <circle cx="140" cy="140" r="6" fill="hsl(320, 100%, 50%)" opacity="0.8" />
    <circle cx="60" cy="200" r="5" fill="hsl(185, 100%, 45%)" opacity="0.7" />
    <circle cx="140" cy="200" r="5" fill="hsl(320, 100%, 50%)" opacity="0.7" />
    
    {/* Floating amino acids */}
    <circle cx="30" cy="60" r="4" fill="hsl(45, 100%, 50%)" opacity="0.5" />
    <circle cx="170" cy="100" r="3" fill="hsl(45, 100%, 50%)" opacity="0.5" />
    <circle cx="25" cy="160" r="3" fill="hsl(185, 100%, 45%)" opacity="0.4" />
    <circle cx="175" cy="180" r="4" fill="hsl(320, 100%, 50%)" opacity="0.4" />
  </svg>
);

export default PeptidesIllustration;
