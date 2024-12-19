import React from 'react'
import { LocationCardStyled } from '../styles/locationCardStyled';
import { Typography } from '@mui/material';



const LocationCard = ({ location }: any) => {

    return (
        <LocationCardStyled>
            <div className='title-content'>
                <Typography variant='h2'>WHEN & WHERE</Typography>
            </div>
            <div className='location-content'>
                <Typography variant='bodyS'>
                    <b>{location?.eventDate || ''}</b>
                </Typography>
                <Typography variant='bodyS'>
                    ·{location?.eventCity || ''}, {location?.eventLocation || ''}
                </Typography>
            </div>
        </LocationCardStyled>
    )
}

export default LocationCard
