import { CheckCircle, ChevronRight, Copy, LinkIcon, RotateCcw, Share2 } from 'lucide-react';

interface SharePanelProps {
  copied: boolean;
  onShare: () => void;
  onCopyLink: () => void;
}

/**
 * Share panel - handles sharing and remix actions
 */
export const SharePanel = ({
  copied,
  onShare,
  onCopyLink,
}: SharePanelProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Share2 className="size-5 text-green-400" />
        Share & Actions
      </h3>

      <div className="space-y-4">
        <button
          onClick={onShare}
          className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all group"
        >
          <div className="flex items-center gap-3">
            <Share2 className="size-5" />
            <div className="text-left">
              <div className="font-medium">Share to Social</div>
              <div className="text-xs text-gray-400">
                Facebook, Instagram, TikTok
              </div>
            </div>
          </div>
          <ChevronRight className="size-5 opacity-50 group-hover:opacity-100" />
        </button>

        <button
          onClick={onCopyLink}
          className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all group"
        >
          <div className="flex items-center gap-3">
            <LinkIcon className="size-5" />
            <div className="text-left">
              <div className="font-medium">
                {copied ? 'Link Copied!' : 'Copy Link'}
              </div>
              <div className="text-xs text-gray-400">Share with team members</div>
            </div>
          </div>
          {copied ? (
            <CheckCircle className="size-5 text-green-500" />
          ) : (
            <Copy className="size-5 opacity-50 group-hover:opacity-100" />
          )}
        </button>

        <button className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all group">
          <div className="flex items-center gap-3">
            <RotateCcw className="size-5" />
            <div className="text-left">
              <div className="font-medium">Remix This Ad</div>
              <div className="text-xs text-gray-400">Create variations with AI</div>
            </div>
          </div>
          <ChevronRight className="size-5 opacity-50 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
};
