"use client"
import React, { ReactNode, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";

export default function Sidebar({ children }: any) {
    const [expanded, setExpanded] = useState(false)

    return (
        <aside className="absolute h-screen">
            <nav className={`fixed z-20 bg-[#F1D9B5] border-r-4 border-[#C9A36A] h-screen transition-all duration-300 ${expanded ? "w-1/8" : "w-1/24"}`}>
                <div className="h-screen flex flex-col justify-between items-left py-4">
                    {/* Top Menu */}
                    <div className="">
                        <div className="flex flex-col items-center gap-2 justify-center transition-all duration-300">
                            <button type="button" onClick={() => setExpanded((curr) => !curr)} className={`text-[#3E3A2D] rounded-xl justify-start cursor-pointer p-2 hover:bg-[#E8C9A1] transition-all duration-300 mx-2 flex items-center gap-3 ${expanded ? "w-44" : "w-11"}`}>
                                <svg className="w-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" fill="currentColor" /> </svg>
                                <span className={`text-xl overflow-hidden whitespace-nowrap transition-all duration-300 ${expanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"}`}>Workspace</span>
                            </button>

                            {/* profile icon */}
                            <ProfileSidebar expanded={expanded} />
                        </div>

                        {/* Menu */}
                        <div className="border-t-2 border-[#C9A36A] mx-2 my-4 py-2 transition-all duration-300">
                            <ul className={`flex flex-col gap-4 text-[#3E3A2D] transition-all duration-300 ${expanded ? "items-baseline" : "items-center"}`}>
                                <SidebarItem href="/dashboard/home" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z" fill="currentColor" /> </svg>} label="Dashboard" />
                                <SidebarItem href="/dashboard/overview" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M2 3h20v18H2V3zm18 16V5H4v14h16zM8 7H6v2h2V7zm2 0h8v2h-8V7zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2z" fill="currentColor" /> </svg>} label="Overview" />
                                <SidebarItem href="/dashboard/tasks" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 4h2v2h-2V4zm-2 4V6h2v2h-2zm-2 0h2v2h-2V8zm0 0h-2V6h2v2zM3 6h8v2H3V6zm8 10H3v2h8v-2zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2zm0 0v2h2v-2h-2z" fill="currentColor" /> </svg>} label="Tasks" />
                                <SidebarItem href="/dashboard/analytics" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 3h18v18H3V3zm16 2H5v14h14V5zM7 12h2v5H7v-5zm10-5h-2v10h2V7zm-6 3h2v2h-2v-2zm2 4h-2v3h2v-3z" fill="currentColor" /> </svg>} label="Analytics" />
                                <SidebarItem href="/dashboard/setting" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /> </svg>} label="Setting" />
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Menu */}
                    <div className="border-t-2 border-[#C9A36A] mx-2 my-4 py-2 transition-all duration-300">
                        <ul className={`flex flex-col gap-4 text-[#3E3A2D] transition-all duration-300 ${expanded ? "items-baseline" : "items-center"}`}>
                            <SidebarItem href="/dashboard/help" expanded={expanded} icon={<img className="h-7 shrink-0" src="/icons/icons8-question-mark-64.png" alt="question-mark" />} label="Setting" />
                            <SidebarItem href="/dashboard/info" expanded={expanded} icon={<svg className="h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z" fill="currentColor" /> </svg>} label="Setting" />
                        </ul>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

function SidebarItem({ href, label, icon, expanded }: { href: string, label: string, icon: any, expanded: boolean }) {
    return (
        <div className={`transition-all duration-300 ${expanded ? "w-44" : "w-11"}`}>
            <a className="flex items-center justify-start gap-3 rounded-lg p-2 hover:bg-[#E8C9A1] transition-all duration-300" href={href}>
                <span className="h-7 shrink-0">{icon}</span>
                <span className={`overflow-hidden whitespace-nowrap text-xl transition-all duration-300 ${expanded ? "opacity-100 max-w-24" : "opacity-0 max-w-0"}`}>{label}</span>
            </a>
        </div>
    )
}