"use client"
import React from 'react';
import {
    Swords, Shield, Zap, Flame,
    ArrowRight, Star, Scroll, Menu,
    Github, Twitter, Play, CheckCircle2,
    Trophy, Crown, Gem
} from 'lucide-react';

export default function LandingPageV2() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] font-sans text-[#3E3A2D] selection:bg-[#D95763] selection:text-white overflow-x-hidden relative">

            {/* --- BACKGROUND PATTERN (DOT GRID) --- */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#3E3A2D 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* --- 1. FLOATING NAVBAR (Modern Retro) --- */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <nav className="bg-[#FDF6E3]/90 backdrop-blur-md border-2 border-[#3E3A2D] px-2 py-2 rounded-full shadow-[0_8px_0px_rgba(62,58,45,0.1)] flex items-center gap-1 md:gap-8 max-w-4xl w-full justify-between md:justify-center">

                    {/* Logo Mobile */}
                    <div className="flex md:hidden items-center gap-2 pl-4">
                        <Swords size={20} className="text-[#D95763]" />
                        <span className="font-black uppercase tracking-widest text-sm">Questify</span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex gap-1">
                        <NavLink href="#features" label="Features" />
                        <NavLink href="#guild" label="Guild Hall" />
                        <NavLink href="#shop" label="Item Shop" />
                    </div>

                    {/* Logo Desktop (Center) */}
                    <div className="hidden md:flex w-12 h-12 bg-[#3E3A2D] rounded-full items-center justify-center border-4 border-[#EED9A6] shadow-sm mx-4 transform hover:rotate-12 transition-transform cursor-pointer">
                        <Swords className="text-[#EED9A6]" size={24} />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pr-1">
                        <button className="hidden md:block px-4 py-2 font-bold text-xs uppercase hover:text-[#D95763] transition-colors">
                            Login
                        </button>
                        <button className="bg-[#D95763] hover:bg-[#c03945] text-white px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider border-b-4 border-[#89323b] active:border-b-0 active:translate-y-0.5 transition-all shadow-lg flex items-center gap-2">
                            Start Quest <ArrowRight size={14} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* --- 2. HERO SECTION --- */}
            <header className="relative pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto text-center relative z-10">

                    {/* Badge */}
                    <div className="inline-block mb-6 animate-bounce-slow">
                        <div className="bg-[#3E3A2D] text-[#EED9A6] border-2 border-[#EED9A6] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6CBF84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6CBF84]"></span>
                            </span>
                            New Region Unlocked: v2.0
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] text-[#3E3A2D] mb-8">
                        Stop Working. <br />
                        <span className="relative inline-block">
                            Start Grinding.
                            {/* Underline Decoration */}
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#D95763]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-[#8B5E3C] max-w-2xl mx-auto mb-10 leading-relaxed">
                        The only productivity tool that rewards you with XP, Loot, and Dopamine. Gamify your life today.
                    </p>

                    {/* Interactive Hero Visual */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
                        <HeroButton primary icon={<Zap fill="white" />} label="Join the Adventure" />
                        <HeroButton icon={<Play fill="#3E3A2D" />} label="Watch Trailer" />
                    </div>

                    {/* Floating Cards Illustration */}
                    <div className="relative h-64 md:h-80 max-w-4xl mx-auto perspective-1000 hidden md:block">
                        <div className="absolute left-10 top-10 rotate-[-6deg] hover:rotate-[-3deg] hover:scale-105 transition-all duration-500 z-10">
                            <TaskCard title="Fix Bugs" reward="500 XP" type="boss" />
                        </div>
                        <div className="absolute right-10 top-0 rotate-[6deg] hover:rotate-[3deg] hover:scale-105 transition-all duration-500 z-0">
                            <TaskCard title="Read Books" reward="10 XP  " type="normal" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-20 z-20 hover:-translate-y-2 transition-transform duration-500">
                            <CharacterCard />
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 3. MARQUEE BANNER (Arcade Style) --- */}
            <div className="bg-[#D95763] text-white py-4 border-y-4 border-[#3E3A2D] overflow-hidden relative rotate-[-1deg] shadow-lg mb-20 scale-105">
                <div className="animate-marquee whitespace-nowrap font-black uppercase text-2xl tracking-widest flex gap-8">
                    <span>⚔️ Slay Your Tasks</span>
                    <span>🛡️ Defeat Procrastination</span>
                    <span>💎 Earn Loot</span>
                    <span>🔥 Build Streaks</span>
                    <span>⚔️ Slay Your Tasks</span>
                    <span>🛡️ Defeat Procrastination</span>
                    <span>💎 Earn Loot</span>
                    <span>🔥 Build Streaks</span>
                </div>
            </div>

            {/* --- 4. BENTO GRID FEATURES (Inventory Style) --- */}
            <section id="features" className="max-w-6xl mx-auto px-6 mb-32 relative z-10">
                <SectionHeader title="Your Inventory" subtitle="Powerful tools equipped for your journey" />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

                    {/* Large Card (Main Feature) */}
                    <div className="md:col-span-2 md:row-span-2 bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-2xl p-8 shadow-[8px_8px_0px_#3E3A2D] flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-[#6CBF84] rounded-xl border-4 border-[#3E3A2D] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#3E3A2D] group-hover:rotate-12 transition-transform">
                                <Scroll size={32} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-black text-[#3E3A2D] uppercase mb-4">The Quest Board</h3>
                            <p className="text-[#8B5E3C] text-lg font-medium max-w-sm">
                                Not just a to-do list. It's a bounty board. Organize tasks by difficulty tiers (S, A, B, C) and earn proportionate rewards.
                            </p>
                        </div>
                        {/* Visual Decor */}
                        <div className="absolute -bottom-10 -right-10 opacity-20 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-700">
                            <Swords size={200} />
                        </div>
                    </div>

                    {/* Tall Card (Stats) */}
                    <div className="md:row-span-2 bg-[#3E3A2D] border-4 border-[#3E3A2D] rounded-2xl p-8 shadow-[8px_8px_0px_#8B5E3C] text-[#FDF6E3] flex flex-col relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-[#D95763] rounded-lg border-2 border-[#FDF6E3] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Trophy size={24} />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-2">RPG Stats</h3>
                            <p className="text-[#EED9A6] text-sm mb-6">
                                Visualize your life growth.
                            </p>

                            {/* Fake Stats */}
                            <div className="space-y-3 font-mono text-xs font-bold">
                                <StatBar label="STR" val="85%" color="bg-[#D95763]" />
                                <StatBar label="INT" val="60%" color="bg-[#3E76D9]" />
                                <StatBar label="VIT" val="92%" color="bg-[#6CBF84]" />
                            </div>
                        </div>
                    </div>

                    {/* Small Card (Focus) */}
                    <div className="bg-[#EED9A6] border-4 border-[#3E3A2D] rounded-2xl p-6 shadow-[6px_6px_0px_#3E3A2D] hover:-translate-y-1 transition-transform">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-black text-[#3E3A2D] uppercase">Focus Mode</h3>
                            <Zap size={24} className="text-[#D98E04]" />
                        </div>
                        <p className="text-[#8B5E3C] text-sm font-bold">Built-in Pomodoro timer to slay distractions.</p>
                    </div>

                    {/* Small Card (Streak) */}
                    <div className="bg-[#D95763] border-4 border-[#3E3A2D] rounded-2xl p-6 shadow-[6px_6px_0px_#3E3A2D] text-white hover:-translate-y-1 transition-transform">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-black uppercase">Streaks</h3>
                            <Flame size={24} className="text-[#FDF6E3]" />
                        </div>
                        <p className="text-[#FDF6E3] text-sm font-bold">Don't break the chain! Maintain your combo.</p>
                    </div>

                </div>
            </section>

            {/* --- 5. THE MERCHANT (Pricing) --- */}
            <section id="shop" className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader title="The Merchant" subtitle="Trade your gold (or cash) for upgrades" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Free Tier */}
                        <PricingCard
                            title="Novice"
                            price="Free"
                            desc="For beginners starting their journey."
                            features={['Unlimited Quests', 'Basic Stats', '3 Active Projects']}
                        />

                        {/* Pro Tier (Highlighted) */}
                        <div className="relative">
                            {/* Best Value Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D95763] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 border-[#3E3A2D] z-20 shadow-sm animate-bounce">
                                Most Popular
                            </div>
                            <PricingCard
                                title="Guild Master"
                                price="$5/mo"
                                desc="Unlock full potential & exclusive skins."
                                features={['Everything in Novice', 'Advanced Analytics', 'Unlimited Projects', 'Exclusive Themes']}
                                isPro
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 6. FOOTER --- */}
            <footer className="bg-[#3E3A2D] text-[#EED9A6] pt-16 pb-8 border-t-[12px] border-[#D98E04]">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <Swords size={32} className="text-[#D95763]" />
                            <h2 className="text-3xl font-black uppercase tracking-widest text-[#FDF6E3]">Questify</h2>
                        </div>
                        <p className="opacity-60 font-mono text-sm max-w-xs">
                            Crafted with pixel-perfect love for productivity nerds and RPG fans.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <FooterLink label="Twitter" />
                        <FooterLink label="Discord" />
                        <FooterLink label="Github" />
                    </div>
                </div>
                <div className="text-center mt-12 pt-8 border-t border-[#584D3D] opacity-40 text-xs font-mono">
                    © 2024 PHIY-O LABS. LEVEL 1.
                </div>
            </footer>

            {/* Global Style for Marquee Animation */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

// --- SUB-COMPONENTS (Reusables) ---

function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <a href={href} className="px-4 py-2 font-bold text-xs uppercase tracking-wide hover:bg-[#EED9A6] rounded-full transition-colors text-[#3E3A2D]">
            {label}
        </a>
    )
}

function HeroButton({ primary, icon, label }: any) {
    return (
        <button className={`
            flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all
            border-b-8 active:border-b-0 active:translate-y-2
            ${primary
                ? "bg-[#6CBF84] hover:bg-[#58A66F] text-white border-[#4A8F5D] shadow-[0_10px_20px_rgba(108,191,132,0.3)]"
                : "bg-white hover:bg-[#FDF6E3] text-[#3E3A2D] border-[#D4C5A3] shadow-sm"
            }
        `}>
            {icon} {label}
        </button>
    )
}

function TaskCard({ title, reward, type }: any) {
    const isBoss = type === 'boss';
    return (
        <div className={`
            w-64 p-4 rounded-lg border-4 border-[#3E3A2D] shadow-[8px_8px_0px_rgba(62,58,45,0.2)]
            ${isBoss ? "bg-[#FFF5F5] border-[#D95763]" : "bg-[#FDF6E3]"}
        `}>
            <div className="flex justify-between items-start mb-2">
                <div className={`h-4 w-4 rounded border-2 border-[#3E3A2D] ${isBoss ? "bg-[#D95763]" : "bg-white"}`}></div>
                {isBoss && <div className="text-[10px] font-black bg-[#D95763] text-white px-2 rounded">BOSS</div>}
            </div>
            <div className="h-4 w-3/4 bg-[#3E3A2D]/10 rounded mb-2"></div>
            <h4 className="font-bold text-[#3E3A2D]">{title}</h4>
            <div className="mt-2 text-xs font-mono font-bold text-[#8B5E3C] bg-[#EED9A6]/50 inline-block px-2 py-1 rounded">
                +{reward}
            </div>
        </div>
    )
}

function CharacterCard() {
    return (
        <div className="w-48 bg-[#3E3A2D] p-1 rounded-xl border-4 border-[#EED9A6] shadow-[0_20px_30px_rgba(0,0,0,0.3)]">
            <div className="bg-[#E6DCC3] rounded-lg p-3 text-center">
                <div className="w-16 h-16 bg-[#D95763] rounded-full mx-auto border-4 border-[#3E3A2D] mb-2"></div>
                <div className="font-black text-[#3E3A2D] uppercase text-sm">Player One</div>
                <div className="text-[10px] font-bold text-[#8B5E3C]">Lvl. 10 Wizard</div>
            </div>
        </div>
    )
}

function SectionHeader({ title, subtitle }: any) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#3E3A2D] mb-2 drop-shadow-sm">
                {title}
            </h2>
            <div className="w-24 h-2 bg-[#D95763] mx-auto mb-4"></div>
            <p className="text-[#8B5E3C] font-bold text-lg">{subtitle}</p>
        </div>
    )
}

