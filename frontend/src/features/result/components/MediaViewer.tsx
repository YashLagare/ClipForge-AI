import { ImageIcon, Maximize2, VideoIcon } from 'lucide-react';
import type { MediaItem } from '../types';

interface MediaViewerProps {
  item: MediaItem;
  onFullscreenClick: () => void;
}

/**
 * Main media viewer - displays current image or video
 */
export const MediaViewer = ({
  item,
  onFullscreenClick,
}: MediaViewerProps) => {
  return (
    <div className="relative w-full max-h-[90vh] rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center">
      {item.type === 'video' ? (
        <video
          src={item.url}
          className="h-full w-auto max-w-[90vw] object-contain"
          controls
          autoPlay
          loop
        />
      ) : (
        <img
          src={item.url}
          alt={item.label}
          className="h-full w-auto max-w-[90vw] object-contain"
        />
      )}

      {/* Media Type Badge */}
      <div className="absolute top-4 left-4">
        <div
          className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 ${
            item.type === 'video'
              ? 'bg-purple-500/20 text-purple-300'
              : 'bg-blue-500/20 text-blue-300'
          }`}
        >
          {item.type === 'video' ? (
            <>
              <VideoIcon className="size-3" />
              Video Ad
            </>
          ) : (
            <>
              <ImageIcon className="size-3" />
              {item.label}
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Toggle */}
      <button
        onClick={onFullscreenClick}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label="Toggle fullscreen"
      >
        <Maximize2 className="size-5" />
      </button>
    </div>
  );
};
