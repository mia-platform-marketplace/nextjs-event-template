'use client'
import React from 'react'
import { Typography } from '@mui/material';
import NoBackgroundButton from '../../../lib/MUIutils/noBackgroundButton';
import { useRouter } from 'next/navigation';


const AllSpeakersButton = () => {
    const router = useRouter();

    return (
        <NoBackgroundButton
            iconAtTheStart
            icon={'arrow-left.svg'}
            height={20}
            width={20}
            onClick={() => router.push('/speakers')}
        >
            <Typography variant='bodyXSSemibold'>ALL SPEAKERS</Typography>
        </NoBackgroundButton>
    )
}

export default AllSpeakersButton;
