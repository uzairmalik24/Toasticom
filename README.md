toasticom
A lightweight, customizable toast notification library for React. Initialize once, then use toast("type", "message") anywhere to show sleek notifications.
✨ Features

Simple API: toast("success" | "error" | "warning" | "info", message, [options])
Global defaults via ToastProvider (duration, position, styling)
Customizable per-toast styles (override global defaults)
Built-in polished look (rounded, blurred, shadowed)
Optional close button
Supports React 18+
Custom toast styles (gradient, glassmorphism, neon, minimal)

📦 Installation
Install via npm, yarn, or pnpm:
npm i toasticom
# or
yarn add toasticom
# or
pnpm add toasticom

Note: toasticom requires react and react-dom as peer dependencies.
🚀 Quick Start

Wrap your app with ToastProvider:
Vite/CRA (src/App.jsx):
import { ToastProvider } from "toasticom";
import Home from "./Home";

export default function App() {
  return (
    <ToastProvider
      config={{
        duration: 4000,
        position: "top-right",
        showCloseButton: true,
        toastStyle: {
          fontSize: "0.95rem",
          fontWeight: 500,
        },
      }}
    >
      <Home />
    </ToastProvider>
  );
}

Next.js (App Router) (app/layout.tsx or app/providers.tsx):
"use client";

import { ToastProvider } from "toasticom";

export function Providers({ children }) {
  return (
    <ToastProvider
      config={{
        duration: 3500,
        position: "bottom-right",
        showCloseButton: true,
        toastStyle: {
          fontSize: "0.95rem",
          fontWeight: 500,
        },
      }}
    >
      {children}
    </ToastProvider>
  );
}


Trigger toasts anywhere:
import { toast } from "toasticom";

export default function Demo() {
  return (
    <div>
      <button onClick={() => toast("success", "Saved successfully!")}>Save</button>
      <button onClick={() => toast("error", "Something went wrong!")}>Fail</button>
      <button onClick={() => toast("warning", "Careful there...")}>Warn</button>
      <button onClick={() => toast("info", "Heads up!")}>Info</button>
    </div>
  );
}



🎨 Custom Toasts
Override global styles for individual toasts by passing an optional options object to toast.
Custom Gradient Toast
toast("info", "🎨 Custom Styled Toast with Gradient!", {
  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(236, 72, 153, 0.85))",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
  fontSize: "1rem",
  fontWeight: "600",
  padding: "16px 24px",
});

Glassmorphism Toast
toast("success", "✨ Glassmorphism Style Toast!", {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#fff",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
});

Neon Glow Toast
toast("warning", "⚡ Neon Glow Toast!", {
  background: "#000",
  color: "#00ff88",
  border: "2px solid #00ff88",
  borderRadius: "8px",
  boxShadow: "0 0 20px #00ff88, inset 0 0 20px rgba(0, 255, 136, 0.1)",
  fontWeight: "bold",
});

Minimal Toast
toast("info", "Clean & Minimal", {
  background: "#fff",
  color: "#333",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  fontSize: "0.875rem",
});

🔧 API Reference
ToastProvider
Wrap your app to set global defaults.
<ToastProvider
  config={{
    duration: 4000, // ms, default: 3000
    position: "top-right", // or top-left, bottom-right, bottom-left
    showCloseButton: true, // default: true
    toastStyle: {
      fontSize: "0.95rem",
      fontWeight: 500,
    },
  }}
>
  {children}
</ToastProvider>

toast
Trigger a toast with type, message, and optional styles.
toast(type: "success" | "error" | "warning" | "info", message: string, options?: React.CSSProperties): void;

Example:
toast("success", "Profile updated!");

🛠️ Styling Tips

Global Styles: Set base styles (font, weight) in ToastProvider using toastStyle.
Per-Toast Overrides: Use the options object to customize individual toasts.
Premium Look: Try gradients, blur, or neon effects for a modern vibe.
Responsive Design: Test toasts on mobile to ensure they don’t overlap UI elements.
