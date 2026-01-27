// import { motion } from 'framer-motion';
// import { Sparkles } from 'lucide-react';
// import type { AIInstructionsCardProps, StyleOption } from './types';

// const styleOptions: StyleOption[] = [
//   { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500' },
//   { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500' },
//   { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500' },
//   { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500' },
// ];

// export const AIInstructionsCard = ({
//   prompt,
//   style,
//   onPromptChange,
//   onStyleSelect,
//   onRandomPrompt,
//   isDisabled,
// }: AIInstructionsCardProps) => {
//   return (
//     <motion.div
//       initial={{ x: 20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.3 }}
//       className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
//     >
//       <div className="flex items-center justify-between mb-3 md:mb-4">
//         <label className="block text-sm font-medium">
//           AI Instructions
//         </label>
//         <button
//           type="button"
//           onClick={onRandomPrompt}
//           disabled={isDisabled}
//           className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <Sparkles className="size-3" />
//           {style
//             ? "Inspire me (based on style)"
//             : "Inspire me"}
//         </button>
//       </div>

//       <textarea
//         value={prompt}
//         onChange={(e) => onPromptChange(e.target.value)}
//         disabled={isDisabled}
//         placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
//         className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
//       />

//       {/* Style Suggestions */}
//       <div className="mt-4 md:mt-6">
//         <p className="text-xs text-gray-500 mb-2 md:mb-3">Try these styles:</p>
//         <div className="flex flex-wrap gap-2">
//           {styleOptions.map((styleOption) => (
//             <button
//               type="button"
//               key={styleOption.name}
//               onClick={() => onStyleSelect(styleOption.name)}
//               disabled={isDisabled}
//               className={`
//                 text-xs px-3 py-1.5 rounded-full border transition-all duration-300
//                 ${style === styleOption.name
//                   ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent`
//                   : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
//                 }
//                 disabled:opacity-50 disabled:cursor-not-allowed
//               `}
//             >
//               {styleOption.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };


// import { motion } from 'framer-motion';
// import { Palette, Sparkles } from 'lucide-react';
// import type { AIInstructionsCardProps, StyleOption } from './types';

// // Update your StyleOption to include icon
// const styleOptions: (StyleOption & { icon: string })[] = [
//   { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500', icon: '⚪' },
//   { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500', icon: '⚡' },
//   { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500', icon: '👑' },
//   { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500', icon: '🎈' },
//   { name: 'Modern & Techy', color: 'from-purple-500 to-pink-500', icon: '💻' },
//   { name: 'Natural & Organic', color: 'from-green-600 to-teal-500', icon: '🌿' },
//   { name: 'Retro & Vintage', color: 'from-rose-500 to-amber-400', icon: '📻' },
//   { name: 'Dark & Moody', color: 'from-gray-800 to-indigo-800', icon: '🌙' },
// ];

// export const AIInstructionsCard = ({
//   prompt,
//   style,
//   onPromptChange,
//   onStyleSelect,
//   onRandomPrompt,
//   isDisabled,
// }: AIInstructionsCardProps) => {
//   return (
//     <motion.div
//       initial={{ x: 20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.3 }}
//       className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
//     >
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
//         <div className="flex items-center gap-2">
//           <Palette className="size-4 text-indigo-400" />
//           <label className="block text-sm font-medium">
//             AI Instructions & Style
//           </label>
//         </div>
//         <button
//           type="button"
//           onClick={onRandomPrompt}
//           disabled={isDisabled || !style}
//           className={`
//             text-xs flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg 
//             transition-all duration-300 border whitespace-nowrap
//             ${style
//               ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 text-indigo-400 hover:text-indigo-300 border-indigo-500/30'
//               : 'bg-white/5 text-gray-400 border-white/10 cursor-not-allowed'
//             }
//             ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//           `}
//           title={!style ? "Select a style first for better inspiration" : ""}
//         >
//           <Sparkles className="size-3" />
//           {style ? `Inspire me (${style.split('&')[0].trim()})` : "Select style first"}
//         </button>
//       </div>

