import { motion } from 'framer-motion';
import { ImageIcon, Music, Palette, Type, UploadIcon, User, Zap } from 'lucide-react';
import UploadZone from '../UploadZone';
import type { AIFeature, UploadSectionProps } from './types';

const aiFeatures: AIFeature[] = [
  { icon: <Palette className="size-4" />, label: 'Style Transfer', desc: 'Match any aesthetic' },
  { icon: <ImageIcon className="size-4" />, label: 'Auto-BG Removal', desc: 'Clean product cutouts' },
  { icon: <Type className="size-4" />, label: 'Smart Captions', desc: 'Engaging text overlays' },
  { icon: <Music className="size-4" />, label: 'Audio Sync', desc: 'Beat-matched music' },
];

export const UploadSection = ({
  productImage,
  modelImage,
  onProductImageChange,
  onProductImageClear,
  onModelImageChange,
  onModelImageClear,
}: UploadSectionProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Product Image Upload */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label className="block text-sm font-medium mb-3 flex items-center gap-2">
          <UploadIcon className="size-4 text-indigo-400" />
          Product Image
          <span className="text-xs text-gray-500">(Required)</span>
        </label>
        <UploadZone 
          label="Product Image" 
          file={productImage} 
          onClear={onProductImageClear} 
          onChange={onProductImageChange}
        />
        <p className="text-xs text-gray-500 mt-2 md:mt-3">
          Best results: White background, clear product shot, good lighting
        </p>
      </motion.div>

      {/* Model Image Upload */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="block text-sm font-medium mb-3 flex items-center gap-2">
          <User className="size-4 text-purple-400" />
          Model/Context Image
          <span className="text-xs text-gray-500">(Optional)</span>
        </label>
        <UploadZone 
          label="Model Image" 
          file={modelImage} 
          onClear={onModelImageClear} 
          onChange={onModelImageChange}
        />
        <p className="text-xs text-gray-500 mt-2 md:mt-3">
          Add a model or scene for in-context generation. Leave empty for product-only ads.
        </p>
      </motion.div>

      {/* AI Features Showcase */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border border-indigo-500/20"
      >
        <h4 className="font-medium mb-4 flex items-center gap-2">
          <Zap className="size-4 text-indigo-400" />
          AI-Powered Features Included:
        </h4>
        
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {aiFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center">
                <div className="text-indigo-400">{feature.icon}</div>
              </div>
              <div>
                <div className="text-sm font-medium">{feature.label}</div>
                <div className="text-xs text-gray-500">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
