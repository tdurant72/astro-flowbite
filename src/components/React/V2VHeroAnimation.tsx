import { motion } from 'motion/react';


export default function V2VHeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[400px] md:h-[500px] flex items-center justify-center"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full opacity-90">
        <defs>
          <linearGradient id="data-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0" />
            <stop offset="50%" stopColor="#0055FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0055FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0055FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central "Grounding Signal" Node Glow */}
        <motion.circle
          cx="200" cy="200" r="60"
          fill="url(#glow)"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Network Lines */}
        <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
          <line x1="50" y1="100" x2="200" y2="200" />
          <line x1="350" y1="100" x2="200" y2="200" />
          <line x1="50" y1="300" x2="200" y2="200" />
          <line x1="350" y1="300" x2="200" y2="200" />
          <line x1="200" y1="40" x2="200" y2="200" />
          <line x1="200" y1="360" x2="200" y2="200" />
        </g>

        {/* Animated Data Flow Lines */}
        <g stroke="url(#data-flow)" strokeWidth="2" fill="none" strokeLinecap="round">
          {[
            { d: "M50,100 L200,200", delay: 0 },
            { d: "M350,100 L200,200", delay: 0.5 },
            { d: "M50,300 L200,200", delay: 1 },
            { d: "M350,300 L200,200", delay: 1.5 },
            { d: "M200,40 L200,200", delay: 0.2 },
            { d: "M200,360 L200,200", delay: 1.2 }
          ].map((path, i) => (
            <motion.path
              key={i}
              d={path.d}
              strokeDasharray="100 200"
              initial={{ strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: path.delay
              }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g fill="#1A1A1A" stroke="#0055FF" strokeWidth="2">
          <circle cx="50" cy="100" r="6" />
          <circle cx="350" cy="100" r="6" />
          <circle cx="50" cy="300" r="6" />
          <circle cx="350" cy="300" r="6" />
          <circle cx="200" cy="40" r="6" />
          <circle cx="200" cy="360" r="6" />

          {/* Central Node */}
          <circle cx="200" cy="200" r="12" fill="#0055FF" />
        </g>

        {/* Central Node Rings */}
        <motion.circle
          cx="200" cy="200" r="24"
          fill="none" stroke="#0055FF" strokeWidth="1" opacity="0.5"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          strokeDasharray="4 4"
        />
        <motion.circle
          cx="200" cy="200" r="36"
          fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          strokeDasharray="8 8"
        />
      </svg>
    </motion.div>
  );
}