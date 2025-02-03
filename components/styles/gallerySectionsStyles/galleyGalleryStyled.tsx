'use client';

import { styled } from '@mui/system';

export const GalleryGalleryStyled = styled('div')(({ theme }) => ({
  background: theme.palette.gradient[200],
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  padding: '40px',
  justifyItems: 'center',

  '& .infinite-scroll-component__outerdiv': {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },

  '.gallery-container': {
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
    gap: '0px',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, minmax(300px, 1fr))',
    },
  },

  '.galleryItem': {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      background: 'rgba(239, 235, 252, 0.14)',
    },
  },

  '.innerImageWrapper': {
    position: 'relative',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    overflow: 'hidden',
    borderRadius: '8px',
  },



  '.vertical': {
    gridRow: 'span 2',
    height: '386px',
  },

  '.horizontal': {
    height: '186px',
  },
}));

export const ModalGalleryStyled = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',

  [theme.breakpoints.down('sm')]: {
    background: theme.palette.primary[950],
  },

  '.modalContent': {
    position: 'relative',
    width: '800px',
    height: '600px',
    background: theme.palette.primary[950],
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
      borderRadius: '8px',
      padding: '10px',
    },
  },

  '.imageWrapper': {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20px',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      maxWidth: '80wv',
      maxHeight: '100wh',
    },

    '& img': {
      borderRadius: '4px',
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: '600px',
      },

    }
  },

  '@media (max-width: 768px)': {
    '.imageWrapper': {
      justifyContent: 'center',
      maxWidth: '100vw',
      maxHeight: '100vh',
    },

    '.imageWrapper img.portrait': {
      width: 'auto',
      height: '400px',
      marginTop: '-50px',
    },

    '.imageWrapper img.landscape': {
      width: '100%',
      height: 'auto',
    }
  },

  '.closeButton': {
    display: 'flex',
    alignSelf: 'flex-end',
    top: '150px',
    right: '30px',
    color: 'white',
    fontSize: '32px',
    cursor: 'pointer',
    background: 'transparent',
    border: `3px solid ${theme.palette.primary[200]}`,
    width: '56px',
    height: '56px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
    marginRight: '20px',

    [theme.breakpoints.down('sm')]: {
      margin: '60px 30px 0px 0px',
      right: '10px',
      width: '32px',
      height: '32px',
      fontSize: '20px',
    },
  },

  '.navigationContainer': {
    position: 'absolute',
    bottom: '20px',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',

    [theme.breakpoints.down('sm')]: {
      bottom: '10px',
      padding: '0 10px',
    },
  },

  '.downloadButton': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: '1000',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  '.icon-mobile': {
    color: 'white',
    cursor: 'pointer',
    background: 'transparent',
    border: `3px solid ${theme.palette.primary[200]}`,
    width: '50px',
    height: '50px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    margin: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },

  '.navButton': {
    color: 'white',
    fontSize: '32px',
    cursor: 'pointer',
    background: 'transparent',
    border: `3px solid ${theme.palette.primary[200]}`,
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    margin: '10px',

    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
      fontSize: '20px',
    },
  },
}));