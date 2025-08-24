import React, { createContext, useContext } from "react";
import { Toaster } from "sonner";

export type ToastConfig = {
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    style?: React.CSSProperties;
    showCloseButton?: boolean;
};

// context to access config anywhere
const ToastContext = createContext<ToastConfig>({});

export const ToastProvider: React.FC<{
    children: React.ReactNode;
    config?: ToastConfig;
}> = ({ children, config }) => {
    return (
        <ToastContext.Provider value={config || {}}>
            {children}

            <Toaster
                duration={config?.duration ?? 3000}
                position={config?.position ?? "top-right"}
                closeButton={config?.showCloseButton ?? true}
                toastOptions={{
                    style: {
                        borderRadius: "12px",
                        padding: "14px 18px",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        backdropFilter: "blur(8px)",
                        boxShadow:
                            "0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)",
                        ...config?.style, // allow custom overrides
                    },
                }}
            />
        </ToastContext.Provider>
    );
};

export const useToastConfig = () => useContext(ToastContext);
