import { motion } from 'framer-motion';
import { CheckCircle, RectangleHorizontalIcon, RectangleVerticalIcon } from 'lucide-react';
import type { PlatformFormatCardProps } from './types';

export const PlatformFormatCard = ({
  aspectRatio,
  onAspectRatioChange,
  isDisabled,
}: PlatformFormatCardProps) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
    >
      <label className="block text-sm font-medium mb-4 md:mb-6">
        Platform Format
      </label>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {/* Vertical Option */}
        <button
          type="button"
          onClick={() => onAspectRatioChange('9:16')}
          disabled={isDisabled}
          className={`
            relative p-4 rounded-xl border-2 transition-all duration-300
            ${aspectRatio === '9:16' 
              ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/20' 
              : 'border-white/10 hover:border-white/20 hover:bg-white/5'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-14 rounded bg-gradient-to-b from-indigo-500 to-purple-500" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Vertical</p>
              <p className="text-xs text-gray-400">TikTok, Reels, Stories</p>
            </div>
          </div>
          {aspectRatio === '9:16' && (
            <div className="absolute -top-2 -right-2">
              <CheckCircle className="size-5 text-green-500" />
            </div>
          )}
        </button>

        {/* Horizontal Option */}
        <button
          type="button"
          onClick={() => onAspectRatioChange('16:9')}
          disabled={isDisabled}
          className={`
            relative p-4 rounded-xl border-2 transition-all duration-300
            ${aspectRatio === '16:9' 
              ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/20' 
              : 'border-white/10 hover:border-white/20 hover:bg-white/5'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-8 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Horizontal</p>
              <p className="text-xs text-gray-400">YouTube, Facebook, TV</p>
            </div>
          </div>
          {aspectRatio === '16:9' && (
            <div className="absolute -top-2 -right-2">
              <CheckCircle className="size-5 text-green-500" />
            </div>
          )}
        </button>
      </div>

      {/* Alternative Icon Selection (Fallback) */}
      <div className="flex gap-3 mt-4 md:mt-6 justify-center">
        <button
          type="button"
          onClick={() => onAspectRatioChange('9:16')}
          disabled={isDisabled}
          className={`
            p-2.5 rounded-lg transition-all
            ${aspectRatio === '9:16' 
              ? 'bg-indigo-500/20 ring-2 ring-indigo-500/30' 
              : 'bg-white/5 hover:bg-white/10'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <RectangleVerticalIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => onAspectRatioChange('16:9')}
          disabled={isDisabled}
          className={`
            p-2.5 rounded-lg transition-all
            ${aspectRatio === '16:9' 
              ? 'bg-indigo-500/20 ring-2 ring-indigo-500/30' 
              : 'bg-white/5 hover:bg-white/10'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <RectangleHorizontalIcon className="size-5" />
        </button>
      </div>
    </motion.div>
  );
};
