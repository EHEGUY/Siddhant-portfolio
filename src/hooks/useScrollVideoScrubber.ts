import { useState, useEffect, useRef, useCallback } from "react";

interface ScrubberOptions {
  containerRef: React.RefObject<HTMLElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  lerpFactor?: number;
  scenesCount?: number;
}

export function useScrollVideoScrubber({
  containerRef,
  videoRef,
  lerpFactor = 0.08,
  scenesCount = 4,
}: ScrubberOptions) {
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState(8.33);

  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const isSeekingRef = useRef(false);
  const pendingTimeRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  // Safe seek handler with queue lock to prevent decoder choke
  const seekVideo = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const targetTime = Math.max(0, Math.min(time, video.duration - 0.05));

    // If difference is sub-millisecond, ignore
    if (Math.abs(video.currentTime - targetTime) < 0.02) return;

    if (isSeekingRef.current) {
      pendingTimeRef.current = targetTime;
      return;
    }

    isSeekingRef.current = true;
    try {
      if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
        (video as any).fastSeek(targetTime);
      } else {
        video.currentTime = targetTime;
      }
    } catch {
      video.currentTime = targetTime;
    }
  }, [videoRef]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
        setIsReady(true);
      }
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (pendingTimeRef.current !== null) {
        const nextTime = pendingTimeRef.current;
        pendingTimeRef.current = null;
        seekVideo(nextTime);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [videoRef, seekVideo]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const containerTop = rect.top + scrollY;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = Math.max(0, scrollY - containerTop);
      const raw = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      targetProgressRef.current = raw;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [containerRef]);

  // rAF Physics Render Loop
  useEffect(() => {
    isMountedRef.current = true;

    // Adjust lerp on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const activeLerp = isMobile ? 0.16 : lerpFactor;

    const updateLoop = () => {
      if (!isMountedRef.current) return;

      const target = targetProgressRef.current;
      const current = smoothProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0004) {
        const nextVal = current + diff * activeLerp;
        smoothProgressRef.current = nextVal;
        setProgress(nextVal);

        // Calculate active scene
        const sceneSize = 1 / scenesCount;
        const sIndex = Math.min(scenesCount - 1, Math.floor(nextVal / sceneSize));
        const sProg = (nextVal - sIndex * sceneSize) / sceneSize;

        setActiveScene(sIndex);
        setSceneProgress(sProg);

        // Seek video
        const video = videoRef.current;
        if (video && video.duration && !isNaN(video.duration)) {
          seekVideo(nextVal * video.duration);
        }
      }

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      isMountedRef.current = false;
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [lerpFactor, scenesCount, videoRef, seekVideo]);

  return {
    progress,
    activeScene,
    sceneProgress,
    isReady,
    duration,
  };
}
