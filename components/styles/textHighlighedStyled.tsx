'use client'

import { styled } from '@mui/system'

interface TextHighlightedStyledProps {
    variant?: string;
    highlightColor?: string
    containerStyle?: any
}

export const TextHighlightedStyled = styled('div')<TextHighlightedStyledProps>(({ theme, variant, containerStyle, highlightColor = 'default' }) => ({
    display: 'inline-block',
    position: 'relative',
    width: 'fit-content',
    ...containerStyle,


    '.text-highlighted-text': {
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
    },


    '.text-highlighted-line': {
        position: 'absolute',
        left: 0,
        right: 0,
        top: variant === 'bodyStickyNavBarSelected' ? '53%' : '65%',
        height: variant === 'bodyStickyNavBarSelected' ? '30%' : '25%',
        backgroundColor: highlightColor === 'default' ? theme.palette.primary[200] : highlightColor,
        zIndex: 0
    }
}))