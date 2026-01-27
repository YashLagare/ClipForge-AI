import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { GenerateHeaderProps } from './types';

export const GenerateHeader = ({ isLoading }: GenerateHeaderProps) => {
  return (
    <motion.div 
      className="text-center mb-10 md:mb-16"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full bg-indigo-900/20 border border-indigo-500/20 mb-4 md:mb-6">
        <Sparkles className="size-4" />
        <span className="text-sm font-medium">AI-Powered Creation</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
        Generate <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Stunning Ads</span>
      </h1>
      
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
        Upload product and model images to create high-converting short-form videos in minutes. 
        Our AI handles everything from background removal to scene composition.
      </p>
    </motion.div>
  );
};
