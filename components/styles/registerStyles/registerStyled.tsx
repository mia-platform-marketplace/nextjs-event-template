'use client'

import { styled } from '@mui/system'


export const RegisterStyled = styled('div')(({ theme }) => ({
    '.register-text-section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        textAlign: 'start',
        width: '50%',
        padding: '5%',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            gap: '8px',
        },
    },

    '.register-form': {
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

    '.register-content-container': {
        display: 'flex',
        background: theme.palette.grey[50],
        padding: '0px 0px 100px 0px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    }
}))
