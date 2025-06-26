export interface Project {
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

export const projectsData: Project[] = [
  {
    id: "meari-bakery",
    title: "Meari\nBakery",
    subtitle: "Content Production",
    timeline: "Content Production | Oct - Dec 2024",
    description:
      "Collaborated with Meari Bakery, a local home bakery, to help improve their digital presence. Our focus was on branding and social media strategy.",
    tasks: [
      "Product photography",
      "Social media trend research",
      "Photo & video editing",
      "Content creation for Instagram",
    ],
    images: [
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Brownies bite product",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Burnt cheesecake story",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Meari Bakery branding 2021",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Preorder weekend cheesecake",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "CapCut"],
  },
  // Anda bisa menambahkan project lain di sini
  {
    id: "sulam-memori",
    title: "Sulam\nMemori",
    subtitle: "Social Media Strategy",
    timeline: "Content Production | Aug - Dec 2024",
    description:
      "In this final project event, I led the external affairs division and was also involved in producing storytelling-based video content to support the event’s narrative and promotion.",
    tasks: [
      "Developing story-driven video concepts",
      "Producing and editing event-related video content",
      "Highlighting emotional & memorable moments through visual storytelling",
    ],
    images: [
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Campaign poster design",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Instagram story templates",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Social media analytics",
      },
      {
        src: "/placeholder.svg?height=200&width=200",
        alt: "Brand guidelines",
      },
    ],
    tools: ["Figma", "Canva", "Google Analytics"],
  },
]
