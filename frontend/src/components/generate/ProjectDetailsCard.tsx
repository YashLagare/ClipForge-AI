import { motion } from 'framer-motion';
import type { ProjectDetailsCardProps } from './types';

export const ProjectDetailsCard = ({
  projectName,
  productName,
  productDescription,
  onProjectNameChange,
  onProductNameChange,
  onProductDescriptionChange,
  isDisabled,
}: ProjectDetailsCardProps) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white/3 rounded-2xl p-5 md:p-6 border border-white/5 backdrop-blur-sm"
    >
      <h3 className="text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
        <div className="size-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        Project Details
      </h3>

      <div className="space-y-5 md:space-y-6">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => onProjectNameChange(e.target.value)}
            disabled={isDisabled}
            className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="e.g., Summer Collection Campaign"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block text-sm font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => onProductNameChange(e.target.value)}
            disabled={isDisabled}
            className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="e.g., Solar-Powered Headphones"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="productDescription" className="block text-sm font-medium mb-2">
            Product Description <span className="text-xs text-gray-500">(optional)</span>
          </label>
          <textarea 
            id="productDescription" 
            rows={3}
            value={productDescription}
            onChange={(e) => onProductDescriptionChange(e.target.value)}
            disabled={isDisabled}
            placeholder="Describe your product, key features, and target audience..."
            className="w-full bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none transition-all min-h-32 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </motion.div>
  );
};
