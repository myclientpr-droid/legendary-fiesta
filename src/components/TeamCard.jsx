import Image from "next/image";
import { Facebook, Youtube, Instagram, Linkedin, Link2 } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const PLATFORMS = [
  { icon: Facebook, label: "Facebook", color: "#1877F2", hosts: ["facebook.com", "fb.com"] },
  { icon: Youtube, label: "YouTube", color: "#FF0000", hosts: ["youtube.com", "youtu.be"] },
  { icon: Instagram, label: "Instagram", color: "#E4405F", hosts: ["instagram.com"] },
  { icon: Linkedin, label: "LinkedIn", color: "#0A66C2", hosts: ["linkedin.com"] },
  { icon: FaSquareXTwitter, label: "X", color: "#0F1419", hosts: ["x.com", "twitter.com"] },
  { icon: AiFillTikTok, label: "TikTok", color: "#0F1419", hosts: ["tiktok.com"] },
];

const getPlatform = (link = "") => {
  const value = link.toLowerCase();
  return PLATFORMS.find((platform) => platform.hosts.some((host) => value.includes(host)));
};

// Each card gets its own cheerful gradient; `text` is the readable shade for labels.
const PALETTES = [
  { from: '#6366f1', to: '#38bdf8', text: '#4338ca' },
  { from: '#fb7185', to: '#fbbf24', text: '#be123c' },
  { from: '#34d399', to: '#22d3ee', text: '#047857' },
  { from: '#a78bfa', to: '#f472b6', text: '#7c3aed' },
  { from: '#fbbf24', to: '#fb923c', text: '#b45309' },
  { from: '#38bdf8', to: '#818cf8', text: '#0369a1' },
];

const INSTAGRAM_GRADIENT = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';

const TeamCard = ({ member, index = 0 }) => {
  const platform = getPlatform(member.socialLink);
  const SocialIcon = platform?.icon || Link2;
  const accent = PALETTES[index % PALETTES.length];
  const connectBackground = platform?.label === 'Instagram' ? INSTAGRAM_GRADIENT : platform?.color;

  return (
    <div className="card group relative flex h-full flex-col items-center overflow-hidden p-4 text-center sm:p-6">

      {/* Soft colour wash behind the avatar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-40 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
        style={{ background: `radial-gradient(55% 100% at 50% 0%, ${accent.from}66, transparent 70%)` }}
      />

      {/* Avatar with gradient ring */}
      <div
        className="relative mb-3 rounded-full p-[3px] shadow-md transition-transform duration-300 group-hover:scale-105 sm:mb-4"
        style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
      >
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white sm:h-24 sm:w-24 lg:h-28 lg:w-28">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
            className="object-cover"
          />
        </div>
      </div>

      <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-900 break-words sm:text-lg">
        {member.name}
      </h3>

      {member.position && (
        <span
          className="mb-3 inline-block max-w-full rounded-full px-3 py-1 text-[11px] font-semibold leading-snug break-words sm:mb-4 sm:text-xs"
          style={{ backgroundColor: `${accent.from}1f`, color: accent.text }}
        >
          {member.position}
        </span>
      )}

      {member.socialLink && (
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on ${platform?.label || "social media"}`}
          className="mt-auto inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          style={{
            background: connectBackground || `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
          }}
        >
          <SocialIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          Connect
        </a>
      )}

      {/* Colourful footer accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
      />
    </div>
  );
};

export default TeamCard;
