import { motion } from "motion/react";

interface HologramImageProps {
  src: string;
  alt: string; // Make alt required for accessibility
  priority?: boolean; // If true, don't lazy load (for above-the-fold images)
}

export function HologramImage({ src, alt, priority = false }: HologramImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-[420px] mx-auto aspect-[3/4]"
    >
      {/* LIGHT BEAM */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 
        w-[120%] h-72 
        bg-gradient-to-t from-cyan-300/50 via-cyan-400/20 to-transparent 
        blur-xl pointer-events-none"
      />

      {/* GLOW AURA */}
      <div
        className="absolute inset-4 rounded-2xl 
        bg-cyan-400/20 blur-xl"
      />

      {/* IMAGE */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="
            w-full h-full
            object-cover object-[50%_20%]
            opacity-95
            mix-blend-screen
            contrast-125 brightness-110 saturate-150
          "
          animate={{ opacity: [0.9, 1, 0.95] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* SCANLINE */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 48%, rgba(34,211,238,0.15) 50%, transparent 52%)",
            backgroundSize: "100% 6px",
          }}
          animate={{ y: [0, 12] }}
          transition={{ duration: 0.35, repeat: Infinity, ease: "linear" }}
        />

        {/* DISTORTION */}
        <motion.div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-tr
            from-transparent via-cyan-400/10 to-transparent
            mix-blend-overlay
          "
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
