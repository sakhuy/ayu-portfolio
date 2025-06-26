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
    link?: string
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
        src: "/images/projects/meari.png",
        alt: "Brownies bite product",
        link: "https://www.instagram.com/p/DAaQjuITYFM/",
      },
      {
        src: "/images/projects/meari2.png",
        alt: "Burnt cheesecake story",
        link: "https://drive.google.com/drive/folders/15bBnrPUBO31tMTOjL7y4eOJ6kPxOBY4j?usp=share_link",
      },
      {
        src: "/images/projects/meari3.png",
        alt: "Preorder weekend cheesecake",
        link: "https://www.instagram.com/p/DAaSMFlT0M5/",
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
        src: "/images/projects/sulam.png",
        alt: "sulam memori",
        link: "https://www.instagram.com/reel/C_xmyr0h189/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        src: "/images/projects/sulam2.png",
        alt: "OST film favorit lu",
        link: "https://www.instagram.com/reel/DBD_z5xyiBx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        src: "/images/projects/sulam3.png",
        alt: "Kesan pesan",
        link: "https://www.instagram.com/reel/DBV-k52yv9N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    tools: ["Capcut", "Canva"],
  },
  {
    id: "comday-61",
    title: "Comday\n61",
    subtitle: "Content Production",
    timeline: "Content Production | Mei - Sept 2024",
    description:
      "As part of the PR team for Comday 61, I was involved in content production to help promote and document the event.",
    tasks: [
      "Producing short-form video content",
      "Editing footage for event teasers and documentation",
      "Supporting the event’s digital presence through social media storytelling",
    ],
    images: [
      {
        src: "/images/projects/comday.png",
        alt: "Alur masuk content",
        link: "https://www.tiktok.com/@comday2024/video/7414293729336446213?is_from_webapp=1&sender_device=pc&web_id=7507489208412882450",
      },
      {
        src: "/images/projects/comday2.png",
        alt: "Make Trending Content",
        link: "https://www.instagram.com/reel/C-O_3Qqog6s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        src: "/images/projects/comday3.png",
        alt: "Rate seminggu jadi Maba KMN",
        link: "https://www.instagram.com/reel/C-0NzlfI1v3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    tools: ["Capcut"],
  },
]
