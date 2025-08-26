// toast.tsx
import React from "react";
import { toast as sonnerToast } from "sonner";
import {
    FiCheckCircle,
    FiXCircle,
    FiAlertTriangle,
    FiInfo
} from "react-icons/fi";

export type ToastType = "success" | "error" | "warning" | "info";

const typeStyles: Record<ToastType, { icon: React.ReactNode; style: React.CSSProperties }> = {
    success: {
        icon: <FiCheckCircle className="w-5 h-5 text-green-500" />,
        style: { background: "#16a34a", color: "#fff" } // green
    },
    error: {
        icon: <FiXCircle className="w-5 h-5 text-red-500" />,
        style: { background: "#dc2626", color: "#fff" } // red
    },
    warning: {
        icon: <FiAlertTriangle className="w-5 h-5 text-yellow-500" />,
        style: { background: "#ca8a04", color: "#fff" } // yellow
    },
    info: {
        icon: <FiInfo className="w-5 h-5 text-blue-500" />,
        style: { background: "#2563eb", color: "#fff" } // blue
    }
};

// Helper function to merge styles selectively
const mergeStyles = (
    baseStyle: React.CSSProperties,
    customStyle?: React.CSSProperties
): React.CSSProperties => {
    if (!customStyle) return baseStyle;

    // Only override the properties that are explicitly provided in customStyle
    const mergedStyle = { ...baseStyle };

    Object.keys(customStyle).forEach(key => {
        const styleKey = key as keyof React.CSSProperties;
        if (customStyle[styleKey] !== undefined) {
            (mergedStyle as any)[styleKey] = customStyle[styleKey];
        }
    });

    return mergedStyle;
};

// Global config store to avoid using hooks
let globalToastConfig: { toastStyle?: React.CSSProperties } = {};

export const setGlobalToastConfig = (config: { toastStyle?: React.CSSProperties }) => {
    globalToastConfig = config;
};

export const toast = (
    type: ToastType,
    message: string,
    customStyle?: React.CSSProperties
) => {
    // Get base style for the toast type
    const baseStyle = typeStyles[type].style;

    // Merge with global config and custom styles
    const withGlobalConfig = mergeStyles(baseStyle, globalToastConfig.toastStyle);
    const finalStyle = mergeStyles(withGlobalConfig, customStyle);

    sonnerToast(message, {
        icon: typeStyles[type].icon,
        style: finalStyle
    });
};