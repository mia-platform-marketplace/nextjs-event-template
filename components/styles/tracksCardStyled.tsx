'use client'

import { styled } from '@mui/system'


interface TracksCardStyledProps { }


export const TracksCardStyled = styled('div')<TracksCardStyledProps>(({ theme }) => ({
    '.tracks-content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        color: '#FFFFFF',
        padding: '50px'
    },
}))
