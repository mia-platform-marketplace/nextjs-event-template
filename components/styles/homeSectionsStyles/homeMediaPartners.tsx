'use client'

import { styled } from '@mui/system'

export const HomeMediaPartnersStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.grey[50],
    color: theme.palette.grey[900],
    alignItems: 'center',
    paddingBottom: '80px',
    [theme.breakpoints.down('md')]: {
        paddingBottom: '100px 25px',
    },
    gap: '48px',
    '.title-media-partners': {
        display: 'flex',
        maxWidth: '1170px',
        flexDirection: 'column',
        gap: '40px',
        textAlign: 'center',
    },

    '.media-partners-logos-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    '.media-partners-logos': {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
        },
    }
}))
