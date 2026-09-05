import { cn } from "@/lib/utils";

interface ClippedCircleProps {
  circleClassName?: string;
  circleSize?: number;
}

export function ClippedCircle({
  circleClassName,
  circleSize = 800,
}: ClippedCircleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full transition-opacity duration-500 z-0",
        "opacity-0 group-hover:opacity-[0.07] dark:group-hover:opacity-[0.04]", // subtle glow that appears on hover
        circleClassName
      )}
      style={{
        width: circleSize,
        height: circleSize,
        left: "var(--x, 0px)",
        top: "var(--y, 0px)",
        transform: "translate(-50%, -50%)",
        filter: "blur(60px)",
      }}
    />
  );
}
