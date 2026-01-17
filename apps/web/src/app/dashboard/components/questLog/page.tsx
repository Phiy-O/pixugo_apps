// "use client";
// import React, { useState } from "react";
// import { Plus, Check, Trash2, X } from "lucide-react";

// export default function QuestModal({ modal, setModal }: { modal: boolean, setModal: any }) {
//   // Dummy data untuk visualisasi
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Selesaikan Design System", done: true },
//     { id: 2, text: "Push ke Github", done: false },
//     { id: 3, text: "Minum air 2 Liter", done: false },
//   ]);

//   return (
//     <div
//       className={`
//         fixed bottom-24 right-6 
//         w-80 max-h-[500px]
//         bg-[#FDF6E3] /* Warna Kertas Perkamen */
//         border-4 border-[#8B5E3C] /* Border Kayu */
//         rounded-xl
//         shadow-[8px_8px_0px_rgba(62,58,45,0.8)] /* Hard Shadow RPG */
//         flex flex-col overflow-hidden
//         z-40 /* Di bawah Sidebar (z-100) tapi di atas konten */
        
//         /* --- ANIMATION LOGIC --- */
//         transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] /* Efek Bouncy */
//         origin-bottom-right /* Muncul dari pojok kanan bawah */
        
//         ${modal 
//           ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
//           : "opacity-0 scale-90 translate-y-10 pointer-events-none"
//         }
//       `}
//     >
//       {/* HEADER: KERTAS BAGIAN ATAS */}
//       <div className="bg-[#8B5E3C] p-3 border-b-4 border-[#6D4C41] flex justify-between items-center">
//         <h3 className="text-white font-bold tracking-wider uppercase text-sm drop-shadow-md">
//            📜 Quest Log
//         </h3>
//         <button 
//             onClick={() => setExpanded(false)} // Atau setModal(false)
//             className="text-[#EED9A6] hover:text-white transition-colors"
//         >
//             <X size={18} />
//         </button>
//       </div>

//       {/* BODY: LIST TASKS */}
//       <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
//         {tasks.length === 0 ? (
//             <p className="text-center text-[#8B5E3C] opacity-60 text-xs italic mt-4">
//                 Tidak ada quest aktif.
//             </p>
//         ) : (
//             <div className="space-y-2">
//                 {tasks.map((task) => (
//                     <div 
//                         key={task.id} 
//                         className={`
//                             group flex items-center gap-3 p-2 rounded-lg border-2 
//                             transition-all duration-200 cursor-pointer
//                             ${task.done 
//                                 ? "bg-[#E6DCC3] border-transparent opacity-60" 
//                                 : "bg-white border-[#EED9A6] hover:border-[#8B5E3C]"
//                             }
//                         `}
//                     >
//                         {/* Checkbox RPG Style */}
//                         <div className={`
//                             h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors
//                             ${task.done ? "bg-[#6CBF84] border-[#4A8F5D]" : "border-[#8B5E3C] bg-[#FDF6E3]"}
//                         `}>
//                             {task.done && <Check size={12} className="text-white" strokeWidth={4} />}
//                         </div>

//                         {/* Text */}
//                         <span className={`text-sm font-bold text-[#3E3A2D] w-full ${task.done ? "line-through" : ""}`}>
//                             {task.text}
//                         </span>

//                         {/* Delete Action (Muncul saat hover) */}
//                         <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D95763]">
//                             <Trash2 size={14} />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         )}
//       </div>

//       {/* FOOTER: ADD NEW */}
//       <div className="p-3 bg-[#EED9A6] border-t-2 border-[#D4C5A3]">
//         <div className="flex gap-2">
//             <input 
//                 type="text" 
//                 placeholder="Tambah quest baru..." 
//                 className="w-full bg-white border-2 border-[#8B5E3C] rounded px-2 py-1 text-sm text-[#3E3A2D] placeholder-[#8B5E3C]/50 focus:outline-none focus:border-[#D95763]"
//             />
//             <button className="bg-[#6CBF84] hover:bg-[#58A66F] text-white p-1.5 rounded border-b-4 border-[#4A8F5D] active:border-b-0 active:translate-y-1 transition-all">
//                 <Plus size={18} />
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// }