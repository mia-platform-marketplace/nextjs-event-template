'use client'

import { styled } from '@mui/system'

export const StickyNavBarStyled = styled('div')(({ theme }) => ({
    flex: '1 0 0',
    background: theme.palette.grey['25'],
    borderRadius: '16px',
    padding: '16px',
    margin: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: 'calc(100% - 114px)',
    zIndex: 2,
    boxShadow: '0px 4px 10px 1px #39208529',

    [theme.breakpoints.down('md')]: {
        margin: '16px',
        width: 'calc(100% - 64px)',
    },

    '.event-logo': {
        '@media (max-width: 600px)': {
            width: '100%',
            height: 'auto'
        },
    },

    '.desktop-navbar': {
        display: 'flex',
        height: '46px',
        padding: '0px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '4px',
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },

    '.desktop-navbar-button': {
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },

    '.mobile-navbar': {
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    }
}))
