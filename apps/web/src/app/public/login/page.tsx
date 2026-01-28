"use client"
import React from 'react';
import { 
    Mail, Lock, ArrowRight, ChevronLeft, 
    LogIn, Key, Skull, Clock 
} from 'lucide-react';

export default function Login() {
    return (
        // 1. Viewport Container (Fit Screen 100dvh)
        <div className="h-[100dvh] bg-[#E6DCC3] font-sans text-[#3E3A2D] flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* --- BACKGROUND PATTERN --- */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#3E3A2D 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* --- BACK BUTTON --- */}
            <a href="/" className="absolute top-6 left-6 flex items-center gap-2 font-bold uppercase text-xs tracking-wider hover:text-[#D95763] transition-colors z-20">
                <ChevronLeft size={16} /> Back to Title Screen
            </a>

            {/* --- MAIN CONTAINER --- */}
            <div className="w-full max-w-5xl h-full max-h-[90vh] bg-[#FDF6E3] border-4 border-[#3E3A2D] rounded-2xl shadow-[16px_16px_0px_#3E3A2D] overflow-hidden relative flex flex-col md:flex-row z-10">
                
                {/* --- LEFT SIDE: SAVE FILE PREVIEW (Visual Context) --- */}
                <div className="hidden md:flex w-5/12 bg-[#3E3A2D] p-8 flex-col justify-center items-center text-center relative overflow-hidden border-r-4 border-[#3E3A2D]">
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 w-full max-w-xs">
                        <h2 className="text-[#EED9A6] text-xs font-black uppercase tracking-[0.2em] mb-6">
                            Resume Adventure
                        </h2>

                        {/* "Save File" Card Visual */}
                        <div className="bg-[#E6DCC3] border-4 border-[#EED9A6] rounded-xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-300 cursor-default">
                            <div className="flex items-center gap-4 mb-4 border-b-2 border-[#3E3A2D]/10 pb-3">
                                <div className="w-12 h-12 bg-[#3E3A2D] rounded-lg border-2 border-[#EED9A6] overflow-hidden">
                                     <img src="/images/avatar-img.jpeg" className="w-full h-full object-cover opacity-80" alt="User" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[#3E3A2D] font-black uppercase text-sm">Player One</div>
                                    <div className="text-[#D95763] text-[10px] font-bold font-mono">Lvl. 12 Warrior</div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <SaveStat icon={<Skull size={14}/>} label="Quests Done" value="42" />
                                <SaveStat icon={<Clock size={14}/>} label="Last Login" value="2 Days Ago" />
                            </div>

                            <div className="mt-4 bg-[#6CBF84] text-white text-[10px] font-bold uppercase py-1 rounded border border-[#4A8F5D] animate-pulse">
                                Ready to Load
                            </div>
                        </div>

                        <p className="text-[#584D3D] text-[10px] font-mono mt-6 opacity-60">
                            "Welcome back, hero. The guild needs you."
                        </p>
                    </div>
                </div>


                {/* --- RIGHT SIDE: LOGIN FORM --- */}
                <div className="w-full md:w-7/12 bg-[#FDF6E3] relative overflow-y-auto custom-scrollbar flex flex-col justify-center">
                    <div className="p-6 md:p-12 w-full max-w-lg mx-auto">
                        
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-black uppercase text-[#3E3A2D] mb-1 flex items-center gap-2">
                                Welcome Back <LogIn size={28} className="text-[#3E76D9]" />
                            </h1>
                            <p className="text-[#8B5E3C] font-bold text-sm">
                                Enter your credentials to unlock the gate.
                            </p>
                        </div>

                        <form className="space-y-6">
                            
                            {/* Inputs */}
                            <div className="space-y-4">
                                <InputGroup icon={<Mail size={18}/>} label="Scroll Address (Email)" placeholder="hero@guild.com" type="email" />
                                
                                <div>
                                    <InputGroup icon={<Key size={18}/>} label="Secret Key (Password)" placeholder="••••••••" type="password" />
                                    <div className="text-right mt-2">
                                        <a href="#" className="text-[10px] font-bold uppercase text-[#D95763] hover:underline tracking-wide">
                                            Lost your key?
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-2 space-y-4">
                                <button type="button" className="w-full bg-[#3E3A2D] text-[#EED9A6] hover:bg-[#2a271f] font-bold text-lg py-4 rounded-xl border-b-4 border-black active:border-b-0 active:translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Enter Tavern <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <div className="relative flex py-2 items-center">
                                    <div className="flex-grow border-t-2 border-[#3E3A2D]/10"></div>
                                    <span className="flex-shrink mx-4 text-[#3E3A2D]/40 text-xs font-black uppercase">OR</span>
                                    <div className="flex-grow border-t-2 border-[#3E3A2D]/10"></div>
                                </div>

                                {/* Social Login */}
                                <button type="button" className="w-full bg-white hover:bg-[#F0F0F0] text-[#3E3A2D] font-bold py-3 rounded-xl border-2 border-[#E6DCC3] hover:border-[#3E3A2D] transition-all flex items-center justify-center gap-2 text-sm shadow-sm">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                    Summon with Google
                                </button>
                            </div>

                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-xs font-bold text-[#8B5E3C]">
                                New adventurer? <a href="/public/register" className="text-[#3E3A2D] underline hover:text-[#D95763] decoration-2">Create Character</a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

// --- SUB COMPONENTS ---

function InputGroup({ label, placeholder, icon, type = "text" }: any) {
    return (
        <div className="relative group">
            <label className="block text-[10px] font-bold uppercase text-[#8B5E3C] mb-1 ml-1">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E3A2D] opacity-50 group-focus-within:opacity-100 group-focus-within:text-[#D95763] transition-colors">
                    {icon}
                </div>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    className="w-full bg-white border-4 border-[#E6DCC3] text-[#3E3A2D] font-bold text-sm py-3 pl-12 pr-4 rounded-xl focus:outline-none focus:border-[#3E3A2D] focus:shadow-[4px_4px_0px_#EED9A6] transition-all placeholder-[#3E3A2D]/30"
                />
            </div>
        </div>
    )
}

function SaveStat({ icon, label, value }: any) {
    return (
        <div className="flex justify-between items-center text-[#3E3A2D]">
            <div className="flex items-center gap-2 text-xs font-bold opacity-70">
                {icon} {label}
            </div>
            <div className="font-black text-sm">{value}</div>
        </div>
    )
}