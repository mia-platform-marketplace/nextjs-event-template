'use client'

import { styled } from '@mui/system'

export const LogoCardStyled = styled('div')(({ theme }) => ({
    background: '#FFFFFF',
    width: '176px',
    height: '52px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: theme.palette.primary['50'],
        cursor: 'pointer',
    },
}))
