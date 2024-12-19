import React from 'react'

export default function MultiLayerLayout({
    children,
    containerStyle,
    childrenStyle = {},
    secondLayerDiv
}: {
    children: React.ReactNode
    containerStyle: Record<string, any>
    childrenStyle?: Record<string, any>
    secondLayerDiv: any
}) {
    return (
        <div style={{ ...containerStyle, position: 'relative', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            >
                {secondLayerDiv}
            </div>
            <div style={{
                ...childrenStyle,
                position: 'relative',
                zIndex: 1,
            }}>
                {children}
            </div>
        </div>
    )
}
