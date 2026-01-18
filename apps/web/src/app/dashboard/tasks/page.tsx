"use client"
import React from 'react';
import { Swords, Clock, Calendar, Star, CheckCircle2, Bookmark, Flame, MoreHorizontal, Plus } from 'lucide-react';

export default function Tasks() {
    return (
        <div className='ml-16 min-h-screen bg-[#E6DCC3] px-6 py-2 text-[#3E3A2D]'>

            {/* --- PAGE HEADER --- */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-wider text-[#3E3A2D] mb-1 drop-shadow-sm">
                        Quest Board
                    </h1>
                    <p className="text-[#8B5E3C] font-bold text-sm">
                        ADVENTURER LEVEL 5 • GUILD HALL
                    </p>
                </div>
                <div className="bg-[#FDF6E3] border-2 border-[#3E3A2D] px-4 py-2 rounded shadow-[4px_4px_0px_#3E3A2D] flex items-center gap-2">
                    <Calendar size={18} className="text-[#D95763]" />
                    <span className="font-bold text-sm">Sunday, 18 Jan</span>
                </div>
            </div>

            {/* --- MAIN GRID LAYOUT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* === KOLOM KIRI (MAIN CONTENT - 2/3 Lebar) === */}
                <div className="lg:col-span-2 space-y-8">

                    {/* 1. SECTION: MAIN TASKS */}
                    <div className="bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-xl p-1 relative shadow-[8px_8px_0px_#3E3A2D]">
                        {/* Hiasan Paku di Sudut */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#8B5E3C] border-2 border-[#3E3A2D] rounded-full"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8B5E3C] border-2 border-[#3E3A2D] rounded-full"></div>

                        {/* Task Header */}
                        <div className="bg-[#3E3A2D] p-3 rounded-t-lg flex justify-between items-center text-[#FDF6E3]">
                            <div className="flex items-center gap-2">
                                <Swords size={20} />
                                <h2 className="font-bold uppercase tracking-widest text-sm">Active Quests</h2>
                            </div>
                            <span className="bg-[#D95763] text-xs font-bold px-2 py-0.5 rounded text-white">3 Pending</span>
                        </div>

                        {/* Task List Container */}
                        <div className="p-4 space-y-3 min-h-[300px]">
                            {/* Task Item 1 (High Priority) */}
                            <div className="group flex items-center gap-3 bg-white p-3 rounded-lg border-2 border-[#D95763] shadow-[4px_4px_0px_rgba(217,87,99,0.2)] hover:shadow-[2px_2px_0px_rgba(217,87,99,0.2)] hover:translate-y-0.5 transition-all cursor-pointer">
                                <div className="h-6 w-6 rounded border-2 border-[#D95763] bg-[#FFF5F5]"></div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#3E3A2D]">Selesaikan Design System</h3>
                                    <p className="text-xs text-[#D95763] font-bold mt-0.5">⚠️ HIGH PRIORITY</p>
                                </div>
                                <span className="text-xs font-mono font-bold text-[#8B5E3C] bg-[#EED9A6] px-2 py-1 rounded border border-[#8B5E3C]">
                                    +150 XP
                                </span>
                            </div>

                            {/* Task Item 2 (Normal) */}
                            <div className="group flex items-center gap-3 bg-white p-3 rounded-lg border-2 border-[#EED9A6] hover:border-[#8B5E3C] transition-all cursor-pointer">
                                <div className="h-6 w-6 rounded border-2 border-[#8B5E3C] bg-[#FDF6E3]"></div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#3E3A2D]">Meeting dengan Client</h3>
                                </div>
                            </div>

                            {/* Task Item 3 (Completed) */}
                            <div className="flex items-center gap-3 bg-[#E6DCC3] p-3 rounded-lg border-2 border-transparent opacity-60">
                                <div className="h-6 w-6 rounded bg-[#6CBF84] border-2 border-[#4A8F5D] flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#3E3A2D] line-through">Minum Air 2 Liter</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. SECTION: DAILY HABITS (Grid Kecil) */}
                    <div>
                        <h2 className="font-black text-xl mb-4 flex items-center gap-2">
                            <Flame size={24} className="text-[#D98E04]" />
                            Daily Grinds
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Habit Card 1 */}
                            <div className="bg-[#FDF6E3] border-2 border-[#3E3A2D] p-3 rounded-lg text-center shadow-[4px_4px_0px_#EED9A6] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="text-2xl mb-1">📚</div>
                                <div className="font-bold text-sm">Reading</div>
                                <div className="text-[10px] text-[#8B5E3C]">0/30 Mins</div>
                            </div>
                            {/* Habit Card 2 */}
                            <div className="bg-[#6CBF84] border-2 border-[#3E3A2D] p-3 rounded-lg text-center shadow-[4px_4px_0px_#3E3A2D] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="text-2xl mb-1 text-white drop-shadow-md">🏃</div>
                                <div className="font-bold text-sm text-white">Jogging</div>
                                <div className="text-[10px] text-white font-mono bg-black/20 rounded mt-1">DONE</div>
                            </div>
                            {/* Habit Card 3 */}
                            <div className="bg-[#FDF6E3] border-2 border-[#3E3A2D] p-3 rounded-lg text-center shadow-[4px_4px_0px_#EED9A6] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="text-2xl mb-1">💊</div>
                                <div className="font-bold text-sm">Vitamin</div>
                                <div className="text-[10px] text-[#8B5E3C]">1/1</div>
                            </div>
                            {/* Add more habit */}
                            <div className="bg-[#FDF6E3] border-2 border-[#3E3A2D] border-dashed p-3 rounded-lg text-center shadow-[4px_4px_0px_#EED9A6] hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer">
                                <div className='h-full flex flex-col items-center justify-center opacity-50'>
                                    <Plus size={32}/>
                                    <span>Add more habit</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* === KOLOM KANAN (SIDE TOOLS - 1/3 Lebar) === */}
                <div className="space-y-6">

                    {/* 1. TOOL: FOCUS TIMER (Crystal Ball Style) */}
                    <div className="bg-[#3E3A2D] rounded-xl p-6 text-center border-4 border-[#584D3D] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <h3 className="text-[#EED9A6] font-bold uppercase tracking-widest text-xs mb-4">Focus Artifact</h3>

                        {/* Timer Circle */}
                        <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#EED9A6] flex items-center justify-center bg-[#2a271f] relative mb-4 shadow-[0_0_20px_rgba(238,217,166,0.2)]">
                            <span className="text-3xl font-mono font-bold text-white tracking-widest">25:00</span>
                        </div>

                        <button className="w-full bg-[#D95763] hover:bg-[#c03945] text-white font-bold py-3 rounded border-b-4 border-[#89323b] active:border-b-0 active:translate-y-1 transition-all">
                            START FOCUS
                        </button>
                    </div>

                    {/* 2. TOOL: NOTES (Parchment) */}
                    <div className="bg-[#EED9A6] p-1 shadow-[6px_6px_0px_#3E3A2D] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="bg-[#FDF6E3] border border-[#D4C5A3] p-4 min-h-[200px] relative">
                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#8B5E3C] border border-[#3E3A2D] shadow-sm z-10"></div>

                            <div className="flex justify-between items-center mb-2 border-b-2 border-[#EED9A6] pb-1">
                                <h3 className="font-bold text-[#8B5E3C] text-sm flex items-center gap-1">
                                    <Bookmark size={14} /> Quick Notes
                                </h3>
                                <MoreHorizontal size={14} className="text-[#8B5E3C] cursor-pointer" />
                            </div>
                            <p className="font-handwriting text-[#3E3A2D] leading-relaxed text-sm">
                                - Beli tinta printer <br />
                                - Ide game: Naga yang takut api <br />
                                - Update portfolio
                            </p>
                        </div>
                    </div>

                    {/* 3. TOOL: STATS MINI */}
                    <div className="bg-white border-4 border-[#3E3A2D] p-4 rounded-xl shadow-[4px_4px_0px_#3E3A2D]">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-xs text-[#8B5E3C] uppercase">Daily Progress</span>
                            <span className="font-bold text-xs text-[#3E3A2D]">60%</span>
                        </div>
                        <div className="w-full h-3 bg-[#EED9A6] rounded-full border-2 border-[#3E3A2D] overflow-hidden">
                            <div className="h-full bg-[#6CBF84] w-[60%] border-r-2 border-[#3E3A2D]"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}