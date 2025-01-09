import React from 'react'
import { HomeGalleryStyled } from '../styles/homeSectionsStyles/homeGalleryStyled';
import { Typography } from '@mui/material';
import getConfig from 'next/config';
import HomeGalleryButton from './buttons/homeGalleryButton';
import { FileServiceFileType } from '../../lib/types';

const { publicRuntimeConfig } = getConfig()

const HomeGallery = ({ galleryImage }: { galleryImage?: FileServiceFileType }) => {
    return (
        <HomeGalleryStyled>
            <div className='title-gallery'>
                <Typography variant='h3'>Placeholder</Typography>
                <div className='gallery-button'>
                    <HomeGalleryButton />
                </div>
            </div>
            <div>
                <img
                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}${galleryImage?.file}`}
                    alt="Gallery 2024"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </HomeGalleryStyled>
    )
}

export default HomeGallery