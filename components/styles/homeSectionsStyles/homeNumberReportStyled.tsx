'use client'

import { styled } from '@mui/system'

export const HomeNumberReportStyled = styled('div')(({ theme }) => ({
    paddingBottom: '100px',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '100px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '0px 25px 25px 25px',
    }
}))
