"use client"
import React, { useState } from 'react';

export default function Home() {
    return (
        <div className='h-dvh' style={{
            backgroundImage: `url("/images/pixugo-dashboard-background.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1
        }}
        >
            <div className='absolute left-0 right-0 h-full -z-1 bg-black opacity-50'></div>
            <div className='flex justify-center z-0'>
                <p className='text-white'>Hello World</p>
            </div>
        </div>
    )
}