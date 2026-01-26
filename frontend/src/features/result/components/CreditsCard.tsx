import { Sparkles as SparklesIcon } from 'lucide-react';
import { GhostButton } from '../../../components/Buttons';

/**
 * AI Credits card on right sidebar
 */
export const CreditsCard = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-3xl p-6 border border-indigo-500/20">
      <div className="text-center">
        <SparklesIcon className="size-10 text-indigo-400 mx-auto mb-3" />
        <h4 className="font-semibold mb-2">AI Credits</h4>
        <div className="text-3xl font-bold mb-1">85</div>
        <p className="text-sm text-gray-300 mb-4">credits remaining</p>
        <GhostButton className="w-full justify-center">
          Get More Credits
        </GhostButton>
      </div>
    </div>
  );
};
