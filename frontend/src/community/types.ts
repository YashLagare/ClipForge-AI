import type { project } from '../types/Community';

/**
 * Extended project type with community-specific stats and metadata
 * Extends the base project interface with engagement metrics
 */
export type CommunityProject = project & {
  likes: number;
  views: number;
  shares: number;
  comments: number;
  isTrending?: boolean;
  isFeatured?: boolean;
  liked?: boolean;
};

/**
 * Filter/Sort/View types
 */
export type SortOption = 'recent' | 'popular' | 'trending';
export type ViewMode = 'grid' | 'list';

/**
 * Category configuration
 */
export interface Category {
  id: string;
  label: string;
  icon: string | React.ReactNode;
}

/**
 * Filter configuration
 */
export interface Filter {
  id: SortOption;
  label: string;
  icon: React.ReactNode;
}

/**
 * Component Props
 */
export interface CommunityHeroProps {
  isLoading?: boolean;
}

export interface CommunityStatsProps {
  stats?: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
    change: string;
  }>;
}

export interface CommunityFiltersProps {
  searchQuery: string;
  activeFilter: string;
  viewMode: ViewMode;
  sortBy: SortOption;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: string) => void;
  onViewModeChange: (mode: ViewMode) => void;
  onSortChange: (sort: SortOption) => void;
  categories: Category[];
}

export interface ProjectGridProps {
  projects: CommunityProject[];
  viewMode: ViewMode;
  hoveredProject: string | null;
  onHoverChange: (projectId: string | null) => void;
  onLike: (projectId: string) => void;
  onClearFilters: () => void;
}

export interface ProjectCardProps {
  project: CommunityProject;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  onLike: () => void;
}

export interface EmptyStateProps {
  onClearFilters: () => void;
}

export interface CommunityCTAProps {
  totalProjects: number;
  displayedCount: number;
  onLoadMore: () => void;
}
