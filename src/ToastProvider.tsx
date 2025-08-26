import React, { createContext, useContext } from "react";
import { Toaster } from "sonner";

export type ToastConfig = {
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    style?: React.CSSProperties; // For Toaster container styles
    toastStyle?: React.CSSProperties; // For individual toast styles
    showCloseButton?: boolean;
};

// Default base styles that should always be applied unless overridden
const DEFAULT_BASE_STYLES: React.CSSProperties = {
    borderRadius: "12px",
    padding: "14px 18px",
    fontSize: "0.95rem",
    fontWeight: 500,
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)",
};

// Helper function to merge styles selectively (same as in toast.tsx)
const mergeStyles = (
    baseStyle: React.CSSProperties,
    customStyle?: React.CSSProperties
): React.CSSProperties => {
    if (!customStyle) return baseStyle;

    const mergedStyle = { ...baseStyle };

    Object.keys(customStyle).forEach(key => {
        const styleKey = key as keyof React.CSSProperties;
        if (customStyle[styleKey] !== undefined) {
            (mergedStyle as any)[styleKey] = customStyle[styleKey];
        }
    });

    return mergedStyle;
};

const ToastContext = createContext<ToastConfig>({});

export const ToastProvider: React.FC<{
    children: React.ReactNode;
    config?: ToastConfig;
}> = ({ children, config }) => {
    // Merge default styles with custom styles selectively
    const toasterStyles = mergeStyles(DEFAULT_BASE_STYLES, config?.style);

    return (
        <ToastContext.Provider value={config || {}}>
            {children}

            <Toaster
                duration={config?.duration ?? 3000}
                position={config?.position ?? "top-right"}
                closeButton={config?.showCloseButton ?? true}
                toastOptions={{
                    style: toasterStyles,
                }}
            />
        </ToastContext.Provider>
    );
};

export const useToastConfig = () => useContext(ToastContext);
