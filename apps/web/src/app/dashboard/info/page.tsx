"use client"
import React from 'react';
import {
    Info, Github, Coffee, Scroll,
    Code, Heart, Bug, Sparkles,
    ExternalLink, Map
} from 'lucide-react';

export default function InfoPage() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] p-8 text-[#3E3A2D] flex flex-col gap-8 ml-16">

            {/* --- PAGE HEADER --- */}
            <div className="border-b-4 border-[#3E3A2D] pb-4 bg-[#E6DCC3] sticky top-0 z-10 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[#3E3A2D] flex items-center gap-3">
                        <svg className="h-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z" fill="currentColor" /> </svg>
                        System Info
                    </h1>
                    <p className="text-[#8B5E3C] font-bold font-mono text-sm mt-1">
                        ABOUT THE APP • BUILD v{process.env.NEXT_PUBLIC_APP_VERSION}
                    </p>
                </div>
            </div>

            {/* --- HERO SECTION: APP IDENTITY --- */}
            <div className="bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-xl p-8 shadow-[8px_8px_0px_#3E3A2D] flex flex-col items-center text-center relative overflow-hidden">

                {/* Background Pattern Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D95763] via-[#EED9A6] to-[#6CBF84]"></div>

                <div className="w-24 h-24 bg-[#3E3A2D] rounded-2xl flex items-center justify-center mb-4 border-4 border-[#EED9A6] shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
                    {/* Placeholder Logo */}
                    <span className="text-4xl">⚔️</span>
                </div>

                <h2 className="text-3xl font-black uppercase text-[#3E3A2D] tracking-widest mb-1">
                    Questify RPG
                </h2>
                <p className="text-[#8B5E3C] font-bold font-mono text-sm bg-[#EED9A6] px-3 py-1 rounded-full mb-6">
                    Early Access • Beta Build
                </p>

                <p className="max-w-xl text-[#3E3A2D] font-medium leading-relaxed">
                    A gamified productivity tool designed to turn your daily tasks into an epic adventure.
                    Slay your to-do list, earn XP, and level up your life!
                </p>

                <div className="flex gap-4 mt-8">
                    <a className='text-white' href="https://github.com/Phiy-O/pixugo_apps" target='_blank'>
                        <ActionButton icon={<svg className='h-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill='currentcolor' /></svg>} label="Source Code" />
                    </a>
                    <ActionButton icon={<Coffee size={18} />} label="Support Dev" color="bg-[#D95763]" />
                </div>
            </div>

            {/* --- GRID LAYOUT: CONTENT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT COLUMN: PATCH NOTES (CHANGELOG) */}
                <div className="bg-[#3E3A2D] text-[#FDF6E3] border-4 border-[#584D3D] rounded-xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                    <div className="bg-[#2a271f] p-4 border-b-2 border-[#584D3D] flex justify-between items-center">
                        <h3 className="font-bold uppercase tracking-widest flex items-center gap-2 text-[#EED9A6]">
                            <Scroll size={18} /> Patch Notes
                        </h3>
                        <span className="text-xs font-mono text-[#8B5E3C]">Latest Updates</span>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Version Item 1 */}
                        <div className="relative pl-4 border-l-2 border-[#584D3D]">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#6CBF84]"></div>
                            <h4 className="font-bold text-lg leading-none mb-2">v1.0.5 <span className="text-xs font-mono text-[#6CBF84] ml-2">CURRENT</span></h4>
                            <ul className="space-y-2 text-sm font-mono text-[#E6DCC3]">
                                <li className="flex items-start gap-2">
                                    <Sparkles size={14} className="mt-0.5 text-[#EED9A6]" />
                                    <span>Added "Character Sheet" Overview page.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Sparkles size={14} className="mt-0.5 text-[#EED9A6]" />
                                    <span>New sound effects for completing tasks.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Version Item 2 */}
                        <div className="relative pl-4 border-l-2 border-[#584D3D]">
                            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#8B5E3C]"></div>
                            <h4 className="font-bold text-lg leading-none mb-2 text-[#8B5E3C]">v1.0.4</h4>
                            <ul className="space-y-2 text-sm font-mono text-[#8B5E3C]">
                                <li className="flex items-start gap-2">
                                    <Bug size={14} className="mt-0.5" />
                                    <span>Fixed visual glitch on sidebar toggle.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Code size={14} className="mt-0.5" />
                                    <span>Refactored modal components.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: CREDITS & TECH STACK */}
                <div className="space-y-8">

                    {/* THE GUILD (CREDITS) */}
                    <div className="bg-[#EED9A6] border-4 border-[#3E3A2D] p-1 rounded-xl shadow-[6px_6px_0px_#3E3A2D]">
                        <div className="bg-[#FDF6E3] border border-[#D4C5A3] p-5 rounded-lg">
                            <h3 className="font-black text-[#3E3A2D] uppercase mb-4 flex items-center gap-2">
                                <Map size={18} /> The Guild
                            </h3>

                            {/* Dev Profile Card */}
                            <div className="flex items-center gap-4 bg-white p-3 rounded-lg border-2 border-[#E6DCC3] shadow-sm">
                                <img src="/images/avatar-img.jpeg" className="w-12 h-12 rounded bg-[#3E3A2D] object-cover border border-[#3E3A2D]" alt="Dev" />
                                <div>
                                    <h4 className="font-black text-[#3E3A2D]">Phiy-O</h4>
                                    <p className="text-xs font-bold text-[#D95763] uppercase">Lead Developer</p>
                                    <p className="text-[10px] text-[#8B5E3C] mt-1 italic">"Coding until mana runs out."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MANA SOURCE (TECH STACK) */}
                    <div>
                        <h3 className="font-black text-[#3E3A2D] uppercase mb-3 text-sm tracking-wider">
                            Powered By
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <TechBadge label="Next.js 14" />
                            <TechBadge label="Tailwind CSS" />
                            <TechBadge label="Lucide Icons" />
                            <TechBadge label="React" />
                            <TechBadge label="TypeScript" />
                        </div>
                    </div>

                    {/* FOOTER MESSAGE */}
                    <div className="text-center pt-4 border-t-2 border-[#3E3A2D]/20">
                        <p className="text-xs font-bold text-[#8B5E3C] flex items-center justify-center gap-1">
                            Crafted with <Heart size={10} fill="#D95763" className="text-[#D95763]" /> in 2024
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

// --- UI COMPONENTS ---

function ActionButton({ icon, label, color = "bg-[#3E3A2D]" }: any) {
    return (
        <button className={`
            ${color} text-white 
            px-5 py-2 rounded-lg 
            font-bold text-sm uppercase tracking-wide
            flex items-center gap-2
            border-b-4 border-black/30
            active:border-b-0 active:translate-y-1 active:mt-1
            transition-all shadow-lg hover:brightness-110
        `}>
            {icon} {label}
        </button>
    )
}

function TechBadge({ label }: { label: string }) {
    return (
        <span className="
            bg-[#E6DCC3] text-[#3E3A2D] 
            px-3 py-1 rounded border-2 border-[#3E3A2D] 
            text-xs font-bold shadow-[2px_2px_0px_#3E3A2D]
            hover:-translate-y-0.5 transition-transform cursor-default
        ">
            {label}
        </span>
    )
}