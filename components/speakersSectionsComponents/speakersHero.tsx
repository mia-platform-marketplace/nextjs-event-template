import React from 'react'
import { Typography } from '@mui/material';
import { SpeakersHeroStyled } from '../styles/speakersSectionsStyles/speakersHeroStyled';
import LocationCard from '../reusableComponents/locationCard';
import theme from '../../lib/MUIutils/theme';


const Hero = ({
    eventCity = '',
    eventLocation = '',
    eventDate = ''
}: {
    eventCity: string,
    eventLocation: string,
    eventDate: string
}) => {

    return (
        <>
            <SpeakersHeroStyled>
                <div className='hero-container'>
                    <Typography variant='h1' sx={{
                        color: theme.palette.grey[600],
                        letterSpacing: '0.1em'
                    }}
                    > SPEAKERS 2024</Typography>
                    <Typography variant='h3' sx={{ letterSpacing: '0.1em' }}>Meet the Speakers <span className="responsive-break"><br /></span>from Our Last Edition</Typography>
                    <div className='location-container'>
                        <LocationCard location={{ eventCity, eventLocation, eventDate }} />
                    </div>
                </div>
                <div className='hero-footer'></div>
            </SpeakersHeroStyled>
        </>
    )
}

export default Hero;
