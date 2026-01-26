/**
 * Barrel export for all Generate components
 * Provides a clean import interface: import { GenerateHeader, UploadSection } from '@/components/generate'
 */

export { AIInstructionsCard } from './AIInstructionsCard';
export { GenerateHeader } from './GenerateHeader';
export { PlatformFormatCard } from './PlatformFormatCard';
export { ProjectDetailsCard } from './ProjectDetailsCard';
export { StickyGenerateBar } from './StickyGenerateBar';
export { UploadSection } from './UploadSection';

export type {
    AIFeature, AIInstructionsCardProps, AspectRatio,
    GenerateFormState,
    GenerateHeaderProps, PlatformFormatCardProps, ProjectDetailsCardProps, StickyGenerateBarProps, StyleOption, UploadSectionProps
} from './types';

