import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  subtitle: string
  timeline: string
  description: string
  tasks: string[]
  images: {
    src: string
    alt: string
    link?: string
  }[]
  tools: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full bg-[#F5D7D7] rounded-2xl px-6 py-12">
      <div className="grid lg:grid-cols-6 gap-12 items-start max-w-7xl mx-auto">
        
        {/* Deskripsi Kiri */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h3 className="text-5xl font-stix text-gray-900 italic font-serif leading-none whitespace-pre-line">
            {project.title}
          </h3>
          <p className="text-lg text-gray-700 font-medium">{project.timeline}</p>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>

          <div className="space-y-2">
            <p className="font-semibold text-gray-900">I worked on:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-0">
              {project.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gambar & Tools */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 lg:gap-6">
            {project.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="bg-[#C7D438] rounded-2xl p-2.5 group overflow-hidden"
              >
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[9/16] rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            {project.tools.map((tool, toolIndex) => (
              <Button
                key={toolIndex}
                variant="outline"
                className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-8 py-2 text-base"
              >
                {tool}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
