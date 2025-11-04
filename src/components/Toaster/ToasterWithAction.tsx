import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export interface ToasterWithActionsProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onFinishToast?: () => void;
  duration?: number;
}

export function ToasterWithActions({
  title,
  description,
  actionLabel,
  onAction,
  onFinishToast,
  duration = 3000,
}: ToasterWithActionsProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onFinishToast?.();
    }, duration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [duration, onFinishToast]);

  const handleAction = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onAction?.();
    toast("Ação desfeita");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <strong style={{ fontSize: "14px", lineHeight: "20px" }}>
          {title}
        </strong>
        {description && (
          <span
            style={{ fontSize: "12px", color: "#C2C2C2", lineHeight: "16px" }}
          >
            {description}
          </span>
        )}
      </div>

      {actionLabel && (
        <button
          onClick={handleAction}
          style={{
            color: "#0EA5E9",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "12px",
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
