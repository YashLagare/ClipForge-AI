import { AnimatePresence, motion } from 'framer-motion';
import type { MediaItem, ResultProject, ResultStats, ResultTab } from '../types';
import { MediaCarousel } from './MediaCarousel';
import { MediaViewer } from './MediaViewer';
import { QuickStats } from './QuickStats';
import { ResultAnalytics } from './ResultAnalytics';
import { ResultDetails } from './ResultDetails';
import { ResultTabs } from './ResultTabs';

interface ResultPreviewProps {
  project: ResultProject | null;
  activeTab: ResultTab;
  onTabChange: (tab: ResultTab) => void;
  mediaItems: MediaItem[];
  currentMediaIndex: number;
  onMediaIndexChange: (index: number) => void;
  onFullscreen: () => void;
}

/**
 * Main preview section with tabbed content
 */
export const ResultPreview = ({
  project,
  activeTab,
  onTabChange,
  mediaItems,
  currentMediaIndex,
  onMediaIndexChange,
  onFullscreen,
}: ResultPreviewProps) => {
  if (!project) return null;

  const currentMedia = mediaItems[currentMediaIndex];
  const stats: ResultStats = {
    likes: project.likes,
    views: project.views,
    shares: project.shares,
    engagement: project.engagement,
  };

  return (
    <div className="space-y-6">
      {/* Media Viewer Section */}
      {currentMedia && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <MediaViewer
            item={currentMedia}
            onFullscreenClick={onFullscreen}
          />
        </motion.div>
      )}

      {/* Media Carousel */}
      {mediaItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <MediaCarousel
            mediaItems={mediaItems}
            currentIndex={currentMediaIndex}
            onIndexChange={onMediaIndexChange}

          />
        </motion.div>
      )}

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <QuickStats stats={stats} />
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <ResultTabs activeTab={activeTab} onTabChange={onTabChange} />
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'preview' && (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-white/70"
          >
            <p>Preview content displayed above</p>
          </motion.div>
        )}

        {activeTab === 'details' && (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ResultDetails project={project} />
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ResultAnalytics project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
