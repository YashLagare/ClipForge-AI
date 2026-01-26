import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { CommunityHeroProps } from './types';

export const CommunityHero = ({ isLoading }: CommunityHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="size-4 text-yellow-400" />
            <span className="text-sm font-medium">AI-Powered Community</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Discover <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Amazing Ads</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore thousands of high-converting ads created by our community. 
            Get inspired, learn what works, and join the conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
