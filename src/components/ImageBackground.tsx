interface ImageBackgroundProps {
  src: string;
  opacity?: number;
  overlayOpacity?: number;
}

const ImageBackground = ({ 
  src, 
  opacity = 0.7,
  overlayOpacity = 0.3
}: ImageBackgroundProps) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      />

      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0 bg-background" 
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
    </div>
  );
};

export default ImageBackground;