function StatBar({ label, val, color }: any) {
    return (
        <div className="flex items-center gap-2">
            <span className="w-8">{label}</span>
            <div className="flex-1 h-3 bg-[#2a271f] rounded-full overflow-hidden border border-[#584D3D]">
                <div className={`h-full ${color}`} style={{ width: val }}></div>
            </div>
        </div>
    )
}

function PricingCard({ title, price, desc, features, isPro }: any) {
    return (
        <div className={`
            p-8 rounded-2xl border-4 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2
            ${isPro
                ? "bg-[#3E3A2D] text-[#FDF6E3] border-[#D95763] shadow-[12px_12px_0px_#D95763]"
                : "bg-[#FDF6E3] text-[#3E3A2D] border-[#3E3A2D] shadow-[8px_8px_0px_#3E3A2D]"
            }
        `}>
            <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                {isPro && <Crown size={20} className="text-[#EED9A6]" />} {title}
            </h3>
            <div className="text-4xl font-black mb-2">{price}</div>
            <p className={`text-sm font-medium mb-8 ${isPro ? "text-[#EED9A6]" : "text-[#8B5E3C]"}`}>{desc}</p>

            <ul className="space-y-4 mb-8">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                        <CheckCircle2 size={16} className={isPro ? "text-[#6CBF84]" : "text-[#3E3A2D]"} />
                        {f}
                    </li>
                ))}
            </ul>

            <button className={`
                w-full py-4 rounded-xl font-bold uppercase tracking-wide border-b-8 active:border-b-0 active:translate-y-2 transition-all
                ${isPro
                    ? "bg-[#D95763] hover:bg-[#c03945] text-white border-[#89323b]"
                    : "bg-[#EED9A6] hover:bg-[#e0c890] text-[#3E3A2D] border-[#D4C5A3]"
                }
            `}>
                Choose {title}
            </button>
        </div>
    )
}

function FooterLink({ label }: { label: string }) {
    return (
        <a href="#" className="font-bold uppercase text-xs tracking-wider hover:text-[#D95763] transition-colors">
            {label}
        </a>
    )
}