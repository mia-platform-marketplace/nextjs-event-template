'use client'

import { styled } from '@mui/system'

export const AboutGalleryStyled = styled('div')(({ theme }) => ({
  background: theme.palette.gradient[200],
  paddingBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  alignItems: 'center',

  '.gallery-description': {
    padding: '100px 10px 0px 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40vw',
    gap: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: '100px 10px 50px 10px',
      width: '90%',
    },
  },

  '.image-up': {
    width: '300px',
    height: '500px',
    marginRight: '10px',
    marginBottom: '30px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      width: '120px',
      height: '200px',
    },
  },

  '.image-down': {
    width: '300px',
    height: '500px',
    marginRight: '10px',
    marginTop: '30px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      width: '120px',
      height: '200px',
    },
  }
}))
