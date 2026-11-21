"use client";

import { useState, useRef, useEffect } from "react";

const playlist = [
  "/when-mother-was-there.mp3",
  "/beneath-the-mask.mp3"
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  // NEW: State to keep track of the volume (0 to 1)
  const [volume, setVolume] = useState(0.5); 
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem("hasEnteredSite");
    if (hasEntered === "true") {
      setIsPlaying(true);
      audioRef.current?.play().catch(() => setIsPlaying(false));
    }
  }, []);

  // NEW: Function to handle the slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume); // Update React state
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Update the actual audio element
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    if (isPlaying) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={playlist[currentTrackIndex]} 
        onEnded={nextTrack} 
      />
      
      {/* Changed layout slightly to fit the slider */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/80 p-3 rounded-full border-2 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
        
        {/* NEW: Volume Slider */}
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="w-24 accent-red-600 cursor-pointer"
          title="Volume"
        />

        <button 
          onClick={nextTrack}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-transform hover:scale-110 font-bold text-lg"
        >
          ⏭
        </button>
        
        <button 
          onClick={togglePlay}
          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition-transform hover:scale-110 text-lg"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      </div>
    </>
  );
}