'use client'

import { styled } from '@mui/system'

export const InsideTheTalkBannerStyled = styled('div')(({ theme }) => ({
    padding: '160px 40px 32px 40px',
    background: theme.palette.grey[50],

    [theme.breakpoints.down('md')]: {
        padding: '152px 0px 48px 0px',
    },

    '.go-back-button': {
        display: 'flex',
        justifyContent: 'start',
        [theme.breakpoints.down('md')]: {
            padding: '0px 16px'
        },
    },

    '.hero-grid-container': {
        display: 'grid',
        maxWidth: '1176px',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateAreas:
            `"info-event info-event info-event title-container title-container title-container title-container title-container title-container . . ."`,
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '0px'
        },
    },

    '.info-event': {
        display: 'flex',
        gap: '24px',
        width: '100%',
        maxWidth: '1176px',
    },

    '.title-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '576px',
        [theme.breakpoints.down('md')]: {
            gap: '4px',
            padding: '48px 16px',
            width: 'auto'
        },
    },

    '.hero-container': {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'start',
            padding: '0px 16px'
        },
    },

    '.info-event-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '188px',
        alignSelf: 'center',
        [theme.breakpoints.down('md')]: {
            alignSelf: 'start',
            padding: '0px 16px'
        },
    },

    '.track-chip': {
        padding: '0px 8px',
        borderRadius: '30px',
        width: 'fit-content',
        textTransform: 'uppercase'
    },

}))
