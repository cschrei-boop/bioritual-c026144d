const ProfessionalIllustration = () => (
  <svg viewBox="0 0 150 150" className="w-full h-full" fill="none">
    {/* Abstract professional/person with systems flowing around them */}
    <defs>
      <linearGradient id="proGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(185, 100%, 45%)" />
        <stop offset="50%" stopColor="hsl(320, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(45, 100%, 50%)" />
      </linearGradient>
    </defs>
    
    {/* Background circle */}
    <circle cx="75" cy="75" r="60" fill="url(#proGradient)" opacity="0.1" />
    
    {/* Head */}
    <circle cx="75" cy="50" r="20" fill="hsl(185, 100%, 45%)" opacity="0.4" />
    <circle cx="75" cy="50" r="15" fill="hsl(185, 100%, 45%)" opacity="0.6" />
    
    {/* Body/shoulders */}
    <path 
      d="M45 80 Q75 65 105 80 L110 120 Q75 130 40 120 Z" 
      fill="hsl(320, 100%, 50%)" 
      opacity="0.3"
    />
    
    {/* Orbiting elements - representing systems/protocols */}
    <circle cx="75" cy="75" r="45" stroke="hsl(185, 100%, 45%)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 4" />
    
    {/* System nodes orbiting */}
    <circle cx="30" cy="75" r="6" fill="hsl(185, 100%, 45%)" opacity="0.7" />
    <circle cx="120" cy="75" r="6" fill="hsl(320, 100%, 50%)" opacity="0.7" />
    <circle cx="75" cy="30" r="5" fill="hsl(45, 100%, 50%)" opacity="0.7" />
    <circle cx="75" cy="120" r="5" fill="hsl(185, 100%, 45%)" opacity="0.6" />
    
    {/* Connection lines */}
    <line x1="36" y1="75" x2="55" y2="65" stroke="hsl(185, 100%, 45%)" strokeWidth="1" opacity="0.4" />
    <line x1="114" y1="75" x2="95" y2="65" stroke="hsl(320, 100%, 50%)" strokeWidth="1" opacity="0.4" />
    <line x1="75" y1="35" x2="75" y2="45" stroke="hsl(45, 100%, 50%)" strokeWidth="1" opacity="0.4" />
    
    {/* Checkmarks/completion indicators */}
    <path d="M26 73 L29 76 L34 71" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M116 73 L119 76 L124 71" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export default ProfessionalIllustration;
