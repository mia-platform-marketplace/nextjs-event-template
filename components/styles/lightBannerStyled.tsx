'use client'

import { styled } from '@mui/system'

export const LightBannerStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    color: theme.palette.grey[900],
    '.title-light-banner': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '100px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '64px 16px'
        },
    },
    '.subtitle-light-banner': {
        color: theme.palette.grey[600]
    },
    '.light-banner-button-container': {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '24px',
    },
    '.image-balls': {
        width: '20%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '30%',
        },
    }
}))
