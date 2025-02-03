'use client'

import { styled } from '@mui/system'

export const HomeEmotionalVideoStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[900],
    padding: '180px 0px 160px 0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        padding: '64px 0px',
        gap: '32px'
    },
    '.title-emotional-video': {
        textAlign: 'center',
    },
    '.watch-recap-button-container': {
        textAlign: 'center',
    }
}))
