'use client'

import { styled } from '@mui/system'

interface NumberReportStyledProps {
    darkMode?: boolean;
}

export const NumberReportStyled = styled('div')<NumberReportStyledProps>(({ theme, darkMode }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    width: '250px',
    [theme.breakpoints.down('md')]: {
        width: '150px',
    },

    '.first-child': {
        color: darkMode ? '#FFFFFF' : theme.palette.primary['700']
    },

    '.second-child': {
        color: darkMode ? theme.palette.primary['200'] : theme.palette.grey['600']
    }
}))
