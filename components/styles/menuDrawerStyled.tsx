
import { SwipeableDrawer } from '@mui/material'
import { styled } from '@mui/system'


export const MenuDrawerStyled = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: theme.palette.primary['900'],
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },

    '& .MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },

    '& .MuiList-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    '& .MuiListItemButton-root': {
        textAlign: 'center',
        padding: '32px'
    },

    '& .MuiDivider-root': {
        background: theme.palette.primary['700'],
        width: '70%'
    },

    '.register-button': {
        padding: '16px'
    },

    '.mia-platform-logo': {
        display: 'flex',
        gap: '16px 8px',
        color: theme.palette.primary['200'],
        alignItems: 'end',
        justifyContent: 'center',
        padding: '8px'
    },

    '.close-button-container': {
        display: 'flex',
        justifyContent: 'end',
        padding: '16px',
        margin: '16px',
    },

    '.close-button-border': {
        border: `2px solid ${theme.palette.primary['200']}`,
        width: 'min-content',
        borderRadius: '10px'
    }
}))