import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Music } from "lucide-react";

export default function AudioPlayer() {
    return (
        // --- CONTAINER UTAMA (Compact Bar) ---
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
                <div className="flex justify-between items-end mb-1">
                    <div className="truncate">
                        <h3 className="text-sm font-black text-[#3E3A2D] uppercase leading-none">
                            Cozy Lofi
                        </h3>
                        <p className="text-[10px] font-bold text-[#8B5E3C] uppercase tracking-wider">
                            Audio Player
                        </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#3E3A2D]">
                        02:15
                    </span>
                </div>

                {/* Custom Pixel Progress Bar */}
                <div className="h-4 w-full bg-[#E6DCC3] border-2 border-[#3E3A2D] relative rounded-sm">
                    {/* Fill Bar */}
                    <div className="absolute top-0 left-0 h-full w-[40%] bg-[#6CBF84] border-r-2 border-[#3E3A2D]"></div>
                </div>
            </div>

            {/* 3. KANAN: CONTROLS (Buttons) */}
            <div className="flex items-center gap-2 pl-2 border-l-2 border-[#E6DCC3]">

                {/* Tombol Back Kecil
                <button className="
            group h-8 w-8 
            flex items-center justify-center 
            hover:bg-[#EED9A6] rounded transition-colors
        ">
                    <SkipBack size={16} className="fill-[#3E3A2D] text-[#3E3A2D]" />
                </button> */}

                {/* Tombol PLAY Utama (Lebih Menonjol) */}
                <button className="
            h-10 w-10 
            bg-[#3E3A2D] hover:bg-[#2a271f]
            text-[#FDF6E3]
            rounded shadow-[2px_2px_0px_#8B5E3C] 
            active:translate-y-0.5 active:shadow-none
            flex items-center justify-center transition-all
        ">
                    <Play size={18} fill="#FDF6E3" />
                </button>

                {/* Tombol Next Kecil
                <button className="
            group h-8 w-8 
            flex items-center justify-center 
            hover:bg-[#EED9A6] rounded transition-colors
        ">
                    <SkipForward size={16} className="fill-[#3E3A2D] text-[#3E3A2D]" />
                </button> */}

            </div>
        </div>
    )
}