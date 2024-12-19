'use client'

import { styled } from '@mui/system'

interface HeaderStyledProps {
    backgroundImageUrl?: string;
}

export const HeaderStyled = styled('div')<HeaderStyledProps>(({ theme, backgroundImageUrl }) => ({
    background: theme.palette.grey[50],
    padding: '180px 50px 50px 50px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundImage: backgroundImageUrl ? `url("${backgroundImageUrl}")` : 'none',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    [theme.breakpoints.down('sm')]: {
        padding: '180px 0px 50px 0px',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/assets/images/balls-placeholder.png")',
        backgroundSize: '50%',
    },

    '.header': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row'
        },
    },

    '.text-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px'
    },

    '.text-info': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px'
    },

    '.location-container': {
        display: 'flex',
        height: '110px',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0px',
            alignSelf: 'center',
        },
    }

}))
