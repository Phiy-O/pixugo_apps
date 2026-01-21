"use client"
import React, { useState } from 'react';
import QuestModal from './QuestLog';
import { Map, Plus, Check, Trash2, X } from 'lucide-react';

export default function QuestButton() {
    const [modal, setModal] = useState(false);

    return (
        <div
            className='
                fixed
                bottom-6 right-6
                z-50 
                flex flex-col items-center gap-1
            '
        >
            {/* Icon Container */}
            <button
                type='button'
                onClick={() => setModal((curr) => !curr)}
                className='
                    cursor-pointer 
                    h-12 w-12
                    flex justify-center items-center 
                    rounded-xl
                    text-[#3E3A2D]
                    bg-[#E8C9A1] 
                    border-4 border-[#3E3A2D]
                    shadow-lg
                    hover:scale-105 transition-transform
                    active:scale-95
                '
            >
                <svg className='h-7' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M8 2h2v2h2v2h-2v10H8V6H6V4h2V2zM4 8V6h2v2H4zm2 10v2H4v2H2V8h2v10h2zm0 0h2v-2H6v2zm6 0h-2v-2h2v2zm2-10V6h-2v2h2zm2 0h-2v10h-2v2h2v2h2v-2h2v-2h2v-2h2V2h-2v2h-2v2h-2v2zm0 0h2V6h2v10h-2v2h-2V8z" fill="currentColor"/> </svg>
            </button>

            {/* Text Label */}
            <p className='
                text-[#E8C9A1] text-md font-bold tracking-wider 
                drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            '>
                Quest
            </p>

            {/* Quest Log Modal */}
            <QuestModal modal={modal} setModal={setModal} />
            
        </div>
    )
}
