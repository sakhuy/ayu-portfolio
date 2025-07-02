export interface ETCProject {
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

export const etcProjectsData: ETCProject[] = [
  {
    id: "photo-edits-collection",
    title: "ETC",
    description: [
      "A curated collection of my photo edits, combining organizational content, personal creative experiments, and selected coursework. Some were made to support communication needs in student organizations, others were part of class assignments that explored visual storytelling and design principles.",
      "Each piece reflects my interest in composition, color, and how visuals can communicate mood and meaning across different contexts.",
    ],
    showcases: [
      {
        type: "grid",
        images: [
          {
            src: "/images/projects/etc1.png",
            alt: "Calling Out to All Supernoise poster design",
          },
          {
            src: "/images/projects/etc2.png",
            alt: "Jakarta magazine cover design",
          },
          {
            src: "/images/projects/etc3.png",
            alt: "Final Exam schedule design",
          },
        ],
        tools: ["Adobe Photoshop"],
      },
      {
        type: "wide",
        images: [
          {
            src: "/images/projects/etc4.png",
            alt: "Sports photography collage - volleyball team moments",
          },
        ],
        tools: ["Photography", "Canva"],
      },
      {
        type: "wide",
        images: [
          {
            src: "/images/projects/etc5.png",
            alt: "Magazine layout design - Wait, Blok M arketing editorial spread",
          },
        ],
        tools: ["Adobe Illustrator"],
      },
    ],
  },
]