//       <textarea
//         value={prompt}
//         onChange={(e) => onPromptChange(e.target.value)}
//         disabled={isDisabled}
//         placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
//         className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
//       />

//       {/* Style Suggestions */}
//       <div className="mt-4 md:mt-6">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1">
//           <p className="text-xs text-gray-500">Select a style:</p>
//           <span className={`text-xs ${style ? 'text-indigo-400' : 'text-gray-400'}`}>
//             {style || 'No style selected'}
//           </span>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//           {styleOptions.map((styleOption) => {
//             const isSelected = style === styleOption.name;
//             return (
//               <button
//                 type="button"
//                 key={styleOption.name}
//                 onClick={() => onStyleSelect(styleOption.name)}
//                 disabled={isDisabled}
//                 className={`
//                   text-xs px-3 py-2 rounded-lg border transition-all duration-300
//                   flex items-center justify-start gap-1.5 text-left min-h-[44px]
//                   ${isSelected
//                     ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent shadow-lg scale-[1.02]`
//                     : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:border-white/20'
//                   }
//                   disabled:opacity-50 disabled:cursor-not-allowed
//                 `}
//               >
//                 <span className="text-sm flex-shrink-0">{styleOption.icon}</span>
//                 <span className="flex-1 truncate text-left">
//                   {styleOption.name.split('&')[0].trim()}
//                   <span className="block text-[10px] opacity-80">
//                     {styleOption.name.split('&')[1]?.trim() || ''}
//                   </span>
//                 </span>
//               </button>
//             );
//           })}
//         </div>
        
//         {/* Style Description (when selected) */}
//         {style && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10"
//           >
//             <p className="text-xs text-gray-400">
//               <span className="text-indigo-400 font-medium">{style}</span> style selected. 
//               Click "Inspire me" to generate a prompt optimized for this style.
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };


// import { motion } from 'framer-motion';
// import { Palette, Sparkles } from 'lucide-react';
// import type { AIInstructionsCardProps, StyleOption } from './types';

// // Update your StyleOption to include icon
// const styleOptions: (StyleOption & { icon: string })[] = [
//   { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500', icon: '⚪' },
//   { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500', icon: '⚡' },
//   { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500', icon: '👑' },
//   { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500', icon: '🎈' },
//   { name: 'Modern & Techy', color: 'from-purple-500 to-pink-500', icon: '💻' },
//   { name: 'Natural & Organic', color: 'from-green-600 to-teal-500', icon: '🌿' },
//   { name: 'Retro & Vintage', color: 'from-rose-500 to-amber-400', icon: '📻' },
//   { name: 'Dark & Moody', color: 'from-gray-800 to-indigo-800', icon: '🌙' },
// ];

// export const AIInstructionsCard = ({
//   prompt,
//   style,
//   onPromptChange,
//   onStyleSelect,
//   onRandomPrompt,
//   isDisabled,
// }: AIInstructionsCardProps) => {
  
//   const handleStyleClick = (styleName: string) => {
//     // Toggle functionality: if clicking the already selected style, deselect it
//     if (style === styleName) {
//       onStyleSelect(''); // Deselect by passing empty string
//     } else {
//       onStyleSelect(styleName); // Select new style
//     }
//   };

//   return (
//     <motion.div
//       initial={{ x: 20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.3 }}
//       className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
//     >
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
//         <div className="flex items-center gap-2">
//           <Palette className="size-4 text-indigo-400" />
//           <label className="block text-sm font-medium">
//             AI Instructions & Style
//           </label>
//         </div>
//         <button
//           type="button"
//           onClick={onRandomPrompt}
//           disabled={isDisabled || !style}
//           className={`
//             text-xs flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg 
//             transition-all duration-300 border whitespace-nowrap
//             ${style
//               ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 text-indigo-400 hover:text-indigo-300 border-indigo-500/30'
//               : 'bg-white/5 text-gray-400 border-white/10 cursor-not-allowed'
//             }
//             ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//           `}
//           title={!style ? "Select a style first for better inspiration" : ""}
//         >
//           <Sparkles className="size-3" />
//           {style ? `Inspire me (${style.split('&')[0].trim()})` : "Select style first"}
//         </button>
//       </div>

