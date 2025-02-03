'use client'
import React from 'react'
import { TracksCardStyled } from '../styles/tracksCardStyled';
import MultiLayerLayout from './multiLayerLayout';
import { useMediaQuery } from '@mui/material';
import { TrackCardType } from '../../lib/types';

const TracksCard = ({ children, image, backgroundColor }: TrackCardType) => {

    const isMedium = useMediaQuery((theme: any) => theme.breakpoints.down('md'))

    return (
        <TracksCardStyled>
            <MultiLayerLayout
                containerStyle={
                    isMedium ?
                        {
                            width: 'auto',
                            height: 'auto',
                            background: backgroundColor,
                            borderRadius: '8px'
                        } :
                        {
                            width: '370px',
                            height: '410px',
                            background: backgroundColor,
                            borderRadius: '8px'
                        }}
                secondLayerDiv={
                    <div style={{ width: '100%', height: 'auto' }}>
                        {image}
                    </div>
                }
            >
                <div className='tracks-content'>
                    {children}
                </div>
            </MultiLayerLayout>
        </TracksCardStyled>
    )
}

export default TracksCard
