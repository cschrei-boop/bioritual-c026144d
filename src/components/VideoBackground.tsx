import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  overlay?: boolean;
}

const VideoBackground = ({ 
  src, 
  opacity = 0.15, 
  overlay = true 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down for subtlety
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-background/40" />
      )}

      {/* Optional gradient fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
    </div>
  );
};

export default VideoBackground;
