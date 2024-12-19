'use client'

import { styled } from '@mui/system'

export const DarkHeaderStyled = styled('div')(({ theme }) => ({
    background: theme.palette.gradient[100],
    '.title-header': {
        color: '#FFFFFF',
    },
    '.supertitle-header': {
        minHeight: '330px',
        color: theme.palette.primary['100'],
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '0px 0px 80px 0px',
        textAlign: 'center',
        justifyContent: 'end'
    },
    '.image-sphere': {
        width: '25%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
    }
}))
