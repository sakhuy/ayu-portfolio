import ToolCard from "@/components/ui/tool-card"
import { toolsData } from "@/data/tools"

export default function Tools() {
  return (
    <section className="min-h-screen bg-[#DBE9AC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-3">Tools</h2>

        <div className="space-y-16">
          {toolsData.map((category) => (
            <div key={category.name} className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h3>
              <div className="flex justify-center items-center gap-5 lg:gap-40 flex-wrap">
                {category.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
