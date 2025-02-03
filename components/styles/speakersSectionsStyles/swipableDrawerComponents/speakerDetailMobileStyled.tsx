
import { SwipeableDrawer } from '@mui/material'
import { styled } from '@mui/system'


export const SpeakerDetailMobileStyled = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiPaper-root': {
        height: '100%',
        background: theme.palette.primary['900'],
        width: '100%',
        [theme.breakpoints.between('sm', 'md')]: {
            width: '400px'
        },
    },
    '& .MuiBox-root': {
    },

    '.info-details-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        padding: '0px 16px 32px 16px',
        color: theme.palette.primary['50']
    },

    '.info-details-section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'

    },

    '.socials-container': {
        display: 'flex',
        gap: '12px',
    },

    '.card-main-content-container': {
        display: 'flex',
        flexDirection: 'column'
    },

    '.close-button-container': {
        textAlign: 'end',
        padding: '32px'
    },

    '.info-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        padding: '32px 16px'
    },

    '.speaker-info': {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        color: theme.palette.grey['50']
    },

    '.image-speaker': {
        maxWidth: '600px',
        maxWeight: '600px'
    }
}))