import { motion } from "framer-motion";
import { Loader2Icon, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { dummyGenerations } from "../assets/assets";
import type { CommunityProject, SortOption, ViewMode } from "../community";
import {
  CommunityCTA,
  CommunityFilters,
  CommunityHero,
  CommunityStats,
  ProjectGrid,
} from "../community";

const CATEGORIES = [
  { id: "all", label: "All Ads", icon: "🎯"},
  { id: "fashion", label: "Fashion", icon: "👗"},
  { id: "tech", label: "Tech", icon: "💻"},
  { id: "beauty", label: "Beauty", icon: "💄"},
  { id: "food", label: "Food & Bev", icon: "🍔"},
  { id: "fitness", label: "Fitness", icon: "💪"},
  { id: "travel", label: "Travel", icon: "✈️"},
];

const Community = () => {
  // State management
  const [projects, setProjects] = useState<CommunityProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Fetch projects data
  const fetchProjects = async () => {
    setTimeout(() => {
      const projectsWithStats = dummyGenerations.map((proj) => ({
        ...proj,
        likes: Math.floor(Math.random() * 500) + 50,
        views: Math.floor(Math.random() * 5000) + 1000,
        shares: Math.floor(Math.random() * 200) + 10,
        comments: Math.floor(Math.random() * 100) + 5,
        isTrending: Math.random() > 0.7,
        isFeatured: Math.random() > 0.9,
        liked: false,
      } as CommunityProject));
      setProjects(projectsWithStats);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter and sort projects using useMemo for performance
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((project) =>
        project.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.productDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = filtered.filter((project) =>
        project.productName.toLowerCase().includes(activeFilter) ||
        project.productDescription.toLowerCase().includes(activeFilter)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => (b as any).likes - (a as any).likes);
        break;
      case "trending":
        filtered.sort((a, b) => (b as any).views - (a as any).views);
        break;
      case "recent":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    return filtered;
  }, [searchQuery, activeFilter, sortBy, projects]);

  // Handle like action
  const handleLike = (projectId: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, likes: ((project as any).likes || 0) + 1, liked: true }
          : project
      )
    );
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
    setSortBy("recent");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative">
            <div className="size-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
              <Loader2Icon className="size-8 text-white animate-spin" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="size-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Loading Community</h3>
          <p className="text-gray-400">Discovering amazing AI-generated ads...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <CommunityHero />
          <CommunityStats />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {/* Search & Filters */}
        <CommunityFilters
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          viewMode={viewMode}
          sortBy={sortBy}
          onSearchChange={setSearchQuery}
          onFilterChange={setActiveFilter}
          onViewModeChange={setViewMode}
          onSortChange={setSortBy}
          categories={CATEGORIES}
        />

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          viewMode={viewMode}
          hoveredProject={hoveredProject}
          onHoverChange={setHoveredProject}
          onLike={handleLike}
          onClearFilters={handleClearFilters}
        />

        {/* Load More & CTA */}
        {filteredProjects.length > 0 && (
          <CommunityCTA
            totalProjects={projects.length}
            displayedCount={filteredProjects.length}
            onLoadMore={() => {
              // TODO: Implement pagination/load more
              console.log("Load more clicked");
            }}
          />
        )}
      </section>
    </div>
  );
};

export default Community;