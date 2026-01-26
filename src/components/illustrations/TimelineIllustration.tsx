const TimelineIllustration = () => (
  <svg viewBox="0 0 300 120" className="w-full h-full" fill="none">
    {/* 90-day timeline visualization */}
    <defs>
      <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(185, 100%, 45%)" />
        <stop offset="50%" stopColor="hsl(320, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(45, 100%, 50%)" />
      </linearGradient>
    </defs>
    
    {/* Main timeline bar */}
    <rect x="20" y="55" width="260" height="4" rx="2" fill="url(#timelineGradient)" opacity="0.3" />
    
    {/* Progress fill */}
    <rect x="20" y="55" width="260" height="4" rx="2" fill="url(#timelineGradient)" opacity="0.8" />
    
    {/* Phase markers */}
    {/* Day 1 */}
    <circle cx="40" cy="57" r="8" fill="hsl(185, 100%, 45%)" opacity="0.9" />
    <text x="40" y="85" textAnchor="middle" fill="hsl(185, 100%, 45%)" fontSize="10" fontWeight="500">Day 1</text>
    
    {/* Day 30 */}
    <circle cx="110" cy="57" r="8" fill="hsl(185, 100%, 45%)" opacity="0.7" />
    <text x="110" y="85" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">30</text>
    
    {/* Day 60 */}
    <circle cx="190" cy="57" r="8" fill="hsl(320, 100%, 50%)" opacity="0.7" />
    <text x="190" y="85" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">60</text>
    
    {/* Day 90 */}
    <circle cx="260" cy="57" r="10" fill="hsl(45, 100%, 50%)" opacity="0.9" />
    <text x="260" y="85" textAnchor="middle" fill="hsl(45, 100%, 50%)" fontSize="10" fontWeight="500">Day 90</text>
    
    {/* Rising curve showing progress */}
    <path 
      d="M40 45 Q75 40 110 35 Q150 28 190 22 Q225 18 260 15" 
      stroke="url(#timelineGradient)" 
      strokeWidth="2" 
      fill="none"
      opacity="0.5"
    />
    
    {/* Milestone dots on curve */}
    <circle cx="40" cy="45" r="3" fill="hsl(185, 100%, 45%)" />
    <circle cx="110" cy="35" r="3" fill="hsl(185, 100%, 45%)" />
    <circle cx="190" cy="22" r="3" fill="hsl(320, 100%, 50%)" />
    <circle cx="260" cy="15" r="4" fill="hsl(45, 100%, 50%)" />
    
    {/* Phase labels */}
    <text x="75" y="105" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.5">Foundation</text>
    <text x="150" y="105" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.5">Optimization</text>
    <text x="225" y="105" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.5">Mastery</text>
  </svg>
);

export default TimelineIllustration;
