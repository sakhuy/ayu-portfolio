import { projectsData } from "@/data/projects"
import ProjectCard from "@/components/ui/project-card"
import Image from "next/image";

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#F5D7D7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
            <Image
            src="/projects.png" // <- ganti sesuai path
            alt="projects"
            width={300}
            height={500}
            priority
            />
        </div>

        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
