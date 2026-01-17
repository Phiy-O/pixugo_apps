"use client";
import React, { useState } from "react";
import { Plus, Check, Trash2, X } from "lucide-react";

export default function QuestModal({ modal, setModal }: { modal: boolean, setModal: any }) {
  // Dummy data untuk visualisasi
  const [tasks, setTasks] = useState([
    { id: 1, text: "Selesaikan Design System", done: true },
    { id: 2, text: "Push ke Github", done: false },
    { id: 3, text: "Minum air 2 Liter", done: false },
  ]);

  return (
    <div>
        
    </div>
  );
}