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
      {/* Background image - fully visible */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageBackground;
