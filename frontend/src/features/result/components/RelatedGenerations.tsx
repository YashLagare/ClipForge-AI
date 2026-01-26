import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyGenerations } from '../../../assets/assets';

/**
 * Related generations grid - shows similar ads
 */
export const RelatedGenerations = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Related Ads</h3>
        <Link
          to="/community"
          className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1 transition-colors"
        >
          View All <ChevronRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyGenerations.slice(0, 4).map((related) => (
          <Link key={related.id} to={`/result/${related.id}`} className="group">
            <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-all">
              {related.generatedImage && (
                <img
                  src={related.generatedImage}
                  alt={related.productName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <div className="mt-3">
              <h4 className="font-medium text-sm truncate text-white">
                {related.productName}
              </h4>
              <p className="text-xs text-gray-400">{related.aspectRatio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
