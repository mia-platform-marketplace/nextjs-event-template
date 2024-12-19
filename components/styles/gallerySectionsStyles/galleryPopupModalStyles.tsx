'use client';

import { styled } from '@mui/system';

export const GalleryPopupModalStyles = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary[950],
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',

    [theme.breakpoints.up('sm')]: {
        width: '800px',
        height: '600px',
        borderRadius: '10px',
    },

    '.close-modal': {
        display: 'flex',
        alignSelf: 'flex-end',
        top: '20px',
        right: '20px',
        cursor: 'pointer',
        background: 'transparent',
        border: `2px solid ${theme.palette.primary[200]}`,
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        transition: 'border-color 0.3s ease',
        margin: '60px 20px 0px 0px',
        '&:hover': {
            backgroundColor: theme.palette.primary[200],
            boxShadow: 'none',
            cursor: 'pointer',
        },

        [theme.breakpoints.up('sm')]: {
            top: '20px',
            right: '30px',
            width: '56px',
            height: '56px',
            fontSize: '32px',
            marginRight: '-200px',
            marginTop: '-20px',
        },
    },

    '.image-wrapper': {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '8px',

        [theme.breakpoints.up('sm')]: {
            padding: '16px',
        },
    },

    '.controller-wrapper': {
        position: 'absolute',
        bottom: '20px',
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '55px',

        [theme.breakpoints.up('sm')]: {
            padding: '8px',
        },
    },

    '.nav-button': {
        cursor: 'pointer',
        background: 'transparent',
        border: `2px solid ${theme.palette.primary[200]}`,
        width: '45px',
        height: '45px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box',

        '&:hover': {
            backgroundColor: 'rgba(239, 235, 252, 0.24)',
            boxShadow: 'none',
            cursor: 'pointer',
        },

        [theme.breakpoints.up('sm')]: {
            width: '56px',
            height: '56px',
            fontSize: '32px',
        },
    },

    '.download-button': {
        display: 'none',
        gap: '8px',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        color: theme.palette.primary[100],
        '&:hover': {
            boxShadow: 'none',
            cursor: 'pointer',
        },

        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },

    '.download-button-mobile': {
        display: 'flex',
        cursor: 'pointer',
        background: 'transparent',
        border: `2px solid ${theme.palette.primary[200]}`,
        width: '41px',
        height: '41px',
        borderRadius: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color 0.3s ease',
        color: theme.palette.primary[100],

        '&:hover': {
            backgroundColor: 'rgba(239, 235, 252, 0.24)',
            boxShadow: 'none',
            cursor: 'pointer',
        },

        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }

}));