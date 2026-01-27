/**
 * Type definitions for the Generate page components
 * Ensures strong typing across all generate-related components
 */

export type AspectRatio = '9:16' | '16:9';

export interface GenerateFormState {
  projectName: string;
  productName: string;
  productDescription: string;
  aspectRatio: AspectRatio;
  productImage: File | null;
  modelImage: File | null;
  prompt: string;
  style: string;
}

export interface GenerateHeaderProps {
  isLoading?: boolean;
}

export interface UploadSectionProps {
  productImage: File | null;
  modelImage: File | null;
  onProductImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProductImageClear: () => void;
  onModelImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onModelImageClear: () => void;
}

export interface ProjectDetailsCardProps {
  projectName: string;
  productName: string;
  productDescription: string;
  onProjectNameChange: (value: string) => void;
  onProductNameChange: (value: string) => void;
  onProductDescriptionChange: (value: string) => void;
  isDisabled?: boolean;
}

export interface PlatformFormatCardProps {
  aspectRatio: AspectRatio;
  onAspectRatioChange: (ratio: AspectRatio) => void;
  isDisabled?: boolean;
}

export interface AIInstructionsCardProps {
  prompt: string;
  style: string;
  onPromptChange: (value: string) => void;
  onStyleSelect: (style: string) => void;
  onRandomPrompt: () => void;
  isDisabled?: boolean;
}

export interface StickyGenerateBarProps {
  isGenerating: boolean;
  isDisabled: boolean;
  creditsRemaining: number;
  estimatedCost?: number;
}

export interface AIFeature {
  icon: React.ReactNode;
  label: string;
  desc: string;
}

export interface StyleOption {
  name: string;
  color: string;
}

// Update the StyleOption interface if you want to include icons
export interface StyleOption {
  name: string;
  color: string;
  icon?: string; // Optional, if you want to keep backward compatibility
}

export interface AIInstructionsCardProps {
  prompt: string;
  style: string;
  onPromptChange: (value: string) => void;
  onStyleSelect: (style: string) => void;
  onRandomPrompt: () => void;
  isDisabled?: boolean;
  isInspireCooldown?: boolean;  // Add this
  cooldownSeconds?: number;     // Add this
}