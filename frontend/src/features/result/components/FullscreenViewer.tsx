import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import type { MediaItem } from '../types';

interface FullscreenViewerProps {
  isOpen: boolean;
  mediaItem: MediaItem;
  onClose: () => void;
}

/**
 * Fullscreen modal viewer for media
 */
export const FullscreenViewer = ({
  isOpen,
  mediaItem,
  onClose,
}: FullscreenViewerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {mediaItem.type === 'video' ? (
              <video
                src={mediaItem.url}
                className="w-full h-auto max-h-[90vh] rounded-2xl"
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={mediaItem.url}
                alt={mediaItem.label}
                className="w-full h-auto max-h-[90vh] rounded-2xl object-contain"
              />
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all"
              aria-label="Close fullscreen"
            >
              <Maximize2 className="size-5 rotate-45" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
