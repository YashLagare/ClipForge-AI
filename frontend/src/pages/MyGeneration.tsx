import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown, Clock, Eye, FolderOpen, Grid, ImageIcon, List, Loader2Icon, Search, Sparkles, TrendingUp, VideoIcon, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyGenerations } from "../assets/assets";
import { GhostButton, PrimaryButton } from "../components/Buttons";
import ProjectCard from "../components/ProjectCard";
import type { project } from "../types/Community";

const MyGeneration = () => {
  const [generations, setGenerations] = useState<project[]>([]);
  const [filteredGenerations, setFilteredGenerations] = useState<project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"recent" | "popular" | "oldest">("recent");

  const filters = [
    { id: "all", label: "All Projects", icon: <FolderOpen className="size-4" /> },
    { id: "published", label: "Published", icon: <Eye className="size-4" /> },
    { id: "draft", label: "Drafts", icon: <FileText className="size-4" /> },
    { id: "video", label: "Videos", icon: <VideoIcon className="size-4" /> },
    { id: "image", label: "Images", icon: <ImageIcon className="size-4" /> },
  ];

  const sortOptions = [
    { id: "recent", label: "Most Recent", icon: <Calendar className="size-4" /> },
    { id: "popular", label: "Most Popular", icon: <TrendingUp className="size-4" /> },
    { id: "oldest", label: "Oldest First", icon: <Clock className="size-4" /> },
  ];

  const stats = {
    total: 0,
    published: 0,
    videos: 0,
    images: 0,
    totalViews: 0,
    totalLikes: 0,
  };

  const fetchMyGenerations = async () => {
    setTimeout(() => {
      const generationsWithStats = dummyGenerations.map(gen => ({
        ...gen,
        likes: Math.floor(Math.random() * 500) + 50,
        views: Math.floor(Math.random() * 5000) + 1000,
        shares: Math.floor(Math.random() * 200) + 10,
        status: Math.random() > 0.3 ? 'published' : 'draft',
      }));
      setGenerations(generationsWithStats);
      setFilteredGenerations(generationsWithStats);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchMyGenerations();
  }, []);

  useEffect(() => {
    let filtered = [...generations];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(gen =>
        gen.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gen.productDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (activeFilter !== "all") {
      if (activeFilter === "published") {
        filtered = filtered.filter(gen => (gen as any).status === 'published');
      } else if (activeFilter === "draft") {
        filtered = filtered.filter(gen => (gen as any).status === 'draft');
      } else if (activeFilter === "video") {
        filtered = filtered.filter(gen => gen.generatedVideo);
      } else if (activeFilter === "image") {
        filtered = filtered.filter(gen => !gen.generatedVideo && gen.generatedImage);
      }
    }

    // Apply sorting
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => (b as any).views - (a as any).views);
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "recent":
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    // Calculate stats
    stats.total = generations.length;
    stats.published = generations.filter(g => (g as any).status === 'published').length;
    stats.videos = generations.filter(g => g.generatedVideo).length;
    stats.images = generations.filter(g => !g.generatedVideo && g.generatedImage).length;
    stats.totalViews = generations.reduce((sum, g) => sum + ((g as any).views || 0), 0);
    stats.totalLikes = generations.reduce((sum, g) => sum + ((g as any).likes || 0), 0);

    setFilteredGenerations(filtered);
  }, [searchQuery, activeFilter, sortBy, generations]);

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
          <h3 className="text-xl font-semibold mb-2">Loading Your Creations</h3>
          <p className="text-gray-400">Fetching your amazing AI-generated ads...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-20 md:pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="text-center mt-8 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="size-4 text-yellow-400" />
              <span className="text-sm font-medium">My AI Creations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Generations</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Manage, edit, and analyze all the amazing ads you've created with ClipForge AI
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.total}</div>
              <div className="text-xs text-gray-400">Total Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.published}</div>
              <div className="text-xs text-gray-400">Published</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.videos}</div>
              <div className="text-xs text-gray-400">Videos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.images}</div>
              <div className="text-xs text-gray-400">Images</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{(stats.totalViews / 1000).toFixed(1)}K</div>
              <div className="text-xs text-gray-400">Total Views</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.totalLikes}</div>
              <div className="text-xs text-gray-400">Total Likes</div>
            </div>
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Filters & Controls */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your generations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-indigo-500/20 text-indigo-400" : "hover:bg-white/5"}`}
                  >
                    <Grid className="size-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-indigo-500/20 text-indigo-400" : "hover:bg-white/5"}`}
                  >
                    <List className="size-5" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none cursor-pointer"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all
                    ${activeFilter === filter.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }
                  `}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generations List */}
          <AnimatePresence mode="wait">
            {filteredGenerations.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="size-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                  <FolderOpen className="size-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {searchQuery ? "No matching projects found" : "No ads generated yet"}
                </h3>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                  {searchQuery
                    ? "Try adjusting your search or filters to find what you're looking for."
                    : "Create high-performing AI ads in minutes with ClipForge AI."
                  }
                </p>
                {searchQuery ? (
                  <GhostButton onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}>
                    Clear filters
                  </GhostButton>
                ) : (
                  <Link to="/generate">
                    <PrimaryButton>
                      <Sparkles className="size-4 mr-2" />
                      Create Your First Ad
                    </PrimaryButton>
                  </Link>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  : "space-y-4 md:space-y-6"
                }
              >
                {filteredGenerations.map((gen, index) => (
                  <motion.div
                    key={gen.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    layout
                  >
                    <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Stats Footer */}
          {filteredGenerations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="text-sm text-gray-400">
                  Showing {filteredGenerations.length} of {generations.length} generations
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="size-4 text-indigo-400" />
                    <span>85 credits remaining</span>
                  </div>
                  
                  <Link to="/generate">
                    <GhostButton>
                      <Sparkles className="size-4 mr-2" />
                      Create New Ad
                    </GhostButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Create New CTA */}
      {generations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="fixed bottom-6 right-6 z-10"
        >
          <Link to="/generate">
            <PrimaryButton className="px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="size-5 mr-2" />
              New Generation
            </PrimaryButton>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default MyGeneration;

// Add FileText icon component
const FileText = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);