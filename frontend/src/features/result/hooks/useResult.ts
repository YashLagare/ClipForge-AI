import { useCallback, useEffect, useMemo, useState } from 'react';
import { dummyGenerations } from '../../../assets/assets';
import type { MediaItem, ResultProject, ResultStats } from '../types';

/**
 * Custom hook for fetching and managing result project data
 * Handles: data fetching, video generation, sharing, clipboard operations
 */
export const useResult = (projectId: string | undefined) => {
  const [project, setProject] = useState<ResultProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Fetch project data
  const fetchProject = useCallback(async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const foundProject = dummyGenerations.find(p => p.id === projectId) || dummyGenerations[0];
      
      const stats: ResultStats = {
        likes: Math.floor(Math.random() * 500) + 50,
        views: Math.floor(Math.random() * 5000) + 1000,
        shares: Math.floor(Math.random() * 200) + 10,
        engagement: Math.floor(Math.random() * 30) + 70,
      };

      const resultProject: ResultProject = {
        ...foundProject,
        ...stats,
        aiInsights: [
          'High contrast ratio improves visibility',
          'Optimal text-to-image ratio',
          'Strong emotional appeal detected',
          'Platform-optimized format',
          'High predicted engagement score',
        ],
        performance: {
          score: 87,
          category: 'Excellent',
          recommendations: [
            'Add call-to-action overlay',
            'Shorten video to under 15s',
            'Increase text size by 10%',
          ],
        },
      };

      setProject(resultProject);
    } catch (error) {
      console.error('Error fetching project:', error);
      setProject(null);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  // Generate video from image
  const generateVideo = useCallback(async () => {
    if (!project) return;

    setIsGenerating(true);
    try {
      // Simulate video generation delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Update project with new video
      setProject(prev => prev ? {
        ...prev,
        generatedVideo: 'https://example.com/new-video.mp4',
      } : null);
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [project]);

  // Copy URL to clipboard
  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  }, []);

  // Share using Web Share API
  const shareProject = useCallback(async () => {
    if (!project || !navigator.share) return;

    try {
      await navigator.share({
        title: project.productName,
        text: project.productDescription,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }, [project]);

  // Compute media items (memoized)
  const mediaItems = useMemo<MediaItem[]>(() => {
    if (!project) return [];

    const items: MediaItem[] = [];

    if (project.generatedImage) {
      items.push({
        type: 'image',
        url: project.generatedImage,
        label: 'Static Ad',
      });
    }

    if (project.generatedVideo) {
      items.push({
        type: 'video',
        url: project.generatedVideo,
        label: 'Video Ad',
      });
    }

    if (project.uploadedImages && project.uploadedImages.length > 0) {
      project.uploadedImages.forEach((img, i) => {
        items.push({
          type: 'source',
          url: img,
          label: `Source ${i + 1}`,
        });
      });
    }

    return items;
  }, [project?.generatedImage, project?.generatedVideo, project?.uploadedImages]);

  // Fetch on mount or when projectId changes
  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId, fetchProject]);

  return {
    project,
    loading,
    isGenerating,
    copied,
    mediaItems,
    generateVideo,
    copyToClipboard,
    shareProject,
  };
};
