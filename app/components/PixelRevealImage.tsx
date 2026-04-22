import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface PixelRevealImageProps {
  src: string;
  width?: number;
  height?: number;
  pixelSize?: number;
}

export function PixelRevealImage({
  src,
  width = 400,
  height = 400,
  pixelSize = 10,
}: PixelRevealImageProps) {
  const cols = Math.floor(width / pixelSize);
  const rows = Math.floor(height / pixelSize);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setReveal(true), 1600);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl"
      style={{ width, height }}
    >
      {/* PIXEL LAYER */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${pixelSize}px)`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const xIndex = i % cols;
          const yIndex = Math.floor(i / cols);
          const fromLeft = xIndex < cols / 2;
          // Wave effect only, no random
          const delay = (xIndex / cols) * 0.5 + (yIndex / rows) * 0.15;
          return (
            <motion.div
              key={i}
              className="will-change-transform"
              style={{
                width: pixelSize,
                height: pixelSize,
                backgroundImage: `url(${src})`,
                backgroundSize: `${width}px ${height}px`,
                backgroundPosition: `-${xIndex * pixelSize}px -${yIndex * pixelSize}px`,
                boxShadow: "0 0 6px rgba(34,211,238,0.5)",
              }}
              initial={{
                x: fromLeft ? -120 : 120,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                x: 0,
                opacity: reveal ? 0 : 1,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                delay: isInView ? delay : 0,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* FINAL IMAGE */}
      <motion.img
        src={src}
        alt="profile"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: reveal ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
