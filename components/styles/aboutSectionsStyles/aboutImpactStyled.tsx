'use client'

import { styled } from '@mui/system'

export const AboutImpactStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '0px 0px 80px 0px',
    color: theme.palette.grey[900],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '.title-impact': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '80px 0px',
        textAlign: 'center'
    },

    '.impact-grid-container': {
        display: 'flex',
        justifyContent: 'center',
        padding: '100px 0px 0px 0px'
    },

    '.impact-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        width: 'max-content',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
        },
    },

    '.impact-button': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))
