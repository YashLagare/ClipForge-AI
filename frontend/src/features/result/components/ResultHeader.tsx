import { motion } from 'framer-motion';
import { Check, Link2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ResultProject } from '../types';

interface ResultHeaderProps {
  project: ResultProject | null;
  copied: boolean;
  onCopyToClipboard: () => void;
}

/**
 * Header section with breadcrumb, title, date, and action buttons
 */
export const ResultHeader = ({
  project,
  copied,
  onCopyToClipboard,
}: ResultHeaderProps) => {
  if (!project) return null;

  const createdDate = new Date(project.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Breadcrumb */}
      {/* <div className="flex items-center gap-2 text-sm text-white/60">
        <Link to="/my-generation" className="hover:text-white/80 transition-colors">
          My Generations
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-white">Result</span>
      </div> */}

      {/* Title and Meta */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {project.name}
        </h1>
        <p className="text-white/60">
          Created on {createdDate}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <Link
          to="/generate"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/50"
        >
          <Plus className="size-4" />
          New Generation
        </Link>

        <button
          onClick={onCopyToClipboard}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all"
        >
          {copied ? (
            <>
              <Check className="size-4 text-green-400" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Link2 className="size-4" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
