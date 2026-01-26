import { BarChart3, Eye, Heart, Share2 } from 'lucide-react';
import type { ResultStats } from '../types';

interface QuickStatsProps {
  stats: ResultStats;
}

/**
 * Quick stats display - shows likes, views, shares, engagement
 */
export const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <Heart className="size-5 text-red-400 mx-auto mb-2" />
        <div className="text-2xl font-bold">{stats.likes}</div>
        <div className="text-xs text-gray-400">Likes</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <Eye className="size-5 text-blue-400 mx-auto mb-2" />
        <div className="text-2xl font-bold">{stats.views.toLocaleString()}</div>
        <div className="text-xs text-gray-400">Views</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <Share2 className="size-5 text-green-400 mx-auto mb-2" />
        <div className="text-2xl font-bold">{stats.shares}</div>
        <div className="text-xs text-gray-400">Shares</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <BarChart3 className="size-5 text-yellow-400 mx-auto mb-2" />
        <div className="text-2xl font-bold">{stats.engagement}%</div>
        <div className="text-xs text-gray-400">Engagement</div>
      </div>
    </div>
  );
};
