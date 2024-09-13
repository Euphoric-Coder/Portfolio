"use client";

// Simple profile picture holder component
const ProfilePicture = ({
  src,
  alt = "Profile Picture",
  size = 150, // Default size in pixels
  className = "", // Optional additional class names
}: {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden bg-white border border-gray-300 shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfilePicture;