//       <textarea
//         value={prompt}
//         onChange={(e) => onPromptChange(e.target.value)}
//         disabled={isDisabled}
//         placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
//         className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
//       />

//       {/* Style Suggestions */}
//       <div className="mt-4 md:mt-6">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1">
//           <p className="text-xs text-gray-500">Select a style (click to toggle):</p>
//           <span className={`text-xs ${style ? 'text-indigo-400' : 'text-gray-400'}`}>
//             {style || 'No style selected'}
//             {style && (
//               <button
//                 type="button"
//                 onClick={() => handleStyleClick(style)}
//                 className="ml-2 text-xs text-gray-500 hover:text-red-400"
//                 title="Clear selection"
//               >
//                 × Clear
//               </button>
//             )}
//           </span>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//           {styleOptions.map((styleOption) => {
//             const isSelected = style === styleOption.name;
//             return (
//               <button
//                 type="button"
//                 key={styleOption.name}
//                 onClick={() => handleStyleClick(styleOption.name)}
//                 disabled={isDisabled}
//                 className={`
//                   text-xs px-3 py-2 rounded-lg border transition-all duration-300
//                   flex items-center justify-start gap-1.5 text-left min-h-[44px]
//                   relative group
//                   ${isSelected
//                     ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent shadow-lg scale-[1.02]`
//                     : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:border-white/20'
//                   }
//                   disabled:opacity-50 disabled:cursor-not-allowed
//                 `}
//               >
//                 <span className="text-sm flex-shrink-0">{styleOption.icon}</span>
//                 <span className="flex-1 truncate text-left">
//                   {styleOption.name.split('&')[0].trim()}
//                   <span className="block text-[10px] opacity-80">
//                     {styleOption.name.split('&')[1]?.trim() || ''}
//                   </span>
//                 </span>
//                 {/* Selection indicator */}
//                 {isSelected && (
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
//                     <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                   </span>
//                 )}
//                 {/* Deselect hint on hover for selected item */}
//                 {isSelected && (
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
//                     Click to deselect
//                   </div>
//                 )}
//               </button>
//             );
//           })}
//         </div>
        
//         {/* Style Description (when selected) */}
//         {style && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10"
//           >
//             <div className="flex items-center justify-between">
//               <p className="text-xs text-gray-400">
//                 <span className="text-indigo-400 font-medium">{style}</span> style selected. 
//                 Click "Inspire me" to generate a prompt optimized for this style.
//               </p>
//               <button
//                 type="button"
//                 onClick={() => handleStyleClick(style)}
//                 className="text-xs text-gray-500 hover:text-red-400 px-2 py-1 rounded hover:bg-white/5"
//               >
//                 × Clear style
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };


// import { motion } from 'framer-motion';
// import { Palette, Sparkles } from 'lucide-react';
// import type { AIInstructionsCardProps, StyleOption } from './types';

// // Update your StyleOption to include icon
// const styleOptions: (StyleOption & { icon: string })[] = [
//   { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500', icon: '⚪' },
//   { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500', icon: '⚡' },
//   { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500', icon: '👑' },
//   { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500', icon: '🎈' },
//   { name: 'Modern & Techy', color: 'from-purple-500 to-pink-500', icon: '💻' },
//   { name: 'Natural & Organic', color: 'from-green-600 to-teal-500', icon: '🌿' },
//   { name: 'Retro & Vintage', color: 'from-rose-500 to-amber-400', icon: '📻' },
//   { name: 'Dark & Moody', color: 'from-gray-800 to-indigo-800', icon: '🌙' },
// ];

// export const AIInstructionsCard = ({
//   prompt,
//   style,
//   onPromptChange,
//   onStyleSelect,
//   onRandomPrompt,
//   isDisabled,
// }: AIInstructionsCardProps) => {
  
