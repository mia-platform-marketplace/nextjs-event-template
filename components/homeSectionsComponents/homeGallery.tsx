import React from 'react'
import { HomeGalleryStyled } from '../styles/homeSectionsStyles/homeGalleryStyled';
import { Typography } from '@mui/material';
import Image from 'next/image';
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
                <Image
                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${galleryImage?.file}`}
                    alt="Gallery 2024"
                    sizes="100vw"
                    height={0}
                    width={0}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </HomeGalleryStyled>
    )
}

export default HomeGallery