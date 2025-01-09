import React from 'react'
import Marquee from 'react-fast-marquee'
import { AboutGalleryStyled } from '../styles/aboutSectionsStyles/aboutGalleryStyled'
import { Typography } from '@mui/material'
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

const AboutGallery = ({
  gallery
}: {
  gallery: any[] | undefined
}) => {

  return (
    <>
      <AboutGalleryStyled>
        <div className='gallery-description'>
          <Typography variant='bodyM' sx={{
            color: '#FFFFFF'
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
        <Marquee>
          {gallery && sortArrayByPosition(gallery).map(async (image: any, index: any) => {
            const fileURL = `${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${image?.file?.file}`
            if (image.position % 2 === 0) {
              return <img key={index} src={fileURL} alt={`image [${image.position}]`} className='image-up' />
            }
            return <img key={index} src={fileURL} alt={`image [${image.position}]`} className='image-down' />
          })}
        </Marquee>
      </AboutGalleryStyled>
    </>
  )
}

export default AboutGallery;
