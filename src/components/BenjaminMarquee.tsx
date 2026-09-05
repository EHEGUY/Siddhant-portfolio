interface BenjaminMarqueeProps {
  text?: string;
  items?: string[];
  className?: string;
  speedClass?: string;
}

export default function BenjaminMarquee({
  items = [
    "Siddhant Tantarpale",
    "Mumbai, India",
    "AI & Software Engineer",
    "Siddhant Tantarpale",
    "Mumbai, India",
    "AI & Software Engineer",
  ],
  className = "bg-[#df2531] text-white py-4 sm:py-6",
}: BenjaminMarqueeProps) {
  // Repeating array for infinite seamless looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden select-none z-10 ${className}`}>
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-8">
            <span className="font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase">
              {item}
            </span>
            <span className="inline-flex items-center justify-center mx-4 sm:mx-8 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white/60 text-base sm:text-2xl font-normal opacity-90">
              ©
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
