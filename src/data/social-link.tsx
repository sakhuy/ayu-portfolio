import { JSX } from "react"

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: JSX.Element
}

export const socialLinks: SocialLink[] = [
  {
    id: "cv",
    label: "Curriculum Vitae",
    href: "https://drive.google.com/file/d/1hixGkdJIdPldeE7v4djdKIby7TI5ddMU/view?usp=share_link",
    icon: (
      <svg className="w-4 h-4 mr-2" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayujoyoatmojo/",
    icon: (
      <svg className="w-4 h-4 mr-2" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "E-mail",
    href: "mailto:ayunurainijoyoatmojo@gmail.com",
    icon: (
      <svg className="w-4 h-4 mr-2" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ayujoyoatmojo/",
    icon: (
      <svg className="w-4 h-4 mr-2" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="currentColor" />
      </svg>
    ),
  },
]
