'use client'

import { styled } from '@mui/system'

export const LocationCardStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '580px',              
    height: '110px',       
    top: '350px',                
    left: '740px',               
    padding: '28px 40px',        
    gap: '4px',
    borderRadius: '8px',  
    background: '#FFFFFF66',    
    opacity: 1,                  
    backdropFilter: 'blur(80px)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        width: '90%',
        alignSelf: 'center',
        fontSize: '16px',
        gap: '12px',
    },
    
    '.title-content': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingBottom: '10px',
    },

    '.location-content': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px'
        },
    },
}))
