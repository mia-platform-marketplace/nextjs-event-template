'use client'

import { styled } from '@mui/system'

export const HomeGalleryStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[900],
    padding: '80px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        padding: '64px 0px',
        gap: '32px'
    },
    '.title-gallery': {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '44px',
        [theme.breakpoints.down('md')]: {
            padding: '0px 16px',
            gap: '32px'
        }
    },
    '.gallery-button': {
        textAlign: 'center'
    }
}))
