import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Users } from 'lucide-react';
import { GhostButton, PrimaryButton } from '../Buttons';
import type { CommunityCTAProps } from './types';

export const CommunityCTA = ({ 
  totalProjects,
  displayedCount,
  onLoadMore,
}: CommunityCTAProps) => {
  return (
    <>
      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <PrimaryButton className="px-8 py-3" onClick={onLoadMore}>
          <Sparkles className="size-4 mr-2" />
          Load More Ads
        </PrimaryButton>
        <p className="text-sm text-gray-400 mt-4">
          Showing {displayedCount} of {totalProjects} amazing ads
        </p>
      </motion.div>

      {/* Community CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Users className="size-4" />
            <span className="text-sm font-medium">Join Our Community</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to showcase your AI ads?
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Generate amazing ads with ClipForge AI and share them with thousands of creators. 
            Get feedback, inspire others, and grow your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton className="px-8 py-3">
              <Sparkles className="size-4 mr-2" />
              Create Your First Ad
            </PrimaryButton>
            <GhostButton className="px-8 py-3 border-white/20">
              <MessageCircle className="size-4 mr-2" />
              Join Discord Community
            </GhostButton>
          </div>
        </div>
      </motion.div>
    </>
  );
};
