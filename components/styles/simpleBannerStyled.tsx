'use client'

import { styled } from '@mui/system'

export const SimpleBannerStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '0px 0px 125px 0px',
    color: theme.palette.grey[900],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '.title-banner': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '25px 0px',
        textAlign: 'center'
    },

    '.banner': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.grey[600],
        textAlign: 'center',
        gap: '40px',
        width: '740px',
        [theme.breakpoints.down('md')]: {
            width: '380px',
        },
    },

    '.sponser-link': {
        paddingTop: '20px'
    }
}))
