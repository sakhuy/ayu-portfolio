import Image from "next/image";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social-link";
// import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-rose-100 pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 items-center">
          {/* Kiri - Teks */}
          <div className="space-y-8">
            <div className="mb-10">
              <Image
                src="/hello.png" // <- ganti sesuai path
                alt="Hello!"
                width={200}
                height={100}
                priority
              />
            </div>

            <div className="space-y-6 text-xl text-gray-800">
              <p>
                I&apos;m <span className="font-bold">Ayu Joyo Atmojo</span>, a{" "}
                <span className="font-bold">Digital Communication & Media</span> student at the Vocational School of IPB
                University.
              </p>

              <p>
                Deeply passionate about <span className="italic">creativity</span>,{" "}
                <span className="italic">strategy</span> and meaningful <span className="italic">storytelling</span> in
                the digital space.
              </p>

              <p>
                I&apos;m currently building my experience in <span className="font-bold">digital marketing</span> and{" "}
                <span className="font-bold">social media strategy</span>
              </p>
            </div>

            {/* Tombol */}
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                    <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-6"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            viewBox="0 0 25 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M0.190058 29.4135C-0.133863 29.8608 -0.0338285 30.486 0.41349 30.8099C0.860809 31.1339 1.48602 31.0338 1.80994 30.5865L0.190058 29.4135ZM22.9874 0.842009C22.9002 0.296663 22.3874 -0.0746949 21.842 0.012559L12.955 1.43447C12.4097 1.52173 12.0383 2.03456 12.1256 2.57991C12.2128 3.12525 12.7257 3.49661 13.271 3.40936L21.1705 2.14543L22.4345 10.045C22.5217 10.5903 23.0346 10.9617 23.5799 10.8744C24.1253 10.7872 24.4966 10.2743 24.4094 9.72898L22.9874 0.842009ZM1 30L1.80994 30.5865L22.8099 1.58651L22 1L21.1901 0.41349L0.190058 29.4135L1 30Z"
                                fill="currentColor"
                            />
                            </svg>
                        {link.label}
                    </Button>
                    </a>
                ))}
            </div>
          </div>

          {/* Kanan - Foto */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-74 h-100 overflow-hidden"
              style={{
                borderRadius: "50% / 50%",
                transform: "rotate(16.27deg)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotate(-16.27deg)",
                }}
              >
                <Image
                  src="/images/ayu.jpg"
                  alt="Ayu Joyo Atmojo"
                  layout="fill"
                  objectFit="cover"
                  className="scale-200" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
