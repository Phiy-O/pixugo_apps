"use client";
import React from 'react';
import { Check, Flame } from 'lucide-react';

export default function SimpleTaskCards() {
    return (
        <div className="p-2 bg-[#E6DCC3] min-h-vh50 flex flex-col items-center gap-4">

            {/* 1. KARTU NORMAL (Clean & Crisp) */}
            <div className="
          w-full max-w-md 
          bg-[#FDF6E3] 
          border-l-4 border-l-[#EED9A6] border-y-2 border-r-2 border-[#3E3A2D] /* Border kiri tebal sebagai penanda warna */
          p-3 rounded-lg 
          shadow-[4px_4px_0px_rgba(62,58,45,0.1)] 
          hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#3E3A2D] 
          transition-all cursor-pointer
          flex items-center gap-4
      ">
                {/* Checkbox Simple */}
                <div className="h-6 w-6 rounded border-2 border-[#3E3A2D] bg-white hover:bg-[#EED9A6] transition-colors"></div>

                {/* Text */}
                <div className="flex-1 font-bold text-[#3E3A2D]">
                    Meeting dengan Client
                </div>

                {/* Reward Badge (Minimalis) */}
                <div className="text-xs font-mono font-bold text-[#8B5E3C] bg-[#EED9A6]/50 px-2 py-1 rounded">
                    +50 XP
                </div>
            </div>


            {/* 2. KARTU BOSS / HIGH PRIORITY (Merah & Mendesak) */}
            <div className="
          w-full max-w-md 
          bg-white
          border-l-4 border-l-[#D95763] border-y-2 border-r-2 border-[#3E3A2D]
          p-3 rounded-lg 
          shadow-[4px_4px_0px_rgba(217,87,99,0.2)] 
          hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#D95763] 
          transition-all cursor-pointer
          flex items-center gap-4
      ">
                {/* Checkbox Merah */}
                <div className="h-6 w-6 rounded border-2 border-[#D95763] bg-[#FFF5F5] hover:bg-[#D95763] transition-colors flex items-center justify-center group">
                    {/* Icon api kecil saat di hover */}
                    <Flame size={12} className="text-[#D95763] group-hover:text-white transition-colors" />
                </div>

                <div className="flex-1">
                    <div className="font-bold text-[#3E3A2D]">Fix Critical Bugs</div>
                    {/* Tag kecil tanpa icon ribet */}
                    <div className="text-[10px] font-bold text-[#D95763] uppercase tracking-wider">High Priority</div>
                </div>

                <div className="text-xs font-mono font-bold text-[#D95763] bg-[#D95763]/10 px-2 py-1 rounded border border-[#D95763]/20">
                    BOSS
                </div>
            </div>


            {/* 3. KARTU SELESAI (Redup & Simpel) */}
            <div className="
          w-full max-w-md 
          bg-[#E6DCC3]/50 
          border-2 border-[#8B5E3C]/30
          p-3 rounded-lg 
          flex items-center gap-4 
          select-none
      ">
                {/* Checkbox Centang */}
                <div className="h-6 w-6 rounded bg-[#8B5E3C]/50 border-2 border-transparent flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={4} />
                </div>

                <div className="flex-1 font-bold text-[#3E3A2D]/50 line-through">
                    Minum Air 2 Liter
                </div>

                <div className="text-xs font-mono font-bold text-[#8B5E3C]/50 px-2 py-1">
                    DONE
                </div>
            </div>

        </div>
    );
}