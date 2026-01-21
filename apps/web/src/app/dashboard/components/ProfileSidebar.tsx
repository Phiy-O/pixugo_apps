"use client";
import { Crown, Flame, Coins } from "lucide-react"; // Install lucide-react jika belum

interface ProfileSidebarProps {
    expanded: boolean;
    // Kita tambahkan props data user agar dinamis
    userData?: {
        username: string;
        level: number;
        rank: string;
        currentXp: number;
        maxXp: number;
        coins: number;
        streak: number;
    };
}

export default function ProfileSidebar({ expanded, userData }: ProfileSidebarProps) {
    // Data dummy default jika tidak ada props (untuk preview)
    const user = userData || {
        username: "Phiy-O",
        level: 5,
        rank: "Novice Ranger",
        currentXp: 750,
        maxXp: 1000,
        coins: 1250,
        streak: 12,
    };

    // Kalkulasi persentase XP untuk width bar
    const xpPercentage = Math.min((user.currentXp / user.maxXp) * 100, 100);

    return (
        <div
            className={`
        bg-[#C9A36A]
        rounded-xl
        transition-all duration-300 ease-in-out
        overflow-hidden
        relative
        z-20
        ${expanded ? "h-44 w-44" : "h-12 w-12"}
      `}
        >
            <div className={`flex shrink-0 flex-col items-center gap-2 ${expanded ? "py-2" : "py-2 justify-center"}`}>

                {/* === AVATAR SECTION === */}
                <div className="relative group cursor-pointer">
                    <a href="/dashboard/profile">
                        <img
                            src="/images/avatar-img.jpeg" // Ganti path sesuai projectmu
                            alt="avatar"
                            className={`
                        bg-[#3E3A2D] object-cover
                        transition-all duration-300 rounded-full
                        ${expanded
                                    ? "h-16 w-16 border-4 border-[#3E3A2D]"
                                    : "h-8 w-8 border-2 border-[#3E3A2D] hover:border-[#D98E04]" // Tambah efek hover saat collapsed
                                }
                    `}
                        />
                    </a>

                    {/* Level Badge (Melayang di sudut avatar) */}
                    <div className={`
                absolute -bottom-2 -right-2 
                bg-[#D95763] border-2 border-[#3E3A2D] text-white 
                rounded-full flex items-center justify-center font-bold font-mono
                transition-all duration-300 z-10
                ${expanded
                            ? "h-6 w-6 text-sm bottom-0 right-0 scale-100 opacity-100"
                            : "h-4 w-4 text-[8px] bottom-0 right-0 scale-0 opacity-0"}
            `}>
                        {user.level}
                    </div>
                </div>

                <div
                    className={`
            transition-all duration-300 flex flex-col items-center w-full px-2 overflow-hidden ease-in-out
            ${expanded 
            ? "max-h-24 opacity-100 translate-y-0 delay-75" 
            : "max-h-0 opacity-0 translate-y-4"
            }
          `}
                >
                    {/* NAMA & TITLE */}
                    <div className="text-center mb-2 whitespace-nowrap">
                        <h3 className="text-lg font-black text-[#3E3A2D] leading-tight truncate w-40">
                            {user.username}
                        </h3>
                        <div className="flex items-center justify-center gap-1 text-[#3E3A2D] opacity-80">
                            <Crown size={12} fill="#3E3A2D" />
                            <p className="text-[10px] font-bold uppercase tracking-widest truncate w-20 text-center">
                                {user.rank}
                            </p>
                        </div>
                    </div>

                    {/* XP BAR SYSTEM */}
                    <div className="w-36 mb-3 group relative">
                        <div className="flex justify-between text-[10px] font-bold text-[#3E3A2D] mb-0.5 px-2">
                            <span>XP</span>
                            <span>{user.currentXp}/{user.maxXp}</span>
                        </div>
                        {/* Container Bar */}
                        <div className="bg-[#3E3A2D] p-0.5 rounded-md">
                            <div className="bg-[#584D3D] h-1.5 rounded-sm overflow-hidden relative w-full">
                                {/* Progress Fill */}
                                <div
                                    className="bg-[#6CBF84] h-full transition-all duration-500 ease-out relative"
                                    style={{ width: `${xpPercentage}%` }}
                                >
                                    {/* Efek Shine/Kilap pada bar */}
                                    <div className="absolute top-0 left-0 w-full h-1/4 bg-white opacity-30"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}