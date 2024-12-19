'use client'

import { maxWidth, styled, width } from '@mui/system'

export const AboutSustainabilityStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '0px 100px 125px 100px',
    color: theme.palette.grey[900],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '0px',
    },

    '.title-sustainability': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '100px 50px 50px 50px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
            padding: '100px 0px 50px 0px',
        },
    },

    '.sustainability-container': {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            display: 'flex',
            flexDirection: 'column-reverse',
            paddingBottom: '10px',
            alignItems: 'center'
        },
    },

    '.sustainability': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '40%',
        maxWidth: '540px',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            padding: '10px',
            paddingBottom: '50px'
        },
    },

    '.sustainability-title': {
        display: 'flex',
        flexDirection: 'column',
        wordBreak: 'keep-all'
    },

    '@media (max-width: 600px)': {
        '.responsive-break': {
            display: 'none',
        }
    },
}))
