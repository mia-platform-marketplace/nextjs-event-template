'use client'

import { styled } from '@mui/system'

export const HomeNumberComponentStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '100px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
        gap: '25px',
    },
}))
