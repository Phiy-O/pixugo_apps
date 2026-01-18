"use client"
import React from 'react';
import {
    Settings, Volume2, Bell, Monitor,
    User, Moon, ShieldAlert, LogOut,
    ChevronRight, Globe, Save
} from 'lucide-react';

export default function Setting() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] p-8 text-[#3E3A2D] flex flex-col gap-8 ml-16">

            {/* --- PAGE HEADER --- */}
            <div className="border-b-4 border-[#3E3A2D] pb-4 bg-[#E6DCC3] sticky top-0 z-10 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[#3E3A2D] flex items-center gap-3">
                        <Settings size={36} strokeWidth={3} className="animate-spin-slow" />
                        System Config
                    </h1>
                    <p className="text-[#8B5E3C] font-bold font-mono text-sm mt-1">
                        GAME SETTINGS • VERSION {process.env.NEXT_PUBLIC_APP_VERSION}
                    </p>
                </div>

                {/* Save Button (Floated) */}
                <button className="flex items-center gap-2 bg-[#6CBF84] hover:bg-[#58A66F] text-white font-bold py-2 px-6 rounded border-b-4 border-[#4A8F5D] active:border-b-0 active:translate-y-1 transition-all shadow-lg">
                    <Save size={18} />
                    SAVE CHANGES
                </button>
            </div>

            {/* --- MAIN LAYOUT --- */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* === LEFT: SETTINGS CATEGORY MENU === */}
                <div className="w-full lg:w-64 shrink-0 flex flex-col gap-2">
                    <MenuTab label="General" icon={<Settings size={18} />} active />
                    <MenuTab label="Account" icon={<User size={18} />} />
                    <MenuTab label="Appearance" icon={<Monitor size={18} />} />
                    <MenuTab label="Audio" icon={<Volume2 size={18} />} />
                    <MenuTab label="Notifications" icon={<Bell size={18} />} />

                    <div className="my-4 border-t-2 border-[#3E3A2D] opacity-20"></div>

                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-[#D95763] hover:bg-[#D95763]/10 border-2 border-transparent hover:border-[#D95763] transition-all">
                        <LogOut size={18} />
                        Log Out
                    </button>
                </div>

                {/* === RIGHT: CONFIGURATION PANEL === */}
                <div className="flex-1 w-full space-y-6">

                    {/* SECTION 1: GAMEPLAY (General) */}
                    <SectionCard title="Gameplay Settings" icon={<Monitor size={20} />}>

                        {/* Setting Item: Difficulty */}
                        <div className="flex justify-between items-center py-4 border-b-2 border-[#E6DCC3]">
                            <div>
                                <h4 className="font-black text-[#3E3A2D]">Difficulty Mode</h4>
                                <p className="text-xs text-[#8B5E3C] font-medium">Affects XP gain and punishment.</p>
                            </div>
                            <div className="flex bg-[#E6DCC3] p-1 rounded border-2 border-[#3E3A2D]">
                                <button className="px-3 py-1 bg-[#3E3A2D] text-[#FDF6E3] rounded-sm font-bold text-xs shadow-sm">NORMAL</button>
                                <button className="px-3 py-1 text-[#8B5E3C] hover:bg-[#D4C5A3] rounded-sm font-bold text-xs transition-colors">HARDCORE</button>
                            </div>
                        </div>

                        {/* Setting Item: Language */}
                        <div className="flex justify-between items-center py-4 border-b-2 border-[#E6DCC3]">
                            <div>
                                <h4 className="font-black text-[#3E3A2D]">System Language</h4>
                                <p className="text-xs text-[#8B5E3C] font-medium">Select your preferred interface language.</p>
                            </div>
                            <div className="relative group">
                                <button className="flex items-center gap-2 bg-[#FDF6E3] border-2 border-[#3E3A2D] px-4 py-2 rounded font-bold text-sm shadow-[2px_2px_0px_#3E3A2D] active:translate-y-0.5 active:shadow-none">
                                    <Globe size={16} /> English (US) <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Setting Item: Vacation Mode */}
                        <div className="flex justify-between items-center py-4">
                            <div>
                                <h4 className="font-black text-[#3E3A2D] flex items-center gap-2">
                                    Vacation Mode 🏖️
                                </h4>
                                <p className="text-xs text-[#8B5E3C] font-medium w-3/4">Pause your streaks while you are away. No XP loss for missed dailies.</p>
                            </div>
                            <RetroToggle isOn={false} />
                        </div>
                    </SectionCard>


                    {/* SECTION 2: AUDIO CONFIG */}
                    <SectionCard title="Audio Configuration" icon={<Volume2 size={20} />}>

                        {/* Master Volume Slider */}
                        <div className="py-4 border-b-2 border-[#E6DCC3]">
                            <div className="flex justify-between mb-2">
                                <h4 className="font-bold text-[#3E3A2D]">Master Volume</h4>
                                <span className="font-mono font-bold text-[#8B5E3C]">80%</span>
                            </div>
                            <RetroSlider value={80} />
                        </div>

                        {/* SFX Volume Slider */}
                        <div className="py-4">
                            <div className="flex justify-between mb-2">
                                <h4 className="font-bold text-[#3E3A2D]">Sound Effects (SFX)</h4>
                                <span className="font-mono font-bold text-[#8B5E3C]">45%</span>
                            </div>
                            <RetroSlider value={45} />
                        </div>
                    </SectionCard>


                    {/* SECTION 3: DANGER ZONE */}
                    <div className="bg-[#FFE0E3] border-4 border-[#D95763] rounded-xl p-6 shadow-[6px_6px_0px_rgba(217,87,99,0.4)]">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#D95763] text-white p-3 rounded-lg border-2 border-[#89323b]">
                                <ShieldAlert size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-black text-[#D95763] text-lg uppercase mb-1">Danger Zone</h3>
                                <p className="text-sm text-[#89323b] mb-4 font-medium">
                                    Resetting your account will wipe all XP, Coins, and Items. This action cannot be undone by a healing potion.
                                </p>
                                <button className="bg-white hover:bg-[#fff0f0] text-[#D95763] font-bold py-2 px-4 rounded border-2 border-[#D95763] shadow-sm uppercase text-xs tracking-wider">
                                    Reset Character Progress
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// --- VISUAL COMPONENTS (UI KIT) ---

function MenuTab({ label, icon, active }: { label: string, icon: any, active?: boolean }) {
    return (
        <button className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all border-l-4
            ${active
                ? "bg-[#3E3A2D] text-[#FDF6E3] border-[#D95763] shadow-md"
                : "text-[#3E3A2D] border-transparent hover:bg-[#EED9A6] hover:pl-6"
            }
        `}>
            {icon}
            {label}
        </button>
    )
}

function SectionCard({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-xl shadow-[8px_8px_0px_#3E3A2D] overflow-hidden">
            <div className="bg-[#EED9A6] p-4 border-b-4 border-[#3E3A2D] flex items-center gap-2">
                <div className="p-1.5 bg-[#3E3A2D] text-[#EED9A6] rounded border border-[#8B5E3C]">
                    {icon}
                </div>
                <h3 className="font-black text-[#3E3A2D] uppercase tracking-wider text-lg">{title}</h3>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}

function RetroToggle({ isOn }: { isOn: boolean }) {
    return (
        <div className={`
            w-14 h-8 rounded-full border-4 border-[#3E3A2D] relative cursor-pointer transition-colors
            ${isOn ? "bg-[#6CBF84]" : "bg-[#8B5E3C]"}
        `}>
            <div className={`
                absolute top-0.5 w-5 h-5 bg-[#FDF6E3] border-2 border-[#3E3A2D] rounded-full shadow-sm transition-all
                ${isOn ? "left-7" : "left-1"}
            `}></div>
        </div>
    )
}

function RetroSlider({ value }: { value: number }) {
    return (
        <div className="h-4 w-full bg-[#3E3A2D] rounded-full relative border-2 border-[#3E3A2D]">
            {/* Fill */}
            <div
                className="absolute top-0 left-0 h-full bg-[#EED9A6] rounded-l-full"
                style={{ width: `${value}%` }}
            ></div>
            {/* Handle / Knob */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FDF6E3] border-4 border-[#3E3A2D] shadow-sm cursor-grab hover:scale-110 transition-transform"
                style={{ left: `calc(${value}% - 12px)` }}
            ></div>
        </div>
    )
}