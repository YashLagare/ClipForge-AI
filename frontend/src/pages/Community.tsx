import { Loader2Icon } from "lucide-react"
import { useEffect, useState } from "react"
import { dummyGenerations } from "../assets/assets"
import ProjectCard from "../components/ProjectCard"
import type { project } from "../types/Community"
const Community = () => {
  const [projects, setProjects] = useState<project[]>([])
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setTimeout(()=> {
      setProjects(dummyGenerations)
      setLoading(false);
    }, 3000)
  }

  useEffect(() => {
    fetchProjects()
  },[])

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2Icon className="size-7 animate-spin text-indigo-400"/>
        </div>
      ) : (
        <div className="min-h-screen text-white p-6 md:p-12 my-28">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-center">Community</h1>
              <p className="text-center text-lg text-gray-400">Discover real ads built by creators using ClipForge.AI</p>
            </header>

            {/* project list  */}

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} gen={project} setGenerations={setProjects} forCommunity={true}/>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Community