import Image from "next/image";
import { Music2, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Home() {
  const socialLinks = [
    {
      name: "TikTok",
      username: "@salah_haciakil",
      icon: Music2,
      url: "https://tiktok.com/@salah_haciakil",
    },
    {
      name: "Instagram",
      username: "@salah_haciakil",
      icon: Instagram,
      url: "https://instagram.com/salah_haciakil",
    },
    {
      name: "YouTube",
      username: "@Salah_Haciakil",
      icon: Youtube,
      url: "https://youtube.com/@Salah_Haciakil",
    },
    {
      name: "LinkedIn",
      username: "/in/salahhaciakil",
      icon: Linkedin,
      url: "https://linkedin.com/in/salahhaciakil",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Ambient glow effect */}
      <div className="pointer-events-none absolute inset-0 glow-bg" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <main className="w-full max-w-md">
          {/* Profile Section */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="relative mb-4 inline-block">
              <div className="h-28 w-28 rounded-full bg-linear-to-br from-orange-600 to-orange-600/50 p-1 shadow-glow">
                <Image
                  src="/profile.webp"
                  alt="Salah Haciakil"
                  width={112}
                  height={112}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Salah Haciakil</h1>
              <p className="mx-auto max-w-xs text-base text-gray-400">
                Creator • Developer • Dreamer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-8 space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-gray-800/80 bg-gray-900/40 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-gray-800/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/80 transition-colors duration-300 group-hover:bg-gray-700">
                      <Icon className="h-5 w-5 text-gray-300" />
                    </div>
                    <div className="flex-1 text-left">
                      <h2 className="text-base font-semibold text-white">
                        {link.name}
                      </h2>
                      <p className="text-xs text-gray-400">{link.username}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="pt-8 text-center">
            <p className="text-sm text-gray-400">
              Let&apos;s connect <span className="inline-block">✨</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
