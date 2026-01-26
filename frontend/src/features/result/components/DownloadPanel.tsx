import { Download, ImageIcon, Loader2Icon, Sparkles as SparklesIcon, VideoIcon } from 'lucide-react';
import { PrimaryButton } from '../../../components/Buttons';
import type { ResultProject } from '../types';

interface DownloadPanelProps {
  project: ResultProject;
  isGenerating: boolean;
  onGenerateVideo: () => void;
}

/**
 * Download panel - handles image/video downloads and video generation
 */
export const DownloadPanel = ({
  project,
  isGenerating,
  onGenerateVideo,
}: DownloadPanelProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Download className="size-5 text-indigo-400" />
        Download Options
      </h3>

      <div className="space-y-4">
        {project.generatedImage && (
          <a href={project.generatedImage} download className="block">
            <PrimaryButton className="w-full justify-center py-4">
              <ImageIcon className="size-5 mr-2" />
              Download Image
              <span className="text-xs opacity-80 ml-2">(1080p)</span>
            </PrimaryButton>
          </a>
        )}

        {project.generatedVideo ? (
          <a href={project.generatedVideo} download className="block">
            <PrimaryButton className="w-full justify-center py-4 bg-gradient-to-r from-purple-600 to-pink-600">
              <VideoIcon className="size-5 mr-2" />
              Download Video
              <span className="text-xs opacity-80 ml-2">(4K)</span>
            </PrimaryButton>
          </a>
        ) : (
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-5 border border-purple-500/20">
            <div className="text-center">
              <VideoIcon className="size-10 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Generate Video</h4>
              <p className="text-sm text-gray-400 mb-4">
                Transform your image into an engaging video ad
              </p>
              <PrimaryButton
                onClick={onGenerateVideo}
                disabled={isGenerating}
                className="w-full justify-center py-3 bg-gradient-to-r from-purple-600 to-pink-600"
              >
                {isGenerating ? (
                  <>
                    <Loader2Icon className="size-5 mr-2 animate-spin" />
                    Generating Video...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="size-5 mr-2" />
                    Generate Video
                    <span className="text-xs opacity-80 ml-2">(10 credits)</span>
                  </>
                )}
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>

      {/* Format Options */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-400 mb-3">
          Export Formats
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {['MP4', 'MOV', 'GIF', 'PNG', 'JPG', 'WebP'].map((format) => (
            <div
              key={format}
              className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="text-xs font-medium">{format}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
