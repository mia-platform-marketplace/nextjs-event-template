'use client'

import { styled } from '@mui/system'

export const HomeHeroStyled = styled('div')(({ theme }) => ({
    padding: '210px 100px 100px ',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',

    [theme.breakpoints.down('md')]: {
        padding: '125px 32px 32px',
    },

    '.hero-image': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    '.text-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            gap: '16px',
        }
    },

    '.text-info': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
    },

    '.text-date': {
        display: 'flex',
        gap: '4px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    }

}))
