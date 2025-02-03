'use client'
import React from 'react'
import { Typography } from '@mui/material';
import NoBackgroundButton from '../../../lib/MUIutils/noBackgroundButton';
import { useRouter } from 'next/navigation';


const HomeAboutReadMoreButton = () => {
    const router = useRouter();

    return (
        <NoBackgroundButton darkMode={false} onClick={() => router.push('/about')} icon='arrow-right.svg' height={20} width={20}><Typography variant='bodyLBold'>Read more</Typography></NoBackgroundButton>
    )
}

export default HomeAboutReadMoreButton;
