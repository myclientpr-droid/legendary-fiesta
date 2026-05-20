"use client";

import { IoShareSocial } from "react-icons/io5";
import { handleShare } from "@/utils/share";

const ShareButton = ({
  title,
  text,
  slug,
  path,
  className = "",
  iconSize = 20,
}) => {
  const onShare = async () => {
    await handleShare({
      title,
      text,
      slug,
      path,
    });
  };

  return (
    <button
      onClick={onShare}
      type="button"
      aria-label="Share"
      className={`
        flex items-center justify-center
        text-gray-500 hover:text-primary-600
        transition-all duration-200
        hover:scale-110
        active:scale-95
        ${className}
      `}
    >
      <IoShareSocial size={iconSize} />
    </button>
  );
};

export default ShareButton;