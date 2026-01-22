"use client"
import { useState, useEffect } from 'react';

export default function BubbleMessage() {
    const [isVisible, setIsVisible] = useState(true);
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsMounted(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <div 
            className={`
                absolute top-0 left-0 z-50
                w-[420px] max-w-[90vw] mt-4 ml-4
                bg-[#FDF6E3] 
                border-4 border-[#3E3A2D] 
                rounded-xl 
                shadow-[6px_6px_0px_rgba(62,58,45,0.4)] 
                overflow-hidden
                
                /* --- ANIMATION CLASSES --- */
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${isMounted 
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 -translate-x-10 scale-95"
                }
            `}
        >

            {/* --- 1. HEADER --- */}
            <div className="bg-[#EED9A6] px-4 py-2 border-b-2 border-[#D4C5A3] flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full bg-[#6CBF84] border border-[#3E3A2D] ${isMounted ? 'animate-pulse' : ''}`}></div>
                <h1 className="text-[#3E3A2D] font-bold uppercase tracking-widest text-xs font-mono">
                    System Message
                </h1>
            </div>

            {/* --- 2. BODY --- */}
            <div className="p-5">
                <h2 className="text-xl font-black text-[#3E3A2D] mb-2 leading-none tracking-wider">
                    Welcome, User!
                </h2>
                <p className="text-[#5A4D3B] text-sm leading-relaxed font-medium">
                    Selamat datang di Dashboard baru. Kami telah memperbarui antarmuka agar lebih mudah digunakan. Selamat berjelajah!
                </p>
            </div>

            {/* --- 3. FOOTER --- */}
            <div className="px-4 pb-4 flex justify-end">
                <button
                    onClick={handleClose}
                    className="
                        group
                        bg-[#6CBF84] hover:bg-[#58A66F] 
                        text-white text-sm font-bold uppercase tracking-widest
                        px-4 py-2 rounded-lg 
                        border-b-4 border-[#4A8F5D]
                        active:border-b-0 active:translate-y-1
                        transition-all duration-150
                        flex items-center gap-2
                    "
                >
                    <span>Start Journey</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}