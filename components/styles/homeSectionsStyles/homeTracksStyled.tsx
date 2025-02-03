'use client'

import { styled } from '@mui/system'

export const HomeTracksStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '0px 0px 125px 0px',
    [theme.breakpoints.down('md')]: {
        padding: '64px 16px 0px 16px',
    },
    color: theme.palette.grey[900],
    '.title-tracks': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '100px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '25px',
        },
    },

    '.tracks-grid-container': {
        display: 'flex',
        justifyContent: 'center',
    },

    '.tracks-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        width: 'max-content',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '8px',
            width: '100%'
        },
    },

    '.tracks-title': {
        display: 'flex',
        flexDirection: 'column',
        wordBreak: 'keep-all'
    }
}))
