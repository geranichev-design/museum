import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface VideoLightboxProps {
  src: string;
  onClose: () => void;
  autoPlay?: boolean;
}

function formatTime(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function VideoLightbox({ src, onClose, autoPlay = false }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); togglePlay(); }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v) setCurrentTime(v.currentTime);
  };

  const handleLoaded = () => {
    const v = videoRef.current;
    if (v) setDuration(v.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    const val = Number(e.target.value);
    if (!v) return;
    v.volume = val;
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !autoPlay) return;

    v.muted = false;
    v.volume = volume;
    void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [autoPlay, volume]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "rgba(20,20,20,0.96)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-[20px] right-[24px] text-white hover:text-[#dfbe22] transition-colors z-10"
        aria-label="Закрити"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 6L26 26M26 6L6 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Video + controls wrapper */}
      <div
        className="flex flex-col w-full px-[16px] md:px-[80px]"
        style={{ maxWidth: 1100 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoaded}
            onEnded={() => setPlaying(false)}
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          />

          {/* Big play overlay when paused */}
          {!playing && (
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={togglePlay}
              aria-label="Відтворити"
            >
              <div className="flex items-center justify-center w-[72px] h-[72px] bg-black/60 rounded-full border-2 border-white hover:border-[#dfbe22] hover:text-[#dfbe22] text-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Controls bar */}
        <div className="flex flex-col gap-[8px] bg-black px-[12px] md:px-[16px] py-[10px]">
          {/* Seek bar */}
          <div className="relative w-full h-[4px] bg-white/20 group cursor-pointer">
            <div className="absolute left-0 top-0 h-full bg-[#dfbe22]" style={{ width: `${progress}%` }} />
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
              style={{ margin: 0 }}
            />
          </div>

          {/* Bottom row */}
          <div className="flex items-center gap-[12px]">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-[#dfbe22] transition-colors shrink-0"
              aria-label={playing ? "Пауза" : "Відтворити"}
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Time */}
            <span className="font-['Montserrat',sans-serif] text-white text-[12px] tabular-nums shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Volume */}
            <div className="relative flex items-center gap-[6px]">
              <button
                onClick={toggleMute}
                onMouseEnter={() => setShowVolume(true)}
                onMouseLeave={() => setShowVolume(false)}
                className="text-white hover:text-[#dfbe22] transition-colors shrink-0"
                aria-label={muted ? "Увімкнути звук" : "Вимкнути звук"}
              >
                {muted || volume === 0 ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>

              {/* Volume slider */}
              <div
                className={`overflow-hidden transition-all duration-200 ${showVolume ? "w-[72px] opacity-100" : "w-0 opacity-0"}`}
                onMouseEnter={() => setShowVolume(true)}
                onMouseLeave={() => setShowVolume(false)}
              >
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="w-[72px] accent-[#dfbe22] cursor-pointer"
                  style={{ display: "block" }}
                />
              </div>
            </div>

            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-[#dfbe22] transition-colors shrink-0"
              aria-label="Повноекранний режим"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M8 21H5a2 2 0 0 0-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
