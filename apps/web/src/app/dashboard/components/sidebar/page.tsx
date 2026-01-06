"use client"
import React, { useState } from "react";

export default function Sidebar() {
    return (
        <nav className="fixed bg-black h-screen w-1/8">
            <div className="h-screen flex flex-col justify-between items-left py-4">
                {/* Top Menu */}
                <div>
                    {/* Logo */}
                    <div className="flex justify-center">
                        <img className="h-8" src="/icons/pixugo-logo.png" alt="pixugo-logo" />
                    </div>

                    {/* Menu */}
                    <div className="my-5 px-2">
                        <ul className="flex flex-col gap-4">
                            <div className="text-white">
                                <a className="flex items-center gap-3 rounded-lg px-1 py-2 hover:bg-gray-400 transition duration-200" href="">
                                    <svg className="h-7" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z" fill="currentColor" /> </svg>
                                    <span className="text-xl">Dashboard</span>
                                </a>
                            </div>
                            <div className="text-white">
                                <a className="flex items-center gap-3 rounded-lg px-1 py-2 hover:bg-red-300 transition duration-200" href="">
                                    <svg className="h-7 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M2 3h20v18H2V3zm18 16V5H4v14h16zM8 7H6v2h2V7zm2 0h8v2h-8V7zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2z" fill="currentColor" /> </svg>
                                    <span className="text-xl">Overview</span>
                                </a>
                            </div>
                            <div className="text-white">
                                <a className="flex items-center gap-3 rounded-lg px-1 py-2 hover:bg-red-300 transition duration-200" href="">
                                    <svg className="h-7 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 4h2v2h-2V4zm-2 4V6h2v2h-2zm-2 0h2v2h-2V8zm0 0h-2V6h2v2zM3 6h8v2H3V6zm8 10H3v2h8v-2zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2zm0 0v2h2v-2h-2z" fill="currentColor" /> </svg>
                                    <span className="text-xl">Tasks</span>
                                </a>
                            </div>
                            <div className="text-white">
                                <a className="flex items-center gap-3 rounded-lg px-1 py-2 hover:bg-red-300 transition duration-200" href="">
                                    <svg className="h-7 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 3h18v18H3V3zm16 2H5v14h14V5zM7 12h2v5H7v-5zm10-5h-2v10h2V7zm-6 3h2v2h-2v-2zm2 4h-2v3h2v-3z" fill="currentColor" /> </svg>
                                    <span className="text-xl">Analytics</span>
                                </a>
                            </div>
                            <div className="text-white">
                                <a className="flex items-center gap-3 rounded-lg px-1 py-2 hover:bg-red-300 transition duration-200" href="">
                                    <svg className="h-7 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /> </svg>
                                    <span className="text-xl">Setting</span>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Bottom Menu */}
                <div>
                    <div className="flex items-center bg-blue-300 justify-between px-2 h-10">
                        {/* Profile Picture */}
                        <div className="rounded-full flex items-center">
                            <img className="rounded-full border-2 border-red-500 h-8" src="/images/avatar-img.jpeg" alt="avatar-icon" />
                        </div>

                        {/* Profile Name & Badge */}
                        <div className="text-white flex flex-col text-sm leading-4">
                            <p>Andika Vio Pratama</p>
                            <p>Beginner</p>
                        </div>

                        {/* Logout Icon */}
                        <div>
                            <a href="">
                                <svg className="h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor" /> </svg>
                            </a>
                        </div>
                    </div>

                    {/* Version */}
                    <div className="text-white">
                        <p className="text-center">V 0.0.0</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}