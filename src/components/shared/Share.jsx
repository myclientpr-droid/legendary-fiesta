"use client";
import { FaShare, FaWhatsapp, FaLink, FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

const Share = () => {
  const [copied, setCopied] = useState(false);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Aurbina Scholars Hub",
        text: `Discover Aurbina Scholars Hub — a free learning platform dedicated to education, knowledge sharing, and community growth.`, 
        url: "https://ashedui.vercel.app",
      })
        .then(() => alert("Shared successfully!"))
        .catch((error) => alert("Failed to share!"));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText("https://ashedui.vercel.app")
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((error) => console.error("Error copying link:", error));
    }
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText("https://ashedui.vercel.app")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => console.error("Error copying link:", error));
  };

  return (
    <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="text-lg font-semibold text-white mb-4 text-center flex items-center justify-center">
        <FaShare className="mr-2 text-amber-400" />
        Share Our Platform
      </h2>
      
      <p className="mb-6 text-center text-sm text-slate-400">
        Support free and inclusive education—share this platform with your friends, students, and community.
      </p>
      
      <div className="flex flex-row sm:flex-row flex-wrap justify-center items-center gap-3">
        {/* Web Share Button */}
        <button
          aria-label='Share this website'
          onClick={handleShare}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-primary-500 hover:shadow-lg"
        >
          <FaShare size='18'/>
          <span>Share</span>
        </button>

        {/* WhatsApp Share */}
        <a
          aria-label='Share this website on WhatsApp'
          href={`https://wa.me/?text=${encodeURIComponent(
            `Discover Aurbina Scholars Hub — a free education platform supporting learners and educators with accessible resources.
Visit: https://ashedui.vercel.app`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-emerald-500 hover:shadow-lg"
        >
          <FaWhatsapp size='18'/>
          <span>WhatsApp</span>
        </a>

        {/* Copy Link */}
        <button
          aria-label='Copy website link'
          onClick={copyLink}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-slate-200 backdrop-blur transition hover:bg-white/10"
        >
          {copied ? <FaRegCopy size='18'/> : <FaLink size='18'/>}
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
      
      {copied && (
        <div className="mt-4 text-center">
          <p className="text-green-400 text-sm animate-pulse">✓ Link copied to clipboard!</p>
        </div>
      )}
    </div>
  );
}

export default Share;