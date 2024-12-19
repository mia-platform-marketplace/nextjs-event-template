'use client'

import { styled } from '@mui/system'


export const SponsorsTextSectionStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',

    '.text-info-sponsors': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    '.sponsors-logos-container': {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingBottom: '32px',
        gap: '32px',
        color: theme.palette.grey['600'],
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            alignItems: 'center'
        },
    },

    '.sponsors-logos': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            gap: '8px',
        },
    },

    '.logo': {
        background: '#FFFFFF',
        width: '176px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
