const HeroIllustration = () => (
  <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
    {/* Abstract human silhouette with energy flows */}
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(185, 100%, 45%)" />
        <stop offset="50%" stopColor="hsl(320, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(45, 100%, 50%)" />
      </linearGradient>
    </defs>
    
    {/* Body silhouette */}
    <ellipse cx="150" cy="80" rx="35" ry="40" fill="hsl(185, 100%, 45%)" opacity="0.3" />
    <ellipse cx="150" cy="80" rx="25" ry="30" fill="hsl(185, 100%, 45%)" opacity="0.5" />
    
    {/* Torso */}
    <path 
      d="M120 110 Q150 100 180 110 L190 200 Q150 220 110 200 Z" 
      fill="hsl(320, 100%, 50%)" 
      opacity="0.3"
    />
    
    {/* Energy rings */}
    <circle cx="150" cy="150" r="80" stroke="url(#heroGradient)" strokeWidth="1" opacity="0.4" />
    <circle cx="150" cy="150" r="100" stroke="url(#heroGradient)" strokeWidth="0.5" opacity="0.3" />
    <circle cx="150" cy="150" r="120" stroke="url(#heroGradient)" strokeWidth="0.5" opacity="0.2" />
    
    {/* Signal flows */}
    <path 
      d="M80 150 Q100 120 120 150 Q140 180 160 150 Q180 120 200 150 Q220 180 240 150" 
      stroke="hsl(185, 100%, 45%)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.6"
    />
    <path 
      d="M70 200 Q100 170 130 200 Q160 230 190 200 Q220 170 250 200" 
      stroke="hsl(320, 100%, 50%)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.5"
    />
    <path 
      d="M90 250 Q120 220 150 250 Q180 280 210 250" 
      stroke="hsl(45, 100%, 50%)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.4"
    />
    
    {/* Floating particles */}
    <circle cx="80" cy="100" r="4" fill="hsl(185, 100%, 45%)" opacity="0.7" />
    <circle cx="220" cy="120" r="3" fill="hsl(320, 100%, 50%)" opacity="0.7" />
    <circle cx="100" cy="280" r="5" fill="hsl(45, 100%, 50%)" opacity="0.6" />
    <circle cx="200" cy="300" r="3" fill="hsl(185, 100%, 45%)" opacity="0.5" />
    <circle cx="60" cy="200" r="2" fill="hsl(320, 100%, 50%)" opacity="0.6" />
    <circle cx="240" cy="220" r="4" fill="hsl(45, 100%, 50%)" opacity="0.5" />
    
    {/* Core glow */}
    <circle cx="150" cy="150" r="20" fill="hsl(320, 100%, 50%)" opacity="0.2" />
    <circle cx="150" cy="150" r="10" fill="hsl(320, 100%, 50%)" opacity="0.4" />
  </svg>
);

export default HeroIllustration;
