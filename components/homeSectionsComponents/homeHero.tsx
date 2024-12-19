import React from 'react'
import { Typography } from '@mui/material';
import TextHighlighted from '../reusableComponents/textHighlighted';
import { HomeHeroStyled } from '../styles/homeSectionsStyles/homeHeroStyled';
import Image from 'next/image';
import HomeHeroRegisterButton from './buttons/homeHeroRegisterButton';


const HomeHero = (
    {
        eventCity = '',
        eventLocation = '',
        eventDate = ''
    }: {
        eventCity?: string,
        eventLocation?: string,
        eventDate?: string
    }) => {

    return (
        <HomeHeroStyled>
            <div className='hero-image'>
                <Image
                    src="/assets/images/logo-onDark.svg"
                    alt="logo"
                    sizes="100vw"
                    height={250}
                    width={1178}
                    style={{ width: '100%', height: 'auto', maxWidth: '1176px' }}
                />
            </div>
            <div className='text-container'>
                <Typography variant='bodyLAltBold'>alt text</Typography>
                <div className='text-info'>
                    <TextHighlighted variant='bodyXXXLAltBlack'>Subtitle</TextHighlighted>
                    <div className='text-date'>
                        <Typography variant='bodyLSemibold'>{`${eventDate}  · `}</Typography>
                        <Typography variant='bodyL'>{`${eventCity}, ${eventLocation}`}</Typography>
                    </div>
                    <HomeHeroRegisterButton />
                </div>
            </div>
        </HomeHeroStyled>
    )
}

export default HomeHero;
