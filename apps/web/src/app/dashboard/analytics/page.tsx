"use client"
import React from 'react';
import { 
    BarChart3, Calendar, Clock, Trophy, 
    Flame, TrendingUp, Target, Swords 
} from 'lucide-react';

export default function Analytics() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] p-8 text-[#3E3A2D] flex flex-col gap-8 ml-16">
            
            {/* --- PAGE HEADER --- */}
            <div className="flex justify-between items-end border-b-4 border-[#3E3A2D] pb-4 bg-[#E6DCC3] sticky top-0 z-10">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[#3E3A2D] flex items-center gap-3">
                        <BarChart3 size={36} strokeWidth={3} />
                        Adventure Log
                    </h1>
                    <p className="text-[#8B5E3C] font-bold font-mono text-sm mt-1">
                        PERFORMANCE HISTORY • LAST 7 DAYS
                    </p>
                </div>
                
                {/* Visual Date Picker */}
                <div className="flex items-center bg-[#FDF6E3] border-2 border-[#3E3A2D] rounded shadow-[4px_4px_0px_#3E3A2D] px-3 py-1 gap-2 cursor-pointer hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#3E3A2D] transition-all">
                    <Calendar size={18} className="text-[#D95763]" />
                    <span className="font-bold text-sm">Jan 12 - Jan 18</span>
                </div>
            </div>

            {/* --- TOP: KPI CARDS (Summary Stats) --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* 1. Total Focus Time */}
                <SummaryCard 
                    title="Focus Time" 
                    value="24h 15m" 
                    sub="+12% from last week" 
                    icon={<Clock size={24} className="text-[#EED9A6]" />}
                    bgIcon="bg-[#3E3A2D]"
                />
                {/* 2. Quest Completed */}
                <SummaryCard 
                    title="Quests Done" 
                    value="42" 
                    sub="Avg 6 per day" 
                    icon={<Swords size={24} className="text-[#FDF6E3]" />}
                    bgIcon="bg-[#D95763]"
                />
                {/* 3. Current Streak */}
                <SummaryCard 
                    title="Streak Fire" 
                    value="12 Days" 
                    sub="Personal Best: 15" 
                    icon={<Flame size={24} className="text-[#3E3A2D]" fill="#3E3A2D" />}
                    bgIcon="bg-[#D98E04]"
                />
                {/* 4. XP Gained */}
                <SummaryCard 
                    title="Total XP" 
                    value="8,450" 
                    sub="Level up soon!" 
                    icon={<Trophy size={24} className="text-[#D95763]" />}
                    bgIcon="bg-[#EED9A6]"
                />
            </div>

            {/* --- MIDDLE: MAIN CHARTS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT: XP ACTIVITY CHART (Manual Bar Chart Visual) */}
                <div className="lg:col-span-2 bg-[#FDF6E3] border-4 border-[#3E3A2D] p-6 rounded-xl shadow-[8px_8px_0px_#3E3A2D]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-black text-lg text-[#3E3A2D] uppercase flex items-center gap-2">
                            <TrendingUp size={20} /> XP Earnings
                        </h3>
                        <div className="flex gap-2 text-[10px] font-bold uppercase">
                            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#6CBF84]"></div>Productive</span>
                            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#EED9A6]"></div>Bonus</span>
                        </div>
                    </div>

                    {/* THE CHART CONTAINER */}
                    <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2 border-b-4 border-[#3E3A2D] pb-0 relative">
                        {/* Background Grid Lines (Visual only) */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0 pb-4">
                            <div className="border-t-2 border-[#3E3A2D] border-dashed w-full h-0"></div>
                            <div className="border-t-2 border-[#3E3A2D] border-dashed w-full h-0"></div>
                            <div className="border-t-2 border-[#3E3A2D] border-dashed w-full h-0"></div>
                            <div className="border-t-2 border-[#3E3A2D] border-dashed w-full h-0"></div>
                        </div>

                        {/* Bar Items (Hardcoded heights for visual demo) */}
                        <ChartBar day="MON" height="h-[40%]" color="bg-[#EED9A6]" />
                        <ChartBar day="TUE" height="h-[65%]" color="bg-[#6CBF84]" />
                        <ChartBar day="WED" height="h-[30%]" color="bg-[#EED9A6]" />
                        <ChartBar day="THU" height="h-[85%]" color="bg-[#6CBF84]" active />
                        <ChartBar day="FRI" height="h-[50%]" color="bg-[#6CBF84]" />
                        <ChartBar day="SAT" height="h-[90%]" color="bg-[#D95763]" />
                        <ChartBar day="SUN" height="h-[20%]" color="bg-[#EED9A6]" />
                    </div>
                </div>

                {/* RIGHT: CATEGORY BREAKDOWN (Skill Bars) */}
                <div className="bg-[#3E3A2D] border-4 border-[#584D3D] p-6 rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,0.2)] text-[#FDF6E3]">
                    <h3 className="font-black text-lg uppercase mb-6 flex items-center gap-2 text-[#EED9A6]">
                        <Target size={20} /> Quest Types
                    </h3>
                    
                    <div className="space-y-5">
                        <SkillBar label="Coding" percent={65} color="bg-[#6CBF84]" />
                        <SkillBar label="Design" percent={40} color="bg-[#D95763]" />
                        <SkillBar label="Writing" percent={25} color="bg-[#EED9A6]" />
                        <SkillBar label="Reading" percent={80} color="bg-[#3E76D9]" />
                    </div>

                    <div className="mt-8 p-4 bg-[#2a271f] rounded border border-[#584D3D] text-center">
                        <p className="text-xs text-[#EED9A6] font-mono mb-1">MOST PRODUCTIVE HOUR</p>
                        <p className="text-2xl font-black text-white tracking-widest">10:00 AM</p>
                    </div>
                </div>
            </div>

            {/* --- BOTTOM: HEATMAP (CONSISTENCY GRID) --- */}
            <div className="bg-[#EED9A6] border-4 border-[#3E3A2D] p-1 rounded-xl shadow-[8px_8px_0px_#3E3A2D]">
                <div className="bg-[#FDF6E3] border border-[#D4C5A3] p-6 rounded-lg">
                    <h3 className="font-black text-lg text-[#3E3A2D] uppercase mb-4">Consistency Grid (30 Days)</h3>
                    
                    {/* Grid Container */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {/* Render 30 kotak simulasi */}
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div 
                                key={i}
                                className={`
                                    w-8 h-8 md:w-10 md:h-10 rounded-sm border-2 border-[#3E3A2D] 
                                    transition-all hover:scale-110 cursor-pointer
                                    ${getHeatmapColor(i)}
                                `}
                            ></div>
                        ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="flex gap-4 mt-4 justify-end text-xs font-bold text-[#8B5E3C]">
                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#E6DCC3] border border-[#3E3A2D]"></div> Idle</div>
                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#93D7A6] border border-[#3E3A2D]"></div> Good</div>
                        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#4A8F5D] border border-[#3E3A2D]"></div> Epic</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

// --- HELPER COMPONENTS UNTUK VISUAL ---

function SummaryCard({ title, value, sub, icon, bgIcon }: any) {
    return (
        <div className="bg-white border-4 border-[#3E3A2D] p-4 rounded-xl shadow-[4px_4px_0px_#8B5E3C] hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">{title}</span>
                <div className={`${bgIcon} p-2 rounded border-2 border-[#3E3A2D] shadow-sm`}>
                    {icon}
                </div>
            </div>
            <h2 className="text-3xl font-black text-[#3E3A2D] mb-1">{value}</h2>
            <p className="text-[10px] font-bold text-[#6CBF84] bg-[#E6F4EA] inline-block px-1 rounded">{sub}</p>
        </div>
    )
}

function ChartBar({ day, height, color, active }: any) {
    return (
        <div className="flex flex-col justify-end h-full items-center gap-2 group w-full">
            {/* Tooltip on Hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#3E3A2D] text-[#FDF6E3] text-xs px-2 py-1 rounded font-bold whitespace-nowrap z-10">
                1250 XP
            </div>
            
            {/* The Bar */}
            <div className={`
                w-full md:w-12 ${height} ${color} 
                border-2 border-[#3E3A2D] rounded-t-sm relative
                group-hover:opacity-80 transition-all cursor-pointer
                ${active ? "border-b-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : ""}
            `}>
                {/* Shine Effect */}
                <div className="absolute top-0 right-0 w-[20%] h-full bg-black opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-white opacity-30"></div>
            </div>
            
            {/* Label */}
            <span className="text-[10px] font-bold text-[#3E3A2D] font-mono">{day}</span>
        </div>
    )
}

function SkillBar({ label, percent, color }: any) {
    return (
        <div>
            <div className="flex justify-between text-xs font-bold mb-1">
                <span className="uppercase text-[#EED9A6]">{label}</span>
                <span className="text-white">{percent}%</span>
            </div>
            <div className="h-4 w-full bg-[#2a271f] rounded border border-[#584D3D] p-0.5">
                <div 
                    className={`h-full ${color} rounded-sm relative`} 
                    style={{ width: `${percent}%` }}
                >
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-white opacity-50"></div>
                </div>
            </div>
        </div>
    )
}

// Fungsi dummy untuk acak warna heatmap visual
function getHeatmapColor(index: number) {
    // Pola random sederhana untuk demo visual
    if (index % 7 === 0) return "bg-[#E6DCC3]"; // Empty
    if (index % 3 === 0) return "bg-[#4A8F5D]"; // Dark Green (Epic)
    if (index % 2 === 0) return "bg-[#6CBF84]"; // Light Green
    return "bg-[#93D7A6]"; // Medium Green
}