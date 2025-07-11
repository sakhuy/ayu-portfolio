import Link from "next/link"
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-12 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <Image
                            src="/ayu-navbar.png" // <- ganti sesuai path
                            alt="ayu"
                            width={50}
                            height={50}
                            priority
                          />
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
