"use client"
import React, { useState } from 'react';
import { 
    User, Mail, Lock, Sword, Wand2, 
    Ghost, ArrowRight, ChevronLeft, Shield 
} from 'lucide-react';

export default function Register() {
    const [selectedClass, setSelectedClass] = useState<'warrior' | 'mage' | 'rogue'>('warrior');

    return (
        // 1. Viewport Container (Fit Screen)
        <div className="h-[100dvh] bg-[#E6DCC3] font-sans text-[#3E3A2D] flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* --- BACKGROUND PATTERN --- */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#3E3A2D 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* --- BACK BUTTON (Absolute Top Left) --- */}
            <a href="/" className="absolute top-6 left-6 flex items-center gap-2 font-bold uppercase text-xs tracking-wider hover:text-[#D95763] transition-colors z-20">
                <ChevronLeft size={16} /> Back to Tavern
            </a>

            {/* --- MAIN CONTAINER (THE BOOK) --- */}
            {/* max-h-[90vh] memastikan container tidak melebihi tinggi layar */}
            <div className="w-full max-w-5xl h-full max-h-[90vh] bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-2xl shadow-[16px_16px_0px_#3E3A2D] overflow-hidden relative flex flex-col md:flex-row z-10">
                
                {/* --- LEFT SIDE: CHARACTER PREVIEW (Static) --- */}
                {/* Hidden di mobile agar fokus ke form */}
                <div className="hidden md:flex w-5/12 bg-[#3E3A2D] p-6 flex-col justify-between items-center text-center relative overflow-hidden border-r-4 border-[#3E3A2D]">
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 flex flex-col items-center h-full justify-center">
                        <h2 className="text-[#EED9A6] text-xs font-black uppercase tracking-[0.2em] mb-6">
                            Character Preview
                        </h2>

                        {/* Avatar Showcase */}
                        <div className="relative group mb-6">
                            {/* Class Badge */}
                            <div className="absolute -top-3 -right-3 bg-[#D95763] text-white p-2 rounded-lg border-2 border-[#EED9A6] shadow-md z-20 animate-bounce-slow">
                                {selectedClass === 'warrior' && <Sword size={18} />}
                                {selectedClass === 'mage' && <Wand2 size={18} />}
                                {selectedClass === 'rogue' && <Ghost size={18} />}
                            </div>

                            {/* Avatar Frame (Sedikit lebih kecil agar fit) */}
                            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#E6DCC3] rounded-2xl border-4 border-[#EED9A6] flex items-center justify-center shadow-[0_0_40px_rgba(238,217,166,0.2)] relative overflow-hidden">
                                <img 
                                    src="/images/avatar-img.jpeg" 
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                                    alt="Avatar" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-2 w-full animate-scanline opacity-30"></div>
                            </div>
                            
                            <div className="w-24 h-3 bg-[#2a271f] rounded-full mx-auto mt-4 opacity-50 blur-sm"></div>
                        </div>

                        {/* Class Description */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-[#FDF6E3] uppercase">
                                {selectedClass} Class
                            </h3>
                            <p className="text-[#EED9A6] text-[10px] font-mono leading-relaxed max-w-[200px] mx-auto opacity-80">
                                {selectedClass === 'warrior' && "High STR. Loves tackling hard tasks head-on. Bonus XP for morning streaks."}
                                {selectedClass === 'mage' && "High INT. Focuses on deep work and learning. Mana regenerates faster during night."}
                                {selectedClass === 'rogue' && "High DEX. Multitasker expert. Great at clearing small tasks quickly."}
                            </p>
                        </div>
                    </div>

                    <div className="text-[#584D3D] text-[10px] font-mono relative z-10">
                        *Class can be changed later
                    </div>
                </div>


                {/* --- RIGHT SIDE: REGISTRATION FORM (Scrollable Content) --- */}
                {/* overflow-y-auto enables scrolling ONLY inside this panel if content is too tall */}
                <div className="w-full md:w-7/12 bg-[#FDF6E3] relative overflow-y-auto custom-scrollbar">
                    <div className="p-6 md:p-8 lg:px-10 min-h-full flex flex-col justify-center">
                        
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl lg:text-3xl font-black uppercase text-[#3E3A2D] mb-1 flex items-center gap-2">
                                Join the Guild <Shield size={24} className="text-[#6CBF84]" />
                            </h1>
                            <p className="text-[#8B5E3C] font-bold text-xs lg:text-sm">
                                Create your adventurer profile to start tracking quests.
                            </p>
                        </div>

                        <form className="space-y-5">
                            
                            {/* 1. Class Selection Grid */}
                            <div>
                                <label className="block text-[10px] font-black uppercase text-[#3E3A2D] mb-2 tracking-wide">
                                    Choose Starting Class
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    <ClassCard 
                                        icon={<Sword size={16} />} 
                                        label="Warrior" 
                                        active={selectedClass === 'warrior'} 
                                        onClick={() => setSelectedClass('warrior')}
                                    />
                                    <ClassCard 
                                        icon={<Wand2 size={16} />} 
                                        label="Mage" 
                                        active={selectedClass === 'mage'} 
                                        onClick={() => setSelectedClass('mage')}
                                    />
                                    <ClassCard 
                                        icon={<Ghost size={16} />} 
                                        label="Rogue" 
                                        active={selectedClass === 'rogue'} 
                                        onClick={() => setSelectedClass('rogue')}
                                    />
                                </div>
                            </div>

                            {/* 2. Inputs */}
                            <div className="space-y-3">
                                <InputGroup icon={<User size={16}/>} label="Hero Name" placeholder="e.g. Sir Codes-a-Lot" />
                                <InputGroup icon={<Mail size={16}/>} label="Scroll Address (Email)" placeholder="name@guild.com" />
                                <InputGroup icon={<Lock size={16}/>} label="Secret Passcode" placeholder="••••••••" type="password" />
                            </div>

                            {/* 3. Action Buttons */}
                            <div className="pt-2 space-y-3">
                                <button type="button" className="w-full bg-[#D95763] hover:bg-[#c03945] text-white font-bold text-base py-3 rounded-xl border-b-4 border-[#89323b] active:border-b-0 active:translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Create Character <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <p className="text-center text-[10px] lg:text-xs font-bold text-[#8B5E3C]">
                                    Already a member? <a href="/public/login" className="text-[#3E3A2D] underline hover:text-[#D95763]">Log in here</a>
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="relative flex py-1 items-center">
                                <div className="flex-grow border-t-2 border-[#3E3A2D]/10"></div>
                                <span className="flex-shrink mx-4 text-[#3E3A2D]/40 text-[10px] font-black uppercase">OR</span>
                                <div className="flex-grow border-t-2 border-[#3E3A2D]/10"></div>
                            </div>

                            {/* Social Login */}
                            <button type="button" className="w-full bg-white hover:bg-[#F0F0F0] text-[#3E3A2D] font-bold py-2.5 rounded-xl border-2 border-[#E6DCC3] hover:border-[#3E3A2D] transition-all flex items-center justify-center gap-2 text-xs lg:text-sm shadow-sm">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                                Summon with Google
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

// --- SUB COMPONENTS ---

function ClassCard({ icon, label, active, onClick }: any) {
    return (
        <div 
            onClick={onClick}
            className={`
                cursor-pointer rounded-lg p-2 lg:p-3 border-2 lg:border-4 flex flex-col items-center gap-1 lg:gap-2 transition-all
                ${active 
                    ? "bg-[#3E3A2D] border-[#3E3A2D] text-[#EED9A6] shadow-[2px_2px_0px_#8B5E3C] -translate-y-0.5" 
                    : "bg-white border-[#E6DCC3] text-[#3E3A2D] hover:border-[#3E3A2D] hover:bg-[#FDF6E3]"
                }
            `}
        >
            {icon}
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-wider">{label}</span>
        </div>
    )
}

function InputGroup({ label, placeholder, icon, type = "text" }: any) {
    return (
        <div className="relative group">
            <label className="block text-[10px] font-bold uppercase text-[#8B5E3C] mb-1 ml-1">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3E3A2D] opacity-50 group-focus-within:opacity-100 group-focus-within:text-[#D95763] transition-colors">
                    {icon}
                </div>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    className="w-full bg-white border-2 lg:border-4 border-[#E6DCC3] text-[#3E3A2D] font-bold text-sm py-2.5 lg:py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#3E3A2D] focus:shadow-[2px_2px_0px_#EED9A6] transition-all placeholder-[#3E3A2D]/30"
                />
            </div>
        </div>
    )
}