'use client'
import React from 'react'
import { Typography } from '@mui/material';
import NoBackgroundButton from '../../../lib/MUIutils/noBackgroundButton';

const HomeEmotionalVideoButton = (
    {
        recapVideoUrl = ''
    }: {
        recapVideoUrl?: string
    }
) => {

    return (
        <NoBackgroundButton onClick={() => window.open(recapVideoUrl, '_blank')} icon='arrow-up-right.svg' darkMode={true} height={16} width={17}>
            <Typography variant='bodySAlt'>Watch 2024 video recap</Typography>
        </NoBackgroundButton>
    )
}

export default HomeEmotionalVideoButton;
