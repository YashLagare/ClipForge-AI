import { motion } from 'framer-motion';
import { Sparkles, Star, Users, Zap } from 'lucide-react';
import type { CommunityStatsProps } from './types';

const DEFAULT_STATS = [
  { label: 'Total Ads', value: '10,458', icon: <Zap className="size-5" />, change: '+12%' },
  { label: 'Active Creators', value: '2,843', icon: <Users className="size-5" />, change: '+8%' },
  { label: 'Avg. Engagement', value: '4.8', icon: <Star className="size-5" />, change: '+15%' },
  { label: 'Generated Today', value: '327', icon: <Sparkles className="size-5" />, change: '+23%' },
];

export const CommunityStats = ({ stats = DEFAULT_STATS }: CommunityStatsProps) => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="size-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
              {stat.icon}
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
              {stat.change}
            </span>
          </div>
          <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};
