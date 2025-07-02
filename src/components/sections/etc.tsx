import { etcProjectsData } from "@/data/etc"
import ETCCard from "@/components/ui/etc-card"

export default function ETC() {
  return (
    <section className="min-h-screen bg-[#DBE9AC] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="space-y-24">
          {etcProjectsData.map((project, index) => (
            <ETCCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