//   const handleStyleClick = (styleName: string) => {
//     // Check if we're deselecting (clicking the currently selected style)
//     if (style === styleName) {
//       // We're deselecting - clear both style AND prompt
//       onStyleSelect(''); // Deselect style
//       onPromptChange(''); // Also clear the prompt since it was style-specific
//     } else {
//       onStyleSelect(styleName); // Select new style (prompt remains)
//     }
//   };

//   const handleClearStyleAndPrompt = () => {
//     // Clear both style and prompt
//     onStyleSelect('');
//     onPromptChange('');
//   };

//   return (
//     <motion.div
//       initial={{ x: 20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.3 }}
//       className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
//     >
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
//         <div className="flex items-center gap-2">
//           <Palette className="size-4 text-indigo-400" />
//           <label className="block text-sm font-medium">
//             AI Instructions & Style
//           </label>
//         </div>
//         <button
//           type="button"
//           onClick={onRandomPrompt}
//           disabled={isDisabled || !style}
//           className={`
//             text-xs flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg 
//             transition-all duration-300 border whitespace-nowrap
//             ${style
//               ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 text-indigo-400 hover:text-indigo-300 border-indigo-500/30'
//               : 'bg-white/5 text-gray-400 border-white/10 cursor-not-allowed'
//             }
//             ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//           `}
//           title={!style ? "Select a style first for better inspiration" : ""}
//         >
//           <Sparkles className="size-3" />
//           {style ? `Inspire me (${style.split('&')[0].trim()})` : "Select style first"}
//         </button>
//       </div>

//       <textarea
//         value={prompt}
//         onChange={(e) => onPromptChange(e.target.value)}
//         disabled={isDisabled}
//         placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
//         className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
//       />

//       {/* Prompt clear button (only shown when there's a prompt) */}
//       {prompt && (
//         <div className="flex justify-end mt-2">
//           <button
//             type="button"
//             onClick={() => onPromptChange('')}
//             disabled={isDisabled}
//             className="text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 transition-colors disabled:opacity-50"
//           >
//             <span>×</span>
//             Clear prompt
//           </button>
//         </div>
//       )}

//       {/* Style Suggestions */}
//       <div className="mt-4 md:mt-6">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1">
//           <p className="text-xs text-gray-500">Select a style (click to toggle):</p>
//           <span className={`text-xs ${style ? 'text-indigo-400' : 'text-gray-400'}`}>
//             {style || 'No style selected'}
//             {style && (
//               <button
//                 type="button"
//                 onClick={handleClearStyleAndPrompt}
//                 className="ml-2 text-xs text-gray-500 hover:text-red-400"
//                 title="Clear style and prompt"
//               >
//                 × Clear all
//               </button>
//             )}
//           </span>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//           {styleOptions.map((styleOption) => {
//             const isSelected = style === styleOption.name;
//             return (
//               <button
//                 type="button"
//                 key={styleOption.name}
//                 onClick={() => handleStyleClick(styleOption.name)}
//                 disabled={isDisabled}
//                 className={`
//                   text-xs px-3 py-2 rounded-lg border transition-all duration-300
//                   flex items-center justify-start gap-1.5 text-left min-h-[44px]
//                   relative group
//                   ${isSelected
//                     ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent shadow-lg scale-[1.02]`
//                     : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:border-white/20'
//                   }
//                   disabled:opacity-50 disabled:cursor-not-allowed
//                 `}
//               >
//                 <span className="text-sm flex-shrink-0">{styleOption.icon}</span>
//                 <span className="flex-1 truncate text-left">
//                   {styleOption.name.split('&')[0].trim()}
//                   <span className="block text-[10px] opacity-80">
//                     {styleOption.name.split('&')[1]?.trim() || ''}
//                   </span>
//                 </span>
//                 {/* Selection indicator */}
//                 {isSelected && (
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
//                     <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                   </span>
//                 )}
//                 {/* Deselect hint on hover for selected item */}
//                 {isSelected && (
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
//                     Click to clear style & prompt
//                   </div>
//                 )}
//               </button>
//             );
//           })}
//         </div>
        
