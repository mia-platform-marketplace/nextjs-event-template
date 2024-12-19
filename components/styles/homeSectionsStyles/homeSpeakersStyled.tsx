'use client'

import { styled } from '@mui/system'

export const HomeSpeakersStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[900],
    padding: '80px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        padding: '64px 0px',
        gap: '32px'
    },
    '.title-speakers': {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '44px',
        [theme.breakpoints.down('md')]: {
            padding: '0px 16px',
            gap: '32px'
        }
    },
    '.speakers-button': {
        textAlign: 'center'
    },

    '.speakers-grid-container': {
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 0px 0px 0px',
        [theme.breakpoints.down('md')]: {
            padding: '25px 0px 0px 0px',
            justifyContent: 'start'
        }
    },

    '.speakers-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        maxWidth: '1176px',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '8px',
        }
    }
}))
