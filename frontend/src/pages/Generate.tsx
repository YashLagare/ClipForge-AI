// import { useState } from 'react';
// import {
//   AIInstructionsCard,
//   GenerateHeader,
//   PlatformFormatCard,
//   ProjectDetailsCard,
//   StickyGenerateBar,
//   UploadSection,
//   type GenerateFormState,
// } from '../components/generate';

// const promptLibrary = {
//   shortForm: [
//     "Create a scroll-stopping short video ad that highlights the main benefit in the first 3 seconds.",
//     "Design a fast-paced vertical ad with bold captions and engaging transitions optimized for mobile.",
//     "Make a snackable 15-30 second ad with quick cuts, on-screen text, and trending audio.",
//     "Create a UGC-style authentic ad with real-life usage shots and genuine testimonials.",
//   ],
//   longForm: [
//     "Create a detailed product showcase video with smooth transitions and clear messaging.",
//     "Design a storytelling ad explaining the problem, solution, and final result.",
//     "Produce an educational tutorial-style ad demonstrating step-by-step usage.",
//     "Create a comparison ad showing advantages over competitors with clear visual evidence.",
//   ],
//   styles: {
//     'Minimal & Clean': "Use a minimal and clean aesthetic with subtle animations, modern typography, and generous whitespace. Focus on essential elements with clean lines and muted color palette.",
//     'Bold & Energetic': "Use bold colors, high-contrast visuals, energetic pacing, and high-impact text animations. Incorporate dynamic camera movements and vibrant sound effects.",
//     'Luxury & Elegant': "Create a premium ad with elegant visuals, soft lighting, cinematic motion, and sophisticated transitions. Use gold accents, slow-motion shots, and classical or ambient music.",
//     'Fun & Playful': "Create a fun and playful ad with lively animations, cheerful tone, cartoon elements, and bouncy motion graphics. Use bright colors and upbeat music.",
//     'Modern & Techy': "Use futuristic UI elements, glitch effects, cyberpunk aesthetics, and tech-inspired animations. Incorporate data visualization and holographic effects.",
//     'Natural & Organic': "Use earthy tones, natural textures, soft lighting, and gentle animations. Incorporate organic shapes and calming nature sounds.",
//     'Retro & Vintage': "Use vintage filters, film grain, retro typography, and nostalgic color grading. Incorporate analog-style animations and lo-fi music.",
//     'Dark & Moody': "Use dark color schemes, dramatic lighting, suspenseful pacing, and mysterious ambiance. Incorporate shadow play and atmospheric sound design.",
//   },
//   audiences: {
//     'Gen Z': "optimized for Gen Z with trendy references, meme culture, and social media slang",
//     'Millennials': "tailored for millennials with nostalgic elements, authenticity focus, and value-driven messaging",
//     'Professionals': "designed for professionals with clean presentation, data-backed claims, and professional tone",
//     'Families': "focused on family appeal with heartwarming moments, safety emphasis, and practical benefits",
//   }
// };

// const Generate = () => {
//   // Form state - single typed object
//   const [formState, setFormState] = useState<GenerateFormState>({
//     projectName: '',
//     productName: '',
//     productDescription: '',
//     aspectRatio: '9:16',
//     productImage: null,
//     modelImage: null,
//     prompt: '',
//     style: '',
//   });

//   const getSmartPrompt = (selectedStyle?: string) => {
//     // Use provided style or current form state style
//     const currentStyle = selectedStyle || formState.style;

//     // 1. Base prompt from aspect ratio
//     const basePrompt =
//       formState.aspectRatio === '9:16'
//         ? promptLibrary.shortForm[
//         Math.floor(Math.random() * promptLibrary.shortForm.length)
//         ]
//         : promptLibrary.longForm[
//         Math.floor(Math.random() * promptLibrary.longForm.length)
//         ];

//     // 2. Style-aware enhancement (use exact style name from promptLibrary.styles)
//     const stylePrompt = currentStyle && currentStyle in promptLibrary.styles
//       ? promptLibrary.styles[currentStyle as keyof typeof promptLibrary.styles]
//       : "";

//     // 3. Product-aware context
//     const productContext = formState.productName
//       ? `Focus on product: "${formState.productName}".`
//       : "";

//     // 4. Description enhancement
//     const descriptionContext = formState.productDescription
//       ? `Highlight these features: ${formState.productDescription.slice(0, 150)}.`
//       : "";

