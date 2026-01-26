import {
    Eye,
    Flame,
    Heart,
    Image as ImageIcon,
    MessageCircle,
    Play,
    Share2,
    Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ProjectCardProps } from './types';

export const ProjectCard = ({
  project,
  isHovered,
  onHover,
  onHoverEnd,
  onLike,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  const projectStats = project as any;
  const isFeatured = projectStats.isFeatured;
  const isTrending = projectStats.isTrending;
  const likes = projectStats.likes || 0;
  const views = projectStats.views || 0;
  const comments = projectStats.comments || 0;
  const liked = projectStats.liked || false;

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      {/* Featured/Trending Badges & Media Type Indicator */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-start justify-between gap-2">
        {/* Left: Featured/Trending Badge */}
        <div>
          {isFeatured && (
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-medium flex items-center gap-1">
              <Star className="size-3" />
              Featured
            </div>
          )}
          
          {!isFeatured && isTrending && (
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs font-medium flex items-center gap-1">
              <Flame className="size-3" />
              Trending
            </div>
          )}
        </div>

        {/* Right: Media Type Indicator */}
        <div className="flex items-center gap-2">
          {project.generatedVideo ? (
            <div className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs flex items-center gap-1">
              <Play className="size-3" />
              Video
            </div>
          ) : (
            <div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs flex items-center gap-1">
              <ImageIcon className="size-3" />
              Image
            </div>
          )}
        </div>
      </div>

      {/* Project Preview with Video/Image Hover Logic */}
      <div className={`relative ${project?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} overflow-hidden`}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* Image */}
        {project.generatedImage && (
          <img 
            src={project.generatedImage} 
            alt={project.productName}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              project.generatedVideo && isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        {/* Video - plays on hover */}
        {project.generatedVideo && isHovered && (
          <video 
            src={project.generatedVideo}
            muted
            loop
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}

        {/* Play Indicator for Videos */}
        {project.generatedVideo && (
          <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="size-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="size-6 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onLike();
                }}
                className="flex items-center gap-1.5 text-sm hover:text-red-400 transition-colors"
              >
                <Heart className={`size-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{likes}</span>
              </button>
              <div className="flex items-center gap-1.5 text-sm">
                <Eye className="size-4 text-blue-400" />
                <span>{views}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <MessageCircle className="size-4 text-green-400" />
                <span>{comments}</span>
              </div>
            </div>
            <div className="text-xs px-2 py-1 rounded-full bg-white/10">
              {project.aspectRatio}
            </div>
          </div>
        </div>

        {/* Quick Actions on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <div className="flex items-center gap-3">
            <button className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-indigo-500/50 transition-all hover:scale-110">
              <Share2 className="size-5" />
            </button>
            <button className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-green-500/50 transition-all hover:scale-110">
              <MessageCircle className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1 hover:text-indigo-300 transition-colors cursor-pointer">
              {project.productName}
            </h3>
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xs">
                {project.user?.name?.charAt(0) || 'C'}
              </div>
              <p className="text-sm text-gray-400">
                @{project.user?.name?.toLowerCase().replace(/\s+/g, '') || 'creator'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="size-4 fill-current" />
            <span className="text-sm">4.8</span>
          </div>
        </div>

        {/* Description */}
        {project.productDescription && (
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
            {project.productDescription}
          </p>
        )}

        {/* Tags from prompt */}
        {project.userPrompt && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.userPrompt.split(' ').slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer with CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400">
            {new Date(project.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </div>
          <button
            onClick={() => {
              navigate(`/result/${project.id}`);
              scrollTo(0, 0);
            }}
            className="text-sm py-1.5 px-4 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
