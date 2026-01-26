import { Layers, Star } from 'lucide-react';

interface QuickStatsCardProps {
  hasVideo: boolean;
}

/**
 * Quick stats card on right sidebar
 */
export const QuickStatsCard = ({ hasVideo }: QuickStatsCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Layers className="size-5 text-blue-400" />
        Quick Stats
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
          <div className="text-sm">Status</div>
          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
            Ready
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
          <div className="text-sm">Quality</div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="size-4 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
          <div className="text-sm">File Size</div>
          <div className="text-sm">
            {(hasVideo ? 15.2 : 3.8).toFixed(1)} MB
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
          <div className="text-sm">Credits Used</div>
          <div className="text-sm font-medium text-indigo-400">
            {hasVideo ? '15' : '5'} credits
          </div>
        </div>
      </div>
    </div>
  );
};
