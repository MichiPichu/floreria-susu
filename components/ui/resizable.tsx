"use client";

import React, { useRef, useState } from "react";
import { cn } from "./utils";

export function ResizablePanelGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full w-full overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function ResizablePanel({
  children,
  defaultSize = 300,
  className,
}: {
  children: React.ReactNode;
  defaultSize?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(defaultSize);

  const startResize = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = width;

    const onMouseMove = (e: MouseEvent) => {
      setWidth(startWidth + (e.clientX - startX));
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={ref}
      style={{ width }}
      className={cn("relative h-full shrink-0", className)}
    >
      {children}
      <div
        onMouseDown={startResize}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-border"
      />
    </div>
  );
}
