'use client'

import { styled } from '@mui/system'

export const DarkBannerStyled = styled('div')(({ theme }) => ({

    background: theme.palette.gradient[100],
    color: '#FFFFFF',
    '.title-dark-banner': {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '60px 152px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '64px 16px',
            gap: '45px',
        },
    },

    '.dark-banner-content-text': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        [theme.breakpoints.down('md')]: {
            gap: '45px',
        },
    },

    '.subtitle-dark-banner': {
        color: theme.palette.primary['100']
    },

    '.image-balls': {
        width: '400px',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '300px',
        },
    }
}))