//         {/* Style Description (when selected) */}
//         {style && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10"
//           >
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <p className="text-xs text-gray-400 flex-1">
//                 <span className="text-indigo-400 font-medium">{style}</span> style selected. 
//                 {prompt ? (
//                   <span className="block mt-1">This prompt is specific to the selected style. Clearing the style will also clear the prompt.</span>
//                 ) : (
//                   <span> Click "Inspire me" to generate a prompt optimized for this style.</span>
//                 )}
//               </p>
//               {/* <div className="flex gap-2">
//                 {prompt && (
//                   <button
//                     type="button"
//                     onClick={() => onPromptChange('')}
//                     className="text-xs text-gray-500 hover:text-red-400 px-2 py-1 rounded hover:bg-white/5 whitespace-nowrap"
//                   >
//                     × Clear prompt only
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleClearStyleAndPrompt}
//                   className="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded hover:bg-white/5 whitespace-nowrap border border-red-400/30"
//                 >
//                   × Clear style & prompt
//                 </button>
//               </div> */}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };


import { motion } from 'framer-motion';
import { Palette, Sparkles } from 'lucide-react';
import type { AIInstructionsCardProps, StyleOption } from './types';

// Update your StyleOption to include icon
const styleOptions: (StyleOption & { icon: string })[] = [
  { name: 'Minimal & Clean', color: 'from-blue-500 to-cyan-500', icon: '⚪' },
  { name: 'Bold & Energetic', color: 'from-orange-500 to-red-500', icon: '⚡' },
  { name: 'Luxury & Elegant', color: 'from-amber-500 to-yellow-500', icon: '👑' },
  { name: 'Fun & Playful', color: 'from-green-500 to-emerald-500', icon: '🎈' },
  { name: 'Modern & Techy', color: 'from-purple-500 to-pink-500', icon: '💻' },
  { name: 'Natural & Organic', color: 'from-green-600 to-teal-500', icon: '🌿' },
  { name: 'Retro & Vintage', color: 'from-rose-500 to-amber-400', icon: '📻' },
  { name: 'Dark & Moody', color: 'from-gray-800 to-indigo-800', icon: '🌙' },
];

