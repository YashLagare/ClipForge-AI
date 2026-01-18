import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

const cardsData = [
  {
    icon: Video,
    value: "10K+",
    label: "Video Ads Created",
    gradient: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/20",
    stat: "Last 30 days"
  }
  ,
  {
    icon: Users,
    value: "5K+",
    label: "Active Creators",
    gradient: "from-cyan-500 to-blue-500",
    bgGlow: "bg-cyan-500/20",
    stat: "Using daily"
  }
  ,
  {
    icon: TrendingUp,
    value: "85%",
    label: "Avg. Conversion Rate",
    gradient: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
    stat: "Across campaigns"
  }
  ,
  {
    icon: Sparkles,
    value: "2 Min",
    label: "Ad Creation Time",
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    stat: "From prompt to video"
  }

];

export default function Floating3DCards() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="mx-auto w-full max-w-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
    >
      {/* 3D Perspective Container */}
      <div className="relative h-[500px]" style={{ perspective: '1000px' }}>

        {/* Background Glow Effect */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 rounded-full ${card.bgGlow}`}
              animate={{
                opacity: activeCard === index ? 0.6 : 0,
                scale: activeCard === index ? 1.2 : 0.8,
              }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </div>

        {/* Floating Cards Stack */}
        <div className="relative h-full flex items-center justify-center">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            const offset = index - activeCard;
            const isActive = index === activeCard;

            // Calculate position based on card offset
            const zIndex = cardsData.length - Math.abs(offset);
            const rotateY = offset * 15;
            const translateZ = isActive ? 0 : -100 * Math.abs(offset);
            const translateX = offset * 60;
            const scale = isActive ? 1 : 0.85 - Math.abs(offset) * 0.1;
            const opacity = 1 - Math.abs(offset) * 0.25;

            return (
              <motion.div
                key={index}
                className="absolute w-full max-w-sm"
                style={{
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY,
                  translateX,
                  translateZ,
                  scale,
                  opacity: opacity > 0 ? opacity : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                }}
              >
                <div className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm p-8 ${isActive ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-white/5'
                  }`}>

                  {/* Card Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                      {card.value}
                    </div>

                    <div className="text-lg text-gray-300 font-medium mb-1">
                      {card.label}
                    </div>

                    <div className="text-sm text-gray-400">
                      {card.stat}
                    </div>
                  </div>

                  {/* Active Card Extra Content */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4 border-t border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          Live Stats
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-green-400">Active</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeCard
                ? 'w-8 bg-gradient-to-r from-indigo-400 to-purple-400'
                : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`View card ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <p className="mt-6 text-sm text-gray-400 text-center">
        Join thousands of creators scaling ads faster with AI.
      </p>

      {/* <motion.div
        className="mt-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 1 }}
      >
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
          <Play className="size-4" />
          <span>See AI in Action</span>
        </button>
      </motion.div> */}

    </motion.div>
  );
}