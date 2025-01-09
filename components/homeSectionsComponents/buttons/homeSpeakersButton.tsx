'use client'
import React from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import IconSvg from '../../reusableComponents/iconSvg';


const HomeSpeakersButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/speakers')} endIcon={<IconSvg name='arrow-right.svg' height={20} width={20} />} variant='contained' color='secondary'>Speakers 2024</Button>
    )
}

export default HomeSpeakersButton;