export const AIInstructionsCard = ({
  prompt,
  style,
  onPromptChange,
  onStyleSelect,
  onRandomPrompt,
  isDisabled,
  isInspireCooldown = false,
  cooldownSeconds = 0,
}: AIInstructionsCardProps) => {
  
  const handleStyleClick = (styleName: string) => {
    if (isDisabled || isInspireCooldown) return;
    
    // Check if we're deselecting (clicking the currently selected style)
    if (style === styleName) {
      // We're deselecting - clear both style AND prompt
      onStyleSelect(''); // Deselect style
      onPromptChange(''); // Also clear the prompt since it was style-specific
    } else {
      onStyleSelect(styleName); // Select new style (prompt remains)
    }
  };

  const handleClearStyleAndPrompt = () => {
    if (isDisabled || isInspireCooldown) return;
    // Clear both style and prompt
    onStyleSelect('');
    onPromptChange('');
  };

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
        <div className="flex items-center gap-2">
          <Palette className="size-4 text-indigo-400" />
          <label className="block text-sm font-medium">
            AI Instructions & Style
          </label>
        </div>
        
        {/* Inspire Me Button with Countdown */}
        <div className="relative">
          <button
            type="button"
            onClick={onRandomPrompt}
            disabled={isDisabled || !style || isInspireCooldown}
            className={`
              text-xs flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg 
              transition-all duration-300 border whitespace-nowrap relative
              ${style && !isInspireCooldown
                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 text-indigo-400 hover:text-indigo-300 border-indigo-500/30'
                : 'bg-white/5 text-gray-400 border-white/10'
              }
              ${(isDisabled || !style || isInspireCooldown) ? 'cursor-not-allowed' : ''}
            `}
            title={!style ? "Select a style first for better inspiration" : isInspireCooldown ? `Please wait ${cooldownSeconds}s` : ""}
          >
            {isInspireCooldown ? (
              <>
                {/* Countdown circle */}
                <div className="relative size-4 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <svg className="size-4" viewBox="0 0 16 16">
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        className="text-indigo-500/30"
                      />
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="44"
                        strokeDashoffset={44 - (44 * (2 - cooldownSeconds) / 2)}
                        className="text-indigo-400"
                        transform="rotate(-90 8 8)"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] font-medium text-indigo-400">
                    {cooldownSeconds}
                  </span>
                </div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="size-3" />
                {style ? `Inspire me (${style.split('&')[0].trim()})` : "Select style first"}
              </>
            )}
          </button>
          
          {/* Cooldown overlay */}
          {isInspireCooldown && (
            <div className="absolute inset-0 rounded-lg bg-black/20 backdrop-blur-[1px] pointer-events-none" />
          )}
        </div>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        disabled={isDisabled || isInspireCooldown}
        placeholder="E.g., 'Create a vibrant summer vibe with beach background, upbeat music, and dynamic text animations for Gen Z audience'"
        className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all min-h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500"
      />

      {/* Prompt clear button (only shown when there's a prompt) */}
      {prompt && !isInspireCooldown && (
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={() => onPromptChange('')}
            disabled={isDisabled || isInspireCooldown}
            className="text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 transition-colors disabled:opacity-50"
          >
            <span>×</span>
            Clear prompt
          </button>
        </div>
      )}

      {/* Style Suggestions */}
      <div className="mt-4 md:mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1">
          <p className="text-xs text-gray-500">
            Select a style {isInspireCooldown && '(temporarily disabled)'}:
          </p>
          <span className={`text-xs ${style ? 'text-indigo-400' : 'text-gray-400'}`}>
            {style || 'No style selected'}
            {style && !isInspireCooldown && (
              <button
                type="button"
                onClick={handleClearStyleAndPrompt}
                disabled={isDisabled || isInspireCooldown}
                className="ml-2 text-xs text-gray-500 hover:text-red-400 disabled:opacity-50"
                title="Clear style and prompt"
              >
                × Clear all
              </button>
            )}
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {styleOptions.map((styleOption) => {
            const isSelected = style === styleOption.name;
            const isDisabledButton = isDisabled || isInspireCooldown;
            
            return (
              <button
                type="button"
                key={styleOption.name}
                onClick={() => handleStyleClick(styleOption.name)}
                disabled={isDisabledButton}
                className={`
                  text-xs px-3 py-2 rounded-lg border transition-all duration-300
                  flex items-center justify-start gap-1.5 text-left min-h-[44px]
                  relative group
                  ${isSelected
                    ? `bg-gradient-to-r ${styleOption.color} text-white border-transparent shadow-lg scale-[1.02]`
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:border-white/20'
                  }
                  ${isDisabledButton ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <span className="text-sm flex-shrink-0">{styleOption.icon}</span>
                <span className="flex-1 truncate text-left">
                  {styleOption.name.split('&')[0].trim()}
                  <span className="block text-[10px] opacity-80">
                    {styleOption.name.split('&')[1]?.trim() || ''}
                  </span>
                </span>
                {/* Selection indicator */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  </span>
                )}
                {/* Deselect hint on hover for selected item */}
                {isSelected && !isDisabledButton && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Click to clear style & prompt
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Style Description (when selected) */}
        {style && !isInspireCooldown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs text-gray-400 flex-1">
                <span className="text-indigo-400 font-medium">{style}</span> style selected. 
                {prompt ? (
                  <span className="block mt-1">This prompt is specific to the selected style. Clearing the style will also clear the prompt.</span>
                ) : (
                  <span> Click "Inspire me" to generate a prompt optimized for this style.</span>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};