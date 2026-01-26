import { useState } from 'react';
import {
  AIInstructionsCard,
  GenerateHeader,
  PlatformFormatCard,
  ProjectDetailsCard,
  StickyGenerateBar,
  UploadSection,
  type GenerateFormState,
} from '../components/generate';

const promptSuggestions = [
  "Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience",
  "Minimal and clean aesthetic with soft lighting, subtle animations, and professional typography",
  "Bold and energetic style with neon colors, fast cuts, and dramatic text reveals",
  "Luxury and elegant atmosphere with gold accents, smooth transitions, and classical music",
  "Fun and playful mood with cartoon elements, bouncy animations, and cheerful sound effects"
];

const Generate = () => {
  // Form state - single typed object
  const [formState, setFormState] = useState<GenerateFormState>({
    projectName: '',
    productName: '',
    productDescription: '',
    aspectRatio: '9:16',
    productImage: null,
    modelImage: null,
    prompt: '',
    style: '',
  });

  // UI state - separate from form data
  const [isGenerating, setIsGenerating] = useState(false);

  // Handlers for form state updates
  const updateFormState = <K extends keyof GenerateFormState>(
    key: K,
    value: GenerateFormState[K]
  ) => {
    setFormState(prev => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'product' | 'model'
  ) => {
    if (e.target.files && e.target.files[0]) {
      const fileKey = type === 'product' ? 'productImage' : 'modelImage';
      updateFormState(fileKey, e.target.files[0]);
    }
  };

  const handleProductImageClear = () => updateFormState('productImage', null);
  const handleModelImageClear = () => updateFormState('modelImage', null);

  const handleProjectNameChange = (value: string) =>
    updateFormState('projectName', value);

  const handleProductNameChange = (value: string) =>
    updateFormState('productName', value);

  const handleProductDescriptionChange = (value: string) =>
    updateFormState('productDescription', value);

  const handleAspectRatioChange = (ratio: '9:16' | '16:9') =>
    updateFormState('aspectRatio', ratio);

  const handlePromptChange = (value: string) =>
    updateFormState('prompt', value);

  const handleStyleSelect = (styleName: string) => {
    updateFormState('style', styleName);
    // Style selection does not mutate prompt - kept separate
    // Composition happens at submission time if needed
  };

  const getRandomPrompt = () => {
    return promptSuggestions[
      Math.floor(Math.random() * promptSuggestions.length)
    ];
  };

  const handleRandomPrompt = () => {
    updateFormState('prompt', getRandomPrompt());
  };

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      // In production, compose prompt with style and redirect to results
      const finalPrompt = formState.style
        ? `${formState.prompt} ${formState.style.toLowerCase()} style`
        : formState.prompt;
      console.log('Generated with:', {
        ...formState,
        composedPrompt: finalPrompt,
      });
    }, 3000);
  };

  // Validation: product image is required
  const isFormValid = !!formState.productImage && !!formState.projectName && !!formState.productName;


  return (
    <div className="min-h-screen text-white p-4 md:p-6 lg:p-12 mt-20 md:mt-24">
      <form onSubmit={handleGenerate} className="max-w-6xl mx-auto mb-24 md:mb-32">
        {/* Page Header */}
        <GenerateHeader isLoading={isGenerating} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column: Upload Zones & AI Features */}
          <UploadSection
            productImage={formState.productImage}
            modelImage={formState.modelImage}
            onProductImageChange={(e) => handleFileChange(e, 'product')}
            onProductImageClear={handleProductImageClear}
            onModelImageChange={(e) => handleFileChange(e, 'model')}
            onModelImageClear={handleModelImageClear}
          />

          {/* Right Column: Project Details, Format, AI Instructions */}
          <div className="space-y-6 md:space-y-8">
            <ProjectDetailsCard
              projectName={formState.projectName}
              productName={formState.productName}
              productDescription={formState.productDescription}
              onProjectNameChange={handleProjectNameChange}
              onProductNameChange={handleProductNameChange}
              onProductDescriptionChange={handleProductDescriptionChange}
              isDisabled={isGenerating}
            />

            <PlatformFormatCard
              aspectRatio={formState.aspectRatio}
              onAspectRatioChange={handleAspectRatioChange}
              isDisabled={isGenerating}
            />

            <AIInstructionsCard
              prompt={formState.prompt}
              style={formState.style}
              onPromptChange={handlePromptChange}
              onStyleSelect={handleStyleSelect}
              onRandomPrompt={handleRandomPrompt}
              isDisabled={isGenerating}
            />
          </div>
        </div>

        {/* Sticky Generate Button Bar */}
        <StickyGenerateBar
          isGenerating={isGenerating}
          isDisabled={!isFormValid}
          creditsRemaining={85}
          estimatedCost={5}
        />
      </form>
    </div>
  );
};

export default Generate;