import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Info, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingMusicPlayer({ songTitle, songArtist, songUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play request interrupted or blocked:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration || 1;
      setProgress((current / total) * 100);
      setDuration(total);
    }
  };

  const handleSeek = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={songUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Floating Mini Player on Bottom-Right */}
      <div className="fixed bottom-5 right-5 z-40 select-none">
        <motion.div
          layout
          className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DDD4] p-3 text-scrapbook-brown transition-all"
        >
          <div className="flex items-center gap-3">
            {/* Spinning Vinyl / Disc Icon */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label="Toggle player detail"
              className="relative w-10 h-10 rounded-full bg-[#4A3532] text-[#FFF8F2] flex items-center justify-center shadow-md overflow-hidden group cursor-pointer"
            >
              <div
                className={`w-full h-full flex items-center justify-center transition-transform ${
                  isPlaying ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '4s' }}
              >
                <div className="w-3.5 h-3.5 rounded-full border border-stone-400 bg-scrapbook-rose flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
              <div className="absolute inset-0 border border-white/20 rounded-full pointer-events-none" />
            </button>

            {/* Song Info */}
            <div 
              className="cursor-pointer max-w-[130px] sm:max-w-[160px]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center gap-1.5">
                <Heart className="w-3 h-3 fill-[#C98291] text-[#C98291] shrink-0" />
                <span className="font-serif font-semibold text-xs truncate">
                  {songTitle || 'Our Song'}
                </span>
              </div>
              <p className="font-handwriting text-xs text-scrapbook-brown/70 truncate">
                {songArtist || 'Sweet Melody'}
              </p>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-8 h-8 rounded-full bg-scrapbook-rose text-white flex items-center justify-center shadow-sm hover:bg-scrapbook-roseDark hover:scale-105 active:scale-95 transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {/* Replacement helper tooltip button */}
            <button
              onClick={() => setShowTooltip(!showTooltip)}
              title="How to use custom music"
              aria-label="Music guide"
              className="text-stone-400 hover:text-scrapbook-rose transition-colors p-1"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

          {/* Expanded Controls (Scrubber, Volume) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-3 mt-2 border-t border-[#F0E4DB] space-y-2"
              >
                {/* Progress bar */}
                <div className="space-y-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-scrapbook-rose"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>{formatTime(audioRef.current?.currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Volume slider */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-stone-500 hover:text-scrapbook-rose"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-20 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-scrapbook-rose"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Music Replacement Info Popover */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-72 bg-[#FFFDF9] border border-[#E8DDD4] p-3.5 rounded-xl shadow-2xl text-xs text-scrapbook-brown space-y-1.5"
            >
              <div className="flex items-center justify-between font-serif font-bold text-scrapbook-rose">
                <span>Replace with your song 🎵</span>
                <button onClick={() => setShowTooltip(false)} className="text-stone-400 hover:text-stone-700">✕</button>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-600">
                You can place your audio file (e.g. <code className="bg-stone-100 px-1 py-0.5 rounded text-pink-700">our-song.mp3</code>) in the <code className="bg-stone-100 px-1 py-0.5 rounded">public/</code> folder, then update <code className="bg-stone-100 px-1 py-0.5 rounded text-pink-700">songUrl: "/our-song.mp3"</code> in <code className="bg-stone-100 px-1 py-0.5 rounded">src/data/memories.js</code>!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
