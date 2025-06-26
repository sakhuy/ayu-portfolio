import Image from "next/image"
import { Button } from "@/components/ui/button"

// Interface ini sudah bagus, tidak perlu diubah
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
  }[]
  tools: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // 1. UBAH LAYOUT UTAMA: Dari grid-cols-2 menjadi grid-cols-4 untuk rasio 1:3
    <div className="grid lg:grid-cols-6 gap-12 items-start my-16 lg:my-24">
      
      {/* Kolom Detail Proyek (1/4 bagian) */}
      <div className="lg:col-span-2 space-y-6">
        <h3 className="text-5xl font-bold text-gray-900 italic font-serif leading-tight">
          {project.title}
        </h3>
        <p className="text-lg text-gray-700 font-medium">
          {project.timeline}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {project.description}
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">I worked on:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kolom Gambar & Tombol (3/4 bagian) */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        
        {/* 2. GRID GAMBAR YANG FLEKSIBEL: Bisa untuk 3 atau 4 gambar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {project.images.map((image, imageIndex) => (
            // 3. STYLING ITEM GAMBAR: Disesuaikan dengan referensi
            <div key={imageIndex} className="bg-[#E9EAC3] rounded-2xl p-2.5">
              {/* Parent div untuk menjaga aspek rasio potret seperti HP */}
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill // 4. GUNAKAN 'fill' untuk mengisi container
                  className="object-cover" // object-cover agar gambar tidak gepeng
                />
              </div>
            </div>
          ))}
        </div>

        {/* 5. PENEMPATAN TOMBOL TOOLS: Di bawah grid gambar */}
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
  )
}