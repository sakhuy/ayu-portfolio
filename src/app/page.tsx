import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import Tools from "@/components/sections/tools"
import Projects from "@/components/sections/projects"
import Etc from "@/components/sections/etc"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tools />
      <Projects />
      <Etc />
    </main>
  )
}
