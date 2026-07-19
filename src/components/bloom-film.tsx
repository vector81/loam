"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function BloomFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isNearViewport = useInView(videoRef, {
    once: true,
    margin: "400px 0px",
  });
  const shouldLoad = isNearViewport && !shouldReduceMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();
    void video.play().catch(() => {
      // Browser autoplay policies can still block playback in unusual setups.
    });
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay={shouldLoad}
      loop
      muted
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      poster="/loam-bloom-film-poster-v2.jpg"
      aria-hidden="true"
      tabIndex={-1}
    >
      {shouldLoad ? (
        <source src="/loam-bloom-film-v2.mp4" type="video/mp4" />
      ) : null}
      Your browser does not support background video.
    </video>
  );
}
