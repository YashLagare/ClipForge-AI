import type { project } from '../../types/Community';

/**
 * Extended project type with analytics and performance metrics
 * Used throughout the Result feature for strongly-typed data handling
 */
export type ResultProject = project & {
  likes: number;
  views: number;
  shares: number;
  engagement: number;
  aiInsights: string[];
  performance: {
    score: number;
    category: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    recommendations: string[];
  };
};

/**
 * Media item in the carousel
 */
export interface MediaItem {
  type: 'image' | 'video' | 'source';
  url: string;
  label: string;
}

/**
 * Stats displayed in the preview
 */
export interface ResultStats {
  likes: number;
  views: number;
  shares: number;
  engagement: number;
}

/**
 * Tab types for result page
 */
export type ResultTab = 'preview' | 'details' | 'analytics';

/**
 * Download action configuration
 */
export interface DownloadAction {
  format: string;
  label: string;
  icon: React.ReactNode;
  size: string;
}

/**
 * Share action configuration
 */
export interface ShareAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Props for ResultPreview component
 */
export interface ResultPreviewProps {
  project: ResultProject | null;
  activeTab: ResultTab;
  onTabChange: (tab: ResultTab) => void;
  mediaItems: MediaItem[];
  currentMediaIndex: number;
  onMediaIndexChange: (index: number) => void;
  onFullscreen: () => void;
}

/**
 * Props for ResultDetails component
 */
export interface ResultDetailsProps {
  project: ResultProject;
}

/**
 * Props for ResultAnalytics component
 */
export interface ResultAnalyticsProps {
  project: ResultProject;
}
