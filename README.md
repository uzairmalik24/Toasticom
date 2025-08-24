
# toasticom

A clean, customizable toast notification library for React.  
Initialize once in your app root, then trigger toasts anywhere with a tiny API.

## ✨ Features

- Initialize **once** with global defaults (duration, position, styling)
- Simple API: `toast("success" | "error" | "warning" | "info", message)`
- Polished default look (rounded, blurred, shadowed)
- Optional global **close button**
- Works with React 18+

---

## 📦 Installation

> **Where:** In your app where you want to use toasticom.

```bash
npm i toasticom
# or
yarn add toasticom
# or
pnpm add toasticom
toasticom expects your app to provide react and react-dom (peer deps).

🚀 Quick Start
Where: In your React app.

1) Wrap your app with ToastProvider
Vite/CRA – src/App.jsx:


import React from "react";
import { ToastProvider } from "toasticom";
import Home from "./Home";

export default function App() {
  return (
    <ToastProvider
      config={{
        duration: 4000,
        position: "top-right",
        showCloseButton: true,
        style: {
          background: "#111827",
          color: "#F9FAFB",
          borderRadius: 12,
        },
      }}
    >
      <Home />
    </ToastProvider>
  );
}
Next.js (App Router) – app/layout.tsx or app/providers.tsx:


"use client";

import { ToastProvider } from "toasticom";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider
      config={{
        duration: 3500,
        position: "bottom-right",
        showCloseButton: true,
        style: { borderRadius: 14, backdropFilter: "blur(8px)" },
      }}
    >
      {children}
    </ToastProvider>
  );
}
Then include <Providers> at the root of your layout.

2) Call toast anywhere

import React from "react";
import { toast } from "toasticom";

export default function Demo() {
  return (
    <div>
      <button onClick={() => toast("success", "Saved successfully!")}>
        Save
      </button>
      <button onClick={() => toast("error", "Something went wrong")}>
        Fail
      </button>
      <button onClick={() => toast("warning", "Careful there...")}>
        Warn
      </button>
      <button onClick={() => toast("info", "Heads up!")}>
        Info
      </button>
    </div>
  );
}
🔧 API Reference
ToastProvider
Wrap your app once. Accepts a config object.


type ToastConfig = {
  duration?: number; // default: 3000 (ms)
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; // default: "top-right"
  style?: React.CSSProperties; // global inline styles applied to each toast
  showCloseButton?: boolean; // default: true
};
Example:


<ToastProvider
  config={{
    duration: 4000,
    position: "bottom-right",
    showCloseButton: true,
    style: {
      background: "#1f2937",
      color: "#fff",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    },
  }}
>
  {children}
</ToastProvider>
toast(type, message)

type ToastType = "success" | "error" | "warning" | "info";

toast(type: ToastType, message: string): void;
Example:

toast("success", "Profile updated!");

🎨 Styling Tips
Global style (from ToastProvider) sets the base look (radius, padding, fonts, blur, shadows, dark/light).

Each type comes with built-in colors and icons for a distinct vibe.

Want a premium feel? Try:


style: {
  background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: 14,
}