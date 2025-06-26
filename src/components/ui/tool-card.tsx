import Image from "next/image"

interface Tool {
  name: string
  icon: string
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
        <Image
          src={tool.icon || "/placeholder.svg"}
          alt={tool.name}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>
      <p className="text-lg font-semibold text-gray-900 text-center">{tool.name}</p>
    </div>
  )
}
