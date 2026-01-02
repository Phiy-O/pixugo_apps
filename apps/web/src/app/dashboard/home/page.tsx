"use client"
import React, { useState } from 'react';

export default function Home() {
    return (
        <div className='h-dvh z-0' style={{
            backgroundImage: `url("/images/pixugo-dashboard-background.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
        >
            <div className='h-dvh bg-black opacity-50 z-0'></div>
        </div>
    )
}