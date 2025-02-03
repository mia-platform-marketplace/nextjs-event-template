'use client'

import { styled } from '@mui/system'


export const SponsorsStyled = styled('div')(({ theme }) => ({
    '.sponsors-text-section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'start',
        width: '50%',
        padding: '5%',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            textAlign: 'center',
            gap: '8px',
        },
    },

    '.sponsors-form': {
        width: '50%',
        padding: '5%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            justifyContent: 'center',
        },
    },

    '.sponsors-content-container': {
        display: 'flex',
        background: theme.palette.grey[50],
        padding: '0px 0px 100px 0px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    }
}))
