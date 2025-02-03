'use client'

import { styled } from '@mui/system'

export const TalkChipStyled = styled('div')(({ theme }) => ({
    '.talk-chip-content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },

    '.talk-chip-title': {
        color: theme.palette.primary[200]
    },

    '.talk-chip': {
        padding: '0px 8px',
        borderRadius: '30px',
        width: 'fit-content',
        background: theme.palette.grey[100],
        color: theme.palette.grey[800],
        textTransform: 'uppercase'
    }
}))
