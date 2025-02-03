import React from 'react'
import { Typography } from '@mui/material';
import { GalleryHeroStyled } from '../styles/gallerySectionsStyles/galleryHeroStyled';
import theme from '../../lib/MUIutils/theme';


const Hero = () => {
    return (
        <>
            <GalleryHeroStyled>
                <Typography variant='h1' sx={{
                    color: theme.palette.grey[600],
                    letterSpacing: '0.1em'
                }}
                > GALLERY 2024</Typography>
                <Typography variant='h3' sx={{ letterSpacing: '0.1em' }}>Live the <span className="responsive-break"><br /></span>Placeholder</Typography>
            </GalleryHeroStyled>
        </>
    )
}

export default Hero;
