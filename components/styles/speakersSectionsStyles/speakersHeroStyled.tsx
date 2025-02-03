'use client'

import { styled } from '@mui/system'

export const SpeakersHeroStyled = styled('div')(({ theme }) => ({

    '.hero-container': {
        background: theme.palette.grey[50],
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backgroundImage: 'url("/assets/images/balls-placeholder.png")',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        [theme.breakpoints.down('md')]: {
            padding: '180px 0px 50px 0px',
            alignItems: 'center',
            textAlign: 'center',
            backgroundImage: 'url("/assets/images/balls-placeholder.png")',
            backgroundSize: '50%',
        },
        padding: '180px 50px 50px 50px',
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
        height: '110px',
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderRadius: '8px',
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0px',
            alignSelf: 'center',
        },
    },

    '.hero-footer': {
        background: theme.palette.gradient[100],
        height: '10px',
        width: '100%',
        marginTop: 'auto'
    },


    '@media (max-width: 600px)': {
        '.responsive-break': {
            display: 'none',
        }
    },
}))
