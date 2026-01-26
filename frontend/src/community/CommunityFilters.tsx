import { motion } from 'framer-motion';
import { Clock, Filter, Flame, Grid, List, Search, TrendingUp } from 'lucide-react';
import type { CommunityFiltersProps } from './types';

export const CommunityFilters = ({
  searchQuery,
  activeFilter,
  viewMode,
  sortBy,
  onSearchChange,
  onFilterChange,
  onViewModeChange,
  onSortChange,
  categories,
}: CommunityFiltersProps) => {
  const sortOptions = [
    { id: 'recent', label: 'Most Recent', icon: <Clock className="size-4" /> },
    { id: 'popular', label: 'Most Popular', icon: <Flame className="size-4" /> },
    { id: 'trending', label: 'Trending', icon: <TrendingUp className="size-4" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-8 md:mb-12"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search ads by product, style, or creator..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all
                  ${activeFilter === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }
                `}
              >
                {typeof category.icon === 'string' ? (
                  <span>{category.icon}</span>
                ) : (
                  <span className="opacity-80">{category.icon}</span>
                )}
                {category.label}
                {category.count > 0 && (
                  <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                    activeFilter === category.id 
                      ? 'bg-white/20' 
                      : 'bg-white/5'
                  }`}>
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* View & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-indigo-500/20 text-indigo-400' : 'hover:bg-white/5'}`}
              >
                <Grid className="size-5" />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-indigo-500/20 text-indigo-400' : 'hover:bg-white/5'}`}
              >
                <List className="size-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                className="appearance-none bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none cursor-pointer transition-all"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
