'use client'

import { styled } from '@mui/system'

export const GalleryHeroStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '200px 50px 250px 50px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundImage: 'url("/assets/images/balls-placeholder.png")',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/assets/images/balls-placeholder.png")',
        backgroundSize: '50%',
    },

    '.text-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px'
    },

    '.text-info': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px'
    },

    '.location-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderRadius: '8px'
    },

    '@media (max-width: 600px)': {
        '.responsive-break': {
            display: 'none',
        }
    },

}))
