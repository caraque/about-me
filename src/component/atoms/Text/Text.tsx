import React, {CSSProperties} from "react";

export function Text({children, style, className}: { children: string, style?: CSSProperties, className?: string }) {
    return (
        <div style={style} className={className}>{children}</div>
    )
}
