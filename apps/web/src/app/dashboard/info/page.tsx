"use client"
import React from "react";

export default function Info() {
    return (
        <div className="ml-20">
            <p>v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
        </div>
    )
}