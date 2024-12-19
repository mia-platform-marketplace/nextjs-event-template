
import { SwipeableDrawer } from '@mui/material'
import { styled } from '@mui/system'


export const SpeakerDetailStyled = styled(SwipeableDrawer)(({ theme }) => ({
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        }
    },

    '.MuiDrawer-paper': {
        animation: 'fadeIn 0.5s ease-out forwards'
    },

    '& .MuiPaper-root': {
        height: '100%',
        width: '50%',
        background: theme.palette.primary['900']
    },

    '& .MuiBox-root': {

    },

    '& .MuiDivider-root': {
        background: theme.palette.gradient[50],
        height: '8px'
    },

    '.info-details-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        padding: '52px 40px',
        color: theme.palette.primary['50']
    },

    '.info-details-section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    '.talks-details-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        padding: '52px 40px',
        color: theme.palette.primary['50']
    },

    '.talk-details-section': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    '.talks-list': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },

    '.socials-container': {
        display: 'flex',
        gap: '12px'
    },

    '.main-info': {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 343px)'
    },

    '.card-main-content-container': {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        background: 'white'
    },

    '.close-button-container': {
        height: '82px',
        textAlign: 'end',
        padding: '8px'
    },

    '.info-container': {
        display: 'flex',
        width: '288px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '30px'
    },

    '.speaker-info': {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },

    '.image-speaker': {
        width: '330px',
        height: '330px'
    }
}))