"use client"
import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react'; // Pastikan install lucide-react

export default function BubbleMessage() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsMounted(false);
        setTimeout(() => setIsVisible(false), 300);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`
                fixed top-6 left-6 z-50
                flex items-start gap-4 ml-12
                max-w-lg
                transition-all duration-500 ease-out
                ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
            `}
        >
            {/* --- 1. THE AVATAR (NPC) --- */}
            {/* Karakter yang "berbicara". Dibuat melayang (floating animation) */}
            <div className={`
                relative shrink-0 z-10
                transition-transform duration-700 ease-in-out
                ${isMounted ? "translate-x-0" : "-translate-x-4"}
            `}>
                <div className="
                    w-20 h-20 
                    bg-[#EED9A6] 
                    rounded-full 
                    border-4 border-[#3E3A2D] 
                    shadow-[4px_4px_0px_rgba(62,58,45,0.3)]
                    overflow-hidden
                    flex items-center justify-center
                    animate-bounce-slow /* Custom animation agar terlihat hidup */
                ">
                    {/* Placeholder Image/Icon */}
                    <img
                        src="/images/avatar-img.jpeg" // Ganti dengan gambar NPC/Mascot kamu
                        alt="NPC"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Status Indicator (Exclamation Mark) */}
                <div className="absolute -top-1 -right-1 bg-[#D95763] text-white w-6 h-6 rounded-full border-2 border-[#3E3A2D] flex items-center justify-center font-black text-xs animate-bounce">
                    !
                </div>
            </div>

            {/* --- 2. THE SPEECH BUBBLE --- */}
            <div className="relative pt-2">

                {/* Segitiga Ekor (Tail) Bubble */}
                <div className="
                    absolute top-6 -left-3 
                    w-0 h-0 
                    border-t-[12px] border-t-transparent
                    border-r-[16px] border-r-[#3E3A2D] /* Warna Border Luar */
                    border-b-[12px] border-b-transparent
                ">
                    {/* Inner Tail (Warna Background) untuk menutupi border */}
                    <div className="
                        absolute -top-[9px] left-[3px]
                        w-0 h-0 
                        border-t-[9px] border-t-transparent
                        border-r-[12px] border-r-[#FDF6E3] 
                        border-b-[9px] border-b-transparent
                    "></div>
                </div>

                {/* Kotak Utama Bubble */}
                <div className={`
                    bg-[#FDF6E3] 
                    border-4 border-[#3E3A2D] 
                    rounded-2xl rounded-tl-none /* Sudut kiri atas lancip dekat mulut */
                    p-5
                    shadow-[6px_6px_0px_rgba(62,58,45,0.2)]
                    relative
                    transition-all duration-500 delay-100
                    ${isMounted ? "scale-100 opacity-100" : "scale-90 opacity-0"}
                `}>

                    {/* Header: Nama Pembicara */}
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[#D95763] font-black uppercase text-xs tracking-widest bg-[#D95763]/10 px-2 py-0.5 rounded border border-[#D95763]/20">
                            Guide Bot
                        </span>

                        {/* Tombol Close Minimalis */}
                        <button
                            onClick={handleClose}
                            className="text-[#8B5E3C] hover:text-[#D95763] transition-colors"
                        >
                            <X size={16} strokeWidth={3} />
                        </button>
                    </div>

                    {/* Isi Pesan */}
                    <h3 className="text-lg font-black text-[#3E3A2D] mb-1 leading-tight">
                        Welcome Back, Phiy-O!
                    </h3>
                    <p className="text-sm font-medium text-[#5A4D3B] leading-relaxed mb-4">
                        I see you've returned. Ready to complete some quests today? Don't forget to check your daily streak!
                    </p>

                    {/* Action Buttons (Inline) */}
                    <div className="flex gap-2 justify-end">
                        <button
                            onClick={handleClose}
                            className="
                                text-xs font-bold uppercase text-[#8B5E3C] px-3 py-2 
                                hover:bg-[#E6DCC3] rounded transition-colors
                            "
                        >
                            Dismiss
                        </button>
                        <button className="
                            bg-[#3E3A2D] text-[#EED9A6] 
                            text-xs font-bold uppercase tracking-wide
                            px-4 py-2 rounded-lg
                            border-b-4 border-black/30
                            active:border-b-0 active:translate-y-0.5
                            transition-all hover:brightness-110
                            flex items-center gap-2
                        ">
                            Let's Go <MessageCircle size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}