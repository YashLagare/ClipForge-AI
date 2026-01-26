import { ImageIcon, Loader2Icon, RefreshCcwIcon, SparkleIcon, VideoIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { dummyGenerations } from "../assets/assets"
import { GhostButton, PrimaryButton } from "../components/Buttons"
import type { project } from "../types/Community"

const Result = () => {

  const [project, setProjectData] = useState<project>({} as project)
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)

  const fetchProjects = async () => {
    setTimeout(() => {
      setProjectData(dummyGenerations[0])
      setLoading(false)
    }, 3000)
  }

  const handleGeneratedVideo = async () => {
    setIsGenerating(true)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2Icon className="animate-spin text-indigo-600 size-9" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium">Generation Result</h1>
          <Link to="/generate" className="btn-secondary text-sm flex items-center gap-2">
            <RefreshCcwIcon className="w-4 h-4" />
            <p className="max-sm:hidden">New Generation</p>
          </Link>
        </header>

        {/* grid layout */}
        <div className="grid lg:grid-cols-3 gap-3">

          {/* main result display here... */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel inline-block p-2 rounded-2xl">
              <div className={`${project?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} sm:max-h-200 rounded-xl bg-gray-900 overflow-hidden relative`}>
                {project?.generatedVideo ? (
                  <video src={project.generatedVideo} className="w-full h-full rounded-2xl object-cover" controls autoPlay loop />
                ) : (
                  <img src={project.generatedImage} className="w-full h-full rounded-2xl object-cover" alt="Generated Image" />
                )}
              </div>
            </div>
          </div>

          {/* sidebar actions */}
          <div className="space-y-6">
            {/* download buttons */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Actions</h3>
              <div className="flex flex-col gap-3">
                <a href={project.generatedImage} download>
                  <GhostButton disabled={!project.generatedImage}
                    className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ImageIcon />
                    Download Image
                  </GhostButton>
                </a>

                <a href={project.generatedVideo} download>
                  <GhostButton disabled={!project.generatedVideo}
                    className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                    <VideoIcon />
                    Download Video
                  </GhostButton>
                </a>
              </div>
            </div>

            {/* generate video button here... */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <VideoIcon className="size-24" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Video</h3>
              <p className="text-sm text-gray-400 mb-6">
                Generate a video from the image.
              </p>
              {!project.generatedVideo ? (
                <PrimaryButton onClick={handleGeneratedVideo} disabled={isGenerating} className="w-full">

                  {isGenerating ? (
                    <><Loader2Icon className="animate-spin text-white size-4" />Generating</>
                  ) : (
                    <><SparkleIcon className="size-4" />Generate video</>
                  )}
                </PrimaryButton>
              ) : (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm font-medium">
                  video generated successfully!
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Result