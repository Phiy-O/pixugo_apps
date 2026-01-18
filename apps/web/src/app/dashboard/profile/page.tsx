"use client"
import React, { useState } from "react";
import {
    Shield, Zap, Brain, Heart, Swords,
    Crown, Star, Award, TrendingUp, User
} from "lucide-react";

export default function Profile() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] p-8 text-[#3E3A2D] flex flex-col gap-6 ml-16">

            {/* --- PAGE HEADER --- */}
            <div className="flex justify-between items-end border-b-4 border-[#3E3A2D] pb-4 bg-[#E6DCC3] sticky top-0 z-10">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[#3E3A2D] drop-shadow-sm flex items-center gap-3">
                        <User size={36} className="text-[#3E3A2D]" strokeWidth={3} />
                        Character Sheet
                    </h1>
                    <p className="text-[#8B5E3C] font-bold text-sm mt-1">
                        PLAYER ID: PHIY-O • CLASS: PRODUCTIVITY WIZARD
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-[#3E3A2D] text-[#EED9A6] px-4 py-2 rounded font-bold border-2 border-[#584D3D] shadow-[4px_4px_0px_#8B5E3C]">
                        RANK: SILVER II
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT GRID --- */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* === COLUMN 1: THE HERO & EQUIPMENT (Visual Utama) === */}
                <div className="xl:col-span-1 flex flex-col gap-6">

                    {/* AVATAR CARD */}
                    <div className="bg-[#FDF6E3] border-4 border-[#3E3A2D] p-4 rounded-xl shadow-[8px_8px_0px_#3E3A2D] relative">
                        {/* Decorative Screws */}
                        <div className="absolute top-2 left-2 w-3 h-3 bg-[#8B5E3C] border border-[#3E3A2D]"></div>
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#8B5E3C] border border-[#3E3A2D]"></div>

                        {/* Avatar Image Frame */}
                        <div className="bg-[#EED9A6] border-4 border-[#8B5E3C] rounded-lg aspect-square flex items-center justify-center relative overflow-hidden mb-4 group">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fff] to-[#EED9A6]"></div>

                            <img
                                src="/images/avatar-img.jpeg"
                                alt="Character"
                                className="w-4/5 h-4/5 object-cover rounded border-2 border-[#3E3A2D] shadow-lg z-1"
                            />

                            {/* Level Badge Overlay */}
                            <div className="absolute bottom-2 right-2 bg-[#D95763] text-white font-black text-xl px-3 py-1 rounded border-2 border-[#3E3A2D] shadow-[2px_2px_0px_#3E3A2D] rotate-[-5deg] z-20">
                                LV. 5
                            </div>
                        </div>

                        {/* Equipment Slots (Grid 2x2) */}
                        <div className="grid grid-cols-4 gap-2">
                            <EquipSlot icon={<Crown size={18} />} label="HEAD" rarity="legendary" />
                            <EquipSlot icon={<Shield size={18} />} label="BODY" rarity="common" />
                            <EquipSlot icon={<Swords size={18} />} label="MAIN" rarity="rare" />
                            <EquipSlot icon={<Zap size={18} />} label="ACC" rarity="epic" />
                        </div>
                    </div>

                    {/* BUFFS / STATUS EFFECTS */}
                    <div className="bg-[#3E3A2D] rounded-xl p-4 border-4 border-[#584D3D] shadow-[6px_6px_0px_rgba(0,0,0,0.2)]">
                        <h3 className="text-[#EED9A6] font-bold text-xs uppercase mb-3 tracking-widest border-b border-[#584D3D] pb-1">
                            Active Effects
                        </h3>
                        <div className="space-y-2">
                            <BuffRow title="Morning Person" effect="+10% XP at 08:00 AM" color="text-[#6CBF84]" />
                            <BuffRow title="Focus Streak" effect="x1.5 Gold Multiplier" color="text-[#EED9A6]" />
                        </div>
                    </div>
                </div>


                {/* === COLUMN 2: STATS & ATTRIBUTES (Data Diri) === */}
                <div className="xl:col-span-2 space-y-6">

                    {/* 1. XP PROGRESS & NEXT REWARD */}
                    <div className="bg-[#FDF6E3] border-4 border-[#3E3A2D] p-6 rounded-xl shadow-[6px_6px_0px_#3E3A2D]">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <h2 className="text-xl font-black text-[#3E3A2D]">EXPERIENCE</h2>
                                <p className="text-xs font-bold text-[#8B5E3C]">750 / 1000 XP TO NEXT LEVEL</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-[#8B5E3C] uppercase">Next Reward</p>
                                <p className="font-bold text-[#D95763] text-sm">🔥 New Skill Slot</p>
                            </div>
                        </div>
                        {/* Big XP Bar */}
                        <div className="h-6 w-full bg-[#3E3A2D] p-1 rounded-md">
                            <div className="h-full bg-[#6CBF84] w-[75%] rounded-sm relative overflow-hidden">
                                <div className="absolute inset-0 bg-white opacity-20 w-full h-[2px]"></div>
                                <div className="absolute right-0 top-0 h-full w-1 bg-[#4A8F5D]"></div>
                            </div>
                        </div>
                    </div>

                    {/* 2. ATTRIBUTE GRID (STR/INT/VIT/DEX) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* STR - Strength (Kerja Keras / Task Utama) */}
                        <StatCard
                            title="STRENGTH"
                            sub="Completed Tasks"
                            value={42}
                            max={100}
                            icon={<Swords size={20} className="text-[#D95763]" />}
                            color="bg-[#D95763]"
                        />

                        {/* INT - Intelligence (Belajar / Reading) */}
                        <StatCard
                            title="INTELLIGENCE"
                            sub="Learning Hours"
                            value={85}
                            max={100}
                            icon={<Brain size={20} className="text-[#3E76D9]" />}
                            color="bg-[#3E76D9]"
                        />

                        {/* VIT - Vitality (Health / Habits) */}
                        <StatCard
                            title="VITALITY"
                            sub="Health Habits"
                            value={60}
                            max={100}
                            icon={<Heart size={20} className="text-[#6CBF84]" />}
                            color="bg-[#6CBF84]"
                        />

                        {/* CHA - Charisma (Social / Meeting) */}
                        <StatCard
                            title="CHARISMA"
                            sub="Social & Comms"
                            value={25}
                            max={100}
                            icon={<Crown size={20} className="text-[#D98E04]" />}
                            color="bg-[#D98E04]"
                        />
                    </div>

                    {/* 3. SKILL TREE PREVIEW / BADGES */}
                    <div className="bg-[#EED9A6] border-4 border-[#3E3A2D] p-1 rounded-xl shadow-[6px_6px_0px_#3E3A2D] mt-4">
                        <div className="bg-[#FDF6E3] border border-[#D4C5A3] p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-4 border-b-2 border-[#EED9A6] pb-2">
                                <h3 className="font-black text-[#3E3A2D] flex items-center gap-2">
                                    <Award size={20} />
                                    RECENT ACHIEVEMENTS
                                </h3>
                                <button className="text-xs font-bold text-[#D95763] hover:underline uppercase">View All Badges</button>
                            </div>

                            {/* Badge Row */}
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                <BadgeItem icon="🔥" name="7 Day Streak" />
                                <BadgeItem icon="⚔️" name="Task Slayer" />
                                <BadgeItem icon="💎" name="Early Bird" />
                                <BadgeItem icon="📜" name="Planner" isLocked />
                                <BadgeItem icon="🛡️" name="Guardian" isLocked />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

// --- HELPER COMPONENTS (Agar kode utama lebih rapi) ---

// 1. Equipment Slot Component
function EquipSlot({ icon, label, rarity }: { icon: any, label: string, rarity: 'common' | 'rare' | 'epic' | 'legendary' }) {
    const colors = {
        common: "bg-[#E6DCC3] border-[#8B5E3C]",
        rare: "bg-[#D1E8FF] border-[#3E76D9]",
        epic: "bg-[#EED9A6] border-[#D98E04]",
        legendary: "bg-[#FFE0E3] border-[#D95763]"
    };

    return (
        <div className={`aspect-square rounded border-2 ${colors[rarity]} flex flex-col items-center justify-center p-1 shadow-sm cursor-pointer hover:scale-105 transition-transform`}>
            <div className="opacity-70 text-[#3E3A2D]">{icon}</div>
            <span className="text-[8px] font-bold uppercase mt-1 opacity-60 tracking-tighter">{label}</span>
        </div>
    )
}

// 2. Buff Row Component
function BuffRow({ title, effect, color }: { title: string, effect: string, color: string }) {
    return (
        <div className="flex justify-between items-center text-sm border-b border-[#584D3D] pb-1 last:border-0">
            <span className={`font-bold ${color}`}>{title}</span>
            <span className="text-[#E6DCC3] text-xs font-mono">{effect}</span>
        </div>
    )
}

// 3. Stat Card Component
function StatCard({ title, sub, value, max, icon, color }: any) {
    return (
        <div className="bg-white border-2 border-[#3E3A2D] p-3 rounded-lg shadow-[4px_4px_0px_rgba(62,58,45,0.1)]">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h4 className="font-black text-[#3E3A2D] text-lg leading-none">{title}</h4>
                    <p className="text-[10px] font-bold text-[#8B5E3C] uppercase">{sub}</p>
                </div>
                <div className="bg-[#FDF6E3] p-1.5 rounded border border-[#EED9A6]">{icon}</div>
            </div>

            {/* Stat Bar */}
            <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-[#E6DCC3] rounded-sm overflow-hidden border border-[#D4C5A3]">
                    <div className={`h-full ${color}`} style={{ width: `${(value / max) * 100}%` }}></div>
                </div>
                <span className="text-xs font-mono font-bold text-[#3E3A2D] w-8 text-right">{value}</span>
            </div>
        </div>
    )
}

// 4. Badge Item Component
function BadgeItem({ icon, name, isLocked }: { icon: string, name: string, isLocked?: boolean }) {
    return (
        <div className={`flex flex-col items-center gap-2 min-w-[80px] group ${isLocked ? "opacity-50 grayscale" : "opacity-100"}`}>
            <div className="w-12 h-12 bg-[#3E3A2D] rounded-full border-2 border-[#EED9A6] flex items-center justify-center text-xl shadow-md">
                {isLocked ? "🔒" : icon}
            </div>
            <span className="text-[10px] font-bold text-[#3E3A2D] text-center leading-tight uppercase w-full truncate px-1">
                {name}
            </span>
        </div>
    )
}