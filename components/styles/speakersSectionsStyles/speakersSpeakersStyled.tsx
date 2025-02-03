'use client'

import { styled } from '@mui/system'

export const SpeakersSpeakersStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    padding: '0px 0px 125px 30px',
    color: theme.palette.grey[900],
    [theme.breakpoints.down('md')]: {
        padding: '0px 0px 50px 0px',
    },


    '.speakers-grid-container': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: '100px 0px 0px 0px',
        [theme.breakpoints.down('md')]: {
            padding: '25px 0px 0px 0px',
            justifyContent: 'start'
        }
    },

    '.speakers-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '8px',
        }
    },

    '.speaker-wrapper': {
        '&:hover': {
            backgroundColor: theme.palette.primary['50'],
            cursor: 'pointer',
            borderRadius: '8px'
        },
    }
}))
