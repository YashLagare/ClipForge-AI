import { motion } from 'framer-motion';
import { Clock, Sparkles as SparklesIcon, Zap } from 'lucide-react';
import type { ResultProject } from '../types';

interface ResultDetailsProps {
  project: ResultProject;
}

/**
 * Details tab content - displays project information and AI configuration
 */
export const ResultDetails = ({ project }: ResultDetailsProps) => {
  return (
    <motion.div
      key="details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Project Info */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="size-5 text-indigo-400" />
          Project Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Details */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">
              Basic Details
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Project Name</div>
                <div className="text-sm">{project.name || project.productName}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Product Name</div>
                <div className="text-sm">{project.productName}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Created</div>
                <div className="text-sm">
                  {new Date(project.createdAt).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Aspect Ratio</div>
                <div className="text-sm flex items-center gap-2">
                  {project.aspectRatio}
                  <span className="px-2 py-1 text-xs rounded-full bg-white/5">
                    {project.aspectRatio === '9:16' ? 'Vertical' : 'Horizontal'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Configuration */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">
              AI Configuration
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Model Used</div>
                <div className="text-sm flex items-center gap-2">
                  <SparklesIcon className="size-4 text-indigo-400" />
                  ClipForge Pro AI v2.5
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Processing Time</div>
                <div className="text-sm flex items-center gap-2">
                  <Clock className="size-4 text-blue-400" />
                  23 seconds
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Credits Used</div>
                <div className="text-sm flex items-center gap-2">
                  <div className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300">
                    5 credits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        {project.productDescription && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-400 mb-2">
              Product Description
            </h4>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-sm">{project.productDescription}</p>
            </div>
          </div>
        )}

        {/* User Prompt */}
        {project.userPrompt && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-400 mb-2">
              AI Instructions
            </h4>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-sm italic">{project.userPrompt}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
