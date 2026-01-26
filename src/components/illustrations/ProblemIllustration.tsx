const ProblemIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    {/* Chaos/noise visual - tangled lines and scattered shapes */}
    <defs>
      <linearGradient id="chaosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(185, 100%, 45%)" />
        <stop offset="100%" stopColor="hsl(320, 100%, 50%)" />
      </linearGradient>
    </defs>
    
    {/* Tangled lines representing overwhelm */}
    <path 
      d="M20 100 Q50 40 80 100 Q110 160 140 100 Q170 40 180 100" 
      stroke="hsl(185, 100%, 45%)" 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.5"
    />
    <path 
      d="M30 80 Q60 120 90 80 Q120 40 150 80 Q180 120 190 80" 
      stroke="hsl(320, 100%, 50%)" 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.4"
    />
    <path 
      d="M10 120 Q40 80 70 120 Q100 160 130 120 Q160 80 190 120" 
      stroke="hsl(45, 100%, 50%)" 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.4"
    />
    
    {/* Scattered shapes - representing fragmentation */}
    <rect x="40" y="50" width="15" height="15" fill="hsl(185, 100%, 45%)" opacity="0.3" transform="rotate(15 47.5 57.5)" />
    <rect x="130" y="40" width="12" height="12" fill="hsl(320, 100%, 50%)" opacity="0.3" transform="rotate(-20 136 46)" />
    <rect x="80" y="130" width="18" height="18" fill="hsl(45, 100%, 50%)" opacity="0.25" transform="rotate(30 89 139)" />
    <rect x="150" y="120" width="10" height="10" fill="hsl(185, 100%, 45%)" opacity="0.3" transform="rotate(-10 155 125)" />
    
    {/* Circles scattered */}
    <circle cx="60" cy="90" r="8" fill="hsl(320, 100%, 50%)" opacity="0.2" />
    <circle cx="140" cy="70" r="6" fill="hsl(45, 100%, 50%)" opacity="0.25" />
    <circle cx="100" cy="100" r="25" stroke="url(#chaosGradient)" strokeWidth="1" fill="none" opacity="0.3" />
    <circle cx="100" cy="100" r="35" stroke="url(#chaosGradient)" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="4 4" />
    
    {/* Noise dots */}
    {[...Array(20)].map((_, i) => (
      <circle 
        key={i}
        cx={20 + (i * 8) % 160}
        cy={30 + (i * 13) % 140}
        r={1 + (i % 3)}
        fill={i % 3 === 0 ? "hsl(185, 100%, 45%)" : i % 3 === 1 ? "hsl(320, 100%, 50%)" : "hsl(45, 100%, 50%)"}
        opacity={0.3 + (i % 4) * 0.1}
      />
    ))}
  </svg>
);

export default ProblemIllustration;
