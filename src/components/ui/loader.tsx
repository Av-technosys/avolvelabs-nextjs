  "use client";
  import React from "react";

  export const VideoLoader = () => {
    return (
      <div className="relative flex flex-col items-center justify-center">
        {/* Video Container */}
        <div className="relative h-96 w-96 overflow-hidden rounded-xl ">
          <img
          src="/videos/animationvideo.gif" 
          alt="Loading Animation"
          className="h-full w-full object-contain" // object-cover ki jagah contain use karein taaki GIF kate nahi
        />
        </div>
        
        {/* Optional: Niche text dikhane ke liye */}
   
      </div>
    );
  };