import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ETCProject {
  id: string
  title: string
  description: string[]
  showcases: {
    type: "grid" | "wide" | "single"
    images: {
      src: string
      alt: string
    }[]
    tools: string[]
  }[]
}

interface ETCCardProps {
  project: ETCProject
  index: number
}

export default function ETCCard({ project }: ETCCardProps) {
  return (
    <div className="w-full bg-[#DBE9AC] rounded-2xl px-6 py-12">
      <div className="grid lg:grid-cols-6 gap-12 items-start max-w-7xl mx-auto">
        {/* Deskripsi Kiri */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h3 className="text-5xl font-stix text-gray-900 italic font-serif leading-none">
            {project.title}
          </h3>
          <div className="space-y-4">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Gambar dan Tools */}
        <div className="lg:col-span-4 space-y-10">
          {project.showcases.map((showcase, index) => (
            <div key={index} className="space-y-4">
              {/* Gambar */}
              {showcase.type === "grid" && (
                <div className="grid grid-cols-3 gap-4">
                  {showcase.images.map((image, imgIdx) => (
                    <div key={imgIdx} className="bg-[#C7D438] rounded-2xl p-2.5 overflow-hidden aspect-[9/16]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={400}
                        className="object-contain w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              {showcase.type === "wide" && (
                <div className="bg-[#C7D438] rounded-2xl p-4">
                  {showcase.images.map((image, imgIdx) => (
                    <Image
                      key={imgIdx}
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={300}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              {showcase.type === "single" && (
                <div className="bg-[#C7D438] rounded-2xl p-4">
                  {showcase.images.map((image, imgIdx) => (
                    <Image
                      key={imgIdx}
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              {/* Tools */}
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {showcase.tools.map((tool, toolIdx) => (
                  <Button
                    key={toolIdx}
                    variant="outline"
                    className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-6 py-2"
                  >
                    {tool}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
