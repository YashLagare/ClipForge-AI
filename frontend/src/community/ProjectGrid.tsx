import { AnimatePresence, motion } from 'framer-motion';
import { EmptyState, ProjectCard } from './index';
import type { ProjectGridProps } from './types';

export const ProjectGrid = ({
  projects,
  viewMode,
  hoveredProject,
  onHoverChange,
  onLike,
  onClearFilters,
}: ProjectGridProps) => {
  return (
    <AnimatePresence mode="wait">
      {projects.length === 0 ? (
        <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <EmptyState onClearFilters={onClearFilters} />
        </motion.div>
      ) : (
        <motion.div
          key="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
              : 'space-y-4 md:space-y-6'
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
            >
              <ProjectCard
                project={project}
                isHovered={hoveredProject === project.id}
                onHover={() => onHoverChange(project.id)}
                onHoverEnd={() => onHoverChange(null)}
                onLike={() => onLike(project.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
