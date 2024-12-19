'use client'

import { styled } from '@mui/system'

export const AboutNumberReportStyled = styled('div')(({ theme }) => ({
    background: theme.palette.grey[50],
    display: 'flex',
    justifyContent: 'center',
    gap: '0px',
    paddingBottom: '48px',
    [theme.breakpoints.down('sm')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '50px',
        justifyItems: 'center',
        '& > :first-child': {
            gridColumn: 'span 2',
            width: '100%',
            gap: '10px'
        },

    },
}))
