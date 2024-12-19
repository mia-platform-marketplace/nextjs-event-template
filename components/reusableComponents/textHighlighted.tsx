import React from 'react'
import { TextHighlightedStyled } from '../styles/textHighlighedStyled'
import { Typography } from '@mui/material'

export default function TextHighlighted({
    children,
    disableHighlight = false,
    variant,
    highlightColor,
    containerStyle
}: {
    children: React.ReactNode
    disableHighlight?: boolean
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'bodyXLMedium' | 'bodyXXXLAltBlack' | 'bodyXS' | 'bodyStickyNavBar' | 'bodyL' | 'bodyXLBlack' | 'bodyLSemibold' | 'bodyLBold' | 'bodyStickyNavBarSelected'
    highlightColor?: string
    containerStyle?: any
}) {
    return (
        <TextHighlightedStyled variant={variant} highlightColor={highlightColor} containerStyle={containerStyle}>
            <div className={'text-highlighted-text'}><Typography variant={variant}>{children}</Typography></div>
            {!disableHighlight && <div className={'text-highlighted-line'}></div>}
        </TextHighlightedStyled>
    )
}

