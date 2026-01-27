import { Search } from 'lucide-react';
import { GhostButton } from '../components/Buttons';
import type { EmptyStateProps } from './types';

export const EmptyState = ({ onClearFilters }: EmptyStateProps) => {
  return (
    <div className="text-center py-20">
      <div className="size-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-6">
        <Search className="size-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">No ads found</h3>
      <p className="text-gray-400 max-w-md mx-auto mb-8">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <GhostButton onClick={onClearFilters}>
        Clear filters
      </GhostButton>
    </div>
  );
};
