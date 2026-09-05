import { useRef, useState } from "react";

export interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
  rotationFactor?: number;
  children: React.ReactNode;
}

export function Tilt({
  children,
  rotationFactor = 10,
  className,
  ...props
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative to card top-left corner (0 to width, 0 to height) for radial mask positioning
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseX(x);
    setMouseY(y);

    // Relative to center for 3D tilt
    const centerX = x - width / 2;
    const centerY = y - height / 2;
    
    const rX = -(centerY / height) * rotationFactor;
    const rY = (centerX / width) * rotationFactor;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        "--x": `${mouseX}px`,
        "--y": `${mouseY}px`,
        ...props.style,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
