import { motion } from 'framer-motion';
import { CreditCard, Wand2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../Buttons';
import type { StickyGenerateBarProps } from './types';

export const StickyGenerateBar = ({
  isGenerating,
  isDisabled,
  creditsRemaining,
  estimatedCost = 5,
}: Omit<StickyGenerateBarProps, 'onSubmit'>) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent pt-8 pb-4 md:pt-10 md:pb-6 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Credit Balance */}
        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
          <CreditCard className="size-4 text-gray-400" />
          <span className="text-sm text-gray-400">
            You have <span className="text-indigo-400 font-medium">{creditsRemaining} credits</span> remaining
          </span>
          <Link to="/plans" className="text-indigo-400 hover:text-indigo-300 text-sm ml-2 transition-colors">
            Upgrade →
          </Link>
        </div>

        {/* Generate Button */}
        <PrimaryButton
          type="submit"
          disabled={isGenerating || isDisabled}
          className={`
            w-full py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
            relative overflow-hidden group
          `}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all" />
          
          {/* AI Processing Animation */}
          {isGenerating && (
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] animate-shimmer" />
          )}
          
          <div className="relative flex items-center justify-center gap-2 md:gap-3">
            {isGenerating ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="size-4 md:size-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span className="text-sm md:text-base">AI is creating your ad...</span>
                </div>
                <span className="text-xs md:text-sm opacity-80 hidden sm:inline">
                  This may take 15-30 seconds
                </span>
              </>
            ) : (
              <>
                <Wand2Icon className="size-5 md:size-6 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">Generate with AI</span>
                <span className="text-xs md:text-sm opacity-80 ml-2">
                  ({estimatedCost} credits)
                </span>
              </>
            )}
          </div>
        </PrimaryButton>
        
        {/* Processing Indicator */}
        {isGenerating && (
          <div className="mt-3 md:mt-4">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span>Processing images</span>
              </div>
              <div className="size-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span>Generating scenes</span>
              </div>
              <div className="size-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <span>Adding effects</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
