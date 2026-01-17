"use client"
import { useState } from 'react';

export default function BubbleMessage() {
    const [skip, setSkip] = useState(true)

    return (
        <div className={`
            absolute top-0 left-0
            w-[420px] max-w-[90vw] mt-4 
            bg-[#FDF6E3] /* Warna Kertas Perkamen yang lebih terang agar teks kontras */
            border-4 border-[#3E3A2D] /* Border Coklat Tua Solid */
            rounded-xl 
            shadow-[6px_6px_0px_rgba(62,58,45,0.4)] /* Shadow Solid ala Retro */
            overflow-hidden
            ${skip ? "" : "hidden"}
        `}>

            {/* --- 1. HEADER / NAME TAG SECTION --- */}
            <div className="bg-[#EED9A6] px-4 py-2 border-b-2 border-[#D4C5A3] flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#6CBF84] border border-[#3E3A2D]"></div>
                <h1 className="text-[#3E3A2D] font-bold uppercase tracking-widest text-xs font-mono">
                    System Message
                </h1>
            </div>

            {/* --- 2. BODY / CONTENT SECTION --- */}
            <div className="p-5">
                <h2 className="text-xl font-black text-[#3E3A2D] mb-2 leading-none tracking-wider">
                    Welcome, User!
                </h2>
                <p className="text-[#5A4D3B] text-sm leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis a. Vero cum quae ullam culpa et debitis maiores?
                </p>
            </div>

            {/* --- 3. FOOTER / ACTION SECTION --- */}
            <div className="px-4 pb-4 flex justify-end">
                <button
                    onClick={() => setSkip((curr) => !curr)}
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
                    <span>Stary Journey</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}