//     // 5. Optional: Add audience context based on keywords in description
//     let audienceContext = "";
//     if (formState.productDescription) {
//       const desc = formState.productDescription.toLowerCase();
//       if (desc.includes('teen') || desc.includes('gen z') || desc.includes('social') || desc.includes('trend')) {
//         audienceContext = promptLibrary.audiences['Gen Z'];
//       } else if (desc.includes('family') || desc.includes('kids') || desc.includes('home') || desc.includes('parents')) {
//         audienceContext = promptLibrary.audiences['Families'];
//       } else if (desc.includes('pro') || desc.includes('business') || desc.includes('work') || desc.includes('office')) {
//         audienceContext = promptLibrary.audiences['Professionals'];
//       } else if (desc.includes('millennial') || desc.includes('90s') || desc.includes('nostalgic')) {
//         audienceContext = promptLibrary.audiences['Millennials'];
//       }
//     }

//     // Combine all parts intelligently
//     const promptParts = [
//       basePrompt,
//       stylePrompt,
//       productContext,
//       descriptionContext,
//       audienceContext
//     ].filter(Boolean);

//     return promptParts.join(" ");
//   };

//   // UI state - separate from form data
//   const [isGenerating, setIsGenerating] = useState(false);

//   // Handlers for form state updates
//   const updateFormState = <K extends keyof GenerateFormState>(
//     key: K,
//     value: GenerateFormState[K]
//   ) => {
//     setFormState(prev => ({ ...prev, [key]: value }));
//   };

//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: 'product' | 'model'
//   ) => {
//     if (e.target.files && e.target.files[0]) {
//       const fileKey = type === 'product' ? 'productImage' : 'modelImage';
//       updateFormState(fileKey, e.target.files[0]);
//     }
//   };

//   const handleProductImageClear = () => updateFormState('productImage', null);
//   const handleModelImageClear = () => updateFormState('modelImage', null);

//   const handleProjectNameChange = (value: string) =>
//     updateFormState('projectName', value);

//   const handleProductNameChange = (value: string) =>
//     updateFormState('productName', value);

//   const handleProductDescriptionChange = (value: string) =>
//     updateFormState('productDescription', value);

//   const handleAspectRatioChange = (ratio: '9:16' | '16:9') =>
//     updateFormState('aspectRatio', ratio);

//   const handlePromptChange = (value: string) =>
//     updateFormState('prompt', value);

//   const handleRandomPrompt = () => {
//     // Get smart prompt that considers the current style
//     const smartPrompt = getSmartPrompt();

//     // If there's already a prompt, enhance it with the new smart prompt
//     // Otherwise, use the smart prompt directly
//     if (formState.prompt) {
//       // Check if current prompt already has style content
//       const hasStyle = Object.keys(promptLibrary.styles).some(styleName =>
//         formState.prompt.toLowerCase().includes(styleName.toLowerCase().split('&')[0].trim())
//       );

//       if (hasStyle && formState.style) {
//         // Replace existing content with enhanced prompt
//         updateFormState('prompt', smartPrompt);
//       } else {
//         // Add enhancement to existing prompt
//         updateFormState('prompt', `${formState.prompt}\n\nStyle Enhancement: ${smartPrompt}`);
//       }
//     } else {
//       // No existing prompt, use the smart prompt
//       updateFormState('prompt', smartPrompt);
//     }
//   };

//   const handleStyleSelect = (styleName: string) => {
//     updateFormState('style', styleName);
//   };

//   const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     // Simulate AI generation
//     setTimeout(() => {
//       setIsGenerating(false);
//       // In production, compose prompt with style and redirect to results
//       const finalPrompt = formState.style
//         ? `${formState.prompt} ${formState.style.toLowerCase()} style`
//         : formState.prompt;
//       console.log('Generated with:', {
//         ...formState,
//         composedPrompt: finalPrompt,
//       });
//     }, 3000);
//   };

//   // Validation: product image is required
//   const isFormValid = !!formState.productImage && !!formState.projectName && !!formState.productName;

