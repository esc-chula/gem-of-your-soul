import React, { useEffect, useState } from "react"
export const ZoomWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className = "animate-zoom-in origin-center w-full h-full scale-150">
            {children}
        </div>
    );
}