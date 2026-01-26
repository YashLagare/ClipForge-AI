import { Loader2Icon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyGenerations } from "../assets/assets";
import { PrimaryButton } from "../components/Buttons";
import ProjectCard from "../components/ProjectCard";
import type { project } from "../types/Community";

const MyGeneration = () => {

  const [generations, setGenerations] = useState<project[]>([])
  const [loading, setLoading] = useState(true);

  const fetchMyGenerations = async () => {
    setTimeout(() => {
      setGenerations(dummyGenerations)
      setLoading(false);
    }, 3000)
  }

  useEffect(() => {
    fetchMyGenerations()
  }, [])

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center">My Generations</h1>
          <p className="text-center text-lg text-gray-400">View and manage the ads you’ve created with ClipForge AI</p>
        </header>

        {/* generations list  */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {generations.map((gen) => (
            <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />
          ))}
        </div>

        {generations.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <Sparkles className="w-10 h-10 mb-4 text-indigo-500" />

            <p className="text-lg font-semibold text-white">
              No ads generated yet
            </p>

            <p className="text-sm text-gray-400 mt-1 mb-6 max-w-sm">
              Create high-performing AI ads in minutes with ClipForge AI.
            </p>

            <Link to="/generate">
              <PrimaryButton>
                Create Your First Ad
              </PrimaryButton>
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default MyGeneration