//   return (
//     <div className="min-h-screen text-white p-4 md:p-6 lg:p-12 mt-20 md:mt-24">
//       <form onSubmit={handleGenerate} className="max-w-6xl mx-auto mb-24 md:mb-32">
//         {/* Page Header */}
//         <GenerateHeader isLoading={isGenerating} />

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
//           {/* Left Column: Upload Zones & AI Features */}
//           <UploadSection
//             productImage={formState.productImage}
//             modelImage={formState.modelImage}
//             onProductImageChange={(e) => handleFileChange(e, 'product')}
//             onProductImageClear={handleProductImageClear}
//             onModelImageChange={(e) => handleFileChange(e, 'model')}
//             onModelImageClear={handleModelImageClear}
//           />

//           {/* Right Column: Project Details, Format, AI Instructions */}
//           <div className="space-y-6 md:space-y-8">
//             <ProjectDetailsCard
//               projectName={formState.projectName}
//               productName={formState.productName}
//               productDescription={formState.productDescription}
//               onProjectNameChange={handleProjectNameChange}
//               onProductNameChange={handleProductNameChange}
//               onProductDescriptionChange={handleProductDescriptionChange}
//               isDisabled={isGenerating}
//             />

//             <PlatformFormatCard
//               aspectRatio={formState.aspectRatio}
//               onAspectRatioChange={handleAspectRatioChange}
//               isDisabled={isGenerating}
//             />

//             <AIInstructionsCard
//               prompt={formState.prompt}
//               style={formState.style}
//               onPromptChange={handlePromptChange}
//               onStyleSelect={handleStyleSelect}
//               onRandomPrompt={handleRandomPrompt}
//               isDisabled={isGenerating}
//             />
//           </div>
//         </div>

//         {/* Sticky Generate Button Bar */}
//         <StickyGenerateBar
//           isGenerating={isGenerating}
//           isDisabled={!isFormValid}
//           creditsRemaining={85}
//           estimatedCost={5}
//         />
//       </form>
//     </div>
//   );
// };

// export default Generate;


import { useState } from 'react';
import {
  AIInstructionsCard,
  GenerateHeader,
  PlatformFormatCard,
  ProjectDetailsCard,
  StickyGenerateBar,
  UploadSection,
  type AspectRatio,
  type GenerateFormState,
} from '../components/generate';

