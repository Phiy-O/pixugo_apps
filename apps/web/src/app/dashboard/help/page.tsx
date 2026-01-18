"use client"
import React from 'react';
import {
    HelpCircle, Search, Book, MessageSquare,
    ShieldQuestion, Bug, Mail, ChevronDown,
    LifeBuoy, Map
} from 'lucide-react';

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-[#E6DCC3] p-8 text-[#3E3A2D] flex flex-col gap-8 ml-16">

            {/* --- PAGE HEADER --- */}
            <div className="border-b-4 border-[#3E3A2D] pb-4 bg-[#E6DCC3] sticky top-0 z-10 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[#3E3A2D] flex items-center gap-3">
                        <img className="h-8 shrink-0" src="/icons/icons8-question-mark-64.png" alt="question-mark" />
                        Guild Support
                    </h1>
                    <p className="text-[#8B5E3C] font-bold text-sm mt-1">
                        KNOWLEDGE BASE & FAQ
                    </p>
                </div>
            </div>

            {/* --- HERO SEARCH SECTION --- */}
            <div className="bg-[#3E3A2D] border-4 border-[#584D3D] rounded-xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Map size={200} textAnchor="middle" className="text-[#EED9A6]" />
                </div>

                <div className="relative z-1 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-black text-[#FDF6E3] uppercase mb-2 tracking-wide">
                        Lost in the dungeon?
                    </h2>
                    <p className="text-[#EED9A6] mb-6 font-medium">
                        Search the ancient scrolls or consult the guild masters.
                    </p>

                    {/* Search Input */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Type your question (e.g. 'How to reset XP?')"
                            className="w-full bg-[#FDF6E3] border-4 border-[#EED9A6] text-[#3E3A2D] font-bold py-3 pl-12 pr-4 rounded-lg focus:outline-none focus:border-[#6CBF84] shadow-[4px_4px_0px_#1a1812] transition-all placeholder-[#3E3A2D]/40"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E3A2D]" size={20} />
                    </div>
                </div>
            </div>

            {/* --- HELP CATEGORIES (Cards) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CategoryCard
                    icon={<Book size={24} />}
                    title="Getting Started"
                    desc="Tutorial quests and basic mechanics."
                    color="bg-[#6CBF84]"
                />
                <CategoryCard
                    icon={<ShieldQuestion size={24} />}
                    title="Account & Security"
                    desc="Login issues, password reset, and data."
                    color="bg-[#3E76D9]"
                />
                <CategoryCard
                    icon={<Bug size={24} />}
                    title="Report a Monster"
                    desc="Found a bug? Let us slay it for you."
                    color="bg-[#D95763]"
                />
            </div>

            {/* --- FAQ SECTION (Accordion Style) --- */}
            <div className="flex flex-col lg:flex-row gap-8">

                {/* LEFT: FAQ LIST */}
                <div className="flex-1 bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-xl p-6 shadow-[8px_8px_0px_#3E3A2D]">
                    <div className="flex items-center gap-2 mb-6 border-b-2 border-[#EED9A6] pb-2">
                        <HelpCircle size={24} className="text-[#D98E04]" />
                        <h3 className="text-xl font-black text-[#3E3A2D] uppercase">Common Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <FaqItem
                            q="How do I earn XP and Gold?"
                            a="You earn XP by completing tasks in the 'Quest Board'. Gold is awarded for maintaining streaks and finishing high-priority quests."
                        />
                        {/* FAQ Item 2 */}
                        <FaqItem
                            q="Can I change my character class?"
                            a="Currently, all players start as 'Novice'. Specializations (Wizard, Warrior, Rogue) unlock at Level 10."
                        />
                        {/* FAQ Item 3 */}
                        <FaqItem
                            q="Is vacation mode free?"
                            a="Yes! You can enable Vacation Mode in Settings to freeze your streak without penalty while you are AFK."
                        />
                        {/* FAQ Item 4 */}
                        <FaqItem
                            q="How to sync with Google Calendar?"
                            a="Go to Settings > Integrations > Google Calendar. You will receive a magic link to bind your accounts."
                        />
                    </div>
                </div>

                {/* RIGHT: CONTACT SUPPORT */}
                <div className="w-full lg:w-80 shrink-0 space-y-6">

                    {/* Contact Card */}
                    <div className="bg-[#EED9A6] border-4 border-[#3E3A2D] p-1 rounded-xl shadow-[6px_6px_0px_#3E3A2D]">
                        <div className="bg-[#FDF6E3] border border-[#D4C5A3] p-5 rounded-lg text-center">
                            <div className="w-16 h-16 bg-[#3E3A2D] text-[#EED9A6] rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-[#8B5E3C] shadow-sm">
                                <MessageSquare size={32} />
                            </div>
                            <h3 className="font-black text-[#3E3A2D] text-lg uppercase mb-1">Still Stuck?</h3>
                            <p className="text-sm text-[#8B5E3C] mb-4">Summon a Game Master (Support Agent) for help.</p>

                            <button className="w-full bg-[#3E3A2D] text-white font-bold py-2 rounded border-b-4 border-black active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                                <Mail size={16} /> Send Carrier Pigeon
                            </button>
                        </div>
                    </div>

                    {/* Community Link */}
                    <div className="border-2 border-dashed border-[#3E3A2D] p-4 rounded-xl text-center hover:bg-[#3E3A2D]/5 transition-colors cursor-pointer">
                        <p className="font-bold text-[#3E3A2D] text-sm">Join the Discord Guild</p>
                        <p className="text-xs text-[#8B5E3C]">Chat with other adventurers</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

// --- VISUAL COMPONENTS ---

function CategoryCard({ icon, title, desc, color }: any) {
    return (
        <div className="bg-white border-4 border-[#3E3A2D] p-4 rounded-xl shadow-[4px_4px_0px_#8B5E3C] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#8B5E3C] transition-all cursor-pointer group">
            <div className={`w-12 h-12 ${color} text-white rounded-lg border-2 border-[#3E3A2D] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="font-black text-[#3E3A2D] text-lg uppercase mb-1">{title}</h3>
            <p className="text-sm text-[#8B5E3C] font-medium leading-tight">{desc}</p>
        </div>
    )
}

function FaqItem({ q, a }: { q: string, a: string }) {
    return (
        <details className="group bg-white border-2 border-[#E6DCC3] rounded-lg open:border-[#3E3A2D] open:shadow-[4px_4px_0px_#EED9A6] transition-all duration-300">
            <summary className="flex justify-between items-center p-4 cursor-pointer font-bold text-[#3E3A2D] hover:bg-[#E6DCC3]/20 select-none list-none">
                <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D95763] rounded-full"></div>
                    {q}
                </span>
                <ChevronDown size={20} className="text-[#8B5E3C] transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 pt-0 text-sm text-[#5A4D3B] leading-relaxed border-t-2 border-transparent group-open:border-[#E6DCC3] group-open:pt-3">
                {a}
            </div>
        </details>
    )
}