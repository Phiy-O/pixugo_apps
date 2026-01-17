"use client"
import React, { useState } from 'react';
import QuestButton from '../components/QuestButton';
import BubbleMessage from '../components/BubbleMessage';
import AudioPlayer from '../components/AudioPlayer';

export default function Home() {
    return (
        <div className='h-dvh' style={{
            backgroundImage: `url("https://i.pinimg.com/originals/93/9e/92/939e9273e3d6ef4f281cda31e9e62488.gif")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            imageRendering: 'pixelated',
            zIndex: -1
        }}
        >
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className='absolute h-screen ml-20 flex justify-center items-center z-10'>

                {/* Bubble Message */}
                <BubbleMessage />

                {/* Quest Button */}
                <QuestButton />

                {/* Audio Player */}
                <AudioPlayer />

            </div>
        </div>
    )
}