const promptLibrary = {
  shortForm: [
    "Create a scroll-stopping short video ad that highlights the main benefit in the first 3 seconds.",
    "Design a fast-paced vertical ad with bold captions and engaging transitions optimized for mobile.",
    "Make a snackable 15-30 second ad with quick cuts, on-screen text, and trending audio.",
    "Create a UGC-style authentic ad with real-life usage shots and genuine testimonials.",
    "Produce a before/after reveal ad showing dramatic transformation in under 30 seconds.",
    "Create a countdown urgency ad with ticking clock visuals and limited-time offer callouts.",
    "Design a meme-style ad using popular internet humor formats and relatable situations.",
    "Make a ASMR-inspired ad with satisfying sounds, close-up shots, and whisper voiceover.",
    "Create a challenge-based ad showing users completing fun tasks with your product.",
    "Design a split-screen comparison showing your product vs. competitor in real-time.",
    "Produce a day-in-the-life ad showing seamless product integration into daily routines.",
    "Create a hype-building ad using suspenseful reveals and cliffhanger endings.",
  ],
  longForm: [
    "Create a detailed product showcase video with smooth transitions and clear messaging.",
    "Design a storytelling ad explaining the problem, solution, and final result.",
    "Produce an educational tutorial-style ad demonstrating step-by-step usage.",
    "Create a comparison ad showing advantages over competitors with clear visual evidence.",
    "Make a documentary-style ad featuring founder interviews and brand origin story.",
    "Design a case study video showing customer success stories with measurable results.",
    "Create a behind-the-scenes look at product manufacturing with quality assurance focus.",
    "Produce a thought leadership piece explaining industry trends and your product's role.",
    "Make a seasonal campaign video with thematic storytelling and emotional resonance.",
    "Create a brand manifesto video explaining core values and mission statement.",
    "Design a FAQ-style video answering common customer questions with visual demonstrations.",
    "Produce a whiteboard explainer video with hand-drawn animations and clear narration.",
  ],
  styles: {
    'Minimal & Clean': [
      "Use a minimal and clean aesthetic with subtle animations, modern typography, and generous whitespace. Focus on essential elements with clean lines and muted color palette.",
      "Create an elegant, understated ad with monochromatic color scheme, ample negative space, and sophisticated sans-serif typography. Keep transitions smooth and movements deliberate.",
      "Design a Japanese-inspired wabi-sabi aesthetic with natural imperfections, organic shapes, and tranquil pacing. Focus on simplicity and authenticity.",
      "Use Scandinavian minimalism with light wood textures, pastel backgrounds, and functional design focus. Keep UI elements simple and intuitive.",
      "Create a brutalist minimalist ad with raw textures, geometric shapes, and honest material representation. Use limited color palette and straightforward typography.",
    ],
    'Bold & Energetic': [
      "Use bold colors, high-contrast visuals, energetic pacing, and high-impact text animations. Incorporate dynamic camera movements and vibrant sound effects.",
      "Create a neon-drenched cyberpunk aesthetic with glitch effects, synthwave soundtrack, and futuristic UI elements. Use rapid cuts and data visualization overlays.",
      "Design a comic book-inspired ad with speech bubbles, pow! effect graphics, and vibrant primary colors. Use panel transitions and exaggerated expressions.",
      "Use street art aesthetics with spray paint textures, stencil typography, and urban background elements. Incorporate graffiti animations and hip-hop soundtrack.",
      "Create a sports energy drink-style ad with extreme sports footage, adrenaline-pumping music, and countdown timers. Use slo-mo to fast-motion transitions.",
    ],
    'Luxury & Elegant': [
      "Create a premium ad with elegant visuals, soft lighting, cinematic motion, and sophisticated transitions. Use gold accents, slow-motion shots, and classical or ambient music.",
      "Design a haute couture fashion ad with velvet textures, marble backgrounds, and crystal clear product shots. Use slow, deliberate camera movements and orchestral score.",
      "Use art deco aesthetics with geometric patterns, gold leaf accents, and symmetrical compositions. Incorporate jazz age soundtrack and vintage film grain.",
      "Create a five-star hotel experience with polished surfaces, champagne bubbles, and butler-style service demonstrations. Use soft focus and elegant fade transitions.",
      "Design a luxury car commercial aesthetic with sweeping landscape shots, precision engineering close-ups, and refined narrator voiceover. Use cinematic aspect ratio.",
    ],
    'Fun & Playful': [
      "Create a fun and playful ad with lively animations, cheerful tone, cartoon elements, and bouncy motion graphics. Use bright colors and upbeat music.",
      "Design a children's TV show aesthetic with hand-drawn animations, whimsical characters, and primary color palette. Incorporate silly sound effects and playful narration.",
      "Use carnival/circus theme with confetti explosions, balloon animals, and calliope music. Create a sense of wonder and excitement throughout.",
      "Create a Saturday morning cartoon vibe with exaggerated physics, comic relief moments, and nostalgic 90s animation style. Use vibrant cel-shaded graphics.",
      "Design a party invitation aesthetic with glitter effects, disco ball reflections, and dance party footage. Use funky bassline and celebration sound effects.",
    ],
    'Modern & Techy': [
      "Use futuristic UI elements, glitch effects, cyberpunk aesthetics, and tech-inspired animations. Incorporate data visualization and holographic effects.",
      "Create a sci-fi interface aesthetic with floating holograms, wireframe models, and augmented reality overlays. Use synthetic voice and electronic soundtrack.",
      "Design a coding/developer theme with syntax highlighting, terminal windows, and binary rain effects. Incorporate loading bars and progress indicators.",
      "Use AI/neural network visualization with node connections, particle flows, and algorithmic patterns. Create a sense of intelligent processing.",
      "Create a smart home ecosystem ad with seamless device integration, voice command visualizations, and IoT connectivity demonstrations.",
    ],
    'Natural & Organic': [
      "Use earthy tones, natural textures, soft lighting, and gentle animations. Incorporate organic shapes and calming nature sounds.",
      "Create a botanical garden aesthetic with plant time-lapses, dew drop close-ups, and natural sunlight filtering. Use wood textures and leaf patterns.",
      "Design a farm-to-table journey showing raw ingredients transforming into finished product. Use handcrafted aesthetics and artisanal techniques.",
      "Use ocean/beach theme with wave patterns, sand textures, and seashell elements. Incorporate calming ocean sounds and sunrise/sunset transitions.",
      "Create a mountain wilderness aesthetic with pine forest backgrounds, wildlife cameos, and fresh air/sunshine emphasis. Use natural color grading.",
    ],
    'Retro & Vintage': [
      "Use vintage filters, film grain, retro typography, and nostalgic color grading. Incorporate analog-style animations and lo-fi music.",
      "Create a 70s disco aesthetic with bell bottoms, lava lamps, and funk soundtrack. Use split-screen effects and psychedelic color transitions.",
      "Design an 80s synthwave ad with VHS tracking errors, neon grid backgrounds, and retro computer graphics. Incorporate arcade game sound effects.",
      "Use 90s grunge aesthetic with distorted video effects, plaid patterns, and alternative rock soundtrack. Create DIY/college radio vibe.",
      "Create a 50s diner theme with chrome accents, jukebox visuals, and sock hop dancing. Use milkshake colors and vintage car footage.",
    ],
    'Dark & Moody': [
      "Use dark color schemes, dramatic lighting, suspenseful pacing, and mysterious ambiance. Incorporate shadow play and atmospheric sound design.",
      "Create a film noir aesthetic with Venetian blind shadows, cigarette smoke wisps, and detective narration. Use high contrast black and white with selective color.",
      "Design a gothic horror theme with candlelight flickers, antique furniture, and thunderstorm ambiance. Incorporate dramatic string orchestra music.",
      "Use dystopian future aesthetic with rain-slicked streets, neon signs reflecting in puddles, and cyberpunk cityscapes. Create Blade Runner-inspired visuals.",
      "Create a mysterious luxury ad with velvet curtains, single spotlight focus, and enigmatic product reveals. Use dramatic piano chords and long shadows.",
    ],
  },
  audiences: {
    'Gen Z': [
      "optimized for Gen Z with trendy references, meme culture, and social media slang",
      "use TikTok-style editing with rapid cuts, on-screen text, and trending audio clips",
      "incorporate popular meme formats, relatable humor, and authentic user-generated content vibes",
      "focus on social justice values, sustainability messaging, and inclusive representation",
      "use Instagram Reels aesthetic with AR filters, duet-style formats, and challenge participation calls",
    ],
    'Millennials': [
      "tailored for millennials with nostalgic elements, authenticity focus, and value-driven messaging",
      "use 90s/early 2000s nostalgia references, authentic behind-the-scenes content, and work-life balance themes",
      "focus on practical benefits, ethical sourcing, and authentic brand storytelling",
      "incorporate DIY culture, home improvement aesthetics, and sustainable living messaging",
      "use podcast-style deep dives, detailed product reviews, and community-focused storytelling",
    ],
    'Professionals': [
      "designed for professionals with clean presentation, data-backed claims, and professional tone",
      "use corporate aesthetic with sleek presentations, infographic data visualization, and executive testimonials",
      "focus on ROI calculations, time-saving benefits, and productivity improvements",
      "incorporate LinkedIn-style professional networking themes and career advancement messaging",
      "use webinar/workshop format with expert interviews, case studies, and actionable takeaways",
    ],
    'Families': [
      "focused on family appeal with heartwarming moments, safety emphasis, and practical benefits",
      "use multigenerational storytelling showing product use across different family members",
      "focus on safety features, ease of use, and durability for family life",
      "incorporate holiday gathering scenes, backyard barbecue aesthetics, and road trip adventures",
      "use educational elements for children, parental control features, and family bonding moments",
    ],
    'Gamers': [
      "targeted at gaming community with esports aesthetics, achievement unlocks, and in-game references",
      "use Twitch streaming overlay style, achievement notification sounds, and gaming UI elements",
      "incorporate loot box reveal animations, leaderboard comparisons, and character customization themes",
      "focus on performance metrics, competitive advantages, and community building features",
      "use speedrun timer aesthetics, combo counter displays, and victory screen celebrations",
    ],
    'Creatives': [
      "designed for artists, designers, and creators with portfolio showcase aesthetics and workflow demonstrations",
      "use Behance/Dribbble-inspired layouts, color palette explorations, and creative process time-lapses",
      "focus on inspiration generation, creative block solutions, and artistic community features",
      "incorporate studio workspace aesthetics, sketchbook flip-throughs, and client testimonial reels",
      "use mood board compositions, creative brief unboxings, and finished project reveals",
    ],
  },
  // New category: Product Types
  productTypes: {
    'Tech Gadgets': [
      "show seamless unboxing experience with satisfying peel-off sounds and protective film removal",
      "demonstrate multi-device connectivity with smooth syncing animations and ecosystem integration",
      "highlight battery life with full-to-empty charging visualizations and power-saving features",
      "showcase premium build quality with material close-ups and durability testing demonstrations",
      "demonstrate intuitive user interface with smooth gesture controls and responsive feedback",
    ],
    'Beauty & Cosmetics': [
      "show transformative before/after results with split-screen comparisons and skin analysis visuals",
      "demonstrate application techniques with brush stroke close-ups and blending motion graphics",
      "highlight ingredient sourcing with botanical animations and scientific formula breakdowns",
      "show skin texture improvements with macro photography and pore minimization visualizations",
      "demonstrate multi-step routines with sequential product applications and regimen benefits",
    ],
    'Fashion & Apparel': [
      "show fabric quality with texture close-ups, drape demonstrations, and material stretch tests",
      "demonstrate versatile styling options with outfit change animations and accessory pairings",
      "highlight sustainable materials with eco-friendly sourcing stories and recycled content percentages",
      "show fit and comfort with movement demonstrations, stretch tests, and real-world wear scenarios",
      "demonstrate seasonal versatility with weather condition adaptations and layer combinations",
    ],
    'Food & Beverage': [
      "show fresh ingredient preparation with chopping close-ups, sizzling sounds, and steam effects",
      "demonstrate recipe simplicity with step-by-step instructions and cooking time indicators",
      "highlight flavor profiles with taste bud animations, ingredient synergy explanations, and pairing suggestions",
      "show freshness indicators with crisp sound effects, condensation visuals, and expiration date guarantees",
      "demonstrate health benefits with nutritional breakdowns, calorie comparisons, and wellness impacts",
    ],
    'Home & Furniture': [
      "show space optimization with room layout transformations and storage solution demonstrations",
      "demonstrate assembly ease with tool-free setup, clear instruction visuals, and time-lapse builds",
      "highlight material durability with weight capacity tests, scratch resistance demos, and longevity guarantees",
      "show style versatility with room setting changes, decor coordination, and aesthetic flexibility",
      "demonstrate smart home integration with app control demonstrations and automation scenarios",
    ],
  },
  // New category: Emotional Appeals
  emotionalAppeals: {
    'Aspirational': "create desire for elevated lifestyle, premium experiences, and status symbol positioning",
    'Practical': "focus on problem-solving, time-saving benefits, and return on investment calculations",
    'Nostalgic': "trigger emotional memories, childhood references, and simpler times longing",
    'Urgent': "create FOMO with limited-time offers, exclusive access, and scarcity messaging",
    'Trust-Building': "establish credibility with expert endorsements, scientific backing, and transparent sourcing",
    'Empowering': "boost user confidence, skill development, and personal growth narratives",
  },
};

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

  // Add this state in the Generate component
  const [isInspireCooldown, setIsInspireCooldown] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  // const getSmartPrompt = (selectedStyle?: string) => {
  //   // Use provided style or current form state style
  //   const currentStyle = selectedStyle || formState.style;

  //   // 1. Base prompt from aspect ratio
  //   const basePrompt =
  //     formState.aspectRatio === '9:16'
  //       ? promptLibrary.shortForm[
  //       Math.floor(Math.random() * promptLibrary.shortForm.length)
  //       ]
  //       : promptLibrary.longForm[
  //       Math.floor(Math.random() * promptLibrary.longForm.length)
  //       ];

  //   // 2. Style-aware enhancement (pick random prompt from style array)
  //   let stylePrompt = "";
  //   if (currentStyle && currentStyle in promptLibrary.styles) {
  //     const stylePrompts = promptLibrary.styles[currentStyle as keyof typeof promptLibrary.styles];
  //     if (Array.isArray(stylePrompts)) {
  //       stylePrompt = stylePrompts[Math.floor(Math.random() * stylePrompts.length)];
  //     } else {
  //       stylePrompt = stylePrompts;
  //     }
  //   }

  //   // 3. Product-aware context
  //   const productContext = formState.productName
  //     ? `Focus on product: "${formState.productName}".`
  //     : "";

  //   // 4. Description enhancement
  //   const descriptionContext = formState.productDescription
  //     ? `Highlight these features: ${formState.productDescription.slice(0, 150)}.`
  //     : "";

  //   // 5. Add audience context based on keywords in description
  //   let audienceContext = "";
  //   if (formState.productDescription) {
  //     const desc = formState.productDescription.toLowerCase();

  //     // Check for audience keywords
  //     const audienceKeywords = {
  //       'Gen Z': ['teen', 'gen z', 'social', 'trend', 'meme', 'tiktok', 'snapchat'],
  //       'Millennials': ['millennial', '90s', 'nostalgic', 'authentic', 'sustainable', 'ethical'],
  //       'Professionals': ['pro', 'business', 'work', 'office', 'corporate', 'enterprise'],
  //       'Families': ['family', 'kids', 'home', 'parents', 'children', 'safe', 'durable'],
  //       'Gamers': ['game', 'gaming', 'esports', 'stream', 'twitch', 'competitive'],
  //       'Creatives': ['creative', 'design', 'artist', 'portfolio', 'inspiration', 'studio'],
  //     };

  //     for (const [audience, keywords] of Object.entries(audienceKeywords)) {
  //       if (keywords.some(keyword => desc.includes(keyword))) {
  //         const audiencePrompts = promptLibrary.audiences[audience as keyof typeof promptLibrary.audiences];
  //         if (Array.isArray(audiencePrompts)) {
  //           audienceContext = audiencePrompts[Math.floor(Math.random() * audiencePrompts.length)];
  //         } else {
  //           audienceContext = audiencePrompts;
  //         }
  //         break;
  //       }
  //     }
  //   }

  //   // 6. Optional: Add product type context
  //   let productTypeContext = "";
  //   if (formState.productDescription) {
  //     const desc = formState.productDescription.toLowerCase();

  //     // Check for product type keywords
  //     const productTypeKeywords = {
  //       'Tech Gadgets': ['tech', 'device', 'smart', 'app', 'digital', 'electronic', 'gadget'],
  //       'Beauty & Cosmetics': ['beauty', 'skin', 'makeup', 'cosmetic', 'skincare', 'glam'],
  //       'Fashion & Apparel': ['fashion', 'clothing', 'wear', 'apparel', 'outfit', 'style'],
  //       'Food & Beverage': ['food', 'drink', 'recipe', 'tasty', 'flavor', 'ingredient'],
  //       'Home & Furniture': ['home', 'furniture', 'decor', 'living', 'room', 'space'],
  //     };

  //     for (const [type, keywords] of Object.entries(productTypeKeywords)) {
  //       if (keywords.some(keyword => desc.includes(keyword))) {
  //         const typePrompts = promptLibrary.productTypes[type as keyof typeof promptLibrary.productTypes];
  //         if (Array.isArray(typePrompts)) {
  //           productTypeContext = typePrompts[Math.floor(Math.random() * typePrompts.length)];
  //         }
  //         break;
  //       }
  //     }
  //   }

  //   // Combine all parts intelligently
  //   const promptParts = [
  //     basePrompt,
  //     stylePrompt,
  //     productContext,
  //     productTypeContext,
  //     descriptionContext,
  //     audienceContext
  //   ].filter(Boolean);

  //   return promptParts.join(" ");
  // };

  // UI state - separate from form data

  const getSmartPrompt = (selectedStyle?: string) => {
    // Use provided style or current form state style
    const currentStyle = selectedStyle || formState.style;

    // 1. Base prompt from aspect ratio
    const basePrompt =
      formState.aspectRatio === '9:16'
        ? promptLibrary.shortForm[
        Math.floor(Math.random() * promptLibrary.shortForm.length)
        ]
        : promptLibrary.longForm[
        Math.floor(Math.random() * promptLibrary.longForm.length)
        ];

    // 2. Style-aware enhancement (pick random prompt from style array)
    let stylePrompt = "";
    if (currentStyle && currentStyle in promptLibrary.styles) {
      const stylePrompts = promptLibrary.styles[currentStyle as keyof typeof promptLibrary.styles];
      if (Array.isArray(stylePrompts)) {
        stylePrompt = stylePrompts[Math.floor(Math.random() * stylePrompts.length)];
      } else {
        stylePrompt = stylePrompts;
      }
    }

    // 3. Product-aware context
    const productContext = formState.productName
      ? `Focus on product: "${formState.productName}".`
      : "";

    // 4. Description enhancement
    const descriptionContext = formState.productDescription
      ? `Highlight these features: ${formState.productDescription.slice(0, 150)}.`
      : "";

    // 5. Add audience context based on keywords in description
    let audienceContext = "";
    if (formState.productDescription) {
      const desc = formState.productDescription.toLowerCase();

      // Check for audience keywords
      const audienceKeywords = {
        'Gen Z': ['teen', 'gen z', 'social', 'trend', 'meme', 'tiktok', 'snapchat'],
        'Millennials': ['millennial', '90s', 'nostalgic', 'authentic', 'sustainable', 'ethical'],
        'Professionals': ['pro', 'business', 'work', 'office', 'corporate', 'enterprise'],
        'Families': ['family', 'kids', 'home', 'parents', 'children', 'safe', 'durable'],
      };

      for (const [audience, keywords] of Object.entries(audienceKeywords)) {
        if (keywords.some(keyword => desc.includes(keyword))) {
          const audiencePrompts = promptLibrary.audiences[audience as keyof typeof promptLibrary.audiences];
          if (Array.isArray(audiencePrompts)) {
            audienceContext = audiencePrompts[Math.floor(Math.random() * audiencePrompts.length)];
          } else {
            audienceContext = audiencePrompts;
          }
          break;
        }
      }
    }

    // Combine all parts intelligently
    const promptParts = [
      basePrompt,
      stylePrompt,
      productContext,
      descriptionContext,
      audienceContext
    ].filter(Boolean);

    // Return a SINGLE, COMPLETE prompt
    return promptParts.join(" ");
  };

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

  const handleAspectRatioChange = (ratio: AspectRatio) =>
    updateFormState('aspectRatio', ratio);

  const handlePromptChange = (value: string) =>
    updateFormState('prompt', value);

  // const handleRandomPrompt = () => {
  //   // Get smart prompt that considers the current style
  //   const smartPrompt = getSmartPrompt();

  //   // If there's already a prompt, enhance it with the new smart prompt
  //   // Otherwise, use the smart prompt directly
  //   if (formState.prompt) {
  //     // Check if current prompt already has style content
  //     const hasStyle = Object.keys(promptLibrary.styles).some(styleName =>
  //       formState.prompt.toLowerCase().includes(styleName.toLowerCase().split('&')[0].trim())
  //     );

  //     if (hasStyle && formState.style) {
  //       // Replace existing content with enhanced prompt
  //       updateFormState('prompt', smartPrompt);
  //     } else {
  //       // Add enhancement to existing prompt
  //       updateFormState('prompt', `${formState.prompt}\n\nStyle Enhancement: ${smartPrompt}`);
  //     }
  //   } else {
  //     // No existing prompt, use the smart prompt
  //     updateFormState('prompt', smartPrompt);
  //   }
  // };

  // const handleRandomPrompt = () => {
  //   if (isInspireCooldown) return; // Prevent if already in cooldown

  //   // Start cooldown
  //   setIsInspireCooldown(true);
  //   setCooldownSeconds(2);

  //   // Get smart prompt
  //   const smartPrompt = getSmartPrompt();

  //   // Update prompt
  //   if (formState.prompt) {
  //     const hasStyle = Object.keys(promptLibrary.styles).some(styleName =>
  //       formState.prompt.toLowerCase().includes(styleName.toLowerCase().split('&')[0].trim())
  //     );

  //     if (hasStyle && formState.style) {
  //       updateFormState('prompt', smartPrompt);
  //     } else {
  //       updateFormState('prompt', `${formState.prompt}\n\nStyle Enhancement: ${smartPrompt}`);
  //     }
  //   } else {
  //     updateFormState('prompt', smartPrompt);
  //   }

  //   // Start countdown timer
  //   const timer = setInterval(() => {
  //     setCooldownSeconds(prev => {
  //       if (prev <= 1) {
  //         clearInterval(timer);
  //         setIsInspireCooldown(false);
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);
  // };

  const handleRandomPrompt = () => {
    if (isInspireCooldown) return; // Prevent if already in cooldown

    // Start cooldown
    setIsInspireCooldown(true);
    setCooldownSeconds(2);

    // Get fresh smart prompt (REPLACE, not append)
    const freshPrompt = getSmartPrompt();

    // Completely replace the existing prompt
    updateFormState('prompt', freshPrompt);

    // Start countdown timer
    const timer = setInterval(() => {
      setCooldownSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsInspireCooldown(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStyleSelect = (styleName: string) => {
    // This already works because passing empty string will update formState.style to ''
    updateFormState('style', styleName);
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
              isDisabled={isGenerating || isInspireCooldown}
              isInspireCooldown={isInspireCooldown}
              cooldownSeconds={cooldownSeconds}
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