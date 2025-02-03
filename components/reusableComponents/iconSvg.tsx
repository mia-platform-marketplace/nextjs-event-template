'use client'

import React, { useEffect, useState } from 'react'



const IconSvg = ({ name, style, height, width }: { name: string, style?: any, height?: any, width?: any }) => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(`/icons/${name}`);
                if (response.ok) {
                    const svgText = await response.text();
                    setSvgContent(svgText as any);
                } else {
                    console.error(`Failed to load SVG: /icons/${name}`);
                }
            } catch (error) {
                console.error(`Error fetching SVG: ${error}`);
            }
        };

        fetchSvg();
    }, [name]);

    return (
        <div
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height,
                width,
            }}
            dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
        />
    );
}

export default IconSvg
