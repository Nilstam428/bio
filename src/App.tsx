import linksData from './links.json';
import { FaLinkedinIn } from "react-icons/fa";
import {
  SiBluesky,
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiX,
  SiYoutube,
} from "react-icons/si";
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  youtube: SiYoutube,
  twitter: SiX,
  instagram: SiInstagram,
  facebook: SiFacebook,
  threads: SiThreads,
  bluesky: SiBluesky,
  linkedin: FaLinkedinIn,
};

function App() {
  const { profile, links, socials } = linksData;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-orange-500 shadow-2xl ring-4 ring-black/10">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold tracking-tight mb-1">{profile.name}</h1>
          <p className="text-white/80 font-normal text-[0.95rem]">{profile.bio}</p>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-3.5 mb-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full bg-white text-zinc-900 py-[18px] px-6 rounded-full flex items-center justify-center text-center font-semibold text-[0.95rem] transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-50 shadow-lg active:scale-[0.98]"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Socials Section */}
        <div className="flex items-center justify-center gap-6 mt-2">
          {socials.map((social) => {
            const Icon = iconMap[social.platform];
            if (!Icon) return null;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-white transition-all hover:text-white/70 hover:scale-110"
                aria-label={social.platform}
              >
                <Icon size={30} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
