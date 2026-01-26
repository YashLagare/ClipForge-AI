import { ChevronLeft, ChevronRight, VideoIcon } from 'lucide-react';
import type { MediaItem } from '../types';

interface MediaCarouselProps {
  mediaItems: MediaItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

/**
 * Thumbnail carousel for navigating through media items
 */
export const MediaCarousel = ({
  mediaItems,
  currentIndex,
  onIndexChange,
}: MediaCarouselProps) => {
  if (mediaItems.length <= 1) return null;

  return (
    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
      {mediaItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onIndexChange(index)}
          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative ${
            currentIndex === index
              ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-black/50'
              : 'opacity-60 hover:opacity-100'
          }`}
        >
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
              <VideoIcon className="size-5" />
            </div>
          )}
          <img
            src={item.url}
            alt={item.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 left-1 right-1">
            <div className="text-[10px] px-1 py-0.5 rounded bg-black/70 truncate">
              {item.label}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

interface MediaNavigationProps {
  totalMedia: number;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

/**
 * Navigation arrows for media carousel
 */
export const MediaNavigation = ({
  totalMedia,
  currentIndex,
  onNext,
  onPrev,
}: MediaNavigationProps) => {
  if (totalMedia <= 1) return null;

  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label="Previous media"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label="Next media"
      >
        <ChevronRight className="size-5" />
      </button>
    </>
  );
};
