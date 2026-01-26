import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, Sparkles as SparklesIcon } from 'lucide-react';
import type { ResultProject } from '../types';

interface ResultAnalyticsProps {
  project: ResultProject;
}

/**
 * Analytics tab content - displays AI performance analysis and insights
 */
export const ResultAnalytics = ({ project }: ResultAnalyticsProps) => {
  return (
    <motion.div
      key="analytics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Performance Score */}
      <div className="bg-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <BarChart3 className="size-5 text-indigo-400" />
            AI Performance Analysis
          </h3>
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-sm font-medium">
            {project.performance.score}/100
          </div>
        </div>

        {/* AI Insights */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-400">AI Insights</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {project.aiInsights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
              >
                <CheckCircle className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3">
            AI Recommendations
          </h4>
          <div className="space-y-3">
            {project.performance.recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20"
              >
                <SparklesIcon className="size-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
