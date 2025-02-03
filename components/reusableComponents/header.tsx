import React from 'react'
import { Typography } from '@mui/material';
import LocationCard from './locationCard';
import { HeaderStyled } from '../styles/headerStyled';


const Header = ({
    title = '',
    supertitle = '',
    backgroundImageUrl,
    eventInfo,
}: {
    title: string,
    supertitle: string,
    backgroundImageUrl?: string,
    eventInfo?: {
        eventCity: string,
        eventLocation: string,
        eventDate: string
    }
}) => {
    return (
        <HeaderStyled backgroundImageUrl={backgroundImageUrl}>
            <Typography variant='h1'>{supertitle}</Typography>
            <div className='header'>
                <Typography variant='h3'>{title}</Typography>
            </div>
            {eventInfo && <div className='location-container'>
                <LocationCard location={eventInfo} />
            </div>}
        </HeaderStyled>
    )
}

export default Header;
