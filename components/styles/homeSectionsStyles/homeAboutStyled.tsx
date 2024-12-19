'use client'

import { styled } from '@mui/system'

export const HomeAboutStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '64px 36px'
    },

    '.container': {
        maxWidth: '1170px',
        gap: '60px',
        display: 'flex',
        flexDirection: 'column',
    },

    '.description-container': {
        alignSelf: 'flex-start'
    }
}))
