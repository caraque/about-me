import React, {CSSProperties} from "react";

export function Text({children, style, className, id}: { children: string, style?: CSSProperties, className?: string, id?: string }) {
    return (
        <div style={style} className={className} key={id}>{children}</div>
    )
}
