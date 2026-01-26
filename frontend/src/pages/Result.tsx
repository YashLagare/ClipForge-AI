import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CreditsCard,
  DownloadPanel,
  FullscreenViewer,
  QuickStatsCard,
  RelatedGenerations,
  ResultHeader,
  ResultPreview,
  SharePanel,
  useResult,
  type ResultTab,
} from '../features/result';

/**
 * Result Page - Orchestration Layer
 *
 * Composes all Result components with minimal business logic.
 * State management delegated to useResult hook.
 */
export const Result = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const {
    project,
    loading,
    isGenerating,
    copied,
    mediaItems,
    generateVideo,
    copyToClipboard,
    shareProject,
  } = useResult(projectId);

  // Local UI state
  const [activeTab, setActiveTab] = useState<ResultTab>('preview');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (loading || !project) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="size-10 border-2 border-indigo-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white p-6 md:p-12 mt-20">
      {/* Background effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-1/2 size-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/2 size-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* Single Layout Container - Controls all page-level width and centering */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <ResultHeader
            project={project}
            copied={copied}
            onCopyToClipboard={copyToClipboard}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Preview Section (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <ResultPreview
              project={project}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              mediaItems={mediaItems}
              currentMediaIndex={currentMediaIndex}
              onMediaIndexChange={setCurrentMediaIndex}
              onFullscreen={() => setIsFullscreen(true)}
            />
          </div>

          {/* Right: Sidebar (1 column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* Download Panel */}
            <DownloadPanel
              project={project}
              isGenerating={isGenerating}
              onGenerateVideo={generateVideo}
            />

            {/* Share Panel */}
            <SharePanel
              copied={copied}
              onShare={shareProject}
              onCopyLink={copyToClipboard}
            />

            {/* Quick Stats Card */}
            <QuickStatsCard hasVideo={Boolean(project?.generatedVideo?.length)} />

            {/* Credits Card */}
            <CreditsCard />
          </motion.div>
        </div>

        {/* Related Generations Section - Inside unified container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="pt-8 border-t border-white/10"
        >
          <RelatedGenerations />
        </motion.div>
      </div>

      {/* Fullscreen Media Viewer */}
      {mediaItems[currentMediaIndex] && (
        <FullscreenViewer
          isOpen={isFullscreen}
          mediaItem={mediaItems[currentMediaIndex]}
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </div>
  );
};

export default Result;