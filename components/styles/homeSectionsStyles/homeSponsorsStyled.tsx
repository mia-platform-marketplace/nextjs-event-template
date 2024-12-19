'use client'

import { styled } from '@mui/system'

export const HomeSponsorsStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    background: theme.palette.grey[50],
    color: theme.palette.grey[900],
    padding: '180px 152px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '16px',
        padding: '100px 25px',
    },

    '.meet-sponsors-container': {
        maxWidth: '1176px',
        display: 'flex',
        gap: '96px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '64px',
        },
    },

    '.title-sponsors': {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        textAlign: 'start',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            textAlign: 'center',
            gap: '8px',
        },
    },
    '.subtitle-sponsors': {
        color: theme.palette.grey[600]
    },

    '.sponsors-logos-container': {
        width: '50%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            justifyContent: 'center',
        },
    },

    '.sponsors-logos': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            gap: '8px',
        },
    }
}))
