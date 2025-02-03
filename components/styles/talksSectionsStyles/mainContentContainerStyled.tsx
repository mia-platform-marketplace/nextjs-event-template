'use client'

import { styled } from '@mui/system'

export const MainContentContainerStyled = styled('div')(({ theme }) => ({
  background: theme.palette.gradient[200],
  color: '#FFF',
  padding: '80px 40px 0px 40px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    padding: '24px 0px 80px 0px'
  },

  '.main-content-text-grid': {
    display: 'grid',
    width: '100%',
    maxWidth: '1176px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateAreas:
      `". . . abstract abstract abstract abstract abstract abstract . . ."`,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },

  '.main-content-text': {
    display: 'flex', gap: '40px', flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      padding: '36px 36px 0px 36px'
    },
  },

  '.talk-chip-container': {
    display: 'flex', gap: '80px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '64px',
      gap: '16px'
    },
  },

  '.speaker-wrapper': {
    '&:hover': {
      backgroundColor: 'rgba(239, 235, 252, 0.20)',
      cursor: 'pointer',
      borderRadius: '8px'
    },
  },

  '.speakers-talks-container': {
    maxWidth: '588px',
    paddingBottom: '80px',
    [theme.breakpoints.down('md')]: {
      padding: '0px 16px',
      alignSelf: 'start'
    },
  },

  '.speakers-talks': {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  }

}))
