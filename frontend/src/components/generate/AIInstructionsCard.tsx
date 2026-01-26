import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { AIInstructionsCardProps, StyleOption } from './types';

const styleOptions: StyleOption[] = [
  { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500' },
  { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500' },
  { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500' },
  { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500' },
];

export const AIInstructionsCard = ({
  prompt,
  style,
  onPromptChange,
  onStyleSelect,
  onRandomPrompt,
  isDisabled,
}: AIInstructionsCardProps) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <label className="block text-sm font-medium">
          AI Instructions
        </label>
        <button
          type="button"
          onClick={onRandomPrompt}
          disabled={isDisabled}
          className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Sparkles className="size-3" />
          Inspire me
        </button>
      </div>
      
      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        disabled={isDisabled}
        placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
        className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
      
      {/* Style Suggestions */}
      <div className="mt-4 md:mt-6">
        <p className="text-xs text-gray-500 mb-2 md:mb-3">Try these styles:</p>
        <div className="flex flex-wrap gap-2">
          {styleOptions.map((styleOption) => (
            <button
              type="button"
              key={styleOption.name}
              onClick={() => onStyleSelect(styleOption.name)}
              disabled={isDisabled}
              className={`
                text-xs px-3 py-1.5 rounded-full border transition-all duration-300
                ${style === styleOption.name
                  ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent`
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {styleOption.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
