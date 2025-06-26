import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        {/* Letakkan foto pacar Anda di folder public */}
        <Image
          src="/foto-profil.jpg" // Ganti dengan nama file foto Anda
          alt="Foto Profil Pacar Saya"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 border-4 border-pink-300"
        />

        <h1 className="text-4xl font-bold text-gray-800">
          Nama Pacar Anda
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          UI/UX Designer & Web Developer
        </p>
        <p className="max-w-xl mx-auto mt-4 text-gray-700">
          Halo! Saya adalah seorang desainer kreatif dengan passion untuk menciptakan pengalaman pengguna yang intuitif dan indah.
        </p>

        <div className="mt-8">
          <a
            href="mailto:emailpacaranda@example.com"
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </main>
  );
}