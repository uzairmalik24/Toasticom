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

export const toast = (type: ToastType, message: string) => {
    sonnerToast(message, {
        icon: typeStyles[type].icon,
        style: typeStyles[type].style
    });
};
