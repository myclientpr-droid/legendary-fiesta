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
    <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8">
      <h2 className="text-lg font-semibold text-white mb-4 text-center flex items-center justify-center">
        <FaShare className="mr-2 text-amber-400" />
        Share Our Platform
      </h2>
      
      <p className="text-indigo-200 text-center mb-6 text-sm">
        Support free and inclusive education—share this platform with your friends, students, and community.
      </p>
      
      <div className="flex flex-row sm:flex-row flex-wrap justify-center items-center gap-3">
        {/* Web Share Button */}
        <button
          aria-label='Share this website'
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md hover:shadow-lg"
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
          className="flex items-center justify-center gap-2 px-2 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-500 hover:to-emerald-500 transition-all shadow-md hover:shadow-lg"
        >
          <FaWhatsapp size='18'/>
          <span>WhatsApp</span>
        </a>

        {/* Copy Link */}
        <button
          aria-label='Copy website link'
          onClick={copyLink}
          className="flex items-center justify-center gap-2 px-2 py-3 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium hover:from-slate-500 hover:to-slate-600 transition-all shadow-md hover:shadow-lg"
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