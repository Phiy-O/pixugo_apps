"use client"
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Play, SkipBack, SkipForward, Volume2, Music, Pause } from "lucide-react";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastUpdateRef = useRef(0);

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;

        const now = Date.now();
        if (now - lastUpdateRef.current < 250) return; // 4x per detik

        lastUpdateRef.current = now;

        const current = audioRef.current.currentTime;
        const dur = audioRef.current.duration;

        setCurrentTime(current);
        setProgress((current / dur) * 100);
    };

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.loop = true;
        audioRef.current.volume = 0.2;

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);


    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            const seconds = audioRef.current.duration;
            if (!isNaN(seconds) && isFinite(seconds)) {
                setDuration(seconds);
            }
        }
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }

        setIsPlaying(!isPlaying)
    };

    return (
        <div className="
            w-[420px] max-w-md mx-auto
            bg-[#FDF6E3] border-4 border-[#3E3A2D] 
            rounded-lg
            p-2
            flex items-center gap-3
            absolute bottom-4 left-0
        ">

            {/* 1. KIRI: COVER ART / ICON (Kotak Kecil) */}
            <div className="
                shrink-0 h-14 w-14 
                bg-[#3E3A2D] border-2 border-[#3E3A2D] rounded 
                flex items-center justify-center 
                relative overflow-hidden
            ">
                {/* Hiasan Visualizer Simpel */}
                <div className="flex items-center gap-1 h-8">
                    <img className='object-cover image-rendering-[pixelated]' src="https://i.pinimg.com/736x/86/34/a6/8634a62a33a16261d4a61fb57ad0b955.jpg" alt="audio-img" />
                </div>
            </div>

            {/* 2. TENGAH: INFO & PROGRESS (Flexible Width) */}
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                {/* Title & Artist */}
                <div className="flex flex-col items-start mb-1">
                    <div className="truncate">
                        <h3 className="text-sm font-black text-[#3E3A2D] uppercase leading-none">
                            Cozy Lofi
                        </h3>
                        <p className="text-[10px] font-bold text-[#8B5E3C] uppercase tracking-wider">
                            Audio Player
                        </p>
                    </div>
                    <div className='flex w-full text-center text-[#3E3A2D] justify-between text-sm'>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Custom Pixel Progress Bar */}
                <div className="h-4 w-full bg-[#E6DCC3] border-2 border-[#3E3A2D] relative rounded-sm">
                    {/* Fill Bar */}
                    <div className={`absolute top-0 left-0 h-full bg-[#6CBF84] border-r-2 border-[#3E3A2D]`} style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            {/* 3. KANAN: CONTROLS (Buttons) */}
            <div className="flex items-center gap-2 pl-2 border-l-2 border-[#E6DCC3]">

                {/* Tombol PLAY Utama (Lebih Menonjol) */}
                <button onClick={handlePlayPause} className="
                    h-10 w-10 
                    bg-[#3E3A2D] hover:bg-[#2a271f]
                    text-[#FDF6E3]
                    rounded shadow-[2px_2px_0px_#8B5E3C] 
                    active:translate-y-0.5 active:shadow-none
                    flex items-center justify-center transition-all
                ">
                    {isPlaying ? <Pause size={18} fill="#FDF6E3" /> : <Play size={18} fill="#FDF6E3" />}

                </button>

            </div>
            <audio
                ref={audioRef}
                src="/music/cozy-lofi-relax-468509.mp3"
                preload='metadata'
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
        </div>
    )
}