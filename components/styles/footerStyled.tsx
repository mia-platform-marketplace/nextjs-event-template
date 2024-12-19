'use client'

import { styled } from '@mui/system'

interface FooterStyledProps { }

export const FooterStyled = styled('div')<FooterStyledProps>(({ theme }) => ({
    background: theme.palette.grey[900],
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        padding: '50px 16px 0px 16px',
        flexDirection: 'column',
        gap: '16px'
    },

    '.image-plarmosphere': {
        width: '281px',
        height: 'auto',
        marginLeft: '-10px',
    },

    '.references': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '52px 156px',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            flexDirection: 'column',
            gap: '36px'
        },
    },

    '.logo': {
        display: 'flex',
        gap: '8px',
        color: theme.palette.primary['200'],
        alignItems: 'end'
    },

    '.references-socials': {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        [theme.breakpoints.down('md')]: {
            gap: '16px',
            marginBottom: '32px'
        },
    },

    '.end-of-footer': {
        display: 'flex',
        gap: '10%',
        justifyContent: 'space-between',
        padding: '52px 156px',
        borderTop: `1px solid ${theme.palette.primary[950]}`,
        [theme.breakpoints.down('md')]: {
            borderTop: 'none',
            flexDirection: 'column',
            gap: '8px',
            padding: '0px 0px 52px 0px'
        },
    },

    '.social-media-container': {
        display: 'flex',
        gap: '8px',
        justifyContent: 'end',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'start',
        },
    },

    '.copyright': {
        color: theme.palette.primary[200],
        [theme.breakpoints.down('md')]: {
            padding: '0px 0px 25px 0px'
        },
    }
}))
